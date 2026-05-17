import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY });
const chunkDir = '/home/marijua/Masaüstü/kitap/AcademicSkills/chunk1';

async function main() {
  const files = fs.readdirSync(chunkDir).filter(f => f.endsWith('.png'));
  console.log(`Found ${files.length} images in ${chunkDir}`);

  const parts = [];
  for (const file of files) {
    const filePath = path.join(chunkDir, file);
    const data = fs.readFileSync(filePath);
    parts.push({
      inlineData: {
        mimeType: 'image/png',
        data: data.toString('base64'),
      }
    });
  }

  const prompt = `You are a world-class academic linguistics and curriculum expert. 
I have provided 15 images containing academic grammar rules, vocabulary, and writing structures.
Extract the most valuable B1+/B2 and C1 level knowledge from these images.
Output ONLY valid JSON matching this exact structure:
{
  "grammarTopics": [
    {
      "id": "unique-id",
      "title": "Topic Title",
      "description": "Comprehensive explanation of the grammar rule, merging insights from the images.",
      "level": "B2",
      "rules": ["Rule 1", "Rule 2"],
      "examples": [
        { "english": "English example", "turkish": "Turkish translation" }
      ],
      "commonMistakes": ["Mistake 1"]
    }
  ],
  "vocabulary": [
    {
      "word": "academic_word",
      "type": "noun/verb/adjective/phrase",
      "definition": "Clear B2+ definition in English",
      "example": "High-quality academic example sentence",
      "turkish": "Natural Turkish translation of the word",
      "category": "Academic"
    }
  ],
  "writingTips": [
    {
      "id": "tip-unique-id",
      "title": "Essay Blueprint/Tip Title",
      "description": "Detailed explanation of the writing tip",
      "structure": [
        { "title": "Paragraph Title", "content": "What to write here", "example": "Optional example" }
      ],
      "usefulPhrases": ["Phrase 1", "Phrase 2"]
    }
  ]
}

Ensure all JSON is syntactically valid. Extract deeply—do not skip any important grammar rules, advanced vocabulary words, or writing structures present in the images.`;

  parts.push({ text: prompt });

  try {
    console.log('Sending request to Gemini 3.0 Flash...');
    const response = await aiClient.models.generateContent({
      model: 'gemini-3.0-flash',
      contents: [{ role: 'user', parts: parts }]
    });

    const rawText = response.text || '{}';
    const cleanJsonStr = rawText.replace(/\`\`\`json\n?/g, '').replace(/\`\`\`\n?/g, '').trim();
    
    fs.writeFileSync('chunk1_extracted.json', cleanJsonStr);
    console.log('Extraction complete! Saved to chunk1_extracted.json');
  } catch (err) {
    console.error('Error during extraction:', err);
  }
}

main();
