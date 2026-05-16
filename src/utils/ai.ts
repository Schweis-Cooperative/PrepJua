import { GoogleGenAI } from '@google/genai';
import { getStorageItem } from './storage';

function getClient(): GoogleGenAI | null {
  const apiKey = getStorageItem<string>('apiKey', '');
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

export async function getAIExplanation(
  correctAnswer: string,
  userAnswer: string,
  questionContext: string
): Promise<string> {
  const client = getClient();
  if (!client) {
    return 'Please set your Gemini API key in Settings to use AI explanations.';
  }

  try {
    const prompt = `You are an English language tutor. A student answered a question incorrectly.

Question: ${questionContext}
Correct answer: ${correctAnswer}
Student's answer: ${userAnswer}

Explain why "${correctAnswer}" is correct and why "${userAnswer}" is wrong. Be concise and educational. Use simple English.`;

    const response = await client.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });

    return response.text || 'Unable to generate explanation.';
  } catch (error) {
    console.error('AI explanation error:', error);
    return 'Failed to get AI explanation. Please check your API key and try again.';
  }
}

export async function gradeEssay(
  topic: string,
  essay: string,
  images?: string[]
): Promise<string> {
  try {
    const response = await fetch('/api/evaluate-writing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ essay: `Topic: ${topic}\n\nEssay:\n${essay}` }),
    });
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
