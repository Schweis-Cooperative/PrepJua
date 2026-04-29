export interface VocabularyWord {
  id: string;
  word: string;
  translation: string;
  example: string;
  category: 'phrase' | 'verb' | 'noun' | 'adjective' | 'adverb' | 'preposition' | 'conjunction';
}

export interface VocabQuizQuestion {
  word: VocabularyWord;
  options: string[];
  correctAnswer: number;
}
