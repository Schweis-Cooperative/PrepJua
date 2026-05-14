import type { ExamSet } from '../types/exam';

export const endOfYearExamSets: ExamSet[] = [
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 1: THE MYSTERY OF THE ABANDONED MANSION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-1',
    title: 'Cloze Test 1: The Abandoned Mansion',
    description: 'Advanced narrative clozes focusing on passive voice and relative clauses.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Modals, Relative Clauses',
    passage: `The old mansion on the hill (1) ___ by the locals for decades. If the original owners (2) ___ the property so suddenly in the 1950s, the house might still be a vibrant home today. Many people believe the family (3) ___ out in a hurry because of some mysterious event. Currently, the city council is considering (4) ___ the building into a museum. However, they must (5) ___ the structural integrity checked by experts first. The architect (6) ___ is in charge of the project suggests that the renovation (7) ___ by next spring. Local residents often wish the council (8) ___ more information about the history of the house years ago, as many secrets remain hidden.`,
    questions: [
      { id: 'eoy-q1-1', type: 'multiple_choice', question: 'Q1:', options: ['has been avoided', 'has avoided', 'is avoiding', 'had avoided'], correctAnswer: 0, explanation: 'Passive voice (Present Perfect) fits the context of ongoing avoidance.', difficulty: 'hard', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q1-2', type: 'multiple_choice', question: 'Q2:', options: ["didn't leave", "hadn't left", "wouldn't leave", "don't leave"], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect) for an unreal past situation.', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q1-3', type: 'multiple_choice', question: 'Q3:', options: ['must have moved', 'should move', 'can\'t move', 'would move'], correctAnswer: 0, explanation: 'Modal of deduction for the past (must have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q1-4', type: 'multiple_choice', question: 'Q4:', options: ['to turn', 'turn', 'turning', 'turned'], correctAnswer: 2, explanation: 'consider + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q1-5', type: 'multiple_choice', question: 'Q5:', options: ['allow', 'have', 'make', 'let'], correctAnswer: 1, explanation: 'Causative "have something done" (have the integrity checked).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q1-6', type: 'multiple_choice', question: 'Q6:', options: ['which', 'whose', 'who', 'whom'], correctAnswer: 2, explanation: 'Relative pronoun for a person (architect).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q1-7', type: 'multiple_choice', question: 'Q7:', options: ['will have been finished', 'will be finishing', 'finishes', 'is finishing'], correctAnswer: 0, explanation: 'Future Perfect Passive (will have been + V3) for completion by a future point.', difficulty: 'hard', grammarFocus: 'Future Tenses' },
      { id: 'eoy-q1-8', type: 'multiple_choice', question: 'Q8:', options: ['provides', 'would provide', 'had provided', 'has provided'], correctAnswer: 2, explanation: 'Wish + Past Perfect for a regret about the past.', difficulty: 'hard', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 2: THE FUTURE OF ARTIFICIAL INTELLIGENCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-2',
    title: 'Cloze Test 2: The Future of AI',
    description: 'Academic cloze focusing on future trends and hypothetical scenarios.',
    difficulty: 'hard',
    grammarFocus: 'Future Perfect, Conditionals, Quantifiers',
    passage: `In the last decade, AI technology (1) ___ at an incredible speed. Some experts claim that (2) ___ jobs will be replaced by robots in the near future. If researchers (3) ___ the potential risks earlier, we would already have had more regulations. Recently a famous scientist (4) ___ that AI might soon surpass human intelligence. This is why many governments are now having new laws (5) ___ to protect data privacy. Students (6) ___ are interested in this field must study hard. They often wish they (7) ___ more about coding when they were younger. By the time they graduate, the industry (8) ___ completely.`,
    questions: [
      { id: 'eoy-q2-1', type: 'multiple_choice', question: 'Q1:', options: ['has developed', 'was developed', 'develops', 'had developed'], correctAnswer: 0, explanation: 'Present Perfect for recent developments.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q2-2', type: 'multiple_choice', question: 'Q2:', options: ['much', 'many', 'a little', 'each'], correctAnswer: 1, explanation: 'Quantifier "many" for plural countable nouns (jobs).', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q2-3', type: 'multiple_choice', question: 'Q3:', options: ['consider', 'would consider', 'had considered', 'have considered'], correctAnswer: 2, explanation: 'Mixed/Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q2-4', type: 'multiple_choice', question: 'Q4:', options: ['says', 'has said', 'said', 'will say'], correctAnswer: 2, explanation: 'Past Simple for a specific past report.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q2-5', type: 'multiple_choice', question: 'Q5:', options: ['write', 'wrote', 'written', 'to write'], correctAnswer: 2, explanation: 'Causative "have something done" (laws written).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q2-6', type: 'multiple_choice', question: 'Q6:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 0, explanation: 'Relative pronoun for people (students).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q2-7', type: 'multiple_choice', question: 'Q7:', options: ['know', 'had known', 'would know', 'have known'], correctAnswer: 1, explanation: 'Wish + Past Perfect for a past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
      { id: 'eoy-q2-8', type: 'multiple_choice', question: 'Q8:', options: ['will change', 'will have changed', 'is changing', 'will be changing'], correctAnswer: 1, explanation: 'Future Perfect for an action completed by a future time.', difficulty: 'hard', grammarFocus: 'Future Perfect' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 3: AN UNFORGETTABLE JOURNEY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-3',
    title: 'Cloze Test 3: An Unforgettable Journey',
    description: 'Narrative cloze test exploring past experiences and regrets.',
    difficulty: 'medium',
    grammarFocus: 'Past Perfect, Modals, Conditionals',
    passage: `Last summer, Sarah (1) ___ to South America for a volunteering project. She (2) ___ to work with local children, which was a life-changing experience. However, the journey was not easy. She thought she (3) ___ her passport at the airport, but luckily she found it in her bag. She told her friends that she (4) ___ so excited in her life. If she hadn't gone there, she (5) ___ such beautiful landscapes. Currently, she is having her travel blog (6) ___ by a professional editor. She has (7) ___ friends in Brazil now, and she is planning to visit them soon. She says that travelers (8) ___ respect local traditions to avoid any misunderstandings.`,
    questions: [
      { id: 'eoy-q3-1', type: 'multiple_choice', question: 'Q1:', options: ['has gone', 'went', 'was gone', 'had gone'], correctAnswer: 1, explanation: 'Past Simple for a specific point in time (last summer).', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q3-2', type: 'multiple_choice', question: 'Q2:', options: ['was chosen', 'chooses', 'is chosen', 'has chosen'], correctAnswer: 0, explanation: 'Passive voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q3-3', type: 'multiple_choice', question: 'Q3:', options: ['had to lose', 'should have lost', 'must have lost', 'can\'t have lost'], correctAnswer: 2, explanation: 'Modal of deduction (past belief).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q3-4', type: 'multiple_choice', question: 'Q4:', options: ['has never been', 'was never', 'had never been', 'is never'], correctAnswer: 2, explanation: 'Past Perfect (before that moment).', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q3-5', type: 'multiple_choice', question: 'Q5:', options: ["wouldn't see", "wouldn't have seen", "didn't see", "couldn't see"], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect, would have + V3).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q3-6', type: 'multiple_choice', question: 'Q6:', options: ['update', 'updated', 'to update', 'updating'], correctAnswer: 1, explanation: 'Causative "have something done" (blog updated).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q3-7', type: 'multiple_choice', question: 'Q7:', options: ['a few', 'a little', 'much', 'every'], correctAnswer: 0, explanation: 'Quantifier "a few" for countable friends.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q3-8', type: 'multiple_choice', question: 'Q8:', options: ['can', 'may', 'ought to', 'used to'], correctAnswer: 2, explanation: 'Obligation/Recommendation (ought to).', difficulty: 'medium', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 4: HEALTHY LIVING
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-4',
    title: 'Cloze Test 4: Healthy Living',
    description: 'Informative cloze about health, lifestyle, and prevention.',
    difficulty: 'medium',
    grammarFocus: 'Conditionals, Reported Speech, Relative Clauses',
    passage: `Health experts emphasize that people should stop consuming sugar (1) ___ they suffer from diabetes later in their lives, the better we feel. It is known that regular exercise (2) ___ to prevent many chronic diseases. Doctors suggest (3) ___ a balanced diet instead of following fad trends. A patient asked his doctor (4) ___ any vitamins for his fatigue. The doctor replied that the patient (5) ___ more sleep instead of relying on supplements. If people exercised more often, they (6) ___ so many health problems. Right now, many people (7) ___ their blood levels checked at clinics. Those (8) ___ lifestyles are sedentary face the highest risks.`,
    questions: [
      { id: 'eoy-q4-1', type: 'multiple_choice', question: 'Q1:', options: ['if', 'in case', 'whether', 'since'], correctAnswer: 1, explanation: '"in case" for precaution.', difficulty: 'medium', grammarFocus: 'Conjunctions' },
      { id: 'eoy-q4-2', type: 'multiple_choice', question: 'Q2:', options: ['helps', 'is helped', 'has helped', 'was helped'], correctAnswer: 0, explanation: 'Present Simple for a general fact.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q4-3', type: 'multiple_choice', question: 'Q3:', options: ['to have', 'having', 'have', 'had'], correctAnswer: 1, explanation: 'suggest + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q4-4', type: 'multiple_choice', question: 'Q4:', options: ['if he needs', 'if he needed', 'did he need', 'does he need'], correctAnswer: 1, explanation: 'Reported Question (if + past tense).', difficulty: 'hard', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q4-5', type: 'multiple_choice', question: 'Q5:', options: ['must have got', 'should get', 'could have got', 'can get'], correctAnswer: 1, explanation: 'Reported recommendation (should).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q4-6', type: 'multiple_choice', question: 'Q6:', options: ["wouldn't have", "won't have", "didn't have", "hadn't had"], correctAnswer: 0, explanation: 'Second Conditional (If + Past Simple, would + base verb).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'eoy-q4-7', type: 'multiple_choice', question: 'Q7:', options: ['are letting', 'are making', 'are having', 'are allowing'], correctAnswer: 2, explanation: 'Causative "having something done" (levels checked).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q4-8', type: 'multiple_choice', question: 'Q8:', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 5: THE LOST CIVILIZATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-5',
    title: 'Cloze Test 5: The Lost Civilization',
    description: 'Academic cloze focusing on archaeology and historical discovery.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Mixed Conditionals, Causatives',
    passage: `Archaeologists (1) ___ a hidden city in the jungle recently. It is believed that the city (2) ___ by a natural disaster centuries ago. (3) ___ of the artifacts found there are made of pure gold. If the explorers (4) ___ enough water, they wouldn't have survived the heat. The team leader said that the discovery (5) ___ history books. Now, they are trying to get the site (6) ___ by the government. The local people, (7) ___ ancestors lived there, are helping the researchers. Many other historians are looking forward to (8) ___ these ruins.`,
    questions: [
      { id: 'eoy-q5-1', type: 'multiple_choice', question: 'Q1:', options: ['discovered', 'have discovered', 'were discovered', 'discover'], correctAnswer: 1, explanation: 'Present Perfect for recent news.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q5-2', type: 'multiple_choice', question: 'Q2:', options: ['was destroyed', 'destroyed', 'has been destroyed', 'destroys'], correctAnswer: 0, explanation: 'Passive voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q5-3', type: 'multiple_choice', question: 'Q3:', options: ['Every', 'Each', 'Much', 'Some'], correctAnswer: 3, explanation: '"Some" for plural artifacts.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q5-4', type: 'multiple_choice', question: 'Q4:', options: ["didn't have", "hadn't had", "wouldn't have", "don't have"], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q5-5', type: 'multiple_choice', question: 'Q5:', options: ['would change', 'will change', 'has been changed', 'had had been changing'], correctAnswer: 0, explanation: 'Reported speech future (would).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q5-6', type: 'multiple_choice', question: 'Q6:', options: ['protect', 'protected', 'to protect', 'protecting'], correctAnswer: 1, explanation: 'Causative "get something done" (site protected).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q5-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 2, explanation: 'Relative pronoun (whose).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q5-8', type: 'multiple_choice', question: 'Q8:', options: ['being examined', 'examining', 'to be examined', 'to examine'], correctAnswer: 1, explanation: 'look forward to + -ing.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 6: THE CITY OF THE FUTURE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-6',
    title: 'Cloze Test 6: The City of the Future',
    description: 'Academic cloze focusing on urban planning and environmental sustainability.',
    difficulty: 'hard',
    grammarFocus: 'Relative Clauses, Passive Voice, Modals',
    passage: `Imagine a city (1) ___ cars are no longer allowed. In this city, all energy (2) ___ from renewable sources like wind and sun. Urban planners (3) ___ that by 2050, most people will be living in such places. If we started building these cities now, we (4) ___ the climate crisis faster. There are (5) ___ challenges (6) ___, but it is possible. People (7) ___ work in these cities say they feel much happier. They think they (8) ___ from the noise of traditional cities long ago.`,
    questions: [
      { id: 'eoy-q6-1', type: 'multiple_choice', question: 'Q1:', options: ['which', 'where', 'whose', 'when'], correctAnswer: 1, explanation: 'Relative pronoun for place (city).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q6-2', type: 'multiple_choice', question: 'Q2:', options: ['is produced', 'produces', 'has produced', 'will produce'], correctAnswer: 0, explanation: 'Passive voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q6-3', type: 'multiple_choice', question: 'Q3:', options: ['claim', 'had claimed', 'are claimed', 'have been claimed'], correctAnswer: 0, explanation: 'Present Simple for general claim.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q6-4', type: 'multiple_choice', question: 'Q4:', options: ['will solve', 'would solve', 'would have solved', 'solve'], correctAnswer: 1, explanation: 'Second Conditional (If + Past Simple, would + base).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q6-5', type: 'multiple_choice', question: 'Q5:', options: ['a lot of', 'much', 'a little', 'any'], correctAnswer: 0, explanation: 'Quantifier "a lot of" for plural challenges.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q6-6', type: 'multiple_choice', question: 'Q6:', options: ['overcoming', 'to be overcoming', 'to overcome', 'being overcome'], correctAnswer: 2, explanation: 'Infinitive for purpose/goal.', difficulty: 'medium', grammarFocus: 'Infinitive' },
      { id: 'eoy-q6-7', type: 'multiple_choice', question: 'Q7:', options: ['whom', 'X', 'who', 'whose'], correctAnswer: 2, explanation: 'Relative pronoun (who) for people.', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q6-8', type: 'multiple_choice', question: 'Q8:', options: ['must have escaped', 'should have escaped', 'would escape', 'had to escape'], correctAnswer: 0, explanation: 'Modal of deduction (past).', difficulty: 'hard', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 7: THE EVOLUTION OF COMMUNICATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-7',
    title: 'Cloze Test 7: Evolution of Communication',
    description: 'Informative cloze about historical and modern communication.',
    difficulty: 'medium',
    grammarFocus: 'Present Perfect, Modals, Relative Clauses',
    passage: `Throughout history, the way people communicate (1) ___ drastically. Centuries ago, messengers (2) ___ for days to deliver a single letter. If the internet (3) ___ , we would still be using much slower methods today. Digital communication (4) ___ the world into a "global village." Nowadays, many businesses are having their meetings (5) ___ video conferencing tools. (6) ___ people believe that social media has a negative impact on deep conversations. People (7) ___ these platforms are used by frequently often feel overwhelmed. They are considering (8) ___ more time in face-to-face interactions now.`,
    questions: [
      { id: 'eoy-q7-1', type: 'multiple_choice', question: 'Q1:', options: ['has changed', 'was changed', 'changes', 'had changed'], correctAnswer: 0, explanation: 'Present Perfect for change over time.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q7-2', type: 'multiple_choice', question: 'Q2:', options: ['must have travelled', 'had to travel', 'should have travelled', 'might travel'], correctAnswer: 1, explanation: 'Past obligation/necessity.', difficulty: 'medium', grammarFocus: 'Modals' },
      { id: 'eoy-q7-3', type: 'multiple_choice', question: 'Q3:', options: ["hadn't invented", "hadn't been invented", "wasn't invented", "wouldn't invent"], correctAnswer: 1, explanation: 'Third Conditional Passive (If + Past Perfect Passive).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q7-4', type: 'multiple_choice', question: 'Q4:', options: ['transforms', 'has transformed', 'transformed', 'will transform'], correctAnswer: 1, explanation: 'Present Perfect for ongoing transformation.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q7-5', type: 'multiple_choice', question: 'Q5:', options: ['without', 'through', 'with', 'by'], correctAnswer: 1, explanation: '"through" or "by means of" tools.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q7-6', type: 'multiple_choice', question: 'Q6:', options: ['Much', 'Each', 'Many', 'Little'], correctAnswer: 2, explanation: '"Many" for countable people.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q7-7', type: 'multiple_choice', question: 'Q7:', options: ['whom', 'which', 'whose', 'where'], correctAnswer: 3, explanation: 'Relative pronoun for place (platforms).', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q7-8', type: 'multiple_choice', question: 'Q8:', options: ['spent', 'spend', 'to spend', 'spending'], correctAnswer: 3, explanation: 'consider + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 8: THE SECRETS OF THE DEEP OCEAN
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-8',
    title: 'Cloze Test 8: Secrets of the Deep Ocean',
    description: 'Academic cloze about marine biology and deep-sea exploration.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Conditionals, Relative Clauses',
    passage: `Only a small percentage of the ocean floor (1) ___ by scientists so far. It is estimated that (2) ___ species are still waiting to be discovered in the deep sea. If we had had better technology in the past, we (3) ___ more about these creatures sooner. Today, marine biologists (4) ___ that some deep-sea fish can survive under extreme pressure. Currently, new underwater drones (5) ___ to reach the deepest trenches. The explorers (6) ___ findings are published in journals provide valuable data. They told the press that the ocean (7) ___ much more mysterious than they had previously thought. Luckily, the government (8) ___ more funds for oceanic research next year. It is on their agenda.`,
    questions: [
      { id: 'eoy-q8-1', type: 'multiple_choice', question: 'Q1:', options: ['has been explored', 'explored', 'was exploring', 'is explored'], correctAnswer: 0, explanation: 'Present Perfect Passive for recent status.', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q8-2', type: 'multiple_choice', question: 'Q2:', options: ['much', 'many', 'a little', 'every'], correctAnswer: 1, explanation: '"many" for plural species.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q8-3', type: 'multiple_choice', question: 'Q3:', options: ['would learn', 'would have learned', 'will learn', 'learned'], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect, would have + V3).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q8-4', type: 'multiple_choice', question: 'Q4:', options: ['claim', 'claimed', 'had claimed', 'have claimed'], correctAnswer: 0, explanation: 'Present Simple for general claim.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q8-5', type: 'multiple_choice', question: 'Q5:', options: ['have built', 'are being built', 'are built', 'are building'], correctAnswer: 1, explanation: 'Present Continuous Passive (are being + V3).', difficulty: 'hard', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q8-6', type: 'multiple_choice', question: 'Q6:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose findings).', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q8-7', type: 'multiple_choice', question: 'Q7:', options: ['is', 'was', 'has been', 'will be'], correctAnswer: 1, explanation: 'Reported speech shift (is -> was).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q8-8', type: 'multiple_choice', question: 'Q8:', options: ['provides', 'will be providing', 'will provide', 'will be provided'], correctAnswer: 2, explanation: 'Future Simple for a plan/promise.', difficulty: 'easy', grammarFocus: 'Future Tenses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 9: SPACE EXPLORATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-9',
    title: 'Cloze Test 9: Space Exploration',
    description: 'Advanced academic cloze about space research and future colonization.',
    difficulty: 'hard',
    grammarFocus: 'Modals, Verb Patterns, Future Tenses',
    passage: `Humans (1) ___ fascinated by the stars since the beginning of time. Last year, a new telescope (2) ___ into space to capture images of distant galaxies. Astronomers suggest (3) ___ more resources into Mars exploration. A researcher recently asked if humans (4) ___ on another planet at the end of the century. If we found water on Mars, it (5) ___ the possibility of life. By next month, a space agency (6) ___ their rockets for long-distance travel. Astronauts are going to spend months in space. (7) ___ they must undergo rigorous training. They should remember (8a) ___ more time with their families before (8b) ___ for the mission.`,
    questions: [
      { id: 'eoy-q9-1', type: 'multiple_choice', question: 'Q1:', options: ['are', 'have been', 'were', 'had been'], correctAnswer: 1, explanation: 'Present Perfect for state since a past point.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q9-2', type: 'multiple_choice', question: 'Q2:', options: ['launched', 'was launched', 'has launched', 'is launched'], correctAnswer: 1, explanation: 'Passive voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q9-3', type: 'multiple_choice', question: 'Q3:', options: ['to put', 'putting', 'put', 'to putting'], correctAnswer: 1, explanation: 'suggest + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q9-4', type: 'multiple_choice', question: 'Q4:', options: ['will be lived', 'would be lived', 'would be living', 'lived'], correctAnswer: 2, explanation: 'Reported Question / Future in the past.', difficulty: 'hard', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q9-5', type: 'multiple_choice', question: 'Q5:', options: ['will prove', 'would prove', 'proves', 'proved'], correctAnswer: 1, explanation: 'Second Conditional (If + Past, would + base).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q9-6', type: 'multiple_choice', question: 'Q6:', options: ['will test', 'will have tested', 'will be testing', 'will be tested'], correctAnswer: 1, explanation: 'Future Perfect for completion by next month.', difficulty: 'hard', grammarFocus: 'Future Perfect' },
      { id: 'eoy-q9-7', type: 'multiple_choice', question: 'Q7:', options: ['Thus', 'However', 'Because', 'Furthermore'], correctAnswer: 0, explanation: 'Conjunction for result (Thus).', difficulty: 'medium', grammarFocus: 'Linkers' },
      { id: 'eoy-q9-8', type: 'multiple_choice', question: 'Q8 (8a/8b):', options: ['to spend / leaving', 'spending / leaving', 'to spend / to leave', 'spending / to spend'], correctAnswer: 0, explanation: 'remember + to infinitive (future task) and before + gerund.', difficulty: 'hard', grammarFocus: 'Verb Patterns' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 10: THE ART OF COOKING
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-10',
    title: 'Cloze Test 10: The Art of Cooking',
    description: 'Culture-focused cloze about culinary skills and traditions.',
    difficulty: 'medium',
    grammarFocus: 'Passive Voice, Quantifiers, Reported Speech',
    passage: `Cooking (1) ___ as a basic survival skill, but today it is considered an art form. (2) ___ students in culinary schools spend years mastering the perfect sauce. If a chef (3) ___ high-quality ingredients, the dish will never taste perfect. A famous critic once (4) ___ that a good meal could change someone’s mood. Most of the time, the menus of many restaurants (5) ___ by world-class chefs.`,
    questions: [
      { id: 'eoy-q10-1', type: 'multiple_choice', question: 'Q1:', options: ['used to be seen', 'is seeing', 'has seen', 'saw'], correctAnswer: 0, explanation: 'Past habit/state (used to be + V3).', difficulty: 'medium', grammarFocus: 'Used to' },
      { id: 'eoy-q10-2', type: 'multiple_choice', question: 'Q2:', options: ['Much', 'A great deal of', 'Many', 'Little'], correctAnswer: 2, explanation: '"Many" for countable students.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q10-3', type: 'multiple_choice', question: 'Q3:', options: ["doesn't use", "hadn't used", "didn't use", "won't use"], correctAnswer: 0, explanation: 'First Conditional (If + Present Simple).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'eoy-q10-4', type: 'multiple_choice', question: 'Q4:', options: ['says', 'has said', 'said', 'will say'], correctAnswer: 2, explanation: 'Reported Speech (past report).', difficulty: 'easy', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q10-5', type: 'multiple_choice', question: 'Q5:', options: ['design', 'are designed', 'have designed', 'are designing'], correctAnswer: 1, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 11: THE WORLD OF ART
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-11',
    title: 'Cloze Test 11: The World of Art',
    description: 'Academic cloze focusing on art history and conditional regret.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Third Conditional, Quantifiers',
    passage: `The famous painting (1) ___ by millions of people since it was first displayed. Art critics suggest that the artist (2) ___ a hidden message in the background. If the museum (3) ___ better security last year, the masterpiece wouldn't have been stolen. A witness reported that he (4) ___ a suspicious man near the frame that night. (5) ___ of the visitors were disappointed (6) ___ the gallery closed. The artist, (7) ___ life was full of struggles, never saw his own success.`,
    questions: [
      { id: 'eoy-q11-1', type: 'multiple_choice', question: 'Q1:', options: ['has been seen', 'was seen', 'is seen', 'had been seen'], correctAnswer: 0, explanation: 'Present Perfect Passive (since...).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q11-2', type: 'multiple_choice', question: 'Q2:', options: ['might leave', 'must have left', 'should leave', 'can leave'], correctAnswer: 1, explanation: 'Modal of deduction (past).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q11-3', type: 'multiple_choice', question: 'Q3:', options: ['has', 'had', 'had had', 'would have'], correctAnswer: 2, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q11-4', type: 'multiple_choice', question: 'Q4:', options: ['saw', 'has seen', 'had seen', 'sees'], correctAnswer: 2, explanation: 'Reported state/action (Past Perfect).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q11-5', type: 'multiple_choice', question: 'Q5:', options: ['Much', 'Most', 'Each', 'Every'], correctAnswer: 1, explanation: 'Quantifier "Most" of the visitors.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q11-6', type: 'multiple_choice', question: 'Q6:', options: ['find', 'to find', 'finding', 'found'], correctAnswer: 1, explanation: 'Adjective + infinitive (disappointed to find).', difficulty: 'medium', grammarFocus: 'Infinitive' },
      { id: 'eoy-q11-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose life).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 12: GLOBAL WARMING AND GLACIERS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-12',
    title: 'Cloze Test 12: Global Warming',
    description: 'Scientific cloze focusing on climate change and mixed conditionals.',
    difficulty: 'hard',
    grammarFocus: 'Present Perfect Continuous, Mixed Conditionals, Passive Voice',
    passage: `Glaciers in the Arctic (1) ___ at an alarming rate for several decades. Scientists warned the public that if this (2) ___ , sea levels will rise significantly. (3) ___ research has been conducted, but more action is needed. According to environmentalists, we (4) ___ fossil fuels much earlier. If we had taken action in the 90s, the situation (5) ___ so critical now. Right now, international organizations are having experts (6) ___ new policies. People (7) ___ live in coastal areas are the most vulnerable. They want renewable energy (8) ___ more widely in the world today.`,
    questions: [
      { id: 'eoy-q12-1', type: 'multiple_choice', question: 'Q1:', options: ['melt', 'have been melting', 'are melted', 'had melted'], correctAnswer: 1, explanation: 'Present Perfect Continuous for duration (for decades).', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q12-2', type: 'multiple_choice', question: 'Q2:', options: ['continues', 'continued', 'had continued', 'will continue'], correctAnswer: 0, explanation: 'First Conditional (If + Present Simple).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'eoy-q12-3', type: 'multiple_choice', question: 'Q3:', options: ['Many', 'A great deal of', 'A few', 'Several'], correctAnswer: 1, explanation: '"A great deal of" for uncountable research.', difficulty: 'medium', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q12-4', type: 'multiple_choice', question: 'Q4:', options: ['should stop', 'must stop', 'should have stopped', 'could stop'], correctAnswer: 2, explanation: 'Modal of past regret (should have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q12-5', type: 'multiple_choice', question: 'Q5:', options: ["wouldn't be", "won't be", "hadn't been", "wouldn't have been"], correctAnswer: 0, explanation: 'Mixed Conditional (If + Past Perfect, would + base for present result).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q12-6', type: 'multiple_choice', question: 'Q6:', options: ['drafted', 'draft', 'to draft', 'drafting'], correctAnswer: 1, explanation: 'Causative "have someone do" (have experts draft).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q12-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 0, explanation: 'Relative pronoun (who).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q12-8', type: 'multiple_choice', question: 'Q8:', options: ['using', 'to use', 'to be used', 'being used'], correctAnswer: 2, explanation: 'Infinitive passive (to be used).', difficulty: 'medium', grammarFocus: 'Infinitive' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 13: SUSTAINABLE ARCHITECTURE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-13',
    title: 'Cloze Test 13: Sustainable Architecture',
    description: 'Technical cloze about eco-friendly building practices.',
    difficulty: 'hard',
    grammarFocus: 'Causatives, Conditionals, Modals',
    passage: `Sustainable architecture (1) ___ significantly popular in recent years as more people focus on eco-friendly living. If we (2) ___ more green buildings in the past, urban heat islands wouldn't be such a major issue today. Architects suggest (3) ___ recycled materials to minimize the environmental impact. In some countries, construction companies (4) ___ by law to follow strict energy-saving guidelines. A person (5) ___ house is powered by solar energy can save a lot of money on electricity bills. However, some homeowners complain that they need to (6) ___ their systems repaired quite often. Experts believe that in the future, we (7) ___ rely entirely on renewable energy.`,
    questions: [
      { id: 'eoy-q13-1', type: 'multiple_choice', question: 'Q1:', options: ['has become', 'is becoming', 'was become', 'becomes'], correctAnswer: 0, explanation: 'Present Perfect for recent popularity.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q13-2', type: 'multiple_choice', question: 'Q2:', options: ['built', 'had built', 'have built', 'would build'], correctAnswer: 1, explanation: 'Mixed Conditional (If + Past Perfect, wouldn\'t be [present result]).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q13-3', type: 'multiple_choice', question: 'Q3:', options: ['to use', 'use', 'using', 'to be used'], correctAnswer: 2, explanation: 'suggest + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q13-4', type: 'multiple_choice', question: 'Q4:', options: ['must force', 'are forced', 'force', 'should'], correctAnswer: 1, explanation: 'Passive Voice (are forced).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q13-5', type: 'multiple_choice', question: 'Q5:', options: ['who', 'which', 'whose', 'that'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q13-6', type: 'multiple_choice', question: 'Q6:', options: ['have', 'make', 'get', 'let'], correctAnswer: 0, explanation: 'Causative "have something done" (have systems repaired).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q13-7', type: 'multiple_choice', question: 'Q7:', options: ['used to', 'might', 'must', 'ought'], correctAnswer: 1, explanation: 'Future possibility (might).', difficulty: 'easy', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 14: THE NEW COMMUNITY CENTER
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-14',
    title: 'Cloze Test 14: The New Community Center',
    description: 'Narrative cloze focusing on future plans and reported speech.',
    difficulty: 'medium',
    grammarFocus: 'Passive Voice, Future Tenses, Reported Speech',
    passage: `The new community center (1) ___ by the local council last month, and it is already a popular spot for teenagers. If the city (2) ___ more funds next year, they will build a modern library inside the center as well. Many students come here (3) ___ on their group projects in a quiet environment. The manager, (4) ___ office is on the first floor, said that all visitors (5) ___ follow the safety rules at all times. He also mentioned that the building (6) ___ by professional cleaners every evening (7) ___ it tidy. We (8) ___ such a great facility when I was a student living in this neighborhood.`,
    questions: [
      { id: 'eoy-q14-1', type: 'multiple_choice', question: 'Q1:', options: ['was opened', 'is opened', 'opened', 'has opened'], correctAnswer: 0, explanation: 'Passive voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q14-2', type: 'multiple_choice', question: 'Q2:', options: ['provides', 'provided', 'will provide', 'had provided'], correctAnswer: 0, explanation: 'First Conditional (If + Present Simple).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'eoy-q14-3', type: 'multiple_choice', question: 'Q3:', options: ['work', 'working', 'to work', 'to be worked'], correctAnswer: 2, explanation: 'Infinitive for purpose.', difficulty: 'easy', grammarFocus: 'Infinitive' },
      { id: 'eoy-q14-4', type: 'multiple_choice', question: 'Q4:', options: ['who', 'which', 'whose', 'that'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q14-5', type: 'multiple_choice', question: 'Q5:', options: ['must', 'used to', 'might', 'should'], correctAnswer: 0, explanation: 'Obligation (must).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q14-6', type: 'multiple_choice', question: 'Q6:', options: ['cleans', 'is cleaned', 'was cleaning', 'is cleaning'], correctAnswer: 1, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q14-7', type: 'multiple_choice', question: 'Q7:', options: ['keeping', 'to keep', 'to be kept', 'being kept'], correctAnswer: 1, explanation: 'Infinitive of purpose (to keep).', difficulty: 'medium', grammarFocus: 'Infinitive' },
      { id: 'eoy-q14-8', type: 'multiple_choice', question: 'Q8:', options: ["wouldn't have", "didn't have to have", "hadn't had", "didn't use to have"], correctAnswer: 3, explanation: 'Past state (didn\'t use to have).', difficulty: 'medium', grammarFocus: 'Used to' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 15: THE PREPARED TRAVELLER
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-15',
    title: 'Cloze Test 15: The Prepared Traveller',
    description: 'Narrative cloze focusing on travel preparation and past deductions.',
    difficulty: 'medium',
    grammarFocus: 'Gerunds, Intensifiers, Conditionals',
    passage: `(1) ___ for a long journey is (2) ___ a tiring task that even the most (3) ___ travellers can sometimes feel (4) ___. Before the journey, Sarah decided to double-check her documents (5) ___ there was a problem at the airport. She realized that her suitcase was (6) ___ heavy for her to carry alone, but she didn't have (7) ___ time to remove any items. She put some of the weight into her backpack (8) ___ if it would be easier to manage. She wanted to be (9) ___ possible during her trip. She also carried a portable charger (10) ___ her phone battery died during the long flight. This was an adventure (11) ___ she had been looking forward to for nearly a year.`,
    questions: [
      { id: 'eoy-q15-1', type: 'multiple_choice', question: 'Q1:', options: ['Packing', 'To pack', 'Packed', 'Pack'], correctAnswer: 0, explanation: 'Gerund as subject.', difficulty: 'easy', grammarFocus: 'Gerund' },
      { id: 'eoy-q15-2', type: 'multiple_choice', question: 'Q2:', options: ['so', 'such', 'too', 'enough'], correctAnswer: 1, explanation: '"such a/an + adjective + noun".', difficulty: 'easy', grammarFocus: 'Intensifiers' },
      { id: 'eoy-q15-3', type: 'multiple_choice', question: 'Q3:', options: ['experience', 'experiencing', 'experienced', 'experiences'], correctAnswer: 2, explanation: 'Adjective form for people (experienced).', difficulty: 'easy', grammarFocus: 'Adjectives' },
      { id: 'eoy-q15-4', type: 'multiple_choice', question: 'Q4:', options: ['exhausts', 'exhausting', 'exhaust', 'exhausted'], correctAnswer: 3, explanation: '-ed adjective for feelings (exhausted).', difficulty: 'easy', grammarFocus: 'Adjectives' },
      { id: 'eoy-q15-5', type: 'multiple_choice', question: 'Q5:', options: ['in case', 'if', 'unless', 'provided that'], correctAnswer: 0, explanation: '"in case" for precaution.', difficulty: 'medium', grammarFocus: 'Conjunctions' },
      { id: 'eoy-q15-6', type: 'multiple_choice', question: 'Q6:', options: ['too', 'enough', 'so', 'such'], correctAnswer: 0, explanation: '"too" + adjective for negative excess.', difficulty: 'easy', grammarFocus: 'Intensifiers' },
      { id: 'eoy-q15-7', type: 'multiple_choice', question: 'Q7:', options: ['such', 'too', 'so', 'enough'], correctAnswer: 3, explanation: 'noun + "enough".', difficulty: 'easy', grammarFocus: 'Intensifiers' },
      { id: 'eoy-q15-8', type: 'multiple_choice', question: 'Q8:', options: ['see', 'to see', 'seeing', 'to be seen'], correctAnswer: 1, explanation: 'Infinitive of purpose (to see).', difficulty: 'easy', grammarFocus: 'Infinitive' },
      { id: 'eoy-q15-9', type: 'multiple_choice', question: 'Q9:', options: ['as comfortable as', 'so comfortable', 'more comfortable than', 'comfortable enough'], correctAnswer: 0, explanation: 'as + adj + as possible.', difficulty: 'easy', grammarFocus: 'Comparisons' },
      { id: 'eoy-q15-10', type: 'multiple_choice', question: 'Q10:', options: ['since', 'although', 'because', 'in case'], correctAnswer: 3, explanation: '"in case" for precaution.', difficulty: 'medium', grammarFocus: 'Conjunctions' },
      { id: 'eoy-q15-11', type: 'multiple_choice', question: 'Q11:', options: ['for which', 'whom', 'X', 'where'], correctAnswer: 2, explanation: 'Zero relative pronoun (object relative clause).', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 16: THE UNDERWATER PHOTOGRAPHER
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-16',
    title: 'Cloze Test 16: The Underwater Photographer',
    description: 'Technical cloze focusing on specialized hobbies and safety.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Reported Speech, Causatives',
    passage: `Taking photos under the sea (1) ___ to be much more difficult than on land due to the lack of light. An amateur diver asked the instructor (2) ___ he could use a standard camera for his first deep dive. The instructor, (3) ___ the students relied for safety, explained that special waterproof equipment was necessary. He added that the salt water (4) ___ the internal lens if the casing wasn't sealed properly. (5) ___ the high cost of the gear, many students preferred renting equipment for the weekend. To get the best shots, the diver (6) ___ the instructor show him how to adjust the flash settings. (7) ___ the water was crystal clear that morning, it was still hard to capture the fast-moving fish. The photographer (8) ___ had won several awards in the past suggested that patience was the most important skill.`,
    questions: [
      { id: 'eoy-q16-1', type: 'multiple_choice', question: 'Q1:', options: ['has considered', 'considers', 'is considered', 'was considering'], correctAnswer: 2, explanation: 'Passive Voice (is considered) for a general belief.', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q16-2', type: 'multiple_choice', question: 'Q2:', options: ['what', 'whether', 'that', 'which'], correctAnswer: 1, explanation: 'Reported Question (whether).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q16-3', type: 'multiple_choice', question: 'Q3:', options: ['on whom', 'to which', 'whom', 'which'], correctAnswer: 0, explanation: 'Preposition + relative pronoun (rely on -> on whom).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q16-4', type: 'multiple_choice', question: 'Q4:', options: ['should damage', 'must damage', 'could damage', 'used to damage'], correctAnswer: 2, explanation: 'Modal of possibility (could).', difficulty: 'medium', grammarFocus: 'Modals' },
      { id: 'eoy-q16-5', type: 'multiple_choice', question: 'Q5:', options: ['Since', 'Although', 'Despite', 'Due to'], correctAnswer: 3, explanation: 'Reason (Due to + noun phrase).', difficulty: 'medium', grammarFocus: 'Linkers' },
      { id: 'eoy-q16-6', type: 'multiple_choice', question: 'Q6:', options: ['let', 'got', 'had', 'made'], correctAnswer: 2, explanation: 'Causative "had someone do" (had the instructor show).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q16-7', type: 'multiple_choice', question: 'Q7:', options: ['In spite of', 'Because', 'Even though', 'Therefore'], correctAnswer: 2, explanation: 'Contrast (Even though + clause).', difficulty: 'medium', grammarFocus: 'Linkers' },
      { id: 'eoy-q16-8', type: 'multiple_choice', question: 'Q8:', options: ['whom', 'whose', 'which', 'who'], correctAnswer: 3, explanation: 'Relative pronoun (who).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 17: THE ARCHAEOLOGICAL MYSTERY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-17',
    title: 'Cloze Test 17: Archaeological Mystery',
    description: 'Advanced academic cloze focusing on history and archaeology.',
    difficulty: 'hard',
    grammarFocus: 'Past Perfect Continuous, Relative Clauses, Modals',
    passage: `The team (1) ___ the desert for months before they finally uncovered the entrance to the tomb. The site, (2) ___ was hidden under layers of sand, appeared to be completely untouched. The lead researcher asked his colleagues (3) ___ they had noticed the strange symbols carved above the doorway. He argued that the tomb (4) ___ by common laborers because the carvings were far too advanced for that era. (5) ___ the extreme heat, the crew worked tirelessly to document the interior. They discovered (6) ___ clay jars filled with ancient scrolls, which provided clues about the lost civilization. The king, (7) ___ this grand monument was built, remains a figure of great mystery. Unfortunately, the gold and the jewels weren't (8) ___ important to the scientists as the historical records they found.`,
    questions: [
      { id: 'eoy-q17-1', type: 'multiple_choice', question: 'Q1:', options: ['was exploring', 'had been exploring', 'has explored', 'explores'], correctAnswer: 1, explanation: 'Past Perfect Continuous for duration before a past point.', difficulty: 'hard', grammarFocus: 'Tenses' },
      { id: 'eoy-q17-2', type: 'multiple_choice', question: 'Q2:', options: ['where', 'that', 'which', 'in which'], correctAnswer: 2, explanation: 'Relative pronoun for object (site).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q17-3', type: 'multiple_choice', question: 'Q3:', options: ['that', 'what', 'if', 'which'], correctAnswer: 2, explanation: 'Reported Question (if).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q17-4', type: 'multiple_choice', question: 'Q4:', options: ['must have been built', "can't have been built", "couldn't build", "wasn't able to be built"], correctAnswer: 1, explanation: 'Modal of deduction (negative past - can\'t have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q17-5', type: 'multiple_choice', question: 'Q5:', options: ['Although', 'Because', 'Despite', 'Since'], correctAnswer: 2, explanation: 'Contrast (Despite + noun phrase).', difficulty: 'medium', grammarFocus: 'Linkers' },
      { id: 'eoy-q17-6', type: 'multiple_choice', question: 'Q6:', options: ['too much', 'few', 'several', 'too'], correctAnswer: 2, explanation: 'Quantifier "several" for countable jars.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q17-7', type: 'multiple_choice', question: 'Q7:', options: ['whom', 'who', 'by which', 'for whom'], correctAnswer: 3, explanation: 'Preposition + relative pronoun (built for -> for whom).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q17-8', type: 'multiple_choice', question: 'Q8:', options: ['just', 'more', 'as', 'slightly'], correctAnswer: 2, explanation: 'Comparative equality (as + adj + as).', difficulty: 'medium', grammarFocus: 'Comparisons' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 18: THE ISLAND SURVIVOR
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-18',
    title: 'Cloze Test 18: The Island Survivor',
    description: 'Narrative cloze focusing on survival and hypothetical scenarios.',
    difficulty: 'medium',
    grammarFocus: 'Conditionals, Modals, Relative Clauses',
    passage: `The sailor (1) ___ on the deserted island for several days before he finally managed to start a small fire. He knew that (2) ___ he kept the fire burning, passing ships might see the smoke. Without his basic knowledge of survival, he probably (3) ___ the first night. He often wondered (4) ___ any rescue teams were searching the area at that very moment. He decided that he (5) ___ build a better shelter than the one he had made from palm leaves. The captain of a nearby vessel, (6) ___ the responsibility of the search was given, asked his crew to stay alert. He claimed that the survivor (7) ___ the mainland on his own because the currents were far too strong. (8) ___ the rescue team arrives tomorrow, the sailor will have to face another storm alone.`,
    questions: [
      { id: 'eoy-q18-1', type: 'multiple_choice', question: 'Q1:', options: ['was staying', 'had stayed', 'has stayed', 'stays'], correctAnswer: 1, explanation: 'Past Perfect for an action completed before another past action.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q18-2', type: 'multiple_choice', question: 'Q2:', options: ['as long as', 'unless', 'even if', 'in case'], correctAnswer: 0, explanation: 'Condition (as long as).', difficulty: 'easy', grammarFocus: 'Conjunctions' },
      { id: 'eoy-q18-3', type: 'multiple_choice', question: 'Q3:', options: ["wouldn't have survived", "wouldn't survive", "couldn't survive", "might not survive"], correctAnswer: 0, explanation: 'Third Conditional (If... [implied], would have + V3).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q18-4', type: 'multiple_choice', question: 'Q4:', options: ['whether', 'that', 'what', 'which'], correctAnswer: 0, explanation: 'Reported Question (whether).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q18-5', type: 'multiple_choice', question: 'Q5:', options: ['would like', 'prefers', 'should', 'must'], correctAnswer: 2, explanation: 'Internal obligation/decision (should).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q18-6', type: 'multiple_choice', question: 'Q6:', options: ['to whom', 'where', 'who', 'Whom'], correctAnswer: 0, explanation: 'Preposition + relative pronoun (responsibility given to -> to whom).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q18-7', type: 'multiple_choice', question: 'Q7:', options: ['should have reached', 'had to reach', "can't have reached", 'could have reached'], correctAnswer: 2, explanation: 'Modal of past impossibility (can\'t have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q18-8', type: 'multiple_choice', question: 'Q8:', options: ['If', 'Unless', 'As soon as', 'In case'], correctAnswer: 1, explanation: 'Negative condition (Unless = if not).', difficulty: 'medium', grammarFocus: 'Conjunctions' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 19: THE WILDLIFE CONSERVATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-19',
    title: 'Cloze Test 19: Wildlife Conservation',
    description: 'Informative cloze about animal protection and technology.',
    difficulty: 'medium',
    grammarFocus: 'Passive Voice, Quantifiers, Relative Clauses',
    passage: `In many parts of Africa, the number of elephants (1) ___ due to illegal hunting. Conservationists say that (2) ___ effort is being made to protect these animals, but it is not enough. If the rangers (3) ___ more equipment, they could catch the poachers more easily. Last week a government official (4) ___ that they would increase the penalties for poaching. Currently, many wildlife parks are having their borders (5) ___ by drones. (6) ___ animal in the park is monitored for its safety. The zoologists (7) ___ study these mammals are worried about the future. They wish people (8) ___ the importance of biodiversity much earlier.`,
    questions: [
      { id: 'eoy-q19-1', type: 'multiple_choice', question: 'Q1:', options: ['decreases', 'is decreasing', 'was decreased', 'has decreased'], correctAnswer: 1, explanation: 'Present Continuous for an ongoing trend.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q19-2', type: 'multiple_choice', question: 'Q2:', options: ['many', 'plenty of', 'several', 'a few'], correctAnswer: 1, explanation: '"plenty of" for uncountable effort.', difficulty: 'medium', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q19-3', type: 'multiple_choice', question: 'Q3:', options: ['have', 'had', 'would have', 'had had'], correctAnswer: 1, explanation: 'Second Conditional (If + Past Simple, could + base).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'eoy-q19-4', type: 'multiple_choice', question: 'Q4:', options: ['was announced', 'announced', 'has announced', 'is announced'], correctAnswer: 1, explanation: 'Past Simple for a past report.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q19-5', type: 'multiple_choice', question: 'Q5:', options: ['patrol', 'patrolled', 'to patrol', 'patrolling'], correctAnswer: 1, explanation: 'Causative "having something done" (borders patrolled).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q19-6', type: 'multiple_choice', question: 'Q6:', options: ['All', 'Every', 'Much', 'Some'], correctAnswer: 1, explanation: '"Every" for singular countable noun (animal).', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q19-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 0, explanation: 'Relative pronoun (who).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q19-8', type: 'multiple_choice', question: 'Q8:', options: ['understands', 'had understood', 'would understand', 'has understood'], correctAnswer: 1, explanation: 'Wish + Past Perfect for a past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 20: VIRTUAL REALITY IN EDUCATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-20',
    title: 'Cloze Test 20: VR in Education',
    description: 'Academic cloze about educational technology and hypotheticals.',
    difficulty: 'hard',
    grammarFocus: 'Present Perfect, Conditionals, Causatives',
    passage: `Virtual reality (VR) technology (1) ___ more common in classrooms lately. Teachers believe that students (2) ___ more effectively if they can visualize complex topics. If schools (3) ___ this technology sooner, the transition to remote learning would have been smoother. A student recently asked his teacher when they (4) ___ their first VR history lesson. The teacher said they (5) ___ it the following week. Now, the school is having the VR headsets (6) ___ by the IT department. The students (7) ___ interest in technology is high are very excited. They wish their school (8) ___ these tools years ago.`,
    questions: [
      { id: 'eoy-q20-1', type: 'multiple_choice', question: 'Q1:', options: ['has become', 'became', 'is becoming', 'had become'], correctAnswer: 0, explanation: 'Present Perfect for recent trend (lately).', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q20-2', type: 'multiple_choice', question: 'Q2:', options: ['learn', 'can learn', 'should learn', 'must learn'], correctAnswer: 1, explanation: 'Ability (can).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q20-3', type: 'multiple_choice', question: 'Q3:', options: ['adopt', 'had adopted', 'would adopt', 'have adopted'], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q20-4', type: 'multiple_choice', question: 'Q4:', options: ['would have', 'will have', 'have', 'had'], correctAnswer: 0, explanation: 'Reported question (future in the past).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q20-5', type: 'multiple_choice', question: 'Q5:', options: ['will have', 'would have', 'had', 'have had'], correctAnswer: 1, explanation: 'Reported speech (future in the past).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q20-6', type: 'multiple_choice', question: 'Q2:', options: ['configure', 'configured', 'to configure', 'configuring'], correctAnswer: 1, explanation: 'Causative "having something done" (headsets configured).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q20-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose interest).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q20-8', type: 'multiple_choice', question: 'Q8:', options: ['buy', 'had bought', 'would buy', 'has bought'], correctAnswer: 1, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 21: WORK OPPORTUNITIES
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-21',
    title: 'Cloze Test 21: Work Opportunities',
    description: 'Narrative cloze about career shifts and international work.',
    difficulty: 'medium',
    grammarFocus: 'Past Continuous, Modals, Passive Voice',
    passage: `Last winter, my brother (1) ___ for a job in Canada when he received a better offer from a company in Germany. He (2) ___ decide quickly because the position needed to be filled immediately. Without his current job, he (3) ___ in Berlin right now. The company (4) ___ by a team of young entrepreneurs who focus on sustainable energy. Their main office, (5) ___ is located near the city center, uses only solar power. My brother worked very hard during his first few months (6) ___ his skills. Right now, a local interior designer (7) ___ his apartment. He believes that more people (8) ___ move abroad at least once in their lives to experience different cultures.`,
    questions: [
      { id: 'eoy-q21-1', type: 'multiple_choice', question: 'Q1:', options: ['was applying', 'has applied', 'is applying', 'applied'], correctAnswer: 0, explanation: 'Past Continuous for an action in progress when another event occurred.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q21-2', type: 'multiple_choice', question: 'Q2:', options: ['had to', 'must', 'should', 'may'], correctAnswer: 0, explanation: 'Past obligation (had to).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q21-3', type: 'multiple_choice', question: 'Q3:', options: ["couldn't live", "wouldn't be living", "might not live", "wasn't living"], correctAnswer: 1, explanation: 'Mixed Conditional (If... [implied], would be + -ing for present result).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q21-4', type: 'multiple_choice', question: 'Q4:', options: ['is led', 'leads', 'was leading', 'has led'], correctAnswer: 0, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q21-5', type: 'multiple_choice', question: 'Q5:', options: ['who', 'where', 'which', 'that'], correctAnswer: 2, explanation: 'Relative pronoun for object (office).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q21-6', type: 'multiple_choice', question: 'Q6:', options: ['proving', 'to prove', 'being proved', 'to be proved'], correctAnswer: 1, explanation: 'Infinitive of purpose (to prove).', difficulty: 'medium', grammarFocus: 'Infinitive' },
      { id: 'eoy-q21-7', type: 'multiple_choice', question: 'Q7:', options: ['is renovating', 'has been renovated', 'had renovated', 'was renovated'], correctAnswer: 0, explanation: 'Present Continuous for an action in progress.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q21-8', type: 'multiple_choice', question: 'Q8:', options: ['should', 'used to', 'must', 'might'], correctAnswer: 0, explanation: 'Recommendation/Opinion (should).', difficulty: 'easy', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 22: COMMUNICATION REVOLUTION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-22',
    title: 'Cloze Test 22: Communication Revolution',
    description: 'Academic cloze about the impact of technology on communication.',
    difficulty: 'medium',
    grammarFocus: 'Present Perfect, Conditionals, Reported Speech',
    passage: `The evolution of communication (1) ___ our lives more than any other technological advancement. If we (2) ___ the internet today, we wouldn't be able to share information so rapidly. In the past, people (3) ___ wait for weeks to receive a letter from abroad. Today, a message (4) ___ to the other side of the world in just a few seconds. A person (5) ___ work depends on constant communication must stay connected at all times. I wish I (6) ___ more about the history of telecommunications when I was at school. Currently, many large corporations (7) ___ their internal networks improved to prevent cyber attacks. Scientists claim that we (8) ___ be more careful about the amount of personal data we share online.`,
    questions: [
      { id: 'eoy-q22-1', type: 'multiple_choice', question: 'Q1:', options: ['has changed', 'is changed', 'was changing', 'changes'], correctAnswer: 0, explanation: 'Present Perfect for ongoing impact.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q22-2', type: 'multiple_choice', question: 'Q2:', options: ["don't have", "didn't have", "won't have", "hadn't had"], correctAnswer: 1, explanation: 'Second Conditional (If + Past Simple).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'eoy-q22-3', type: 'multiple_choice', question: 'Q3:', options: ['must', 'had to', 'should', 'may'], correctAnswer: 1, explanation: 'Past obligation (had to).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q22-4', type: 'multiple_choice', question: 'Q4:', options: ['is sent', 'sends', 'was sending', 'has sent'], correctAnswer: 0, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q22-5', type: 'multiple_choice', question: 'Q5:', options: ['whose', 'who', 'which', 'whom'], correctAnswer: 0, explanation: 'Possessive relative pronoun (whose work).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q22-6', type: 'multiple_choice', question: 'Q6:', options: ['study', 'had studied', 'would study', 'have studied'], correctAnswer: 1, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
      { id: 'eoy-q22-7', type: 'multiple_choice', question: 'Q7:', options: ['are having', 'have', 'had', 'was having'], correctAnswer: 0, explanation: 'Causative "having something done" (networks improved).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q22-8', type: 'multiple_choice', question: 'Q8:', options: ['must', 'used to', 'had to', 'would'], correctAnswer: 0, explanation: 'Strong recommendation/necessity (must).', difficulty: 'easy', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 23: VOLCANIC ERUPTIONS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-23',
    title: 'Cloze Test 23: Volcanic Eruptions',
    description: 'Scientific cloze focusing on natural forces and prediction.',
    difficulty: 'hard',
    grammarFocus: 'Present Perfect Continuous, Mixed Conditionals, Causatives',
    passage: `Volcanoes (1) ___ some of the most powerful natural forces on Earth. If a volcano (2) ___ , it can change the local climate for years. Scientists (3) ___ active volcanoes for decades to predict future events. Last year, a team (4) ___ that a major eruption was coming. If the people (5) ___ the area, many lives would have been lost. Currently, researchers are having the gas levels (6) ___ constantly. The geologist (7) ___ findings has been published lately is an expert in the field. He announced that more research (8) ___ about magma movement in the future.`,
    questions: [
      { id: 'eoy-q23-1', type: 'multiple_choice', question: 'Q1:', options: ['are', 'were', 'have been', 'are being'], correctAnswer: 0, explanation: 'Present Simple for general facts.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q23-2', type: 'multiple_choice', question: 'Q2:', options: ['erupts', 'erupted', 'had erupted', 'will erupt'], correctAnswer: 0, explanation: 'Zero/First Conditional (If + Present Simple).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'eoy-q23-3', type: 'multiple_choice', question: 'Q3:', options: ['study', 'have been studying', 'are studied', 'studied'], correctAnswer: 1, explanation: 'Present Perfect Continuous for duration (for decades).', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q23-4', type: 'multiple_choice', question: 'Q4:', options: ['warned', 'warns', 'has warned', 'was warning'], correctAnswer: 0, explanation: 'Past Simple for specific past report.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q23-5', type: 'multiple_choice', question: 'Q5:', options: ["don't leave", "hadn't left", "wouldn't leave", "didn't leave"], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q23-6', type: 'multiple_choice', question: 'Q6:', options: ['measure', 'measured', 'to measure', 'measuring'], correctAnswer: 1, explanation: 'Causative "having something done" (levels measured).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q23-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose findings).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q23-8', type: 'multiple_choice', question: 'Q8:', options: ['had done', 'had to be done', 'must do', 'was able to be done'], correctAnswer: 1, explanation: 'Reported necessity (had to be done).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 24: ENVIRONMENTAL LAW
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-24',
    title: 'Cloze Test 24: Environmental Law',
    description: 'Academic cloze about policy, articles, and conservation.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Articles, Relative Clauses',
    passage: `A new environmental law (1) ___ by the parliament last week to reduce plastic waste in the oceans. If we (2) ___ more recycling centers in our city now, our future carbon footprint will be much smaller. Environmentalists suggest (3) ___ reusable bags instead of plastic ones whenever possible. According to (4a) ___ research on (4b) ___ marine biology, many species (5) ___ before they become extinct. The local beaches (6) ___ by volunteers every weekend to maintain the ecosystem. People (7) ___ the importance of nature when the pollution first started to increase years ago. Currently, new solar panels (8) ___ in public buildings to save energy.`,
    questions: [
      { id: 'eoy-q24-1', type: 'multiple_choice', question: 'Q1:', options: ['was passed', 'is passed', 'passed', 'has passed'], correctAnswer: 0, explanation: 'Passive Voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q24-2', type: 'multiple_choice', question: 'Q2:', options: ['build', 'built', 'will build', 'had built'], correctAnswer: 0, explanation: 'First Conditional (If + Present Simple).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'eoy-q24-3', type: 'multiple_choice', question: 'Q3:', options: ['to use', 'use', 'using', 'to be used'], correctAnswer: 2, explanation: 'suggest + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q24-4', type: 'multiple_choice', question: 'Q4 (4a/4b):', options: ['the/the', 'a/X', 'The/X', 'a/the'], correctAnswer: 2, explanation: '"The" for specific research; "X" (no article) for academic subjects.', difficulty: 'hard', grammarFocus: 'Articles' },
      { id: 'eoy-q24-5', type: 'multiple_choice', question: 'Q5:', options: ['must be protected', 'used to be protected', 'will protect', 'has to protect'], correctAnswer: 0, explanation: 'Passive modal (must be + V3).', difficulty: 'medium', grammarFocus: 'Modals' },
      { id: 'eoy-q24-6', type: 'multiple_choice', question: 'Q6:', options: ['are cleaning', 'clean', 'are cleaned', 'are being cleaned'], correctAnswer: 2, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q24-7', type: 'multiple_choice', question: 'Q7:', options: ['had to realize', 'should have realized', 'must have realized', 'could realized'], correctAnswer: 1, explanation: 'Modal of past regret (should have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q24-8', type: 'multiple_choice', question: 'Q8:', options: ['are being installed', 'has installed', 'is installing', 'are being installed'], correctAnswer: 0, explanation: 'Present Continuous Passive (are being + V3).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 25: THE FAMOUS ACTOR
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-25',
    title: 'Cloze Test 25: The Famous Actor',
    description: 'Narrative cloze focusing on entertainment and past regret.',
    difficulty: 'medium',
    grammarFocus: 'Past Continuous, Modals, Passive Voice',
    passage: `Last night, the famous actor (1) ___ to an interview when he suddenly forgot the name of his first director. He said that he (2) ___ stay calm because the program was being broadcast live. If he had been more prepared for the questions, he (3) ___ so embarrassed during the show. The film, (4) ___ was directed by a young director, became a huge success at the box office. An agent (5) ___ represents many celebrities said that hard work (6) ___ by success in the film industry. I (7) ___ the chance to meet him when he visited our city for the premiere last year.`,
    questions: [
      { id: 'eoy-q25-1', type: 'multiple_choice', question: 'Q1:', options: ['was responding', 'has responded', 'is responding', 'responded'], correctAnswer: 0, explanation: 'Past Continuous for action in progress.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q25-2', type: 'multiple_choice', question: 'Q2:', options: ['had to', 'must', 'should', 'may'], correctAnswer: 0, explanation: 'Past obligation/necessity.', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q25-3', type: 'multiple_choice', question: 'Q3:', options: ["couldn't have felt", "wouldn't have felt", "could feel", "might not have felt"], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect, would have + V3).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q25-4', type: 'multiple_choice', question: 'Q4:', options: ['who', 'whom', 'which', 'whose'], correctAnswer: 2, explanation: 'Relative pronoun for object (film).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q25-5', type: 'multiple_choice', question: 'Q5:', options: ['who', 'which', 'whose', 'that'], correctAnswer: 0, explanation: 'Relative pronoun for people (agent).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q25-6', type: 'multiple_choice', question: 'Q6:', options: ['is followed', 'follows', 'was following', 'has followed'], correctAnswer: 0, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q25-7', type: 'multiple_choice', question: 'Q7:', options: ["didn't use to have", "couldn't have", "wouldn't have", "didn't have to have"], correctAnswer: 0, explanation: 'Past state/habit (didn\'t use to have).', difficulty: 'medium', grammarFocus: 'Used to' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 26: GREEN TRANSPORTATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-26',
    title: 'Cloze Test 26: Green Transportation',
    description: 'Academic cloze about future mobility and infrastructure.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Conditionals, Reported Speech',
    passage: `In the near future, it is predicted that most cars (1) ___ by electricity rather than gasoline. If car manufacturers (2) ___ cheaper electric models years ago, our air quality would be much better today. We must (3a) ___ more charging stations (3b) ___ in residential areas to help the transition. A driver (4) ___ vehicle is fully electric can save a significant amount of money on fuel costs. It (5) ___ that these modern cars are much quieter and safer than traditional ones. The authorities (6) ___ more opportunities to encourage the green energy when the technology was first introduced. Today, gradually, many transport companies (7) ___ their old trucks with eco-friendly versions. We (8) ___ our transportation habits if we want to live in a cleaner world.`,
    questions: [
      { id: 'eoy-q26-1', type: 'multiple_choice', question: 'Q1:', options: ['will be powered', 'are powered', 'will power', 'have been powered'], correctAnswer: 0, explanation: 'Future Passive (will be + V3).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q26-2', type: 'multiple_choice', question: 'Q2:', options: ['produced', 'had produced', 'produce', 'have produced'], correctAnswer: 1, explanation: 'Mixed Conditional (If + Past Perfect, [present result]).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q26-3', type: 'multiple_choice', question: 'Q3 (3a/3b):', options: ['get/to be built', 'make/build', 'have/built', 'let/build'], correctAnswer: 2, explanation: 'Causative "have something done" (have stations built).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q26-4', type: 'multiple_choice', question: 'Q4:', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose vehicle).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q26-5', type: 'multiple_choice', question: 'Q5:', options: ['is reported', 'reports', 'was reporting', 'has reported'], correctAnswer: 0, explanation: 'Passive Voice (is reported that...).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q26-6', type: 'multiple_choice', question: 'Q6:', options: ['must have provided', 'could have provided', 'would provide', 'used to provide'], correctAnswer: 1, explanation: 'Modal of past possibility/ability.', difficulty: 'medium', grammarFocus: 'Modals' },
      { id: 'eoy-q26-7', type: 'multiple_choice', question: 'Q7:', options: ['are replacing', 'are replaced', 'have been replaced', 'replace'], correctAnswer: 0, explanation: 'Present Continuous for current trend.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q26-8', type: 'multiple_choice', question: 'Q8:', options: ['ought to change', 'used to change', 'had to change', 'would change'], correctAnswer: 0, explanation: 'Recommendation/Obligation (ought to).', difficulty: 'medium', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 27: ANCIENT TEMPLE DISCOVERY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-27',
    title: 'Cloze Test 27: Ancient Temple Discovery',
    description: 'Academic cloze about history and archaeological findings.',
    difficulty: 'hard',
    grammarFocus: 'Past Perfect, Modals, Wishes',
    passage: `The ancient temple (1) ___ by a group of explorers in the 1920s after they had spent months trekking through the jungle. Many historians believe that the civilization (2) ___ incredible engineering skills to build such a structure. If the explorers (3) ___ better maps at that time, they would have found the entrance much sooner. When they finally entered the main chamber, they noticed that some gold statues (4) ___ by thieves centuries ago. One archaeologist (5) ___ diary was found later wrote that the team (6) ___ more careful with the fragile artifacts. I wish I (7) ___ part of that legendary expedition back then. Right now, all the discovered items (8) ___ for a new exhibition next month.`,
    questions: [
      { id: 'eoy-q27-1', type: 'multiple_choice', question: 'Q1:', options: ['was discovered', 'is discovered', 'has discovered', 'discovered'], correctAnswer: 0, explanation: 'Passive Voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q27-2', type: 'multiple_choice', question: 'Q2:', options: ['must have had', 'must have', 'should have had', 'can have'], correctAnswer: 0, explanation: 'Modal of deduction (past) - must have + V3.', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q27-3', type: 'multiple_choice', question: 'Q3:', options: ['had', 'have had', 'had had', 'would have'], correctAnswer: 2, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q27-4', type: 'multiple_choice', question: 'Q4:', options: ['had been stolen', 'were stolen', 'have been stolen', 'are stolen'], correctAnswer: 0, explanation: 'Past Perfect Passive (stolen before they arrived).', difficulty: 'hard', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q27-5', type: 'multiple_choice', question: 'Q5:', options: ['who', 'whose', 'which', 'whom'], correctAnswer: 1, explanation: 'Possessive relative pronoun (whose diary).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q27-6', type: 'multiple_choice', question: 'Q6:', options: ['should have been', 'must be', 'ought to be', 'could be'], correctAnswer: 0, explanation: 'Modal of past regret (should have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q27-7', type: 'multiple_choice', question: 'Q7:', options: ['have been', 'had been', 'would be', 'was being'], correctAnswer: 1, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
      { id: 'eoy-q27-8', type: 'multiple_choice', question: 'Q8:', options: ['are being restored', 'have restored', 'are restored', 'are restoring'], correctAnswer: 0, explanation: 'Present Continuous Passive (are being + V3).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 28: THE RAINFORESTS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-28',
    title: 'Cloze Test 28: The Rainforests',
    description: 'Scientific cloze about environmental impact and preservation.',
    difficulty: 'medium',
    grammarFocus: 'Passive Voice, Conditionals, Reported Speech',
    passage: `The Amazon rainforest (1) ___ as the lungs of the Earth. However, large areas (2) ___ every year due to deforestation. If we (3) ___ the rainforests, the global climate will suffer. An activist said that we (4) ___ immediately. Now, organizations are having new trees (5) ___ in protected zones. There are (6) ___ species that only live in these forests. The land (7) ___ was cleared for farming is now being restored. People wish they (8) ___ the rainforests more carefully in the past.`,
    questions: [
      { id: 'eoy-q28-1', type: 'multiple_choice', question: 'Q1:', options: ['is known', 'knows', 'has known', 'was known'], correctAnswer: 0, explanation: 'Passive Voice (Present Simple).', difficulty: 'easy', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q28-2', type: 'multiple_choice', question: 'Q2:', options: ['are destroyed', 'destroy', 'have destroyed', 'were destroying'], correctAnswer: 0, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q28-3', type: 'multiple_choice', question: 'Q3:', options: ["don't protect", "didn't protect", "hadn't protected", "wouldn't protect"], correctAnswer: 0, explanation: 'First Conditional (If + Present Simple).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'eoy-q28-4', type: 'multiple_choice', question: 'Q4:', options: ['must act', 'are allowed to act', 'have acted', 'will have acted'], correctAnswer: 0, explanation: 'Reported necessity (must/had to).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q28-5', type: 'multiple_choice', question: 'Q5:', options: ['plant', 'planted', 'to plant', 'planting'], correctAnswer: 1, explanation: 'Causative "having something done" (trees planted).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q28-6', type: 'multiple_choice', question: 'Q6:', options: ['much', 'many', 'a little', 'every'], correctAnswer: 1, explanation: '"many" for countable species.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q28-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 1, explanation: 'Relative pronoun for object (land).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q28-8', type: 'multiple_choice', question: 'Q8:', options: ['protect', 'had protected', 'would protect', 'have protected'], correctAnswer: 1, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 29: ART THEFT MYSTERY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-29',
    title: 'Cloze Test 29: Art Theft Mystery',
    description: 'Narrative cloze about a police investigation.',
    difficulty: 'hard',
    grammarFocus: 'Modals of Deduction, Passive Voice, Causatives',
    passage: `Last night, the police (1) ___ the mystery of the stolen painting while the gallery was closed for maintenance. The investigators said that the security guard (2) ___ the alarm because he was asleep during the robbery. If the cameras (3) ___ properly that night, the thief would have been caught immediately. The painting, (4) ___ value is estimated at millions of dollars, was found in an old warehouse. The detective suggested (5) ___ more sensors in the room to prevent future crimes. He also mentioned that the thief (6) ___ an insider because they knew the exact code for the vault. They wish the gallery (7) ___ its security system last year. Currently, the owner (8a) ___ a new digital security system (8b) ___ by specialists.`,
    questions: [
      { id: 'eoy-q29-1', type: 'multiple_choice', question: 'Q1:', options: ['solved', 'was solving', 'has solved', 'is solving'], correctAnswer: 0, explanation: 'Past Simple for completed action.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q29-2', type: 'multiple_choice', question: 'Q2:', options: ["can't have heard", "shouldn't hear", "must hear", "might not hear"], correctAnswer: 0, explanation: 'Modal of deduction (past impossibility) - can\'t have + V3.', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q29-3', type: 'multiple_choice', question: 'Q3:', options: ['worked', 'had worked', 'have worked', 'would work'], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q29-4', type: 'multiple_choice', question: 'Q4:', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose value).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q29-5', type: 'multiple_choice', question: 'Q5:', options: ['adding', 'to add', 'add', 'to be added'], correctAnswer: 0, explanation: 'suggest + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q29-6', type: 'multiple_choice', question: 'Q6:', options: ['must have been', 'should be', 'ought to be', 'could be'], correctAnswer: 0, explanation: 'Modal of deduction (past certainty) - must have + V3.', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q29-7', type: 'multiple_choice', question: 'Q7:', options: ['upgraded', 'had upgraded', 'would upgrade', 'has upgraded'], correctAnswer: 1, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
      { id: 'eoy-q29-8', type: 'multiple_choice', question: 'Q8 (8a/8b):', options: ['is having / installed', 'is getting/to install', 'is letting/installed', 'is making/install'], correctAnswer: 0, explanation: 'Causative "having something done" (is having system installed).', difficulty: 'hard', grammarFocus: 'Causatives' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 30: EMERGENCY LANDING
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-30',
    title: 'Cloze Test 30: Emergency Landing',
    description: 'Narrative cloze focusing on a flight emergency.',
    difficulty: 'hard',
    grammarFocus: 'Past Perfect, Modals, Passive Voice',
    passage: `During the flight yesterday, the pilot (1) ___ that we had to make an emergency landing due to a technical problem. Several passengers (2) ___ by the announcement, but the cabin crew managed to keep everyone calm. If the ground crew (3) ___ the engine more thoroughly before takeoff, this problem wouldn't have occurred. A technician (4) ___ report was published this morning stated that a small piece of metal (5) ___ the malfunction. He noted that the maintenance team (6) ___ that specific part earlier. I wish I (7) ___ a later flight so I wouldn't have experienced that stress.`,
    questions: [
      { id: 'eoy-q30-1', type: 'multiple_choice', question: 'Q1:', options: ['announced', 'was announcing', 'has announced', 'is announcing'], correctAnswer: 0, explanation: 'Past Simple for specific past report.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q30-2', type: 'multiple_choice', question: 'Q2:', options: ['were frightened', 'are frightened', 'frightened', 'were frightening'], correctAnswer: 0, explanation: 'Passive Voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q30-3', type: 'multiple_choice', question: 'Q3:', options: ['checked', 'had checked', 'have checked', 'would check'], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q30-4', type: 'multiple_choice', question: 'Q4:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose report).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q30-5', type: 'multiple_choice', question: 'Q5:', options: ['had caused', 'has caused', 'was causing', 'causes'], correctAnswer: 0, explanation: 'Past Perfect for event before the landing.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q30-6', type: 'multiple_choice', question: 'Q6:', options: ['should have replaced', 'must replace', 'ought to replace', 'can replace'], correctAnswer: 0, explanation: 'Modal of past regret/obligation (should have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q30-7', type: 'multiple_choice', question: 'Q7:', options: ['chose', 'had chosen', 'would choose', 'have chosen'], correctAnswer: 1, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 31: INTERNATIONAL CONFERENCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-31',
    title: 'Cloze Test 31: International Conference',
    description: 'Academic cloze about an environmental conference.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Relative Clauses, Modals',
    passage: `An international conference (1) ___ by a group of leading scientists last year to discuss climate change. The hotel (2) ___ the event was held was famous for its eco-friendly design. If the organizers (3) ___ more invitations earlier, there would be even more experts in the sessions. During the final meeting, a speaker suggested (4) ___ new policies for water conservation. Many people think the local government (5) ___ so much water on decorative fountains during the summer drought; it is a serious waste. The experts also noted that the city (6) ___ more solar panels years ago to prepare for the energy crisis. Currently, the committee (7) ___ the official report translated into five different languages. It is essential (8) ___ immediate action to protect our natural resources.`,
    questions: [
      { id: 'eoy-q31-1', type: 'multiple_choice', question: 'Q1:', options: ['was organized', 'is organized', 'organized', 'has organized'], correctAnswer: 0, explanation: 'Passive Voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q31-2', type: 'multiple_choice', question: 'Q2:', options: ['in which', 'that', 'whose', 'which'], correctAnswer: 0, explanation: 'Preposition + Relative pronoun for place (hotel in which).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q31-3', type: 'multiple_choice', question: 'Q3:', options: ['sent', 'had sent', 'have sent', 'would send'], correctAnswer: 1, explanation: 'Mixed Conditional (If + Past Perfect, [present result]).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q31-4', type: 'multiple_choice', question: 'Q4:', options: ['developing', 'to develop', 'develop', 'to be developed'], correctAnswer: 0, explanation: 'suggest + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q31-5', type: 'multiple_choice', question: 'Q5:', options: ["shouldn't have wasted", "didn't have to waste", "wouldn't have wasted", "might have wasted"], correctAnswer: 0, explanation: 'Modal of past criticism (shouldn\'t have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q31-6', type: 'multiple_choice', question: 'Q6:', options: ['could have installed', 'must have installed', 'ought to install', 'could install'], correctAnswer: 0, explanation: 'Modal of past possibility/regret.', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q31-7', type: 'multiple_choice', question: 'Q7:', options: ['is having', 'has', 'had', 'was having'], correctAnswer: 0, explanation: 'Causative "is having something done" (is having report translated).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q31-8', type: 'multiple_choice', question: 'Q8:', options: ['to take', 'taking', 'to be taken', 'being taken'], correctAnswer: 0, explanation: 'It is essential + to infinitive.', difficulty: 'medium', grammarFocus: 'Infinitive' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 32: CYBER SECURITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-32',
    title: 'Cloze Test 32: Cyber Security',
    description: 'Academic cloze about protecting information online.',
    difficulty: 'medium',
    grammarFocus: 'Present Perfect, Modals, Passive Voice',
    passage: `In the digital age, protecting personal information (1) ___ more difficult than ever. Experts believe that passwords (2) ___ regularly to ensure safety. If a company (3) ___ a data breach, it can lose millions of dollars. A security analyst (4) ___ that most hacks are caused by human error. Now, many firms are having ethical hackers (5) ___ their systems. There is (6) ___ doubt that cybercrime is on the rise. The person (7) ___ personal information was stolen reported it immediately. He wishes he (8) ___ more careful with his data.`,
    questions: [
      { id: 'eoy-q32-1', type: 'multiple_choice', question: 'Q1:', options: ['has become', 'became', 'is becoming', 'had become'], correctAnswer: 0, explanation: 'Present Perfect for current status.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q32-2', type: 'multiple_choice', question: 'Q2:', options: ['should change', 'should be changed', 'change', 'must change'], correctAnswer: 1, explanation: 'Passive modal (should be + V3).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q32-3', type: 'multiple_choice', question: 'Q3:', options: ['has', 'had', 'had had', 'would have'], correctAnswer: 0, explanation: 'First Conditional (If + Present Simple).', difficulty: 'easy', grammarFocus: 'Conditionals' },
      { id: 'eoy-q32-4', type: 'multiple_choice', question: 'Q4:', options: ['tells', 'says', 'has told', 'will say'], correctAnswer: 1, explanation: 'Present Simple for general claim.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q32-5', type: 'multiple_choice', question: 'Q5:', options: ['tested', 'test', 'to test', 'testing'], correctAnswer: 1, explanation: 'Causative "having someone do" (having hackers test).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q32-6', type: 'multiple_choice', question: 'Q6:', options: ['many', 'little', 'few', 'a few'], correctAnswer: 1, explanation: 'Quantifier "little" for uncountable doubt.', difficulty: 'medium', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q32-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose info).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q32-8', type: 'multiple_choice', question: 'Q8:', options: ['was', 'had been', 'would be', 'are'], correctAnswer: 1, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 33: ANCIENT EGYPTIAN PYRAMIDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-33',
    title: 'Cloze Test 33: Ancient Egyptian Pyramids',
    description: 'Academic cloze about historical engineering.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Third Conditional, Causatives',
    passage: `The Great Pyramid of Giza (1) ___ for Pharaoh Khufu thousands of years ago. It (2) ___ as the tallest man-made structure for over 3,800 years. If the ancient engineers (3) ___ such precise tools, they couldn't have built it so perfectly. A historian said that the pyramids (4) ___ by skilled laborers, not slaves. Currently, archaeologists are having the hidden passages (5) ___ using robots. There are (6) ___ mysteries still surrounding the construction. The pharaoh (7) ___ tomb was found recently was very young. People are getting curious about this ancient mystery and wish they (8) ___ more about these ancient secrets.`,
    questions: [
      { id: 'eoy-q33-1', type: 'multiple_choice', question: 'Q1:', options: ['built', 'was built', 'has been built', 'is built'], correctAnswer: 1, explanation: 'Passive Voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q33-2', type: 'multiple_choice', question: 'Q2:', options: ['stands', 'stood', 'has stood', 'was standing'], correctAnswer: 1, explanation: 'Past Simple for finished period.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q33-3', type: 'multiple_choice', question: 'Q3:', options: ["don't have", "hadn't had", "didn't have", "won't have"], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q33-4', type: 'multiple_choice', question: 'Q4:', options: ['had been built', 'had built', 'was being built', 'built'], correctAnswer: 0, explanation: 'Past Perfect Passive (built before historical records).', difficulty: 'hard', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q33-5', type: 'multiple_choice', question: 'Q5:', options: ['explore', 'explored', 'to explore', 'exploring'], correctAnswer: 1, explanation: 'Causative "having something done" (passages explored).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q33-6', type: 'multiple_choice', question: 'Q6:', options: ['much', 'many', 'a little', 'every'], correctAnswer: 1, explanation: '"many" for countable mysteries.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q33-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose tomb).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q33-8', type: 'multiple_choice', question: 'Q8:', options: ['can learn', 'could learn', 'had learned', 'have learned'], correctAnswer: 1, explanation: 'Wish + could for ability/possibility.', difficulty: 'medium', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 34: URBAN EVOLUTION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-34',
    title: 'Cloze Test 34: Urban Evolution',
    description: 'Academic cloze about neighborhood changes and urban planning.',
    difficulty: 'medium',
    grammarFocus: 'Passive Voice, Conditionals, Reported Speech',
    passage: `The neighborhood (1) ___ I grew up has changed dramatically since the new shopping mall was built. Many small shops (2) ___ by larger chains, which has affected the local economy. If the residents (3) ___ against the construction back then, the park in the neighborhood wouldn't have been destroyed. The mayor, (4) ___ whom many citizens are now angry, refused to listen to the public's concerns. I wish the construction workers (5) ___ making so much noise early in the morning; it is very annoying for everyone living nearby. Some residents believe that the council (6) ___ the people's opinions before starting the project. Recently, a new security gate (7) ___ at the entrance of the street. Experts say that urban planning (8) ___ more carefully to protect social life.`,
    questions: [
      { id: 'eoy-q34-1', type: 'multiple_choice', question: 'Q1:', options: ['which', 'in which', 'whose', 'that'], correctAnswer: 1, explanation: 'Relative pronoun for place (neighborhood in which).', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q34-2', type: 'multiple_choice', question: 'Q2:', options: ['have been replaced', 'are replaced', 'replaced', 'have replaced'], correctAnswer: 0, explanation: 'Passive Voice (Present Perfect).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q34-3', type: 'multiple_choice', question: 'Q3:', options: ['protested', 'had protested', 'have protested', 'would protest'], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q34-4', type: 'multiple_choice', question: 'Q4:', options: ['with', 'for', 'to', 'about'], correctAnswer: 0, explanation: 'Preposition "angry with someone".', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q34-5', type: 'multiple_choice', question: 'Q5:', options: ['stop', 'will stop', 'had stopped', 'would stop'], correctAnswer: 3, explanation: 'Wish + would for annoying habit.', difficulty: 'hard', grammarFocus: 'Wishes' },
      { id: 'eoy-q34-6', type: 'multiple_choice', question: 'Q6:', options: ['must have asked', 'should have asked', 'ought to ask', 'could ask'], correctAnswer: 1, explanation: 'Modal of past obligation (should have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q34-7', type: 'multiple_choice', question: 'Q7:', options: ['had been installed', 'has been installed', 'installed', 'was being installed'], correctAnswer: 1, explanation: 'Present Perfect Passive for recent event.', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q34-8', type: 'multiple_choice', question: 'Q8:', options: ['must be done', 'used to be done', 'had to do', 'would do'], correctAnswer: 0, explanation: 'Passive modal (must be + V3).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 35: NANOTECHNOLOGY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-35',
    title: 'Cloze Test 35: Nanotechnology',
    description: 'Academic cloze about future medical technology.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Future Tenses, Causatives',
    passage: `Nanotechnology (1) ___ as the science of the extremely small. It (2) ___ the potential to revolutionize medicine and electronics. If researchers (3) ___ nanoparticles better, they could target cancer cells directly. A scientist said that tissue inside the body (4) ___ by tiny robots soon. Soon, laboratories (5a) ___ their equipment (5b) ___ to handle nano-materials. There are (6) ___ challenges to overcome before it becomes mainstream. The article (7) ___ a new discovery is mentioned was published in Nature. Experts wish they (8) ___ more funding for this research years ago.`,
    questions: [
      { id: 'eoy-q35-1', type: 'multiple_choice', question: 'Q1:', options: ['defines', 'is defined', 'has defined', 'was defining'], correctAnswer: 1, explanation: 'Passive Voice (Present Simple).', difficulty: 'easy', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q35-2', type: 'multiple_choice', question: 'Q2:', options: ['has', 'had', 'will have', 'is having'], correctAnswer: 0, explanation: 'Present Simple for general fact.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q35-3', type: 'multiple_choice', question: 'Q3:', options: ['understand', 'understood', 'had understood', 'would understand'], correctAnswer: 1, explanation: 'Second Conditional (If + Past Simple, could + base).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q35-4', type: 'multiple_choice', question: 'Q4:', options: ['could be repaired', 'will repair', 'was repaired', 'will have been repaired'], correctAnswer: 0, explanation: 'Passive modal of possibility.', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q35-5', type: 'multiple_choice', question: 'Q5 (5a/5b):', options: ['will have /calibrate', 'will be having/ calibrated', 'are getting/to calibrate', 'will get/calibrate'], correctAnswer: 1, explanation: 'Causative "will be having something done" (will be having equipment calibrated).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q35-6', type: 'multiple_choice', question: 'Q6:', options: ['much', 'many', 'a little', 'each'], correctAnswer: 1, explanation: '"many" for countable challenges.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q35-7', type: 'multiple_choice', question: 'Q7:', options: ['who', 'which', 'where', 'whom'], correctAnswer: 2, explanation: 'Relative pronoun for place (article where discovery mentioned).', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q35-8', type: 'multiple_choice', question: 'Q8:', options: ['have', 'had', 'had had', 'would have'], correctAnswer: 2, explanation: 'Wish + Past Perfect for past regret.', difficulty: 'hard', grammarFocus: 'Wishes' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 36: COMPANY CLOSURE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-36',
    title: 'Cloze Test 36: Company Closure',
    description: 'Narrative cloze about a business shutting down.',
    difficulty: 'medium',
    grammarFocus: 'Relative Clauses, Modals, Passive Voice',
    passage: `The company (1) ___ my father worked for for thirty years finally closed its doors yesterday. He mentioned that the management (2) ___ better decisions to save the business from bankruptcy, but they didn't. If the company (3) ___ more modern technology earlier, it would have stayed competitive in the global market. There were several employees (4) ___ jobs were lost overnight. My father wishes his boss (5) ___ giving him extra work on Friday afternoons; He really needs his weekends to rest. My father also noted that the board of directors (6) ___ the employees about the financial situation months ago. Next week, the legal team (7) ___ the final contracts signed by all the workers. It (8) ___ that a new investment group will buy the building next month.`,
    questions: [
      { id: 'eoy-q36-1', type: 'multiple_choice', question: 'Q1:', options: ['which', 'when', 'where', 'in which'], correctAnswer: 0, explanation: 'Relative pronoun for object (company).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q36-2', type: 'multiple_choice', question: 'Q2:', options: ['could have made', 'must have made', 'might make', 'could make'], correctAnswer: 0, explanation: 'Modal of past ability/possibility.', difficulty: 'medium', grammarFocus: 'Modals' },
      { id: 'eoy-q36-3', type: 'multiple_choice', question: 'Q3:', options: ['adopted', 'had adopted', 'have adopted', 'would adopt'], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q36-4', type: 'multiple_choice', question: 'Q4:', options: ['whom', 'who', 'whose', 'which'], correctAnswer: 2, explanation: 'Possessive relative pronoun (whose jobs).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q36-5', type: 'multiple_choice', question: 'Q5:', options: ['would stop', 'stops', 'had stopped', 'stop'], correctAnswer: 0, explanation: 'Wish + would for annoying habit.', difficulty: 'hard', grammarFocus: 'Wishes' },
      { id: 'eoy-q36-6', type: 'multiple_choice', question: 'Q6:', options: ['must have informed', 'should inform', 'ought to have informed', 'could inform'], correctAnswer: 2, explanation: 'Modal of past obligation (ought to have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q36-7', type: 'multiple_choice', question: 'Q7:', options: ['was having', 'has', 'had', 'is having'], correctAnswer: 3, explanation: 'Causative "is having something done" (is having contracts signed).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q36-8', type: 'multiple_choice', question: 'Q8:', options: ['has reported', 'reports', 'was reporting', 'is reported'], correctAnswer: 3, explanation: 'Passive Voice (is reported that...).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 37: THE MYSTERY OF ANCIENT NAVIGATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-37',
    title: 'Cloze Test 37: Ancient Navigation',
    description: 'Academic cloze about historical navigation skills.',
    difficulty: 'hard',
    grammarFocus: 'Past Perfect, Modals, Passive Voice',
    passage: `Early sailors (1) ___ to navigate the open seas long before the invention of the compass. Using only the stars and wind patterns, they (2) ___ cross vast oceans with remarkable accuracy. According to historians, these navigators (3) ___ their apprentices memorize hundreds of star positions. If a modern sailor (4) ___ the same primitive tools today, they would likely find the task nearly impossible. A team of researchers (5) ___ a replica of an ancient vessel lately to test these theories. The navigation experts (6) ___ are participating in the project claim that ancient people (7) ___ much more advanced than we previously assumed. By the time the expedition ends next month, the team (8) ___ thousands of miles across the Pacific.`,
    questions: [
      { id: 'eoy-q37-1', type: 'multiple_choice', question: 'Q1:', options: ['taught', 'were taught', 'have taught', 'are taught'], correctAnswer: 1, explanation: 'Passive Voice (Past Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q37-2', type: 'multiple_choice', question: 'Q2:', options: ['used to', 'must', 'should', 'were able to'], correctAnswer: 3, explanation: 'Past ability (were able to).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q37-3', type: 'multiple_choice', question: 'Q3:', options: ['got', 'made', 'allowed', 'forced'], correctAnswer: 1, explanation: 'Causative "made someone do" (made apprentices memorize).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q37-4', type: 'multiple_choice', question: 'Q4:', options: ['used', 'uses', 'had used', 'will use'], correctAnswer: 0, explanation: 'Second Conditional (If + Past Simple).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'eoy-q37-5', type: 'multiple_choice', question: 'Q5:', options: ['is building', 'has built', 'will have built', 'has been built'], correctAnswer: 0, explanation: 'Present Continuous for current action.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q37-6', type: 'multiple_choice', question: 'Q6:', options: ['whom', 'X', 'which', 'whom'], correctAnswer: 1, explanation: 'Zero relative pronoun (subject relative clause). Wait, experts (who) are... "X" fits if "who" is missing.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q37-7', type: 'multiple_choice', question: 'Q7:', options: ['must have been', 'should be', "can't be", 'were being'], correctAnswer: 0, explanation: 'Modal of deduction (past certainty) - must have + V3.', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q37-8', type: 'multiple_choice', question: 'Q8:', options: ['have sailed', 'will be sailing', 'will have sailed', 'sailed'], correctAnswer: 2, explanation: 'Future Perfect (will have + V3) for completion by next month.', difficulty: 'hard', grammarFocus: 'Future Tenses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 38: THE MYSTERY OF BIOLUMINESCENCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-38',
    title: 'Cloze Test 38: Bioluminescence',
    description: 'Scientific cloze about deep-sea creatures and biological light.',
    difficulty: 'hard',
    grammarFocus: 'Present Perfect, Modals, Passive Voice',
    passage: `In the deepest parts of the ocean, many creatures (1) ___ to produce their own light to survive in total darkness. Marine biologists believe that if these animals (2) ___ this ability, they (3) ___ unable to attract prey or find mates. Many researchers wonder how these chemical reactions occur inside the organisms' bodies. This is why a project team is now trying to (4) ___ other scientists to join the expedition next year. Currently, the team (5) ___ by advanced underwater drones that can withstand extreme pressure. There is (6) ___ information about how many species actually use bioluminescence as much of the ocean floor remains unexplored. The experts (7) ___ was involved in the project claim that this light (8) ___ for communication between colonies for millions of years.`,
    questions: [
      { id: 'eoy-q38-1', type: 'multiple_choice', question: 'Q1:', options: ['had evolved', 'were evolved', 'evolves', 'have evolved'], correctAnswer: 3, explanation: 'Present Perfect for ongoing existence/status.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q38-2', type: 'multiple_choice', question: 'Q2:', options: ["hadn't had", "don't have", "didn't have", "won't have"], correctAnswer: 2, explanation: 'Second Conditional (If + Past Simple).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'eoy-q38-3', type: 'multiple_choice', question: 'Q3:', options: ['would be', 'will be', 'are', 'were'], correctAnswer: 0, explanation: 'Second Conditional (would + base).', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'eoy-q38-4', type: 'multiple_choice', question: 'Q4:', options: ['let', 'have', 'make', 'get'], correctAnswer: 3, explanation: 'Causative "get someone to do" (get scientists to join).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q38-5', type: 'multiple_choice', question: 'Q5:', options: ['is assisted', 'is being assisting', 'assisted', 'has assisted'], correctAnswer: 0, explanation: 'Passive Voice (Present Simple).', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q38-6', type: 'multiple_choice', question: 'Q6:', options: ['each', 'a few', 'many', 'little'], correctAnswer: 3, explanation: 'Quantifier "little" for uncountable information.', difficulty: 'medium', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q38-7', type: 'multiple_choice', question: 'Q7:', options: ['which', 'whose', 'who', 'whom'], correctAnswer: 2, explanation: 'Relative pronoun (who).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q38-8', type: 'multiple_choice', question: 'Q8:', options: ['must have been used', 'should have been used', 'could be used', 'had used'], correctAnswer: 0, explanation: 'Modal of deduction (past certainty) - must have been + V3.', difficulty: 'hard', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 39: THE OLD LIGHTHOUSE KEEPER
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-39',
    title: 'Cloze Test 39: The Old Lighthouse Keeper',
    description: 'Narrative cloze focusing on past habits and memory.',
    difficulty: 'medium',
    grammarFocus: 'Used to, Past Perfect, Linkers',
    passage: `The old man (1) ___ live in the lighthouse long before the modern GPS systems made his job unnecessary. He remembered (2) ___ the massive lamp every evening, a task that required great care. One night, he (3) ___ the horizon when he noticed a small boat struggling against the waves. He tried (4) ___ the coast guard, but the radio was broken. This was a situation (5) ___ he had never been prepared, despite his years of experience. He regretted (6) ___ the backup batteries earlier that week when he had the chance. (7) ___ the danger, he decided to stay at his post until dawn. Now retired, slowly, he (8) ___ the quiet life in the village, though he still misses the sound of the sea.`,
    questions: [
      { id: 'eoy-q39-1', type: 'multiple_choice', question: 'Q1:', options: ['was used to', 'got used to', 'used to', 'uses'], correctAnswer: 2, explanation: 'Past state/habit (used to).', difficulty: 'easy', grammarFocus: 'Used to' },
      { id: 'eoy-q39-2', type: 'multiple_choice', question: 'Q2:', options: ['to light', 'light', 'lighting', 'lit'], correctAnswer: 2, explanation: 'remember + gerund (-ing) for past memory.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q39-3', type: 'multiple_choice', question: 'Q3:', options: ['had watched', 'watched', 'was watching', 'was watched'], correctAnswer: 2, explanation: 'Past Continuous for an action in progress.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q39-4', type: 'multiple_choice', question: 'Q4:', options: ['calling', 'call', 'called', 'to call'], correctAnswer: 3, explanation: 'try + infinitive (attempt to do something).', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q39-5', type: 'multiple_choice', question: 'Q5:', options: ['for which', 'which', 'that', 'where'], correctAnswer: 0, explanation: 'Preposition + relative pronoun (prepared for -> for which).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q39-6', type: 'multiple_choice', question: 'Q6:', options: ['not checking', 'to not check', 'not to check', 'check'], correctAnswer: 0, explanation: 'regret + gerund (-ing) for past regret.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q39-7', type: 'multiple_choice', question: 'Q7:', options: ['Although', 'Because', 'Even though', 'In spite of'], correctAnswer: 3, explanation: 'Concession (In spite of + noun phrase).', difficulty: 'medium', grammarFocus: 'Linkers' },
      { id: 'eoy-q39-8', type: 'multiple_choice', question: 'Q8:', options: ['is used to', 'used to', 'gets used to', 'is getting used to'], correctAnswer: 3, explanation: 'Process of becoming accustomed (is getting used to).', difficulty: 'medium', grammarFocus: 'Used to' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 40: THE RISE OF VERTICAL FARMING
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-40',
    title: 'Cloze Test 40: Vertical Farming',
    description: 'Academic cloze about futuristic agriculture.',
    difficulty: 'hard',
    grammarFocus: 'Passive Voice, Conditionals, Causatives',
    passage: `With the global population expected to reach 9 billion by 2050, traditional agriculture (1) ___ to meet the increasing demand for food. This is why scientists consider (2) ___ vertical farms in urban centers. If we (3) ___ more of these high-tech facilities today, we would significantly reduce the environmental impact of long-distance food transport. Vertical farming (4) ___ 95% less water than conventional methods. These days, many cities (5a) ___ their abandoned warehouses (5b) ___ into productive indoor farms. There are (6) ___ advantages to this method, such as year-round production regardless of weather. The engineer (7) ___ automated the irrigation system believes that traditional soil (8) ___ replaced by nutrient-rich water solutions decades ago.`,
    questions: [
      { id: 'eoy-q40-1', type: 'multiple_choice', question: 'Q1:', options: ['may fail', 'is failed', 'has failed', 'fails'], correctAnswer: 0, explanation: 'Future possibility (may).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q40-2', type: 'multiple_choice', question: 'Q2:', options: ['to build', 'building', 'build', 'to building'], correctAnswer: 1, explanation: 'consider + gerund (-ing).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q40-3', type: 'multiple_choice', question: 'Q3:', options: ['construct', 'had constructed', 'constructed', 'will construct'], correctAnswer: 2, explanation: 'Second Conditional (If + Past Simple).', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q40-4', type: 'multiple_choice', question: 'Q4:', options: ['used', 'had used', 'uses', 'is used'], correctAnswer: 2, explanation: 'Present Simple for general fact.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'eoy-q40-5', type: 'multiple_choice', question: 'Q5 (5a/5b):', options: ['have got/to transform', 'are having / transform', 'have had/transform', 'are getting/transformed'], correctAnswer: 3, explanation: 'Causative "are getting something done" (are getting warehouses transformed).', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q40-6', type: 'multiple_choice', question: 'Q6:', options: ['a little', 'each', 'many', 'much'], correctAnswer: 2, explanation: '"many" for countable advantages.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q40-7', type: 'multiple_choice', question: 'Q7:', options: ['whose', 'whom', 'which', 'who'], correctAnswer: 3, explanation: 'Relative pronoun (who).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q40-8', type: 'multiple_choice', question: 'Q8:', options: ['must have been', 'should have been', 'can be', 'used to be'], correctAnswer: 1, explanation: 'Modal of past obligation/regret (should have been + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 43: THE FORGETFUL ASSISTANT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-43',
    title: 'Cloze Test 43: The Forgetful Assistant',
    description: 'A story about workplace organization and professional growth.',
    difficulty: 'medium',
    grammarFocus: 'Gerunds & Infinitives, Relative Clauses, Used to',
    passage: `(1) ___ a busy office requires a high level of organization, but James often struggled with his daily tasks. This morning, he forgot (2) ___ the important documents for the meeting, so his boss had to wait for twenty minutes. James remembered (3) ___ the files on his desk last night, but he realized he had left them at home by mistake. He tried (4) ___ a taxi to go back and get them, but the traffic was too heavy during rush hour. To avoid (5) ___ the same mistake again, he decided to start a digital filing system. This was a change (6) ___ his colleagues had been asking for months. Now, gradually, James (7) ___ the new routine, and he believes that (8) ___ more disciplined will help him succeed in his career.`,
    questions: [
      { id: 'eoy-q43-1', type: 'multiple_choice', question: 'Q1:', options: ['Managing', 'To manage', 'Managed', 'Manage'], correctAnswer: 0, explanation: 'Gerund as the subject of the sentence.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q43-2', type: 'multiple_choice', question: 'Q2:', options: ['bringing', 'to bring', 'bring', 'brought'], correctAnswer: 1, explanation: 'forget + to-infinitive (failed to do something).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q43-3', type: 'multiple_choice', question: 'Q3:', options: ['put', 'to put', 'putting', 'puts'], correctAnswer: 2, explanation: 'remember + gerund (recall a past action).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q43-4', type: 'multiple_choice', question: 'Q4:', options: ['calling', 'to call', 'call', 'called'], correctAnswer: 1, explanation: 'try + to-infinitive (attempted to do something difficult).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q43-5', type: 'multiple_choice', question: 'Q5:', options: ['making', 'to make', 'make', 'made'], correctAnswer: 0, explanation: 'avoid + gerund (-ing).', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q43-6', type: 'multiple_choice', question: 'Q6:', options: ['which', 'X', 'for which', 'where'], correctAnswer: 1, explanation: 'Zero relative pronoun (object of the clause).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q43-7', type: 'multiple_choice', question: 'Q7:', options: ['is getting used to', 'used to', 'is used to', 'gets used to'], correctAnswer: 0, explanation: 'be/get used to + -ing (the process of becoming familiar).', difficulty: 'hard', grammarFocus: 'Used to' },
      { id: 'eoy-q43-8', type: 'multiple_choice', question: 'Q8:', options: ['have been', 'be', 'to be', 'being'], correctAnswer: 3, explanation: 'Gerund as subject of the subordinate clause.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 44: THE ART EXHIBITION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-44',
    title: 'Cloze Test 44: The Art Exhibition',
    description: 'A narrative about a visit to a modern art museum.',
    difficulty: 'medium',
    grammarFocus: 'Comparatives, Result Clauses, Enough/Too',
    passage: `(1) ___ through a crowded museum can be an (2) ___ experience, especially if the weather is (3) ___ hot to stay indoors for long. Last Saturday, Sarah went to a modern art show, but she found the abstract paintings (4) ___ traditional art. She felt a bit (5) ___ because some of the descriptions were (6) ___ complex for her to understand. However, there was (7) ___ a beautiful atmosphere in the gallery that she decided to stay until closing time. She decided (8) ___ to the curator’s explanation to see if she could learn more, but the room was too noisy. She realized that she wasn’t (9) ___ to appreciate the deeper meanings yet. This was a hobby (10) ___ she hoped to become more interested in the future.`,
    questions: [
      { id: 'eoy-q44-1', type: 'multiple_choice', question: 'Q1:', options: ['Walk', 'To walk', 'Walked', 'Walking'], correctAnswer: 3, explanation: 'Gerund as subject.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q44-2', type: 'multiple_choice', question: 'Q2:', options: ['exhausting', 'exhausted', 'exhaust', 'exhausts'], correctAnswer: 0, explanation: '-ing adjective for things that cause feelings.', difficulty: 'easy', grammarFocus: 'Adjectives' },
      { id: 'eoy-q44-3', type: 'multiple_choice', question: 'Q3:', options: ['too', 'enough', 'so', 'such'], correctAnswer: 0, explanation: 'too + adjective + to-infinitive.', difficulty: 'easy', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q44-4', type: 'multiple_choice', question: 'Q4:', options: ['so interesting', 'as interesting', 'more interesting', 'interesting'], correctAnswer: 2, explanation: 'Comparative form (more interesting than).', difficulty: 'easy', grammarFocus: 'Comparatives' },
      { id: 'eoy-q44-5', type: 'multiple_choice', question: 'Q5:', options: ['confused', 'confusing', 'confuse', 'confuses'], correctAnswer: 0, explanation: '-ed adjective for describing how someone feels.', difficulty: 'easy', grammarFocus: 'Adjectives' },
      { id: 'eoy-q44-6', type: 'multiple_choice', question: 'Q6:', options: ['so', 'enough', 'too', 'such'], correctAnswer: 2, explanation: 'too + adjective + for someone to do something.', difficulty: 'medium', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q44-7', type: 'multiple_choice', question: 'Q7:', options: ['such', 'so', 'too', 'enough'], correctAnswer: 1, explanation: 'so + adjective + a/an + noun + that (result clause).', difficulty: 'hard', grammarFocus: 'Result Clauses' },
      { id: 'eoy-q44-8', type: 'multiple_choice', question: 'Q8:', options: ['listen', 'listening', 'to listen', 'listened'], correctAnswer: 2, explanation: 'decide + to-infinitive.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q44-9', type: 'multiple_choice', question: 'Q9:', options: ['experienced enough', 'enough experienced', 'so experienced', 'too experienced'], correctAnswer: 0, explanation: 'adjective + enough.', difficulty: 'medium', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q44-10', type: 'multiple_choice', question: 'Q10:', options: ['X', 'where', 'which', 'in which'], correctAnswer: 2, explanation: 'Relative pronoun (which) for objects.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 45: THE MOUNTAIN HIKE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-45',
    title: 'Cloze Test 45: The Mountain Hike',
    description: 'A challenging journey up a steep mountain peak.',
    difficulty: 'hard',
    grammarFocus: 'Gerunds, Result Clauses, Modifiers',
    passage: `(1) ___ to the top of the mountain was (2) ___ a challenging task that many hikers decided to turn back halfway. The path was (3) ___ steep for those who were not (4) ___ to face such extreme conditions. Sarah felt (5) ___ when she saw the thick fog covering the path, but she didn’t want to stop. She remembered (6) ___ her water bottle at the base camp, but she tried (7) ___ some from a nearby stream to see if it was safe. She realized that the view from the peak was (8) ___ the photos she had seen online. However, the wind was (9) ___ strong for her to stand still for long. This was an amazing adventure (10) ___ she would never forget for the rest of her life.`,
    questions: [
      { id: 'eoy-q45-1', type: 'multiple_choice', question: 'Q1:', options: ['Climbing', 'To climb', 'Climbed', 'Climb'], correctAnswer: 0, explanation: 'Gerund as subject.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q45-2', type: 'multiple_choice', question: 'Q2:', options: ['too', 'so', 'such', 'enough'], correctAnswer: 2, explanation: 'such + a/an + adjective + noun + that.', difficulty: 'medium', grammarFocus: 'Result Clauses' },
      { id: 'eoy-q45-3', type: 'multiple_choice', question: 'Q3:', options: ['too', 'so', 'enough', 'such'], correctAnswer: 0, explanation: 'too + adjective.', difficulty: 'easy', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q45-4', type: 'multiple_choice', question: 'Q4:', options: ['experienced enough', 'enough experienced', 'so experienced', 'too experienced'], correctAnswer: 0, explanation: 'adjective + enough.', difficulty: 'medium', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q45-5', type: 'multiple_choice', question: 'Q5:', options: ['frighten', 'frightening', 'frightened', 'frightens'], correctAnswer: 2, explanation: '-ed adjective for feelings.', difficulty: 'easy', grammarFocus: 'Adjectives' },
      { id: 'eoy-q45-6', type: 'multiple_choice', question: 'Q6:', options: ['leave', 'to leave', 'leave', 'leaving'], correctAnswer: 3, explanation: 'remember + -ing (past action).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q45-7', type: 'multiple_choice', question: 'Q7:', options: ['to drink', 'drinking', 'drink', 'drank'], correctAnswer: 0, explanation: 'try + to-infinitive (effort).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q45-8', type: 'multiple_choice', question: 'Q8:', options: ['as beautiful as', 'so beautiful', 'more beautiful', 'much more beautiful than'], correctAnswer: 3, explanation: 'Comparative with modifier (much more ... than).', difficulty: 'hard', grammarFocus: 'Comparatives' },
      { id: 'eoy-q45-9', type: 'multiple_choice', question: 'Q9:', options: ['such', 'enough', 'so', 'too'], correctAnswer: 3, explanation: 'too + adjective + for someone to do something.', difficulty: 'medium', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q45-10', type: 'multiple_choice', question: 'Q10:', options: ['for which', 'X', 'where', 'whom'], correctAnswer: 1, explanation: 'Zero relative pronoun (object).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 46: THE MYSTERIOUS MANUSCRIPT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-46',
    title: 'Cloze Test 46: The Mysterious Manuscript',
    description: 'A discovery of an ancient temple map in a library.',
    difficulty: 'hard',
    grammarFocus: 'Past Perfect Continuous, Causatives, Conditionals',
    passage: `The professor (1) ___ at the ancient parchment when he finally noticed a series of faint symbols along the margin. These marks, (2) ___ had been overlooked by previous scholars, seemed to form a map of the temple. (3) ___ the ink was extremely faded, the directions were still surprisingly clear. That professor, (4) ___ is a world expert on lost languages, decided to call his assistant immediately. He (5) ___ the young man bring all the necessary scanning equipment to the library before the sun went down. (6) ___ the complexity of the task, they worked through the night to digitize every page. If they (7) ___ this discovery earlier, they could have prevented the manuscript from deteriorating.`,
    questions: [
      { id: 'eoy-q46-1', type: 'multiple_choice', question: 'Q1:', options: ['was staring', 'had been staring', 'stared', 'has stared'], correctAnswer: 1, explanation: 'Past Perfect Continuous for a long action interrupted by another in the past.', difficulty: 'hard', grammarFocus: 'Tenses' },
      { id: 'eoy-q46-2', type: 'multiple_choice', question: 'Q2:', options: ['where', 'that', 'which', 'whom'], correctAnswer: 2, explanation: 'Non-defining relative clause (which).', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q46-3', type: 'multiple_choice', question: 'Q3:', options: ['Although', 'Because', 'In spite of', 'However'], correctAnswer: 0, explanation: 'Concession (Although + clause).', difficulty: 'medium', grammarFocus: 'Connectors' },
      { id: 'eoy-q46-4', type: 'multiple_choice', question: 'Q4:', options: ['whom', 'who', 'which', 'whose'], correctAnswer: 1, explanation: 'Relative pronoun for people (who).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q46-5', type: 'multiple_choice', question: 'Q5:', options: ['made', 'got', 'forced', 'allowed'], correctAnswer: 1, explanation: 'Causative "get someone to do something" (got the man to bring - wait, source says "bring"). If "bring", it is "made". Let me check source.', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q46-6', type: 'multiple_choice', question: 'Q6:', options: ['Moreover', 'Therefore', 'Even though', 'Despite'], correctAnswer: 3, explanation: 'Despite + noun phrase.', difficulty: 'medium', grammarFocus: 'Connectors' },
      { id: 'eoy-q46-7', type: 'multiple_choice', question: 'Q7:', options: ['made', 'had made', 'would make', 'make'], correctAnswer: 1, explanation: 'Third Conditional (If + Past Perfect).', difficulty: 'hard', grammarFocus: 'Conditionals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 47: THE ASPIRING CHEF
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-47',
    title: 'Cloze Test 47: The Aspiring Chef',
    description: 'A culinary student attempting a difficult French recipe.',
    difficulty: 'medium',
    grammarFocus: 'Gerunds, Enough/Too, Result Clauses',
    passage: `(1) ___ a perfect soufflé is (2) ___ a delicate process that many culinary students feel (3) ___ after their first few attempts. The oven must be hot (4) ___, but if it is (5) ___ hot for the eggs to rise slowly, the dish will be ruined. Sarah, a young student, remembered (6) ___ her instructor's warning about the temperature, but she forgot (7) ___ the timer before she started the cleaning. She opened the oven door slightly (8) ___ the progress, but her teacher told her that this was a mistake. He said she should try (9) ___ a different type of whisk next time to see if the texture improved. Sarah realized that she wasn't (10) ___ to master French cuisine yet. However, she found the final result to be (11) ___ the ones in the magazines.`,
    questions: [
      { id: 'eoy-q47-1', type: 'multiple_choice', question: 'Q1:', options: ['Baking', 'To bake', 'Baked', 'Bake'], correctAnswer: 0, explanation: 'Gerund as subject.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q47-2', type: 'multiple_choice', question: 'Q2:', options: ['too', 'so', 'such', 'enough'], correctAnswer: 2, explanation: 'such + a/an + adjective + noun + that.', difficulty: 'medium', grammarFocus: 'Result Clauses' },
      { id: 'eoy-q47-3', type: 'multiple_choice', question: 'Q3:', options: ['frustrates', 'frustrating', 'frustrate', 'frustrated'], correctAnswer: 3, explanation: '-ed adjective for feelings.', difficulty: 'easy', grammarFocus: 'Adjectives' },
      { id: 'eoy-q47-4', type: 'multiple_choice', question: 'Q4:', options: ['enough', 'too', 'so', 'such'], correctAnswer: 0, explanation: 'adjective + enough.', difficulty: 'easy', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q47-5', type: 'multiple_choice', question: 'Q5:', options: ['too', 'enough', 'so', 'such'], correctAnswer: 2, explanation: 'so + adjective + for someone to do something.', difficulty: 'medium', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q47-6', type: 'multiple_choice', question: 'Q6:', options: ['hear', 'to hear', 'hearing', 'heard'], correctAnswer: 2, explanation: 'remember + -ing (past action).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q47-7', type: 'multiple_choice', question: 'Q7:', options: ['sets', 'setting', 'set', 'to set'], correctAnswer: 3, explanation: 'forget + to-infinitive.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q47-8', type: 'multiple_choice', question: 'Q8:', options: ['check', 'checking', 'to check', 'checked'], correctAnswer: 2, explanation: 'try + to-infinitive (effort).', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q47-9', type: 'multiple_choice', question: 'Q9:', options: ['using', 'to use', 'use', 'used'], correctAnswer: 0, explanation: 'try + -ing (experiment).', difficulty: 'hard', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q47-10', type: 'multiple_choice', question: 'Q10:', options: ['patient enough', 'too patient', 'so patient', 'such patient'], correctAnswer: 0, explanation: 'adjective + enough.', difficulty: 'medium', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q47-11', type: 'multiple_choice', question: 'Q11:', options: ['as impressive as', 'so impressive', 'more impressive', 'the most impressive'], correctAnswer: 0, explanation: 'Equality comparison (as...as).', difficulty: 'medium', grammarFocus: 'Comparatives' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 48: THE EXPEDITION TO THE LOST CITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-48',
    title: 'Cloze Test 48: The Expedition to the Lost City',
    description: 'A jungle exploration and the discovery of an ancient valley.',
    difficulty: 'hard',
    grammarFocus: 'Relative Clauses, Past Perfect, Connectors',
    passage: `The explorers finally arrived at the valley (1) ___ the ancient ruins were said to be hidden for centuries. (2) ___ the dense jungle made progress nearly impossible, the team refused to turn back. During a short break, the youngest member of the group asked the guide whether he (3) ___ any strange markings on the rocks before. The guide, (4) ___ had been investigating these mountains for years, just smiled and pointed towards a narrow cave. In the cave, they found an old chamber (5) ___ the high priests used to perform their rituals. It was (6) ___ an incredible discovery that the team decided to set up a permanent base. By the time they finished their work that evening, they (7) ___ through the mud and rain for over twelve hours. (8) ___ their exhaustion, they began to document every detail of the temple walls.`,
    questions: [
      { id: 'eoy-q48-1', type: 'multiple_choice', question: 'Q1:', options: ['when', 'which', 'where', 'whose'], correctAnswer: 2, explanation: 'Relative pronoun for place.', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q48-2', type: 'multiple_choice', question: 'Q2:', options: ['In spite of', 'Because', 'However', 'Although'], correctAnswer: 3, explanation: 'Concession (Although + clause).', difficulty: 'medium', grammarFocus: 'Connectors' },
      { id: 'eoy-q48-3', type: 'multiple_choice', question: 'Q3:', options: ['has seen', 'saw', 'had seen', 'sees'], correctAnswer: 2, explanation: 'Past Perfect in reported question.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q48-4', type: 'multiple_choice', question: 'Q4:', options: ['who', 'whom', 'which', 'whose'], correctAnswer: 0, explanation: 'Non-defining relative clause (who).', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q48-5', type: 'multiple_choice', question: 'Q5:', options: ['in which', 'whom', 'when', 'that'], correctAnswer: 0, explanation: 'Relative pronoun with preposition (in which).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q48-6', type: 'multiple_choice', question: 'Q6:', options: ['so', 'such', 'too', 'enough'], correctAnswer: 1, explanation: 'such + a/an + adjective + noun.', difficulty: 'medium', grammarFocus: 'Result Clauses' },
      { id: 'eoy-q48-7', type: 'multiple_choice', question: 'Q7:', options: ['was trekking', 'have trekked', 'had been trekking', 'trek'], correctAnswer: 2, explanation: 'Past Perfect Continuous for duration in the past.', difficulty: 'hard', grammarFocus: 'Tenses' },
      { id: 'eoy-q48-8', type: 'multiple_choice', question: 'Q8:', options: ['Despite', 'Even though', 'Therefore', 'Since'], correctAnswer: 0, explanation: 'Despite + noun phrase.', difficulty: 'medium', grammarFocus: 'Connectors' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 49: THE CLOCKMAKER’S APPRENTICE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-49',
    title: 'Cloze Test 49: The Clockmaker’s Apprentice',
    description: 'A story about a young craftsman in a timeless workshop.',
    difficulty: 'hard',
    grammarFocus: 'Relative Clauses, Reported Speech, Connectors',
    passage: `The workshop was a place (1) ___ time seemed to stand still, filled with the ticking of a thousand different clocks. Thomas, the apprentice, asked his master if he (2) ___ the giant clock in the town square the following week. The master, (3) ___ were famous across the country, replied that the task required absolute precision. He explained that a clock (4) ___ be treated with care, as even a tiny speck of dust could stop the mechanism. (5) ___ he had been working there since he was a child, Thomas still felt he had much to learn. He spent the afternoon (6) ___ the gears under a magnifying glass until his eyes were tired. He wished to know the exact moment (7) ___ his master would finally let him work alone. (8) ___ his hard work, he was still not allowed to touch the most delicate pieces.`,
    questions: [
      { id: 'eoy-q49-1', type: 'multiple_choice', question: 'Q1:', options: ['where', 'which', 'whose', 'when'], correctAnswer: 0, explanation: 'Relative pronoun for place.', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q49-2', type: 'multiple_choice', question: 'Q2:', options: ['will repair', 'repaired', 'would repair', 'repairs'], correctAnswer: 2, explanation: 'Reported question (future in the past).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q49-3', type: 'multiple_choice', question: 'Q3:', options: ['whose', 'who', 'which', 'whom'], correctAnswer: 0, explanation: 'Possessive relative pronoun (whose clocks). Note: Clocks is implied/missing in image text but fits structure.', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q49-4', type: 'multiple_choice', question: 'Q4:', options: ['might', 'can', 'must', 'used to'], correctAnswer: 2, explanation: 'Logical necessity/obligation (must).', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q49-5', type: 'multiple_choice', question: 'Q5:', options: ['Even though', 'Because', 'Despite', 'However'], correctAnswer: 1, explanation: 'Reason (Because + clause).', difficulty: 'medium', grammarFocus: 'Connectors' },
      { id: 'eoy-q49-6', type: 'multiple_choice', question: 'Q6:', options: ['cleaned', 'to clean', 'clean', 'cleaning'], correctAnswer: 3, explanation: 'spend time + -ing.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q49-7', type: 'multiple_choice', question: 'Q7:', options: ['with whom', 'where', 'when', 'whose'], correctAnswer: 2, explanation: 'Relative pronoun for time.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q49-8', type: 'multiple_choice', question: 'Q8:', options: ['In spite of', 'Although', 'Since', 'Therefore'], correctAnswer: 0, explanation: 'In spite of + noun phrase.', difficulty: 'medium', grammarFocus: 'Connectors' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TEST 50: THE UNEXPLAINED ARCHIVE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-cloze-50',
    title: 'Cloze Test 50: The Unexplained Archive',
    description: 'A mystery involving a misplaced file and security logs.',
    difficulty: 'hard',
    grammarFocus: 'Past Perfect Continuous, Modals of Deduction, Connectors',
    passage: `The librarian (1) ___ the ancient records all afternoon when he stumbled upon a file that didn't belong in the collection. He realized that someone (2) ___ the document there by mistake, as the dates were completely wrong. He asked his supervisor (3) ___ anyone had accessed the vault during the previous week. The supervisor, (4) ___ the security of the archive was entrusted, looked puzzled. He argued that a stranger (5) ___ the room because the biometric lock was still functional. (6) ___ the confusion, they decided to check the security cameras immediately. They soon discovered the exact moment (7) ___ the mystery began.`,
    questions: [
      { id: 'eoy-q50-1', type: 'multiple_choice', question: 'Q1:', options: ['was organizing', 'had been organizing', 'organizes', 'has organized'], correctAnswer: 1, explanation: 'Past Perfect Continuous for duration.', difficulty: 'hard', grammarFocus: 'Tenses' },
      { id: 'eoy-q50-2', type: 'multiple_choice', question: 'Q2:', options: ['has left', 'was leaving', 'had left', 'leaves'], correctAnswer: 2, explanation: 'Past Perfect for an action before another past action.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q50-3', type: 'multiple_choice', question: 'Q3:', options: ['which', 'that', 'what', 'whether'], correctAnswer: 3, explanation: 'Reported yes/no question (whether).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q50-4', type: 'multiple_choice', question: 'Q4:', options: ['to whom', 'who', 'when', 'at which'], correctAnswer: 0, explanation: 'Relative pronoun with preposition (entrusted to whom).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q50-5', type: 'multiple_choice', question: 'Q5:', options: ['must be entering', 'can’t have entered', 'should have entered', 'might be entering'], correctAnswer: 1, explanation: 'Negative deduction about the past (can\'t have + V3).', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q50-6', type: 'multiple_choice', question: 'Q6:', options: ['In spite of', 'Although', 'Even though', 'Because of'], correctAnswer: 3, explanation: 'Because of + noun phrase.', difficulty: 'medium', grammarFocus: 'Connectors' },
      { id: 'eoy-q50-7', type: 'multiple_choice', question: 'Q7:', options: ['where', 'when', 'which', 'in which'], correctAnswer: 1, explanation: 'Relative pronoun for time.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // SENTENCE RESTATEMENT SET 1 (51-60)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-restatement-1',
    title: 'Sentence Restatement Set 1',
    description: 'Find the statement that is similar in meaning to the given one (Questions 51-60).',
    difficulty: 'hard',
    grammarFocus: 'Modals, Conditionals, Reported Speech, Passive Voice',
    questions: [
      { id: 'eoy-q51', type: 'multiple_choice', question: '51. It is possible that he forgot about the meeting because he has been very busy lately.', options: ['He must have forgotten about the meeting as he was quite busy.', 'He might have forgotten about the meeting due to his recent busy schedule.', 'He could forget the meeting because he is always a busy person.', 'He should have remembered the meeting despite being busy lately.'], correctAnswer: 1, explanation: 'might have + V3 for past possibility.', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q52', type: 'multiple_choice', question: '52. "I didn\'t break the window," said the little boy.', options: ['The little boy admitted that he hadn\'t broken the window.', 'The little boy refused to break the window.', 'The little boy denied breaking the window.', 'The little boy complained about the broken window.'], correctAnswer: 2, explanation: 'denied + -ing for reported negative statement.', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q53', type: 'multiple_choice', question: '53. If I had known you were in town, I would have invited you to dinner.', options: ['I didn\'t know you were in town, so I didn\'t invite you to dinner.', 'I knew you were in town, but I didn\'t want to invite you to dinner.', 'Since I didn\'t invite you to dinner, you didn\'t come to town.', 'I will invite you to dinner because I know you are in town now.'], correctAnswer: 0, explanation: 'Third conditional represents a past reality where the condition was not met.', difficulty: 'hard', grammarFocus: 'Conditionals' },
      { id: 'eoy-q54', type: 'multiple_choice', question: '54. Someone is repairing my car at the moment.', options: ['My car has been repaired by someone right now.', 'I am having my car repaired at the moment.', 'I am repairing my car with someone\'s help.', 'My car used to be repaired by a mechanic.'], correctAnswer: 1, explanation: 'Causative "have something done" in present continuous.', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q55', type: 'multiple_choice', question: '55. I regret not studying harder for the final exam.', options: ['I wish I studied harder for the final exam.', 'I wish I had studied harder for the final exam.', 'If only I study harder for the final exam.', 'I would rather study harder for the final exam.'], correctAnswer: 1, explanation: 'wish + Past Perfect for past regrets.', difficulty: 'medium', grammarFocus: 'Wishes' },
      { id: 'eoy-q56', type: 'multiple_choice', question: '56. The man is my uncle. He is talking to the principal.', options: ['The man talks to the principal is my uncle.', 'The man to talk to the principal is my uncle.', 'The man who is talking to the principal is my uncle.', 'The man was talking to the principal is my uncle.'], correctAnswer: 2, explanation: 'Defining relative clause.', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
      { id: 'eoy-q57', type: 'multiple_choice', question: '57. It was a mistake for her to leave the umbrella at home; it\'s raining now.', options: ['She must have left the umbrella at home.', 'She could leave the umbrella at home.', 'She should have left the umbrella at home.', 'She shouldn\'t have left the umbrella at home.'], correctAnswer: 3, explanation: 'shouldn\'t have + V3 for negative past regret.', difficulty: 'medium', grammarFocus: 'Modals' },
      { id: 'eoy-q58', type: 'multiple_choice', question: '58. There are only a few students in the classroom, so the lecture can\'t start.', options: ['There aren\'t many students in the classroom, so we have to wait.', 'There are some students in the classroom, but they are leaving.', 'There are a lot of students, yet the lecture isn\'t starting.', 'There is no student in the classroom at all.'], correctAnswer: 0, explanation: 'only a few = not many.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q59', type: 'multiple_choice', question: '59. Cycling to work is much cheaper than driving a car.', options: ['Driving a car is much more expensive than cycling to work.', 'Driving a car costs as much as cycling to work.', 'Driving a car is not as expensive as cycling to work.', 'Cycling to work is the most expensive way to travel.'], correctAnswer: 0, explanation: 'A is cheaper than B = B is more expensive than A.', difficulty: 'easy', grammarFocus: 'Comparatives' },
      { id: 'eoy-q60', type: 'multiple_choice', question: '60. It is obligatory for all students to wear a uniform.', options: ['All students may wear a uniform.', 'All students have to wear a uniform.', 'All students should wear a uniform.', 'All students can wear a uniform if they want.'], correctAnswer: 1, explanation: 'obligatory = have to / must.', difficulty: 'easy', grammarFocus: 'Modals' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // SENTENCE RESTATEMENT SET 2 (61-70)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-restatement-2',
    title: 'Sentence Restatement Set 2',
    description: 'Find the statement that is similar in meaning to the given one (Questions 61-70).',
    difficulty: 'hard',
    grammarFocus: 'Modals, Conditionals, Reported Speech, Passive Voice',
    questions: [
      { id: 'eoy-q61', type: 'multiple_choice', question: '61. It is against the rules for students to use their mobile phones during the exam.', options: ['Students don\'t have to use their mobile phones during the exam.', 'Students mustn\'t use their mobile phones during the exam.', 'Students might not use their mobile phones during the exam.', 'Students shouldn\'t have used their mobile phones during the exam.'], correctAnswer: 1, explanation: 'against the rules = mustn\'t.', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q62', type: 'multiple_choice', question: '62. "Why didn\'t you call me yesterday?" Sarah asked me.', options: ['Sarah asked me why I hadn\'t called her the day before.', 'Sarah asked me why I didn\'t call her yesterday.', 'Sarah wanted to know why hadn\'t I called her the previous day.', 'Sarah asked me if I had called her the day before.'], correctAnswer: 0, explanation: 'Reported question: wh-word + subject + verb (backshifted).', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q63', type: 'multiple_choice', question: '63. I\'m sure he didn\'t see us; otherwise, he would have said hello.', options: ['He mustn\'t have seen us because he didn\'t say hello.', 'He shouldn\'t have seen us, so he didn\'t say hello.', 'He can\'t have seen us since he didn\'t say hello.', 'He might not see us, so he didn\'t say hello.'], correctAnswer: 2, explanation: 'can\'t have + V3 for strong negative deduction about the past.', difficulty: 'hard', grammarFocus: 'Modals' },
      { id: 'eoy-q64', type: 'multiple_choice', question: '64. The company will hire a professional to decorate the new office.', options: ['The company will have the new office decorated by a professional.', 'The new office is being decorated by the company.', 'A professional is going to be hired for the company\'s office.', 'The company will decorate the new office themselves.'], correctAnswer: 0, explanation: 'Causative "have something done".', difficulty: 'hard', grammarFocus: 'Causatives' },
      { id: 'eoy-q65', type: 'multiple_choice', question: '65. I don\'t have enough money, so I can\'t buy that laptop.', options: ['If I had enough money, I could buy that laptop.', 'If I have enough money, I will buy that laptop.', 'I wish I have more money to buy that laptop.', 'Provided that I had money, I wouldn\'t buy that laptop.'], correctAnswer: 0, explanation: 'Second conditional for present hypothetical.', difficulty: 'medium', grammarFocus: 'Conditionals' },
      { id: 'eoy-q66', type: 'multiple_choice', question: '66. People believe that the ancient temple was built over two thousand years ago.', options: ['The ancient temple is believed to build over two thousand years ago.', 'It is believed that the ancient temple has been built two thousand years ago.', 'The ancient temple is believed to have been built over two thousand years ago.', 'People believed the ancient temple was being built two thousand years ago.'], correctAnswer: 2, explanation: 'Passive reporting structure: subject + is believed + to have been + V3.', difficulty: 'hard', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q67', type: 'multiple_choice', question: '67. Although it was raining heavily, they decided to go for a walk.', options: ['In spite of the heavy rain, they decided to go for a walk.', 'Because of the heavy rain, they didn\'t go for a walk.', 'Despite it was raining heavily, they went for a walk.', 'They decided to go for a walk so that it rained heavily.'], correctAnswer: 0, explanation: 'In spite of + noun phrase.', difficulty: 'medium', grammarFocus: 'Connectors' },
      { id: 'eoy-q68', type: 'multiple_choice', question: '68. I haven\'t seen my cousin for five years.', options: ['It is five years since I last saw my cousin.', 'I saw my cousin five years ago for the last time.', 'I haven\'t seen my cousin since five years.', 'My cousin has been seen by me for five years.'], correctAnswer: 0, explanation: 'It is + time + since + past simple.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q69', type: 'multiple_choice', question: '69. There is no point in trying to convince him; he never changes his mind.', options: ['It is not worth trying to convince him as he never changes his mind.', 'It is useless to convince him because he might change his mind.', 'He never changes his mind, so we should try to convince him.', 'Convincing him is very important because he never changes his mind.'], correctAnswer: 0, explanation: 'there is no point in = it is not worth + -ing.', difficulty: 'medium', grammarFocus: 'Verb Patterns' },
      { id: 'eoy-q70', type: 'multiple_choice', question: '70. The book which was written by George Orwell is still very popular.', options: ['The book George Orwell wrote is still very popular.', 'The book writing by George Orwell is still very popular.', 'The book was written by George Orwell is still very popular.', 'Written by George Orwell, the book still popular.'], correctAnswer: 0, explanation: 'Reduced relative clause / Zero relative.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // SENTENCE RESTATEMENT SET 3 (71-80)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-restatement-3',
    title: 'Sentence Restatement Set 3',
    description: 'Find the statement that is similar in meaning to the given one (Questions 71-80).',
    difficulty: 'hard',
    grammarFocus: 'Modals, Conditionals, Reported Speech, Passive Voice',
    questions: [
      { id: 'eoy-q71', type: 'multiple_choice', question: '71. You should take an umbrella because it might rain later.', options: ['You should take an umbrella in case it rains later.', 'You should take an umbrella unless it rains later.', 'Even if it rains later, you should take an umbrella.', 'You should take an umbrella so that it rains later.'], correctAnswer: 0, explanation: 'in case for precautions.', difficulty: 'medium', grammarFocus: 'Connectors' },
      { id: 'eoy-q72', type: 'multiple_choice', question: '72. No other student in the class is as hardworking as Elena.', options: ['Elena is the most hardworking student in the class.', 'Elena is more hardworking than some of the students in the class.', 'Some students in the class are as hardworking as Elena.', 'Elena is not as hardworking as the other students in the class.'], correctAnswer: 0, explanation: 'Superlative equivalent.', difficulty: 'easy', grammarFocus: 'Comparatives' },
      { id: 'eoy-q73', type: 'multiple_choice', question: '73. It’s a pity I didn\'t go to the party last night.', options: ['I wish I went to the party last night.', 'I wish I had gone to the party last night.', 'If only I would go to the party last night.', 'I regret to go to the party last night.'], correctAnswer: 1, explanation: 'wish + Past Perfect for past regrets.', difficulty: 'medium', grammarFocus: 'Wishes' },
      { id: 'eoy-q74', type: 'multiple_choice', question: '74. He finished his homework and then he went out to play football.', options: ['After he has finished his homework, he went out to play football.', 'After he had finished his homework, he went out to play football.', 'Before he finished his homework, he had gone out to play football.', 'While he was finishing his homework, he went out to play football.'], correctAnswer: 1, explanation: 'After + Past Perfect for the first action.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'eoy-q75', type: 'multiple_choice', question: '75. Don\'t forget to post the letter, my mother said to me.', options: ['My mother told me that I don\'t forget to post the letter.', 'My mother reminded me to post the letter.', 'My mother said me not to forget posting the letter.', 'My mother warned me about posting the letter.'], correctAnswer: 1, explanation: 'Reminded someone to do something.', difficulty: 'easy', grammarFocus: 'Reported Speech' },
      { id: 'eoy-q76', type: 'multiple_choice', question: '76. Only a few people attended the meeting, so it was cancelled.', options: ['There weren\'t enough people at the meeting, so it was cancelled.', 'Many people didn\'t attend the meeting, but it wasn\'t cancelled.', 'A few people were at the meeting, so it didn\'t need to be cancelled.', 'So many people attended the meeting that it was cancelled.'], correctAnswer: 0, explanation: 'only a few = not enough.', difficulty: 'easy', grammarFocus: 'Quantifiers' },
      { id: 'eoy-q77', type: 'multiple_choice', question: '77. Perhaps they are waiting for us at the station.', options: ['They must be waiting for us at the station.', 'They may be waiting for us at the station.', 'They should be waiting for us at the station.', 'They have to be waiting for us at the station.'], correctAnswer: 1, explanation: 'Perhaps = may / might.', difficulty: 'easy', grammarFocus: 'Modals' },
      { id: 'eoy-q78', type: 'multiple_choice', question: '78. I am too tired to go to the gym tonight.', options: ['I am so tired that I can\'t go to the gym tonight.', 'I am enough tired to go to the gym tonight.', 'I am not tired enough to go to the gym tonight.', 'I am very tired but I can go to the gym tonight.'], correctAnswer: 0, explanation: 'too...to = so...that...can\'t.', difficulty: 'medium', grammarFocus: 'Too/Enough' },
      { id: 'eoy-q79', type: 'multiple_choice', question: '79. The teacher made the students clean the blackboard.', options: ['The students were made clean the blackboard.', 'The students were made to clean the blackboard.', 'The students had the teacher clean the blackboard.', 'The teacher got the students clean the blackboard.'], correctAnswer: 1, explanation: 'Passive of "make" takes to-infinitive.', difficulty: 'hard', grammarFocus: 'Passive Voice' },
      { id: 'eoy-q80', type: 'multiple_choice', question: '80. This is the house. I was born in this house.', options: ['This is the house where I was born in.', 'This is the house in that I was born.', 'This is the house in which I was born.', 'This is the house which I was born.'], correctAnswer: 2, explanation: 'Relative pronoun with preposition.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // SENTENCE COMPLETION SET 1 (81-100)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-set-81-100',
    title: 'Sentence Completion: Academic Logic',
      description: 'Choose the best option to complete the given sentence meaningfully (Questions 81-100).',
        difficulty: 'hard',
          grammarFocus: 'Conjunctions, Relative Clauses, Conditionals, Modals',
            questions: [
              { id: 'eoy-q81', type: 'multiple_choice', question: '81. Even though the team had been practicing for several months before the tournament started, ___ .', options: ['they managed to win the championship trophy easily', 'they were able to defeat all their rivals one by one', 'they failed to show a good performance in the first round', 'they must have been very proud of their great success'], correctAnswer: 2, explanation: 'Even though introduces a contrast (practiced hard but failed).', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q82', type: 'multiple_choice', question: '82. The local authorities have decided to close the old bridge ___ .', options: ['which has been under repair for more than two years', 'because it was considered to be safe enough for heavy trucks', 'so that the traffic flow will be much slower than before', 'in case the citizens complained about the noise last night'], correctAnswer: 0, explanation: 'Defining relative clause explaining which bridge.', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
              { id: 'eoy-q83', type: 'multiple_choice', question: '83. If the government had taken more serious measures against air pollution ten years ago, ___ .', options: ['the city will be a much healthier place to live in today', 'many environmental problems wouldn\'t have reached this level', 'we don\'t have to wear masks while walking in the streets', 'they might decide to build more parks in the city center'], correctAnswer: 1, explanation: 'Third conditional for past hypothetical (If + had + V3 ... wouldn\'t have + V3).', difficulty: 'hard', grammarFocus: 'Conditionals' },
              { id: 'eoy-q84', type: 'multiple_choice', question: '84. Modern teenagers spend a lot of time on social media, ___ .', options: ['so they would like to read books as much as watching short videos', 'whereas the previous generations used to to interact more face-to-face', 'in order that they can develop their physical health effectively', 'despite the fact that they are very active in outdoor sports'], correctAnswer: 1, explanation: 'whereas for contrast between generations.', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q85', type: 'multiple_choice', question: '85. I would like to know the exact reason ___ .', options: ['why did you decide to resign from such a prestigious job', 'which the manager made all the employees to work late', 'for which you didn\'t inform us about the changes in the schedule', 'that everyone should have followed the instructions carefully'], correctAnswer: 2, explanation: 'reason for which (formal structure).', difficulty: 'hard', grammarFocus: 'Relative Clauses' },
              { id: 'eoy-q86', type: 'multiple_choice', question: '86. My daughter has been living in Varna for a long time; however, ___ .', options: ['she is looking forward to meeting us in Europe next month', 'she has already adapted to the local culture and language', 'she still finds it difficult to get used to the cold climate there', 'she must have made a lot of friends since she moved there'], correctAnswer: 2, explanation: 'however introduces a contrast (lived long but still finds it difficult).', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q87', type: 'multiple_choice', question: '87. No matter how hard the students tried to complete the 70-question cloze test, ___ .', options: ['they didn\'t have enough time to check all their answers', 'they should have studied the tenses more systematically', 'the teacher will give them some extra time to finish it', 'they could have asked for help if they were confused'], correctAnswer: 0, explanation: 'No matter how hard + clause ... (contrast).', difficulty: 'hard', grammarFocus: 'Connectors' },
              { id: 'eoy-q88', type: 'multiple_choice', question: '88. Scientists are researching the effects of global warming ___ .', options: ['so as to prevent the polar ice caps from melting too fast', 'since they had found some evidence about the climate change', 'although they weren\'t able to find any financial support yet', 'provided that they will be able to save the endangered species'], correctAnswer: 0, explanation: 'so as to + infinitive for purpose.', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q89', type: 'multiple_choice', question: '89. The company had the office walls repainted last week ___ .', options: ['as the building was going to be demolished soon', 'so the new employees would feel uncomfortable in the dark', 'since the old paint had started to peel off due to humidity', 'unless the manager was satisfied with the previous color'], correctAnswer: 2, explanation: 'since for reason.', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q90', type: 'multiple_choice', question: '90. You can stay in my summer house in Dikili as long as ___ .', options: ['you would clean the house before you leave at the weekend', 'you promised to take good care of the garden plants', 'you don\'t mind being away from the city\'s crowded life', 'you had paid the electricity and water bills in advance'], correctAnswer: 2, explanation: 'as long as + present simple for condition.', difficulty: 'medium', grammarFocus: 'Conditionals' },
              { id: 'eoy-q91', type: 'multiple_choice', question: '91. Although many people believe that artificial intelligence will replace most human jobs, ___ .', options: ['it has already been used in many factories for decades', 'experts suggest that it will actually create new career fields', 'it is certain that technology will continue to advance rapidly', 'it must have been developed by very talented engineers'], correctAnswer: 1, explanation: 'Although + negative belief ... experts suggest + positive counter-point.', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q92', type: 'multiple_choice', question: '92. Some students prefer to study in the library ___ .', options: ['where they can find a quiet environment to concentrate better', 'so that they didn\'t have to listen to music while studying', 'because there were too many distractions at their homes', 'which it is located right across the main campus gate'], correctAnswer: 0, explanation: 'where for relative clause of place.', difficulty: 'easy', grammarFocus: 'Relative Clauses' },
              { id: 'eoy-q93', type: 'multiple_choice', question: '93. The hurricane caused great damage to the coastal towns, ___ .', options: ['and it also left thousands of people without electricity for weeks', 'however the rescue teams arrived at the scene very quickly', 'as it was the most powerful storm of the last fifty years', 'so the government should have warned the citizens earlier'], correctAnswer: 0, explanation: 'and + additional information.', difficulty: 'easy', grammarFocus: 'Connectors' },
              { id: 'eoy-q94', type: 'multiple_choice', question: '94. By the time the fire department arrived at the scene of the accident, ___ .', options: ['the police have already blocked the main road for safety', 'the passengers would be rescued by the brave bystanders', 'the fire had already been put out by the local people', 'they will have contacted the nearest hospital for help'], correctAnswer: 2, explanation: 'By the time + past simple ... past perfect (had + V3).', difficulty: 'medium', grammarFocus: 'Tenses' },
              { id: 'eoy-q95', type: 'multiple_choice', question: '95. ___ , whereas others find it much easier to learn by doing.', options: ['Since some people have a natural talent for learning languages', 'While a few students would rather watch videos than read books', 'Many learners prefer to memorize rules and theoretical information', 'Despite the fact that everyone has a different learning style'], correctAnswer: 2, explanation: 'whereas for contrast between learning styles.', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q96', type: 'multiple_choice', question: '96. I wish I hadn\'t spent all my savings on that expensive car last year ___ .', options: ['so that I will be able to travel around Europe this summer', 'because I wouldn\'t have to take a bank loan right now', 'provided that the maintenance costs weren\'t so high', 'as if I were a very rich businessman living in a villa'], correctAnswer: 1, explanation: 'past regret (wish + had + V3) affecting current state (wouldn\'t have to).', difficulty: 'hard', grammarFocus: 'Wishes' },
              { id: 'eoy-q97', type: 'multiple_choice', question: '97. No matter how much experience a candidate has for the position, ___ .', options: ['they should have prepared more carefully for the interview', 'the manager might decide to hire someone with more energy', 'they don\'t need to show their certificates during the application', 'he or she must be able to work well within a team environment'], correctAnswer: 3, explanation: 'No matter how much ... (essential requirement regardless of experience).', difficulty: 'medium', grammarFocus: 'Connectors' },
              { id: 'eoy-q98', type: 'multiple_choice', question: '98. The research team is planning to conduct a new experiment ___ .', options: ['whose results are expected to change the future of medicine', 'which it will be funded by a group of private investors', 'so as to they could prove their theory about genetic codes', 'because they have been working on this project since 2022'], correctAnswer: 0, explanation: 'whose for possessive relative clause.', difficulty: 'medium', grammarFocus: 'Relative Clauses' },
              { id: 'eoy-q99', type: 'multiple_choice', question: '99. You had better take a map with you during the trekking in the mountains ___ .', options: ['in case you get lost in the forest where there is no phone signal', 'unless you want to spend the night under the stars comfortably', 'so that you could have found your way back to the camp site', 'because you might have forgotten the route we discussed earlier'], correctAnswer: 0, explanation: 'in case for precautions.', difficulty: 'easy', grammarFocus: 'Connectors' },
              { id: 'eoy-q100', type: 'multiple_choice', question: '100. It was such a difficult exam that ___ .', options: ['almost none of the students were able to finish all the questions', 'the teacher should have made it much easier for the prep class', 'only a few students have been studying for it for a long time', 'everyone can pass it without putting in too much effort'], correctAnswer: 0, explanation: 'such + adjective + noun + that (result clause).', difficulty: 'medium', grammarFocus: 'Result Clauses' },
            ],
  },
// ═══════════════════════════════════════════════════════════════
// VOCABULARY SET 2 (101-120)
// ═══════════════════════════════════════════════════════════════
{
  id: 'eoy-set-101-120',
    title: 'Vocabulary: Core Lexis',
      description: 'Choose the correct word to complete the sentence (Questions 101-120).',
        difficulty: 'medium',
          grammarFocus: 'Vocabulary, Collocations, Phrasal Verbs',
            questions: [
              { id: 'eoy-q101', type: 'multiple_choice', question: '101. After several hours of intense negotiation, the two companies finally reached a(n) ___ on the new policy.', options: ['achievement', 'agreement', 'argument', 'assignment'], correctAnswer: 1, explanation: 'reach an agreement (collocation).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q102', type: 'multiple_choice', question: '102. The government is trying to find ___ ways to reduce carbon emissions without hurting the economy.', options: ['confusing', 'artificial', 'imaginary', 'effective'], correctAnswer: 3, explanation: 'effective ways (meaning).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q103', type: 'multiple_choice', question: '103. If you want to improve your speaking skills, you should ___ every opportunity to practice with native speakers.', options: ['get rid of', 'run out of', 'make the most of', 'look forward to'], correctAnswer: 2, explanation: 'make the most of (idiom/collocation).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q104', type: 'multiple_choice', question: '104. Due to the heavy snowstorm, the school principal decided to ___ the meeting until next week.', options: ['call off', 'put off', 'go on', 'set up'], correctAnswer: 1, explanation: 'put off (postpone).', difficulty: 'medium', grammarFocus: 'Phrasal Verbs' },
              { id: 'eoy-q105', type: 'multiple_choice', question: '105. Technology has ___ changed the way we communicate with each other over the last two decades.', options: ['lately', 'significantly', 'furiously', 'hardly'], correctAnswer: 1, explanation: 'significantly changed (meaning).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q106', type: 'multiple_choice', question: '106. Parents are often concerned about the ___ of social media on their children\'s mental health.', options: ['interest', 'income', 'influence', 'industry'], correctAnswer: 2, explanation: 'influence of social media (collocation).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q107', type: 'multiple_choice', question: '107. The new employee proved to be very ___; he finished all his tasks ahead of schedule.', options: ['unreliable', 'reluctant', 'efficient', 'arrogant'], correctAnswer: 2, explanation: 'efficient (finishing tasks fast).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q108', type: 'multiple_choice', question: '108. Scientists have recently ___ a new species of plants in the Amazon rainforest that could have medicinal properties.', options: ['invented', 'discovered', 'produced', 'designed'], correctAnswer: 1, explanation: 'discovered (found for the first time).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q109', type: 'multiple_choice', question: '109. It is ___ to wear a seatbelt at all times while driving, even for short distances.', options: ['optional', 'traditional', 'compulsory', 'voluntary'], correctAnswer: 2, explanation: 'compulsory (obligatory/required).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q110', type: 'multiple_choice', question: '110. To be successful in a global market, companies must ___ to the changing needs and preferences of consumers.', options: ['affect', 'adopt', 'admit', 'adapt'], correctAnswer: 3, explanation: 'adapt to (change to fit).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q111', type: 'multiple_choice', question: '111. The manager decided to ___ the employee\'s suggestion because it was not practical for the current project.', options: ['accept', 'reject', 'improve', 'support'], correctAnswer: 1, explanation: 'reject (turn down).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q112', type: 'multiple_choice', question: '112. It is ___ to double-check your work before submitting it to avoid any careless mistakes.', options: ['harmful', 'essential', 'unnecessary', 'disappointing'], correctAnswer: 1, explanation: 'essential (vital/very important).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q113', type: 'multiple_choice', question: '113. The weather in Izmir is usually ___, but today it is unexpectedly cold and rainy.', options: ['mild', 'severe', 'freezing', 'moody'], correctAnswer: 0, explanation: 'mild (gentle weather).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q114', type: 'multiple_choice', question: '114. She has a ___ memory; she can remember even the smallest details from years ago.', options: ['vague', 'remarkable', 'shallow', 'limited'], correctAnswer: 1, explanation: 'remarkable (extraordinary).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q115', type: 'multiple_choice', question: '115. If we don\'t ___ our natural resources, future generations will face a serious crisis.', options: ['consume', 'waste', 'conserve', 'destroy'], correctAnswer: 2, explanation: 'conserve (protect/save).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q116', type: 'multiple_choice', question: '116. The scientist gave a brief ___ of the experiment before showing the final results.', options: ['explanation', 'destination', 'competition', 'hesitation'], correctAnswer: 0, explanation: 'explanation (describing how it works).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q117', type: 'multiple_choice', question: '117. The witness provided a very ___ description of the thief, which helped the police catch him quickly.', options: ['accurate', 'confusing', 'suspicious', 'general'], correctAnswer: 0, explanation: 'accurate (precise).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q118', type: 'multiple_choice', question: '118. The price of electricity has ___ risen over the last few months, causing many families to struggle.', options: ['slightly', 'sharply', 'barely', 'rarely'], correctAnswer: 1, explanation: 'sharply (rapidly/steeply).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q119', type: 'multiple_choice', question: '119. He didn\'t want to ___ his parents\' trust, so he told them the truth about the accident.', options: ['protect', 'betray', 'respect', 'encourage'], correctAnswer: 1, explanation: 'betray trust (collocation).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q120', type: 'multiple_choice', question: '120. The conference was ___ organized, with no clear schedule or proper equipment.', options: ['efficiently', 'professionally', 'successfully', 'poorly'], correctAnswer: 3, explanation: 'poorly organized (meaning).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
            ],
  },
// ═══════════════════════════════════════════════════════════════
// WORD CHOICE SET 3 (121-140)
// ═══════════════════════════════════════════════════════════════
{
  id: 'eoy-set-121-140',
    title: 'Vocabulary: Advanced Context',
      description: 'Choose the correct word to complete the sentence (Questions 121-130) and word forms (Questions 131-140).',
        difficulty: 'medium',
          grammarFocus: 'Vocabulary, Word Formation, Collocations',
            questions: [
              { id: 'eoy-q121', type: 'multiple_choice', question: '121. A healthy diet and regular exercise are ___ for maintaining a strong immune system.', options: ['beneficial', 'destructive', 'irrelevant', 'optional'], correctAnswer: 0, explanation: 'beneficial (helpful).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q122', type: 'multiple_choice', question: '122. The company\'s profits have ___ since they started exporting their products to European markets.', options: ['decreased', 'expanded', 'collapsed', 'disappeared'], correctAnswer: 1, explanation: 'expanded (increased/grown).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q123', type: 'multiple_choice', question: '123. The documentary ___ the main causes of the global financial crisis in a very simple way.', options: ['hides', 'illustrates', 'ignores', 'confuses'], correctAnswer: 1, explanation: 'illustrates (explains/shows).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q124', type: 'multiple_choice', question: '124. You should not ___ people based on their appearance; personality is much more important.', options: ['judge', 'appreciate', 'celebrate', 'admire'], correctAnswer: 0, explanation: 'judge (form an opinion).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q125', type: 'multiple_choice', question: '125. The fire was ___ by a short circuit in the electrical system of the building.', options: ['prevented', 'controlled', 'survived', 'caused'], correctAnswer: 3, explanation: 'caused (the reason).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q126', type: 'multiple_choice', question: '126. Even though he is very wealthy, he leads a very ___ and simple life.', options: ['arrogant', 'humble', 'extravagant', 'selfish'], correctAnswer: 1, explanation: 'humble (modest).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q127', type: 'multiple_choice', question: '127. The new law will ___ the use of plastic bags in all supermarkets to protect the environment.', options: ['allow', 'promote', 'encourage', 'restrict'], correctAnswer: 3, explanation: 'restrict (limit).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q128', type: 'multiple_choice', question: '128. After the earthquake, the local community ___ together to help those who lost their homes.', options: ['broke', 'came', 'gave', 'turned'], correctAnswer: 1, explanation: 'came together (collocation).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q129', type: 'multiple_choice', question: '129. She was ___ to hear that she had won the scholarship to study abroad.', options: ['terrified', 'annoyed', 'thrilled', 'exhausted'], correctAnswer: 2, explanation: 'thrilled (extremely excited).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q130', type: 'multiple_choice', question: '130. The student asked for ___ on the teacher\'s comment because he didn\'t understand it.', options: ['clarification', 'complication', 'celebration', 'hesitation'], correctAnswer: 0, explanation: 'clarification (making it clear).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q131', type: 'multiple_choice', question: '131. The ___ of the internet has completely transformed the way we access information.', options: ['develop', 'developer', 'development', 'developed'], correctAnswer: 2, explanation: 'Noun form required after "the".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q132', type: 'multiple_choice', question: '132. She is a very ___ person; she always finds a way to solve difficult problems at work.', options: ['creation', 'creative', 'creatively', 'create'], correctAnswer: 1, explanation: 'Adjective form required to describe "person".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q133', type: 'multiple_choice', question: '133. We were very ___ with the service at the hotel; the staff was quite rude.', options: ['disappointed', 'disappointment', 'disappointing', 'disappoint'], correctAnswer: 0, explanation: 'Adjective form describing feelings.', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q134', type: 'multiple_choice', question: '134. It is ___ to drive a car without a valid license in almost every country.', options: ['legal', 'legalize', 'illegal', 'legally'], correctAnswer: 2, explanation: 'Adjective (negative prefix) required.', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q135', type: 'multiple_choice', question: '135. Regular exercise and a balanced diet are key to maintaining a ___ lifestyle.', options: ['health', 'healthy', 'healthily', 'healthful'], correctAnswer: 1, explanation: 'Adjective required to describe "lifestyle".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q136', type: 'multiple_choice', question: '136. The teacher gave us some ___ advice on how to prepare for the Proficiency exam.', options: ['use', 'useless', 'useful', 'usage'], correctAnswer: 2, explanation: 'Adjective required to describe "advice".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q137', type: 'multiple_choice', question: '137. After the meeting, the manager expressed his ___ with the team\'s overall performance.', options: ['satisfy', 'satisfaction', 'satisfactory', 'satisfied'], correctAnswer: 1, explanation: 'Noun form required after possessive "his".', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q138', type: 'multiple_choice', question: '138. You need to speak ___ if you want the people at the back of the room to hear you.', options: ['loud', 'loudly', 'loudness', 'aloud'], correctAnswer: 1, explanation: 'Adverb required to modify the verb "speak".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q139', type: 'multiple_choice', question: '139. The ___ of the project depends on how well the team members cooperate with each other.', options: ['succeed', 'successful', 'success', 'successfully'], correctAnswer: 2, explanation: 'Noun form required as the subject.', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q140', type: 'multiple_choice', question: '140. Technology can be very ___ if it is not used responsibly by teenagers.', options: ['harm', 'harmful', 'harmless', 'harmed'], correctAnswer: 1, explanation: 'Adjective required after "be".', difficulty: 'easy', grammarFocus: 'Word Formation' },
            ],
  },
// ═══════════════════════════════════════════════════════════════
// WORD FORM SET 4 (141-160)
// ═══════════════════════════════════════════════════════════════
{
  id: 'eoy-set-141-160',
    title: 'Vocabulary: Morphological Precision',
      description: 'Choose the correct form of the word (Questions 141-159) and the best option to complete the sentence (Question 160).',
        difficulty: 'hard',
          grammarFocus: 'Word Formation, Prefixes/Suffixes, Vocabulary',
            questions: [
              { id: 'eoy-q141', type: 'multiple_choice', question: '141. The ___ between the two neighbors lasted for several years before they finally made peace.', options: ['argue', 'argument', 'arguable', 'arguably'], correctAnswer: 1, explanation: 'Noun form required.', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q142', type: 'multiple_choice', question: '142. Scientists are still looking for a ___ solution to the problem of plastic waste in the oceans.', options: ['satisfy', 'satisfaction', 'satisfactory', 'satisfactorily'], correctAnswer: 2, explanation: 'Adjective form required to describe "solution".', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q143', type: 'multiple_choice', question: '143. It is ___ for students to attend all the orientation sessions at the beginning of the semester.', options: ['advise', 'advice', 'advisable', 'advisor'], correctAnswer: 2, explanation: 'Adjective form required after "It is".', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q144', type: 'multiple_choice', question: '144. The sudden ___ of the small village into a popular tourist destination surprised everyone.', options: ['transform', 'transformation', 'transformed', 'transformative'], correctAnswer: 1, explanation: 'Noun form required after "the".', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q145', type: 'multiple_choice', question: '145. Although the experiment was ___ at first, they eventually achieved the results they wanted.', options: ['success', 'successful', 'unsuccessful', 'successfully'], correctAnswer: 2, explanation: 'Contrast (unsuccessful at first but eventually achieved).', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q146', type: 'multiple_choice', question: '146. You should read the instructions ___ before you start assembling the new furniture.', options: ['care', 'careful', 'carelessly', 'carefully'], correctAnswer: 3, explanation: 'Adverb required to modify "read".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q147', type: 'multiple_choice', question: '147. His ___ to the team\'s victory cannot be ignored; he played exceptionally well today.', options: ['contribute', 'contribution', 'contributor', 'contributory'], correctAnswer: 1, explanation: 'Noun form required.', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q148', type: 'multiple_choice', question: '148. Some people find it very ___ to work under pressure, while others thrive in such environments.', options: ['stress', 'stressfully', 'stressed', 'stressful'], correctAnswer: 3, explanation: 'Adjective required to describe the work situation.', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q149', type: 'multiple_choice', question: '149. The ___ of the mountain peak is over 5,000 meters above sea level.', options: ['high', 'highly', 'height', 'heighten'], correctAnswer: 2, explanation: 'Noun form (dimension).', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q150', type: 'multiple_choice', question: '150. She made a ___ decision to quit her job and start her own business in Izmir.', options: ['courage', 'courageous', 'courageously', 'encourage'], correctAnswer: 1, explanation: 'Adjective form to describe "decision".', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q151', type: 'multiple_choice', question: '151. The scientist\'s ___ to find a cure for the disease has gained worldwide recognition.', options: ['determine', 'determined', 'determination', 'determinative'], correctAnswer: 2, explanation: 'Noun form.', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q152', type: 'multiple_choice', question: '152. It is ___ to keep your password secret and not share it with anyone.', options: ['importance', 'unimportant', 'importantly', 'important'], correctAnswer: 3, explanation: 'Adjective form required after "It is".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q153', type: 'multiple_choice', question: '153. The exhibition was a huge ___, attracting thousands of visitors over the weekend.', options: ['achieve', 'achievement', 'achievable', 'achiever'], correctAnswer: 1, explanation: 'Noun form.', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q154', type: 'multiple_choice', question: '154. You should check the ___ of the product before you buy it online.', options: ['unavailable', 'availability', 'availably', 'available'], correctAnswer: 1, explanation: 'Noun form required after "the".', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q155', type: 'multiple_choice', question: '155. She looked at the old photographs ___, remembering her childhood in the countryside.', options: ['happy', 'happiness', 'happily', 'unhappy'], correctAnswer: 2, explanation: 'Adverb required to modify "looked".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q156', type: 'multiple_choice', question: '156. The government is taking steps to ___ the public about the benefits of recycling.', options: ['educate', 'education', 'educational', 'educated'], correctAnswer: 0, explanation: 'Verb form required after "to".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q157', type: 'multiple_choice', question: '157. He made a quick ___ to join the trekking club after talking to his friends.', options: ['decide', 'decision', 'decisive', 'decisively'], correctAnswer: 1, explanation: 'Noun form.', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q158', type: 'multiple_choice', question: '158. The house was ___ decorated for the wedding ceremony with flowers and lights.', options: ['beautiful', 'beauty', 'beautifully', 'beautify'], correctAnswer: 2, explanation: 'Adverb required to modify "decorated".', difficulty: 'easy', grammarFocus: 'Word Formation' },
              { id: 'eoy-q159', type: 'multiple_choice', question: '159. Her ___ as a teacher is well-known among the students at the language school.', options: ['popular', 'popularity', 'popularize', 'popularly'], correctAnswer: 1, explanation: 'Noun form required.', difficulty: 'medium', grammarFocus: 'Word Formation' },
              { id: 'eoy-q160', type: 'multiple_choice', question: '160. We must find a way to reduce our ___ on fossil fuels for a greener future.', options: ['depend', 'dependent', 'dependence', 'dependently'], correctAnswer: 2, explanation: 'Noun form (dependence on).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
            ],
  },
// ═══════════════════════════════════════════════════════════════
// MEANING & COMPLETION SET 5 (161-180)
// ═══════════════════════════════════════════════════════════════
{
  id: 'eoy-set-161-180',
    title: 'Vocabulary: Strategic Context',
      description: 'Choose the best option to complete the sentence (Questions 161-180).',
        difficulty: 'hard',
          grammarFocus: 'Vocabulary, Collocations, Meaning',
            questions: [
              { id: 'eoy-q161', type: 'multiple_choice', question: '161. The manager decided to ___ the meeting until next Friday because several members were absent.', options: ['cancel', 'postpone', 'maintain', 'participate'], correctAnswer: 1, explanation: 'postpone (put off until a later time).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q162', type: 'multiple_choice', question: '162. The new government policy is expected to have a ___ impact on the local economy.', options: ['suspicious', 'beneficially', 'temporary', 'redundant'], correctAnswer: 2, explanation: 'temporary impact (meaning).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q163', type: 'multiple_choice', question: '163. It was difficult to ___ between the two twins as they looked exactly the same.', options: ['distinguish', 'describe', 'discourage', 'distribute'], correctAnswer: 0, explanation: 'distinguish (tell the difference).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q164', type: 'multiple_choice', question: '164. The company\'s ___ has increased significantly since they launched their new online platform.', options: ['profit', 'pollution', 'intention', 'destruction'], correctAnswer: 0, explanation: 'profit (financial gain).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q165', type: 'multiple_choice', question: '165. She was ___ to accept the job offer because the salary was lower than she expected.', options: ['eager', 'reluctant', 'confident', 'curious'], correctAnswer: 1, explanation: 'reluctant (unwilling/hesitant).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q166', type: 'multiple_choice', question: '166. The witness provided ___ evidence that proved the suspect was innocent.', options: ['vague', 'optional', 'harmless', 'crucial'], correctAnswer: 3, explanation: 'crucial (extremely important).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q167', type: 'multiple_choice', question: '167. If you want to achieve your goals, you need to remain ___ and work hard every day.', options: ['annoyed', 'persistent', 'anxious', 'arrogant'], correctAnswer: 1, explanation: 'persistent (continuing despite difficulties).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q168', type: 'multiple_choice', question: '168. The old building was ___ demolished to make room for a new shopping mall.', options: ['slightly', 'completely', 'rarely', 'barely'], correctAnswer: 1, explanation: 'completely demolished (meaning).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q169', type: 'multiple_choice', question: '169. He has a very ___ attitude; he never listens to anyone else\'s opinion.', options: ['stubborn', 'humble', 'generous', 'flexible'], correctAnswer: 0, explanation: 'stubborn (refusing to change mind).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q170', type: 'multiple_choice', question: '170. The doctor recommended a few days of rest to help him ___ from the surgery.', options: ['recover', 'remove', 'replace', 'reduce'], correctAnswer: 0, explanation: 'recover from (get better).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q171', type: 'multiple_choice', question: '171. Due to the economic crisis, many small businesses are ___ to survive.', options: ['struggling', 'succeeding', 'expanding', 'celebrating'], correctAnswer: 0, explanation: 'struggling (having difficulty).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q172', type: 'multiple_choice', question: '172. The instructions for the project were quite ___, so everyone knew exactly what to do.', options: ['complex', 'straightforward', 'ambiguous', 'misleading'], correctAnswer: 1, explanation: 'straightforward (easy to understand).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q173', type: 'multiple_choice', question: '173. The air quality in the city center is quite poor due to the ___ from heavy traffic.', options: ['nutrients', 'supplements', 'resources', 'pollutants'], correctAnswer: 3, explanation: 'pollutants (harmful substances).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q174', type: 'multiple_choice', question: '174. You should ___ your coat before you leave; it\'s very cold outside.', options: ['take off', 'put on', 'look for', 'turn down'], correctAnswer: 1, explanation: 'put on (wear).', difficulty: 'easy', grammarFocus: 'Phrasal Verbs' },
              { id: 'eoy-q175', type: 'multiple_choice', question: '175. The research team is trying to ___ the long-term effects of the new medication.', options: ['exaggerate', 'estimate', 'evaluate', 'eliminate'], correctAnswer: 2, explanation: 'evaluate (assess/judge value).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q176', type: 'multiple_choice', question: '176. The book was so ___ that I couldn\'t put it down until I finished it.', options: ['dull', 'fascinating', 'depressing', 'offensive'], correctAnswer: 1, explanation: 'fascinating (extremely interesting).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q177', type: 'multiple_choice', question: '177. The local council is planning to ___ the old park with new playground equipment.', options: ['renovate', 'reject', 'restrict', 'release'], correctAnswer: 0, explanation: 'renovate (repair/restore).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q178', type: 'multiple_choice', question: '178. He finally ___ his dream of becoming a professional pilot after years of training.', options: ['abandoned', 'fulfilled', 'avoided', 'postponed'], correctAnswer: 1, explanation: 'fulfilled a dream (collocation).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q179', type: 'multiple_choice', question: '179. The company offered a ___ discount to its loyal customers during the holiday season.', options: ['hostile', 'greedy', 'generous', 'narrow'], correctAnswer: 2, explanation: 'generous discount (collocation).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q180', type: 'multiple_choice', question: '180. Scientists have found ___ that suggests water once existed on the surface of Mars.', options: ['evidence', 'rumor', 'fiction', 'mystery'], correctAnswer: 0, explanation: 'evidence (facts/proof).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
            ],
  },
// ═══════════════════════════════════════════════════════════════
// PROFICIENCY VOCABULARY SET 6 (181-200)
// ═══════════════════════════════════════════════════════════════
{
  id: 'eoy-set-181-200',
    title: 'Vocabulary: Proficiency Standard',
      description: 'Choose the best option to complete the sentence (Questions 181-200).',
        difficulty: 'hard',
          grammarFocus: 'Vocabulary, Phrasal Verbs, Collocations',
            questions: [
              { id: 'eoy-q181', type: 'multiple_choice', question: '181. The meeting was ___ because the chairman had an urgent family emergency.', options: ['called off', 'carried out', 'looked into', 'brought up'], correctAnswer: 0, explanation: 'called off (cancelled).', difficulty: 'medium', grammarFocus: 'Phrasal Verbs' },
              { id: 'eoy-q182', type: 'multiple_choice', question: '182. She is very ___ about her work and always pays attention to the smallest details.', options: ['reckless', 'casual', 'indifferent', 'organised'], correctAnswer: 3, explanation: 'organised (systematic).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q183', type: 'multiple_choice', question: '183. The sudden ___ of the volcano forced thousands of people to flee their homes.', options: ['eruption', 'pollution', 'evolution', 'invention'], correctAnswer: 0, explanation: 'eruption (meaning).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q184', type: 'multiple_choice', question: '184. His speech was so ___ that it inspired many young people to join the charity.', options: ['boring', 'persuasive', 'confusing', 'irritating'], correctAnswer: 1, explanation: 'persuasive (convincing).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q185', type: 'multiple_choice', question: '185. We need to ___ a new strategy if we want to increase our market share.', options: ['implement', 'ignore', 'prevent', 'deny'], correctAnswer: 0, explanation: 'implement a strategy (collocation).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q186', type: 'multiple_choice', question: '186. The atmosphere at the wedding was very ___ and everyone had a great time.', options: ['gloomy', 'tense', 'cheerful', 'hostile'], correctAnswer: 2, explanation: 'cheerful (happy).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q187', type: 'multiple_choice', question: '187. The price of gold tends to change ___ on the global economic situation.', options: ['depending', 'stabilizing', 'remaining', 'decreasing'], correctAnswer: 0, explanation: 'depending on (contingent on).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q188', type: 'multiple_choice', question: '188. It is ___ to smoke in public buildings according to the new safety regulations.', options: ['permitted', 'forbidden', 'encouraged', 'mandatory'], correctAnswer: 1, explanation: 'forbidden (not allowed).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q189', type: 'multiple_choice', question: '189. The manager praised the team for their ___ efforts during the crisis.', options: ['collaborative', 'selfish', 'isolated', 'lazy'], correctAnswer: 0, explanation: 'collaborative (working together).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q190', type: 'multiple_choice', question: '190. The virus ___ rapidly in crowded areas where people do not follow hygiene rules.', options: ['disappears', 'shrinks', 'stops', 'spreads'], correctAnswer: 3, explanation: 'spreads (moves/covers more area).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q191', type: 'multiple_choice', question: '191. The island is ___ for its beautiful beaches and crystal-clear water.', options: ['notorious', 'renowned', 'obvious', 'anonymous'], correctAnswer: 1, explanation: 'renowned (famous for something good).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q192', type: 'multiple_choice', question: '192. The company decided to ___ its operations to Asian countries to reduce costs.', options: ['expand', 'export', 'exclude', 'examine'], correctAnswer: 0, explanation: 'expand operations (collocation).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q193', type: 'multiple_choice', question: '193. The results of the test were ___, so we need to conduct further research.', options: ['conclusive', 'inconclusive', 'certain', 'definite'], correctAnswer: 1, explanation: 'inconclusive (not leading to a firm conclusion).', difficulty: 'hard', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q194', type: 'multiple_choice', question: '194. A good leader should be able to ___ their team even in difficult situations.', options: ['motivate', 'demotivate', 'mislead', 'neglect'], correctAnswer: 0, explanation: 'motivate (inspire).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q195', type: 'multiple_choice', question: '195. The new smartphone model has many ___ features that the previous one didn\'t have.', options: ['absolute', 'innovative', 'traditional', 'ancient'], correctAnswer: 1, explanation: 'innovative (new and creative).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q196', type: 'multiple_choice', question: '196. He was ___ for his hard work and dedication with a promotion to senior manager.', options: ['punished', 'rewarded', 'blamed', 'ignored'], correctAnswer: 1, explanation: 'rewarded (given something for good work).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q197', type: 'multiple_choice', question: '197. The noise from the construction site is extremely ___, especially in the mornings.', options: ['pleasant', 'soothing', 'annoying', 'melodic'], correctAnswer: 2, explanation: 'annoying (irritating).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q198', type: 'multiple_choice', question: '198. The documentary provided a(n) ___ look into the lives of people living in extreme poverty.', options: ['superficial', 'detailed', 'inaccurate', 'shallow'], correctAnswer: 1, explanation: 'detailed (thorough).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q199', type: 'multiple_choice', question: '199. They had to ___ the project due to a lack of funding from the investors.', options: ['continue', 'abandon', 'promote', 'enhance'], correctAnswer: 1, explanation: 'abandon (give up on).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
              { id: 'eoy-q200', type: 'multiple_choice', question: '200. The teacher\'s explanation was ___ enough for all the students to understand the topic.', options: ['clear', 'complex', 'vague', 'confusing'], correctAnswer: 0, explanation: 'clear (easy to understand).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TESTS (201-216)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-set-201-216',
    title: 'Cloze Tests 1 & 2',
    description: 'Read the passages and choose the word that best completes the sentences (Questions 201-216).',
    difficulty: 'medium',
    grammarFocus: 'Vocabulary & Context',
    questions: [
      { id: 'eoy-q201', type: 'multiple_choice', question: 'Passage 1: The Future of Urban Life\nThe rapid (1)___ of city populations...', options: ['growth', 'refuse', 'amount', 'debt'], correctAnswer: 0, explanation: 'growth of populations.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q202', type: 'multiple_choice', question: 'Many urban areas are now so (2)___ that providing basic services...', options: ['empty', 'crowded', 'distant', 'lonely'], correctAnswer: 1, explanation: 'crowded areas.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q203', type: 'multiple_choice', question: 'To (3)___ these issues, architects are designing...', options: ['ignore', 'celebrate', 'address', 'prevent'], correctAnswer: 2, explanation: 'address issues (deal with).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q204', type: 'multiple_choice', question: 'smart buildings that use energy more (4)___.', options: ['poorly', 'slightly', 'efficiently', 'rarely'], correctAnswer: 2, explanation: 'use energy efficiently.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q205', type: 'multiple_choice', question: 'city planners are trying to (5)___ people to use public transport', options: ['discourage', 'encourage', 'force', 'warn'], correctAnswer: 1, explanation: 'encourage people to do something.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q206', type: 'multiple_choice', question: 'instead of private cars to reduce air (6)___.', options: ['solution', 'pollution', 'evolution', 'attraction'], correctAnswer: 1, explanation: 'air pollution.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q207', type: 'multiple_choice', question: 'Although these changes require a lot of (7)___,', options: ['investment', 'argument', 'entertainment', 'experiment'], correctAnswer: 0, explanation: 'require a lot of investment.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q208', type: 'multiple_choice', question: 'experts believe they are (8)___ for a sustainable future.', options: ['unnecessary', 'optional', 'essential', 'traditional'], correctAnswer: 2, explanation: 'essential for a sustainable future.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q209', type: 'multiple_choice', question: 'Passage 2: A Journey into Wilderness\nLast summer, a group of hikers decided to (9)___ the remote mountains...', options: ['explore', 'ignore', 'destroy', 'avoid'], correctAnswer: 0, explanation: 'explore the remote mountains.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q210', type: 'multiple_choice', question: 'They knew the trip would be (10)___, so they spent weeks preparing', options: ['effortless', 'challenging', 'boring', 'common'], correctAnswer: 1, explanation: 'challenging (difficult).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q211', type: 'multiple_choice', question: 'During the first few days, the weather was (11)___, which made the climb easier.', options: ['severe', 'freezing', 'mild', 'foggy'], correctAnswer: 2, explanation: 'mild weather makes climbing easier.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q212', type: 'multiple_choice', question: 'a sudden storm forced them to (12)___ their plans', options: ['maintain', 'fulfill', 'alter', 'implement'], correctAnswer: 2, explanation: 'alter plans (change).', difficulty: 'hard', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q213', type: 'multiple_choice', question: 'Their guide, who was very (13)___, kept everyone calm', options: ['reckless', 'experienced', 'stubborn', 'anxious'], correctAnswer: 1, explanation: 'experienced guide.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q214', type: 'multiple_choice', question: 'Despite the (14)___, they finally reached the summit.', options: ['benefits', 'difficulties', 'facilities', 'opportunities'], correctAnswer: 1, explanation: 'despite the difficulties.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q215', type: 'multiple_choice', question: 'The view from the top was absolutely (15)___,', options: ['dull', 'breathtaking', 'depressing', 'ordinary'], correctAnswer: 1, explanation: 'breathtaking view.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q216', type: 'multiple_choice', question: 'and they felt a great sense of (16)___.', options: ['achievement', 'disappointment', 'confusion', 'hesitation'], correctAnswer: 0, explanation: 'sense of achievement.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TESTS (217-232)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-set-217-232',
    title: 'Cloze Tests 3 & 4',
    description: 'Read the passages and choose the word that best completes the sentences (Questions 217-232).',
    difficulty: 'medium',
    grammarFocus: 'Vocabulary & Context',
    questions: [
      { id: 'eoy-q217', type: 'multiple_choice', question: 'Passage 3: The Impact of Modern Work Culture\nIn the modern world, many employees (17)___ from high levels of stress...', options: ['suffer', 'prevent', 'protect', 'recover'], correctAnswer: 0, explanation: 'suffer from stress.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q218', type: 'multiple_choice', question: 'some companies have started to (18)___ flexible working hours.', options: ['reject', 'implement', 'ignore', 'avoid'], correctAnswer: 1, explanation: 'implement flexible working hours.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q219', type: 'multiple_choice', question: 'This allows staff to balance their professional and (19)___ lives', options: ['public', 'personal', 'artificial', 'traditional'], correctAnswer: 1, explanation: 'personal lives.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q220', type: 'multiple_choice', question: 'Experts suggest that a (20)___ workplace leads to higher productivity.', options: ['hostile', 'supportive', 'boring', 'confusing'], correctAnswer: 1, explanation: 'supportive workplace.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q221', type: 'multiple_choice', question: 'If managers (21)___ the needs of their team,', options: ['neglect', 'doubt', 'refuse', 'prioritize'], correctAnswer: 3, explanation: 'prioritize needs.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q222', type: 'multiple_choice', question: 'they can create a more (22)___ environment.', options: ['dangerous', 'noisy', 'efficient', 'temporary'], correctAnswer: 2, explanation: 'efficient environment.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q223', type: 'multiple_choice', question: 'Furthermore, providing (23)___ for career growth', options: ['obstacles', 'opportunities', 'results', 'excuses'], correctAnswer: 1, explanation: 'opportunities for growth.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q224', type: 'multiple_choice', question: 'is (24)___ for keeping talented employees in the company.', options: ['optional', 'crucial', 'useless', 'illegal'], correctAnswer: 1, explanation: 'crucial for keeping employees.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q225', type: 'multiple_choice', question: 'Passage 4: The Benefits of Lifelong Learning\nLifelong learning is the (25)___ of gaining new skills...', options: ['process', 'argument', 'destruction', 'hesitation'], correctAnswer: 0, explanation: 'process of gaining skills.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q226', type: 'multiple_choice', question: 'It is not (26)___ to formal education in schools or universities.', options: ['released', 'expanded', 'limited', 'protected'], correctAnswer: 2, explanation: 'not limited to formal education.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q227', type: 'multiple_choice', question: 'People who (27)___ in continuous learning often', options: ['avoid', 'engage', 'refuse', 'ignore'], correctAnswer: 1, explanation: 'engage in continuous learning.', difficulty: 'hard', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q228', type: 'multiple_choice', question: 'find it easier to (28)___ to changes in the job market.', options: ['adapt', 'adopt', 'affect', 'admit'], correctAnswer: 0, explanation: 'adapt to changes.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q229', type: 'multiple_choice', question: 'learning a new language can (29)___ your communication skills', options: ['decrease', 'prevent', 'damage', 'improve'], correctAnswer: 3, explanation: 'improve communication skills.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q230', type: 'multiple_choice', question: 'It also has a (30)___ effect on brain health', options: ['harmful', 'positive', 'negative', 'suspicious'], correctAnswer: 1, explanation: 'positive effect.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q231', type: 'multiple_choice', question: 'as it keeps the mind (31)___.', options: ['active', 'shallow', 'dull', 'vague'], correctAnswer: 0, explanation: 'keeps the mind active.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q232', type: 'multiple_choice', question: 'everyone should (32)___ some time to personal development', options: ['waste', 'devote', 'ignore', 'spend'], correctAnswer: 1, explanation: 'devote some time (also spend, but devote takes "to").', difficulty: 'hard', grammarFocus: 'Vocabulary' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // CLOZE TESTS (233-248)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-set-233-248',
    title: 'Cloze Tests 5 & 6',
    description: 'Read the passages and choose the word that best completes the sentences (Questions 233-248).',
    difficulty: 'medium',
    grammarFocus: 'Vocabulary & Context',
    questions: [
      { id: 'eoy-q233', type: 'multiple_choice', question: 'Passage 5: Healthy Lifestyle Choices\nMaintaining a healthy lifestyle (33)___ more than just eating well.', options: ['excludes', 'involves', 'refuses', 'ignores'], correctAnswer: 1, explanation: 'involves more than...', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q234', type: 'multiple_choice', question: 'It is (34)___ to get enough sleep every night', options: ['vital', 'optional', 'harmful', 'traditional'], correctAnswer: 0, explanation: 'vital (essential).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q235', type: 'multiple_choice', question: 'to allow the body to (35)___.', options: ['complain', 'suffer', 'disappear', 'recover'], correctAnswer: 3, explanation: 'body to recover.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q236', type: 'multiple_choice', question: 'Scientists have (36)___ that people who exercise regularly', options: ['invented', 'discovered', 'ignored', 'confused'], correctAnswer: 1, explanation: 'discovered that...', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q237', type: 'multiple_choice', question: 'have lower (37)___ of chronic diseases.', options: ['risks', 'benefits', 'successes', 'features'], correctAnswer: 0, explanation: 'lower risks.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q238', type: 'multiple_choice', question: 'avoiding (38)___ habits like smoking is essential.', options: ['beneficial', 'creative', 'unhealthy', 'reliable'], correctAnswer: 2, explanation: 'unhealthy habits.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q239', type: 'multiple_choice', question: 'Making small, (39)___ changes to your daily routine', options: ['gradual', 'sudden', 'extreme', 'rare'], correctAnswer: 0, explanation: 'gradual changes.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q240', type: 'multiple_choice', question: 'can lead to (40)___ improvements in your overall well-being over time.', options: ['slight', 'significant', 'barely', 'minor'], correctAnswer: 1, explanation: 'significant improvements.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q241', type: 'multiple_choice', question: 'Passage 6: The Evolution of Digital Entertainment\nIn recent years, the way we consume entertainment has changed (41)___', options: ['slightly', 'dramatically', 'rarely', 'barely'], correctAnswer: 1, explanation: 'changed dramatically.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q242', type: 'multiple_choice', question: 'Traditional television channels are finding it hard to (42)___ with online platforms', options: ['compete', 'agree', 'ignore', 'refuse'], correctAnswer: 0, explanation: 'compete with.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q243', type: 'multiple_choice', question: 'Subscribers now have the (43)___ to watch their favorite shows whenever they want', options: ['restriction', 'obligation', 'flexibility', 'hesitation'], correctAnswer: 2, explanation: 'flexibility to watch.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q244', type: 'multiple_choice', question: 'which can (44)___ sleep patterns and productivity.', options: ['improve', 'disrupt', 'protect', 'recover'], correctAnswer: 1, explanation: 'disrupt sleep patterns.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q245', type: 'multiple_choice', question: 'Despite these (45)___, the popularity of digital platforms', options: ['benefits', 'successes', 'facilities', 'drawbacks'], correctAnswer: 3, explanation: 'drawbacks (negative points).', difficulty: 'hard', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q246', type: 'multiple_choice', question: 'continues to (46)___ worldwide.', options: ['expand', 'shrink', 'disappear', 'collapse'], correctAnswer: 0, explanation: 'continue to expand.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q247', type: 'multiple_choice', question: 'Content creators are now focusing on (47)___ stories to attract a global audience.', options: ['dull', 'various', 'ordinary', 'shallow'], correctAnswer: 1, explanation: 'various stories.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q248', type: 'multiple_choice', question: 'Ultimately, technology has (48)___ our expectations', options: ['maintained', 'abandoned', 'reshaped', 'rejected'], correctAnswer: 2, explanation: 'reshaped our expectations.', difficulty: 'hard', grammarFocus: 'Vocabulary' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // MULTIPLE CHOICE & PREPOSITIONS (249-274)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-set-249-274',
    title: 'Multiple Choice & Prepositions 1',
    description: 'Choose the best option to complete the sentences (Questions 249-274).',
    difficulty: 'medium',
    grammarFocus: 'Vocabulary & Prepositions',
    questions: [
      { id: 'eoy-q249', type: 'multiple_choice', question: '249. The archaeological team has ___ some ancient ruins that could rewrite the history of the region.', options: ['overlooked', 'unearthed', 'hidden', 'neglected'], correctAnswer: 1, explanation: 'unearthed (discovered from the ground).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q250', type: 'multiple_choice', question: '250. It is ___ to wear protective gear while working with hazardous chemicals in the laboratory.', options: ['optional', 'voluntary', 'traditional', 'mandatory'], correctAnswer: 3, explanation: 'mandatory (required).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q251', type: 'multiple_choice', question: '251. The factory had to ___ its production due to a technical failure in the main machinery.', options: ['develop', 'promote', 'increase', 'suspend'], correctAnswer: 3, explanation: 'suspend (temporarily stop).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q252', type: 'multiple_choice', question: '252. She gave a ___ account of her journey, including every minor detail from the trip.', options: ['vague', 'comprehensive', 'superficial', 'brief'], correctAnswer: 1, explanation: 'comprehensive (complete, detailed).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q253', type: 'multiple_choice', question: '253. It is ___ to keep a backup of all your important files in case your computer crashes.', options: ['optional', 'advisable', 'harmful', 'traditional'], correctAnswer: 1, explanation: 'advisable (recommended).', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q254', type: 'multiple_choice', question: '254. The new law was designed to ___ the rights of workers.', options: ['violate', 'protect', 'ignore', 'restrict'], correctAnswer: 1, explanation: 'protect the rights.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q255', type: 'multiple_choice', question: '255. His performance in the play was ___; everyone in the audience was deeply moved.', options: ['ordinary', 'disappointing', 'exceptional', 'dull'], correctAnswer: 2, explanation: 'exceptional (outstanding).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q256', type: 'multiple_choice', question: '256. The city has undergone a major ___ since the new mayor took office last year.', options: ['transformation', 'destruction', 'hesitation', 'pollution'], correctAnswer: 0, explanation: 'major transformation.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q257', type: 'multiple_choice', question: '257. He was ___ to admit his mistake, but eventually, he apologized to the team.', options: ['eager', 'reluctant', 'confident', 'anxious'], correctAnswer: 1, explanation: 'reluctant (unwilling).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q258', type: 'multiple_choice', question: '258. The company decided to ___ its workforce by hiring fifty new engineers this month.', options: ['reduce', 'expand', 'dismiss', 'abandon'], correctAnswer: 1, explanation: 'expand its workforce.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q259', type: 'multiple_choice', question: '259. The suspect\'s story was ___ with the evidence found at the crime scene.', options: ['inconsistent', 'identical', 'supportive', 'related'], correctAnswer: 0, explanation: 'inconsistent with (not matching).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q260', type: 'multiple_choice', question: '260. You should ___ the consequences before making such a major life decision.', options: ['ignore', 'skip', 'evaluate', 'avoid'], correctAnswer: 2, explanation: 'evaluate the consequences.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'eoy-q261', type: 'multiple_choice', question: '261. The teacher was very satisfied ___ the students\' performance in the final proficiency exam.', options: ['with', 'about', 'for', 'at'], correctAnswer: 0, explanation: 'satisfied with.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q262', type: 'multiple_choice', question: '262. Many people in Izmir are looking forward ___ visiting the new arts center this weekend.', options: ['for', 'to', 'at', 'in'], correctAnswer: 1, explanation: 'look forward to.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q263', type: 'multiple_choice', question: '263. She has been interested ___ learning Bulgarian since her daughter moved to Varna.', options: ['on', 'about', 'in', 'for'], correctAnswer: 2, explanation: 'interested in.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q264', type: 'multiple_choice', question: '264. I apologize ___ the delay in responding to your email; I have been quite busy lately.', options: ['about', 'for', 'from', 'with'], correctAnswer: 1, explanation: 'apologize for.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q265', type: 'multiple_choice', question: '265. The success of the project depends ___ how well the team members communicate with each other.', options: ['on', 'in', 'at', 'for'], correctAnswer: 0, explanation: 'depends on.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q266', type: 'multiple_choice', question: '266. Are you familiar ___ the new regulations regarding the use of mobile phones in class?', options: ['about', 'with', 'to', 'for'], correctAnswer: 1, explanation: 'familiar with.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q267', type: 'multiple_choice', question: '267. He is very good ___ explaining complex grammar rules to his prep class students.', options: ['in', 'with', 'at', 'for'], correctAnswer: 2, explanation: 'good at.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q268', type: 'multiple_choice', question: '268. You should be careful ___ your belongings when you are traveling in crowded tourist areas.', options: ['about', 'with', 'for', 'in'], correctAnswer: 1, explanation: 'careful with.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q269', type: 'multiple_choice', question: '269. The company is famous ___ its innovative approach to digital entertainment services.', options: ['with', 'for', 'about', 'in'], correctAnswer: 1, explanation: 'famous for.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q270', type: 'multiple_choice', question: '270. It is difficult to concentrate ___ my work when there is so much noise in the office.', options: ['in', 'for', 'on', 'about'], correctAnswer: 2, explanation: 'concentrate on.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q271', type: 'multiple_choice', question: '271. She is quite capable ___ handling the entire department.', options: ['of', 'in', 'to', 'with'], correctAnswer: 0, explanation: 'capable of.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q272', type: 'multiple_choice', question: '272. We need to find a solution ___ the problem of increasing traffic congestion in the city.', options: ['for', 'to', 'about', 'with'], correctAnswer: 1, explanation: 'solution to.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q273', type: 'multiple_choice', question: '273. He has been suffering ___ a bad headache since he started working long hours at the computer.', options: ['with', 'from', 'for', 'about'], correctAnswer: 1, explanation: 'suffering from.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q274', type: 'multiple_choice', question: '274. Are you aware ___ the fact that the deadline for the assignment has been extended?', options: ['about', 'with', 'of', 'in'], correctAnswer: 2, explanation: 'aware of.', difficulty: 'easy', grammarFocus: 'Prepositions' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // MULTIPLE CHOICE & PREPOSITIONS (275-300)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'eoy-set-275-300',
    title: 'Multiple Choice & Prepositions 2',
    description: 'Choose the best option to complete the sentences (Questions 275-300).',
    difficulty: 'medium',
    grammarFocus: 'Vocabulary & Prepositions',
    questions: [
      { id: 'eoy-q275', type: 'multiple_choice', question: '275. She is responsible ___ organizing the weekly trekking trips for the university club.', options: ['to', 'for', 'about', 'with'], correctAnswer: 1, explanation: 'responsible for.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q276', type: 'multiple_choice', question: '276. I am tired ___ hearing the same excuses every time you are late for the lesson.', options: ['from', 'with', 'of', 'about'], correctAnswer: 2, explanation: 'tired of.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q277', type: 'multiple_choice', question: '277. The students are excited ___ the possibility of going on an exchange program next year.', options: ['in', 'for', 'with', 'about'], correctAnswer: 3, explanation: 'excited about.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q278', type: 'multiple_choice', question: '278. He is very proud ___ his daughter\'s achievements in her professional career in Bulgaria.', options: ['about', 'for', 'of', 'with'], correctAnswer: 2, explanation: 'proud of.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q279', type: 'multiple_choice', question: '279. This book is very similar ___ the one we used in the previous semester.', options: ['with', 'to', 'as', 'about'], correctAnswer: 1, explanation: 'similar to.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q280', type: 'multiple_choice', question: '280. You should definitely apply ___ that position; you have all the necessary qualifications.', options: ['to', 'for', 'in', 'at'], correctAnswer: 1, explanation: 'apply for a position.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q281', type: 'multiple_choice', question: '281. We were shocked ___ the sudden news of the company\'s decision to close the branch.', options: ['with', 'at', 'about', 'for'], correctAnswer: 1, explanation: 'shocked at / by.', difficulty: 'hard', grammarFocus: 'Prepositions' },
      { id: 'eoy-q282', type: 'multiple_choice', question: '282. Is there any difference ___ the two smartphone models besides the price?', options: ['between', 'among', 'with', 'for'], correctAnswer: 0, explanation: 'difference between.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q283', type: 'multiple_choice', question: '283. She is very fond ___ gardening and spends most of her weekends in her summer house.', options: ['about', 'of', 'in', 'with'], correctAnswer: 1, explanation: 'fond of.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q284', type: 'multiple_choice', question: '284. He was accused ___ cheating during the final exam, but he denied everything.', options: ['with', 'about', 'of', 'for'], correctAnswer: 2, explanation: 'accused of.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q285', type: 'multiple_choice', question: '285. I am not used ___ getting up so early in the morning for the 8:30 lessons.', options: ['for', 'to', 'with', 'in'], correctAnswer: 1, explanation: 'used to + V-ing.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q286', type: 'multiple_choice', question: '286. Who does this briefcase belong ___? I found it in the teachers\' room.', options: ['with', 'for', 'to', 'at'], correctAnswer: 2, explanation: 'belong to.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q287', type: 'multiple_choice', question: '287. You need to pay more attention ___ the details if you want to avoid making mistakes.', options: ['for', 'to', 'in', 'about'], correctAnswer: 1, explanation: 'pay attention to.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q288', type: 'multiple_choice', question: '288. She has always been frightened ___ spiders, even the very small ones.', options: ['from', 'with', 'of', 'about'], correctAnswer: 2, explanation: 'frightened of.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q289', type: 'multiple_choice', question: '289. We are very disappointed ___ the results of the research; we expected much more.', options: ['with', 'for', 'about', 'to'], correctAnswer: 0, explanation: 'disappointed with.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q290', type: 'multiple_choice', question: '290. He is addicted ___ playing online games and spends hours in front of the screen.', options: ['with', 'to', 'for', 'in'], correctAnswer: 1, explanation: 'addicted to.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q291', type: 'multiple_choice', question: '291. It is very kind ___ you to help me with these heavy boxes.', options: ['for', 'with', 'of', 'from'], correctAnswer: 2, explanation: 'kind of you.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q292', type: 'multiple_choice', question: '292. Are you worried ___ the upcoming proficiency exam next month?', options: ['for', 'about', 'with', 'at'], correctAnswer: 1, explanation: 'worried about.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q293', type: 'multiple_choice', question: '293. I have a lot in common ___ my new colleague; we even went to the same university.', options: ['with', 'about', 'for', 'to'], correctAnswer: 0, explanation: 'have in common with.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q294', type: 'multiple_choice', question: '294. She is very talented ___ playing the piano and has won several awards.', options: ['in', 'at', 'with', 'for'], correctAnswer: 1, explanation: 'talented at.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q295', type: 'multiple_choice', question: '295. I was surprised ___ the amount of homework the teacher gave us for the weekend.', options: ['for', 'at', 'with', 'incetvel'], correctAnswer: 1, explanation: 'surprised at / by.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q296', type: 'multiple_choice', question: '296. He has a very good relationship ___ his students at the school of foreign languages.', options: ['to', 'of', 'about', 'with'], correctAnswer: 3, explanation: 'relationship with.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q297', type: 'multiple_choice', question: '297. You should be ashamed ___ yourself for being so rude to your classmates.', options: ['with', 'of', 'for', 'about'], correctAnswer: 1, explanation: 'ashamed of.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q298', type: 'multiple_choice', question: '298. Is she still married ___ that famous architect she met in London?', options: ['with', 'to', 'for', 'about'], correctAnswer: 1, explanation: 'married to.', difficulty: 'medium', grammarFocus: 'Prepositions' },
      { id: 'eoy-q299', type: 'multiple_choice', question: '299. He is always complaining ___ the food in the school cafeteria.', options: ['for', 'about', 'from', 'with'], correctAnswer: 1, explanation: 'complaining about.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'eoy-q300', type: 'multiple_choice', question: '300. I am really bored ___ watching this movie; can we change the channel?', options: ['with', 'from', 'of', 'about'], correctAnswer: 0, explanation: 'bored with.', difficulty: 'easy', grammarFocus: 'Prepositions' },
    ],
  },
];

