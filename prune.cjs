const fs = require('fs');

const file = './src/data/vocabularyData.ts';
let content = fs.readFileSync(file, 'utf8');

const strictA1Words = new Set([
  'goal',
  'sweet',
  'fine',
  'beautiful',
  'items',
  'wait for',
  'pay for',
  'think about',
  'neighbour',
  'street map',
  'sleeping bag',
  'cooked',
  'heavy',
  'flat',
  'floor',
  'step',
  'website',
  'local',
  'leaf',
  'skin',
  'tail',
  'gold fish',
  'dried',
  'desert',
  'coast',
  'repeat',
  'save',
  'delete',
  'earth',
  'ask',
  'get',
  'peanut',
  'tasty',
  'tiny',
  'apple',
  'car',
  'friendly',
  'basic',
  'table'
]);

let removedWords = [];

// The objects are separated by commas and look like:
//   {
//     id: 'v-new-hw-1',
//     word: 'reach out',
//     translation: 'iletişim kurmak, uzanmak',
//     example: '',
//     category: 'phrase',
//   },

// We can replace using a regular expression that captures an entire object block.
// Format: \s*\{\s*id:\s*'[^']+',\s*word:\s*'([^']+)',[\s\S]*?\},?

const regex = /\s*\{\s*id:\s*'[^']+',\s*word:\s*'([^']+)',[\s\S]*?\},?/g;

content = content.replace(regex, (match, wordMatch) => {
  if (strictA1Words.has(wordMatch.toLowerCase())) {
    removedWords.push(wordMatch);
    return ''; // Remove it
  }
  return match;
});

// Since the last item might have had its comma removed or we might have left double commas or dangling brackets, 
// let's do a slightly cleaner approach: Parse the string if it's too risky?
// Actually, it's better to just fix trailing commas if any.
content = content.replace(/,\s*\]/, '\n]');
content = content.replace(/\[\s*,/, '[\n');
// Double commas
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync(file, content);
console.log('Removed:', removedWords.join(', '));
