const fs = require('fs');

let file = fs.readFileSync('src/data/grammarData.ts', 'utf8');

const units1and2 = `
  // ═══════════════════════════════════════════════════════════════
  // UNIT 1 — Subject and object questions (Grammar Focus 1A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "subject-object-questions",
    title: "Özne ve Nesne Soruları (Subject and Object Questions)",
    description: "Özne ve nesne sorularının kullanımı. (Grammar Focus 1A)",
    content: \`
## Subject and object questions (Özne ve nesne soruları)

a Aşağıdaki soru ve cevapları inceleyin. Ana fiiller kalın yazılmıştır.
1 Soru: What do experts **say** about making friends online?
Cevap: You need to build friendships carefully.
2 Soru: Who **thinks** online friendships aren't real?
Cevap: People from generations that didn't grow up with online friendships.

- 1. soruda özne *experts* (uzmanlar)'dır. 1. soru bir **nesne sorusudur (object question)**. (Cevap nesneyi verir)
- 2. soruda özne *Who* (kim)'dur. 2. soru bir **özne sorusudur (subject question)**. (Cevap özneyi verir)
- **Nesne sorularında (object questions)** *do, does, did* gibi yardımcı fiiller kullanırız. Özne sorularında ise bu yardımcı fiilleri KULLANMAYIZ.
    \`,
    tips: [
      "Nesne sorularında (object questions) soru kelimesi nesneyi sorar. Bu durumda do/does/did yardımcı fiillerini kullanırız.",
      "Özne sorularında (subject questions) soru kelimesi doğrudan öznenin yerini tutar. Bu yüzden do/does/did KULLANILMAZ ve fiil normal çekimlenir.",
    ],
    questions: [
      {
        id: "gf1a-q1",
        question: "Grammar Focus 1A: Make a question: Who / call / you / yesterday? (Subject question)",
        options: ["Who called you yesterday?", "Who did call you yesterday?"],
        correctAnswer: 0,
        explanation: "Özne sorusudur, bu yüzden 'did' yardımcı fiili kullanılmaz.",
      },
      {
        id: "gf1a-q2",
        question: "Grammar Focus 1A: Make a question: Who / you / last / text? (Object question)",
        options: ["Who did you last text?", "Who you last texted?"],
        correctAnswer: 0,
        explanation: "Nesne sorusudur, bu yüzden 'did' yardımcı fiili kullanılır.",
      },
      {
        id: "gf1a-q3",
        question: "Grammar Focus 1A: Make a question: What / you and your friends / talk about? (Object question)",
        options: ["What do you and your friends talk about?", "What you and your friends talk about?"],
        correctAnswer: 0,
        explanation: "Nesne sorusudur, bu yüzden 'do' yardımcı fiili kullanılır.",
      },
      {
        id: "gf1a-q4",
        question: "Grammar Focus 1A: Make a question: What / make / you and your friends / laugh? (Subject question)",
        options: ["What makes you and your friends laugh?", "What does make you and your friends laugh?"],
        correctAnswer: 0,
        explanation: "Özne sorusudur, bu yüzden 'does' yardımcı fiili kullanılmaz.",
      },
      {
        id: "gf1a-q5",
        question: "Grammar Focus 1A: Make a question: Which of your friends / you / see / every day? (Object question)",
        options: ["Which of your friends do you see every day?", "Which of your friends see you every day?"],
        correctAnswer: 0,
        explanation: "Nesne sorusudur, bu yüzden 'do' yardımcı fiili kullanılır.",
      },
      {
        id: "gf1a-q6",
        question: "Grammar Focus 1A: Make a question: What / post / last / make / you laugh? (Subject question)",
        options: ["What post last made you laugh?", "What did post last make you laugh?"],
        correctAnswer: 0,
        explanation: "Özne sorusudur, bu yüzden 'did' yardımcı fiili kullanılmaz.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 1 — Present simple and present continuous (Grammar Focus 1B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "present-simple-continuous",
    title: "Geniş Zaman ve Şimdiki Zaman (Present simple and present continuous)",
    description: "Geniş zaman (Present simple) ve Şimdiki zaman (Present continuous) kullanımları. (Grammar Focus 1B)",
    content: \`
## Present simple (Geniş Zaman)
Present simple'ı şu durumlarda kullanabiliriz:
1 Genellikle doğru olan, genel geçer şeylerden bahsederken
2 Alışkanlıklar ve rutinlerden bahsederken
3 Durum fiilleriyle (state verbs) – düşünce (ör. *understand*), his (ör. *want*) ve sahiplik (ör. *own*) bildiren fiillerle

## Present continuous (Şimdiki Zaman)
Present continuous'u şu durumlardan bahsederken kullanabiliriz:
1 Konuşma veya yazma anında devam eden, yapılmakta olan eylemler
2 Konuşma veya yazma anı civarında (öncesi ve sonrasında) devam eden geçici durumlar
3 Değişmekte olan durumlar ve süreçler

**Kural:**
özne + *am / is / are* + fiil + *-ing*
    \`,
    tips: [
      "Present simple (Geniş zaman): Alışkanlıklar, rutinler, genel geçer doğrular ve durum fiilleri (state verbs) ile kullanılır.",
      "Present continuous (Şimdiki zaman): Şu an veya bu aralar devam eden olaylar ve değişmekte olan durumlar için kullanılır.",
    ],
    questions: [
      {
        id: "gf1b-q1",
        question: "Grammar Focus 1B: Which tense is used to talk about habits and routines?",
        options: ["Present simple", "Present continuous"],
        correctAnswer: 0,
        explanation: "Alışkanlıklar ve rutinler için Geniş Zaman (Present simple) kullanılır.",
      },
      {
        id: "gf1b-q2",
        question: "Grammar Focus 1B: Which tense is used for actions in progress at the same time as speaking?",
        options: ["Present simple", "Present continuous"],
        correctAnswer: 1,
        explanation: "Konuşma anında devam eden olaylar için Şimdiki Zaman (Present continuous) kullanılır.",
      },
      {
        id: "gf1b-q3",
        question: "Grammar Focus 1B: 'Young people are spending more and more time playing video games.' What is this an example of?",
        options: ["Habits and routines", "Changing situations"],
        correctAnswer: 1,
        explanation: "Bu cümle değişmekte olan bir durumu tarif eder (Present continuous).",
      },
      {
        id: "gf1b-q4",
        question: "Grammar Focus 1B: 'People learn better if they enjoy learning.' What is this an example of?",
        options: ["Things that are generally true", "State verbs"],
        correctAnswer: 0,
        explanation: "Bu cümle genel geçer bir doğruyu ifade eder (Present simple).",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 2 — Present perfect and past simple (Grammar Focus 2A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "present-perfect-past-simple",
    title: "Present perfect ve Past simple",
    description: "Present perfect ve Past simple kullanımları. (Grammar Focus 2A)",
    content: \`
## Present perfect ve Past simple

a Hikayelerdeki bu cümleleri inceleyin. Kalın yazılı fiillerin hangileri present perfect, hangileri past simple formundadır?
1 I'**ve had** a lot of good interviews, but this one was a disaster. (Present perfect)
2 I **had** a job interview with two people last week. (Past simple)
3 They'**ve** just **offered** me the job! (Present perfect)

**Kural:**
Geçmiş zaman (Past simple) oluşturmak için fiile *-ed* takısı ekleriz ya da fiilin düzensiz (irregular) 2. halini kullanırız.
Present perfect'i ise *have/has* + *fiilin 3. hali (past participle)* ile oluştururuz.

- **Past simple**'ı geçmişteki belirli bir zamanda (örneğin 'yesterday', 'last week') olmuş olaylardan bahsederken kullanırız.
- **Present perfect**'i yakın zamanda gerçekleşmiş ancak etkisi şu an devam eden olaylardan bahsederken kullanırız.
- **Present perfect**'i hayatımızın bir dönemindeki tecrübelerimizden (zaman vermeden) bahsederken kullanırız.
    \`,
    tips: [
      "Past simple: Geçmişte net olarak belli bir zamanda olup bitmiş olaylar.",
      "Present perfect: Yakın zamanda olmuş ve etkisi süren olaylar veya geçmişten bugüne kadarki hayat tecrübelerimiz.",
    ],
    questions: [
      {
        id: "gf2a-q1",
        question: "Grammar Focus 2A: Complete the sentence: I ________ (never / have) a really terrible job interview.",
        options: ["'ve never had", "never had"],
        correctAnswer: 0,
        explanation: "Hayat tecrübesinden bahsettiği için Present perfect kullanılır.",
      },
      {
        id: "gf2a-q2",
        question: "Grammar Focus 2A: Complete the sentence: Once, I ________ (forget) to turn off my phone when I was at the cinema.",
        options: ["forgot", "have forgotten"],
        correctAnswer: 0,
        explanation: "Geçmişte belirli bir zamanda olup bitmiş bir olay olduğu için Past simple kullanılır.",
      },
      {
        id: "gf2a-q3",
        question: "Grammar Focus 2A: Complete the sentence: Sorry, I can't come with you. My boss ________ (ask) me to work at the weekend.",
        options: ["has asked", "asked"],
        correctAnswer: 0,
        explanation: "Yakın zamanda olmuş ve şu anki duruma etkisi olan bir olay olduğu için Present perfect kullanılır.",
      },
      {
        id: "gf2a-q4",
        question: "Grammar Focus 2A: Complete the sentence: I ________ (finish) my exams, but I ________ (not / get) the results yet.",
        options: ["finished / didn't get", "'ve finished / haven't got"],
        correctAnswer: 1,
        explanation: "Geçmişte başlayıp günümüze kadar gelen süreci/sonucu anlattığı için Present perfect kullanılır.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 2 — Present perfect and present perfect continuous (Grammar Focus 2B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "present-perfect-continuous",
    title: "Present perfect ve Present perfect continuous",
    description: "Present perfect ve Present perfect continuous kullanımları. (Grammar Focus 2B)",
    content: \`
## Present perfect ve present perfect continuous

a Şu örnekleri inceleyip kuralları hatırlayın:
- I'**ve always been** keen on photography. I'**ve been taking** photos since I was 12.
- StopApp is a really useful app and I'**ve been recommending** it to all my friends.
- I'**ve had** it for a week, and I'**ve been using** it a lot.

**Kural:**
Present perfect continuous tense'i oluşturmak için *have/has* + *been* + *verb-ing* kullanırız.

- Durum bildiren (hareket bildirmeyen - state verbs) fiillerle her zaman **present perfect** kullanırız.
- Aktivite veya süreç bildiren fiillerle ise, bir şeyin şu ana kadar ne kadar süredir devam ettiğini veya yakın zamanda tekrar tekrar yapıldığını vurgulamak için **present perfect continuous** kullanırız.
    \`,
    tips: [
      "Present perfect: Durum bildiren fiiller (state verbs - be, have, know, like vb.).",
      "Present perfect continuous: Aktivite/süreç bildiren fiiller (taking, recommending, using vb.).",
    ],
    questions: [
      {
        id: "gf2b-q1",
        question: "Grammar Focus 2B: Complete the sentence: I ________ this phone for three years. (own)",
        options: ["'ve owned", "'ve been owning"],
        correctAnswer: 0,
        explanation: "'own' (sahip olmak) bir durum fiilidir (state verb), bu yüzden Present perfect kullanırız.",
      },
      {
        id: "gf2b-q2",
        question: "Grammar Focus 2B: Complete the sentence: I ________ for my own name online. (never / search)",
        options: ["'ve never searched", "'ve never been searching"],
        correctAnswer: 0,
        explanation: "Hayat tecrübesi ifade edildiği için Present perfect kullanırız.",
      },
      {
        id: "gf2b-q3",
        question: "Grammar Focus 2B: Complete the sentence: I ________ TV all day. (watch)",
        options: ["'ve watched", "'ve been watching"],
        correctAnswer: 1,
        explanation: "Şu ana kadar devam eden uzun süreli bir aktivite olduğu için Present perfect continuous kullanırız.",
      },
      {
        id: "gf2b-q4",
        question: "Grammar Focus 2B: Complete the sentence: I ________ for a new tablet, but I haven't got enough money yet. (save up)",
        options: ["'ve saved up", "'ve been saving up"],
        correctAnswer: 1,
        explanation: "Şu ana kadar devam eden ve süreci vurgulanan bir aktivite olduğu için Present perfect continuous kullanırız.",
      }
    ],
  },
`;

