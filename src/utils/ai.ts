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
  const client = getClient();
  if (!client) {
    return JSON.stringify({
      score: 0,
      generalFeedback: 'Please set your Gemini API key in Settings to use essay grading.',
      structureFeedback: '',
      grammarFeedback: '',
      corrections: [],
      improvedEssay: '',
    });
  }

  try {
    const prompt = `You are an expert English essay grader. Grade the following essay and return ONLY valid JSON with no markdown formatting.

Topic: ${topic}

Essay:
${essay}

Return this exact JSON structure:
{
  "score": <number 0-100>,
  "generalFeedback": "<overall assessment>",
  "structureFeedback": "<feedback on essay structure, paragraphing, coherence>",
  "grammarFeedback": "<feedback on grammar, spelling, punctuation>",
  "corrections": [
    {"original": "<incorrect phrase>", "corrected": "<corrected phrase>", "explanation": "<why>"}
  ],
  "improvedEssay": "<the essay rewritten with improvements>"
}

Be thorough but constructive. Limit corrections to the 10 most important ones.`;

    const contents: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> = [{ text: prompt }];

    if (images && images.length > 0) {
      images.forEach((base64) => {
        contents.push({
          inlineData: {
            mimeType: 'image/jpeg',
            data: base64,
          },
        });
      });
    }

    const response = await client.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ role: 'user', parts: contents }],
    });

    return response.text || '{}';
  } catch (error) {
    console.error('Essay grading error:', error);
    return JSON.stringify({
      score: 0,
      generalFeedback: 'Failed to grade essay. Please check your API key and try again.',
      structureFeedback: '',
      grammarFeedback: '',
      corrections: [],
      improvedEssay: '',
    });
  }
}
