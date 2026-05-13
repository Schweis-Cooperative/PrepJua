import type { ClozeTest, RewriteQuestion, UoEMockExam } from '../types/uoe';

export const clozeTests: ClozeTest[] = [
  {
    id: 'cloze-u5-review',
    title: 'Unit 5 Review & Extension — Grammar (Exercise a)',
    passage: `Underline the correct words.

1. The flowers close when you {{u5r-1}} them.
2. They've decided they {{u5r-2}} a road through the forest.
3. {{u5r-3}} I pick the apples, or do you want to do it?
4. Unless the government does more to stop illegal hunting, tigers {{u5r-4}}.
5. If you find a plant that you haven't seen before, {{u5r-5}} touch it, please.
6. Don't eat wild mushrooms {{u5r-6}} you know they're safe.`,
    blanks: [
      { id: 'u5r-1', options: ['will touch', 'touch'], correctAnswer: 1 },
      { id: 'u5r-2', options: ["aren't building", "aren't going to build"], correctAnswer: 1 },
      { id: 'u5r-3', options: ['Shall', 'Am'], correctAnswer: 0 },
      { id: 'u5r-4', options: ['are dying out', 'will die out'], correctAnswer: 1 },
      { id: 'u5r-5', options: ["don't", "won't"], correctAnswer: 0 },
      { id: 'u5r-6', options: ['unless', 'if'], correctAnswer: 0 },
    ],
  },
  {
    id: 'cloze-u6-review',
    title: 'Unit 6 Review & Extension — Grammar (Exercise a)',
    passage: `Read the text and select the best words.

Essaouira, in Morocco, is a wonderful place to visit. You {{u6r-1}} enjoy walking through the streets, shopping at the market or tasting local food.

It's often windy in Essaouira, so you {{u6r-2}} bring warm clothes. The wind means the beach isn't good for sunbathing, but you {{u6r-3}} go kite-surfing — it's really exciting!

If you like history, you {{u6r-4}} explore the old part of town. There are a lot of market stalls here. If you want to buy something, discuss the price with the stallholder. You certainly {{u6r-5}} pay the first price you hear!

Many people here speak English, Spanish or French, so you {{u6r-6}} learn Arabic, although you {{u6r-7}} learn a few useful phrases. You {{u6r-8}} stay in expensive hotels; there are other options, including riads, which are hotels that feel like family homes.`,
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
  {
    id: 'cloze-u3-review',
    title: 'Unit 3 Review & Extension — Past Tenses',
    passage: `Complete the sentences with the correct past tense forms.

1. When I {{u3r-1a}} home, everyone {{u3r-1b}} for me. My family and friends {{u3r-1c}} a surprise party for my birthday!
2. When I {{u3r-2a}} this morning, I {{u3r-2b}} shocked. The wind {{u3r-2c}} a tree down and it {{u3r-2d}} the front door.
3. As soon as the doctor {{u3r-3a}} me the X-ray, I {{u3r-3b}} I {{u3r-3c}} my leg.`,
    blanks: [
      { id: 'u3r-1a', options: ['got', 'was getting'], correctAnswer: 0 },
      { id: 'u3r-1b', options: ['waited', 'was waiting'], correctAnswer: 1 },
      { id: 'u3r-1c', options: ['planned', 'had planned'], correctAnswer: 1 },
      { id: 'u3r-2a', options: ['woke up', 'was waking up'], correctAnswer: 0 },
      { id: 'u3r-2b', options: ['was', 'was being'], correctAnswer: 0 },
      { id: 'u3r-2c', options: ['blew', 'had blown'], correctAnswer: 1 },
      { id: 'u3r-2d', options: ['blocked', 'had blocked'], correctAnswer: 1 },
      { id: 'u3r-3a', options: ['showed', 'had shown'], correctAnswer: 0 },
      { id: 'u3r-3b', options: ['knew', 'had known'], correctAnswer: 0 },
      { id: 'u3r-3c', options: ['broke', 'had broken'], correctAnswer: 1 },
    ],
  },
];

export const rewriteQuestions: RewriteQuestion[] = [
  {
    id: 'ws2b-rw1',
    originalSentence: 'The fishing boat sank but luckily all the crew managed to save themselves.',
    keyword: 'able to',
    correctAnswer: 'The fishing boat sank but luckily all the crew were able to save themselves.',
    hint: 'managed to = were able to (success in a specific situation)',
  },
  {
    id: 'ws2b-rw2',
    originalSentence: 'It is not possible for us to come to the party tomorrow. We\'re going to a wedding.',
    keyword: 'able to',
    correctAnswer: 'We won\'t be able to come to the party tomorrow. We\'re going to a wedding.',
    hint: 'not possible = won\'t be able to (future impossibility)',
  },
  {
    id: 'ws2b-rw3',
    originalSentence: 'I didn\'t know that Tom had been a police officer before he became a farmer.',
    keyword: 'used',
    correctAnswer: 'I didn\'t know that Tom used to be a police officer before he became a farmer.',
    hint: 'had been (past state) = used to be',
  },
  {
    id: 'ws2b-rw4',
    originalSentence: 'In the past, I enjoyed fishing but now I don\'t.',
    keyword: 'any more',
    correctAnswer: 'I don\'t enjoy fishing any more.',
    hint: 'In the past ... but now I don\'t = don\'t ... any more',
  },
];

export const uoeMockExams: UoEMockExam[] = [
  {
    id: 'ws3-section-c',
    title: 'Worksheet 3 — Section C: Fill in the Blanks',
    duration: 20,
    questions: [
      {
        id: 'ws3c-q1',
        type: 'fill_blank',
        question: 'Many animal species are now _____ because of habitat loss and illegal hunting.',
        correctAnswer: 'endangered',
        explanation: '"endangered" refers to species at risk of extinction.',
      },
      {
        id: 'ws3c-q2',
        type: 'fill_blank',
        question: 'If we don\'t recycle or reduce waste, we will _____ the environment.',
        correctAnswer: 'destroy',
        explanation: '"destroy" means to damage something so badly that it cannot be repaired.',
      },
      {
        id: 'ws3c-q3',
        type: 'fill_blank',
        question: 'A/An _____ is a dry area with very little rain and few plants.',
        correctAnswer: 'desert',
        explanation: '"desert" is a geographical term for dry regions.',
      },
      {
        id: 'ws3c-q7',
        type: 'fill_blank',
        question: 'Washing your hands regularly can help _____ the spread of viruses and bacteria.',
        correctAnswer: 'prevent',
        explanation: '"prevent" means to stop something from happening.',
      },
    ],
  },
];
