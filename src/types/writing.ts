export interface WritingTopic {
  id: string;
  title: string;
  prompt: string;
  type: 'opinion' | 'argumentative' | 'descriptive' | 'narrative';
}

export interface WritingResult {
  cefrLevel: string;
  grammarCorrections: string[];
  vocabularyUpgrades: string[];
}

export interface WritingScoreEntry {
  id: string;
  topicId: string;
  topicTitle: string;
  score: number;
  date: string;
  result: WritingResult;
}
