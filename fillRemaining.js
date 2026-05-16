import fs from 'fs';

const examples = {
  "reach out": "Feel free to reach out if you need any help with your project. - Projenle ilgili yardıma ihtiyacın olursa bana ulaşmaktan çekinme.",
  "by the way": "By the way, did you finish reading that book I lent you? - Bu arada, sana ödünç verdiğim o kitabı okumayı bitirdin mi?",
  "identify": "The scientist was able to identify the rare bird species. - Bilim insanı nadir kuş türünü belirlemeyi başardı.",
  "to be turned into": "The old hospital is going to be turned into luxury apartments. - Eski hastane lüks dairelere dönüştürülecek.",
  "it turned out": "We were worried about the exam, but it turned out to be quite easy. - Sınav için endişeliydik ama ortaya çıktı ki oldukça kolaymış.",
  "do you mind if I": "Do you mind if I sit next to you during the presentation? - Sunum sırasında yanına otursam sakıncası var mı?",
  "that must be exciting": "You are moving to a new city? That must be exciting! - Yeni bir şehre mi taşınıyorsun? Bu heyecan verici olmalı!",
  "highly recommended": "The seafood restaurant by the beach is highly recommended by locals. - Sahildeki deniz ürünleri restoranı yerel halk tarafından şiddetle tavsiye edilir."
};

let content = fs.readFileSync('./src/data/vocabularyData.ts', 'utf8');

for (const [word, example] of Object.entries(examples)) {
  const regex = new RegExp(`(word:\\s*'${word.replace(/[.*+?^$\{\}()|[\\]\\\\]/g, '\\$&')}',[\\s\\S]*?translation:\\s*'[^']+',[\\s\\S]*?example:\\s*)''`, 'g');
  content = content.replace(regex, `$1'${example.replace(/'/g, "\\'")}'`);
}

fs.writeFileSync('./src/data/vocabularyData.ts', content);
console.log('Successfully updated remaining examples!');
