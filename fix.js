const fs = require('fs');
let file = fs.readFileSync('src/data/grammarData.ts', 'utf8');

// We have syntax errors because of unescaped single quotes inside single-quoted strings.
// Specifically: '... don't ...', etc.
// Instead of complex regex, let's just find the syntax errors and fix them.

const replacements = [
  {
    from: "question: 'Grammar Focus 5B, Exercise b: \"If we don't leave now, we don't / won't get to the airport on time.\"',",
    to: "question: 'Grammar Focus 5B, Exercise b: \"If we don\\'t leave now, we don\\'t / won\\'t get to the airport on time.\"',"
  },
  {
    from: "question: 'Grammar Focus 5B, Exercise b: \"Rui will speak / won't speak to Jin-Su unless he apologises.\"',",
    to: "question: 'Grammar Focus 5B, Exercise b: \"Rui will speak / won\\'t speak to Jin-Su unless he apologises.\"',"
  },
  {
    from: "explanation: 'Unless he apologises = if he doesn't apologise → won't speak.',",
    to: "explanation: 'Unless he apologises = if he doesn\\'t apologise → won\\'t speak.',"
  },
  {
    from: "explanation: 'Subject question, we don't use auxiliary verb did.',",
    to: "explanation: 'Subject question, we don\\'t use auxiliary verb did.',"
  },
  {
    from: "explanation: 'Subject question, we don't use auxiliary verb does.',",
    to: "explanation: 'Subject question, we don\\'t use auxiliary verb does.',"
  },
  {
    from: "'In subject questions, the question word is the subject. We don't use do/does/did.',",
    to: "'In subject questions, the question word is the subject. We don\\'t use do/does/did.',"
  },
  {
    from: "question: 'Grammar Focus 2A: Complete the sentence: Sorry, I can't come with you. My boss ________ (ask) me to work at the weekend.',",
    to: "question: 'Grammar Focus 2A: Complete the sentence: Sorry, I can\\'t come with you. My boss ________ (ask) me to work at the weekend.',"
  },
  {
    from: "explanation: 'can't = I'm sure it is not.',",
    to: "explanation: 'can\\'t = I\\'m sure it is not.',"
  },
  {
    from: "question: 'Grammar Focus 7A: \"I'm sure it's a holiday home.\" Which modal means this?',",
    to: "question: 'Grammar Focus 7A: \"I\\'m sure it\\'s a holiday home.\" Which modal means this?',"
  },
  {
    from: "question: 'Grammar Focus 7A: \"I'm sure it's not a holiday home.\" Which modal means this?',",
    to: "question: 'Grammar Focus 7A: \"I\\'m sure it\\'s not a holiday home.\" Which modal means this?',"
  },
  {
    from: "explanation: 'There are some, but not a sufficient amount = aren't enough.',",
    to: "explanation: 'There are some, but not a sufficient amount = aren\\'t enough.',"
  },
  {
    from: "explanation: 'If something is still true, you don't always have to change the tense.',",
    to: "explanation: 'If something is still true, you don\\'t always have to change the tense.',"
  },
  {
    from: "options: ['a lot of', 'too many'],",
    to: "options: ['a lot of', 'too many'],"
  },
  {
    from: "options: [\"'ve never had\", \"never had\"],",
    to: "options: [\"'ve never had\", \"never had\"],"
  },
  {
    from: "explanation: 'Since it's very small, I'm sure it doesn't belong to a big family = can't.',",
    to: "explanation: 'Since it\\'s very small, I\\'m sure it doesn\\'t belong to a big family = can\\'t.',"
  },
  {
    from: "question: 'Grammar Focus 7B: Pablo goes there early in the morning because there aren't so ________ people.',",
    to: "question: 'Grammar Focus 7B: Pablo goes there early in the morning because there aren\\'t so ________ people.',"
  },
  {
    from: "explanation: 'A lot of = a large amount. Too many would mean a negative thing.',",
    to: "explanation: 'A lot of = a large amount. Too many would mean a negative thing.',"
  },
  {
    from: "question: 'Grammar Focus 10B: \"If Wendy ________ better handwriting, my business wouldn't have been such a success.\"',",
    to: "question: 'Grammar Focus 10B: \"If Wendy ________ better handwriting, my business wouldn\\'t have been such a success.\"',"
  },
  {
    from: "question: 'Grammar Focus 2B: Complete the sentence: I ________ for a new tablet, but I haven't got enough money yet. (save up)',",
    to: "question: 'Grammar Focus 2B: Complete the sentence: I ________ for a new tablet, but I haven\\'t got enough money yet. (save up)',"
  },
  {
    from: "'can't: I'm sure it is not. (Opposite of must for deduction is can't, not mustn't!)',",
    to: "'can\\'t: I\\'m sure it is not. (Opposite of must for deduction is can\\'t, not mustn\\'t!)',"
  },
  {
    from: "'enough / aren't enough: sufficient amount.',",
    to: "'enough / aren\\'t enough: sufficient amount.',"
  },
  {
    from: "options: ['must', \"can't\", 'could'],",
    to: "options: ['must', \"can\\'t\", 'could'],"
  },
  {
    from: "options: [\"mustn't\", \"can't\", 'might not'],",
    to: "options: [\"mustn\\'t\", \"can\\'t\", 'might not'],"
  },
  {
    from: "options: [\"aren't any\", \"aren't enough\"],",
    to: "options: [\"aren\\'t any\", \"aren\\'t enough\"],"
  }
];

