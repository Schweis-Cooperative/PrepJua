import { useLocalStorage } from './useLocalStorage';
import type { MistakeEntry } from '../types/common';

export function useMistakeBook() {
  const [mistakes, setMistakes] = useLocalStorage<MistakeEntry[]>('mistakeBook', []);

  const addMistake = (entry: Omit<MistakeEntry, 'id' | 'date'>) => {
    setMistakes(prev => {
      // Avoid duplicate entries for same question
      const exists = prev.some(
        m => m.questionId === entry.questionId && m.topicId === entry.topicId
      );
      if (exists) return prev;

      return [
        ...prev,
        {
          ...entry,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        },
      ];
    });
  };

  const removeMistake = (id: string) => {
    setMistakes(prev => prev.filter(m => m.id !== id));
  };

  const clearMistakes = () => {
    setMistakes([]);
  };

  const getMistakesByType = (type: MistakeEntry['type']) => {
    return mistakes.filter(m => m.type === type);
  };

  return {
    mistakes,
    addMistake,
    removeMistake,
    clearMistakes,
    getMistakesByType,
  };
}
