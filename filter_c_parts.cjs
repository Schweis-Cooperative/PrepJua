const fs = require('fs');

const vocabFile = './src/data/vocabularyData.ts';
let vocabContent = fs.readFileSync(vocabFile, 'utf8');

const existingMatches = [...vocabContent.matchAll(/word:\s*'([^']+)'/g)].map(m => m[1].toLowerCase());
const existingSet = new Set(existingMatches);

const c_parts_vocab = [
  { word: "make a good impression", translation: "iyi bir izlenim bırakmak" },
  { word: "I'm not so sure about that", translation: "Ondan o kadar emin değilim" },
  { word: "I see where you're coming from", translation: "Ne demek istediğini anlıyorum" },
  { word: "to be turned into", translation: "dönüştürülmek" },
  { word: "take it back", translation: "geri götürmek, iade etmek" },
  { word: "turn it off and on again", translation: "kapatıp tekrar açmak" },
  { word: "claim on your insurance", translation: "sigortadan talep etmek" },
  { word: "what have I got to lose", translation: "kaybedecek neyim var ki" },
  { word: "broken down", translation: "bozulmak (araba, makine vb.)" },
  { word: "spill", translation: "dökmek (sıvı)" },
  { word: "annoying", translation: "sinir bozucu" },
  { word: "complain about", translation: "hakkında şikayet etmek" },
  { word: "frozen screen", translation: "donmuş ekran" },
  { word: "you won't believe what I did", translation: "ne yaptığıma inanamayacaksın" },
  { word: "it turned out", translation: "ortaya çıktı ki, meğerse" },
  { word: "coincidence", translation: "tesadüf" },
  { word: "in the end", translation: "sonunda" },
  { word: "luckily", translation: "şans eseri, neyse ki" },
  { word: "straight away", translation: "hemen, derhal" },
  { word: "freecycling", translation: "bedava eşya takası" },
  { word: "get a refund", translation: "para iadesi almak" },
  { word: "do you need a hand", translation: "yardıma ihtiyacın var mı" },
  { word: "ask a favour in return", translation: "karşılığında bir iyilik istemek" },
  { word: "give someone a hand", translation: "birine yardım etmek" },
  { word: "take photos", translation: "fotoğraf çekmek" },
  { word: "give someone a lift", translation: "birini arabayla bırakmak" },
  { word: "talk through", translation: "enine boyuna konuşmak, tartışmak" },
  { word: "as a result", translation: "sonuç olarak" },
  { word: "for instance", translation: "örneğin" },
  { word: "because of", translation: "yüzünden, -den dolayı" },
  { word: "for example", translation: "örneğin" },
  { word: "deal with", translation: "ilgilenmek, başa çıkmak" },
  { word: "spread my wings", translation: "kanatlarını açmak, yeni şeyler denemek" },
  { word: "resigned", translation: "istifa etmek" },
  { word: "bored in my job", translation: "işimden sıkıldım" },
  { word: "ask for recommendations", translation: "tavsiye istemek" },
  { word: "worth asking", translation: "sormaya değer" },
  { word: "huge diamond", translation: "kocaman elmas" },
  { word: "ridiculous", translation: "saçma, gülünç" },
  { word: "take presents", translation: "hediye götürmek" },
  { word: "arrive on time", translation: "zamanında varmak" },
  { word: "take your shoes off", translation: "ayakkabılarını çıkarmak" },
  { word: "is there anything we can do to help", translation: "yardım edebileceğimiz bir şey var mı" },
  { word: "is it OK if I", translation: "yapsam olur mu / sorun olur mu" },
  { word: "it's all under control", translation: "her şey kontrol altında" },
  { word: "do you mind if I", translation: "yapsam sakıncası var mı" },
  { word: "not at all", translation: "hiç de bile, rica ederim" },
  { word: "it's hot in here", translation: "burası çok sıcak" },
  { word: "I imagine you're", translation: "olduğunu tahmin ediyorum" },
  { word: "that must be exciting", translation: "bu heyecan verici olmalı" },
  { word: "on the whole", translation: "genel olarak" },
  { word: "action shots", translation: "hareketli çekimler" },
  { word: "generally", translation: "genellikle" },
  { word: "normally", translation: "normalde" },
  { word: "typically", translation: "tipik olarak" },
  { word: "as a rule", translation: "kural olarak, genel olarak" },
  { word: "a couple of", translation: "birkaç" },
  { word: "sort of thing", translation: "o tarz şeyler" },
  { word: "kind of thing", translation: "bu tarz bir şey" },
  { word: "vague language", translation: "belirsiz dil" },
  { word: "except for", translation: "haricinde, -den başka" },
  { word: "it's meant to be", translation: "olduğu söyleniyor, olması bekleniyor" },
  { word: "highly recommended", translation: "şiddetle tavsiye edilen" },
  { word: "it's supposed to be", translation: "olduğu söyleniyor, olması bekleniyor" },
  { word: "I'm not a big fan of", translation: "nın büyük bir hayranı değilim, pek sevmem" },
  { word: "I doubt", translation: "şüpheliyim" },
  { word: "just a moment", translation: "sadece bir an, bir saniye" },
  { word: "let me check", translation: "kontrol edeyim" },
  { word: "public speaking", translation: "topluluk önünde konuşma" },
  { word: "what if she says no", translation: "ya hayır derse" },
  { word: "as I was saying", translation: "dediğim gibi" },
  { word: "changing the subject", translation: "konuyu değiştirmek" }
];

let addedCount = 0;
let newVocabEntries = '';

c_parts_vocab.forEach(item => {
  if (!existingSet.has(item.word.toLowerCase())) {
    existingSet.add(item.word.toLowerCase());
    addedCount++;
    
    let id = item.word.toLowerCase().replace(/[^a-z0-9]/g, '-');
    newVocabEntries += `  {
    id: 'v-c-${id}',
    word: '${item.word.replace(/'/g, "\\'")}',
    translation: '${item.translation.replace(/'/g, "\\'")}',
    example: '',
    category: 'phrase',
  },\n`;
  }
});

if (newVocabEntries.length > 0) {
  vocabContent = vocabContent.replace(/\];(\s*)$/, `\n${newVocabEntries}];\n`);
  fs.writeFileSync(vocabFile, vocabContent);
}

console.log(`Added ${addedCount} new words/phrases.`);