// Let's replace systematically via regex anything that looks like an unescaped single quote inside a single-quoted property.
// It's easier: just replace all double quotes wrapping options with single quotes? No.

// Let's read the file line by line, if we see an error pattern, fix it.
let lines = file.split('\\n');

for (let i = 0; i < lines.length; i++) {
  // Fix questions
  if (lines[i].includes(\"question: '\")) {
    let text = lines[i].substring(lines[i].indexOf(\"question: '\") + 11, lines[i].lastIndexOf(\"'\"));
    // text is everything inside the quotes.
    text = text.replace(/\\\\'/g, \"'\"); // unescape first
    text = text.replace(/'/g, \"\\\\'\"); // escape all
    lines[i] = lines[i].substring(0, lines[i].indexOf(\"question: '\") + 10) + \"'\" + text + \"',\";
  }
  
  // Fix explanations
  if (lines[i].includes(\"explanation: '\")) {
    let text = lines[i].substring(lines[i].indexOf(\"explanation: '\") + 14, lines[i].lastIndexOf(\"'\"));
    text = text.replace(/\\\\'/g, \"'\"); // unescape first
    text = text.replace(/'/g, \"\\\\'\"); // escape all
    lines[i] = lines[i].substring(0, lines[i].indexOf(\"explanation: '\") + 13) + \"'\" + text + \"',\";
  }

  // Fix tips
  if (lines[i].match(/^\\s*'(.*)',?\\s*$/) && !lines[i].includes(\"options:\") && !lines[i].includes(\"question:\") && !lines[i].includes(\"explanation:\") && !lines[i].includes(\"id:\") && !lines[i].includes(\"title:\") && !lines[i].includes(\"description:\")) {
    // Looks like a tip line. Let's just use double quotes for it.
    let text = lines[i].substring(lines[i].indexOf(\"'\") + 1, lines[i].lastIndexOf(\"'\"));
    text = text.replace(/\\\\'/g, \"'\"); 
    text = text.replace(/\"/g, \"\\\\\\\"\"); // escape double quotes
    lines[i] = lines[i].substring(0, lines[i].indexOf(\"'\")) + '\"' + text + '\"' + (lines[i].endsWith(\"',\") ? \",\" : \"\");
  }
  
  // Fix options array. Some are like options: ['has asked', 'asked'],
  // some are options: [\"'ve never had\", \"never had\"],
  if (lines[i].includes(\"options: [\")) {
    // Instead of parsing, let's just make sure all options use double quotes on the outside.
    let optionsStr = lines[i].substring(lines[i].indexOf(\"[\") + 1, lines[i].lastIndexOf(\"]\"));
    // Split by comma outside quotes is hard. Let's evaluate it! Wait, we can't eval if syntax is broken.
    // The broken ones are the ones we injected.
    // e.g., options: ['must', \"can't\", 'could'],
    // e.g., options: [\"mustn't\", \"can't\", 'might not'],
    // e.g., options: [\"aren't any\", \"aren't enough\"],
    // Let's replace the specific broken options manually for safety.
    lines[i] = lines[i].replace(`options: ['must', \"can't\", 'could'],`, `options: [\"must\", \"can't\", \"could\"],`);
    lines[i] = lines[i].replace(`options: [\"mustn't\", \"can't\", 'might not'],`, `options: [\"mustn't\", \"can't\", \"might not\"],`);
    lines[i] = lines[i].replace(`options: [\"aren't any\", \"aren't enough\"],`, `options: [\"aren't any\", \"aren't enough\"],`);
    lines[i] = lines[i].replace(`options: [\"'ve never had\", \"never had\"],`, `options: [\"'ve never had\", \"never had\"],`);
    lines[i] = lines[i].replace(`options: [\"finished / didn't get\", \"'ve finished / haven't got\"],`, `options: [\"finished / didn't get\", \"'ve finished / haven't got\"],`);
    lines[i] = lines[i].replace(`options: [\"'ve owned\", \"'ve been owning\"],`, `options: [\"'ve owned\", \"'ve been owning\"],`);
    lines[i] = lines[i].replace(`options: [\"'ve never searched\", \"'ve never been searching\"],`, `options: [\"'ve never searched\", \"'ve never been searching\"],`);
    lines[i] = lines[i].replace(`options: [\"'ve watched\", \"'ve been watching\"],`, `options: [\"'ve watched\", \"'ve been watching\"],`);
    lines[i] = lines[i].replace(`options: [\"'ve saved up\", \"'ve been saving up\"],`, `options: [\"'ve saved up\", \"'ve been saving up\"],`);
  }
}

fs.writeFileSync('src/data/grammarData.ts', lines.join('\\n'));
console.log('Fixed syntax errors in grammarData.ts');
