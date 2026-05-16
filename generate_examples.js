const fs = require('fs');

const file = 'src/data/vocabularyData.ts';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{[\s\S]*?word:\s*'([^']+)'[\s\S]*?translation:\s*'([^']+)'[\s\S]*?example:\s*['\"\`](.*?)['\"\`][\s\S]*?category:\s*'([^']+)'[\s\S]*?\}/g;

let count = 0;
let newContent = content.replace(regex, (match, word, translation, example, category) => {
    if (example.trim() !== '') return match; // Skip if already has an example

    let enSentence = '';
    let trSentence = '';

    const lowerCat = category.toLowerCase().trim();

    if (lowerCat === 'verb') {
        enSentence = `It is important to ${word} in this situation. - Bu durumda ${translation.toLowerCase()} önemlidir.`;
    } else if (lowerCat === 'noun') {
        enSentence = `The ${word} plays a significant role in our lives. - ${translation} hayatımızda önemli bir rol oynar.`;
    } else if (lowerCat === 'adjective') {
        enSentence = `She is a very ${word} person to work with. - O, birlikte çalışmak için çok ${translation.toLowerCase()} biridir.`;
    } else if (lowerCat === 'adverb') {
        enSentence = `He handled the situation ${word}. - Durumu ${translation.toLowerCase()} halletti.`;
    } else if (lowerCat === 'phrase') {
        enSentence = `We need to ${word} as soon as possible. - En kısa sürede ${translation.toLowerCase()} ihtiyacımız var.`;
    } else {
        enSentence = `The concept of ${word} is very interesting. - ${translation} kavramı çok ilginçtir.`;
    }

    count++;
    
    // Replace the empty example field
    return match.replace(/example:\s*['\"\`]['\"\`]/, `example: '${enSentence}'`);
});

fs.writeFileSync(file, newContent);
console.log('Updated ' + count + ' empty examples.');
