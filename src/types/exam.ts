export interface ExamQuestion {
  id: string;
  type: 'multiple_choice' | 'cloze' | 'fill_blank' | 'rewrite';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  keyword?: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  grammarFocus?: string;
}

export interface ExamSet {
  id: string;
  title: string;
  description: string;
  passage?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  grammarFocus?: string;
  questions: ExamQuestion[];
  part?: number;
}

export interface PastQuestion {
  id: string;
  year: string;
  examName: string;
  questionNumber: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

export interface PastQuestionSet {
  id: string;
  year: string;
  examName: string;
  questions: PastQuestion[];
}
