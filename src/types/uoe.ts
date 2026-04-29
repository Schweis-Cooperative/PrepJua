export interface ClozeTest {
  id: string;
  title: string;
  passage: string;
  blanks: ClozeBlank[];
}

export interface ClozeBlank {
  id: string;
  options: string[];
  correctAnswer: number;
}

export interface RewriteQuestion {
  id: string;
  originalSentence: string;
  keyword: string;
  correctAnswer: string;
  hint?: string;
}

export interface UoEMockExam {
  id: string;
  title: string;
  duration: number; // minutes
  questions: UoEMockQuestion[];
}

export interface UoEMockQuestion {
  id: string;
  type: 'multiple_choice' | 'cloze' | 'rewrite' | 'fill_blank';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  keyword?: string;
  explanation: string;
}
