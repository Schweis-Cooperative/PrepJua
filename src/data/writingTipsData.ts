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
        title: '1. Introduction (Giriş Paragrafı)',
        content: 'Your introduction should grab attention, provide context, and state your main argument clearly. It follows a path: Hook ➔ Background ➔ Thesis Statement.',
        example: `• Hook (Kanca): Grabs reader's interest. Five academic techniques from textbook:
  1. General to Specific: "Many people around the world use smartphones every day. They are used for communication, entertainment, and even learning."
  2. Anecdote (Short Story): "Last year, I left my homework at home. I quickly turned on my phone, found the document in my email, and sent it to my teacher."
  3. Quotation (Alıntı): "Education is the most powerful weapon you can use to change the world." – Nelson Mandela
  4. Question (Soru): "Should students be allowed to use smartphones in the classroom?"
  5. Surprising Fact/Statistic: "Did you know that over 80% of high school students use smartphones for learning?"

• Background Information: 1-2 sentences explaining the topic. "Some people think smartphones in class are helpful, while others believe they are a distraction."

• Thesis Statement (Tez Cümlesi): The most important sentence at the end of the intro. Must be clear, specific, show your opinion, and prepare the reader.
  - ❌ Weak Example: "Yoga is good for health." (Too general/obvious)
  - ❌ Weak Example: "Living in a city is better because there are jobs, parks, shops, and many things." (Too broad, no focus)
  - ✔️ Strong Example: "Yoga benefits both the body and mind by increasing flexibility and reducing anxiety." (Clear, specific, lists main points)
  - ✔️ Strong Example: "Smartphones help with learning because they offer fast access to information, useful learning apps, and easy ways to communicate."`
      },
      {
        title: '2. Body Paragraphs (Gelişme Paragrafları)',
        content: 'Develops your main reasons with at least 2 body paragraphs. Each body paragraph must focus on exactly ONE reason, using Topic Sentences followed by explanations and concrete examples.',
        example: `• 1. Topic Sentence (Giriş Cümlesi): States the main reason for this paragraph.
  - Example: "Firstly, real friendship requires deep trust, which is often difficult to establish in online environments."

• 2. Supporting Sentences (Destekleyici Cümleler): Provide details, evidence, or personal examples.
  - Example: "On the Internet, people can easily hide their true identity or pretend to be someone else. This lack of transparency makes it extremely hard to build a stable and secure relationship."`
      },
      {
        title: '3. Case Study Blueprint: "Online Friends Are Not Real!"',
        content: 'A complete academic blueprint demonstrating how to outline an opinion essay using three strong pillars: Trust, Shared Physical Experiences, and Lifespan.',
        example: `• Thesis Statement: "Although online platforms help us communicate, I believe that online friends are not real friends."

• Body Paragraph 1 (Trust / Güven):
  - Topic Sentence: "First of all, true friendship requires trust, which is often missing in digital relationships."
  - Support: Online anonymity makes it easy for individuals to conceal their true identities, making it difficult to verify their honesty.

• Body Paragraph 2 (Shared Experiences / Ortak Deneyimler):
  - Topic Sentence: "Secondly, real friends share physical experiences and support each other in daily life."
  - Support: Chatting or video calling cannot replace the value of physical presence, engaging in shared hobbies, and helping each other in times of need.

• Body Paragraph 3 (Lifespan / Arkadaşlık Süresi):
  - Topic Sentence: "Finally, online friendships tend to have a short lifespan and fade away quickly."
  - Support: These connections are often built on superficial interests and lack the deep, physical roots of face-to-face bonds.

• Conclusion:
  - Restatement: "In conclusion, online friendships cannot match real-life friendships."
  - Final Thought: "True friendship requires physical presence, mutual experiences, and honesty."`
      },
      {
        title: '4. Functional Sentence Starters (Fonksiyonel Cümle Yapıları)',
        content: 'Use these template structures from the textbook to build complex academic sentences representing different functions.',
        example: `• Expressing Opinion & Reason:
  - "In my opinion, celebrities have a strong influence on young people's behavior because they copy their lifestyles."
  - "I believe that lying is never acceptable. This is because relationships built on lies lose their trust."

• Giving Examples:
  - "For example, many teenagers copy the fashion and hairstyles of their favorite social media influencers."

• Handling Counterarguments:
  - "Although some may argue that group work causes conflicts, I believe it teaches essential collaboration skills."
  - "While it is true that studying alone allows for personal focus, I still think discussing ideas with peers leads to a deeper understanding."`
      },
      {
        title: '5. Conclusion (Sonuç Paragrafı)',
        content: 'The last paragraph. Reminds the reader of your thesis/opinion (in different words), summarizes the main points, and provides a final thought or prediction.',
        example: `• Paraphrase Thesis: "In conclusion, in my opinion, online learning is a highly useful option because students can manage their time better and study at their own speed."

• Summarize Main Points: "To sum up, playing team sports offers many benefits. It helps people improve their teamwork skills, stay physically healthy, and build lifelong friendships."

• Add Final Thoughts: "Taking part in sports not only benefits individuals but also helps create stronger, more connected communities."`
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
        title: '1. Introduction (Giriş Paragrafı)',
        content: 'Includes a Hook, Background context, and a clear Thesis Statement. The thesis statement MUST explicitly indicate whether the essay focuses on Causes, Effects, or Both.',
        example: `• Thesis (Focus on Causes): "This essay will explain the major causes of procrastination among university students."
• Thesis (Focus on Effects): "This essay will examine the severe consequences of extreme weather conditions due to climate change."
• Thesis (Focus on Both): "This essay will discuss the main factors leading to anxiety in academic achievement and its outcomes."`
      },
      {
        title: '2. The Body "Reminder Rule" (Gelişme Paragrafı Kuralı)',
        content: 'CRITICAL RULE: Each body paragraph must discuss ONLY ONE cause or ONLY ONE effect. Do not mix multiple causes/effects in a single paragraph. Each cause or effect must have at least 2 supporting ideas.',
        example: `• Topic Sentence: "One significant cause of procrastination is the fear of failure."
• Support 1: Students delay tasks because they are anxious about not meeting high standards.
• Support 2: This fear makes them seek temporary comfort in other, less important activities.`
      },
      {
        title: '3. Block Organization (Blok Organizasyonu)',
        content: 'You discuss all the causes first in separate paragraphs, and then you discuss all the effects as a block in the subsequent paragraphs. An optional transition paragraph can separate the two blocks.',
        example: `• Paragraph 1: Introduction (Thesis on both causes & effects)
• Paragraph 2: Cause 1 (e.g., Lack of sleep causes)
• Paragraph 3: Cause 2 (e.g., Poor time management causes)
• (Optional) Paragraph 4: Transition Paragraph
• Paragraph 5: Effect 1 (e.g., Lower academic productivity)
• Paragraph 6: Effect 2 (e.g., Increased anxiety levels)
• Paragraph 7: Conclusion`
      },
      {
        title: '4. Chain Organization (Zincirleme Organizasyon)',
        content: 'Each body paragraph presents an interconnected cause-and-effect sequence, like links in a chain. One event directly leads to another, which in turn causes a third result.',
        example: `• Chain Flow: Cause A ➔ Effect B (which becomes Cause B) ➔ Effect C.
• Example: Spending too much time on smartphones (Cause A) leads to sleep deprivation (Effect B). Sleep deprivation (Cause B) then results in poor concentration during exams (Effect C).`
      },
      {
        title: '5. Conclusion (Sonuç Paragrafı)',
        content: 'Signals the end of the essay, restates the thesis in a new way, briefly summarizes the main causes/effects, and provides a final thought, prediction, or recommendation.',
        example: `• Summary: "In conclusion, urban congestion is driven by high car ownership and leads to severe pollution."
• Final Thought/Prediction: "If governments do not invest in cleaner public transit, the health of city residents will continue to decline."`
      }
    ],
    usefulPhrases: [
      'a cause of...',
      'a reason for...',
      'because / since / as...',
      'due to / owing to / on account of / because of...',
      'owing to the fact that...',
      'lead to / give rise to...',
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
        title: '1. Essay Frameworks (Block vs. Point-by-Point)',
        content: 'There are two primary academic frameworks to organize a Problem-Solution essay, depending on how you group problems and solutions:',
        example: `• Block Organization (Blok Düzen):
  - Paragraph 1: Introduction (Hook ➔ Context/Problem ➔ Thesis Statement)
  - Paragraph 2 (Problems Block): Discusses all major problems, their roots, and negative effects. Unified under a topic sentence with at least 2 distinct supports.
  - Paragraph 3 (Solutions Block): Discusses all proposed practical solutions and details how they work. Unified under a topic sentence with at least 2 distinct supports.
  - Paragraph 4: Conclusion (Summary of key points ➔ Final thought/warning)

• Point-by-Point Organization (Nokta Nokta Düzen):
  - Paragraph 1: Introduction (Hook ➔ Context/Problem ➔ Thesis Statement)
  - Paragraph 2 (Problem 1 & Solution 1): Discusses the first major problem and immediately proposes its direct solution.
  - Paragraph 3 (Problem 2 & Solution 2): Discusses the second major problem and immediately proposes its direct solution.
  - Paragraph 4: Conclusion (Summary of key points ➔ Final thought/warning)`
      },
      {
        title: '2. Strict Paragraph Constraints (Gelişme Paragrafı Sınırlandırmaları)',
        content: 'CRITICAL RULE: Each body paragraph must focus on a unified block. You must NOT mix unsystematic problems and solutions together.',
        example: `• Topic Sentence: Every body paragraph must begin with a clear, direct Topic Sentence stating the paragraph's unified focus.
• Body Paragraph 1 (Problems): Discusses ONLY the problems and their immediate causes/effects. Supported by at least 2 distinct academic explanations or concrete examples.
• Body Paragraph 2 (Solutions): Discusses ONLY the practical solutions. You must detail exactly *how* each solution works, supported by at least 2 explanations or examples.`
      },
      {
        title: '3. Thesis Statement Formulas (Tez Cümlesi Kalıpları)',
        content: 'Your thesis statement should appear as the last sentence of the introduction. It must introduce the topic/problem, outline the main difficulties, and explicitly signal that solutions exist. Use these 4 standard textbook patterns:',
        example: `• Pattern 1: "Many people face [problem], such as [prob 1] and [prob 2], but there are ways to solve these issues."
  - Example: "Many university students face unhealthy eating habits, such as relying on fast food and skipping fresh meals due to busy schedules, but these issues can be effectively solved through meal prepping and nutrition awareness campaigns."

• Pattern 2: "[Topic] can cause several difficulties, including [prob 1] and [prob 2], which can be addressed through [solutions]."
  - Example: "Culture shock can cause several difficulties for international travelers, including high emotional stress and severe isolation, which can be successfully addressed through open-mindedness and active local engagement."

• Pattern 3: "Although [topic] creates problems like [prob 1] and [prob 2], it is possible to overcome them with [solutions]."
  - Example: "Although traffic congestion creates severe problems like lost productivity and high air pollution in urban areas, it is possible to overcome them with investments in efficient public transit and flexible working hours."

• Pattern 4: "[Topic] presents challenges, such as [prob 1] and [prob 2], but these problems can be effectively solved."
  - Example: "Intercultural communication presents severe challenges, such as body language misunderstandings and differing speaking styles, but these problems can be effectively solved."`
      },
      {
        title: '4. Case Study Outline: "Culture Shock"',
        content: 'A complete academic block outline based on the textbook\'s first model essay (298 words) demonstrating culture shock challenges and how to overcome them.',
        example: `• Thesis: "Although culture shock creates problems like emotional stress and communication barriers for international travelers, it is possible to overcome them with preparation and active engagement."

• Body Paragraph 1 (Problems - Stress & Isolation):
  - Topic Sentence: "One major problem is that travelers often feel confused or stressed because daily habits in the new country are unfamiliar."
  - Support 1 (Confusion): Food, language, and social rules differ, causing intense frustration.
  - Support 2 (Communication): Inability to speak local languages makes asking for help, reading signs, or following simple instructions highly embarrassing, leading to loneliness.

• Body Paragraph 2 (Solutions - Preparation & Openness):
  - Topic Sentence: "However, there are several practical solutions that can help reduce culture shock."
  - Support 1 (Pre-trip prep): Learning basic phrases, reading local customs, and watching videos beforehand makes environments less surprising.
  - Support 2 (Active engagement): Staying open-minded, having friendly conversations with locals, and joining group tours provides safe opportunities to learn.`
      },
      {
        title: '5. Case Study Outline: "Intercultural Communication"',
        content: 'An outline based on the textbook\'s second model essay (273 words) showing communication breakdowns and clarify styles.',
        example: `• Thesis: "Intercultural communication presents severe challenges, such as body language misunderstandings and differing speaking styles, but these problems can be effectively solved."

• Body Paragraph 1 (Problems & Solutions: Direct/Indirect styles & Gestures):
  - Problem 1 (Body Language): Misinterpreting eye contact or hand gestures (e.g. opposite meanings) causing immediate discomfort.
  - Solution 1: Proactively research and learn basic cultural behaviors before meeting others.
  - Problem 2 (Speaking Styles): Clashes between direct speech and indirect, contextual communication, leading to frustration.
  - Solution 2: Ask polite clarifying questions (e.g., "Do you mean...?" or "Could you explain that a bit more?") to clear confusion.`
      }
    ],
    usefulPhrases: [
      // Problems / Challenges
      'problem / issue / difficulty / challenge...',
      'obstacle / barrier / major concern...',
      'serious issue / factor / cause...',
      // Effects / Consequences
      'lead to / result in...',
      'cause / contribute to / impact...',
      'affect / influence...',
      // Solutions
      'solution / way to solve...',
      'way to deal with / approach / strategy...',
      'method / overcome / address / tackle...',
      'deal with / resolve / improve...',
      // Expressing Possibility
      'can be solved / can be reduced...',
      'can be prevented / can be avoided...',
      // Essay Phrases
      'a common problem is...',
      'one of the main issues is...',
      'therefore, as a solution, ...',
      'to solve this problem, one way is...'
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
      },
      {
        title: '4. Presentation & Speaking Skills: Transition Guide',
        content: 'When delivering academic presentations or explaining charts/data, structured transitions make your delivery highly cohesive. Use these 7 textbook functional categories to guide your audience through any visual.',
        example: `• 1. Introducing a Visual:
  - "Let's look at this chart/slide/graph..."
  - "If we look at this, we can see that..."
  - "I'd like to draw your attention to this slide..."

• 2. Describing What a Visual Shows:
  - "This table/graph shows..."
  - "This figure illustrates/indicates..."
  - "The picture demonstrates..."

• 3. Referring to a Specific Part:
  - "As you can see here..."
  - "Like the ones we can see here..."
  - "If you notice the upper right corner..."

• 4. Highlighting / Emphasizing:
  - "...which you can see here"
  - "...as shown here"
  - "...as you can notice"

• 5. Comparing:
  - "Compared with the figure we saw before..."
  - "In contrast to what we see here..."
  - "This value is significantly higher than..."

• 6. Referring Back:
  - "Here it is again..."
  - "We saw earlier that..."
  - "Recall the first slide we looked at..."

• 7. Summarizing:
  - "This chart summarizes..."
  - "This image represents..."
  - "To sum up the main trend..."`
      }
    ],
    usefulPhrases: [
      // Introducing a visual
      "Let's look at this chart / graph / slide...",
      "If we look at this, we can see that...",
      "I'd like to draw your attention to this visual...",
      // Describing what a visual shows
      "This table / graph / chart shows...",
      "This figure illustrates / indicates / demonstrates...",
      "The diagram illustrates the relation between...",
      // Referring to a specific part
      "As you can see here...",
      "Like the ones we can see here...",
      "If we focus on this section...",
      // Highlighting / Emphasizing
      "...which you can notice here.",
      "...as shown here.",
      "...as you can notice.",
      // Comparing
      "Compared with the figure we saw before...",
      "In contrast to what we see here...",
      "This is significantly higher/lower than...",
      // Referring back
      "Here it is again...",
      "We saw earlier that...",
      "As mentioned previously...",
      // Summarizing
      "This chart summarizes...",
      "This image represents...",
      "To sum up the main findings..."
    ]
  }
];
