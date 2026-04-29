import type { GrammarTopic } from '../types/grammar';

export const grammarData: GrammarTopic[] = [
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
    `,
    tips: [
      'Past Simple: Geçmişteki ana olayları sırayla anlatır.',
      'Past Continuous: Arka plan bilgisi verir veya ana olayla kesilen uzun eylemleri anlatır.',
      'Past Perfect: Hikâyedeki bir olaydan daha önce gerçekleşen olayı anlatır.',
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
];
