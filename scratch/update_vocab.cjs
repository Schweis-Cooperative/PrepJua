
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src/data/vocabularyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  {
    id: 'v-c-i-see-where-you-re-coming-from',
    example: "I see where you're coming from, but I still think we should try the other option. - Ne demek istediğini anlıyorum ama hala diğer seçeneği denememiz gerektiğini düşünüyorum."
  },
  {
    id: 'v-c-i-imagine-you-re',
    example: "I imagine you're tired after such a long journey. - Böyle uzun bir yolculuktan sonra yorgun olduğunu tahmin ediyorum."
  },
  {
    id: 'v-c-i-m-not-a-big-fan-of',
    example: "I'm not a big fan of spicy food, to be honest. - Dürüst olmak gerekirse, acılı yemeklerin pek hayranı değilim."
  },
  {
    id: 'v-c-it-s-meant-to-be',
    example: "That movie is meant to be very good. - O filmin çok iyi olduğu söyleniyor."
  },
  {
    id: 'v-c-it-s-supposed-to-be',
    example: "It's supposed to be sunny today. - Bugün havanın güneşli olması bekleniyor."
  }
];

updates.forEach(update => {
  const regex = new RegExp(`(id: '${update.id}',[\\s\\S]*?example: )('.*?'|".*?")`, 'g');
  content = content.replace(regex, `$1'${update.example.replace(/'/g, "\\'")}'`);
});

fs.writeFileSync(filePath, content);
console.log('Updated vocabularyData.ts');
