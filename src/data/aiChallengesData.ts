import type { ExamSet } from '../types/exam';

export const aiChallengesExamSets: ExamSet[] = [
  {
    id: 'ai-challenges-easy-1',
    title: 'AI Challenge — Easy Level Grammar & Vocab',
    description: 'A comprehensive 40-question practice test focusing on core B1+ vocabulary, tenses, conditionals, and wordpower expressions.',
    difficulty: 'easy',
    grammarFocus: 'Mixed B1+ Grammar & Wordpower',
    questions: [
      // ── Subject and Object Questions (Q1–Q5) ──
      {
        id: 'ai-easy-q1',
        type: 'multiple_choice',
        question: 'Who _____ you to the party last night?',
        options: ['invited', 'did invite', 'was inviting', 'invites'],
        correctAnswer: 0,
        explanation: '"Who invited you?" is a subject question (özne sorusu), so we do not use the auxiliary "did".',
        difficulty: 'easy',
        grammarFocus: 'Subject and Object Questions'
      },
      {
        id: 'ai-easy-q2',
        type: 'multiple_choice',
        question: 'What _____ during the meeting yesterday afternoon?',
        options: ['happened', 'did happen', 'was happened', 'happening'],
        correctAnswer: 0,
        explanation: '"What happened?" is a subject question asking about the event that took place, so "did" is not used.',
        difficulty: 'easy',
        grammarFocus: 'Subject and Object Questions'
      },
      {
        id: 'ai-easy-q3',
        type: 'multiple_choice',
        question: 'Who _____ to on the phone when I walked into the room?',
        options: ['did you talk', 'were you talking', 'you were talking', 'talked you'],
        correctAnswer: 1,
        explanation: '"Who were you talking to?" is an object question in the Past Continuous. We need the auxiliary verb "were" before the subject.',
        difficulty: 'easy',
        grammarFocus: 'Subject and Object Questions'
      },
      {
        id: 'ai-easy-q4',
        type: 'multiple_choice',
        question: 'Which book _____ for your literature class last semester?',
        options: ['did you choose', 'you chose', 'chose you', 'do you choose'],
        correctAnswer: 0,
        explanation: 'This is an object question in the Past Simple, so we use "did" + subject + base verb: "did you choose".',
        difficulty: 'easy',
        grammarFocus: 'Subject and Object Questions'
      },
      {
        id: 'ai-easy-q5',
        type: 'multiple_choice',
        question: 'How many people _____ at the conference next week?',
        options: ['will attend', 'did attend', 'are attending', 'attend'],
        correctAnswer: 0,
        explanation: 'This is a subject question about the future: "How many people will attend?" fits here as a predicted subject action.',
        difficulty: 'easy',
        grammarFocus: 'Subject and Object Questions'
      },

      // ── Present Simple vs Present Continuous (Q6–Q10) ──
      {
        id: 'ai-easy-q6',
        type: 'multiple_choice',
        question: 'I can\'t talk right now because I _____ my English homework.',
        options: ['am doing', 'do', 'done', 'was doing'],
        correctAnswer: 0,
        explanation: 'We use the Present Continuous ("am doing") for an action happening at the moment of speaking.',
        difficulty: 'easy',
        grammarFocus: 'Present Simple vs Present Continuous'
      },
      {
        id: 'ai-easy-q7',
        type: 'multiple_choice',
        question: 'She _____ three languages fluently: English, Spanish, and Turkish.',
        options: ['speaks', 'is speaking', 'speak', 'has spoken'],
        correctAnswer: 0,
        explanation: 'Speaking a language is a permanent state/ability, so we use the Present Simple ("speaks").',
        difficulty: 'easy',
        grammarFocus: 'Present Simple vs Present Continuous'
      },
      {
        id: 'ai-easy-q8',
        type: 'multiple_choice',
        question: 'I _____ the answer to this difficult question. Can you help me?',
        options: ['don\'t know', 'am not knowing', 'don\'t knowing', 'not know'],
        correctAnswer: 0,
        explanation: '"Know" is a state verb (durum fiili) and cannot be used in the continuous form. We use the Present Simple "don\'t know".',
        difficulty: 'easy',
        grammarFocus: 'Present Simple vs Present Continuous'
      },
      {
        id: 'ai-easy-q9',
        type: 'multiple_choice',
        question: 'My brother _____ a large apartment in the city center.',
        options: ['owns', 'is owning', 'own', 'has owned'],
        correctAnswer: 0,
        explanation: '"Own" (sahip olmak) is a state verb and does not take the -ing form. We use the Present Simple "owns".',
        difficulty: 'easy',
        grammarFocus: 'Present Simple vs Present Continuous'
      },
      {
        id: 'ai-easy-q10',
        type: 'multiple_choice',
        question: 'Look! The children _____ in the garden. They look very happy.',
        options: ['are playing', 'play', 'plays', 'have played'],
        correctAnswer: 0,
        explanation: '"Look!" indicates the action is happening right now, so we use the Present Continuous "are playing".',
        difficulty: 'easy',
        grammarFocus: 'Present Simple vs Present Continuous'
      },

      // ── Present Perfect vs Past Simple (Q11–Q15) ──
      {
        id: 'ai-easy-q11',
        type: 'multiple_choice',
        question: 'I _____ my keys. I can\'t find them anywhere!',
        options: ['have lost', 'lost', 'lose', 'am losing'],
        correctAnswer: 0,
        explanation: 'We use the Present Perfect ("have lost") for a recent action that has a strong result or effect in the present.',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Past Simple'
      },
      {
        id: 'ai-easy-q12',
        type: 'multiple_choice',
        question: 'We _____ to London for our summer holiday last year.',
        options: ['went', 'have gone', 'go', 'were going'],
        correctAnswer: 0,
        explanation: '"Last year" is a specific past time reference, so we must use the Past Simple ("went").',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Past Simple'
      },
      {
        id: 'ai-easy-q13',
        type: 'multiple_choice',
        question: '_____ you ever _____ a camel in the desert?',
        options: ['Have / ridden', 'Did / ride', 'Has / ridden', 'Were / riding'],
        correctAnswer: 0,
        explanation: '"Ever" indicates a life experience (hayat tecrübesi) without a specific time, so we use the Present Perfect: "Have you ever ridden".',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Past Simple'
      },
      {
        id: 'ai-easy-q14',
        type: 'multiple_choice',
        question: 'Shakespeare _____ many famous plays, including Hamlet and Romeo and Juliet.',
        options: ['wrote', 'has written', 'writes', 'was writing'],
        correctAnswer: 0,
        explanation: 'Shakespeare is a historical figure who is no longer alive, so his actions belong to a finished past time. We use the Past Simple "wrote".',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Past Simple'
      },
      {
        id: 'ai-easy-q15',
        type: 'multiple_choice',
        question: 'She _____ in this company since she graduated from university.',
        options: ['has worked', 'worked', 'works', 'is working'],
        correctAnswer: 0,
        explanation: 'The word "since" indicates an action that started in the past and continues up to the present. We use the Present Perfect: "has worked".',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Past Simple'
      },

      // ── Present Perfect vs Present Perfect Continuous (Q16–Q20) ──
      {
        id: 'ai-easy-q16',
        type: 'multiple_choice',
        question: 'I am tired because I _____ in the garden all morning.',
        options: ['have been working', 'have worked', 'worked', 'am working'],
        correctAnswer: 0,
        explanation: 'We use the Present Perfect Continuous ("have been working") to emphasize the duration of a continuous activity that has just finished and has a visible result in the present.',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Present Perfect Continuous'
      },
      {
        id: 'ai-easy-q17',
        type: 'multiple_choice',
        question: 'How long _____ English at school?',
        options: ['have you been learning', 'have you learned', 'did you learn', 'do you learn'],
        correctAnswer: 0,
        explanation: '"How long" is typically used with the Present Perfect Continuous to ask about the duration of an ongoing activity: "have you been learning".',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Present Perfect Continuous'
      },
      {
        id: 'ai-easy-q18',
        type: 'multiple_choice',
        question: 'I _____ three cups of coffee this morning.',
        options: ['have drunk', 'have been drinking', 'drank', 'drink'],
        correctAnswer: 0,
        explanation: 'We use the Present Perfect Simple ("have drunk") when we talk about a completed quantity or the number of times an action has been completed.',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Present Perfect Continuous'
      },
      {
        id: 'ai-easy-q19',
        type: 'multiple_choice',
        question: 'We _____ each other for more than ten years.',
        options: ['have known', 'have been knowing', 'knew', 'know'],
        correctAnswer: 0,
        explanation: '"Know" is a state verb (durum fiili), so it cannot be used in the continuous form. We must use the Present Perfect Simple "have known".',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Present Perfect Continuous'
      },
      {
        id: 'ai-easy-q20',
        type: 'multiple_choice',
        question: 'He is sweaty because he _____ for two hours.',
        options: ['has been running', 'has run', 'ran', 'runs'],
        correctAnswer: 0,
        explanation: 'We use the Present Perfect Continuous ("has been running") to emphasize the ongoing activity that results in his current state.',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect vs Present Perfect Continuous'
      },

      // ── Narrative Tenses (Q21–Q25) ──
      {
        id: 'ai-easy-q21',
        type: 'multiple_choice',
        question: 'While I _____ down the street, I suddenly ran into an old classmate.',
        options: ['was walking', 'walked', 'had walked', 'have been walking'],
        correctAnswer: 0,
        explanation: 'We use the Past Continuous ("was walking") for an action in progress in the past when it was interrupted by another action (Past Simple: "ran").',
        difficulty: 'easy',
        grammarFocus: 'Narrative Tenses'
      },
      {
        id: 'ai-easy-q22',
        type: 'multiple_choice',
        question: 'By the time we arrived at the cinema, the movie _____.',
        options: ['had already started', 'already started', 'was already starting', 'has already started'],
        correctAnswer: 0,
        explanation: '"By the time" indicates that one past action was completed before another past action. We use the Past Perfect ("had already started").',
        difficulty: 'easy',
        grammarFocus: 'Narrative Tenses'
      },
      {
        id: 'ai-easy-q23',
        type: 'multiple_choice',
        question: 'She _____ very tired because she had been cleaning the house all afternoon.',
        options: ['was', 'had been', 'has been', 'was being'],
        correctAnswer: 0,
        explanation: '"Was" is the Past Simple form of the state verb "be". The second clause ("had been cleaning") explains the reason.',
        difficulty: 'easy',
        grammarFocus: 'Narrative Tenses'
      },
      {
        id: 'ai-easy-q24',
        type: 'multiple_choice',
        question: 'First, he opened the door, _____ his coat, and sat down on the sofa.',
        options: ['took off', 'had taken off', 'was taking off', 'takes off'],
        correctAnswer: 0,
        explanation: 'For a sequence of completed events in a past narrative, we use the Past Simple for all actions: "opened... took off... sat".',
        difficulty: 'easy',
        grammarFocus: 'Narrative Tenses'
      },
      {
        id: 'ai-easy-q25',
        type: 'multiple_choice',
        question: 'The ground was wet because it _____ heavily for hours before we went out.',
        options: ['had been raining', 'was raining', 'rained', 'has been raining'],
        correctAnswer: 0,
        explanation: 'We use the Past Perfect Continuous ("had been raining") to show the cause of a past situation, focusing on the duration of the activity before that point.',
        difficulty: 'easy',
        grammarFocus: 'Narrative Tenses'
      },

      // ── Used to vs Usually (Q26–Q30) ──
      {
        id: 'ai-easy-q26',
        type: 'multiple_choice',
        question: 'When I was a child, I _____ spend my weekends fishing with my grandfather.',
        options: ['used to', 'usually', 'am used to', 'get used to'],
        correctAnswer: 0,
        explanation: 'We use "used to" to describe past habits or repeated actions in the past that no longer happen.',
        difficulty: 'easy',
        grammarFocus: 'Used to & Usually'
      },
      {
        id: 'ai-easy-q27',
        type: 'multiple_choice',
        question: 'I _____ go to the gym three times a week now to stay healthy.',
        options: ['usually', 'used to', 'use to', 'am used to'],
        correctAnswer: 0,
        explanation: 'For present habits and routines, we use the Present Simple with adverbs of frequency like "usually" (not "used to").',
        difficulty: 'easy',
        grammarFocus: 'Used to & Usually'
      },
      {
        id: 'ai-easy-q28',
        type: 'multiple_choice',
        question: 'My mother _____ like spicy food, but now she loves it.',
        options: ['didn\'t use to', 'didn\'t used to', 'usually didn\'t', 'never would'],
        correctAnswer: 0,
        explanation: 'The negative form of "used to" is "didn\'t use to" (without the \'d\' at the end of use).',
        difficulty: 'easy',
        grammarFocus: 'Used to & Usually'
      },
      {
        id: 'ai-easy-q29',
        type: 'multiple_choice',
        question: 'Did you _____ play any musical instruments when you were at school?',
        options: ['use to', 'used to', 'usually', 'using to'],
        correctAnswer: 0,
        explanation: 'In question forms, the auxiliary "did" is used, so "used to" becomes "use to" (did you use to...).',
        difficulty: 'easy',
        grammarFocus: 'Used to & Usually'
      },
      {
        id: 'ai-easy-q30',
        type: 'multiple_choice',
        question: 'We _____ in a very small town, but now we live in a big city.',
        options: ['used to live', 'would live', 'are used to living', 'get used to living'],
        correctAnswer: 0,
        explanation: '"Live" is a state verb (durum fiili), so we cannot use "would" to describe past states. We use "used to live".',
        difficulty: 'easy',
        grammarFocus: 'Used to & Usually'
      },

      // ── Future Forms (Q31–Q35) ──
      {
        id: 'ai-easy-q31',
        type: 'multiple_choice',
        question: 'A: The phone is ringing. B: Don\'t worry, I _____ it!',
        options: ['will answer', 'am going to answer', 'answer', 'am answering'],
        correctAnswer: 0,
        explanation: 'For spontaneous decisions or offers made at the moment of speaking, we use "will".',
        difficulty: 'easy',
        grammarFocus: 'Future Forms'
      },
      {
        id: 'ai-easy-q32',
        type: 'multiple_choice',
        question: 'I _____ my doctor for a regular check-up tomorrow at 10:00 AM.',
        options: ['am seeing', 'will see', 'see', 'going to see'],
        correctAnswer: 0,
        explanation: 'For fixed personal arrangements/appointments, we use the Present Continuous: "am seeing".',
        difficulty: 'easy',
        grammarFocus: 'Future Forms'
      },
      {
        id: 'ai-easy-q33',
        type: 'multiple_choice',
        question: 'Look at those dark clouds! It _____ rain very soon.',
        options: ['is going to', 'will', 'shall', 'is raining'],
        correctAnswer: 0,
        explanation: 'For predictions based on clear present evidence (dark clouds), we use "be going to".',
        difficulty: 'easy',
        grammarFocus: 'Future Forms'
      },
      {
        id: 'ai-easy-q34',
        type: 'multiple_choice',
        question: 'I _____ to Spain this summer. I have already bought the plane tickets.',
        options: ['am going to travel', 'will travel', 'travel', 'would travel'],
        correctAnswer: 0,
        explanation: '"am going to travel" represents a pre-planned intention/decision.',
        difficulty: 'easy',
        grammarFocus: 'Future Forms'
      },
      {
        id: 'ai-easy-q35',
        type: 'multiple_choice',
        question: 'Shall we go to the beach this afternoon? I think it _____ sunny.',
        options: ['will be', 'is going to be', 'is being', 'shall be'],
        correctAnswer: 0,
        explanation: 'For general predictions about the future based on opinions or thoughts (I think), we use "will".',
        difficulty: 'easy',
        grammarFocus: 'Future Forms'
      },

      // ── Conditionals & Wordpower (Q36–Q40) ──
      {
        id: 'ai-easy-q36',
        type: 'multiple_choice',
        question: 'If you heat ice, it _____ into water.',
        options: ['melts', 'will melt', 'melted', 'is melting'],
        correctAnswer: 0,
        explanation: 'This is a Zero Conditional sentence representing a general scientific truth: If + Present Simple, Present Simple.',
        difficulty: 'easy',
        grammarFocus: 'Zero and First Conditionals'
      },
      {
        id: 'ai-easy-q37',
        type: 'multiple_choice',
        question: 'If I study hard tonight, I _____ my English exam tomorrow.',
        options: ['will pass', 'pass', 'passed', 'am passing'],
        correctAnswer: 0,
        explanation: 'This is a First Conditional sentence representing a highly probable future result: If + Present Simple, will + verb.',
        difficulty: 'easy',
        grammarFocus: 'Zero and First Conditionals'
      },
      {
        id: 'ai-easy-q38',
        type: 'multiple_choice',
        question: 'We won\'t go on a picnic tomorrow _____ it stops raining.',
        options: ['unless', 'if', 'when', 'in case'],
        correctAnswer: 0,
        explanation: '"Unless" means "if not". We won\'t go if it doesn\'t stop raining (yağmur durmazsa gitmeyeceğiz).',
        difficulty: 'easy',
        grammarFocus: 'Zero and First Conditionals'
      },
      {
        id: 'ai-easy-q39',
        type: 'multiple_choice',
        question: 'Please come in and _____ at home!',
        options: ['make yourself', 'help yourself', 'do yourself', 'enjoy yourself'],
        correctAnswer: 0,
        explanation: '"make yourself at home" is a fixed collocation meaning "feel comfortable in my home" (kendi evindeymiş gibi hisset).',
        difficulty: 'easy',
        grammarFocus: 'Wordpower: yourself'
      },
      {
        id: 'ai-easy-q40',
        type: 'multiple_choice',
        question: 'I was already full after dinner, but the chocolate cake looked so delicious that I decided to _____.',
        options: ['have a bite', 'have a look', 'have fun', 'have a go'],
        correctAnswer: 0,
        explanation: '"have a bite" (or have a bite to eat) means to eat a small amount of food.',
        difficulty: 'easy',
        grammarFocus: 'Wordpower: have'
      }
    ]
  }
];
