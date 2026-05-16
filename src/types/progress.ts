/**
 * Progress system type definitions.
 * Covers streak tracking, custom collections, Leitner SRS, and the full persisted state shape.
 */

/** Streak state — tracks daily study continuity */
export interface StreakState {
  /** Current consecutive day count */
  current: number;
  /** Longest ever achieved streak */
  longest: number;
  /** ISO date string (YYYY-MM-DD) of the last day activity was recorded */
  lastActiveDate: string;
}

/** A named collection of word IDs curated by the user */
export interface CustomCollection {
  /** Unique ID for this collection */
  id: string;
  /** User-visible name (e.g. "My Hard Verbs") */
  name: string;
  /** Array of vocabulary word IDs in this collection */
  wordIds: string[];
  /** ISO timestamp of creation */
  createdAt: string;
}

// ─── Leitner Spaced Repetition System ──────────────────────────────────

/** The 5 Leitner boxes with their review intervals in days */
export const LEITNER_INTERVALS: Record<number, number> = {
  1: 1,   // Box 1: review again tomorrow
  2: 3,   // Box 2: review in 3 days
  3: 7,   // Box 3: review in 1 week
  4: 14,  // Box 4: review in 2 weeks
  5: 30,  // Box 5: review in 1 month (mastered)
};

/** Per-word spaced repetition state */
export interface SRSCard {
  /** Vocabulary word ID */
  wordId: string;
  /** Current Leitner box (1-5) */
  box: number;
  /** ISO date string (YYYY-MM-DD) when this word is next due for review */
  nextReviewDate: string;
  /** ISO timestamp of last review */
  lastReviewedAt: string;
}

/** Timestamped activity event for analytics timeline */
export interface ActivityEvent {
  /** ISO timestamp */
  date: string;
  /** Number of words learned on this date */
  wordsLearned: number;
  /** Number of reviews completed on this date */
  reviewsDone: number;
}

/** Full persisted progress state shape (used for IndexedDB storage) */
export interface PersistedProgress {
  learnedWords: string[];
  completedGrammar: Record<string, number>;
  completedUoe: Record<string, number>;
  completedReading: Record<string, number>;
  streak: StreakState;
  customCollections: CustomCollection[];
  srsCards: SRSCard[];
  activityHistory: ActivityEvent[];
}

/** Default initial values for a fresh user */
export const DEFAULT_PROGRESS: PersistedProgress = {
  learnedWords: [],
  completedGrammar: {},
  completedUoe: {},
  completedReading: {},
  streak: {
    current: 0,
    longest: 0,
    lastActiveDate: '',
  },
  customCollections: [],
  srsCards: [],
  activityHistory: [],
};
