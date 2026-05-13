import type { CheatSheetSection } from '../types/common';
import type { WritingTopic } from '../types/writing';

export const cheatSheetSections: CheatSheetSection[] = [
  {
    id: 'cs-narrative',
    title: 'Narrative Tenses',
    icon: '📖',
    color: 'emerald',
    items: [
      {
        title: 'Past Simple',
        content: 'Used for main events in a story, usually in chronological order.',
        example: 'We met a few years ago. He offered to help me fix my car.',
      },
      {
        title: 'Past Continuous',
        content: 'Provides background information. A longer action interrupted by a shorter one.',
        example: 'I was driving home when I saw an accident.',
      },
      {
        title: 'Past Perfect',
        content: 'Used for an action that happened before another action in the past.',
        example: 'By the time they arrived, everyone else had gone home.',
      },
      {
        title: 'Conjunctions: when, while, as',
        content: 'Used to link Past Simple and Past Continuous sentences.',
        example: 'Somebody stole my bag when I wasn\'t looking.',
      },
    ],
  },
  {
    id: 'cs-usedto',
    title: 'Used to & Usually',
    icon: '🔄',
    color: 'blue',
    items: [
      {
        title: 'used to + verb',
        content: 'For long-term habits and states in the past that are no longer true.',
        example: 'I used to play football every Saturday.',
      },
      {
        title: 'Negative: didn\'t use to',
        content: 'In negative form, write "use" instead of "used".',
        example: 'My parents didn\'t use to go out much.',
      },
      {
        title: 'usually (Present)',
        content: 'The present equivalent of "used to". Used as an adverb of frequency.',
        example: 'They usually go out to a restaurant once a week.',
      },
      {
        title: 'any more / any longer',
        content: 'Used for habits that have stopped.',
        example: 'I don\'t play football any more.',
      },
    ],
  },
  {
    id: 'cs-future',
    title: 'Future Forms',
    icon: '🚀',
    color: 'violet',
    items: [
      {
        title: 'will',
        content: 'Instant decisions, general predictions, offers, and promises.',
        example: 'I\'ll help you. / I think it will rain.',
      },
      {
        title: 'going to',
        content: 'Prior plans/intentions and predictions based on evidence.',
        example: 'Look at those clouds — it\'s going to rain!',
      },
      {
        title: 'Present Continuous (future)',
        content: 'Fixed arrangements and appointments.',
        example: 'We\'re flying to Lisbon on Saturday.',
      },
    ],
  },
  {
    id: 'cs-conditional',
    title: 'First Conditional & Time Clauses',
    icon: '⚡',
    color: 'amber',
    items: [
      {
        title: 'If + Present Simple, will + verb',
        content: 'Real possibilities in the future.',
        example: 'If it rains, we\'ll stay at home.',
      },
      {
        title: 'unless = if not',
        content: 'A shortcut for negative conditions.',
        example: 'Unless the government does more, tigers will die out.',
      },
      {
        title: 'when / as soon as / until / before / after',
        content: 'Use Present Simple after time conjunctions (NOT will).',
        example: 'I\'ll call you when I get home.',
      },
    ],
  },
  {
    id: 'cs-modals',
    title: 'Modals of Obligation',
    icon: '⚖️',
    color: 'red',
    items: [
      {
        title: 'must / have to / need to',
        content: 'Obligation. must: formal rules. have to/need to: general.',
        example: 'Employees must wash their hands.',
      },
      {
        title: 'mustn\'t / can\'t',
        content: 'Prohibition. mustn\'t: strong prohibition. can\'t: informal/spoken.',
        example: 'Drivers mustn\'t text and drive.',
      },
      {
        title: 'don\'t have to / don\'t need to',
        content: 'Lack of obligation (not necessary).',
        example: 'University students don\'t have to wear a uniform.',
      },
      {
        title: 'should / ought to',
        content: 'Advice and suggestions.',
        example: 'You should see as much as possible.',
      },
    ],
  },
  {
    id: 'cs-comparatives',
    title: 'Comparatives & Superlatives',
    icon: '📊',
    color: 'teal',
    items: [
      {
        title: 'One syllable: -er / -est',
        content: 'rich → richer, the richest.',
        example: 'She\'s a bit happier than she used to be.',
      },
      {
        title: 'Multi-syllable: more / the most',
        content: 'careful → more careful, the most careful.',
        example: 'Life\'s a lot more interesting than before.',
      },
      {
        title: 'Irregular adjectives',
        content: 'good → better → the best. bad → worse → the worst.',
        example: 'This is the best meal I\'ve ever eaten.',
      },
      {
        title: 'as ... as / not as ... as',
        content: 'Comparing equality and inequality.',
        example: 'Japanese food isn\'t as spicy as Mexican food.',
      },
    ],
  },
];

export const writingTopics: WritingTopic[] = [
  {
    id: 'wt-biography',
    title: 'Writing a Biography',
    prompt: 'Write a biography of someone you know or know about. Explain why this person is important to you and describe key events in their life. Use time expressions like "from", "while", "during", "meanwhile", and "over".',
    type: 'narrative',
  },
  {
    id: 'wt-discussion',
    title: 'Discussion Essay',
    prompt: 'Discuss whether living in large cities is better than living in small towns. Evaluate advantages and disadvantages. Use connectors of reason (because, since, due to) and result (as a result, so).',
    type: 'argumentative',
  },
  {
    id: 'wt-culture',
    title: 'Cultural Differences',
    prompt: 'Write about the culture of a foreign country. Explain how it differs from your own culture using comparatives and superlatives. Mention food, clothing, greetings, or family life.',
    type: 'descriptive',
  },
  {
    id: 'wt-food-review',
    title: 'Food/Restaurant Review',
    prompt: 'Write a review of a restaurant you visited or a special meal you ate. Use descriptive adjectives (tasty, spicy, creamy, crunchy, bitter, fresh) and superlatives.',
    type: 'descriptive',
  },
  {
    id: 'wt-friendship-story',
    title: 'Friendship Story',
    prompt: 'Tell the story of how you met a close friend. Use narrative tenses (Past Simple, Past Continuous, Past Perfect) and relationship vocabulary.',
    type: 'narrative',
  },
  {
    id: 'wt-environment',
    title: 'Environmental Issues',
    prompt: 'Discuss whether governments should do more to solve environmental problems. Mention climate change, endangered species, and recycling using modals of obligation.',
    type: 'opinion',
  },
];
