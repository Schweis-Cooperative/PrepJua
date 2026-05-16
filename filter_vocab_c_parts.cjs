const fs = require('fs');

const vocabFile = './src/data/vocabularyData.ts';
let vocabContent = fs.readFileSync(vocabFile, 'utf8');
const existingVocabMatches = [...vocabContent.matchAll(/word:\s*'([^']+)'/g)].map(m => m[1].toLowerCase());
const existingSet = new Set(existingVocabMatches);

const candidates = [
  { word: "if you ask me", meaning: "bence / bana sorarsan" },
  { word: "I know what you mean", meaning: "ne demek istediğini anlıyorum" },
  { word: "turned into", meaning: "dönüşmek" },
  { word: "make a good impression", meaning: "iyi bir izlenim bırakmak" },
  { word: "I'm not so sure about that", meaning: "o konuda pek emin değilim" },
  { word: "worth worrying about", meaning: "endişelenmeye değer" },
  { word: "I see where you're coming from", meaning: "ne demek istediğini anlıyorum" },
  { word: "take it back", meaning: "geri götürmek / iade etmek" },
  { word: "frozen", meaning: "donmuş (ekran vb.)" },
  { word: "annoying", meaning: "sinir bozucu" },
  { word: "claim on your insurance", meaning: "sigortadan talep etmek" },
  { word: "worth a try", meaning: "denemeye değer" },
  { word: "woken up", meaning: "uyandırılmış" },
  { word: "you won't believe what I did", meaning: "ne yaptığıma inanamayacaksın" },
  { word: "turned out", meaning: "ortaya çıkmak / sonuçlanmak" },
  { word: "That's a coincidence", meaning: "ne tesadüf" },
  { word: "responding positively", meaning: "olumlu yanıt vermek" },
  { word: "showing surprise", meaning: "şaşkınlık göstermek" },
  { word: "asking for more information", meaning: "daha fazla bilgi istemek" },
  { word: "what a mistake", meaning: "ne hata" },
  { word: "freecycling", meaning: "ücretsiz eşya takası" },
  { word: "Do you need a hand?", meaning: "yardıma ihtiyacın var mı?" },
  { word: "I'm having a fridge delivered", meaning: "buzdolabı getirtiyorum (causative)" },
  { word: "What do you need?", meaning: "neye ihtiyacın var?" },
  { word: "Can you give me a hand?", meaning: "yardım edebilir misin?" },
  { word: "giving reasons", meaning: "sebep belirtmek" },
  { word: "giving results", meaning: "sonuç belirtmek" },
  { word: "giving examples", meaning: "örnek vermek" },
  { word: "spread my wings", meaning: "kanatlarını açmak / ufkunu genişletmek" },
  { word: "giving yourself time to think", meaning: "kendine düşünme payı bırakmak" },
  { word: "Let me see", meaning: "bir bakayım / bir düşüneyim" },
  { word: "Just a second", meaning: "bir saniye" },
  { word: "take her somewhere special", meaning: "onu özel bir yere götürmek" },
  { word: "expensive ring", meaning: "pahalı yüzük" },
  { word: "ridiculous", meaning: "gülünç, saçma" },
  { word: "express surprise", meaning: "şaşkınlık ifade etmek" },
  { word: "sounding interested", meaning: "ilgileniyormuş gibi ses çıkarmak" },
  { word: "no way!", meaning: "yok artık! / olamaz!" },
  { word: "mind if I borrow", meaning: "ödünç alsam sorun olur mu?" },
  { word: "do you mind", meaning: "sakıncası var mı?" },
  { word: "sounding polite", meaning: "kibar konuşmak / kulağa kibar gelmek" },
  { word: "imagining people's feelings", meaning: "insanların hislerini tahmin etmek" },
  { word: "all under control", meaning: "her şey kontrol altında" },
  { word: "action shots", meaning: "aksiyon çekimleri / hareketli çekimler" },
  { word: "normally", meaning: "normalde" },
  { word: "typically", meaning: "tipik olarak" },
  { word: "as a rule", meaning: "kural olarak / genelde" },
  { word: "being vague", meaning: "üstü kapalı / belirsiz konuşmak" },
  { word: "builder", meaning: "inşaatçı" },
  { word: "placement", meaning: "staj / yerleştirme" },
  { word: "earring", meaning: "küpe" },
  { word: "it's meant to be excellent", meaning: "mükemmel olması bekleniyor" },
  { word: "highly recommended", meaning: "şiddetle tavsiye edilen" },
  { word: "doubt", meaning: "şüphe etmek" },
  { word: "showing contrast", meaning: "zıtlık göstermek" },
  { word: "asking someone to wait", meaning: "birinden beklemesini istemek" },
  { word: "one moment", meaning: "bir dakika" },
  { word: "exhibition", meaning: "sergi" },
  { word: "reassure someone", meaning: "birine güvence vermek / içini rahatlatmak" },
  { word: "what if something goes wrong", meaning: "ya bir şeyler ters giderse" },
  { word: "she's not going to say no", meaning: "hayır demeyecek" },
  { word: "changing the subject", meaning: "konuyu değiştirmek" },
  { word: "scared of flying", meaning: "uçmaktan korkan" },
  { word: "anyway, as I was saying", meaning: "her neyse, dediğim gibi" }
];

let newVocabEntries = '';
let count = 0;

candidates.forEach(cand => {
  let wordLower = cand.word.toLowerCase();
  
  // also check if parts match to avoid duplicates like "wait a second" vs "just a second"
  // but strictly deduplication requires exact word matching.
  
  if (existingSet.has(wordLower)) {
    console.log(`Skipping duplicate: ${cand.word}`);
  } else {
    existingSet.add(wordLower);
    count++;
    let id = wordLower.replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    // prefix with c-part-
    id = `c-part-${id}-${count}`;
    
    newVocabEntries += `  {
    id: '${id}',
    word: '${cand.word.replace(/'/g, "\\'")}',
    translation: '${cand.meaning.replace(/'/g, "\\'")}',
    example: '',
    category: 'phrase',
  },\n`;
  }
});

if (newVocabEntries.length > 0) {
  // Add to vocab array. Wait, in vocabularyData.ts it's "definition" or "translation"? 
  // Let me check what the schema actually uses. I remember I used "definition" in the first script but "translation" in the replace.
  // Actually, wait, let me ensure I use the correct keys. The interface has `translation` or `definition`?
  // In `vocabularyData.ts` line 3402 it was `definition: 'değer'`.
  // Wait, my replacement for `me neither` had `translation: 'Ben de...'`! 
  // Let's use both or check the interface. 
}

console.log("Count of new words:", count);
