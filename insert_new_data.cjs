const fs = require('fs');

const vocabFile = './src/data/vocabularyData.ts';
const wordpowerFile = './src/data/wordpowerData.ts';

let vocabContent = fs.readFileSync(vocabFile, 'utf8');
let wordpowerContent = fs.readFileSync(wordpowerFile, 'utf8');

// The list of new vocabulary words (Word: Turkish meaning)
const newVocabText = `
successful: başarılı
talented: yetenekli
intelligent: zeki
confident: öz güvenli
determined: kararlı
achievement: başarı
attitude: tutum
give up: vazgeçmek
sociable: sosyal
outgoing: uyumlu
talkative: konuşkan
shy: utangaç
reserved: duygu belli etmeyen
lively: canlı
serious: ciddi
sensitive: hassas
valued: değerli
movement: eylem
despite: rağmen
songwriters: söz yazarı
bright: zeki
towards: karşı
ability: yetenek
pick up: almak, teslim almak
website: website
pollution: kirlilik
prevent: önlemek
wildlife: vahşi yaşam
endangered: tehlikede
save: korumak
damaged: zarar görmüş
protect: korumak
climate change: iklim değişikliği
environment: çevre
recycle: geri dönüşüm
creature: yaratık
local: yerel
destroy: yerle bir etmek
species: tür
survive: hayatta kalmak
limit: sınırlamak
branch: dal, branş
petals: taç yaprak
feathers: tüy
scales: pul
fur: kürk
bay: koy
rainforest: yağmur ormanları
waterfall: şelale
cave: mağara
skin: deri
leaf: yaprak
tail: kuyruk
paws: pati
web: ağ
coast: kıyı
stream: akarsu
desert: çöl
valley: vadi
hook: kanca
sticking: yapışmak
dried: kuru
gold fish: japon balığı
arctic: kutup
inspire: ilham almak
seeds: tohum
rose: gül
pine tree: çam ağacı
boarding pass: biniş kartı
air conditioning: klima
souvenir shop: hediyelik eşya dükkanı
bottle opener: şişe açacağı
window seat: cam kenarı
dishwasher: bulaşık makinesi
sightseeing tour: gezi turu
insect repellent: böcek savar
sleeping bag: uyku tulumu
street map: harita
cooked: pişmiş
raw: çiğ
creamy: krema
sweet: tatlı
crunchy: kıtır kıtır
sour: ekşi
heavy: ağır
fresh: taze
light: hafif
insights: iç yüzünü anlamak
integral: temel, önemli
approach to: yaklaşım
at the heart of: merkezine
supplement: ek
with authority: yetkili
augment: artırmak, büyütmek
vaccinations: aşı
plantain: muz türü
contribute: katkıda bulunmak
herbs: bitki
mention: bahsetmek
in advance: önceden
cuisine: mutfak
steamed rice: buharda pilav
peanut: fıstık
randomly: rastgele
explore: keşfetmek
propose: evlenme teklif etmek
bride: gelin
groom: damat
jewellery: mücevher
varied: çeşitli
flat: düz
moving house: ev taşımak
floor: kat
neighbour: komşu
move out of: bir yerden çıkmak
attic: çatı katı
basement: alt kat
terrace: teras
renting: kiralamak
block: apartman
neighbourhood: mahalle
ground floor: zemin kat
landing: sahanlık
step: basamak
argue with: tartışmak
cope with: başa çıkmak
think about: düşünmek
care about: umursamak
worry about: endişelenmek
complain about: şikayet etmek
rely on: güvenmek
depend on: bağlı olmak
pay for: ödemek
wait for: beklemek
apologise for: özür dilemek
believe in: inanmak
succeed in: başarmak
belong to: ait olmak
apologise to: özür dilemek
complain to: şikayet etmek
deduction: çıkarımda bulunmak
outskirts: şehrin etekleri
entire: tamamı
accommodation: konaklama
pleasure: zevk
property: mal
range: aralık
hosts: ev sahipleri
nearby: yakınlarda
theft: hırsızlık
cottage: kulübe
brainstorm: beyin fırtınası
create: yaratmak
hold a meeting: toplantı yapmak
subscriber: abone
series: dizi
episode: bölüm
deliver: teslimat
post on: gönderi paylaşmak
newsfeed: akış
items: madde
update: güncellemek
advise: tavsiye etmek
ask: rica etmek
were offering: teklif yapmak
persuade: ikna etmek
warn: uyarmak
promise: söz vermek
recommend: tavsiye
threaten: tehdit etmek
offer: teklif etmek
agree: aynı fikirde olmak
refuse: reddetmek
remind: hatırlatmak
suggest: önermek
admit: itiraf etmek
attend: katılmak
basis: temel
come across: karşılaşmak
fooled: kandırılmış
genuine: gerçek
kept: tutmak, sürmek
made up: uydurmak
submitted: teslim etmek
setting up: kurmak
get through: başarmak
according to: göre
wished: dilemek
enquiries: soruşturma
pretending: mış gibi yapmak
deceive: aldatmak
believe to: inanmak
on the whole: genel olarak
tends to: eğiliminde olmak
disappointed: hayal kırıklığına uğramış
disappointing: hayal kırıklığı yaratan
amused: eğlenmiş
amusing: eğlenceli
depressed: depresif
depressing: üzücü
audience: dinleyici
track: parça
character: karakter
event: etkinlik
held: düzenlemek
gulf: körfez
stage: sahne
profits: kâr
charity: hayır kurumu
beautiful: güzel
beauty: güzellik
celebration: kutlama
celebrate: kutlamak
charitable: hayırsever
creative: yaratıcı
creativity: yaratıcılık
cultural: kültürel
development: gelişim
develop: gelişmek
musical: müzikal
musician: müzisyen
organised: organize
organiser: organizatör
organize: organize etmek
performer: sanatçı
perform: performans sergilemek
wait a second: bir saniye bekle
one moment please: bir an lütfen
let me check for you: sizin için kontrol edeyim
misses: ıskalamak
opponents: rakipler
competitor: yarışmacı
referee: hakem
beat: yenmek
afraid of: korkmak
scared of: korkmuş
proud of: gurur duymak
essential for: gerekli
nervous: gergin
serendipity: tesadüf
tired of: bıkmış
right for: için doğru
similar to: benzer
popular with: ile popüler
perfect to: için mükemmel
definitely: kesinlikle
speaking of: demişken
that reminds me: o bana şunu hatırlattı
you've got nothing: hiçbir şeyin yok
by the way: bu arada
I was saying: diyordum ki
I'm still worried: hala endişeliyim
get: elde etmek
identify: belirlemek
disappear: kaybolmak
value: değer
hurt: incitmek
adopted: evlat edinmek
honour: onur
retirement: emeklilik
thick: kalın
constantly: sürekli
reached: ulaşmak
negotiate: müzakere
pressure: baskı
ambitious: hırslı
anxious: endişeli
frustration: hüsran
reduce: azaltmak
conflict: tartışma
misjudged: yanlış yargılama
smoother: pürüzsüz
clarifying: açıklığa kavuşturmak
awareness: farkındalık
likewise: benzer şekilde
nowadays: bugünlerde
presence: var olmak
avoid: kaçınmak
adapted: uyarlanmış
award: ödül
mess with: bulaşmak
miss: özlemek
thin: ince
closed: kapalı
shelves: raf
flexibility: esneklik
rebellious: asi
relaxed: rahat
unfamiliar: tanımadık
struggle: mücadele etmek
appreciate: takdir etmek
interaction: etkileşim
overcome: üstesinden gelmek
therefore: bu yüzden
issue: sorun
approach: yaklaşım
solve: çözmek
provide: sağlamak
tackle: mücadele etmek
concern: endişe
deal with: ilgilenmek
improve: iyileştirmek
promotion: terfi
`;

