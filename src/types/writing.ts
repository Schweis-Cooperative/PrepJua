export interface WritingTopic {
  id: string;
  title: string;
  prompt: string;
  type: 'opinion' | 'argumentative' | 'descriptive' | 'narrative';
}

export interface WritingResult {
  score: number;
  generalFeedback: string;
  structureFeedback: string;
  grammarFeedback: string;
  corrections: WritingCorrection[];
  improvedEssay: string;
}

export interface WritingCorrection {
  original: string;
  corrected: string;
  explanation: string;
}

export interface WritingScoreEntry {
  id: string;
  topicId: string;
  topicTitle: string;
  score: number;
  date: string;
  result: WritingResult;
}
