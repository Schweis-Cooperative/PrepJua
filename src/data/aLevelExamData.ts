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

55. While coffee has many health benefits, it's important to consume it in moderation. Excess caffeine can lead to jitteriness, increased heart rate, and disrupted sleep patterns. High intake is generally discouraged for individuals with high blood pressure or those who are sensitive to stimulants.`,
    difficulty: 'hard',
    grammarFocus: 'Paragraph Matching',
    questions: [
      { id: 'alm3-q51', type: 'multiple_choice', question: 'Match the main idea for Paragraph 51:', options: ['A. Impact on Energy', 'B. Liver and Glucose Benefits', 'C. Cardiovascular & Longevity', 'D. Chemical Complexity', 'E. Potential Risks', 'F. General History'], correctAnswer: 2, explanation: 'Paragraph 51 discusses health benefits and longevity.', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q52', type: 'multiple_choice', question: 'Match the main idea for Paragraph 52:', options: ['A. Impact on Energy', 'B. Liver and Glucose Benefits', 'C. Cardiovascular & Longevity', 'D. Chemical Complexity', 'E. Potential Risks', 'F. General History'], correctAnswer: 0, explanation: 'Paragraph 52 discusses waking up and cognitive function.', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q53', type: 'multiple_choice', question: 'Match the main idea for Paragraph 53:', options: ['A. Impact on Energy', 'B. Liver and Glucose Benefits', 'C. Cardiovascular & Longevity', 'D. Chemical Complexity', 'E. Potential Risks', 'F. General History'], correctAnswer: 3, explanation: 'Paragraph 53 discusses compounds and antioxidants.', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q54', type: 'multiple_choice', question: 'Match the main idea for Paragraph 54:', options: ['A. Impact on Energy', 'B. Liver and Glucose Benefits', 'C. Cardiovascular & Longevity', 'D. Chemical Complexity', 'E. Potential Risks', 'F. General History'], correctAnswer: 1, explanation: 'Paragraph 54 discusses liver health and glucose processing.', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'alm3-q55', type: 'multiple_choice', question: 'Match the main idea for Paragraph 55:', options: ['A. Impact on Energy', 'B. Liver and Glucose Benefits', 'C. Cardiovascular & Longevity', 'D. Chemical Complexity', 'E. Potential Risks', 'F. General History'], correctAnswer: 4, explanation: 'Paragraph 55 discusses negative side effects and risks.', difficulty: 'hard', grammarFocus: 'Paragraph Matching' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // A LEVEL EXAM PRACTICE — MONTHLY 4 (SPRING EDITION)
  // Part A: Use of English (Q1–16)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m4-partA',
    title: 'A-Level Monthly 4 (Spring) — Part A: Use of English',
    description: 'Cloze test focusing on conditionals and verb patterns. Texts about a singer\'s journey and Naomi Campbell.',
    difficulty: 'hard',
    grammarFocus: 'Conditionals (2nd & 3rd), Verb Patterns, Gerunds/Infinitives',
    questions: [
      { id: 'alm4-q1', type: 'multiple_choice', question: 'Q1: "If my parents had been richer, I could (1) __________ gone to music school."', options: ['have', 'had', 'has', 'having'], correctAnswer: 0, explanation: 'Third Conditional modal perfect (could have + V3).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'alm4-q2', type: 'multiple_choice', question: 'Q2: "And if I (2) __________ done that, I could have had a professional music teacher."', options: ['was', 'did', 'have', 'had'], correctAnswer: 3, explanation: 'Third Conditional if-clause (if + past perfect).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'alm4-q3', type: 'multiple_choice', question: 'Q3: "But if I had studied at a music school, I (3) __________ had much free time for other things."', options: ['hadn\'t had', 'wouldn\'t have', 'didn\'t have', 'won\'t have'], correctAnswer: 1, explanation: 'Third Conditional result clause (would have + V3).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'alm4-q4', type: 'multiple_choice', question: 'Q4: "If I\'d taken one of my recordings, I could (4) __________ it to him that day."', options: ['had given', 'give', 'have given', 'gave'], correctAnswer: 2, explanation: 'Ability in the past (could have + V3).', difficulty: 'medium', grammarFocus: 'Modals' },
      { id: 'alm4-q5', type: 'multiple_choice', question: 'Q5: "My friends all say, \'If I (5) __________ you, I\'d definitely take the opportunity.\'"', options: ['had', 'were', 'am', 'be'], correctAnswer: 1, explanation: 'Second Conditional (if I were you).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'alm4-q6', type: 'multiple_choice', question: 'Q6: "If you went on tour, (6) __________ see some amazing places."', options: ['you\'ve', 'you\'ll', 'you\'d have', 'you\'d'], correctAnswer: 3, explanation: 'Second Conditional result clause (would + V1).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'alm4-q7', type: 'multiple_choice', question: 'Q7: "If I (7) __________ the job, I\'d have to move to another city."', options: ['took', 'had taken', 'have taken', 'will take'], correctAnswer: 0, explanation: 'Second Conditional if-clause (past simple).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'alm4-q8', type: 'multiple_choice', question: 'Q8: "...and they\'d (8) __________ to university without me."', options: ['go', 'went', 'gone', 'going'], correctAnswer: 0, explanation: 'Bare infinitive after "would".', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q9', type: 'multiple_choice', question: 'Q9: "As a child, Naomi Campbell always wanted (9) __________ famous..."', options: ['be', 'to be', 'being', 'been'], correctAnswer: 1, explanation: 'want + to-infinitive.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q10', type: 'multiple_choice', question: 'Q10: "...but she never expected (10) __________ a supermodel."', options: ['to become', 'become', 'becoming', 'became'], correctAnswer: 0, explanation: 'expect + to-infinitive.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q11', type: 'multiple_choice', question: 'Q11: "She enjoyed (11) __________ in public..."', options: ['appeared', 'appear', 'to appear', 'appearing'], correctAnswer: 3, explanation: 'enjoy + gerund (-ing).', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q12', type: 'multiple_choice', question: 'Q12: "...modelling agency spotted her and insisted on (12) __________ her a contract."', options: ['gave', 'to give', 'give', 'giving'], correctAnswer: 3, explanation: 'insist on + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q13', type: 'multiple_choice', question: 'Q13: "...even magazines like Vogue agreed (13) __________ her photo..."', options: ['to use', 'using', 'used', 'use'], correctAnswer: 0, explanation: 'agree + to-infinitive.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q14', type: 'multiple_choice', question: 'Q14: "...Naomi decided (14) __________ her singing career..."', options: ['launch', 'launching', 'to launch', 'launched'], correctAnswer: 2, explanation: 'decide + to-infinitive.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q15', type: 'multiple_choice', question: 'Q15: "...but she failed (15) __________ the critics."', options: ['impressing', 'to impress', 'impressed', 'impress'], correctAnswer: 1, explanation: 'fail + to-infinitive.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'alm4-q16', type: 'multiple_choice', question: 'Q16: "...she has spent over two decades (16) __________ as a model."', options: ['work', 'to work', 'working', 'worked'], correctAnswer: 2, explanation: 'spend time + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part B, C, D: Grammar, Sentence Comp & Word Form (Q17–29)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m4-partBCD',
    title: 'A-Level Monthly 4 (Spring) — Part B, C, D: Advanced Grammar',
    description: 'Sentence restatement, completion, and word form selection. Tests tenses, modals, and word families.',
    difficulty: 'hard',
    grammarFocus: 'Future Perfect, Reported Speech, Modals, Word Formation',
    questions: [
      { id: 'alm4-q17', type: 'multiple_choice', question: 'Q17: Choose the similar meaning: "She will have finished the project by next Monday."', options: ['a) She started working on the project last Monday and will finish it soon.', 'b) She will still be in the middle of working on the project when next Monday comes.', 'c) She won\'t be working on the project on Monday because it will have been finished by then.', 'd) She is going to start working on the project next Monday.'], correctAnswer: 2, explanation: 'Future Perfect indicates completion by a certain time.', difficulty: 'medium', grammarFocus: 'Future Perfect' },
      { id: 'alm4-q18', type: 'multiple_choice', question: 'Q18: Choose the similar meaning: "I have never been to Paris before," she told him.', options: ['a) She told him that she had never been to Paris before that time.', 'b) She said that she has never gone to Paris until that moment.', 'c) She admitted that she had already visited Paris once before.', 'd) She explained that she would never go to Paris in the future.'], correctAnswer: 0, explanation: 'Reported speech: Present Perfect becomes Past Perfect.', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'alm4-q19', type: 'multiple_choice', question: 'Q19: Choose the similar meaning: "The meeting was cancelled because there weren\'t enough attendants."', options: ['a) We had a meeting because too many attendants showed up.', 'b) There were so few attendants that the meeting was cancelled.', 'c) It was such a crowded meeting that we didn\'t attend it.', 'd) When the meeting was cancelled, very few attendants had come.'], correctAnswer: 1, explanation: 'Cause and effect restatement using "so... that".', difficulty: 'medium', grammarFocus: 'Sentence Transformation' },
      { id: 'alm4-q20', type: 'multiple_choice', question: 'Q20: Choose the similar meaning: "We haven\'t taken the car to be serviced since we bought it."', options: ['a) The car has been checked several times since we bought it.', 'b) They haven\'t allowed us to take our car to be serviced since we bought it.', 'c) We had to take our car to be serviced after we bought it.', 'd) Our car hasn\'t been serviced since we bought it.'], correctAnswer: 3, explanation: 'Paraphrasing a negative present perfect statement.', difficulty: 'easy', grammarFocus: 'Present Perfect' },
      { id: 'alm4-q21', type: 'multiple_choice', question: 'Q21: Choose the similar meaning: "Mount Everest is higher than any other mountain in the world."', options: ['a) Mount Everest is one of the highest mountains but not the highest.', 'b) Some mountains in the world are just as high as Mount Everest.', 'c) There isn\'t any mountain as high as Mount Everest in the world.', 'd) Mount Everest is high, but there are a few higher mountains.'], correctAnswer: 2, explanation: 'Comparative "higher than any other" equals "no other is as high as".', difficulty: 'medium', grammarFocus: 'Comparatives' },
      { id: 'alm4-q22', type: 'multiple_choice', question: 'Q22: "You __________; it is a legal requirement for all drivers."', options: ['a) don\'t have to wear a seatbelt while driving on empty roads', 'b) must wear a seatbelt whenever you are driving', 'c) shouldn\'t wear your seatbelt if you are a careful driver', 'd) mustn\'t wear your seatbelt when you\'re stuck in traffic'], correctAnswer: 1, explanation: '"must" for legal obligation.', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'alm4-q23', type: 'multiple_choice', question: 'Q23: "The book __________ is now being made into a movie."', options: ['a) which I borrowed it from the library last week', 'b) who was written by a very famous author in Paris', 'c) that I read during my holiday and really enjoyed', 'd) whose it was published over fifty years ago'], correctAnswer: 2, explanation: 'Correct relative clause structure without redundant object.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'alm4-q24', type: 'multiple_choice', question: 'Q24: "If we had booked the hotel in advance, __________."', options: ['a) the hotel receptionist will help us', 'b) there won\'t be any financial loss', 'c) we can receive higher prices', 'd) we would have gotten a discount'], correctAnswer: 3, explanation: 'Third conditional result clause.', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'alm4-q25', type: 'multiple_choice', question: 'Q25: "By the time Julia retires from the human resources department, __________."', options: ['a) she will have interviewed more than 200 candidates', 'b) she has been working for that company for twenty years', 'c) she is looking for a job with better conditions and benefits', 'd) we will be throwing a retirement party for her next Saturday'], correctAnswer: 0, explanation: 'Future perfect with "By the time".', difficulty: 'medium', grammarFocus: 'Future Perfect' },
      { id: 'alm4-q26', type: 'multiple_choice', question: 'Q26: "The audience was clearly __________ by the comedian\'s jokes during the show."', options: ['a) amused', 'b) amusing', 'c) amuse', 'd) amusement'], correctAnswer: 0, explanation: 'Adjective -ed form for feeling.', difficulty: 'easy', grammarFocus: 'Word Formation' },
      { id: 'alm4-q27', type: 'multiple_choice', question: 'Q27: "My dog Lucy has always been __________ to me since I adopted her..."', options: ['a) loyalty', 'b) disloyalty', 'c) loyal', 'd) loyally'], correctAnswer: 2, explanation: 'Adjective form of loyal.', difficulty: 'easy', grammarFocus: 'Word Formation' },
      { id: 'alm4-q28', type: 'multiple_choice', question: 'Q28: "I work at a small company where employees need to be __________ to deal with the problems."', options: ['a) inflexibility', 'b) flex', 'c) flexibility', 'd) flexible'], correctAnswer: 3, explanation: 'Adjective form of flexible.', difficulty: 'easy', grammarFocus: 'Word Formation' },
      { id: 'alm4-q29', type: 'multiple_choice', question: 'Q29: "The chef used a very __________ way to decorate the cake..."', options: ['a) create', 'b) creative', 'c) creator', 'd) creation'], correctAnswer: 1, explanation: 'Adjective form of creative.', difficulty: 'easy', grammarFocus: 'Word Formation' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part E: Vocabulary & Context (Q30–40)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m4-partE',
    title: 'A-Level Monthly 4 (Spring) — Part E: Lexical Proficiency',
    description: 'Vocabulary multiple choice focusing on phrasal verbs, collocations, and contextual definitions.',
    difficulty: 'hard',
    grammarFocus: 'Vocabulary, Phrasal Verbs, Collocations',
    questions: [
      { id: 'alm4-q30', type: 'multiple_choice', question: 'Q30: "The air __________ in the city is getting worse due to the increase in traffic."', options: ['a) destruction', 'b) conservation', 'c) pollution', 'd) environment'], correctAnswer: 2, explanation: '"air pollution" — contamination of the air.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q31', type: 'multiple_choice', question: 'Q31: "Add some milk, then __________ the soup for one or two minutes."', options: ['a) chop', 'b) stir', 'c) mash', 'd) serve'], correctAnswer: 1, explanation: '"stir" — move a spoon round in order to mix.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q32', type: 'multiple_choice', question: 'Q32: "Katy is popular and friendly but her twin sister is very __________."', options: ['a) honest', 'b) determined', 'c) shy', 'd) talented'], correctAnswer: 2, explanation: 'Contrast to popular/friendly.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q33', type: 'multiple_choice', question: 'Q33: "Jon and I have a lot in __________ – we both like fishing, football and computer games."', options: ['a) common', 'b) together', 'c) share', 'd) background'], correctAnswer: 0, explanation: '"have a lot in common" — share interests.', difficulty: 'easy', grammarFocus: 'Collocations' },
      { id: 'alm4-q34', type: 'multiple_choice', question: 'Q34: "We keep old furniture and boxes in the __________. It\'s the room just under the roof."', options: ['a) basement', 'b) attic', 'c) garage', 'd) garden'], correctAnswer: 1, explanation: '"attic" — space/room just below the roof.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q35', type: 'multiple_choice', question: 'Q35: "I didn\'t want to go to the event, but she managed to __________ me with free pizza."', options: ['a) pretend', 'b) promise', 'c) persuade', 'd) prevent'], correctAnswer: 2, explanation: '"persuade" — convince someone to do something.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q36', type: 'multiple_choice', question: 'Q36: "__________ is the work of collecting, writing and publishing news stories."', options: ['a) Journalism', 'b) Literature', 'c) Recycling', 'd) Poetry'], correctAnswer: 0, explanation: 'Definition of Journalism.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q37', type: 'multiple_choice', question: 'Q37: "To __________ traffic accidents, drivers should follow speed limits carefully."', options: ['a) conserve', 'b) damage', 'c) protect', 'd) prevent'], correctAnswer: 3, explanation: '"prevent" — stop something from happening.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q38', type: 'multiple_choice', question: 'Q38: "I don\'t have my own house, so I __________ the house I live in."', options: ['a) borrow', 'b) lend', 'c) rent', 'd) sell'], correctAnswer: 2, explanation: '"rent" — pay for the use of a property.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'alm4-q39', type: 'multiple_choice', question: 'Q39: "How do you cope __________ the noise of the traffic outside your house?"', options: ['a) about', 'b) with', 'c) on', 'd) for'], correctAnswer: 1, explanation: '"cope with" — deal effectively with something difficult.', difficulty: 'medium', grammarFocus: 'Phrasal Verbs' },
      { id: 'alm4-q40', type: 'multiple_choice', question: 'Q40: "It\'s impossible to rely __________ public transport in this town – the buses are always late."', options: ['a) with', 'b) about', 'c) for', 'd) on'], correctAnswer: 3, explanation: '"rely on" — depend on.', difficulty: 'easy', grammarFocus: 'Phrasal Verbs' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part F: Reading Comprehension — Interior Design (Q41–45)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m4-reading1',
    title: 'A-Level Monthly 4 (Spring) — Reading I: Interior Design',
    description: 'Read the text about the principles of interior design and answer the comprehension questions.',
    passage: `1 There's more to interior design than just decorating a space. It's about creating a balanced environment with harmony and quality of life for the people who use it. It involves psychology, art, and an understanding of architectural structure.

2 The key to successful interior design lies in understanding the space and the people who will be using it. The design should not only be aesthetically pleasing but also functional. It goes far beyond pretty colours and nice furniture. It should reflect the personalities and needs of its inhabitants, transforming a house into a home. Sophie Platt, a famous interior designer, explains, "Interior design is a conversation between space and user. It's not about following trends, but about creating spaces that are authentic and personal."

3 Colour plays a significant role in interior design. The chosen shades can affect the mood of a room. Bright colours can energize a space, while muted tones create a calm and relaxing atmosphere. Lighting is another critical aspect. Natural light can make a room appear larger and more inviting, while artificial light can highlight certain areas and create visual interest. Space planning is also vital to ensure efficient use of space. Designers must consider the flow of movement within a room and arrange furniture accordingly. They also need to consider the balance between empty spaces and furnishings.

4 Textiles bring warmth and texture into a space. They can add layers of interest and tie a room together. From rugs and curtains to pillows and throws, textiles can completely transform a room. But you must give careful thought to how they are used. "Don't throw textiles into a room without considering what you are trying to achieve," Sophie says. "Sustainability is becoming increasingly important in interior design," she adds. "Clients are more aware of their environmental impact and want to include sustainable materials and energy-efficient practices in their homes."

5 In conclusion, interior design is both an art and science. It's about understanding how different elements can transform a space to improve the quality of life for those living in it. It's about creating environments that are not only beautiful but also meaningful and sustainable.`,
    difficulty: 'hard',
    grammarFocus: 'Reading Comprehension',
    questions: [
      { id: 'alm4-q41', type: 'multiple_choice', question: 'Q41: The main aim of the text is to __________.', options: ['a) explain how to choose colours for a room', 'b) describe interior design as more than just decoration', 'c) promote Sophie Platt\'s interior design services', 'd) compare traditional and modern design trends'], correctAnswer: 1, explanation: 'The text defines interior design as a complex field involving psychology, function, and harmony.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q42', type: 'multiple_choice', question: 'Q42: It is clear from the text that __________.', options: ['a) trends are the most important part of interior design', 'b) lighting and colour affect the mood and feel of a space', 'c) textiles should be used without much planning', 'd) natural light makes rooms smaller and less inviting'], correctAnswer: 1, explanation: 'Paragraph 3 discusses the impact of colour and light on atmosphere.', difficulty: 'easy', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q43', type: 'multiple_choice', question: 'Q43: We understand from the text that __________.', options: ['a) interior design ignores the needs of the people using the space', 'b) sustainability is not a concern for modern clients', 'c) space planning focuses only on aesthetics, not movement', 'd) designers should create personal and functional environments'], correctAnswer: 3, explanation: 'Paragraph 2 and 5 emphasize the importance of functionality and personal connection.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q44', type: 'multiple_choice', question: 'Q44: "transform" in paragraph 4 means __________.', options: ['a) change', 'b) decorate', 'c) balance', 'd) energize'], correctAnswer: 0, explanation: 'In this context, transform means to fundamentally change the appearance/character.', difficulty: 'medium', grammarFocus: 'Vocabulary in Context' },
      { id: 'alm4-q45', type: 'multiple_choice', question: 'Q45: The word "they" in paragraph 3 refers to __________.', options: ['a) clients', 'b) textiles', 'c) designers', 'd) factories'], correctAnswer: 2, explanation: '"They" refers to the designers mentioned earlier in the sentence.', difficulty: 'easy', grammarFocus: 'Reference' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part F: Reading Comprehension — Regrets & Choices (Q46–50)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m4-reading2',
    title: 'A-Level Monthly 4 (Spring) — Reading II: Hindsight & Choices',
    description: 'Read the reflective essay about life regrets and choices, then answer the questions.',
    passage: `1 It's a classic question often asked in interviews or late-night conversations: "If you could live your life again, what would you do differently?" Of course, it's an impossible fantasy, but thinking about it can give you an interesting perspective on your own life and the choices you've made. With the wisdom and hindsight of my 40 years, here are a few things I would change.

2 Firstly, I would have worried less about what other people thought of me. When you are young, it feels so important to be popular and to fit in. I remember hesitating to try new hobbies or wear certain clothes because I was afraid of the the consequences of being different. If I had been more confident in myself, I would have pursued my interest in theatre and drama instead of choosing a more 'sensible' subject at university. Life is too short to live it according to other people's expectations.

3 Secondly, I would have travelled more when I had the opportunity and fewer responsibilities. After university, I was offered a chance to teach English in South Korea for a year. I turned it down because I thought starting my career path immediately was more important. I regret that decision now. If I had taken that year to travel, I'm sure I would have learned so much more about the world and myself than I did in that first year in an office. I've been saving up for a big trip recently, but it's much more difficult to arrange now with a mortgage and a family.

4 Finally, I would have been kinder to my body. That means I would have eaten less junk food, exercised more regularly, and definitely worn sunscreen every day! When you're 20, you feel invincible, as if you will be young and healthy forever. You don't appreciate your health until you start to lose it. But does thinking like this actually help? Perhaps not. While it's a fun exercise, it's also true that every decision I've made, good or bad, has led me to where I am today. And I wouldn't trade my current life, my family, and my friends for anything. Maybe the real lesson isn't about wishing you could change the past. Maybe it's about using the wisdom you've gained to appreciate the present and make better choices for the future, starting from now.`,
    difficulty: 'hard',
    grammarFocus: 'Reading Comprehension, Inference',
    questions: [
      { id: 'alm4-q46', type: 'multiple_choice', question: 'Q46: We understand from the text that the writer __________.', options: ['a) always chose sensible subjects like theatre at university', 'b) worried less about popularity when young', 'c) regrets not pursuing interests due to others\' opinions', 'd) never hesitated to try new clothes or hobbies'], correctAnswer: 2, explanation: 'The writer expresses regret about not pursuing theatre because of trying to fit in.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q47', type: 'multiple_choice', question: 'Q47: According to the text, __________.', options: ['a) his early career start prevented world exploration', 'b) travelling is easier now with a family and mortgage', 'c) the writer accepted the offer to teach in South Korea', 'd) office work taught more than travel would have'], correctAnswer: 0, explanation: 'Choosing an immediate career path stopped him from travelling to South Korea.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q48', type: 'multiple_choice', question: 'Q48: We understand from the text that it is difficult to travel now because __________.', options: ['a) there are no good opportunities like teaching abroad', 'b) responsibilities like family make it harder to arrange', 'c) junk food and no exercise keep people at home', 'd) young people feel invincible and avoid trips'], correctAnswer: 1, explanation: 'The writer mentions a mortgage and a family as current obstacles.', difficulty: 'medium', grammarFocus: 'Inference' },
      { id: 'alm4-q49', type: 'multiple_choice', question: 'Q49: The writer mentions that he turned down __________.', options: ['a) an opportunity to travel with his family', 'b) a chance to study theatre and drama', 'c) a promotion at his first office job', 'd) a job overseas after finishing university'], correctAnswer: 3, explanation: 'He turned down a teaching job in South Korea.', difficulty: 'easy', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q50', type: 'multiple_choice', question: 'Q50: "invincible" in paragraph 4 means __________.', options: ['a) unhealthy', 'b) unbeatable', 'c) temporary', 'd) lazy'], correctAnswer: 1, explanation: 'Invincible means too powerful to be defeated or overcome.', difficulty: 'hard', grammarFocus: 'Vocabulary in Context' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part F: Reading Comprehension — Crowded Places (Q51–55)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'alevel-m4-reading3',
    title: 'A-Level Monthly 4 (Spring) — Reading III: Crowded Places',
    description: 'Read the text about the psychological impact of crowds and how to manage crowd sensitivity.',
    passage: `1 Some people love being in crowded places, feeding off the energy of the masses. Others, however, prefer quiet, less populated environments. It's not that they dislike people; they just find crowds overwhelming. A crowd for such people offers many challenges.

2 Understanding why people may not enjoy crowded spaces is the first step towards empathy. One reason could be an overload of the senses. In a crowd, there are numerous sights, sounds, and smells that can be too much for some individuals to handle. Another factor could be social anxiety. This involves fear or stress about social situations. For those with social anxiety, a crowd can seem like an intimidating barrier.

3 Not to forget, some individuals simply value personal space and solitude. Being in a crowd could feel like being intruded upon and disrupt their sense of peace. Many people feel invaded in a crowd situation. Once you understand these things, it can give you strategies to help people like this.

4 So, what can we do to help those who don't like crowds? It starts with understanding and respecting their preferences. Avoid pushing them into situations where they feel uncomfortable. When planning events, consider creating quiet spaces where attendees can withdraw if they feel overwhelmed. Provide clear information about the event's expected crowd size and the availability of less crowded alternatives.

5 In public places, consider using headphones to cut down on noise, or choose off-peak times to visit popular venues. Small changes like these can significantly improve experiences for people who find crowds overwhelming. Another useful strategy is to practice mindfulness techniques, which can help manage feelings of stress and anxiety in crowded places.

6 Respecting each other's comfort zones and understanding personal boundaries are key. Just because someone doesn't enjoy crowds, it doesn't mean they don't enjoy social interaction. In fact, they might prefer meaningful one-on-one interactions or small group settings. Remember, everyone's comfort levels and preferences are different. What might feel energising to some can feel draining to others. The key is empathy, understanding, and respect for each other's personal spaces and comfort zones.`,
    difficulty: 'hard',
    grammarFocus: 'Reading Comprehension',
    questions: [
      { id: 'alm4-q51', type: 'multiple_choice', question: 'Q51: Developing an understanding of crowd sensitivity is important to __________.', options: ['a) encourage people to stay home more often', 'b) help event planners sell more tickets', 'c) foster empathy toward those who find crowds overwhelming', 'd) limit quiet spaces in public venues'], correctAnswer: 2, explanation: 'Paragraph 2 highlights empathy as the primary goal of understanding.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q52', type: 'multiple_choice', question: 'Q52: It is clear from paragraph 2 that the writer thinks __________.', options: ['a) crowds always cause social anxiety for everyone', 'b) sensory overload is one reason people avoid crowds', 'c) people in crowds never value personal space', 'd) empathy means forcing people into crowded events'], correctAnswer: 1, explanation: 'Paragraph 2 lists sensory overload as a common factor.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q53', type: 'multiple_choice', question: 'Q53: __________ is a strategy people can use to manage noise levels when in public places.', options: ['a) practicing mindfulness techniques', 'b) avoiding all social interaction in large groups', 'c) visiting popular venues only during weekends', 'd) using headphones to reduce auditory input'], correctAnswer: 3, explanation: 'Paragraph 5 mentions headphones for cutting down on noise.', difficulty: 'easy', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q54', type: 'multiple_choice', question: 'Q54: According to paragraph 4, event planners can support people who may feel overwhelmed by __________.', options: ['a) increasing the volume of music to drown out crowd noise', 'b) limiting event duration to under one hour', 'c) setting up quiet areas where people can take a break', 'd) requiring all attendees to practice mindfulness in peaceful spaces'], correctAnswer: 2, explanation: 'Paragraph 4 suggests creating quiet spaces for withdrawal.', difficulty: 'medium', grammarFocus: 'Reading Comprehension' },
      { id: 'alm4-q55', type: 'multiple_choice', question: 'Q55: "intimidating" in paragraph 2 refers to __________.', options: ['a) frightening', 'b) accessable', 'c) insignificant', 'd) organized'], correctAnswer: 0, explanation: 'Intimidating means frightening or overawing.', difficulty: 'hard', grammarFocus: 'Vocabulary in Context' },
    ],
  },
];
