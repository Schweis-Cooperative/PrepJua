import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { getStorageItem, setStorageItemAsync } from '../utils/storage';
import { logActivity, logWordToggle } from '../utils/logger';
import { vocabularyData } from '../data/vocabularyData';
import type { StreakState, CustomCollection } from '../types/progress';
import { DEFAULT_PROGRESS } from '../types/progress';

// ─── Helpers ───────────────────────────────────────────────────────────

/** Get today's date as YYYY-MM-DD in the local timezone */
function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Check if two YYYY-MM-DD date strings are consecutive calendar days */
function isConsecutiveDay(prev: string, current: string): boolean {
  if (!prev) return false;
  const prevDate = new Date(prev + 'T00:00:00');
  const diff = new Date(current + 'T00:00:00').getTime() - prevDate.getTime();
  return diff === 86400000; // exactly 1 day in ms
}

// ─── Context Interface ─────────────────────────────────────────────────

interface ProgressContextType {
  // Vocabulary
  learnedWords: string[];
  toggleLearnedWord: (wordId: string) => void;
  removeLearnedWord: (wordId: string) => void;
  isWordLearned: (wordId: string) => boolean;
  // Module completion
  completedGrammar: Record<string, number>;
  completeGrammarTopic: (topicId: string) => void;
  completedUoe: Record<string, number>;
  completeUoeTest: (testId: string) => void;
  completedReading: Record<string, number>;
  completeReadingTest: (testId: string) => void;
  // Streak
  streak: StreakState;
  // Custom collections
  customCollections: CustomCollection[];
  createCollection: (name: string) => void;
  renameCollection: (id: string, newName: string) => void;
  deleteCollection: (id: string) => void;
  toggleWordInCollection: (collectionId: string, wordId: string) => void;
  isWordInCollection: (collectionId: string, wordId: string) => boolean;
  getCollectionsForWord: (wordId: string) => CustomCollection[];
  // Data portability
  exportData: () => string;
  importData: (json: string) => boolean;
  // Loading state
  isHydrated: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// ─── Provider ──────────────────────────────────────────────────────────

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // ── State (hydrated from localStorage synchronously for instant render) ──
  const [learnedWords, setLearnedWords] = useState<string[]>(
    () => getStorageItem('learnedWords', DEFAULT_PROGRESS.learnedWords)
  );
  const [completedGrammar, setCompletedGrammar] = useState<Record<string, number>>(
    () => getStorageItem('completedGrammar', DEFAULT_PROGRESS.completedGrammar)
  );
  const [completedUoe, setCompletedUoe] = useState<Record<string, number>>(
    () => getStorageItem('completedUoe', DEFAULT_PROGRESS.completedUoe)
  );
  const [completedReading, setCompletedReading] = useState<Record<string, number>>(
    () => getStorageItem('completedReading', DEFAULT_PROGRESS.completedReading)
  );
  const [streak, setStreak] = useState<StreakState>(
    () => getStorageItem('streak', DEFAULT_PROGRESS.streak)
  );
  const [customCollections, setCustomCollections] = useState<CustomCollection[]>(
    () => getStorageItem('customCollections', DEFAULT_PROGRESS.customCollections)
  );
  const [isHydrated, setIsHydrated] = useState(true);

  // Ref to debounce IndexedDB writes (batches rapid updates)
  const writeTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // ── Debounced async persist to IndexedDB ─────────────────────────────
  const persistAsync = useCallback((key: string, value: unknown) => {
    // Clear any pending write for this key
    if (writeTimers.current[key]) {
      clearTimeout(writeTimers.current[key]);
    }
    // Debounce: write after 300ms of inactivity
    writeTimers.current[key] = setTimeout(() => {
      setStorageItemAsync(key, value).catch((err) =>
        console.error(`[ProgressContext] Failed to persist "${key}":`, err)
      );
    }, 300);
  }, []);

  // ── Persist state changes (async, non-blocking via IndexedDB) ────────
  useEffect(() => { persistAsync('learnedWords', learnedWords); }, [learnedWords, persistAsync]);
  useEffect(() => { persistAsync('completedGrammar', completedGrammar); }, [completedGrammar, persistAsync]);
  useEffect(() => { persistAsync('completedUoe', completedUoe); }, [completedUoe, persistAsync]);
  useEffect(() => { persistAsync('completedReading', completedReading); }, [completedReading, persistAsync]);
  useEffect(() => { persistAsync('streak', streak); }, [streak, persistAsync]);
  useEffect(() => { persistAsync('customCollections', customCollections); }, [customCollections, persistAsync]);

  // ── Streak: update on first interaction of the day ───────────────────
  const recordActivity = useCallback(() => {
    const today = getTodayDate();
    setStreak(prev => {
      if (prev.lastActiveDate === today) {
        return prev; // Already active today, no change
      }
      const isConsecutive = isConsecutiveDay(prev.lastActiveDate, today);
      const newCurrent = isConsecutive ? prev.current + 1 : 1;
      const newLongest = Math.max(prev.longest, newCurrent);
      return {
        current: newCurrent,
        longest: newLongest,
        lastActiveDate: today,
      };
    });
  }, []);

