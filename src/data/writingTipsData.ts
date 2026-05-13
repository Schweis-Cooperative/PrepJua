export interface WritingTipCategory {
  id: string;
  title: string;
  description: string;
  structure: {
    title: string;
    content: string;
    example?: string;
  }[];
  usefulPhrases: string[];
}

export const writingTips: WritingTipCategory[] = [
  {
    id: 'opinion',
    title: 'Opinion Essay',
    description: 'Express your personal viewpoint on a specific topic and support it with reasons.',
    structure: [
      {
        title: 'Introduction',
        content: 'Hook the reader, introduce the topic, and state your thesis clearly.',
        example: 'In my view, technology has fundamentally changed how we learn, making education more accessible than ever.'
      },
      {
        title: 'Body Paragraphs',
        content: 'Present one main idea per paragraph. Support it with evidence and examples.',
      },
      {
        title: 'Conclusion',
        content: 'Summarize your points and restate your opinion in a new way.',
      }
    ],
    usefulPhrases: [
      'In my opinion...',
      'I firmly believe that...',
      'From my perspective...',
      'It seems to me that...',
      'Personally, I think...',
      'To conclude...',
      'All things considered...'
    ]
  },
  {
    id: 'adv-disadv',
    title: 'Advantage / Disadvantage',
    description: 'Analyze both the positive and negative aspects of a situation or development.',
    structure: [
      {
        title: 'Introduction',
        content: 'Introduce the topic and mention that there are both pros and cons.',
      },
      {
        title: 'Advantages',
        content: 'Focus on the positive points in one or two paragraphs.',
      },
      {
        title: 'Disadvantages',
        content: 'Discuss the negative points clearly.',
      },
      {
        title: 'Conclusion',
        content: 'Balance both sides and give a final verdict.',
      }
    ],
    usefulPhrases: [
      'One major advantage is...',
      'On the other hand...',
      'However...',
      'Despite the benefits...',
      'A significant drawback is...',
      'Taking everything into account...'
    ]
  },
  {
    id: 'narrative',
    title: 'Narrative (Stories)',
    description: 'Tell a sequence of events, usually about a personal experience or a fictional event.',
    structure: [
      {
        title: 'Setting the Scene',
        content: 'Who, where, when. Use Past Continuous for background.',
        example: 'It was a cold winter morning and the sun was just beginning to rise...'
      },
      {
        title: 'The Conflict/Event',
        content: 'The main thing that happened. Use Past Simple.',
      },
      {
        title: 'Resolution',
        content: 'How the situation ended.',
      }
    ],
    usefulPhrases: [
      'It all started when...',
      'Suddenly...',
      'Meanwhile...',
      'By the time...',
      'In the end...',
      'Eventually...'
    ]
  }
];