file = file.replace('export const grammarData: GrammarTopic[] = [', 'export const grammarData: GrammarTopic[] = [\n' + units1and2);

const units7to10 = `
  // ═══════════════════════════════════════════════════════════════
  // UNIT 7 — Modals of deduction (Grammar Focus 7A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "modals-of-deduction",
    title: "Çıkarım Kipleri (Modals of deduction)",
    description: "Çıkarım yapmak için Must, might, could, can't kullanımı. (Grammar Focus 7A)",
    content: \`
## Modals of deduction (Çıkarım Kipleri)

Aşağıdaki cümlelere ve anlamlarına bakın:
1 It **must** be a holiday home. -> Bunun bir tatil evi olduğuna eminim. (Kesinlikle öyle)
2 It **might** be a holiday home. -> Sanırım bir tatil evi. (Ama emin değilim, olabilir)
3 It **could** be a holiday home. -> Sanırım bir tatil evi. (Ama emin değilim, olabilir)
4 It **can't** be a holiday home. -> Bunun bir tatil evi olmadığına eminim. (İmkansız)

**Kural:**
*must*, *might*, *could* ve *can't* kiplerinden sonra fiilin yalın hali (to olmadan) kullanılır.
Not: Çıkarım yaparken "kesinlikle öyle değil" anlamını vermek için *mustn't* DEĞİL, *can't* kullanırız!
    \`,
    tips: [
      "must: Eminim öyledir. (Yüksek ihtimalli çıkarım)",
      "might / could: Sanırım öyledir (Emin değilim, olabilir).",
      "can't: Eminim öyle değildir (İmkansız). Dikkat: must'ın zıttı burada mustn't değil can't'dir!",
      "Bu kiplerden sonra fiil yalın halde (infinitive without to) gelir.",
    ],
    questions: [
      {
        id: "gf7a-q1",
        question: "Grammar Focus 7A: 'I'm sure it's a holiday home.' Which modal means this?",
        options: ["must", "might", "can't"],
        correctAnswer: 0,
        explanation: "must = Eminim öyledir.",
      },
      {
        id: "gf7a-q2",
        question: "Grammar Focus 7A: 'I'm sure it's not a holiday home.' Which modal means this?",
        options: ["mustn't", "can't", "might not"],
        correctAnswer: 1,
        explanation: "can't = Eminim öyle değildir. (Çıkarımda mustn't kullanılmaz!)",
      },
      {
        id: "gf7a-q3",
        question: "Grammar Focus 7A: Complete the sentence: It's very small, so it ________ belong to a big family.",
        options: ["must", "can't", "could"],
        correctAnswer: 1,
        explanation: "Çok küçük olduğu için büyük bir aileye ait olmadığına eminiz = can't.",
      },
      {
        id: "gf7a-q4",
        question: "Grammar Focus 7A: Complete the sentence: Whoever lives there ________ have children.",
        options: ["must", "might", "can't"],
        correctAnswer: 1,
        explanation: "Bir ihtimalden bahsediliyor (emin değiliz) = might/could.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 7 — Quantifiers (Grammar Focus 7B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "quantifiers",
    title: "Miktar Bildiriciler (Quantifiers)",
    description: "a lot of, too many, much, plenty of, many, enough, very few, very little kullanımı. (Grammar Focus 7B)",
    content: \`
## Quantifiers (Miktar Bildiriciler)

Şu cümlelerdeki doğru kelimelere dikkat edin:
1 There are **a lot of** / ~~too many~~ different kinds of plants in the Turia Gardens.
2 There are ~~much~~ / **plenty of** things to see and do in the park.
3 Pablo goes there early in the morning because there aren't so **many** / ~~much~~ people.
4 Ana thinks there are **too many** / ~~enough~~ tourists there.
5 There's ~~very few~~ / **very little** rubbish in the park.
6 Rosalia thinks there ~~aren't any~~ / **aren't enough** public toilets in the park.
    \`,
    tips: [
      "a lot of / plenty of: Çok miktarda (sayılabilen ve sayılamayan isimlerle).",
      "too many: Gereğinden fazla (sayılabilen isimlerle).",
      "too much: Gereğinden fazla (sayılamayan isimlerle).",
      "many: Çok (sayılabilen isimlerle).",
      "much: Çok (sayılamayan isimlerle).",
      "very few: Çok az, yok denecek kadar az (sayılabilen isimlerle).",
      "very little: Çok az, yok denecek kadar az (sayılamayan isimlerle).",
      "enough / aren't enough: Yeterli / Yeterli değil.",
    ],
    questions: [
      {
        id: "gf7b-q1",
        question: "Grammar Focus 7B: There are ________ different kinds of plants in the Turia Gardens.",
        options: ["a lot of", "too many"],
        correctAnswer: 0,
        explanation: "A lot of = çok miktarda. Too many olumsuz bir 'gereğinden fazla' anlamı katar.",
      },
      {
        id: "gf7b-q2",
        question: "Grammar Focus 7B: Pablo goes there early in the morning because there aren't so ________ people.",
        options: ["many", "much"],
        correctAnswer: 0,
        explanation: "People (insanlar) sayılabilen bir isimdir, bu yüzden many kullanırız.",
      },
      {
        id: "gf7b-q3",
        question: "Grammar Focus 7B: There's ________ rubbish in the park.",
        options: ["very few", "very little"],
        correctAnswer: 1,
        explanation: "Rubbish (çöp) sayılamayan bir isimdir, bu yüzden very little kullanırız.",
      },
      {
        id: "gf7b-q4",
        question: "Grammar Focus 7B: Rosalia thinks there ________ public toilets in the park.",
        options: ["aren't any", "aren't enough"],
        correctAnswer: 1,
        explanation: "Var ama yeterli miktarda değil = aren't enough.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 8 — Reported speech (Grammar Focus 8A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "reported-speech",
    title: "Dolaylı Anlatım (Reported speech)",
    description: "Reported speech ve reported questions kullanımı. (Grammar Focus 8A)",
    content: \`
## Reported speech (Dolaylı Anlatım)

1 Birinin söylediği veya yazdığı bir şeyi aktarırken (report), doğrudan cümlenin zamanını genellikle geçmişe doğru bir adım geriye alırız (**backwards** in time).
2 Dolaylı aktarılan sorularda (reported questions) soru kelime dizilimi DEĞİL, **normal düz cümle kelime dizilimi** kullanılır (Özne + Yüklem).
3 Hala geçerliliğini koruyan, **hala doğru** olan gerçekleri aktarırken zamanı değiştirmek zorunda değiliz.

### Zaman Değişiklikleri (Tense changes):
| Doğrudan Anlatım (Direct speech) | Dolaylı Anlatım (Reported speech) |
|----------------------------------|-----------------------------------|
| present simple (geniş zaman) | past simple (geçmiş zaman) |
| past simple | past perfect |
| present continuous | past continuous |
| present perfect | past perfect |
| can | could |

**Örnekler:**
- The interviewer asked me **how I had started** listening to podcasts.
- I replied that I **'d been** bored with all my music.
- I told him that I **loved** them.
    \`,
    tips: [
      "Zamanları her zaman bir adım geçmişe alın (Present -> Past, Past -> Past Perfect).",
      "Dolaylı sorularda normal cümle dizilimi (Özne + Yüklem) kullanılır, soru dizilimi kullanılmaz.",
      "Eğer söylenen şey hala genel geçer bir doğruysa, zamanı değiştirmeyebilirsiniz.",
    ],
    questions: [
      {
        id: "gf8a-q1",
        question: "Grammar Focus 8A: What is the reported speech tense for 'present continuous'?",
        options: ["past continuous", "past perfect", "present perfect"],
        correctAnswer: 0,
        explanation: "Present continuous (şimdiki zaman), past continuous (geçmişte devam eden zaman)'a dönüşür.",
      },
      {
        id: "gf8a-q2",
        question: "Grammar Focus 8A: What is the reported speech tense for 'past simple'?",
        options: ["past simple", "past continuous", "past perfect"],
        correctAnswer: 2,
        explanation: "Past simple (geçmiş zaman), past perfect (miş'li geçmiş zaman)'a dönüşür.",
      },
      {
        id: "gf8a-q3",
        question: "Grammar Focus 8A: What is the word order in reported questions?",
        options: ["normal word order", "question word order"],
        correctAnswer: 0,
        explanation: "Dolaylı sorularda düz cümle kuralları (normal word order) geçerlidir.",
      },
      {
        id: "gf8a-q4",
        question: "Grammar Focus 8A: 'How did you start listening?' -> The interviewer asked me how ________ listening.",
        options: ["did I start", "I had started"],
        correctAnswer: 1,
        explanation: "Past simple past perfect'e dönüşür ve soru yapısı değil düz cümle yapısı kullanılır.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 8 — Verb patterns (Grammar Focus 8B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "verb-patterns",
    title: "Fiil Kalıpları (Verb patterns)",
    description: "Fiillerden sonra -ing mi yoksa to (infinitive) mu gelir? (Grammar Focus 8B)",
    content: \`
## Verb patterns (Fiil Kalıpları)

### Fiil + -ing kullanım yerleri:
a Edatlardan (prepositions) sonra (ör. interested **in working**)
b Belirli fiillerden sonra (ör. *keep*, *start*, *love*, *enjoy **eating***)
c Belirli ifadelerden sonra (ör. *it's worth **pretending*** (değer), *it's no use* (faydası yok))
d Cümlenin öznesi olarak (ör. ***Setting up** the website was easy*)

### Infinitive (to) kullanım yerleri:
a Soru kelimelerinden sonra (ör. wasn't sure what **to do**)
b Belirli fiillerden sonra (ör. *want*, *plan*, *seem*, *decide*, *managed **to make***)
c Belirli sıfatlardan sonra (ör. *difficult*, *good*, *important*, *happy **to believe***)
d Amaç bildirmek için (ör. needed... **to avoid** anti-spam technology)
    \`,
    tips: [
      "Fiil + -ing: Edatlar, cümlenin öznesi, certain verbs (enjoy, keep vb.) ve bazı kalıplar (it's worth) sonrasında.",
      "Infinitive (to): Amaç bildirirken, soru kelimelerinden, sıfatlardan ve certain verbs (want, decide, manage vb.) sonrasında.",
    ],
    questions: [
      {
        id: "gf8b-q1",
        question: "Grammar Focus 8B: I enjoy ________ (shop) for clothes.",
        options: ["to shop", "shopping"],
        correctAnswer: 1,
        explanation: "'enjoy' fiilinden sonra daima -ing gelir.",
      },
      {
        id: "gf8b-q2",
        question: "Grammar Focus 8B: I'm planning ________ (get) a new phone.",
        options: ["to get", "getting"],
        correctAnswer: 0,
        explanation: "'plan' fiilinden sonra infinitive (to) gelir.",
      },
      {
        id: "gf8b-q3",
        question: "Grammar Focus 8B: It's difficult ________ (choose) clothes.",
        options: ["to choose", "choosing"],
        correctAnswer: 0,
        explanation: "Sıfatlardan sonra infinitive (to) gelir.",
      },
      {
        id: "gf8b-q4",
        question: "Grammar Focus 8B: I think it's worth ________ (spend) a lot of money.",
        options: ["to spend", "spending"],
        correctAnswer: 1,
        explanation: "'it's worth' (değer) ifadesinden sonra -ing gelir.",
      },
      {
        id: "gf8b-q5",
        question: "Grammar Focus 8B: ________ (go) to language classes is a good way to meet new people.",
        options: ["To go", "Going"],
        correctAnswer: 1,
        explanation: "Fiil cümlenin öznesi konumundaysa -ing (gerund) alır.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 9 — The passive (Grammar Focus 9A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "the-passive",
    title: "Edilgen Çatı (The passive)",
    description: "Edilgen (Passive) yapı kullanımı. (Grammar Focus 9A)",
    content: \`
## The passive (Edilgen Çatı)

Last week, a new TV series **was uploaded** to your streaming service.
Young people **are attracted** to TV series they can binge on.

Edilgen yapıyı şu durumlarda kullanırız:
1 Eylemi kimin yaptığını **bilmiyorsak**
2 Eylemi kimin yaptığı halihazırda **çok barizse**
3 Eylemi kimin yaptığı **önemli değilse**

- Edilgen bir fiilden sonra eylemi KİMİN/NEYİN yaptığını belirtmek istersek **by** + isim kullanırız. (ör. *was directed **by** Martin Scorsese*)
- Edilgen bir fiilden sonra eylemi yapmak için HANGİ ARACIN kullanıldığını belirtmek istersek **with** + isim kullanırız. (ör. *was filmed **with** a smartphone camera*)
    \`,
    tips: [
      "Eylemi kimin yaptığı meçhul, bariz veya önemsizse passive (edilgen) kullanın.",
      "Eylemi yapan kişiyi/etkeni belirtmek için 'by' kullanın.",
      "Eylemde kullanılan aracı/aleti belirtmek için 'with' kullanın.",
    ],
    questions: [
      {
        id: "gf9a-q1",
        question: "Grammar Focus 9A: We use the passive when it's ________ who did an action.",
        options: ["obvious", "not obvious"],
        correctAnswer: 0,
        explanation: "Edilgen yapı eylemi kimin yaptığı bariz (obvious) olduğunda da kullanılır.",
      },
      {
        id: "gf9a-q2",
        question: "Grammar Focus 9A: The first episode was directed ________ Martin Scorsese.",
        options: ["by", "with"],
        correctAnswer: 0,
        explanation: "Eylemi kimin yaptığını belirtmek için 'by' edatını kullanırız.",
      },
      {
        id: "gf9a-q3",
        question: "Grammar Focus 9A: The whole episode was filmed ________ a smartphone camera.",
        options: ["by", "with"],
        correctAnswer: 1,
        explanation: "Eylemi yaparken hangi aletin kullanıldığını belirtmek için 'with' edatını kullanırız.",
      },
      {
        id: "gf9a-q4",
        question: "Grammar Focus 9A: 'Binge watching has been criticised by doctors.' What tense is this?",
        options: ["present continuous", "present perfect", "past simple"],
        correctAnswer: 1,
        explanation: "'has been criticised' yapısı Present perfect tense'in edilgen halidir.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 9 — Defining and non-defining relative clauses (Grammar Focus 9B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "relative-clauses",
    title: "Tanımlayan ve Tanımlamayan İlgi Cümlecikleri (Relative clauses)",
    description: "Defining ve non-defining relative clauses. (Grammar Focus 9B)",
    content: \`
## Defining relative clauses (Tanımlayan ilgi cümlecikleri)
1 Samba is a kind of Brazilian music **which also has African rhythms**.
2 It's a drum **you play with your hands**.
3 I was sitting next to one of the people **who was in my group**.
4 They were all about the place **where he grew up**.

- Tanımlayan ilgi cümleciği, ismin **ne anlama geldiğini netleştirir ve onu daha spesifik hale getirir**.
- Öncesinde **virgül kullanılmaz**.
- Tanımlayan ilgi cümleciklerinde, ilgi zamiri (relative pronoun) cümleciğin **nesnesi (object)** ise bu zamiri cümleden atabilirsiniz. (Ör. 2. cümlede which/that atılmıştır)

## Non-defining relative clauses (Ekstra bilgi veren ilgi cümlecikleri)
5 I was with my brother and a friend of his, **who was older than me**, and we were listening to Jay-Z.
6 I started noticing the words, **which were really different from the songs I normally listened to**.

- Ekstra bilgi veren bu cümlecikler, isim hakkında **yalnızca ekstra (çıkarıldığında anlamı bozmayacak) bir bilgi verir**.
- Öncesinde ve bazen sonrasında **virgül kullanılır**.

Bir ilgi cümleciği (relative clause) **daima nitelediği ismin hemen arkasından gelir**.
    \`,
    tips: [
      "Defining: Spesifikleştirir, o bilgi olmadan cümle eksik kalır, virgül kullanılmaz. Nesne durumundaki ilgi zamiri atılabilir.",
      "Non-defining: Sadece ekstra detay verir, atılsa da cümlenin ana anlamı bozulmaz, virgül kullanılır.",
      "İlgi zamirleri (Relative pronouns): who, which, where, that.",
    ],
    questions: [
      {
        id: "gf9b-q1",
        question: "Grammar Focus 9B: Which kind of relative clause has commas?",
        options: ["Defining", "Non-defining"],
        correctAnswer: 1,
        explanation: "Non-defining (tanımlamayan/ekstra bilgi veren) cümleciklerde virgül kullanılır.",
      },
      {
        id: "gf9b-q2",
        question: "Grammar Focus 9B: In which kind of clause can you sometimes omit the relative pronoun?",
        options: ["Defining relative clauses", "Non-defining relative clauses"],
        correctAnswer: 0,
        explanation: "Tanımlayan cümleciklerde (Defining relative clauses), eğer zamir nesneyse cümleden atılabilir.",
      },
      {
        id: "gf9b-q3",
        question: "Grammar Focus 9B: Where does a relative clause come in a sentence?",
        options: ["Immediately after the noun phrase it refers to", "At the end of the sentence"],
        correctAnswer: 0,
        explanation: "İlgi cümlecikleri daima niteledikleri ismin veya isim öbeğinin hemen ardından gelir.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 10 — Second conditional (Grammar Focus 10A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "second-conditional",
    title: "İkinci Tip Koşul Cümleleri (Second conditional)",
    description: "Second conditional kullanımı. (Grammar Focus 10A)",
    content: \`
## Second conditional (Tip 2 Koşul Cümleleri)

- Was it scary? I think if I went, I'd be terrified!
- If I was a bit fitter, I would definitely do it.

1 Second conditional'ı **hayal ettiğimiz, ancak şu an için gerçek olmayan (unreal) durumlardan** bahsederken kullanırız.
2 Second conditional'ı oluşturmak için şu formülü kullanırız: **If + past simple, would / wouldn't + infinitive**.
    \`,
    tips: [
      "Second conditional, şu an veya gelecek için gerçek dışı (unreal) veya hayali durumlar için kullanılır.",
      "Formül: If + past simple, would + infinitive (fiilin yalın hali).",
    ],
    questions: [
      {
        id: "gf10a-q1",
        question: "Grammar Focus 10A: We use the second conditional to talk about...",
        options: ["things we imagine, but are not real", "things that will probably do in the future"],
        correctAnswer: 0,
        explanation: "Second conditional, hayal edilen, ancak gerçekte var olmayan (unreal) durumlar içindir.",
      },
      {
        id: "gf10a-q2",
        question: "Grammar Focus 10A: To form the second conditional, we use If + past simple, ...",
        options: ["will + infinitive", "would + infinitive"],
        correctAnswer: 1,
        explanation: "Ana cümlecikte (main clause) would + infinitive yapısı kullanılır.",
      },
      {
        id: "gf10a-q3",
        question: "Grammar Focus 10A: 'If I ________ a bit fitter, I would definitely do it.'",
        options: ["was", "would be"],
        correctAnswer: 0,
        explanation: "'If' cümlesinden sonra geçmiş zaman (past simple) kullanılır.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 10 — Third conditional (Grammar Focus 10B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "third-conditional",
    title: "Üçüncü Tip Koşul Cümleleri (Third conditional)",
    description: "Third conditional kullanımı. (Grammar Focus 10B)",
    content: \`
## Third conditional (Tip 3 Koşul Cümleleri)

If Wendy **had had** better handwriting, my business **wouldn't have been** such a success, and I certainly **wouldn't have met** Matt.

1 Third conditional'ı **geçmişte yaşanmış ancak şu an değişmesi imkansız hayali olaylardan ve onların muhtemel sonuçlarından** bahsetmek için kullanırız (Geçmişe yönelik "keşke"ler veya varsayımlar).
2 Third conditional'ın doğru formülü şöyledir:
**If + past perfect, would have + past participle (fiilin 3. hali)**.
    \`,
    tips: [
      "Third conditional, geçmişte kalmış, artık değiştirilemeyecek hayali durumlar içindir (Geçmişe dönük pişmanlık/varsayım).",
      "Formül: If + past perfect (had + V3), would have + past participle (V3).",
    ],
    questions: [
      {
        id: "gf10b-q1",
        question: "Grammar Focus 10B: When do we use the third conditional?",
        options: ["to talk about the results of real past events", "to talk about an imagined past event and its likely result"],
        correctAnswer: 1,
        explanation: "Geçmişte kalmış, gerçek dışı (unreal) olaylardan ve onların muhtemel sonuçlarından bahsetmek içindir.",
      },
      {
        id: "gf10b-q2",
        question: "Grammar Focus 10B: What is the correct form of the third conditional?",
        options: ["If + past simple, would + past participle", "If + past perfect, would have + past participle"],
        correctAnswer: 1,
        explanation: "Formül: If + past perfect, would have + past participle.",
      },
      {
        id: "gf10b-q3",
        question: "Grammar Focus 10B: 'If Wendy ________ better handwriting, my business wouldn't have been such a success.'",
        options: ["had had", "would have had"],
        correctAnswer: 0,
        explanation: "'If' cümlesinde past perfect (had + V3) kullanırız. Burada 'have' fiilinin 3. hali 'had' olduğu için 'had had' olur.",
      }
    ],
  },
`;

file = file.replace('];', units7to10 + '\n];');
fs.writeFileSync('src/data/grammarData.ts', file);
