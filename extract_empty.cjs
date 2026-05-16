const fs = require('fs');

const content = fs.readFileSync('src/data/vocabularyData.ts', 'utf8');
const emptyExampleRegex = /word:\s*'([^']+)',\s*translation:\s*'([^']+)',\s*example:\s*''/g;
let match;
const words = [];

while ((match = emptyExampleRegex.exec(content)) !== null) {
  words.push({ word: match[1], translation: match[2] });
}

fs.writeFileSync('empty_words.json', JSON.stringify(words, null, 2));
console.log(`Extracted ${words.length} words.`);
