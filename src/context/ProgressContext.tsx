import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { logActivity, logWordToggle } from '../utils/logger';
import { vocabularyData } from '../data/vocabularyData';

interface ProgressContextType {
  learnedWords: string[];
  toggleLearnedWord: (wordId: string) => void;
  removeLearnedWord: (wordId: string) => void;
  isWordLearned: (wordId: string) => boolean;
  completedGrammar: Record<string, number>;
  completeGrammarTopic: (topicId: string) => void;
  completedUoe: Record<string, number>;
  completeUoeTest: (testId: string) => void;
  completedReading: Record<string, number>;
  completeReadingTest: (testId: string) => void;
  exportData: () => string;
  importData: (json: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [learnedWords, setLearnedWords] = useState<string[]>(() => getStorageItem('learnedWords', []));
  const [completedGrammar, setCompletedGrammar] = useState<Record<string, number>>(() => getStorageItem('completedGrammar', {}));
  const [completedUoe, setCompletedUoe] = useState<Record<string, number>>(() => getStorageItem('completedUoe', {}));
  const [completedReading, setCompletedReading] = useState<Record<string, number>>(() => getStorageItem('completedReading', {}));

  // Sync to localStorage whenever state changes
  useEffect(() => { setStorageItem('learnedWords', learnedWords); }, [learnedWords]);
  useEffect(() => { setStorageItem('completedGrammar', completedGrammar); }, [completedGrammar]);
  useEffect(() => { setStorageItem('completedUoe', completedUoe); }, [completedUoe]);
  useEffect(() => { setStorageItem('completedReading', completedReading); }, [completedReading]);

  const toggleLearnedWord = useCallback((wordId: string) => {
    const wordEntry = vocabularyData.find(w => w.id === wordId);
    const wordText = wordEntry?.word || wordId;
    
    setLearnedWords(prev => {
      const wasLearned = prev.includes(wordId);
      const newValue = wasLearned ? prev.filter(id => id !== wordId) : [...prev, wordId];
      logWordToggle(wordId, wordText, !wasLearned);
      return newValue;
    });
  }, []);

  const removeLearnedWord = useCallback((wordId: string) => {
    setLearnedWords(prev => prev.filter(id => id !== wordId));
  }, []);

  const isWordLearned = useCallback((wordId: string) => learnedWords.includes(wordId), [learnedWords]);

  const completeGrammarTopic = useCallback((topicId: string) => {
    setCompletedGrammar(prev => ({ ...prev, [topicId]: (prev[topicId] || 0) + 1 }));
    logActivity(`Completed Grammar Topic: ${topicId}`);
  }, []);

  const completeUoeTest = useCallback((testId: string) => {
    setCompletedUoe(prev => ({ ...prev, [testId]: (prev[testId] || 0) + 1 }));
    logActivity(`Completed UoE Test: ${testId}`);
  }, []);

  const completeReadingTest = useCallback((testId: string) => {
    setCompletedReading(prev => ({ ...prev, [testId]: (prev[testId] || 0) + 1 }));
    logActivity(`Completed Reading Test: ${testId}`);
  }, []);

  const exportData = useCallback(() => {
    const data = {
      learnedWords,
      completedGrammar,
      completedUoe,
      completedReading,
      timestamp: new Date().toISOString(),
      username: getStorageItem('username', 'User')
    };
    return JSON.stringify(data, null, 2);
  }, [learnedWords, completedGrammar, completedUoe, completedReading]);

  const importData = useCallback((json: string) => {
    try {
      const data = JSON.parse(json);
      if (data.learnedWords) setLearnedWords(data.learnedWords);
      if (data.completedGrammar) setCompletedGrammar(data.completedGrammar);
      if (data.completedUoe) setCompletedUoe(data.completedUoe);
      if (data.completedReading) setCompletedReading(data.completedReading);
      logActivity('Imported Progress Data');
      return true;
    } catch (e) {
      console.error('Failed to import data', e);
      return false;
    }
  }, []);

  return (
    <ProgressContext.Provider value={{
      learnedWords,
      toggleLearnedWord,
      removeLearnedWord,
      isWordLearned,
      completedGrammar,
      completeGrammarTopic,
      completedUoe,
      completeUoeTest,
      completedReading,
      completeReadingTest,
      exportData,
      importData
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgressContext = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgressContext must be used within a ProgressProvider');
  }
  return context;
};
