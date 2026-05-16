/**
 * Progress system type definitions.
 * Covers streak tracking, custom collections, and the full persisted state shape.
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

/** Full persisted progress state shape (used for IndexedDB storage) */
export interface PersistedProgress {
  learnedWords: string[];
  completedGrammar: Record<string, number>;
  completedUoe: Record<string, number>;
  completedReading: Record<string, number>;
  streak: StreakState;
  customCollections: CustomCollection[];
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
};
