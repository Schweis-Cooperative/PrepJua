const fs = require('fs');

const wordpowerFile = './src/data/wordpowerData.ts';
let content = fs.readFileSync(wordpowerFile, 'utf8');

// Using regex to replace the improperly structured items
// The structure is currently:
//   {
//     id: 'look',
//     title: 'look',
//     description: 'Look verb usage',
//     items: [
//       { phrase: 'Look at (a photo, a flower)', meaning: 'appearance (görünüşüne bakmak)', example: '' },
//       ...
//     ]
//   },

// But we need:
//   {
//     id: 'wp-look',
//     unit: 0,
//     rootWord: 'look',
//     title: 'Wordpower: look',
//     description: 'Look verb usage',
//     usages: [
//       { id: 'wp-look-1', meaning: 'Look at (a photo, a flower)', meaningTr: 'appearance (görünüşüne bakmak)', examples: [] },
//       ...
//     ],
//     exercises: []
//   },

// First, I will replace `items:` with `usages:` and fix the objects inside.
// Actually, it's easier to just parse the file, but it's a TS file with `export const ...`.
// Let's manually replace the 4 sections using string manipulation.

content = content.replace(/  \{\n    id: 'look',\n    title: 'look',\n    description: 'Look verb usage',\n    items: \[\n      \{ phrase: 'Look at \(a photo, a flower\)', meaning: 'appearance \(görünüşüne bakmak\)', example: '' \},\n      \{ phrase: 'Watch \(a film\)', meaning: 'movement \(hareketi izlemek\)', example: '' \},\n      \{ phrase: 'See', meaning: 'visit, understand, be able to recognise', example: '' \},\n      \{ phrase: 'Hear', meaning: 'be able to recognise', example: '' \},\n      \{ phrase: 'Listen to \(voice record\)', meaning: 'sound \(sesi dinlemek\)', example: '' \}\n    \]\n  \},/g, `  {
    id: 'wp-look',
    unit: 9,
    rootWord: 'look',
    title: 'Wordpower: look',
    description: 'Look verb usage',
    usages: [
      { id: 'wp-look-1', meaning: 'Look at (a photo, a flower)', meaningTr: 'appearance (görünüşüne bakmak)', examples: [] },
      { id: 'wp-look-2', meaning: 'Watch (a film)', meaningTr: 'movement (hareketi izlemek)', examples: [] },
      { id: 'wp-look-3', meaning: 'See', meaningTr: 'visit, understand, be able to recognise', examples: [] },
      { id: 'wp-look-4', meaning: 'Hear', meaningTr: 'be able to recognise', examples: [] },
      { id: 'wp-look-5', meaning: 'Listen to (voice record)', meaningTr: 'sound (sesi dinlemek)', examples: [] }
    ],
    exercises: []
  },`);

content = content.replace(/  \{\n    id: 'over',\n    title: 'over',\n    description: 'Over prepositions and expressions',\n    items: \[\n      \{ phrase: 'over by', meaning: 'olup bitmek', example: '' \},\n      \{ phrase: 'over the lake', meaning: 'karşısında', example: '' \},\n      \{ phrase: 'over 1 million', meaning: 'daha fazla', example: '' \},\n      \{ phrase: 'over the summer', meaning: 'sırasında', example: '' \},\n      \{ phrase: 'all over', meaning: 'kaplamak', example: '' \}\n    \]\n  \},/g, `  {
    id: 'wp-over',
    unit: 7,
    rootWord: 'over',
    title: 'Wordpower: over',
    description: 'Over prepositions and expressions',
    usages: [
      { id: 'wp-over-1', meaning: 'over by', meaningTr: 'olup bitmek', examples: [] },
      { id: 'wp-over-2', meaning: 'over the lake', meaningTr: 'karşısında', examples: [] },
      { id: 'wp-over-3', meaning: 'over 1 million', meaningTr: 'daha fazla', examples: [] },
      { id: 'wp-over-4', meaning: 'over the summer', meaningTr: 'sırasında', examples: [] },
      { id: 'wp-over-5', meaning: 'all over', meaningTr: 'kaplamak', examples: [] }
    ],
    exercises: []
  },`);

