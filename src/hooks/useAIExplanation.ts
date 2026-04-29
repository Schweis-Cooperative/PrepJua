import { useState, useCallback } from 'react';
import { getAIExplanation } from '../utils/ai';

export function useAIExplanation() {
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchExplanation = useCallback(
    async (correctAnswer: string, userAnswer: string, questionContext: string) => {
      setLoading(true);
      setError('');
      setExplanation('');
      try {
        const result = await getAIExplanation(correctAnswer, userAnswer, questionContext);
        setExplanation(result);
      } catch (err) {
        setError('Failed to get explanation. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setExplanation('');
    setError('');
    setLoading(false);
  }, []);

  return {
    explanation,
    loading,
    error,
    fetchExplanation,
    reset,
  };
}