const existingVocabMatches = [...vocabContent.matchAll(/word:\s*'([^']+)'/g)].map(m => m[1].toLowerCase());
const existingSet = new Set(existingVocabMatches);

const lines = newVocabText.trim().split('\n');
let newVocabEntries = '';

lines.forEach(line => {
  if (!line.includes(':')) return;
  let [word, def] = line.split(':').map(s => s.trim());
  
  if (existingSet.has(word.toLowerCase())) {
    console.log(`Skipping duplicate: ${word}`);
  } else {
    existingSet.add(word.toLowerCase());
    // Auto category assigning based on context... but we can just use "Other" or "Daily"
    let id = word.toLowerCase().replace(/[^a-z0-9]/g, '-');
    newVocabEntries += `  {
    id: '${id}',
    word: '${word.replace(/'/g, "\\'")}',
    definition: '${def.replace(/'/g, "\\'")}',
    example: '',
    category: 'Daily'
  },\n`;
  }
});

if (newVocabEntries.length > 0) {
  vocabContent = vocabContent.replace(/\];(\s*)$/, `\n${newVocabEntries}];\n`);
  fs.writeFileSync(vocabFile, vocabContent);
  console.log('Added new vocabulary.');
} else {
  console.log('No new vocabulary to add.');
}

// Wordpower integration
const wordpowers = [
  {
    title: 'look',
    description: 'Look verb usage',
    items: [
      { phrase: 'Look at (a photo, a flower)', meaning: 'appearance (görünüşüne bakmak)', example: '' },
      { phrase: 'Watch (a film)', meaning: 'movement (hareketi izlemek)', example: '' },
      { phrase: 'See', meaning: 'visit, understand, be able to recognise', example: '' },
      { phrase: 'Hear', meaning: 'be able to recognise', example: '' },
      { phrase: 'Listen to (voice record)', meaning: 'sound (sesi dinlemek)', example: '' }
    ]
  },
  {
    title: 'over',
    description: 'Over prepositions and expressions',
    items: [
      { phrase: 'over by', meaning: 'olup bitmek', example: '' },
      { phrase: 'over the lake', meaning: 'karşısında', example: '' },
      { phrase: 'over 1 million', meaning: 'daha fazla', example: '' },
      { phrase: 'over the summer', meaning: 'sırasında', example: '' },
      { phrase: 'all over', meaning: 'kaplamak', example: '' }
    ]
  },
  {
    title: 'in / on + noun',
    description: 'Usage of in and on with nouns',
    items: [
      { phrase: 'in the picture', meaning: 'resimde', example: '' },
      { phrase: 'in the first paragraph', meaning: 'ilk paragrafta', example: '' },
      { phrase: 'in print', meaning: 'yazılı olarak', example: '' },
      { phrase: 'in euros', meaning: 'euro cinsinden', example: '' },
      { phrase: 'in size', meaning: 'boyutunda', example: '' },
      { phrase: 'in stock', meaning: 'stokta', example: '' },
      { phrase: 'in pencil', meaning: 'kurşun kalemle', example: '' },
      { phrase: 'on my phone', meaning: 'telefonumda', example: '' },
      { phrase: 'on page', meaning: 'sayfada', example: '' },
      { phrase: 'on the radio', meaning: 'radyoda', example: '' },
      { phrase: 'on the sign', meaning: 'tabelada', example: '' },
      { phrase: 'on the ticket', meaning: 'bilette', example: '' }
    ]
  },
  {
    title: 'Confusing Words',
    description: 'Commonly confused verbs and adverbs',
    items: [
      { phrase: 'lend to', meaning: 'ödünç vermek', example: '' },
      { phrase: 'borrow from', meaning: 'ödünç almak', example: '' },
      { phrase: 'miss', meaning: 'kaçırmak, özlemek', example: '' },
      { phrase: 'lose', meaning: 'kaybetmek', example: '' },
      { phrase: 'take', meaning: 'almak', example: '' },
      { phrase: 'bring', meaning: 'getirmek', example: '' },
      { phrase: 'raise', meaning: 'kaldırmak', example: '' },
      { phrase: 'rise', meaning: 'yükselmek', example: '' },
      { phrase: 'robbed', meaning: 'soygun yapmak', example: '' },
      { phrase: 'stole', meaning: 'çalmak', example: '' },
      { phrase: 'currently', meaning: 'şu sıralar', example: '' },
      { phrase: 'actually', meaning: 'aslında', example: '' }
    ]
  }
];

const existingWPMatches = [...wordpowerContent.matchAll(/title:\s*'([^']+)'/g)].map(m => m[1].toLowerCase());
const existingWPSet = new Set(existingWPMatches);

let newWPEntries = '';
wordpowers.forEach(wp => {
  if (existingWPSet.has(wp.title.toLowerCase())) {
    console.log(`Skipping duplicate wordpower: ${wp.title}`);
  } else {
    const itemsStr = wp.items.map(i => `      { phrase: '${i.phrase.replace(/'/g, "\\'")}', meaning: '${i.meaning.replace(/'/g, "\\'")}', example: '' }`).join(',\n');
    newWPEntries += `  {
    id: '${wp.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}',
    title: '${wp.title.replace(/'/g, "\\'")}',
    description: '${wp.description.replace(/'/g, "\\'")}',
    items: [
${itemsStr}
    ]
  },\n`;
  }
});

if (newWPEntries.length > 0) {
  wordpowerContent = wordpowerContent.replace(/\];(\s*)$/, `\n${newWPEntries}];\n`);
  fs.writeFileSync(wordpowerFile, wordpowerContent);
  console.log('Added new Wordpower topics.');
} else {
  console.log('No new Wordpower topics to add.');
}