content = content.replace(/  \{\n    id: 'in---on---noun',\n    title: 'in \/ on \+ noun',\n    description: 'Usage of in and on with nouns',\n    items: \[\n      \{ phrase: 'in the picture', meaning: 'resimde', example: '' \},\n      \{ phrase: 'in the first paragraph', meaning: 'ilk paragrafta', example: '' \},\n      \{ phrase: 'in print', meaning: 'yazılı olarak', example: '' \},\n      \{ phrase: 'in euros', meaning: 'euro cinsinden', example: '' \},\n      \{ phrase: 'in size', meaning: 'boyutunda', example: '' \},\n      \{ phrase: 'in stock', meaning: 'stokta', example: '' \},\n      \{ phrase: 'in pencil', meaning: 'kurşun kalemle', example: '' \},\n      \{ phrase: 'on my phone', meaning: 'telefonumda', example: '' \},\n      \{ phrase: 'on page', meaning: 'sayfada', example: '' \},\n      \{ phrase: 'on the radio', meaning: 'radyoda', example: '' \},\n      \{ phrase: 'on the sign', meaning: 'tabelada', example: '' \},\n      \{ phrase: 'on the ticket', meaning: 'bilette', example: '' \}\n    \]\n  \},/g, `  {
    id: 'wp-in-on',
    unit: 8,
    rootWord: 'in / on',
    title: 'Wordpower: in / on + noun',
    description: 'Usage of in and on with nouns',
    usages: [
      { id: 'wp-io-1', meaning: 'in the picture', meaningTr: 'resimde', examples: [] },
      { id: 'wp-io-2', meaning: 'in the first paragraph', meaningTr: 'ilk paragrafta', examples: [] },
      { id: 'wp-io-3', meaning: 'in print', meaningTr: 'yazılı olarak', examples: [] },
      { id: 'wp-io-4', meaning: 'in euros', meaningTr: 'euro cinsinden', examples: [] },
      { id: 'wp-io-5', meaning: 'in size', meaningTr: 'boyutunda', examples: [] },
      { id: 'wp-io-6', meaning: 'in stock', meaningTr: 'stokta', examples: [] },
      { id: 'wp-io-7', meaning: 'in pencil', meaningTr: 'kurşun kalemle', examples: [] },
      { id: 'wp-io-8', meaning: 'on my phone', meaningTr: 'telefonumda', examples: [] },
      { id: 'wp-io-9', meaning: 'on page', meaningTr: 'sayfada', examples: [] },
      { id: 'wp-io-10', meaning: 'on the radio', meaningTr: 'radyoda', examples: [] },
      { id: 'wp-io-11', meaning: 'on the sign', meaningTr: 'tabelada', examples: [] },
      { id: 'wp-io-12', meaning: 'on the ticket', meaningTr: 'bilette', examples: [] }
    ],
    exercises: []
  },`);

content = content.replace(/  \{\n    id: 'confusing-words',\n    title: 'Confusing Words',\n    description: 'Commonly confused verbs and adverbs',\n    items: \[\n      \{ phrase: 'lend to', meaning: 'ödünç vermek', example: '' \},\n      \{ phrase: 'borrow from', meaning: 'ödünç almak', example: '' \},\n      \{ phrase: 'miss', meaning: 'kaçırmak, özlemek', example: '' \},\n      \{ phrase: 'lose', meaning: 'kaybetmek', example: '' \},\n      \{ phrase: 'take', meaning: 'almak', example: '' \},\n      \{ phrase: 'bring', meaning: 'getirmek', example: '' \},\n      \{ phrase: 'raise', meaning: 'kaldırmak', example: '' \},\n      \{ phrase: 'rise', meaning: 'yükselmek', example: '' \},\n      \{ phrase: 'robbed', meaning: 'soygun yapmak', example: '' \},\n      \{ phrase: 'stole', meaning: 'çalmak', example: '' \},\n      \{ phrase: 'currently', meaning: 'şu sıralar', example: '' \},\n      \{ phrase: 'actually', meaning: 'aslında', example: '' \}\n    \]\n  \},/g, `  {
    id: 'wp-confusing',
    unit: 0,
    rootWord: 'Confusing Words',
    title: 'Wordpower: Confusing Words',
    description: 'Commonly confused verbs and adverbs',
    usages: [
      { id: 'wp-cw-1', meaning: 'lend to', meaningTr: 'ödünç vermek', examples: [] },
      { id: 'wp-cw-2', meaning: 'borrow from', meaningTr: 'ödünç almak', examples: [] },
      { id: 'wp-cw-3', meaning: 'miss', meaningTr: 'kaçırmak, özlemek', examples: [] },
      { id: 'wp-cw-4', meaning: 'lose', meaningTr: 'kaybetmek', examples: [] },
      { id: 'wp-cw-5', meaning: 'take', meaningTr: 'almak', examples: [] },
      { id: 'wp-cw-6', meaning: 'bring', meaningTr: 'getirmek', examples: [] },
      { id: 'wp-cw-7', meaning: 'raise', meaningTr: 'kaldırmak', examples: [] },
      { id: 'wp-cw-8', meaning: 'rise', meaningTr: 'yükselmek', examples: [] },
      { id: 'wp-cw-9', meaning: 'robbed', meaningTr: 'soygun yapmak', examples: [] },
      { id: 'wp-cw-10', meaning: 'stole', meaningTr: 'çalmak', examples: [] },
      { id: 'wp-cw-11', meaning: 'currently', meaningTr: 'şu sıralar', examples: [] },
      { id: 'wp-cw-12', meaning: 'actually', meaningTr: 'aslında', examples: [] }
    ],
    exercises: []
  },`);

fs.writeFileSync(wordpowerFile, content);
console.log('Fixed wordpowerData schema!');
