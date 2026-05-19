import { getStorageItem } from './storage';

export async function getAIExplanation(
  correctAnswer: string,
  userAnswer: string,
  questionContext: string
): Promise<string> {
  const apiKey = getStorageItem<string>('apiKey', '');

  try {
    const response = await fetch('/api/explain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ correctAnswer, userAnswer, questionContext }),
    });

    if (response.status === 401) {
      return 'Please set your Gemini API key in Settings to use AI explanations.';
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.explanation || 'Unable to generate explanation.';
  } catch (error) {
    console.error('AI explanation error:', error);
    return 'Failed to get AI explanation. Please check your API key and try again.';
  }
}

export async function gradeEssay(
  topic: string,
  essay: string,
  _images?: string[]
): Promise<string> {
  const apiKey = getStorageItem<string>('apiKey', '');

  try {
    const response = await fetch('/api/evaluate-writing', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ essay: `Topic: ${topic}\n\nEssay:\n${essay}` }),
    });

    if (response.status === 401) {
      return JSON.stringify({
        cefrLevel: 'Missing API Key',
        grammarCorrections: ['Please configure your personal Gemini API Key in Settings to use the AI Evaluator.'],
        vocabularyUpgrades: [],
      });
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return JSON.stringify(data);
  } catch (error) {
    console.error('Essay grading error:', error);
    return JSON.stringify({
      cefrLevel: 'Error',
      grammarCorrections: ['Failed to reach the AI server. Please try again later.'],
      vocabularyUpgrades: [],
    });
  }
}
