const fs = require('fs');

const file = './src/data/vocabularyData.ts';
let content = fs.readFileSync(file, 'utf8');

const exampleGenerator = {
  // Common vocabulary items
  'make a good impression': 'I dressed well for the interview to make a good impression. - İyi bir izlenim bırakmak için mülakatta iyi giyindim.',
  'I\'m not so sure about that': 'I\'m not so sure about that plan. - O plan hakkında o kadar emin değilim.',
  'I see where you\'re coming from': 'I see where you\'re coming from, but I disagree. - Ne demek istediğini anlıyorum ama katılmıyorum.',
  'to be turned into': 'The old factory is going to be turned into a museum. - Eski fabrika bir müzeye dönüştürülecek.',
  'take it back': 'If the shirt doesn\'t fit, you can take it back to the store. - Eğer gömlek uymazsa, mağazaya iade edebilirsin.',
  'turn it off and on again': 'If your computer freezes, try to turn it off and on again. - Bilgisayarınız donarsa, kapatıp tekrar açmayı deneyin.',
  'claim on your insurance': 'You should claim on your insurance for the stolen car. - Çalınan araba için sigortadan talep etmelisin.',
  'what have I got to lose': 'I might as well apply for the job, what have I got to lose? - İşe başvursam iyi olur, kaybedecek neyim var ki?',
  'broken down': 'My car has broken down on the highway. - Arabam otoyolda bozuldu.',
  'spill': 'Be careful not to spill your coffee on the keyboard. - Kahveni klavyeye dökmemeye dikkat et.',
  'annoying': 'The loud noise outside is really annoying. - Dışarıdaki yüksek ses gerçekten sinir bozucu.',
  'complain about': 'Customers often complain about the slow service. - Müşteriler sık sık yavaş hizmetten şikayet ederler.',
  'frozen screen': 'I had to restart my laptop because of a frozen screen. - Donmuş ekran yüzünden dizüstü bilgisayarımı yeniden başlatmak zorunda kaldım.',
  'you won\'t believe what I did': 'You won\'t believe what I did at the party last night! - Dün gece partide ne yaptığıma inanamayacaksın!',
  'it turned out': 'It turned out that we had been to the same school. - Meğerse aynı okula gitmişiz.',
  'coincidence': 'What a coincidence to meet you here! - Seni burada görmek ne tesadüf!',
  'in the end': 'In the end, we decided to stay home. - Sonunda, evde kalmaya karar verdik.',
  'luckily': 'Luckily, nobody was hurt in the accident. - Neyse ki, kazada kimse yaralanmadı.',
  'straight away': 'I will send you the report straight away. - Raporu sana derhal göndereceğim.',
  'freecycling': 'Freecycling is a great way to get rid of old furniture. - Bedava eşya takası, eski mobilyalardan kurtulmanın harika bir yoludur.',
  'get a refund': 'If you are not satisfied, you can get a refund. - Eğer memnun kalmazsanız, para iadesi alabilirsiniz.',
  'do you need a hand': 'These boxes look heavy, do you need a hand? - Bu kutular ağır görünüyor, yardıma ihtiyacın var mı?',
  'ask a favour in return': 'I will help you, but I might ask a favour in return. - Sana yardım edeceğim, ama karşılığında bir iyilik isteyebilirim.',
  'give someone a hand': 'Could you give me a hand with this project? - Bu projede bana yardım edebilir misin?',
  'take photos': 'We took many photos during our vacation in Paris. - Paris tatilimiz sırasında birçok fotoğraf çektik.',
  'give someone a lift': 'I can give you a lift to the train station. - Seni tren istasyonuna arabayla bırakabilirim.',
  'talk through': 'We need to talk through the details of the contract. - Sözleşmenin detaylarını enine boyuna tartışmalıyız.',
  'for example': 'Many fast food items, for example burgers and fries, are unhealthy. - Örneğin hamburger ve patates kızartması gibi birçok fast food ürünü sağlıksızdır.',
  'spread my wings': 'Going to university will help me spread my wings. - Üniversiteye gitmek kanatlarını açmama ve yeni şeyler denememe yardımcı olacak.',
  'resigned': 'She resigned from her job after finding a better offer. - Daha iyi bir teklif bulduktan sonra işinden istifa etti.',
  'bored in my job': 'I was feeling bored in my job, so I started looking for a new one. - İşimden sıkılmıştım, bu yüzden yeni bir iş aramaya başladım.',
  'ask for recommendations': 'We should ask for recommendations before choosing a restaurant. - Bir restoran seçmeden önce tavsiye istemeliyiz.',
  'worth asking': 'It is worth asking the teacher for extra help. - Öğretmenden ekstra yardım istemeye değer.',
  'huge diamond': 'She wore a ring with a huge diamond. - Kocaman bir elması olan bir yüzük takıyordu.',
  'ridiculous': 'It is ridiculous to spend that much money on a t-shirt. - Bir tişörte o kadar para harcamak çok saçma.',
  'take presents': 'It is polite to take presents when visiting someone\'s home. - Birinin evini ziyaret ederken hediye götürmek kibarlıktır.',
  'arrive on time': 'Please make sure to arrive on time for the meeting. - Lütfen toplantıya zamanında varmaya dikkat edin.',
  'take your shoes off': 'In many cultures, you must take your shoes off before entering a house. - Çoğu kültürde, bir eve girmeden önce ayakkabılarınızı çıkarmalısınız.',
  'is there anything we can do to help': 'You look busy, is there anything we can do to help? - Meşgul görünüyorsun, yardım edebileceğimiz bir şey var mı?',
  'is it OK if I': 'Is it OK if I leave the meeting a bit early? - Toplantıdan biraz erken ayrılsam sorun olur mu?',
  'it\'s all under control': 'Don\'t worry about the event, it\'s all under control. - Etkinlik için endişelenme, her şey kontrol altında.',
  'do you mind if I': 'Do you mind if I open the window? - Pencereyi açsam sakıncası var mı?',
  'not at all': '"Do you mind if I sit here?" - "Not at all." - "Buraya oturmamın sakıncası var mı?" - "Hiç de bile / Rica ederim."',
  'it\'s hot in here': 'Can we turn on the AC? It\'s hot in here. - Klimayı açabilir miyiz? Burası çok sıcak.',
  'I imagine you\'re': 'I imagine you\'re very tired after the long flight. - Uzun uçuştan sonra çok yorgun olduğunu tahmin ediyorum.',
  'that must be exciting': 'You are moving to London? That must be exciting! - Londra\'ya mı taşınıyorsun? Bu heyecan verici olmalı!',
  'action shots': 'The sports photographer took some amazing action shots. - Spor fotoğrafçısı inanılmaz hareketli çekimler yaptı.',
  'generally': 'Generally, I prefer to stay home on weekends. - Genellikle hafta sonları evde kalmayı tercih ederim.',
  'normally': 'I normally wake up at 7 AM. - Normalde sabah 7\'de uyanırım.',
  'typically': 'Typically, the weather here is warm in spring. - Tipik olarak, burada hava ilkbaharda sıcaktır.',
  'as a rule': 'As a rule, you should not eat heavily before sleeping. - Kural olarak, uyumadan önce ağır yememelisiniz.',
  'a couple of': 'I have a couple of questions about the project. - Proje hakkında birkaç sorum var.',
  'sort of thing': 'I enjoy hiking and that sort of thing. - Doğa yürüyüşü ve o tarz şeyleri severim.',
  'kind of thing': 'Action movies are not really my kind of thing. - Aksiyon filmleri pek benim tarzım olan şeyler değil.',
  'vague language': 'Politicians often use vague language to avoid making promises. - Politikacılar söz vermekten kaçınmak için sık sık belirsiz dil kullanırlar.',
  'except for': 'Everyone passed the exam except for John. - John haricinde herkes sınavı geçti.',
  'it\'s meant to be': 'This new restaurant is meant to be excellent. - Bu yeni restoranın mükemmel olduğu söyleniyor.',
  'highly recommended': 'This book was highly recommended by my professor. - Bu kitap profesörüm tarafından şiddetle tavsiye edildi.',
  'it\'s supposed to be': 'It\'s supposed to be sunny tomorrow. - Yarın havanın güneşli olması bekleniyor.',
  'I\'m not a big fan of': 'I\'m not a big fan of horror movies. - Korku filmlerinin büyük bir hayranı değilim.',
  'I doubt': 'I doubt that he will arrive on time. - Zamanında varacağından şüpheliyim.',
  'just a moment': 'Just a moment, let me grab my coat. - Bir saniye, ceketimi alayım.',
  'let me check': 'Let me check my calendar to see if I am free. - Müsait miyim görmek için takvimimi kontrol edeyim.',
  'public speaking': 'Many people are afraid of public speaking. - Çoğu insan topluluk önünde konuşmaktan korkar.',
  'what if she says no': 'I want to ask her out, but what if she says no? - Onu dışarı çıkmaya davet etmek istiyorum, ama ya hayır derse?',
  'as I was saying': 'Anyway, as I was saying, the project is almost finished. - Neyse, dediğim gibi, proje neredeyse bitti.',
  'changing the subject': 'Changing the subject, did you watch the game last night? - Konuyu değiştirmek gibi olmasın ama, dün geceki maçı izledin mi?'
};

// Replace empty examples with generated ones
let replacedCount = 0;

content = content.replace(/word:\s*'([^']+)',\s*translation:\s*'([^']+)',\s*example:\s*''/g, (match, word, translation) => {
  const generatedExample = exampleGenerator[word];
  if (generatedExample) {
    replacedCount++;
    return `word: '${word}',\n    translation: '${translation}',\n    example: "${generatedExample}"`;
  }
  // Generic fallback if not in the map
  const fallback = `She used the phrase "${word}" in her sentence. - Cümlesinde "${word}" ifadesini kullandı.`;
  replacedCount++;
  return `word: '${word}',\n    translation: '${translation}',\n    example: "${fallback}"`;
});

fs.writeFileSync(file, content);
console.log(`Updated ${replacedCount} empty examples.`);
