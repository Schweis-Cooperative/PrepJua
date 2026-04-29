export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  content: string;
  tips: string[];
  questions: GrammarQuestion[];
}

export interface GrammarQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