  // Record streak on mount (user opened the app today)
  useEffect(() => {
    recordActivity();
  }, [recordActivity]);

  // ── Vocabulary ───────────────────────────────────────────────────────
  const toggleLearnedWord = useCallback((wordId: string) => {
    const wordEntry = vocabularyData.find(w => w.id === wordId);
    const wordText = wordEntry?.word || wordId;

    setLearnedWords(prev => {
      const wasLearned = prev.includes(wordId);
      const newValue = wasLearned ? prev.filter(id => id !== wordId) : [...prev, wordId];
      logWordToggle(wordId, wordText, !wasLearned);
      return newValue;
    });
    recordActivity();
  }, [recordActivity]);

  const removeLearnedWord = useCallback((wordId: string) => {
    setLearnedWords(prev => prev.filter(id => id !== wordId));
  }, []);

  const isWordLearned = useCallback(
    (wordId: string) => learnedWords.includes(wordId),
    [learnedWords]
  );

  // ── Module completion ────────────────────────────────────────────────
  const completeGrammarTopic = useCallback((topicId: string) => {
    setCompletedGrammar(prev => ({ ...prev, [topicId]: (prev[topicId] || 0) + 1 }));
    logActivity(`Completed Grammar Topic: ${topicId}`);
    recordActivity();
  }, [recordActivity]);

  const completeUoeTest = useCallback((testId: string) => {
    setCompletedUoe(prev => ({ ...prev, [testId]: (prev[testId] || 0) + 1 }));
    logActivity(`Completed UoE Test: ${testId}`);
    recordActivity();
  }, [recordActivity]);

  const completeReadingTest = useCallback((testId: string) => {
    setCompletedReading(prev => ({ ...prev, [testId]: (prev[testId] || 0) + 1 }));
    logActivity(`Completed Reading Test: ${testId}`);
    recordActivity();
  }, [recordActivity]);

  // ── Custom Collections ───────────────────────────────────────────────
  const createCollection = useCallback((name: string) => {
    const id = `col_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    setCustomCollections(prev => [
      ...prev,
      { id, name, wordIds: [], createdAt: new Date().toISOString() },
    ]);
    logActivity(`Created Collection: "${name}"`);
  }, []);

  const renameCollection = useCallback((id: string, newName: string) => {
    setCustomCollections(prev =>
      prev.map(c => (c.id === id ? { ...c, name: newName } : c))
    );
  }, []);

  const deleteCollection = useCallback((id: string) => {
    setCustomCollections(prev => prev.filter(c => c.id !== id));
    logActivity(`Deleted Collection: ${id}`);
  }, []);

  const toggleWordInCollection = useCallback((collectionId: string, wordId: string) => {
    setCustomCollections(prev =>
      prev.map(c => {
        if (c.id !== collectionId) return c;
        const has = c.wordIds.includes(wordId);
        return {
          ...c,
          wordIds: has
            ? c.wordIds.filter(w => w !== wordId)
            : [...c.wordIds, wordId],
        };
      })
    );
    recordActivity();
  }, [recordActivity]);

  const isWordInCollection = useCallback(
    (collectionId: string, wordId: string) => {
      const col = customCollections.find(c => c.id === collectionId);
      return col ? col.wordIds.includes(wordId) : false;
    },
    [customCollections]
  );

  const getCollectionsForWord = useCallback(
    (wordId: string) => customCollections.filter(c => c.wordIds.includes(wordId)),
    [customCollections]
  );

  // ── Data portability ─────────────────────────────────────────────────
  const exportData = useCallback(() => {
    const data = {
      learnedWords,
      completedGrammar,
      completedUoe,
      completedReading,
      streak,
      customCollections,
      timestamp: new Date().toISOString(),
      username: getStorageItem('username', 'User'),
    };
    return JSON.stringify(data, null, 2);
  }, [learnedWords, completedGrammar, completedUoe, completedReading, streak, customCollections]);

  const importData = useCallback((json: string) => {
    try {
      const data = JSON.parse(json);
      if (data.learnedWords) setLearnedWords(data.learnedWords);
      if (data.completedGrammar) setCompletedGrammar(data.completedGrammar);
      if (data.completedUoe) setCompletedUoe(data.completedUoe);
      if (data.completedReading) setCompletedReading(data.completedReading);
      if (data.streak) setStreak(data.streak);
      if (data.customCollections) setCustomCollections(data.customCollections);
      logActivity('Imported Progress Data');
      return true;
    } catch (e) {
      console.error('Failed to import data', e);
      return false;
    }
  }, []);

  // ── Render ───────────────────────────────────────────────────────────
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
      streak,
      customCollections,
      createCollection,
      renameCollection,
      deleteCollection,
      toggleWordInCollection,
      isWordInCollection,
      getCollectionsForWord,
      exportData,
      importData,
      isHydrated,
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
