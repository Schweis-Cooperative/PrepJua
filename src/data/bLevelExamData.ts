import type { ExamSet } from '../types/exam';

export const bLevelExamSets: ExamSet[] = [
  // ═══════════════════════════════════════════════════════════════
  // B LEVEL EXAM PRACTICE — MONTHLY 2
  // Part A: Cloze Test (Q1–10)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'blevel-m2-partA',
    title: 'B-Level Monthly 2 — Part A: Cloze Test',
    description: 'Circle the best option to complete the sentences. Narrative about a surprise gathering.',
    passage: `Last weekend, my family and I planned a surprise gathering for my cousin Emily, who (1) __________ abroad for two years. Everyone in the family (2) __________ excited because we (3) __________ her for such a long time. When she finally walked into the house, she looked confused, happy and asked, "Who (4) __________ this party for me?" At that moment, my aunt whispered that the whole plan (5) __________ by my uncle. Emily (6) __________ us about her new job and her hectic lifestyle while we (7) __________ dinner. Everyone was so happy. We were chatting, laughing and suddenly, I curiously asked, "Who (8) __________ first when you decided (9) __________ home?" Emily laughed and admitted she called her best friend first because they (10) __________ each other since they were born.`,
    difficulty: 'medium',
    grammarFocus: 'Narrative Tenses, Past Perfect, Passive Voice',
    questions: [
      { id: 'blm2-q1', type: 'multiple_choice', question: 'Part A, Q1:', options: ['is living', 'has been living', 'lived', 'was living'], correctAnswer: 1, explanation: 'Present Perfect Continuous for an action starting in the past and continuing.', difficulty: 'medium', grammarFocus: 'Tenses' },
      { id: 'blm2-q2', type: 'multiple_choice', question: 'Part A, Q2:', options: ['was', 'is', 'has been', 'had been'], correctAnswer: 0, explanation: 'Past Simple for state in the past.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'blm2-q3', type: 'multiple_choice', question: 'Part A, Q3:', options: ["don't see", "didn't see", "won't see", "hadn't seen"], correctAnswer: 3, explanation: 'Past Perfect for an action before another past action.', difficulty: 'medium', grammarFocus: 'Past Perfect' },
      { id: 'blm2-q4', type: 'multiple_choice', question: 'Part A, Q4:', options: ['organized', 'did organize', 'was organizing', 'has organized'], correctAnswer: 0, explanation: 'Past Simple for a completed action.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'blm2-q5', type: 'multiple_choice', question: 'Part A, Q5:', options: ['was made', 'made', 'is made', 'had made'], correctAnswer: 0, explanation: 'Past Simple Passive.', difficulty: 'medium', grammarFocus: 'Passive Voice' },
      { id: 'blm2-q6', type: 'multiple_choice', question: 'Part A, Q6:', options: ['was telling', 'had told', 'told', 'has been telling'], correctAnswer: 2, explanation: 'Past Simple for a sequence of events.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'blm2-q7', type: 'multiple_choice', question: 'Part A, Q7:', options: ['were having', 'had had', 'had', 'used to have'], correctAnswer: 0, explanation: 'Past Continuous for an action in progress.', difficulty: 'easy', grammarFocus: 'Tenses' },
      { id: 'blm2-q8', type: 'multiple_choice', question: 'Part A, Q8:', options: ['called you', 'did you call', 'were you calling', 'had called you'], correctAnswer: 1, explanation: 'Past Simple question form.', difficulty: 'easy', grammarFocus: 'Questions' },
      { id: 'blm2-q9', type: 'multiple_choice', question: 'Part A, Q9:', options: ['coming', 'to coming', 'to come', 'come'], correctAnswer: 2, explanation: 'decide + to infinitive.', difficulty: 'easy', grammarFocus: 'Verb Patterns' },
      { id: 'blm2-q10', type: 'multiple_choice', question: 'Part A, Q10:', options: ['know', 'have known', 'have been knowing', 'knew'], correctAnswer: 1, explanation: 'Present Perfect for duration from birth (stative verb).', difficulty: 'medium', grammarFocus: 'Present Perfect' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part B: Sentence Rewriting (Q11–15)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'blevel-m2-partB',
    title: 'B-Level Monthly 2 — Part B: Sentence Rewriting',
    description: 'Rewrite the sentences using the clues given. Tests "used to", Second Conditional, Reported Speech, Present Perfect Continuous, and Negation.',
    difficulty: 'medium',
    grammarFocus: 'Sentence Transformation',
    questions: [
      { id: 'blm2-q11', type: 'fill_blank', question: 'Q11: "Walt Disney worked as a newspaper delivery boy when he was young." → Rewrite: Walt Disney __________ when he was young. (used to)', correctAnswer: 'used to work as a newspaper delivery boy', explanation: '"used to + base verb" for past habits. Walt Disney used to work as a newspaper delivery boy.', difficulty: 'easy', grammarFocus: 'Used to' },
      { id: 'blm2-q12', type: 'fill_blank', question: 'Q12: "Shakespeare isn\'t alive today, so he cannot write more plays." → Rewrite: If Shakespeare __________ today, he __________ more plays.', correctAnswer: 'were alive, would write', explanation: 'Second Conditional: If + Past Simple, would + base verb. "If Shakespeare were alive today, he would write more plays."', difficulty: 'medium', grammarFocus: 'Second Conditional' },
      { id: 'blm2-q13', type: 'fill_blank', question: 'Q13: Malala Yousafzai, a Pakistani education activist: "Education can change the world". → Rewrite: Malala Yousafzai, a Pakistani education activist said __________.', correctAnswer: 'that education can change the world', explanation: 'Reported Speech (general truth — no tense shift needed): "...said (that) education can change the world."', difficulty: 'medium', grammarFocus: 'Reported Speech' },
      { id: 'blm2-q14', type: 'fill_blank', question: 'Q14: "J.K. Rowling started writing her new book months ago. She is still working on it." → Rewrite: J.K. Rowling __________ her new book for months.', correctAnswer: 'has been writing', explanation: 'Present Perfect Continuous for an action that started in the past and continues now: "has been writing."', difficulty: 'medium', grammarFocus: 'Present Perfect Continuous' },
      { id: 'blm2-q15', type: 'fill_blank', question: 'Q15: "Marie Curie didn\'t have any safety equipment while working with radiation." → Rewrite: Marie Curie __________ while working with radiation. (no)', correctAnswer: 'had no safety equipment', explanation: 'Negation transformation using "no": "Marie Curie had no safety equipment."', difficulty: 'easy', grammarFocus: 'Negation' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part C: Fill in the blank (Q16–25)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'blevel-m2-partC',
    title: 'B-Level Monthly 2 — Part C: Contextual Vocabulary',
    description: 'Fill in the blanks with words from the box. Word box: persuade, argue, grow apart, furious, filthy, complain, have a lot in common, keep in touch, get on, hang out, forgive, get to know.',
    passage: `When my brother and I were younger, we used to (16) __________ a lot; we often shouted at each other even about the smallest things - but our parents always tried to teach us to talk calmly instead of fighting. They always encouraged us to (17) __________ well with each other. Now that we are adults, we've started to (18) __________ because we live in different cities and don't see each other much, but we still try hard to (19) __________ and call each other every other day. Last month, I was really excited when he came to visit me, but I soon became (20) __________, extremely angry with him when I saw how dirty his room was. Clothes were everywhere; it was absolutely (21) __________. I wanted to tidy up the mess, but he managed to (22) __________ me to relax and enjoy the weekend instead. We spent two days together, and it felt nice to (23) __________ with him again and reconnect. Before he left, he said he hoped I would (24) __________ him for the mess he had made. Of course, I did. Although we don't (25) __________, we have really different personalities, I love spending time with my brother.`,
    difficulty: 'medium',
    grammarFocus: 'Relationship & Personality Vocabulary',
    questions: [
      { id: 'blm2-q16', type: 'fill_blank', question: 'Part C, Q16:', correctAnswer: 'argue', explanation: '"argue" — shout at each other.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q17', type: 'fill_blank', question: 'Part C, Q17:', correctAnswer: 'get on', explanation: '"get on well" — have a good relationship.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q18', type: 'fill_blank', question: 'Part C, Q18:', correctAnswer: 'grow apart', explanation: '"grow apart" — become less close.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q19', type: 'fill_blank', question: 'Part C, Q19:', correctAnswer: 'keep in touch', explanation: '"keep in touch" — maintain contact.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q20', type: 'fill_blank', question: 'Part C, Q20:', correctAnswer: 'furious', explanation: '"furious" — extremely angry.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q21', type: 'fill_blank', question: 'Part C, Q21:', correctAnswer: 'filthy', explanation: '"filthy" — absolutely dirty.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q22', type: 'fill_blank', question: 'Part C, Q22:', correctAnswer: 'persuade', explanation: '"persuade" — convince someone.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q23', type: 'fill_blank', question: 'Part C, Q23:', correctAnswer: 'hang out', explanation: '"hang out" — spend time together.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q24', type: 'fill_blank', question: 'Part C, Q24:', correctAnswer: 'forgive', explanation: '"forgive" — stop being angry at someone.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q25', type: 'fill_blank', question: 'Part C, Q25:', correctAnswer: 'have a lot in common', explanation: '"have a lot in common" — share similar interests/traits.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part D: Circle the correct option (Q26–33)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'blevel-m2-partD',
    title: 'B-Level Monthly 2 — Part D: Circle Correct Option',
    description: 'Choose the correct word or phrase to complete each sentence. Tests vocabulary choice, articles, relative pronouns, phrasal verbs, and word formation.',
    difficulty: 'medium',
    grammarFocus: 'Vocabulary, Articles, Relative Pronouns, Phrasal Verbs',
    questions: [
      { id: 'blm2-q26', type: 'multiple_choice', question: 'Q26: "The company decided to hire the _____ who performed best during the interview."', options: ['employer', 'employee', 'candidate'], correctAnswer: 2, explanation: '"candidate" — a person applying for a job.', difficulty: 'easy', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q27', type: 'multiple_choice', question: 'Q27: "My brother has always dreamed of becoming _____ architect since he was a child."', options: ['the', '-', 'an'], correctAnswer: 2, explanation: '"an architect" — indefinite article before a vowel sound for professions.', difficulty: 'easy', grammarFocus: 'Articles' },
      { id: 'blm2-q28', type: 'multiple_choice', question: 'Q28: "The conference _____ I met several experts in educational psychology helped me develop new teaching ideas."', options: ['who', 'which', 'where'], correctAnswer: 2, explanation: '"where" — relative pronoun for a place (the conference = a location/event).', difficulty: 'medium', grammarFocus: 'Relative Pronouns' },
      { id: 'blm2-q29', type: 'multiple_choice', question: 'Q29: "_____ considering a different strategy this time? The previous one didn\'t give us the results we expected."', options: ['What about', "Why don't we", "It's worth"], correctAnswer: 2, explanation: '"It\'s worth considering" — It\'s worth + -ing form for suggesting something valuable.', difficulty: 'medium', grammarFocus: 'Suggestions' },
      { id: 'blm2-q30', type: 'multiple_choice', question: 'Q30: "The manager\'s _____ was clear when she announced that the team had achieved all sales targets this month."', options: ['happy', 'happiness', 'unhappy'], correctAnswer: 1, explanation: '"happiness" — a noun is needed after the possessive "manager\'s."', difficulty: 'medium', grammarFocus: 'Word Formation' },
      { id: 'blm2-q31', type: 'multiple_choice', question: 'Q31: "I really _____ hearing your feedback on my project proposal before I send it to the professor."', options: ['look out', 'look forward to', 'look for'], correctAnswer: 1, explanation: '"look forward to + -ing" — anticipate with pleasure.', difficulty: 'easy', grammarFocus: 'Phrasal Verbs' },
      { id: 'blm2-q32', type: 'multiple_choice', question: 'Q32: "Before I left for my exchange program abroad, my mother hugged me and said, \'_____\' and call me whenever you need anything."', options: ['Make yourself at home', 'Be yourself', 'Look after yourself'], correctAnswer: 2, explanation: '"Look after yourself" — take care of yourself (appropriate for a farewell).', difficulty: 'medium', grammarFocus: 'Idiomatic Expressions' },
      { id: 'blm2-q33', type: 'multiple_choice', question: 'Q33: "_____ improving my English, I also want to learn Spanish this year."', options: ['In order to', 'To', 'Apart from'], correctAnswer: 2, explanation: '"Apart from" — in addition to. "Apart from improving my English, I also want to..."', difficulty: 'medium', grammarFocus: 'Prepositions' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part E: Fill in the blank using ONE word only (Q34–40)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'blevel-m2-partE',
    title: 'B-Level Monthly 2 — Part E: Single-Word Gap Fill',
    description: 'Fill in the blank using ONE word only. Tests prepositions, idiomatic phrases, and functional vocabulary.',
    difficulty: 'medium',
    grammarFocus: 'Prepositions, Idiomatic Phrases',
    questions: [
      { id: 'blm2-q34', type: 'fill_blank', question: 'Q34: "Sometimes it\'s hard to put how you feel __________ words after a long day; talking about your feelings can help, if you don\'t want to write."', correctAnswer: 'into', explanation: '"put into words" — express something verbally.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'blm2-q35', type: 'fill_blank', question: 'Q35: "The festival lasts __________ Friday to Sunday, so we have the whole weekend to enjoy it."', correctAnswer: 'from', explanation: '"from... to..." — indicating a range of time.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'blm2-q36', type: 'fill_blank', question: 'Q36: "During the school festival, Mr. Baggins was __________ charge of coordinating all the volunteers, making sure every activity ran smoothly and on time."', correctAnswer: 'in', explanation: '"in charge of" — responsible for.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'blm2-q37', type: 'fill_blank', question: 'Q37: "My flat mate and I spent hours debating which movie to watch. __________ the end, we decided on the one that had the highest reviews online."', correctAnswer: 'In', explanation: '"In the end" — finally / after everything.', difficulty: 'easy', grammarFocus: 'Prepositions' },
      { id: 'blm2-q38', type: 'fill_blank', question: 'Q38: "Nichole had never tried painting before, but her friend told her to have a __________. She ended up creating a beautiful picture she was proud of."', correctAnswer: 'go', explanation: '"have a go" — try something.', difficulty: 'medium', grammarFocus: 'Idiomatic Expressions' },
      { id: 'blm2-q39', type: 'fill_blank', question: 'Q39: "The new café at the end of the street is really __________. Only a few people can sit inside at a time, but it has the coziest atmosphere in town."', correctAnswer: 'tiny', explanation: '"tiny" — very small (only a few people can sit inside).', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q40', type: 'fill_blank', question: 'Q40: A: "I don\'t enjoy horror films." B: "Me __________. I find them really scary too."', correctAnswer: 'neither', explanation: '"Me neither" — agreement with a negative statement.', difficulty: 'easy', grammarFocus: 'Agreement' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Part F: Reading (Deep Sea Exploration) (Q41–45)
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'blevel-m2-partF',
    title: 'B-Level Monthly 2 — Part F: Reading (Deep Sea)',
    description: 'Read the text about deep-sea exploration and choose the correct option.',
    passage: `1 Exploring the deep sea presents scientists with challenges very similar to those faced by astronauts in space. At depths of thousands of meters, the pressure is so intense that an ordinary submarine would collapse instantly. To survive in these extreme conditions, researchers rely on specially designed submersibles with reinforced metal shells and advanced pressure-control systems. These vessels also carry powerful lights, as sunlight cannot reach beyond a few hundred meters below the surface.

2 Inside the submersible, the air is carefully monitored to maintain safe oxygen levels. Even a small leak could cause serious problems, as water pressure outside is hundreds of times greater than at sea level. The internal systems constantly regulate oxygen and remove carbon dioxide to keep the crew alive and alert during long missions.

3 Communication with the surface is another major challenge. Radio waves do not travel well through water, so submersibles use sonar-based systems or special cables to send information. This means that real-time communication is often limited or delayed, requiring scientists to make quick decisions on their own while deep below the surface.

4 Despite these difficulties, deep-sea exploration has revealed extraordinary discoveries. Entire ecosystems have been found near hydrothermal vents, where life thrives without sunlight. Studying these organisms helps scientists understand how life might exist in extreme environments elsewhere in the universe.

5 In recent years, advances in robotics have made unmanned deep-sea missions more common. Remote-controlled vehicles can dive deeper and stay underwater longer than humans, so they can collect valuable data about the mysteries of the ocean floor.`,
    difficulty: 'medium',
    grammarFocus: 'Reading Comprehension, Main Idea, Reference',
    questions: [
      { id: 'blm2-q41', type: 'multiple_choice', question: 'Q41: "The main idea of the text is that deep-sea exploration _____."', options: ['has challenged scientists more than space exploration', 'requires special technology to survive and communicate', 'have advanced a lot with the improvement in robotics', 'real time communicating underwater is still an unsolved problem'], correctAnswer: 1, explanation: 'The text focuses on the various technological challenges (pressure, oxygen, communication).', difficulty: 'medium', grammarFocus: 'Main Idea' },
      { id: 'blm2-q42', type: 'multiple_choice', question: 'Q42: "The main reason submersibles need reinforced shells is to _____."', options: ['carry heavy scientific equipment', 'prevent leaks and air loss', 'withstand extreme water pressure', 'keep the temperature stable'], correctAnswer: 2, explanation: 'Paragraph 1: reinforced shells to survive intense pressure.', difficulty: 'easy', grammarFocus: 'Comprehension' },
      { id: 'blm2-q43', type: 'multiple_choice', question: 'Q43: "Communication is difficult underwater because _____."', options: ['radio waves cannot travel far in water', 'oxygen levels are too low', 'light does not reach the ocean floor', 'cables are often damaged'], correctAnswer: 0, explanation: 'Paragraph 3: radio waves do not travel well through water.', difficulty: 'easy', grammarFocus: 'Comprehension' },
      { id: 'blm2-q44', type: 'multiple_choice', question: 'Q44: "The word \'thrives\' in paragraph 4 means _____."', options: ['survives and grows well', 'hides and escapes', 'disappears slowly', 'gradually loses power'], correctAnswer: 0, explanation: '"thrives" — grows or develops well.', difficulty: 'medium', grammarFocus: 'Vocabulary' },
      { id: 'blm2-q45', type: 'multiple_choice', question: 'Q45: "The pronoun \'they\' in paragraph 5 refers to _____."', options: ['unmanned missions', 'humans', 'advances in robotics', 'remote-controlled vehicles'], correctAnswer: 3, explanation: '"they" refers to remote-controlled vehicles mentioned in the same sentence.', difficulty: 'medium', grammarFocus: 'Reference' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Text II: Reading (Digital Nomads) (Q46–50)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'blevel-m2-partG',
    title: 'B-Level Monthly 2 — Part G: Reading (Digital Nomads)',
    description: 'Read the text about digital nomads and choose the correct option.',
    passage: `1 A decade ago, the idea of earning a living while travelling the world sounded like a fantasy. Today, however, digital nomads — people who work remotely while moving from place to place — have become a visible symbol of the modern workforce. From beach cafés in Bali to co-working spaces in Lisbon, these workers represent a new kind of freedom that technology has made possible. Yet behind the appealing photos and hashtags, the digital nomad lifestyle raises complex questions about privilege, community, and balance.

2 The rise of remote work during the pandemic accelerated this shift dramatically. Once employers realized many jobs could be done online, geographical boundaries seemed to disappear. For highly skilled professionals, it meant the chance to combine work with travel, often at a lower cost of living. However, critics argue that this freedom is not equally accessible. While some enjoy flexibility, others — such as local residents — may face rising rents and the displacement that comes with a sudden influx of wealthier foreigners.

3 Another challenge is the illusion of endless freedom. Constant movement can make it difficult to form lasting friendships or maintain consistent routines. "People imagine that being a digital nomad means total independence," says sociologist Miguel Santos. "But many discover they still feel tied — not to a place, but to the need for stability." He notes that digital nomads often rely heavily on online communities for support, which can create a paradoxical sense of connection and isolation at once.

4 Despite these difficulties, the movement shows no sign of slowing down. Governments in more than 50 countries have now introduced "digital nomad visas" to attract remote workers, viewing them as economic assets. This marks a cultural turning point: Work is no longer just about what you do or how much you earn — it's about where and how you want to live.`,
    difficulty: 'medium',
    grammarFocus: 'Reading Comprehension, Main Idea, Reference',
    questions: [
      { id: 'blm2-q46', type: 'multiple_choice', question: 'Q46: "The main idea of paragraph 1 is _____."', options: ['the digital nomad lifestyle is popular today but it also raises questions about its social impact', 'working while travelling has become easier because technology allows people to stay connected', 'remote work is more comfortable in beach cafes and co-working spaces around the world', 'a decade ago, people could not imagine working outside traditional offices'], correctAnswer: 0, explanation: 'Paragraph 1 introduces the concept and the complex questions it raises.', difficulty: 'medium', grammarFocus: 'Main Idea' },
      { id: 'blm2-q47', type: 'multiple_choice', question: 'Q47: "The rise of digital nomadism was a result of the _____."', options: ['introduction of new tourist visas', 'global shift toward online and remote work', 'decrease in cost of international flights', 'decline of traditional office jobs due to pandemic'], correctAnswer: 1, explanation: 'Paragraph 2 mentions the pandemic accelerated the shift to online work.', difficulty: 'medium', grammarFocus: 'Comprehension' },
      { id: 'blm2-q48', type: 'multiple_choice', question: 'Q48: "According to Santos, many digital nomads have the misconception that _____."', options: ['they can work fewer hours abroad', 'they will easily adapt to new culture', 'they are completely free and independent', 'online work requires little discipline'], correctAnswer: 2, explanation: 'Paragraph 3: Misconception of "total independence" while actually needing stability.', difficulty: 'medium', grammarFocus: 'Inference' },
      { id: 'blm2-q49', type: 'multiple_choice', question: 'Q49: "According to the author, digital nomadism _____."', options: ['represents a deeper change in how people define work and lifestyle', 'will soon replace all forms of traditional employment policies', 'is mainly a temporary reaction of employers to the pandemic and its effects', 'is only for countries that issue special visas for digital nomads'], correctAnswer: 0, explanation: 'Paragraph 4 states it marks a "cultural turning point" in defining work.', difficulty: 'medium', grammarFocus: 'Main Idea' },
      { id: 'blm2-q50', type: 'multiple_choice', question: 'Q50: "\'they\' in paragraph 3 refers to the _____."', options: ['lasting friendships', 'online communities', 'consistent routines', 'digital nomads'], correctAnswer: 3, explanation: '"they" in "many discover they still feel tied" refers to digital nomads.', difficulty: 'medium', grammarFocus: 'Reference' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // Text III: Paragraph-Heading Matching (Sustainability) (Q51–55)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'blevel-m2-partH',
    title: 'B-Level Monthly 2 — Text III: Paragraph Matching',
    description: 'Read the text and match the main ideas (A–F) to the paragraphs (51–55). There is one extra main idea.',
    passage: `51. Over the past few decades, people have become more aware of the environmental cost of their everyday choices. From fast fashion to single-use plastics, consumers are beginning to realise that convenience often comes at a high price for the planet. As a result, many are now trying to live more sustainably.

52. One key aspect of sustainable living is the concept of the circular economy. Instead of constantly producing and throwing away goods, this system focuses on reusing, repairing, and recycling materials to reduce waste. Many global brands are now redesigning their products to last longer or to be easily repaired.

53. Still, living sustainably isn't always simple. Eco-friendly products are often more expensive, and everyone can afford them. Moreover, people's busy lifestyles make it difficult to always make the "green" choice, such as cycling to work instead of driving.

54. Technology, however, is helping to close this gap. New smartphone apps allow users to track their energy use, buy second-hand clothes, or even share food that would otherwise go to waste. Artificial intelligence is also helping companies make their supply chains more efficient and reduce carbon emissions.

55. Ultimately, true sustainability requires more than individual effort. Governments and large corporations need to play their part too - by creating clear environmental policies and investing in renewable energy. Only when all parts of society work together can we hope to make a real difference.

Main Ideas:
A. The growing awareness of how our daily habits affect the environment
B. The challenges people face when trying to live sustainably
C. How technology can make sustainability more achievable
D. Why businesses prefer short-term profit over sustainability
E. The need for cooperation between individuals and institutions
F. A shift from constant production to reuse and sustainability`,
    difficulty: 'medium',
    grammarFocus: 'Reading: Paragraph-Heading Matching',
    questions: [
      { id: 'blm2-q51', type: 'multiple_choice', question: 'Match Paragraph 51:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 0, explanation: 'Paragraph 51 discusses awareness of environmental costs.', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'blm2-q52', type: 'multiple_choice', question: 'Match Paragraph 52:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 5, explanation: 'Paragraph 52 discusses the circular economy (reuse).', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'blm2-q53', type: 'multiple_choice', question: 'Match Paragraph 53:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 1, explanation: 'Paragraph 53 discusses challenges and lifestyle difficulties.', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'blm2-q54', type: 'multiple_choice', question: 'Match Paragraph 54:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 2, explanation: 'Paragraph 54 discusses apps and AI helping sustainability.', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
      { id: 'blm2-q55', type: 'multiple_choice', question: 'Match Paragraph 55:', options: ['A', 'B', 'C', 'D', 'E', 'F'], correctAnswer: 4, explanation: 'Paragraph 55 discusses the need for cooperation (all parts of society).', difficulty: 'medium', grammarFocus: 'Paragraph Matching' },
    ],
  },
];
