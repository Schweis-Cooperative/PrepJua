import type { GrammarTopic } from '../types/grammar';

export const grammarData: GrammarTopic[] = [

  // ═══════════════════════════════════════════════════════════════
  // UNIT 1 — Subject and object questions (Grammar Focus 1A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "subject-object-questions",
    title: "Özne ve Nesne Soruları (Subject and Object Questions)",
    description: "Özne ve nesne sorularının kullanımı. (Grammar Focus 1A)",
    content: `
## Subject and object questions (Özne ve nesne soruları)

a Aşağıdaki soru ve cevapları inceleyin. Ana fiiller kalın yazılmıştır.
1 Soru: What do experts **say** about making friends online?
Cevap: You need to build friendships carefully.
2 Soru: Who **thinks** online friendships aren't real?
Cevap: People from generations that didn't grow up with online friendships.

- 1. soruda özne *experts* (uzmanlar)'dır. 1. soru bir **nesne sorusudur (object question)**. (Cevap nesneyi verir)
- 2. soruda özne *Who* (kim)'dur. 2. soru bir **özne sorusudur (subject question)**. (Cevap özneyi verir)
- **Nesne sorularında (object questions)** *do, does, did* gibi yardımcı fiiller kullanırız. Özne sorularında ise bu yardımcı fiilleri KULLANMAYIZ.

### Ek Örnekler (More Examples):
**Özne Soruları (Subject Questions):**
- Who **told** you the news? (Haberleri sana kim söyledi?)
- What **happened** yesterday? (Dün ne oldu?)
- How many people **are coming** to the party? (Partiye kaç kişi geliyor?)

**Nesne Soruları (Object Questions):**
- Who **were** you talking to? (Kiminle konuşuyordun?)
- What **did** a fire damage? (Yangın neye zarar verdi?)
    `,
    tips: [
      "Handwritten Tip: Subject Questions (Özne Soruları) genelde TEKİL SORU olarak adlandırılır. Doğrudan özneyi sorar. Örnek: Who told you the news? (1 Fiil bulunur).",
      "Handwritten Tip: Object Questions (Nesne Soruları). Örnek: Why were you late? (1 Ana Fiil + 1 Yardımcı Fiil bulunur).",
      "Handwritten Rule: Present Simple & Continuous -> know, understand, want, own fiilleri ING ALMAZ (State verbs).",
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
    content: `
## Present simple (Geniş Zaman)
Present simple'ı şu durumlarda kullanabiliriz:
1 Genellikle doğru olan, genel geçer şeylerden bahsederken
2 Alışkanlıklar ve rutinlerden bahsederken
3 Durum fiilleriyle (state verbs) – düşünce (ör. *know*, *understand*), his (ör. *want*) ve sahiplik (ör. *own*) bildiren fiillerle

## Present continuous (Şimdiki Zaman)
Present continuous'u şu durumlardan bahsederken kullanabiliriz:
1 Konuşma veya yazma anında devam eden, yapılmakta olan eylemler
2 Konuşma veya yazma anı civarında (öncesi ve sonrasında) devam eden geçici durumlar
3 Değişmekte olan durumlar ve süreçler

**Kural:**
özne + *am / is / are* + fiil + *-ing*
    `,
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
    content: `
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
    `,
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
    content: `
## Present perfect ve present perfect continuous

a Şu örnekleri inceleyip kuralları hatırlayın:
- I'**ve always been** keen on photography. I'**ve been taking** photos since I was 12.
- StopApp is a really useful app and I'**ve been recommending** it to all my friends.
- I'**ve had** it for a week, and I'**ve been using** it a lot.

**Kural:**
Present perfect continuous tense'i oluşturmak için *have/has* + *been* + *verb-ing* kullanırız.

- Durum bildiren (hareket bildirmeyen - state verbs) fiillerle her zaman **present perfect** kullanırız.
- Aktivite veya süreç bildiren fiillerle ise, bir şeyin şu ana kadar ne kadar süredir devam ettiğini veya yakın zamanda tekrar tekrar yapıldığını vurgulamak için **present perfect continuous** kullanırız.
    `,
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

  // ═══════════════════════════════════════════════════════════════
  // UNIT 3 — Narrative Tenses (Grammar Focus 3A — from textbook)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'narrative-tenses',
    title: 'Narrative Tenses (Hikâye Zamanları)',
    description: 'Past Simple, Past Continuous ve Past Perfect zamanlarının hikâye anlatımında kullanımı. (Grammar Focus 3A)',
    content: `
## Past Simple (Geçmiş Basit Zaman)

Geçmişte sırayla gerçekleşen ana olayları anlatmak için **Past Simple** kullanırız.

- *We **met** a few years ago. He **offered** to help me fix my car. Later, we **became** good friends.*

## Past Continuous (Geçmiş Sürekli Zaman)

Past Continuous şu durumlarda kullanılır:

1. **Hikâyenin başındaki ortamı/durumu tanımlamak için:**
   - *That day, I **was driving** home from university for the summer.*

2. **Kısa bir olayla karşılaştırılan uzun eylemlerde:**
   - *Where **were** you **going** when I **saw** you by the road?*
   - *I **was trying** to get home with some heavy bags when he **stopped** to help me.*

3. **Asıl olay (Past Simple) devam eden bir eylemi (Past Continuous) böldüğünde:**
   - *I **was skiing** in the French Alps when I **had** my accident.*

### Bağlaçlar: as, while, when
- *Somebody **stole** my bag **when** I **wasn't looking**.*
- *Your sister **phoned** **while** you **were** out **shopping**.*
- *The car **broke down** **as** I **was driving** down the road.*

⚠️ **Dikkat:** Durum fiillerinde (state verbs) Past Continuous kullanmayız:
- ✅ *We met when I **was** a student.*
- ❌ ~~*when I was being a student.*~~

## Past Perfect (Geçmiş Tamamlanmış Zaman)

Hikâyedeki bir olaydan **daha önce** gerçekleşmiş bir olayı anlatmak için Past Perfect kullanırız.

- *That summer, I **had** just **finished** my second year at university.*
- *When we met, my car **had broken** down by the side of the road.*

### by + zaman ifadesi ile kullanım:
- *I started reading it on Monday and **by Friday** I'd **read** the whole book.*
- ***By the time they arrived**, everyone else **had gone** home.*

## Past Perfect Continuous (Geçmişte Devam Eden Tamamlanmış Zaman)

Geçmişteki bir noktadan veya olaydan önce **uzun süre devam etmiş olan (sürece odaklanan)** eylemleri anlatmak için kullanılır (had been + V-ing).

- *My aunt **had been feeling** stressed for days before we arrived.*
- *He told me he **had been helping** in the café every summer since he was twelve.*

### Academic Skills: Narrative Tenses Summary
- **Past Simple:** A short completed action in the past.
- **Past Continuous:** An action in progress at a moment in the past.
- **Past Perfect:** An action happening before another action.
- **Past Perfect Continuous:** A long continuous action before a point in the past.
    `,
    tips: [
      'Past Simple: Geçmişteki ana olayları sırayla anlatır (A short completed action in the past).',
      'Past Continuous: Arka plan bilgisi verir veya ana olayla kesilen uzun eylemleri anlatır (An action in progress at a moment in the past).',
      'Past Perfect: Hikâyedeki bir olaydan daha önce gerçekleşen olayı anlatır (An action happening before another action).',
      'Past Perfect Continuous: Geçmişteki bir noktadan önce devam eden uzun süreli eylemler için kullanılır (A long continuous action before a point in the past).',
      'Durum fiilleri (be, know, like, want) ile Past Continuous KULLANILMAZ.',
      'by + zaman ifadesi Past Perfect ile sıkça kullanılır.',
    ],
    questions: [
      // ── From Grammar Focus 3A (textbook page, exercise a) ──
      // "Underline the correct options."
      // Context: Spencer and Rosalind summary
      {
        id: 'gf3a-q1',
        question: 'Grammar Focus 3A, Exercise a: "Spencer and Rosalind _____ to know each other through playing an online word game."',
        options: ['first got', 'were first getting'],
        correctAnswer: 0,
        explanation: 'Hikâyedeki ana olay Past Simple ile anlatılır: "first got".',
      },
      {
        id: 'gf3a-q2',
        question: 'Grammar Focus 3A, Exercise a: "She _____ there 20 years earlier, when she retired."',
        options: ['moved', 'had moved'],
        correctAnswer: 1,
        explanation: 'Hikâyedeki ana zamandan daha önce gerçekleşmiş bir olay = Past Perfect: "had moved".',
      },
      {
        id: 'gf3a-q3',
        question: 'Grammar Focus 3A, Exercise a: "Spencer was living in Massachusetts, but he _____ for a job in New York because he wanted a career in music."',
        options: ['looked', 'was looking'],
        correctAnswer: 1,
        explanation: 'Arka plandaki devam eden eylem = Past Continuous: "was looking".',
      },
      {
        id: 'gf3a-q4',
        question: 'Grammar Focus 3A, Exercise a: "They _____ each other who their best friends were."',
        options: ['told', 'were telling'],
        correctAnswer: 1,
        explanation: 'Overheard sırasında devam eden eylem = Past Continuous: "were telling".',
      },
      {
        id: 'gf3a-q5',
        question: 'Grammar Focus 3A, Exercise a: "Amy _____ to go with Spencer to visit Rosalind in Florida."',
        options: ['decided', 'had decided'],
        correctAnswer: 0,
        explanation: 'Hikâyedeki sıradaki ana olay = Past Simple: "decided".',
      },
      {
        id: 'gf3a-q6',
        question: 'Grammar Focus 3A, Exercise a: "Spencer\'s pictures of the meeting _____ viral."',
        options: ['went', 'had gone'],
        correctAnswer: 0,
        explanation: 'Hikâyedeki sıradaki ana olay = Past Simple: "went".',
      },
      {
        id: 'gf3a-q7',
        question: 'Grammar Focus 3A, Exercise a: "...and many newspapers reported the story of how they had met and _____ friends."',
        options: ['were becoming', 'had become'],
        correctAnswer: 1,
        explanation: 'Haber yapılmadan önce gerçekleşmiş bir olay = Past Perfect: "had become".',
      },
      // ── From Grammar Focus 3A, Exercise e ──
      // "Complete the story with the correct form of the verbs (past simple, past continuous, past perfect)."
      {
        id: 'gf3a-e-q1',
        question: 'Grammar Focus 3A, Exercise e: "I ¹_____ (meet) my friend Amy in 2015."',
        options: ['met', 'was meeting', 'had met'],
        correctAnswer: 0,
        explanation: 'Belirli bir tarihte gerçekleşen olay = Past Simple: "met".',
      },
      {
        id: 'gf3a-e-q2',
        question: 'Grammar Focus 3A, Exercise e: "She ²_____ (work) in a café at the time and I ³_____ (go) there often."',
        options: ['was working / went', 'worked / was going', 'was working / was going'],
        correctAnswer: 0,
        explanation: 'Arka plan bilgisi (was working) + tekrarlanan olay (went).',
      },
      {
        id: 'gf3a-e-q3',
        question: 'Grammar Focus 3A, Exercise e: "She ⁴_____ (not be) very happy because she ⁵_____ (just / finish) a degree in art history and she couldn\'t find an interesting job."',
        options: ['wasn\'t / had just finished', 'wasn\'t being / just finished', 'hadn\'t been / was just finishing'],
        correctAnswer: 0,
        explanation: 'Durum fiili + daha önce tamamlanmış eylem: wasn\'t + had just finished.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 3 — Used to, Usually (Grammar Focus 3B — from textbook)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'used-to-usually',
    title: 'Used to & Usually (Geçmiş Alışkanlıklar)',
    description: 'Geçmişteki alışkanlıkları ve durumları anlatmak için used to ve usually kullanımı. (Grammar Focus 3B)',
    content: `
## Used to

Geçmişteki **alışkanlıkları** ve **durumları** anlatmak için *used to* kullanırız.

### Geçmiş alışkanlık:
- *When I was at school, I **used to play** football every Saturday.*

### Geçmiş durum:
- *The whole family **used to love** animals. We always had two or three pets in the house.*

### Olumsuz form:
- Olumsuzda **didn't use to** kullanırız (~~didn't used to~~ **DEĞİL**).
- *My parents **didn't use to go** out much, so we spent a lot of time together.*
- *We **never used to** understand my dad's jokes.*

### Şimdiki zaman yok!
*Used to*'nun şimdiki zaman formu yoktur. Bunun yerine **sıklık zarfları** kullanırız:
- *They **usually go** out to a restaurant once or twice a week.*

## Past Simple mi, Used to mu?

| Durum | Kullanım |
|-------|----------|
| Uzun süre devam etmiş (aylar, yıllar) | **used to** |
| Kısa süre (geçen hafta) | **past simple** |
| Belirli sayıda gerçekleşmiş | **past simple** |

- ✅ *When we were on holiday last week, we **went** swimming every day.*
- ❌ ~~*...we used to go swimming...*~~
- ✅ *I **went** to the USA twice when I was a child.*
- ❌ ~~*I used to go to the USA twice...*~~
    `,
    tips: [
      'Used to: Geçmişteki uzun süreli alışkanlıklar ve durumlar içindir.',
      'Olumsuz: "didn\'t use to" (NOT "didn\'t used to").',
      'Used to\'nun şimdiki zaman formu yoktur — "usually" kullanın.',
      'Belirli sayıda gerçekleşen olaylar için Past Simple kullanın, used to DEĞİL.',
    ],
    questions: [
      // ── From Grammar Focus 3B (textbook), Exercise a ──
      // "Underline the correct words in the sentences."
      {
        id: 'gf3b-q1',
        question: 'Grammar Focus 3B, Exercise a: "We wore / used to wear different clothes."',
        options: ['wore', 'used to wear'],
        correctAnswer: 1,
        explanation: 'Çocuklukta uzun süre devam etmiş bir durum = used to wear.',
      },
      {
        id: 'gf3b-q2',
        question: 'Grammar Focus 3B, Exercise a: "That\'s when you started / used to start wearing black."',
        options: ['started', 'used to start'],
        correctAnswer: 0,
        explanation: 'Belirli bir anda gerçekleşen tek bir olay = Past Simple: started.',
      },
      {
        id: 'gf3b-q3',
        question: 'Grammar Focus 3B, Exercise a: "I hated / used to hate being asked the same question all the time."',
        options: ['hated', 'used to hate', 'Her ikisi de doğru'],
        correctAnswer: 2,
        explanation: 'Uzun süreli bir durum olduğu için hem Past Simple hem used to kullanılabilir.',
      },
      {
        id: 'gf3b-q4',
        question: 'Grammar Focus 3B, Exercise a: "I usually wanted / used to want to know what you think about things."',
        options: ['usually wanted', 'used to want'],
        correctAnswer: 1,
        explanation: 'Geçmişte devam eden bir durum: used to want.',
      },
      {
        id: 'gf3b-q5',
        question: 'Grammar Focus 3B, Exercise a: "I usually felt / used to feel that people wanted us to compete all the time."',
        options: ['usually felt', 'used to feel', 'Her ikisi de doğru'],
        correctAnswer: 2,
        explanation: 'Geçmişteki uzun süreli bir his, her ikisi de kullanılabilir.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 4 — Future Forms (Grammar Focus 5A — from textbook)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'future-forms',
    title: 'Future Forms (Gelecek Zaman Yapıları)',
    description: 'Will, going to ve Present Continuous ile gelecek zaman kullanımları. (Grammar Focus 5A)',
    content: `
## Gelecek Zaman Yapıları

## 1. will / won't
### Anlık kararlar:
- *"There's no milk." — "I**'ll** go and get some."*
### Teklifler ve vaatler:
- *I**'ll** help you.* / *I **won't** tell anyone.*
### Tahminler:
- *I don't think the forest **will** recover.*

## 2. be going to
### Önceden kararlaştırılmış planlar:
- *We**'re not going to** stay at that hotel again.*
### Kanıtlara dayalı tahminler:
- *It**'s not going to** rain. There isn't a cloud in the sky.*

## 3. Present Continuous
### Kesinleşmiş düzenlemeler:
- *She**'s travelling** to Central America on Sunday.*

💡 **İpucu:** *I'm visiting / I'm going to visit my sister this weekend.* — Her ikisi de olabilir.
    `,
    tips: [
      'Will: Anlık kararlar, genel tahminler, teklifler ve vaatler.',
      'Going to: Önceden alınmış kararlar ve kanıta dayalı tahminler.',
      'Present Continuous: Kesinleşmiş planlar ve randevular.',
      'Olumsuz tahmin: I don\'t think + will (NOT: I think ... won\'t).',
    ],
    questions: [
      // ── From Grammar Focus 5A (textbook), Exercise a ──
      // "Underline the best option in each sentence."
      {
        id: 'gf5a-q1',
        question: 'Grammar Focus 5A, Exercise a: "It\'s a bit hot in here." — Doğru cevap hangisi?',
        options: [
          "You're right. I'll open a window.",
          "You're right. I'm going to open a window.",
        ],
        correctAnswer: 0,
        explanation: 'Anlık karar = will: "I\'ll open a window."',
      },
      {
        id: 'gf5a-q2',
        question: 'Grammar Focus 5A, Exercise a: "I\'m going to the show. _____ Can I get you anything?"',
        options: ['Will', 'I\'m going to'],
        correctAnswer: 0,
        explanation: 'Teklif = will.',
      },
      {
        id: 'gf5a-q3',
        question: 'Grammar Focus 5A, Exercise a: "Why are you carrying those flowers?" — "Because _____ to ask Sara to marry me!"',
        options: ["I'll", "I'm going"],
        correctAnswer: 1,
        explanation: 'Önceden alınmış bir karar = going to.',
      },
      {
        id: 'gf5a-q4',
        question: 'Grammar Focus 5A, Exercise a: "I\'m so tired." — "_____" — Teklif veya vaat.',
        options: [
          "I'll / I'm going to make you some coffee, if you want.",
        ],
        correctAnswer: 0,
        explanation: 'Teklif = will: "I\'ll make you some coffee."',
      },
      {
        id: 'gf5a-q5',
        question: 'Grammar Focus 5A, Exercise a: "I\'ve got a bad stomach. I think _____."',
        options: ["I'll be sick", "I'm going to be sick"],
        correctAnswer: 1,
        explanation: 'Kanıta dayalı tahmin (karnı ağrıyor) = going to.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 5 — Zero and First Conditionals (Grammar Focus 5B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'first-conditional',
    title: 'Zero and First Conditionals',
    description: 'Sıfır ve birinci koşul cümleleri, unless kullanımı. (Grammar Focus 5B)',
    content: `
## Zero Conditional
Genel doğrular ve her zaman geçerli olan durumlar:
**If + Present Simple, ... Present Simple**
- *If the lizard gets scared, it hides.*
- *Butter doesn't burn in the pan if you add a little oil to it.*

## First Conditional
Gelecekte olası durumlar:
**If + Present Simple, ... will + fiil**
- *If the scientists succeed, many people will live longer.*
- *If I don't work hard, I won't be successful.*

## Unless = If not
- *We play every Saturday **unless** it rains.*
- *It won't hurt you **unless** you run away.*

⚠️ if cümleciğinde **will** KULLANILMAZ.
    `,
    tips: [
      'Zero Conditional: Genel doğrular için. If + Present, Present.',
      'First Conditional: Gelecekte olası durumlar. If + Present, will.',
      'Unless = if not.',
      'If cümleciğinde will KULLANILMAZ.',
    ],
    questions: [
      // ── From Grammar Focus 5B (textbook), Exercise b ──
      // "Underline the correct options."
      {
        id: 'gf5b-q1',
        question: 'Grammar Focus 5B, Exercise b: "If I eat / will eat too much, I feel sleepy."',
        options: ['eat', 'will eat'],
        correctAnswer: 0,
        explanation: 'Zero conditional (genel doğru): If + Present Simple.',
      },
      {
        id: 'gf5b-q2',
        question: 'Grammar Focus 5B, Exercise b: "If we watch another episode, I have / I\'ll have trouble waking up on time tomorrow morning."',
        options: ['I have', "I'll have"],
        correctAnswer: 1,
        explanation: 'First conditional (gelecek olasılık): will + fiil.',
      },
      {
        id: 'gf5b-q3',
        question: 'Grammar Focus 5B, Exercise b: "I send / I\'ll send you some photos if you give me your email address."',
        options: ['I send', "I'll send"],
        correctAnswer: 1,
        explanation: 'First conditional: will + fiil.',
      },
      {
        id: 'gf5b-q4',
        question: 'Grammar Focus 5B, Exercise b: "If we don\'t leave now, we don\'t / won\'t get to the airport on time."',
        options: ["don't", "won't"],
        correctAnswer: 1,
        explanation: 'First conditional: won\'t (gelecekteki sonuç).',
      },
      {
        id: 'gf5b-q5',
        question: 'Grammar Focus 5B, Exercise b: "If you go / will go to Jordan, visit the ancient city of Petra."',
        options: ['go', 'will go'],
        correctAnswer: 0,
        explanation: 'If cümleciğinde will KULLANILMAZ: "If you go..."',
      },
      {
        id: 'gf5b-q6',
        question: 'Grammar Focus 5B, Exercise b: "I go to the cinema every Friday unless I\'m not / I\'m busy."',
        options: ["I'm not", "I'm"],
        correctAnswer: 1,
        explanation: 'Unless = if not. Çift olumsuz yapılmaz: "unless I\'m busy" doğrudur.',
      },
      {
        id: 'gf5b-q7',
        question: 'Grammar Focus 5B, Exercise b: "Rui will speak / won\'t speak to Jin-Su unless he apologises."',
        options: ['will speak', "won't speak"],
        correctAnswer: 1,
        explanation: 'Unless he apologises = if he doesn\'t apologise → won\'t speak.',
      },
      {
        id: 'gf5b-q8',
        question: 'Grammar Focus 5B, Exercise b: "If someone phones / is going to phone, don\'t tell them I\'m here."',
        options: ['phones', 'is going to phone'],
        correctAnswer: 0,
        explanation: 'If\'den sonra Present Simple kullanılır.',
      },
      {
        id: 'gf5b-q9',
        question: 'Grammar Focus 5B, Exercise b: "You can do anything if / unless you try hard enough."',
        options: ['if', 'unless'],
        correctAnswer: 0,
        explanation: '"You can do anything if you try hard enough" — olumlu koşul.',
      },
      {
        id: 'gf5b-q10',
        question: 'Grammar Focus 5B, Exercise b: "Will I have to bring anything if I come / will come to the party?"',
        options: ['come', 'will come'],
        correctAnswer: 0,
        explanation: 'If\'den sonra will KULLANILMAZ.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 4 — Modals and Phrases of Ability (Grammar Focus 4A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'modals-ability',
    title: 'Modals and Phrases of Ability',
    description: 'can, could, be able to, manage to ile yetenek ve beceri ifadeleri. (Grammar Focus 4A)',
    content: `
## can / could
- *I **can** ski, but I **can't** snowboard.*
- *I **couldn't** do maths at school.*

## be able to
Present perfect, past perfect ve diğer modal fiillerden sonra kullanılır:
- *How long **have** you **been able to** drive?*
- *Everyone **should be able to** swim.*

## manage to
Zor bir durumda başarmak:
- *It was hard work, but I **managed to** finish the project.*
- *I **didn't manage to** finish the book.*
    `,
    tips: [
      'can/could: Genel yetenek.',
      'be able to: Modal fiillerden sonra ve perfect tense\'lerle kullanılır.',
      'manage to: Zor bir durumda başarmak.',
      'couldn\'t: Geçmişte yapılamayan şeyler.',
    ],
    questions: [
      // ── From Grammar Focus 4A (textbook), Exercise a ──
      // "Underline the correct option. If both options are possible, underline both of them."
      {
        id: 'gf4a-q1',
        question: 'Grammar Focus 4A, Exercise a: "I went to India last year, but I can\'t / couldn\'t take any pictures because my camera was broken."',
        options: ["can't", "couldn't"],
        correctAnswer: 1,
        explanation: 'Geçmiş zaman: couldn\'t (last year).',
      },
      {
        id: 'gf4a-q2',
        question: 'Grammar Focus 4A, Exercise a: "He\'s been able to swim / He can swim since he was a child."',
        options: ["He's been able to swim", 'He can swim'],
        correctAnswer: 0,
        explanation: 'Present perfect ile: "has been able to" kullanılır.',
      },
      {
        id: 'gf4a-q3',
        question: 'Grammar Focus 4A, Exercise a: "When they were children, they could / were able to run really fast."',
        options: ['could', 'were able to', 'Her ikisi de doğru'],
        correctAnswer: 2,
        explanation: 'Geçmişteki genel yetenek: could ve were able to her ikisi de kullanılabilir.',
      },
      {
        id: 'gf4a-q4',
        question: 'Grammar Focus 4A, Exercise a: "She tried to read War and Peace, but she wasn\'t able to / didn\'t manage to finish it."',
        options: ["wasn't able to", "didn't manage to", 'Her ikisi de doğru'],
        correctAnswer: 2,
        explanation: 'Belirli bir durumda başarısızlık: her ikisi de kullanılır.',
      },
      {
        id: 'gf4a-q5',
        question: 'Grammar Focus 4A, Exercise a: "He managed to / could climb trees when he was a boy, but he can\'t / couldn\'t climb now."',
        options: ['could / can\'t', 'managed to / couldn\'t'],
        correctAnswer: 0,
        explanation: 'Geçmişteki genel yetenek: could. Şimdiki zamanda: can\'t.',
      },
      {
        id: 'gf4a-q6',
        question: 'Grammar Focus 4A, Exercise a: "Katya needs to can / be able to speak Japanese in her new job."',
        options: ['can', 'be able to'],
        correctAnswer: 1,
        explanation: '"needs to" dan sonra "be able to" gelir (needs to can ✗).',
      },
      {
        id: 'gf4a-q7',
        question: 'Grammar Focus 4A, Exercise a: "You will can / be able to find a new person for the job soon, I\'m sure."',
        options: ['can', 'be able to'],
        correctAnswer: 1,
        explanation: '"will"den sonra "be able to" gelir (will can ✗).',
      },
      {
        id: 'gf4a-q8',
        question: 'Grammar Focus 4A, Exercise a: "I\'m scared of not being able to / can\'t pass my exam tomorrow."',
        options: ['being able to', "can't"],
        correctAnswer: 0,
        explanation: '"of" edatından sonra gerund yapısı: "being able to".',
      },
      {
        id: 'gf4a-q9',
        question: 'Grammar Focus 4A, Exercise a: "They couldn\'t / didn\'t manage to find a parking place."',
        options: ["couldn't", "didn't manage to", 'Her ikisi de doğru'],
        correctAnswer: 2,
        explanation: 'Belirli bir durumda başarısızlık olduğu için her ikisi de doğrudur.',
      },
      {
        id: 'gf4a-q10',
        question: 'Grammar Focus 4A, Exercise a: "I think everyone should manage to / be able to drive. It\'s an important skill."',
        options: ['manage to', 'be able to'],
        correctAnswer: 1,
        explanation: '"should" dan sonra "be able to" kullanılır.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 6 — Modals of Obligation (Grammar Focus 6A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'modals-of-obligation',
    title: 'Modals of Obligation (Zorunluluk Kiplik Fiilleri)',
    description: 'must, have to, need to, should, ought to, mustn\'t, can\'t, don\'t have to kullanımları. (Grammar Focus 6A)',
    content: `
## must, have to, need to — Zorunluluk
- *You **have to** buy a ticket before you get on the train.*
- *Employees **must** wash their hands.* (resmi)

## mustn't / can't — Yasak
- *Drivers **mustn't** text and drive.*
- *We **can't** cross the road yet.*

## don't have to / don't need to — Zorunlu DEĞİL
- *University students **don't have to** wear a uniform.*

## should / ought to — Tavsiye
- *We **should see** as much as possible.*
- *We **shouldn't waste** time.*
    `,
    tips: [
      'must: Resmi kurallar. Geçmiş formu yoktur, have to kullanılır.',
      'mustn\'t: Yasak. don\'t have to: Zorunlu değil — ÇOK FARKLI!',
      'should / ought to: Tavsiye ve öneriler.',
    ],
    questions: [
      // ── From Grammar Focus 6A (textbook), Exercise a ──
      // "Complete the sentences with the correct form of have to, need to or must. Sometimes more than one answer is possible."
      {
        id: 'gf6a-q1',
        question: 'Grammar Focus 6A, Exercise a: "In my country, you _____ cross the road at a pedestrian crossing — it\'s illegal to cross anywhere else."',
        options: ['have to', 'must', 'need to'],
        correctAnswer: 0,
        explanation: 'Yasal bir zorunluluk: have to (veya must).',
      },
      {
        id: 'gf6a-q2',
        question: 'Grammar Focus 6A, Exercise a: "When I lived in Moscow, I _____ leave home two hours before work because the rush hour traffic was so bad."',
        options: ['had to', 'must', 'needed to'],
        correctAnswer: 0,
        explanation: 'Geçmiş zamanda zorunluluk: had to (must\'ın geçmiş formu yoktur).',
      },
      {
        id: 'gf6a-q3',
        question: 'Grammar Focus 6A, Exercise a: "Alex _____ wear a tie to work?"',
        options: ['has to', 'must', 'Does Alex have to'],
        correctAnswer: 2,
        explanation: 'Soru formunda: "Does ... have to" kullanılır.',
      },
      {
        id: 'gf6a-q4',
        question: 'Grammar Focus 6A, Exercise a: "I\'ll tell you a secret, but you _____ tell anyone. I don\'t want anyone else to know."',
        options: ["don't have to", "mustn't", "shouldn't"],
        correctAnswer: 1,
        explanation: 'Kesin yasak: mustn\'t.',
      },
      {
        id: 'gf6a-q5',
        question: 'Grammar Focus 6A, Exercise a: "We took plenty of money, but in the end, we _____ pay — everything was free."',
        options: ["didn't have to", "mustn't", "couldn't"],
        correctAnswer: 0,
        explanation: 'Ödeme zorunluluğu yoktu: didn\'t have to.',
      },
      {
        id: 'gf6a-q6',
        question: 'Grammar Focus 6A, Exercise a: "All visitors _____ (have to / must) report to reception."',
        options: ['have to', 'must', 'Her ikisi de doğru'],
        correctAnswer: 2,
        explanation: 'Resmi kural: hem have to hem must doğrudur.',
      },
      {
        id: 'gf6a-q7',
        question: 'Grammar Focus 6A, Exercise a: "If you want to be there on time, you\'ll _____ leave here very soon."',
        options: ['must', 'have to', 'need to'],
        correctAnswer: 2,
        explanation: 'will\'den sonra: need to veya have to kullanılır (must\'ın gelecek formu yok).',
      },
      {
        id: 'gf6a-q8',
        question: 'Grammar Focus 6A, Exercise a: "Your brother can borrow my books tonight, but he _____ forget to bring them back tomorrow. I need them for my class."',
        options: ["doesn't have to", "mustn't", "shouldn't"],
        correctAnswer: 1,
        explanation: 'Kesin yasak/uyarı: mustn\'t.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 6 — Comparatives and Superlatives (Grammar Focus 6B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'comparatives-superlatives',
    title: 'Comparatives & Superlatives (Karşılaştırma ve Üstünlük)',
    description: 'Sıfat ve zarfların karşılaştırma ve üstünlük dereceleri. (Grammar Focus 6B)',
    content: `
## Karşılaştırma Kuralları
- Tek heceli: *rich → rich**er**, the rich**est***
- -y ile biten: *easy → eas**ier**, the eas**iest***
- İki+ heceli: *careful → **more** careful, **the most** careful*
- Düzensiz: *good → better → the best* / *bad → worse → the worst*

## Derece zarfları
- **a lot / much / far**: Büyük fark
- **slightly / a bit / a little**: Küçük fark
- **as ... as**: Eşitlik — *They're **as wealthy as** the royal family.*
- **not as ... as**: Eşitsizlik — *She doesn't listen **as carefully as** she should.*
- **by far**: En üstün derece vurgusu
    `,
    tips: [
      'Tek heceli: -er / -est',
      'İki+ heceli: more / the most',
      'less: more\'un tersi',
      'as ... as: eşitlik, not as ... as: eşitsizlik',
    ],
    questions: [
      // ── From Grammar Focus 6B (textbook), Exercise a ──
      // "Complete the sentences with the words."
      {
        id: 'gf6b-q1',
        question: 'Grammar Focus 6B, Exercise a: "Complete the sentences with one word from the box in each space. Use each word only once." — "Today\'s lesson was _____ _____ more interesting than usual — it was excellent."',
        options: ['a lot', 'a bit', 'slightly', 'much'],
        correctAnswer: 0,
        explanation: '"a lot more interesting" — büyük fark.',
      },
      {
        id: 'gf6b-q2',
        question: 'Grammar Focus 6B, Exercise a: "That\'s the _____ word joke I\'ve _____ heard!"',
        options: ['worst / ever', 'worse / never', 'bad / ever'],
        correctAnswer: 0,
        explanation: 'Superlative + ever + Present Perfect: "the worst ... I\'ve ever heard".',
      },
      {
        id: 'gf6b-q3',
        question: 'Grammar Focus 6B, Exercise a: "The exam went really well. It wasn\'t _____ difficult _____ I expected."',
        options: ['as / as', 'more / than', 'so / that'],
        correctAnswer: 0,
        explanation: '"not as ... as" eşitsizlik yapısı: beklediğim kadar zor değildi.',
      },
      {
        id: 'gf6b-q4',
        question: 'Grammar Focus 6B, Exercise a: "I think she\'s one of _____ _____ innovative designers in the world."',
        options: ['the most', 'the more', 'the best'],
        correctAnswer: 0,
        explanation: 'Superlative (çok heceli): "the most innovative".',
      },
      {
        id: 'gf6b-q5',
        question: 'Grammar Focus 6B, Exercise a: "Our holiday was a _____ more expensive _____ we thought, but it was still good value."',
        options: ['bit / than', 'lot / than', 'most / as'],
        correctAnswer: 0,
        explanation: '"a bit more expensive than" — küçük fark.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 7 — Modals of deduction (Grammar Focus 7A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "modals-of-deduction",
    title: "Çıkarım Kipleri (Modals of deduction)",
    description: "Çıkarım yapmak için Must, might, could, can't kullanımı. (Grammar Focus 7A)",
    content: `
## Modals of deduction (Çıkarım Kipleri)

Aşağıdaki cümlelere ve anlamlarına bakın:
1 It **must** be a holiday home. -> Bunun bir tatil evi olduğuna eminim. (Kesinlikle öyle)
2 It **might** be a holiday home. -> Sanırım bir tatil evi. (Ama emin değilim, olabilir)
3 It **could** be a holiday home. -> Sanırım bir tatil evi. (Ama emin değilim, olabilir)
4 It **can't** be a holiday home. -> Bunun bir tatil evi olmadığına eminim. (İmkansız)

**Kural:**
*must*, *might*, *could* ve *can't* kiplerinden sonra fiilin yalın hali (to olmadan) kullanılır.
Not: Çıkarım yaparken "kesinlikle öyle değil" anlamını vermek için *mustn't* DEĞİL, *can't* kullanırız!
    `,
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
    content: `
## Quantifiers (Miktar Bildiriciler)

Şu cümlelerdeki doğru kelimelere dikkat edin:
1 There are **a lot of** / ~~too many~~ different kinds of plants in the Turia Gardens.
2 There are ~~much~~ / **plenty of** things to see and do in the park.
3 Pablo goes there early in the morning because there aren't so **many** / ~~much~~ people.
4 Ana thinks there are **too many** / ~~enough~~ tourists there.
5 There's ~~very few~~ / **very little** rubbish in the park.
6 Rosalia thinks there ~~aren't any~~ / **aren't enough** public toilets in the park.
    `,
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
    content: `
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
    `,
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
    content: `
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
    `,
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
    content: `
## The passive (Edilgen Çatı)

Last week, a new TV series **was uploaded** to your streaming service.
Young people **are attracted** to TV series they can binge on.

Edilgen yapıyı şu durumlarda kullanırız:
1 Eylemi kimin yaptığını **bilmiyorsak**
2 Eylemi kimin yaptığı halihazırda **çok barizse**
3 Eylemi kimin yaptığı **önemli değilse**

- Edilgen bir fiilden sonra eylemi KİMİN/NEYİN yaptığını belirtmek istersek **by** + isim kullanırız. (ör. *was directed **by** Martin Scorsese*)
- Edilgen bir fiilden sonra eylemi yapmak için HANGİ ARACIN kullanıldığını belirtmek istersek **with** + isim kullanırız. (ör. *was filmed **with** a smartphone camera*)
    `,
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
    content: `
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
    `,
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
    content: `
## Second conditional (Tip 2 Koşul Cümleleri)

- Was it scary? I think if I went, I'd be terrified!
- If I was a bit fitter, I would definitely do it.

1 Second conditional'ı **hayal ettiğimiz, ancak şu an için gerçek olmayan (unreal) durumlardan** bahsederken kullanırız.
2 Second conditional'ı oluşturmak için şu formülü kullanırız: **If + past simple, would / wouldn't + infinitive**.
    `,
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
    content: `
## Third conditional (Tip 3 Koşul Cümleleri)

If Wendy **had had** better handwriting, my business **wouldn't have been** such a success, and I certainly **wouldn't have met** Matt.

1 Third conditional'ı **geçmişte yaşanmış ancak şu an değişmesi imkansız hayali olaylardan ve onların muhtemel sonuçlarından** bahsetmek için kullanırız (Geçmişe yönelik "keşke"ler veya varsayımlar).
2 Third conditional'ın doğru formülü şöyledir:
**If + past perfect, would have + past participle (fiilin 3. hali)**.
    `,
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

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC SKILLS: Causatives
  // ═══════════════════════════════════════════════════════════════
  {
    id: "causative-have-get",
    title: "Causative (Ettirgen Çatı): Have / Get",
    description: "Başkasına yaptırılan işler, olumsuz olaylar ve kendi yaptığımız işler (reflexives) için Causative kullanımı.",
    content: `
## Causative: have/get + object + past participle

### 1. Başkasına Yaptırılan (Ücret Karşılığı veya Ayarlanan) İşler
We use the structure **have/get + object + past participle** to talk about things that we arrange or pay for but don’t actually do ourselves. *Have* is slightly more formal than *get*.

**Tense Examples:**
- **Present Simple:** I **have** my car **washed** every week. (Arabamı her hafta yıkatırım.) / I **get** my hair **cut** once a month.
- **Past Simple:** She **had** her phone **repaired** yesterday. / He **got** his suit **cleaned** for the wedding.
- **Future (will):** We'll **have** the documents **delivered** tomorrow. / I'll **get** my bike **fixed** next week.
- **Present Perfect:** They've **had** their house **painted** recently. / She's **got** her laptop **updated**.

**Not:** Bazen eylemi yapan kişiyi (agent) belirtmek istediğimizde cümlenin sonuna **"by + person/thing"** ekleriz.
- I had my hair cut **by a new stylist**.

### 2. İstem Dışı / Olumsuz Olaylar (Adverse Events)
We also use *have + object + past participle* to describe something that happens to us **without arranging or paying for it**, often something negative.
- He **had** his wallet **stolen**. (Cüzdanını çaldırdı.)
- She **had** her car **broken into**. (Arabasına zorla girildi.)
- They **had** their roof **damaged** in the storm. (Fırtınada çatıları hasar gördü.)

### 3. Kendi Yaptığımız İşler (Reflexive Pronouns)
We use a **reflexive pronoun** (myself, yourself, herself, ourselves, etc.) to show that we did the action ourselves instead of paying or asking someone to do it.
- It was too expensive to get my hair cut, so I cut it **myself**.
- She didn't get her nails done — she did them **herself**.
- We didn't have the room painted — we painted it **ourselves**.
    `,
    tips: [
      "have + nesne + V3 yapısında işi başkasına yaptırma (arrange/pay) veya başımıza gelen kötü bir olay anlatılır.",
      "Get yapısı, Have yapısına göre daha samimi/günlük bir dildedir.",
      "Kendi yaptığımız işleri vurgulamak için myself, herself gibi reflexive zamirler ekleriz."
    ],
    questions: [
      {
        id: "causative-q1",
        question: "A specialist is designing my website. -> I am __________.",
        options: ["having my website designed", "designing my website", "having designed my website"],
        correctAnswer: 0,
        explanation: "Şu an devam eden bir eylem olduğu için Present Continuous (am having + object + V3) kullanılır.",
      },
      {
        id: "causative-q2",
        question: "A thief broke their window to get in. -> They __________.",
        options: ["got their window broke", "had their window broken", "had broken their window"],
        correctAnswer: 1,
        explanation: "Olumsuz ve istenmeyen bir eylem olduğu için 'have + object + V3' (had their window broken) kullanılır.",
      },
      {
        id: "causative-q3",
        question: "I didn't ask anyone to iron my clothes. -> I ironed them __________.",
        options: ["myself", "by myself", "mine"],
        correctAnswer: 0,
        explanation: "Eylemi başkasına yaptırmayıp kendimiz yaptığımızı vurgulamak için reflexive pronoun (myself) kullanılır.",
      }
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC SKILLS: Past Habits & States
  // ═══════════════════════════════════════════════════════════════
  {
    id: "past-habits-states",
    title: "Past Habits: Used to, Would, Get used to, Be used to",
    description: "Geçmiş alışkanlıklar ve yeni durumlara alışma süreçlerini ifade etme.",
    content: `
## 1. Used to + V1
Geçmişteki alışkanlıkları veya geçmişte doğru olup artık geçerli olmayan durumları (states) anlatmak için kullanılır.
- *When my siblings and I were younger, we **used to spend** every afternoon at our grandmother's house.*
- *I **used to live** in London.* (Durum/State - "would" kullanılamaz)

## 2. Would + V1
Sadece geçmişteki **tekrarlanan eylemleri (repeated actions)** anlatmak için kullanılır. Durum bildiren fiillerle (state verbs) KULLANILAMAZ.
- *On weekends, we **would explore** the nearby park.*
- ❌ ~~I would live in London.~~ (Yanlış, 'used to' kullanılmalı)

## 3. Get used to + noun / -ing
Yeni bir duruma **alışma sürecini (become comfortable with something new)** ifade eder.
- *We had to **get used to** a completely new routine.*
- *I slowly **got used to cooking** simple meals for myself.*

## 4. Be used to + noun / -ing
Bir duruma **zaten alışkın olmayı (already comfortable with something)** ifade eder.
- *Now, we **are used to living** independently in different cities.*
    `,
    tips: [
      "'Used to' hem geçmiş eylemler hem de durumlar (states) için kullanılır.",
      "'Would' sadece geçmişte tekrarlanan eylemler için kullanılır. State verbs (be, live, like, know) ile KULLANILMAZ.",
      "'Get used to' ve 'be used to' yapılarından sonra fiil yalın halde gelmez, her zaman isim (noun) veya fiilimsi (V-ing) gelir."
    ],
    questions: [
      {
        id: "habits-q1",
        question: "I ______ have long hair when I was a child, but now I keep it short.",
        options: ["would", "used to", "got used to"],
        correctAnswer: 1,
        explanation: "'Have' burada durum (state) bildirdiği için 'would' KULLANILAMAZ. 'used to' doğru cevaptır."
      },
      {
        id: "habits-q2",
        question: "At first, driving on the left was difficult, but I eventually ______ it.",
        options: ["was used to", "used to", "got used to"],
        correctAnswer: 2,
        explanation: "Zamanla oluşan bir alışma sürecini (become comfortable) anlattığı için 'got used to' kullanılır."
      }
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC SKILLS: Future Times
  // ═══════════════════════════════════════════════════════════════
  {
    id: "future-perfect-continuous",
    title: "Future Times: Future Perfect & Future Continuous",
    description: "Gelecekte tamamlanmış olacak eylemler (Future Perfect) ve devam ediyor olacak eylemler (Future Continuous).",
    content: `
## 1. Future Continuous (will be + V-ing)
Gelecekte belirli bir zamanda **devam etmekte olacak** veya rutin hale gelecek eylemleri ifade eder.
- *Don't phone me at 5 pm. I **'ll still be driving** home from work at that time.* (Belirli bir zamanda devam eden)
- *In 10 years' time, I hope I **will be running** a bistro.*
- *Emma **will be starting** school in September.* (Gelecekteki planlanmış olaylar / rutinler)

## 2. Future Perfect (will have + V3)
Gelecekte belirli bir zamandan **önce tamamlanmış olacak** eylemleri ifade eder. Genellikle **"by"** veya **"by the time"** zaman ifadeleriyle sıkça kullanılır.
- *By the year 2040, life **will have changed** dramatically.*
- *They **will have built** the skyscraper by January.*
- *The next time you see me, I **will have had** a haircut.*
    `,
    tips: [
      "Future Continuous (will be doing): Gelecekteki o an itibarıyla olay eylem halinde olacaktır.",
      "Future Perfect (will have done): Gelecekteki o an itibarıyla olay bitmiş/tamamlanmış olacaktır.",
      "'By' (e/a kadar) edatı Future Perfect zamanın en yaygın ipucudur (By Friday, By 2050 vb.)."
    ],
    questions: [
      {
        id: "future-q1",
        question: "Don't call me at 8:00 AM. I ______ the kids to school at that time.",
        options: ["will have taken", "will be taking", "take"],
        correctAnswer: 1,
        explanation: "Saat 8:00'da eylem (okula götürme) devam ediyor olacağı için Future Continuous (will be taking) kullanılır."
      },
      {
        id: "future-q2",
        question: "By the time we get to the station, the train ______.",
        options: ["will be leaving", "will have left", "is leaving"],
        correctAnswer: 1,
        explanation: "Biz istasyona vardığımızda trenin gitme eylemi çoktan tamamlanmış olacağı için Future Perfect (will have left) kullanılır."
      }
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC SKILLS: Conditionals (If Clauses)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "conditionals-if-clauses",
    title: "Conditionals: If Clauses & Mixed Conditionals",
    description: "Koşul cümlelerinin 4 ana tipi ve zaman uyumsuzluğunda kullanılan karışık (mixed) tipleri.",
    content: `
## Type 0 (General Truths)
**Yapı:** If + present simple, present simple
Genel gerçekler, doğa olayları veya her zaman geçerli kurallar.
- *If you **heat** water to 100°C, it **boils**.*

## Type 1 (Real/Possible Future)
**Yapı:** If + present simple, will + base verb
Gelecekte olması muhtemel durumlar.
- *If it **rains** tomorrow, I **will take** an umbrella.*

## Type 2 (Unreal Present/Future)
**Yapı:** If + past simple, would + base verb
Şu anda veya gelecekte hayali, gerçek dışı veya imkansız durumlar.
- *If I **won** the lottery, I **would travel** the world.*
- *If I **were** you, I wouldn't do that.*

## Type 3 (Unreal Past)
**Yapı:** If + past perfect, would have + past participle (V3)
Geçmişte yaşanmış bitmiş, artık değiştirilemeyecek olaylar için "öyle olsaydı böyle olurdu" (ama olmadı) anlamı.
- *If I **had studied** harder, I **would have passed** the exam.*

## Mixed Conditionals (Karışık Tipler)
Eğer "If" kısmının zamanı ile "Temel cümlenin" zamanı farklıysa Mixed Type kullanılır.
**1. Past olayı → Present etkiliyorsa (Type 3 + Type 2):**
If + past perfect, would + base verb
- *If I **had studied** medicine, I **would be** a doctor now.* (Geçmişte tıp okusaydım, ŞU AN doktor olurdum.)

**2. Present durumu → Past'ı etkilemişse (Type 2 + Type 3):**
If + past simple, would have + V3
- *If she **were** more confident, she **would have asked** for a promotion last year.* (Genel olarak kendine güvenen biri olsaydı, GEÇEN YIL terfi isterdi.)
    `,
    tips: [
      "Type 2'de şimdiki zaman kurgusu yapılmasına rağmen 'Past Simple' kullanılır.",
      "Mixed Type 1: Geçmişteki bir olayın şu anki sonucudur (had done -> would do).",
      "Mixed Type 2: Şu anki genel bir özelliğin geçmişteki bir olaya etkisidir (were -> would have done)."
    ],
    questions: [
      {
        id: "if-q1",
        question: "If I ______ (not-wake) up so early this morning, I wouldn't be so tired now.",
        options: ["didn't wake", "haven't woken", "hadn't woken"],
        correctAnswer: 2,
        explanation: "Bu sabah erken uyanmış (geçmiş eylem), şu an yorgun (şimdiki sonuç). Bu bir Mixed Conditional (Type 3 + Type 2) örneğidir. O yüzden 'hadn't woken' gelmelidir."
      },
      {
        id: "if-q2",
        question: "I ______ the deadline, I would have submitted the report.",
        options: ["If I know", "If I knew", "If I had known"],
        correctAnswer: 2,
        explanation: "Raporu sunamadı (geçmişte kaldı). 'would have submitted' Type 3 temel cümlesidir. Bu yüzden If kısmı 'had known' olmalıdır."
      }
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC SKILLS: Wish Clauses
  // ═══════════════════════════════════════════════════════════════
  {
    id: "wish-clauses",
    title: "Wish Clauses & If Only",
    description: "Geçmişe dair pişmanlıklar veya şu an/geleceğe dair gerçekleşmesi istenen dilekler.",
    content: `
"Wish" ve "If only", pişmanlıkları, arzuları veya farklı olmasını istediğimiz durumları ifade etmek için kullanılır. "If only" genellikle "wish"ten daha güçlü bir duygu (strong hope/regret) belirtir.

## 1. Future Desire (Gelecek Arzusu)
**Yapı:** wish + would + base verb
Gelecekte değişmesini istediğimiz durumlar veya birinin davranışından duyulan şikayetler için.
- *I wish it **would stop** raining tomorrow.*
- ⚠️ Kural: Kendi kendimiz için (I wish I would...) kullanılmaz! (Doğrusu: I wish I could / I wish I were)

## 2. Unreal Present (Şu Anki İmkansız Dilek)
**Yapı:** wish + past simple
Şu anki gerçekliğe aykırı durumlar.
- *I wish I **knew** more languages.* (I don't know, but I want to.)
- *If only I **were** taller.*

## 3. Past Regret (Geçmiş Pişmanlığı)
**Yapı:** wish + past perfect (had + V3)
Geçmişte olmuş ya da olmamış ve artık değiştirilemeyecek şeyler için duyulan pişmanlık.
- *She wishes she **had taken** the earlier flight.*
- *If only I **had studied** harder!* (Keşke daha çok çalışsaydım!)
    `,
    tips: [
      "'Wish' cümlelerinde şimdiki zaman (am/is/are/do) KULLANILMAZ. Bir derece geçmişe gidilir.",
      "Kendimiz için (I / We) 'would' kullanılmaz. 'I wish I would be taller' YANLIŞTIR. 'I wish I were taller' doğrudur.",
      "'If only' yapısal olarak 'wish' ile aynı kurallara uyar ancak duygusal olarak daha yoğundur."
    ],
    questions: [
      {
        id: "wish-q1",
        question: "They didn't spend much money yesterday. -> They wish they ______ so much money yesterday.",
        options: ["hadn't spent", "didn't spend", "wouldn't spend"],
        correctAnswer: 0,
        explanation: "'yesterday' geçmiş zaman olduğu için geçmiş pişmanlık (wish + past perfect) kullanılır: hadn't spent."
      },
      {
        id: "wish-q2",
        question: "I want my neighbors to stop making so much noise at night. -> I wish my neighbors ______ so much noise.",
        options: ["don't make", "wouldn't make", "hadn't made"],
        correctAnswer: 1,
        explanation: "Başkalarının (komşuların) rahatsız edici bir alışkanlığını değiştirmesini istediğimiz için 'wouldn't make' kullanılır."
      }
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC SKILLS: Past Regrets (Should have)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "past-regrets-should-have",
    title: "Past Regrets: Should have + V3",
    description: "Geçmişteki kararlar üzerine tavsiye, eleştiri ve pişmanlık belirtme.",
    content: `
Geçmişte yapılması iyi bir fikir olan ama yapılmayan (veya tam tersi) eylemleri eleştirmek ya da pişmanlık duyduğumuzu belirtmek için kullanırız.

## 1. should have + past participle (V3)
"Yapmalıydın (ama yapmadın)." İyi bir fikirdi ancak gerçekleşmedi.
- *I **should have studied** harder.* (Çok çalışmalıydım, ama çalışmadım.)
- *You **should have called** me.* (Beni aramalıydın.)

## 2. shouldn't have + past participle (V3)
"Yapmamalıydın (ama yaptın)." Kötü bir fikirdi ancak gerçekleşti. (Eleştiri)
- *You **shouldn't have shouted** at her.* (Ona bağırmamalıydın, ama bağırdın.)
- *He **shouldn't have driven** so fast.* (O kadar hızlı sürmemeliydi.)

## 3. Should + subject + have + V3?
Geçmişteki kararları veya eylemleri sorgulamak için.
- ***Should I have called** her?* (Onu aramalı mıydım?)
    `,
    tips: [
      "'Should do' şu anki veya gelecekteki tavsiyeler içindir.",
      "'Should have done' ise geçmişteki bir durum için artık iş işten geçtikten sonra verilen tavsiye/eleştiridir.",
      "Anlam olarak 'I wish I had...' ile çok benzerlik gösterir."
    ],
    questions: [
      {
        id: "should-q1",
        question: "Lisa didn't set the alarm. She woke up late. -> She ______ the alarm.",
        options: ["should set", "should have set", "must have set"],
        correctAnswer: 1,
        explanation: "Geçmişte kurması gerekiyordu ama kurmadı. 'Should have set' (Kurmalıydı) kullanılır."
      },
      {
        id: "should-q2",
        question: "You didn't wear sunscreen and now you have sunburn. -> You ______ sunscreen.",
        options: ["should wear", "should have worn", "must wear"],
        correctAnswer: 1,
        explanation: "Geçmişte yapılması gereken bir eylem olduğu için 'should have worn' (giyinmeliydin/sürmeliydin) kullanılır."
      }
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC SKILLS: Past Modals of Deduction
  // ═══════════════════════════════════════════════════════════════
  {
    id: "past-modals-deduction",
    title: "Past Modals of Deduction (Geçmişte Çıkarım)",
    description: "Geçmişte yaşanmış olaylara dair elimizdeki kanıtlara göre kesinlik veya olasılık bildiren çıkarımlar.",
    content: `
Geçmişte gerçekleşen olaylar hakkında ne kadar emin olduğumuza göre farklı kipler (modals) kullanırız.

## 1. Must have + V3 (Certain)
"Kesinlikle öyle olmuştur." Geçmişte bir şeyin olduğuna dair çok güçlü bir inancımız veya kanıtımız varsa.
- *She **must have left** early because her car is gone.* (Arabası yok, demek ki kesin erken çıkmış.)
- *A boy comes in with dirty clothes and a soccer ball. -> He **must have played** soccer.*

## 2. May / Might / Could have + V3 (Possible)
"Öyle olmuş olabilir." Geçmişteki bir olay hakkında ihtimalden bahsederken. Kesinlik yoktur.
- *He **might have missed** the train.* (Treni kaçırmış olabilir.)
- *She **could have gone** to the supermarket.* (Süpermarkete gitmiş olabilir.)

## 3. Can't / Couldn't have + V3 (Impossible)
"Öyle olmuş olamaz." Geçmişte bir şeyin gerçekleşmiş olmasının imkansız olduğunu düşünüyorsak. ('Mustn't have' zıt anlamlı KULLANILMAZ).
- *They **can't have forgotten** your birthday!* (Doğum gününü unutmuş olamazlar!)
- *He **can't have broken** the vase. He wasn't home.* (Vazoyu o kırmış olamaz, evde değildi.)

## 4. May not / Might not have + V3 (Possibly didn't happen)
"Öyle olmamış olabilir." Olumsuz bir durumun ihtimali.
- *She **might not have received** my email.* (E-postamı almamış olabilir.)
    `,
    tips: [
      "Çıkarımlarda (deduction) geçmişin kesin olumsuzu için 'mustn't have' KULLANILMAZ; bunun yerine 'can't have' kullanılır.",
      "'Must have done' güçlü bir tahmin (yapmış olmalı) iken, 'Should have done' bir eleştiri/pişmanlıktır (yapmalıydı)."
    ],
    questions: [
      {
        id: "deduction-q1",
        question: "The lights are still on in the office. Everyone ______ gone home already.",
        options: ["must have", "can't have", "might have"],
        correctAnswer: 1,
        explanation: "Işıklar açıksa herkesin eve gitmiş olması imkansızdır. Bu yüzden 'can't have' (gitmiş olamazlar) kullanılır."
      },
      {
        id: "deduction-q2",
        question: "Andrew didn't revise for the exam, but he's passed. I think he ______ cheated.",
        options: ["must have", "can't have", "should have"],
        correctAnswer: 0,
        explanation: "Çalışmadan geçtiğine göre güçlü bir çıkarım var: Kesin kopya çekmiştir (must have cheated)."
      }
    ],
  }
];
