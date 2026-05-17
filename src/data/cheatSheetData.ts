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
  {
    id: 'wt-social-media',
    title: 'Social Media: Helpful or Harmful?',
    prompt: 'Write an opinion essay answering the question: "Is social media more helpful or harmful for young people?" Introduce the topic with an interesting hook, provide background, and clearly state your thesis. Support your ideas with at least two body paragraphs and conclude without introducing new arguments.',
    type: 'opinion',
  },
  {
    id: 'wt-classroom-tech',
    title: 'Technology in Classrooms',
    prompt: 'Discuss the benefits and challenges of using technology in modern classrooms. Organize your body paragraphs with clear topic sentences and supporting examples, and conclude by summarizing the key points.',
    type: 'argumentative',
  },
  {
    id: 'wt-public-transport',
    title: 'Importance of Public Transport',
    prompt: 'Write an opinion essay on the importance of public transportation in modern cities. Explain how it reduces traffic, helps the environment, and saves money. Ensure each paragraph has a clear focus.',
    type: 'opinion',
  },
  {
    id: 'wt-ai-homework',
    title: 'AI in Homework',
    prompt: 'Write an opinion essay answering the question: "Should students be allowed to use AI tools when doing their homework?" Address whether artificial intelligence helps or hinders genuine student learning. Support your point of view with logical reasons and academic examples.',
    type: 'opinion',
  },
  {
    id: 'wt-sustainability-courses',
    title: 'Sustainability Courses',
    prompt: 'Write a cause-and-effect essay analyzing the consequences of failing to implement sustainability or environmental awareness courses in universities. Focus on the negative effects on students and society as a whole.',
    type: 'cause-effect',
  },
  {
    id: 'wt-career-tech',
    title: 'Science and Careers',
    prompt: 'Write a cause-and-effect essay exploring how technological advancements and scientific discoveries shape modern career paths. Discuss both the causes of these changes and their direct effects on job seekers.',
    type: 'cause-effect',
  },
  {
    id: 'wt-interview-anxiety',
    title: 'Job Interview Anxiety',
    prompt: 'Write a cause-and-effect essay about feeling anxious during job interviews. Analyze the main causes of this anxiety and propose effective coping mechanisms or solutions. You can organize your essay in a block or chain style.',
    type: 'cause-effect',
  },
  {
    id: 'wt-future-education-2040',
    title: 'The Future of Education in 2040',
    prompt: "Write a well-organized problem-solution essay analyzing the potential problems of fully AI-driven classrooms in 2040. Propose realistic, actionable solutions to maintain students' social-emotional development and ensure genuine learning. Support your ideas with at least two body paragraphs and follow a clean block organization.",
    type: 'problem-solution',
  },
  {
    id: 'wt-smartphone-sociability',
    title: 'Smartphone Impact on Sociability',
    prompt: 'Write a well-organized problem-solution essay exploring how excessive smartphone usage creates communication barriers and social isolation among youth. Discuss how group activities, social awareness, and digital detoxes can resolve this concern. Propose at least two body paragraphs using block organization.',
    type: 'problem-solution',
  },
  {
    id: 'wt-culture-shock-communication',
    title: 'Culture Shock and Intercultural Communication',
    prompt: 'Write an academic problem-solution essay discussing the major challenges travelers face (such as language barriers and emotional isolation) when moving abroad. Provide practical solutions (such as pre-trip cultural research and active openness) to overcome these obstacles. Structure your body paragraphs with clear topic sentences and at least two supporting points.',
    type: 'problem-solution',
  },
  {
    id: 'wt-global-warming',
    title: 'The Truth About Global Warming',
    prompt: 'Write an academic problem-solution essay focusing on the severe consequences of global warming, such as rising sea levels, changing weather patterns, and the direct impact on wildlife. Propose practical, block-organized solutions including the transition to renewable energy sources, large-scale tree planting, and improving residential energy efficiency.',
    type: 'problem-solution',
  },
  {
    id: 'wt-binge-watching',
    title: 'Binge-watching TV Shows & Online Videos',
    prompt: 'Write a well-structured problem-solution essay addressing the rising trend of binge-watching digital media. Explain how it causes physical health deterioration and severe social isolation, and suggest realistic solutions such as setting strict daily time limits, using screen-blocking applications, and engaging in outdoor hobbies.',
    type: 'problem-solution',
  },
  {
    id: 'wt-social-media-addiction',
    title: 'Social Media Addiction',
    prompt: 'Write an academic problem-solution essay investigating social media addiction among teenagers. Discuss how it leads to severe sleep deprivation and low self-esteem due to constant peer comparison, and propose active solutions like scheduling regular digital detoxes and promoting offline group activities.',
    type: 'problem-solution',
  },
  {
    id: 'wt-public-libraries-decline',
    title: 'Public Libraries Popularity Decline',
    prompt: 'Write a problem-solution essay exploring the declining popularity and visits to public libraries in the digital era. Analyze the main contributing factors (such as instant online ebook access and outdated library spaces) and suggest creative ways to modernize libraries into interactive social hubs.',
    type: 'problem-solution',
  },
  {
    id: 'wt-traffic-jams',
    title: 'Traffic Jams in Big Cities',
    prompt: 'Write an academic problem-solution essay explaining the causes and negative impacts of severe urban traffic congestion. Propose practical solutions such as investing in clean public transit, implementing congestion charges, and encouraging flexible working hours.',
    type: 'problem-solution',
  },
  {
    id: 'wt-tourist-accommodation',
    title: 'Accommodation Problems Tourists Face',
    prompt: 'Write a problem-solution essay analyzing the accommodation issues faced by international tourists, such as soaring hotel prices, misleading advertisements, and unsafe bookings. Propose solutions like government-certified local homestays and standardized booking platforms.',
    type: 'problem-solution',
  },
  {
    id: 'wt-information-overload',
    title: 'Information Overload on the Internet',
    prompt: 'Write a problem-solution essay exploring the challenges of information overload and fake news on the internet. Analyze how this causes psychological stress and widespread confusion, and suggest practical methods to cultivate media literacy and verify reliable sources.',
    type: 'problem-solution',
  },
  {
    id: 'wt-urban-pollution',
    title: 'Pollution in Big Cities',
    prompt: 'Write an academic problem-solution essay on urban air, water, and noise pollution. Discuss its harmful impact on resident health and propose green solutions like creating low-emission vehicle zones, investing in urban tree-planting campaigns, and enforcing stricter industrial regulation.',
    type: 'problem-solution',
  },
];
