import type { ClozeTest, RewriteQuestion, UoEMockExam } from '../types/uoe';

// ═══════════════════════════════════════════════════════════════
// Cloze Tests — From textbook Review & Extension pages
// ═══════════════════════════════════════════════════════════════
export const clozeTests: ClozeTest[] = [
  // ── Unit 5 Review and Extension, Grammar, Exercise a ──
  // "Underline the correct words."
  {
    id: 'cloze-u5-review',
    title: 'Unit 5 Review & Extension — Grammar (Exercise a)',
    passage: `Underline the correct words.

1. The flowers close when you will touch / touch them.
2. They've decided they aren't building / going to build a road through the forest.
3. Shall / Am I pick the apples, or do you want to do it?
4. Unless the government does more to stop illegal hunting, tigers are dying out / will die out.
5. If you find a plant that you haven't seen before, don't / won't touch it, please.
6. Don't eat wild mushrooms unless / if you know they're safe.`,
    blanks: [
      { id: 'u5r-1', options: ['will touch', 'touch'], correctAnswer: 1 },
      { id: 'u5r-2', options: ['aren\'t building', 'aren\'t going to build'], correctAnswer: 1 },
      { id: 'u5r-3', options: ['Shall', 'Am'], correctAnswer: 0 },
      { id: 'u5r-4', options: ['are dying out', 'will die out'], correctAnswer: 1 },
      { id: 'u5r-5', options: ['don\'t', 'won\'t'], correctAnswer: 0 },
      { id: 'u5r-6', options: ['unless', 'if'], correctAnswer: 0 },
    ],
  },

  // ── Unit 6 Review and Extension, Grammar, Exercise a ──
  // "Read the text and underline the best words. Sometimes more than one word is possible."
  {
    id: 'cloze-u6-review',
    title: 'Unit 6 Review & Extension — Grammar (Exercise a)',
    passage: `Read the text and underline the best words. Sometimes more than one word is possible.

Essaouira, in Morocco, is a wonderful place to visit. You ¹must / should can enjoy walking through the streets, shopping at the market or tasting local food.

It's often windy in Essaouira, so you ²don't have to / should bring warm clothes. The wind means the beach isn't good for sunbathing, but you ³ought to / shouldn't go kite-surfing — it's really exciting!

If you like history, you ⁴don't have to / should explore the old part of town. There are a lot of market stalls here. If you want to buy something, discuss the price with the stallholder. You certainly ⁵shouldn't / ought to pay the first price you hear!

Many people here speak English, Spanish or French, so you ⁶don't have to / must learn Arabic, although you ⁷should / must learn a few useful phrases. You ⁸can't / don't have to stay in expensive hotels; there are other options, including riads, which are hotels that feel like family homes.`,
    blanks: [
      { id: 'u6r-1', options: ['must', 'should'], correctAnswer: 1 },
      { id: 'u6r-2', options: ["don't have to", 'should'], correctAnswer: 1 },
      { id: 'u6r-3', options: ['ought to', "shouldn't"], correctAnswer: 0 },
      { id: 'u6r-4', options: ["don't have to", 'should'], correctAnswer: 1 },
      { id: 'u6r-5', options: ["shouldn't", "ought to"], correctAnswer: 0 },
      { id: 'u6r-6', options: ["don't have to", 'must'], correctAnswer: 0 },
      { id: 'u6r-7', options: ['should', 'must'], correctAnswer: 0 },
      { id: 'u6r-8', options: ["can't", "don't have to"], correctAnswer: 1 },
    ],
  },

  // ── Unit 3 Review and Extension, Grammar, Exercise a ──
  {
    id: 'cloze-u3-review',
    title: 'Unit 3 Review & Extension — Grammar (Exercise a)',
    passage: `Complete the sentences with the past simple, the past continuous or the past perfect form of the verbs.

1. When I _____ (get) home, everyone _____ (wait) for me. My family and friends _____ (plan) a surprise party for my birthday!
2. When I _____ (wake up) this morning, I _____ (be) shocked. The wind _____ (blow) a tree down and it _____ (block) the front door.
3. As soon as the doctor _____ (show) me the X-ray, I _____ (know) I _____ (break) my leg.
4. As I _____ (sit) on the grass, I _____ (realise) that I _____ (wear) socks that _____ (not match).`,
    blanks: [
      { id: 'u3r-1a', options: ['got', 'was getting'], correctAnswer: 0 },
      { id: 'u3r-1b', options: ['waited', 'was waiting'], correctAnswer: 1 },
      { id: 'u3r-1c', options: ['planned', 'had planned'], correctAnswer: 1 },
      { id: 'u3r-2a', options: ['woke up', 'was waking up'], correctAnswer: 0 },
      { id: 'u3r-2b', options: ['was', 'was being'], correctAnswer: 0 },
      { id: 'u3r-2c', options: ['blew', 'had blown'], correctAnswer: 1 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// Rewrite Questions — From Worksheet 2, Section B
// "Rewrite the sentences with the given words/phrases."
// ═══════════════════════════════════════════════════════════════
export const rewriteQuestions: RewriteQuestion[] = [
  {
    id: 'ws2b-rw1',
    originalSentence: 'The fishing boat sank but luckily all the crew managed to save themselves.',
    keyword: 'able to',
    correctAnswer: 'The fishing boat sank but luckily all the crew were able to save themselves.',
    hint: 'managed to = were able to (belirli bir durumda başarı)',
  },
  {
    id: 'ws2b-rw2',
    originalSentence: 'It is not possible for us to come to the party tomorrow. We\'re going to a wedding.',
    keyword: 'able to',
    correctAnswer: 'We won\'t be able to come to the party tomorrow. We\'re going to a wedding.',
    hint: 'not possible = won\'t be able to (gelecekteki imkansızlık)',
  },
  {
    id: 'ws2b-rw3',
    originalSentence: 'I didn\'t know that Tom had been a police officer before he became a farmer.',
    keyword: 'used',
    correctAnswer: 'I didn\'t know that Tom used to be a police officer before he became a farmer.',
    hint: 'had been (geçmişteki durum) = used to be',
  },
  {
    id: 'ws2b-rw4',
    originalSentence: 'In the past, I enjoyed fishing but now I don\'t.',
    keyword: 'any more',
    correctAnswer: 'I don\'t enjoy fishing any more.',
    hint: 'In the past ... but now I don\'t = don\'t ... any more',
  },
  {
    id: 'ws2b-rw5',
    originalSentence: 'The thief stole two watches from the shop. Then, the police caught him.',
    keyword: 'By the time',
    correctAnswer: 'By the time the police caught him, the thief had stolen two watches from the shop.',
    hint: 'By the time + Past Simple, ... Past Perfect (daha önce gerçekleşen olay)',
  },
  {
    id: 'ws2b-rw6',
    originalSentence: 'During his law studies, he met his wife.',
    keyword: 'while',
    correctAnswer: 'While he was studying law, he met his wife.',
    hint: 'During + noun = While + Past Continuous',
  },
  // ── From Worksheet 3, Section B ──
  // "Rewrite the sentences with words/phrases given to you."
  {
    id: 'ws3b-rw1',
    originalSentence: 'Plants die quickly when they are not watered regularly.',
    keyword: 'if',
    correctAnswer: 'If plants are not watered regularly, they die quickly.',
    hint: 'Zero conditional: If + present simple, present simple.',
  },
  {
    id: 'ws3b-rw2',
    originalSentence: 'If the company doesn\'t meet its targets, it will lose investors.',
    keyword: 'unless',
    correctAnswer: 'Unless the company meets its targets, it will lose investors.',
    hint: 'unless = if not. Unless\'ten sonra olumlu cümle gelir.',
  },
  {
    id: 'ws3b-rw3',
    originalSentence: 'The team should train harder. Then, they will win the championship.',
    keyword: 'if',
    correctAnswer: 'If the team trains harder, they will win the championship.',
    hint: 'First conditional: If + present simple, will.',
  },
  {
    id: 'ws3b-rw4',
    originalSentence: 'If you study well, you won\'t have to take the final exam.',
    keyword: 'need to',
    correctAnswer: 'If you study well, you won\'t need to take the final exam.',
    hint: 'don\'t have to = don\'t need to (zorunlu değil)',
  },
  {
    id: 'ws3b-rw5',
    originalSentence: 'I expected the test to be more difficult than it was.',
    keyword: 'as...as',
    correctAnswer: 'The test wasn\'t as difficult as I expected.',
    hint: 'not as ... as = daha az (eşitsizlik karşılaştırması)',
  },
  {
    id: 'ws3b-rw6',
    originalSentence: 'The second exam was difficult. The first one was slightly easier.',
    keyword: 'a bit',
    correctAnswer: 'The first exam was a bit easier than the second one.',
    hint: 'slightly = a bit (küçük fark)',
  },
  {
    id: 'ws3b-rw7',
    originalSentence: 'He\'s talented. No one else in the group comes close.',
    keyword: 'by far',
    correctAnswer: 'He\'s by far the most talented person in the group.',
    hint: 'by far + superlative = açık ara en ...',
  },
  {
    id: 'ws3b-rw8',
    originalSentence: 'Maria works harder than anyone else in the office.',
    keyword: 'No one',
    correctAnswer: 'No one in the office works as hard as Maria.',
    hint: 'No one ... as ... as = hiç kimse ... kadar değil',
  },
];

// ═══════════════════════════════════════════════════════════════
// Worksheet 3, Section C — Fill in the blanks with appropriate words
// ═══════════════════════════════════════════════════════════════
export const uoeMockExams: UoEMockExam[] = [
  {
    id: 'ws3-section-c',
    title: 'Worksheet 3 — Section C: Fill in the Blanks',
    duration: 20,
    questions: [
      // "Fill in the blanks with the appropriate words or phrases."
      // Word box: raw, squeezed, bay, destroy, insights, chop, desert, endangered, as a result, due to, prevent, sour
      {
        id: 'ws3c-q1',
        type: 'fill_blank',
        question: 'Section C, Q1: "Many animal species are now _____ because of habitat loss and illegal hunting."',
        correctAnswer: 'endangered',
        explanation: '"endangered" = nesli tehlike altında olan.',
      },
      {
        id: 'ws3c-q2',
        type: 'fill_blank',
        question: 'Section C, Q2: "If we don\'t recycle or reduce waste, we will _____ the environment."',
        correctAnswer: 'destroy',
        explanation: '"destroy" = tahrip etmek.',
      },
      {
        id: 'ws3c-q3',
        type: 'fill_blank',
        question: 'Section C, Q3: "A/An _____ is a dry area with very little rain and few plants."',
        correctAnswer: 'desert',
        explanation: '"desert" = çöl.',
      },
      {
        id: 'ws3c-q4',
        type: 'fill_blank',
        question: 'Section C, Q4: "The small fishing village is in a peaceful _____ with clear blue water."',
        correctAnswer: 'bay',
        explanation: '"bay" = koy.',
      },
      {
        id: 'ws3c-q5',
        type: 'fill_blank',
        question: 'Section C, Q5: "Some foods, like sushi, are made with _____ fish, which hasn\'t been cooked."',
        correctAnswer: 'raw',
        explanation: '"raw" = çiğ, pişmemiş.',
      },
      {
        id: 'ws3c-q6',
        type: 'fill_blank',
        question: 'Section C, Q6: "Always use a sharp knife when you _____ vegetables and be careful with your fingers!"',
        correctAnswer: 'chop',
        explanation: '"chop" = doğramak.',
      },
      {
        id: 'ws3c-q7',
        type: 'fill_blank',
        question: 'Section C, Q7: "Washing your hands regularly can help _____ the spread of viruses and bacteria."',
        correctAnswer: 'prevent',
        explanation: '"prevent" = önlemek.',
      },
      {
        id: 'ws3c-q8',
        type: 'fill_blank',
        question: 'Section C, Q8: "The event was canceled _____ bad weather conditions."',
        correctAnswer: 'due to',
        explanation: '"due to" = nedeniyle.',
      },
      {
        id: 'ws3c-q9',
        type: 'fill_blank',
        question: 'Section C, Q9: "The roads were icy and dangerous; _____, there were several accidents."',
        correctAnswer: 'as a result',
        explanation: '"as a result" = sonuç olarak.',
      },
      {
        id: 'ws3c-q10',
        type: 'fill_blank',
        question: 'Section C, Q10: "The documentary gave us new _____ into how climate change affects the oceans."',
        correctAnswer: 'insights',
        explanation: '"insights" = içgörüler, derinlemesine bilgi.',
      },
      {
        id: 'ws3c-q11',
        type: 'fill_blank',
        question: 'Section C, Q11: "Before serving the grilled salmon, the chef _____ a fresh lemon over it."',
        correctAnswer: 'squeezed',
        explanation: '"squeezed" = sıkıştırdı.',
      },
      {
        id: 'ws3c-q12',
        type: 'fill_blank',
        question: 'Section C, Q12: "The lemon juice made the salad taste a little _____, but it was very refreshing."',
        correctAnswer: 'sour',
        explanation: '"sour" = ekşi.',
      },
    ],
  },
];
