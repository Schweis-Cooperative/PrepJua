export interface WritingTopic {
  id: string;
  title: string;
  prompt: string;
  type: 'opinion' | 'argumentative' | 'descriptive' | 'narrative' | 'cause-effect' | 'problem-solution';
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
  score?: number;
  cefrLevel?: string;
  date: string;
  result: WritingResult;
}
