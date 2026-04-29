export interface ReadingPassage {
  id: string;
  title: string;
  text: string;
  wordCount: number;
  estimatedTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: ReadingQuestion[];
  vocabularyHighlights: VocabHighlight[];
}

export interface ReadingQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  paragraph?: number;
  explanation: string;
}

export interface VocabHighlight {
  word: string;
  definition: string;
}
