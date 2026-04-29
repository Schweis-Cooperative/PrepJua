import { useLocalStorage } from './useLocalStorage';
import { logActivity } from '../utils/logger';

export function useProgress() {
  const [learnedWords, setLearnedWords] = useLocalStorage<string[]>('learnedWords', []);
  const [completedGrammar, setCompletedGrammar] = useLocalStorage<Record<string, number>>('completedGrammar', {});
  const [completedUoe, setCompletedUoe] = useLocalStorage<Record<string, number>>('completedUoe', {});
  const [completedReading, setCompletedReading] = useLocalStorage<Record<string, number>>('completedReading', {});

  const toggleLearnedWord = (wordId: string) => {
    setLearnedWords(prev => {
      if (prev.includes(wordId)) {
        return prev.filter(id => id !== wordId);
      }
      return [...prev, wordId];
    });
  };

  const isWordLearned = (wordId: string) => learnedWords.includes(wordId);

  const removeLearnedWord = (wordId: string) => {
    setLearnedWords(prev => prev.filter(id => id !== wordId));
  };

  const completeGrammarTopic = (topicId: string) => {
    setCompletedGrammar(prev => ({
      ...prev,
      [topicId]: (prev[topicId] || 0) + 1,
    }));
    logActivity(`Completed Grammar Topic: ${topicId}`);
  };

  const completeUoeTest = (testId: string) => {
    setCompletedUoe(prev => ({
      ...prev,
      [testId]: (prev[testId] || 0) + 1,
    }));
    logActivity(`Completed UoE Test: ${testId}`);
  };

  const completeReadingTest = (testId: string) => {
    setCompletedReading(prev => ({
      ...prev,
      [testId]: (prev[testId] || 0) + 1,
    }));
    logActivity(`Completed Reading Test: ${testId}`);
  };

  return {
    learnedWords,
    toggleLearnedWord,
    isWordLearned,
    removeLearnedWord,
    completedGrammar,
    completeGrammarTopic,
    completedUoe,
    completeUoeTest,
    completedReading,
    completeReadingTest,
  };
}
