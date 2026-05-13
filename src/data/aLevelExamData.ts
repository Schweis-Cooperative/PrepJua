import type { ExamSet } from '../types/exam';

export const aLevelExamSets: ExamSet[] = [
  // ═══════════════════════════════════════════════════════════════
  // A LEVEL EXAM PRACTICE — MONTHLY 3
  // Part A: Circle the correct option (Q1–6)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partA',
    title: 'A-Level Monthly 3 — Part A: Use of English',
    description: 'Circle the correct option. Phrasal verbs, verb patterns, and vocabulary at B2+ level.',
    difficulty: 'hard',
    grammarFocus: 'Phrasal Verbs, Verb Patterns, Vocabulary',
    questions: [
      { id: 'alm3-q1', type: 'multiple_choice', question: 'Part A, Q1: "I\'m going to _____ my phone because I can\'t find it anywhere."', options: ['look for', 'look at', 'look up'], correctAnswer: 0, explanation: '"look for" — search for something.', difficulty: 'easy', grammarFocus: 'Phrasal verbs: look' },
      { id: 'alm3-q2', type: 'multiple_choice', question: 'Part A, Q2: "Please take care of yourself and _____ to eat healthy food."', options: ['try', 'trying', 'tried'], correctAnswer: 0, explanation: '"try" — bare infinitive after "and".', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm3-q3', type: 'multiple_choice', question: 'Part A, Q3: "She\'s a great babysitter. The children really _____ well with her."', options: ['feel like', 'look after', 'get on'], correctAnswer: 2, explanation: '"get on well with" — have a good relationship.', difficulty: 'easy', grammarFocus: 'Phrasal verbs' },
      { id: 'alm3-q4', type: 'multiple_choice', question: 'Part A, Q4: "To remember key points from a lecture, you should _____."', options: ['fail an exam', 'take notes', 'get into university'], correctAnswer: 1, explanation: '"take notes" — write down important information.', difficulty: 'easy', grammarFocus: 'Collocations' },
      { id: 'alm3-q5', type: 'multiple_choice', question: 'Part A, Q5: "I couldn\'t study at all and I really don\'t know what _____ in the exam tomorrow."', options: ['do', 'doing', 'to do'], correctAnswer: 2, explanation: '"what to do" — question word + infinitive.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'alm3-q6', type: 'multiple_choice', question: 'Part A, Q6: "We wanted to visit the museum but the _____ was so long that we gave up."', options: ['hostel', 'currency', 'queue'], correctAnswer: 2, explanation: '"queue" — a line of people waiting.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part B: Word Formation (Q7–11)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partB',
    title: 'A-Level Monthly 3 — Part B: Word Formation',
    description: 'Write the correct form of the word in brackets. Be careful about spelling!',
    difficulty: 'hard',
    grammarFocus: 'Word Formation, Spelling',
    questions: [
      { id: 'alm3-q7', type: 'fill_blank', question: 'Part B, Q7: "The _____ of the food was too slow because of the heavy rain." (DELIVER)', correctAnswer: 'delivery', explanation: '"delivery" — noun form of DELIVER.', difficulty: 'medium', grammarFocus: 'Word Formation' },
      { id: 'alm3-q8', type: 'fill_blank', question: 'Part B, Q8: "There were so many options that I couldn\'t _____ what to buy." (DECISION)', correctAnswer: 'decide', explanation: '"decide" — verb form of DECISION.', difficulty: 'medium', grammarFocus: 'Word Formation' },
      { id: 'alm3-q9', type: 'fill_blank', question: 'Part B, Q9: "The music from the neighbour\'s flat was so _____ that I couldn\'t sleep." (ANNOY)', correctAnswer: 'annoying', explanation: '"annoying" — adjective form (-ing for describing the cause).', difficulty: 'medium', grammarFocus: 'Word Formation' },
      { id: 'alm3-q10', type: 'fill_blank', question: 'Part B, Q10: "My brother _____ broke the window while he was playing football." (ACCIDENT)', correctAnswer: 'accidentally', explanation: '"accidentally" — adverb form of ACCIDENT.', difficulty: 'hard', grammarFocus: 'Word Formation' },
      { id: 'alm3-q11', type: 'fill_blank', question: 'Part B, Q11: "The people were _____ when the singer started to cry on the stage." (SHOCK)', correctAnswer: 'shocked', explanation: '"shocked" — past participle adjective (feeling).', difficulty: 'medium', grammarFocus: 'Word Formation' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part C: Fill in the blanks from word box (Q12–18)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partC',
    title: 'A-Level Monthly 3 — Part C: Contextual Fill-In',
    description: 'Fill in the blanks with the correct word from the box. There is ONE extra word! Word box: upside-down, on purpose, on the house, patient, focused, squash, avoid, essay.',
    difficulty: 'hard',
    grammarFocus: 'Contextual Vocabulary, Idiomatic Expressions',
    questions: [
      { id: 'alm3-q12', type: 'fill_blank', question: 'Part C, Q12: "He was working hard on an opinion (12) _____ for his English class."', correctAnswer: 'essay', explanation: '"essay" — a written composition.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm3-q13', type: 'fill_blank', question: 'Part C, Q13: "He tried to (13) _____ looking at his phone so he could finish his work."', correctAnswer: 'avoid', explanation: '"avoid" — stay away from.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm3-q14', type: 'fill_blank', question: 'Part C, Q14: "A coffee cup was lying (14) _____ on the floor, spilling latte everywhere."', correctAnswer: 'upside-down', explanation: '"upside-down" — turned over/inverted.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'alm3-q15', type: 'fill_blank', question: 'Part C, Q15: "Leo knew it wasn\'t done (15) _____."', correctAnswer: 'on purpose', explanation: '"on purpose" — intentionally.', difficulty: 'medium', grammarFocus: 'Idiomatic expressions' },
      { id: 'alm3-q16', type: 'fill_blank', question: 'Part C, Q16: "Leo was very (16) _____ as he helped clean up the mess."', correctAnswer: 'patient', explanation: '"patient" — calm and tolerant.', difficulty: 'easy', grammarFocus: 'Adjectives' },
      { id: 'alm3-q17', type: 'fill_blank', question: 'Part C, Q17: "The replacement drink was (17) _____."', correctAnswer: 'on the house', explanation: '"on the house" — free of charge.', difficulty: 'medium', grammarFocus: 'Idiomatic expressions' },
      { id: 'alm3-q18', type: 'fill_blank', question: 'Part C, Q18: "He was so (18) _____ on his writing that he didn\'t even notice when his friends walked in."', correctAnswer: 'focused', explanation: '"focused" — fully concentrated.', difficulty: 'easy', grammarFocus: 'Adjectives' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part E: Fill in the blanks with ONE word (Q22–30)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partE',
    title: 'A-Level Monthly 3 — Part E: Single-Word Gap Fill',
    description: 'Fill in the blanks with ONE word. Tests phrasal verbs, prepositions, and collocations at academic level.',
    difficulty: 'hard',
    grammarFocus: 'Phrasal Verbs, Prepositions, Collocations',
    questions: [
      { id: 'alm3-q22', type: 'fill_blank', question: 'Part E, Q22: "My boss had to put _____ the meeting until next week because half of the people in the office were ill."', correctAnswer: 'off', explanation: '"put off" — postpone.', difficulty: 'medium', grammarFocus: 'Phrasal verbs' },
      { id: 'alm3-q23', type: 'fill_blank', question: 'Part E, Q23: "After a long argument, they decided to break _____ and just be friends."', correctAnswer: 'up', explanation: '"break up" — end a relationship.', difficulty: 'easy', grammarFocus: 'Phrasal verbs' },
      { id: 'alm3-q24', type: 'fill_blank', question: 'Part E, Q24: "He turned _____ the amazing job offer in Berlin because the salary was not high enough."', correctAnswer: 'down', explanation: '"turn down" — reject/refuse.', difficulty: 'medium', grammarFocus: 'Phrasal verbs' },
      { id: 'alm3-q25', type: 'fill_blank', question: 'Part E, Q25: "I need to hand _____ my essay before the deadline, or I\'ll lose 10% of the grade."', correctAnswer: 'in', explanation: '"hand in" — submit.', difficulty: 'easy', grammarFocus: 'Phrasal verbs' },
      { id: 'alm3-q26', type: 'fill_blank', question: 'Part E, Q26: "_____ the way, have you finished your part of the presentation? I have finished mine."', correctAnswer: 'By', explanation: '"By the way" — incidentally.', difficulty: 'easy', grammarFocus: 'Discourse markers' },
      { id: 'alm3-q27', type: 'fill_blank', question: 'Part E, Q27: "After the trip, we promised to get in _____, but we haven\'t spoken since."', correctAnswer: 'touch', explanation: '"get in touch" — make contact.', difficulty: 'easy', grammarFocus: 'Phrasal verbs' },
      { id: 'alm3-q28', type: 'fill_blank', question: 'Part E, Q28: "At work, we must deal _____ difficult situations, like angry customers or too much work."', correctAnswer: 'with', explanation: '"deal with" — handle/manage.', difficulty: 'easy', grammarFocus: 'Phrasal verbs' },
      { id: 'alm3-q29', type: 'fill_blank', question: 'Part E, Q29: "You can _____ the lift or (30) _____ up the stairs." — Fill in blank 29.', correctAnswer: 'take', explanation: '"take the lift" — use the elevator.', difficulty: 'easy', grammarFocus: 'Collocations' },
      { id: 'alm3-q30', type: 'fill_blank', question: 'Part E, Q30: "You can take the lift or (30) _____ up the stairs."', correctAnswer: 'walk', explanation: '"walk up the stairs" — go upstairs on foot.', difficulty: 'easy', grammarFocus: 'Collocations' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part F: Reading Passage Cloze — Einstein (Q31–40)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partF',
    title: 'A-Level Monthly 3 — Part F: Reading Cloze (Einstein)',
    description: 'Read the text about Albert Einstein and choose the correct option for each blank. Tests grammar in context at C1 level.',
    passage: `Albert Einstein was a theoretical physicist (31) __________ is widely considered one of the greatest minds in history. He (32) __________ in Germany in 1879. As a child, he was very curious, though some teachers thought he was (33) __________ slow to learn because he didn't speak until he was three years old. Einstein (34) __________ play the violin to help him think through complex problems. In 1905, often called his 'miracle year,' he published four papers that were (35) __________ than any scientific work seen in decades. One of these papers explained the relationship between energy and mass using the famous equation E=mc2. Eventually, his genius (36) __________ by the global community. In 1921, he (37) __________ the Nobel Prize in Physics. Later in life, he moved to (38) __________ United States to escape the rise of the Nazi party in Europe. He settled in Princeton, New Jersey, (39) __________ he continued his research until his death. Today, Einstein remains one of (40) __________ famous figures in the world of science.`,
    difficulty: 'hard',
    grammarFocus: 'Relative Clauses, Passive Voice, Comparatives, Articles',
    questions: [
      { id: 'alm3-q31', type: 'multiple_choice', question: 'Part F, Q31: "Albert Einstein was a theoretical physicist (31) _____ is widely considered one of the greatest minds in history."', options: ['a) who', 'b) which', 'c) where', 'd) when'], correctAnswer: 0, explanation: '"who" — relative pronoun for a person.', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'alm3-q32', type: 'multiple_choice', question: 'Part F, Q32: "He (32) _____ in Germany in 1879."', options: ['a) born', 'b) is born', 'c) was born', 'd) has born'], correctAnswer: 2, explanation: '"was born" — Past Simple Passive.', difficulty: 'easy', grammarFocus: 'Passive Voice' },
      { id: 'alm3-q33', type: 'multiple_choice', question: 'Part F, Q33: "...some teachers thought he was (33) _____ slow to learn."', options: ['a) enough', 'b) too', 'c) more', 'd) most'], correctAnswer: 1, explanation: '"too slow" — excessively slow.', difficulty: 'easy', grammarFocus: 'Degree adverbs' },
      { id: 'alm3-q34', type: 'multiple_choice', question: 'Part F, Q34: "Einstein (34) _____ play the violin to help him think through complex problems."', options: ['a) use to', 'b) used to', 'c) is used to', 'd) uses to'], correctAnswer: 1, explanation: '"used to" — past habit.', difficulty: 'easy', grammarFocus: 'Used to' },
      { id: 'alm3-q35', type: 'multiple_choice', question: 'Part F, Q35: "...he published four papers that were (35) _____ than any scientific work seen in decades."', options: ['a) important', 'b) more important', 'c) most important', 'd) as important'], correctAnswer: 1, explanation: '"more important than" — comparative form.', difficulty: 'easy', grammarFocus: 'Comparatives' },
      { id: 'alm3-q36', type: 'multiple_choice', question: 'Part F, Q36: "Eventually, his genius (36) _____ by the global community."', options: ['a) was recognized', 'b) recognized', 'c) recognizing', 'd) recognizes'], correctAnswer: 0, explanation: '"was recognized" — Past Simple Passive.', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'alm3-q37', type: 'multiple_choice', question: 'Part F, Q37: "In 1921, he (37) _____ the Nobel Prize in Physics."', options: ['a) was won', 'b) win', 'c) has won', 'd) won'], correctAnswer: 3, explanation: '"won" — Past Simple active.', difficulty: 'easy', grammarFocus: 'Past Simple' },
      { id: 'alm3-q38', type: 'multiple_choice', question: 'Part F, Q38: "He moved to (38) _____ United States to escape the rise of the Nazi party."', options: ['a) the', 'b) a', 'c) an', 'd) no article'], correctAnswer: 0, explanation: '"the United States" — specific country with article.', difficulty: 'easy', grammarFocus: 'Articles' },
      { id: 'alm3-q39', type: 'multiple_choice', question: 'Part F, Q39: "...(39) _____ he continued his research until his death."', options: ['a) who', 'b) which', 'c) where', 'd) that'], correctAnswer: 2, explanation: '"where" — relative adverb of place (Princeton).', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'alm3-q40', type: 'multiple_choice', question: 'Part F, Q40: "Today, Einstein remains one of (40) _____ famous figures in the world of science."', options: ['a) more', 'b) most', 'c) the most', 'd) as'], correctAnswer: 2, explanation: '"the most" — superlative with "one of".', difficulty: 'easy', grammarFocus: 'Superlatives' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part G: Reading Comprehension — Text I (Customer Service) Q41–45
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partG1',
    title: 'A-Level Monthly 3 — Part G: Reading (Customer Service)',
    description: 'Read the passage about Sarah\'s customer service experience and answer the comprehension questions.',
    passage: `1 Sarah is a customer service representative for a large electronics company. She enjoys her job, but some days are more difficult than others. On Tuesday morning, she received a call from a very frustrated customer named Mr. Miller: "I am extremely angry!" Mr. Miller shouted as soon as Sarah answered. "I ordered a high-end laptop two weeks ago for my daughter's birthday. The delivery was delayed by five days. Moreover, when the box finally arrived this morning, the screen was cracked! This is completely unacceptable."

2 Sarah stayed calm and practiced the Listen step first. She did not interrupt Mr. Miller. She let him explain the entire situation and express his feelings. She took notes about the order number and the specific damage to the product. Once he finished speaking, Sarah moved to the second step: Apologize. "I am very sorry for this experience, Mr. Miller," she said with sincere empathy. "I understand how disappointing it is to receive a damaged gift, especially when it is already late. I would feel the same way if I were in your position."

3 Because Sarah was kind and professional, Mr. Miller's tone began to soften. He was no longer shouting. Now, it was time for Sarah to Solve the problem. "Here is what I can do for you immediately," Sarah explained. "I will ship a replacement laptop today using overnight express delivery so it arrives tomorrow. I will also send you a prepaid shipping label so you can return the damaged one at no cost to you. Finally, as compensation for the delay and the trouble, I have applied a 20% refund to your original payment." Mr. Miller sighed with relief. "Thank you, Sarah. I appreciate you taking care of this so quickly. I was worried I would have to argue to get a resolution." Sarah finished the call with the final step: Thank. "You are very welcome, Mr. Miller. Thank you for your patience and for bringing this to our attention. Is there anything else I can help you with today?"

4 After the call ended, Sarah felt proud. By following the professional steps of de-escalation, she turned an angry customer into a satisfied one. She knew that in customer service, how you handle a mistake is often more important than the mistake itself.`,
    difficulty: 'hard',
    grammarFocus: 'Reading Comprehension, Inference, Vocabulary in Context',
    questions: [
      { id: 'alm3-q41', type: 'multiple_choice', question: 'Q41: "The customer was upset when he called Sarah because _____."', options: ['a) the customer service line had a very long waiting time', 'b) the company charged the customer twice for the same order', 'c) the shipment arrived late and the product inside was broken', 'd) Sarah forgot to send a confirmation email for the order'], correctAnswer: 2, explanation: 'The text states the delivery was delayed by five days AND the screen was cracked.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm3-q42', type: 'multiple_choice', question: 'Q42: "Sarah showed empathy toward the customer by _____."', options: ['a) telling the customer that it was the delivery driver\'s fault', 'b) offering a 50% discount on all future orders immediately', 'c) listening quietly and acknowledging how frustrating the situation must be', 'd) asking the customer to read the company policy manual'], correctAnswer: 2, explanation: 'Sarah listened, did not interrupt, and said "I understand how disappointing it is."', difficulty: 'medium', grammarFocus: 'Inference' },
      { id: 'alm3-q43', type: 'multiple_choice', question: 'Q43: "The main idea of the text is that _____."', options: ['a) shipping companies often lose packages during the holidays', 'b) using empathy and structured steps can help resolve difficult customer complaints', 'c) Sarah wants to get a promotion by working harder than her coworkers', 'd) customers are usually angry because products are too expensive'], correctAnswer: 1, explanation: 'The text demonstrates a structured approach: Listen → Apologize → Solve → Thank.', difficulty: 'medium', grammarFocus: 'Main Idea' },
      { id: 'alm3-q44', type: 'multiple_choice', question: 'Q44: "The word \'de-escalation\' in paragraph 4 means _____."', options: ['a) avoiding the person completely so you never have to talk again', 'b) stopping the argument by proving the other person wrong', 'c) taking control of the conversation by speaking louder and more firmly', 'd) intentionally reducing tension so the situation does not become more harmful'], correctAnswer: 3, explanation: '"de-escalation" — reducing the intensity of a conflict.', difficulty: 'hard', grammarFocus: 'Vocabulary in Context' },
      { id: 'alm3-q45', type: 'multiple_choice', question: 'Q45: "\'this\' in paragraph 3 refers to the _____."', options: ['a) problem', 'b) refund', 'c) delivery', 'd) gift'], correctAnswer: 0, explanation: '"this" refers to the overall problem/situation Sarah was resolving.', difficulty: 'medium', grammarFocus: 'Reference' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part G: Reading Comprehension — Text II (Music Industry) Q46–50
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partG2',
    title: 'A-Level Monthly 3 — Part G: Reading (Music Industry)',
    description: 'Read the passage about the evolution of the music industry and answer the comprehension questions.',
    passage: `1 For many decades, the music industry relied entirely on physical formats. In the 20th century, music was recorded on vinyl records and later on cassette tapes and CDs. During this era, music was bought in local record stores, and fans often spent hours browsing the shelves. Because production and distribution costs were high, albums were so expensive that most people only owned a small collection of their favorite artists. The experience of music was tactile; you had to hold the disc in your hands to play it.

2 Everything began to change in the late 1990s with the rise of the MP3 format and websites like Napster. Suddenly, music could be compressed into small digital files and shared across the internet for free. This created a massive problem for record labels because their traditional business model was based on selling physical products. At the time, many people felt that CDs were too expensive, so they turned to illegal downloading instead. However, the transition wasn't immediate because many home internet connections weren't fast enough to download large amounts of data quickly.

3 By the 2010s, the industry shifted again toward streaming services like Spotify and Apple Music. These platforms changed the way we consume art by offering instant access to millions of tracks for a monthly fee. The convenience of these services is their greatest strength. If you have a subscription, you can listen to almost any song in the world on your smartphone. Furthermore, if a new album is released, you don't have to wait in line at a store; you can simply press play and enjoy it immediately from your living room.

4 Today, the music industry has reached a fascinating balance. While digital streaming is the most popular way to listen, many fans are rediscovering the beauty of the past. In recent years, vinyl records have become popular again as listeners look for a higher sound quality and a physical connection to the music. This evolution shows us that technology will always move forward, but we still value the traditions that came before. The story of music is a lesson in adaptation: if a business wants to survive, it must embrace new technology while still respecting the soul of the art.`,
    difficulty: 'hard',
    grammarFocus: 'Reading Comprehension, Vocabulary in Context',
    questions: [
      { id: 'alm3-q46', type: 'multiple_choice', question: 'Q46: "People usually bought music _____ in the 20th century."', options: ['a) through online streaming platforms', 'b) from local record stores', 'c) directly from artists\' websites', 'd) through mobile applications'], correctAnswer: 1, explanation: 'Paragraph 1: "music was bought in local record stores."', difficulty: 'easy', grammarFocus: 'Reading Comprehension' },
      { id: 'alm3-q47', type: 'multiple_choice', question: 'Q47: "The rise of the MP3 format in the late 1990s _____."', options: ['a) made CDs more expensive to produce', 'b) forced people to buy larger music collections', 'c) allowed music to be shared easily on the internet', 'd) improved the sound quality of vinyl records'], correctAnswer: 2, explanation: 'Paragraph 2: music "could be compressed into small digital files and shared across the internet."', difficulty: 'easy', grammarFocus: 'Reading Comprehension' },
      { id: 'alm3-q48', type: 'multiple_choice', question: 'Q48: "Record labels faced serious problems because _____."', options: ['a) people preferred buying more albums', 'b) their business model depended on selling physical products', 'c) internet connections were very fast', 'd) streaming services were already popular'], correctAnswer: 1, explanation: 'Paragraph 2: "their traditional business model was based on selling physical products."', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm3-q49', type: 'multiple_choice', question: 'Q49: "The word \'convenience\' in paragraph 3 means the _____."', options: ['a) ease and speed of accessing music anytime and anywhere', 'b) wide variety of songs available on the platform', 'c) improved audio quality compared to CDs', 'd) affordable monthly subscription fee'], correctAnswer: 0, explanation: '"convenience" — the quality of being easy to use/access.', difficulty: 'medium', grammarFocus: 'Vocabulary in Context' },
      { id: 'alm3-q50', type: 'multiple_choice', question: 'Q50: "The renewed popularity of vinyl records shows that _____."', options: ['a) technology has completely failed', 'b) people no longer use streaming services', 'c) listeners still value physical and traditional experiences', 'd) digital music has disappeared completely'], correctAnswer: 2, explanation: 'Paragraph 4: fans "value the traditions that came before" and seek "higher sound quality and a physical connection."', difficulty: 'medium', grammarFocus: 'Inference' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Text III: Paragraph-Heading Matching (Q51–55)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m3-partG3',
    title: 'A-Level Monthly 3 — Text III: Paragraph Matching (Coffee)',
    description: 'Read the text about coffee and match the main ideas (A–F) to the paragraphs (51–55). There is one extra main idea.',
    passage: `51. Recent studies suggest that your morning habit might help you live longer. Research from major health institutions shows that coffee drinkers are less likely to die from some of the leading causes of death in women and men: coronary heart disease, stroke, diabetes, and kidney disease. Regular consumption appears to support cardiovascular health over time.

52. Most people reach for a cup of coffee to wake up, and science backs this up. Caffeine acts as a central nervous system stimulant. When it reaches your brain, it blocks adenosine, a chemical that makes you feel sleepy. This results in improved energy levels, better mood, faster reaction times, and general cognitive function.

53. Coffee is much more than just caffeine and water. The coffee bean itself contains more than 1,000 different botanical compounds. Many of these are powerful antioxidants that protect your cells from damage. These natural chemicals help reduce inflammation and may provide a shield against various chronic illnesses.

54. Your body's chemistry benefits significantly from coffee. Both regular and decaf coffee seem to have a protective effect on your liver; research shows that coffee drinkers are more likely to have liver enzyme levels within a healthy range. Additionally, it helps your body process glucose better, which lowers the risk of developing type 2 diabetes.

55. While coffee has many benefits, it is possible to have too much of a good thing. Excessive caffeine intake can lead to a jittery feeling, increased heart rate, and high blood pressure. It can also interfere with your sleep cycle if consumed late in the day. For some people, too much coffee may even trigger anxiety or digestive discomfort.

Main Ideas:
A. Protecting your internal organs
B. The mental boost from caffeine
C. Why too much can be a problem
D. A drink full of natural compounds
E. Coffee and a longer life
F. How coffee helps with exercise`,
    difficulty: 'hard',
    grammarFocus: 'Reading: Paragraph-Heading Matching',
    questions: [
      { id: 'alm3-q51', type: 'multiple_choice', question: 'Match the main idea for Paragraph 51:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 4, explanation: 'Paragraph 51 discusses reduced mortality risk and cardiovascular health.', difficulty: 'hard', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q52', type: 'multiple_choice', question: 'Match the main idea for Paragraph 52:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 1, explanation: 'Paragraph 52 describes cognitive benefits and energy levels.', difficulty: 'hard', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q53', type: 'multiple_choice', question: 'Match the main idea for Paragraph 53:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 3, explanation: 'Paragraph 53 describes the chemical composition and natural compounds.', difficulty: 'hard', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q54', type: 'multiple_choice', question: 'Match the main idea for Paragraph 54:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 0, explanation: 'Paragraph 54 discusses liver and metabolic health (organs).', difficulty: 'hard', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q55', type: 'multiple_choice', question: 'Match the main idea for Paragraph 55:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 2, explanation: 'Paragraph 55 discusses negative side effects and risks.', difficulty: 'hard', grammarFocus: 'Paragraph Matching' },
    ],
  },
];
