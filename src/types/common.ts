export interface MistakeEntry {
  id: string;
  topicId: string;
  questionId: string;
  type: 'grammar' | 'vocabulary' | 'uoe' | 'reading' | 'exam' | 'past_question';
  question: string;
  userAnswer: string;
  correctAnswer: string;
  date: string;
}

export interface ActivityEntry {
  id: string;
  action: string;
  details: string;
  timestamp: string;
}

export interface IrregularVerb {
  id: string;
  v1: string;
  v2: string;
  v3: string;
  meaning: string;
}

export interface CheatSheetSection {
  id: string;
  title: string;
  icon: string;
  color: string;
  items: CheatSheetItem[];
}

export interface CheatSheetItem {
  title: string;
  content: string;
  example?: string;
}
