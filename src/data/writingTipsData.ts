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
    title: 'Opinion Essay (Academic Structure)',
    description: 'A formal piece of writing where you clearly state your point of view and support it with logical reasons and examples.',
    structure: [
      {
        title: '1. Introduction',
        content: 'Your introduction should grab attention, provide context, and state your main argument clearly in 3 parts: Hook, Background, and Thesis Statement.',
        example: '- Hook: Grab attention using an anecdote, quotation, question, surprising fact, or moving from general to specific.\n- Background: Give 1-2 sentences explaining the topic.\n- Thesis Statement: The most important sentence at the end of the intro. Clearly state your opinion. (e.g., "In my opinion, smartphones are valuable learning tools because...")'
      },
      {
        title: '2. Body Paragraph 1',
        content: 'Develop your first main reason. A strong body paragraph contains a Topic Sentence, Supporting Sentences, and an optional Concluding Sentence.',
        example: '- Topic sentence: "Firstly, social media helps people stay connected."\n- Explanation: Explain why this reason supports your opinion.\n- Example: "For example, I talk to my cousin in another country every week."'
      },
      {
        title: '3. Body Paragraph 2',
        content: 'Develop your second main reason using the same structure.',
        example: '- Topic sentence: "Secondly, it is a great place to learn new things."\n- Explanation: Expand on this idea.\n- Example: "For instance, many students use YouTube to study English."'
      },
      {
        title: '4. Body Paragraph 3',
        content: 'Develop your third main reason with support.',
        example: '- Topic sentence: "Finally, social media gives young people a voice."\n- Explanation: Expand.\n- Example: "To exemplify, young people can post about climate change to raise awareness."'
      },
      {
        title: '5. Conclusion',
        content: 'Remind the reader of your main ideas, wrap up smoothly, and leave a final impression. Do NOT introduce new ideas.',
        example: '- Paraphrase Thesis: Restate your opinion using different words.\n- Summarize Points: Briefly remind the reader of your key reasons.\n- Final Thoughts: Emphasize importance or encourage the reader.'
      }
    ],
    usefulPhrases: [
      // Stating opinion
      'I believe that...',
      'In my opinion, ...',
      'I think that...',
      'From my point of view, ...',
      'It seems to me that...',
      'I am convinced that...',
      // Supporting opinion
      'I agree with the idea that...',
      'I strongly support...',
      'One reason I think this is because...',
      'This is because...',
      'For example, ...',
      'Another reason is that...',
      // Contrasting opinion
      'Some people believe that..., but I think...',
      'Although some may argue that..., I believe...',
      'While it is true that..., I still think...',
      // Conclusion
      'In conclusion,',
      'To conclude,',
      'To sum up,',
      'In summary,',
      'All in all,',
      'To summarize,',
      'In brief,'
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
  },
  {
    id: 'cause-effect',
    title: 'Cause & Effect Essay (Academic)',
    description: 'Explain why an event happens (Causes) and/or what the results are (Effects). Can follow Block or Chain organization.',
    structure: [
      {
        title: '1. Introduction',
        content: 'Includes a Hook, Background information, and a clear Thesis Statement that indicates whether the essay focuses on causes, effects, or both.',
        example: 'Thesis: "This essay will discuss the main causes of social media addiction and its negative effects on academic performance."'
      },
      {
        title: '2. Organization Types',
        content: 'You can organize your essay in two main ways when focusing on BOTH causes and effects:',
        example: '- Block Organization: All causes are discussed first in separate paragraphs, followed by a transition paragraph, then all effects.\n- Chain Organization: A cause leads to an effect, which becomes the cause for the next effect (A -> B -> C).'
      },
      {
        title: '3. Body Paragraphs (Focus)',
        content: 'Each body paragraph should discuss ONLY ONE cause or ONE effect. Start with a Topic Sentence and follow with at least 2 supporting ideas (examples, facts).',
        example: 'Topic Sentence: "One major effect of traffic congestion is increased air pollution."'
      },
      {
        title: '4. Conclusion',
        content: 'A summary and restatement of the thesis, followed by a final thought, comment, or prediction.',
        example: 'To conclude, the rise in car ownership has severely impacted urban air quality. If governments do not invest in public transport, the health of city residents will continue to decline.'
      }
    ],
    usefulPhrases: [
      // Expressing Causes
      'a cause of...',
      'a reason for...',
      'because / since / as...',
      'due to / owing to / on account of / because of...',
      'owing to the fact that...',
      // Expressing Effects
      'lead to...',
      'give rise to...',
      'result in...',
      'affect / influence...',
      'as a result (of)...',
      'as a consequence (of)...',
      'thus / therefore / hence...'
    ]
  },
  {
    id: 'problem-solution',
    title: 'Problem-Solution Essay (Academic)',
    description: 'Describe a complex problem, explain its underlying causes/effects, and propose logical, realistic solutions to fix it.',
    structure: [
      {
        title: '1. Introduction',
        content: 'Introduce the topic, explain why it is a serious issue, and write a Thesis Statement that outlines the main problems and suggests that practical solutions exist.',
        example: 'Thesis: "Although traffic jams create severe problems like delays and air pollution, it is possible to overcome them with better public transport and urban planning."'
      },
      {
        title: '2. Organization Types',
        content: 'There are two common academic frameworks to organize this essay:',
        example: '- Block Organization: Discuss ALL problems first in Paragraph 2, then discuss ALL solutions in Paragraph 3.\n- Point-by-Point Organization: Discuss one problem AND its direct solution in Paragraph 2. Discuss the second problem AND its direct solution in Paragraph 3.'
      },
      {
        title: '3. Body Paragraphs',
        content: 'When writing about problems, explain the causes and effects. When proposing solutions, explicitly state how each solution could help reduce or prevent the problem.',
        example: 'Topic Sentence: "One way to overcome traffic congestion is to expand the subway network."'
      },
      {
        title: '4. Conclusion',
        content: 'Summarize the main ideas and restate that the solutions could significantly improve the situation. Do not add new information.',
        example: 'In conclusion, while urban congestion is a major concern, implementing efficient transit options can mitigate the damage.'
      }
    ],
    usefulPhrases: [
      // Problems / Challenges
      'problem / issue / difficulty / challenge...',
      'obstacle / barrier...',
      'major concern / serious issue...',
      // Solutions
      'solution / way to solve / approach / strategy...',
      'overcome / address / tackle / deal with / resolve...',
      'can be solved / can be reduced / can be prevented...',
      // Linking Words for Solutions
      'therefore, as a solution, ...',
      'to solve this problem, one way is...',
      'in order to / so that...',
      // Essay Phrases
      'a common problem is...',
      'one of the main issues is...'
    ]
  },
  {
    id: 'describing-visuals',
    title: 'Describing Visuals & Data (Academic)',
    description: 'Useful for IELTS Writing Task 1 or Academic Presentations. Learn how to introduce charts, compare data, and highlight trends.',
    structure: [
      {
        title: '1. Introduction',
        content: 'Introduce the visual (graph, chart, table, map) and state exactly what it shows in a single sentence.',
        example: '"This graph illustrates the rapid growth of online shopping over the last decade."'
      },
      {
        title: '2. Overview / Summary',
        content: 'Provide a general overview of the main trends or differences. Do not list specific numbers here.',
        example: '"As you can see, there has been a steady increase in sugar consumption across all age groups."'
      },
      {
        title: '3. Detailed Analysis',
        content: 'Refer back to specific parts of the visual, comparing data points and highlighting key details using academic verbs.',
        example: '"Compared with the figure we saw before, this chart demonstrates a much faster rate of decline in physical bookstore sales."'
      }
    ],
    usefulPhrases: [
      // Introducing a visual
      'Let\'s look at this chart / graph...',
      'If we look at this, we can see that...',
      // Describing what a visual shows
      'This table shows...',
      'This figure illustrates / indicates...',
      'The picture demonstrates...',
      // Highlighting a detail
      '...as shown here.',
      '...which you can notice in this chart.',
      // Comparing & Summarizing
      'Compared with the figure...',
      'In contrast to what we see here...',
      'This chart summarizes...'
    ]
  }
];
