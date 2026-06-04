import React, { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { getStorageItem, setStorageItemAsync } from '../utils/storage';
import { logActivity, logWordToggle } from '../utils/logger';
import { vocabularyData } from '../data/vocabularyData';
import type { StreakState, CustomCollection, SRSCard, ActivityEvent, QuizState } from '../types/progress';
import { DEFAULT_PROGRESS, LEITNER_INTERVALS } from '../types/progress';

// ─── Helpers ───────────────────────────────────────────────────────────

function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function isConsecutiveDay(prev: string, current: string): boolean {
  if (!prev) return false;
  const prevDate = new Date(prev + 'T00:00:00');
  const diff = new Date(current + 'T00:00:00').getTime() - prevDate.getTime();
  return diff === 86400000;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
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
  completedExams: Record<string, number>;
  completeExam: (examId: string) => void;
  completedUoe: Record<string, number>;
  completeUoeTest: (testId: string) => void;
  completedReading: Record<string, number>;
  completeReadingTest: (testId: string) => void;
  // Quiz state persistence
  quizStates: Record<string, QuizState>;
  saveQuizState: (testId: string, state: Omit<QuizState, 'testId' | 'updatedAt'>) => void;
  getQuizState: (testId: string) => QuizState | undefined;
  clearQuizState: (testId: string) => void;
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
  // SRS (Leitner)
  srsCards: SRSCard[];
  dueToday: SRSCard[];
  promoteWord: (wordId: string) => void;
  demoteWord: (wordId: string) => void;
  getSRSCard: (wordId: string) => SRSCard | undefined;
  // Activity history
  activityHistory: ActivityEvent[];
  // Data portability
  exportData: () => string;
  importData: (json: string) => boolean;
  isHydrated: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// ─── Provider ──────────────────────────────────────────────────────────

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [learnedWords, setLearnedWords] = useState<string[]>(
    () => getStorageItem('learnedWords', DEFAULT_PROGRESS.learnedWords)
  );
  const [completedGrammar, setCompletedGrammar] = useState<Record<string, number>>(
    () => getStorageItem('completedGrammar', DEFAULT_PROGRESS.completedGrammar)
  );
  const [completedExams, setCompletedExams] = useState<Record<string, number>>(
    () => getStorageItem('completedExams', DEFAULT_PROGRESS.completedExams)
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
  const [srsCards, setSrsCards] = useState<SRSCard[]>(
    () => getStorageItem('srsCards', DEFAULT_PROGRESS.srsCards)
  );
  const [activityHistory, setActivityHistory] = useState<ActivityEvent[]>(
    () => getStorageItem('activityHistory', DEFAULT_PROGRESS.activityHistory)
  );
  const [quizStates, setQuizStates] = useState<Record<string, QuizState>>(
    () => getStorageItem('quizStates', DEFAULT_PROGRESS.quizStates)
  );
  const [isHydrated, setIsHydrated] = useState(false);

  const writeTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Cloud Sync Push ──────────────────────────────────────────────────
  const syncToCloud = useCallback(() => {
    const username = getStorageItem('username', '');
    if (!username || username === 'Anonymous' || username === 'Unknown User') return;

    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(() => {
      const payload = {
        username,
        data: {
          learnedWords, completedGrammar, completedExams, completedUoe, completedReading,
          streak, customCollections, srsCards, activityHistory, quizStates,
        }
      };
      fetch('/api/sync/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.error('[Sync Push] Failed:', err));
    }, 2000); // Debounce cloud sync by 2 seconds
  }, [learnedWords, completedGrammar, completedExams, completedUoe, completedReading, streak, customCollections, srsCards, activityHistory, quizStates]);

  // ── Cloud Sync Pull (On Mount) ───────────────────────────────────────
  useEffect(() => {
    const username = getStorageItem('username', '');
    if (!username || username === 'Anonymous' || username === 'Unknown User') {
      setIsHydrated(true);
      return;
    }

    fetch(`/api/sync/pull/${encodeURIComponent(username)}`)
      .then(res => res.json())
      .then(res => {
        if (res.success && res.data) {
          if (res.data.learnedWords) setLearnedWords(res.data.learnedWords);
          if (res.data.completedGrammar) setCompletedGrammar(res.data.completedGrammar);
          if (res.data.completedExams) setCompletedExams(res.data.completedExams);
          if (res.data.completedUoe) setCompletedUoe(res.data.completedUoe);
          if (res.data.completedReading) setCompletedReading(res.data.completedReading);
          if (res.data.streak) setStreak(res.data.streak);
          if (res.data.customCollections) setCustomCollections(res.data.customCollections);
          if (res.data.srsCards) setSrsCards(res.data.srsCards);
          if (res.data.activityHistory) setActivityHistory(res.data.activityHistory);
          if (res.data.quizStates) setQuizStates(res.data.quizStates);
        }
      })
      .catch(err => console.error('[Sync Pull] Failed:', err))
      .finally(() => setIsHydrated(true));
  }, []);

  const persistAsync = useCallback((key: string, value: unknown) => {
    if (writeTimers.current[key]) clearTimeout(writeTimers.current[key]);
    writeTimers.current[key] = setTimeout(() => {
      setStorageItemAsync(key, value).catch((err) =>
        console.error(`[ProgressContext] Failed to persist "${key}":`, err)
      );
    }, 300);
  }, []);

  useEffect(() => { persistAsync('learnedWords', learnedWords); syncToCloud(); }, [learnedWords, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('completedGrammar', completedGrammar); syncToCloud(); }, [completedGrammar, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('completedExams', completedExams); syncToCloud(); }, [completedExams, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('completedUoe', completedUoe); syncToCloud(); }, [completedUoe, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('completedReading', completedReading); syncToCloud(); }, [completedReading, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('streak', streak); syncToCloud(); }, [streak, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('customCollections', customCollections); syncToCloud(); }, [customCollections, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('srsCards', srsCards); syncToCloud(); }, [srsCards, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('activityHistory', activityHistory); syncToCloud(); }, [activityHistory, persistAsync, syncToCloud]);
  useEffect(() => { persistAsync('quizStates', quizStates); syncToCloud(); }, [quizStates, persistAsync, syncToCloud]);

  // ── Activity history: record daily stats ─────────────────────────────
  const recordDailyActivity = useCallback((wordsLearned: number, reviewsDone: number) => {
    const today = getTodayDate();
    setActivityHistory(prev => {
      const existing = prev.find(e => e.date === today);
      if (existing) {
        return prev.map(e =>
          e.date === today
            ? { ...e, wordsLearned: e.wordsLearned + wordsLearned, reviewsDone: e.reviewsDone + reviewsDone }
            : e
        );
      }
      return [...prev, { date: today, wordsLearned, reviewsDone }];
    });
  }, []);

  // ── Streak ───────────────────────────────────────────────────────────
  const recordActivity = useCallback(() => {
    const today = getTodayDate();
    setStreak(prev => {
      if (prev.lastActiveDate === today) return prev;
      const isConsecutive = isConsecutiveDay(prev.lastActiveDate, today);
      const newCurrent = isConsecutive ? prev.current + 1 : 1;
      return { current: newCurrent, longest: Math.max(prev.longest, newCurrent), lastActiveDate: today };
    });
  }, []);

  useEffect(() => { recordActivity(); }, [recordActivity]);

  // ── SRS Engine ───────────────────────────────────────────────────────

  /** Words due for review today or earlier */
  const dueToday = useMemo(() => {
    const today = getTodayDate();
    return srsCards.filter(c => c.nextReviewDate <= today);
  }, [srsCards]);

  /** Promote a word to the next Leitner box (correct answer) */
  const promoteWord = useCallback((wordId: string) => {
    const today = getTodayDate();
    setSrsCards(prev => {
      const idx = prev.findIndex(c => c.wordId === wordId);
      if (idx === -1) {
        // New word — enter Box 1
        const interval = LEITNER_INTERVALS[1];
        return [...prev, { wordId, box: 1, nextReviewDate: addDays(today, interval), lastReviewedAt: new Date().toISOString() }];
      }
      const card = prev[idx];
      const newBox = Math.min(card.box + 1, 5);
      const interval = LEITNER_INTERVALS[newBox];
      const updated = [...prev];
      updated[idx] = { ...card, box: newBox, nextReviewDate: addDays(today, interval), lastReviewedAt: new Date().toISOString() };
      return updated;
    });
    recordDailyActivity(0, 1);
    recordActivity();
  }, [recordDailyActivity, recordActivity]);

  /** Demote a word back to Box 1 (wrong answer) */
  const demoteWord = useCallback((wordId: string) => {
    const today = getTodayDate();
    setSrsCards(prev => {
      const idx = prev.findIndex(c => c.wordId === wordId);
      if (idx === -1) {
        return [...prev, { wordId, box: 1, nextReviewDate: addDays(today, 1), lastReviewedAt: new Date().toISOString() }];
      }
      const updated = [...prev];
      updated[idx] = { ...prev[idx], box: 1, nextReviewDate: addDays(today, 1), lastReviewedAt: new Date().toISOString() };
      return updated;
    });
    recordDailyActivity(0, 1);
    recordActivity();
  }, [recordDailyActivity, recordActivity]);

  const getSRSCard = useCallback(
    (wordId: string) => srsCards.find(c => c.wordId === wordId),
    [srsCards]
  );

  // ── Vocabulary ───────────────────────────────────────────────────────
  const toggleLearnedWord = useCallback((wordId: string) => {
    const wordEntry = vocabularyData.find(w => w.id === wordId);
    const wordText = wordEntry?.word || wordId;

    setLearnedWords(prev => {
      const wasLearned = prev.includes(wordId);
      const newValue = wasLearned ? prev.filter(id => id !== wordId) : [...prev, wordId];
      logWordToggle(wordId, wordText, !wasLearned);
      if (!wasLearned) {
        // When marking learned, also enter into SRS if not already there
        setSrsCards(srs => {
          if (srs.find(c => c.wordId === wordId)) return srs;
          const today = getTodayDate();
          return [...srs, { wordId, box: 1, nextReviewDate: addDays(today, 1), lastReviewedAt: new Date().toISOString() }];
        });
      }
      return newValue;
    });
    recordDailyActivity(1, 0);
    recordActivity();
  }, [recordActivity, recordDailyActivity]);

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

  const completeExam = useCallback((examId: string) => {
    setCompletedExams(prev => ({ ...prev, [examId]: (prev[examId] || 0) + 1 }));
    logActivity(`Completed Exam: ${examId}`);
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

  // ── Quiz State Persistence ──────────────────────────────────────────
  const saveQuizState = useCallback((testId: string, state: Omit<QuizState, 'testId' | 'updatedAt'>) => {
    setQuizStates(prev => ({
      ...prev,
      [testId]: {
        ...state,
        testId,
        updatedAt: new Date().toISOString(),
      },
    }));
  }, []);

  const getQuizState = useCallback(
    (testId: string) => quizStates[testId],
    [quizStates]
  );

  const clearQuizState = useCallback((testId: string) => {
    setQuizStates(prev => {
      const next = { ...prev };
      delete next[testId];
      return next;
    });
  }, []);

  // ── Custom Collections ───────────────────────────────────────────────
  const createCollection = useCallback((name: string) => {
    const id = `col_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    setCustomCollections(prev => [...prev, { id, name, wordIds: [], createdAt: new Date().toISOString() }]);
    logActivity(`Created Collection: "${name}"`);
  }, []);

  const renameCollection = useCallback((id: string, newName: string) => {
    setCustomCollections(prev => prev.map(c => (c.id === id ? { ...c, name: newName } : c)));
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
        return { ...c, wordIds: has ? c.wordIds.filter(w => w !== wordId) : [...c.wordIds, wordId] };
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
    return JSON.stringify({
      learnedWords, completedGrammar, completedExams, completedUoe, completedReading,
      streak, customCollections, srsCards, activityHistory, quizStates,
      timestamp: new Date().toISOString(),
      username: getStorageItem('username', 'User'),
    }, null, 2);
  }, [learnedWords, completedGrammar, completedExams, completedUoe, completedReading, streak, customCollections, srsCards, activityHistory, quizStates]);

  const importData = useCallback((json: string) => {
    try {
      const data = JSON.parse(json);
      if (data.learnedWords) setLearnedWords(data.learnedWords);
      if (data.completedGrammar) setCompletedGrammar(data.completedGrammar);
      if (data.completedExams) setCompletedExams(data.completedExams);
      if (data.completedUoe) setCompletedUoe(data.completedUoe);
      if (data.completedReading) setCompletedReading(data.completedReading);
      if (data.streak) setStreak(data.streak);
      if (data.customCollections) setCustomCollections(data.customCollections);
      if (data.srsCards) setSrsCards(data.srsCards);
      if (data.activityHistory) setActivityHistory(data.activityHistory);
      if (data.quizStates) setQuizStates(data.quizStates);
      logActivity('Imported Progress Data');
      return true;
    } catch (e) {
      console.error('Failed to import data', e);
      return false;
    }
  }, []);

  return (
    <ProgressContext.Provider value={{
      learnedWords, toggleLearnedWord, removeLearnedWord, isWordLearned,
      completedGrammar, completeGrammarTopic,
      completedExams, completeExam,
      completedUoe, completeUoeTest,
      completedReading, completeReadingTest,
      quizStates, saveQuizState, getQuizState, clearQuizState,
      streak,
      customCollections, createCollection, renameCollection, deleteCollection,
      toggleWordInCollection, isWordInCollection, getCollectionsForWord,
      srsCards, dueToday, promoteWord, demoteWord, getSRSCard,
      activityHistory,
      exportData, importData, isHydrated,
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
