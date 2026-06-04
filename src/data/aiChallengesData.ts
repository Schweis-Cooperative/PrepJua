import type { ExamSet } from '../types/exam';

export const aiChallengeExamSets: ExamSet[] = [
  {
    id: 'ai-challenge-easy-1',
    title: 'AI Challenge — Easy Level Exam',
    description: 'A comprehensive 40-question practice mock exam powered by AI. Evaluates core B1+ grammar, structure, and vocabulary.',
    difficulty: 'easy',
    grammarFocus: 'Subject/Object Questions, Tenses, Conditionals, Used to, Travel & Food Vocabulary',
    questions: [
      {
        id: 'ai-q1',
        type: 'multiple_choice',
        question: 'Who _____ you with your English homework yesterday?',
        options: ['helped', 'did help', 'does help', 'helping'],
        correctAnswer: 0,
        explanation: 'Özne sorusudur (Who doğrudan özneyi sorar). Bu yüzden "did" yardımcı fiili kullanılmaz ve fiilin 2. hali doğrudan yazılır.',
        difficulty: 'easy',
        grammarFocus: 'Subject Questions'
      },
      {
        id: 'ai-q2',
        type: 'multiple_choice',
        question: 'What _____ you discuss during the meeting yesterday morning?',
        options: ['did', 'does', 'were', 'had'],
        correctAnswer: 0,
        explanation: 'Nesne sorusudur (Soru "neyi tartıştınız" anlamına gelir). Geçmiş zaman nesne sorularında yardımcı fiil olarak "did" kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Object Questions'
      },
      {
        id: 'ai-q3',
        type: 'multiple_choice',
        question: 'My sister usually _____ to music while studying, but today she is studying in silence.',
        options: ['listens', 'is listening', 'listen', 'listened'],
        correctAnswer: 0,
        explanation: 'Genel alışkanlıklar ve rutinler için Geniş Zaman (Present Simple) kullanılır. Zaman zarfı "usually" bu kullanımı gerektirir.',
        difficulty: 'easy',
        grammarFocus: 'Present Simple'
      },
      {
        id: 'ai-q4',
        type: 'multiple_choice',
        question: 'Look at the sky! The weather _____ very quickly right now.',
        options: ['is changing', 'changes', 'changed', 'has changed'],
        correctAnswer: 0,
        explanation: 'Konuşma anında gerçekleşen veya değişmekte olan durumlar için Şimdiki Zaman (Present Continuous) kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Present Continuous'
      },
      {
        id: 'ai-q5',
        type: 'multiple_choice',
        question: 'I _____ my key last night, but luckily I found it this morning.',
        options: ['lost', 'have lost', 'lose', 'was losing'],
        correctAnswer: 0,
        explanation: 'Geçmişte belirli bir zamanda ("last night") gerçekleşip bitmiş eylemler için Past Simple kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Past Simple'
      },
      {
        id: 'ai-q6',
        type: 'multiple_choice',
        question: 'We _____ each other since we were children at primary school.',
        options: ['have known', 'know', 'knew', 'have been knowing'],
        correctAnswer: 0,
        explanation: '"Since" ile başlayan zaman belirteciyle Present Perfect kullanılır. "Know" bir durum fiili (state verb) olduğu için "-ing" takısı almaz.',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect'
      },
      {
        id: 'ai-q7',
        type: 'multiple_choice',
        question: 'She is very tired because she _____ in the garden for three hours.',
        options: ['has been working', 'is working', 'works', 'worked'],
        correctAnswer: 0,
        explanation: 'Geçmişte başlayıp konuşma anına kadar kesintisiz devam eden ve etkisi süren eylemler için Present Perfect Continuous kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect Continuous'
      },
      {
        id: 'ai-q8',
        type: 'multiple_choice',
        question: 'While my mother _____ dinner, the phone suddenly rang.',
        options: ['was cooking', 'cooked', 'has cooked', 'is cooking'],
        correctAnswer: 0,
        explanation: 'Geçmişte devam eden bir eylemin (Past Continuous), başka bir anlık eylem tarafından (Past Simple) kesildiğini belirtmek için "while" ile Past Continuous kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Past Continuous'
      },
      {
        id: 'ai-q9',
        type: 'multiple_choice',
        question: 'By the time we arrived at the cinema, the movie _____ already started.',
        options: ['had', 'was', 'has', 'did'],
        correctAnswer: 0,
        explanation: 'Geçmişte bir eylem gerçekleşmeden önce tamamlanmış başka bir eylemi ifade etmek için Past Perfect (had + V3) kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Past Perfect'
      },
      {
        id: 'ai-q10',
        type: 'multiple_choice',
        question: 'When I was a child, I _____ like eating vegetables, but now I love them.',
        options: ["didn't use to", "didn't used to", "not used to", "used to not"],
        correctAnswer: 0,
        explanation: 'Geçmişteki eski alışkanlıklar veya durumların olumsuz hali "didn\'t use to" şeklinde yazılır. "use" yalın haldedir.',
        difficulty: 'easy',
        grammarFocus: 'Used to'
      },
      {
        id: 'ai-q11',
        type: 'multiple_choice',
        question: 'I am thirsty. I think I _____ buy a cold bottle of water from the shop.',
        options: ['will', 'am going to', 'am buying', 'shall'],
        correctAnswer: 0,
        explanation: 'Konuşma anında verilen anlık kararlar (spontaneous decisions) için "will" kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Future Will'
      },
      {
        id: 'ai-q12',
        type: 'multiple_choice',
        question: 'We have already bought the tickets. We _____ to Rome next Tuesday.',
        options: ['are flying', 'will fly', 'fly', 'are going fly'],
        correctAnswer: 0,
        explanation: 'Önceden planlanmış, ayarlanmış ve hazırlıkları tamamlanmış gelecek zaman planları için Present Continuous (Şimdiki Zaman) kullanımı yaygındır.',
        difficulty: 'easy',
        grammarFocus: 'Present Continuous for Future'
      },
      {
        id: 'ai-q13',
        type: 'multiple_choice',
        question: 'If you _____ ice, it melts and turns into water.',
        options: ['heat', 'will heat', 'heated', 'are heating'],
        correctAnswer: 0,
        explanation: 'Genel geçer doğrulardan bahsettiğimiz için Zero Conditional (If + Present Simple, Present Simple) kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Zero Conditional'
      },
      {
        id: 'ai-q14',
        type: 'multiple_choice',
        question: 'If it rains tomorrow, we _____ the football match.',
        options: ['will cancel', 'cancel', 'cancelled', 'are cancelling'],
        correctAnswer: 0,
        explanation: 'Gelecekte olası durumlar için First Conditional (If + Present Simple, will + V1) kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'First Conditional'
      },
      {
        id: 'ai-q15',
        type: 'multiple_choice',
        question: 'We will go for a picnic tomorrow _____ it rains heavily.',
        options: ['unless', 'if', 'in case', 'since'],
        correctAnswer: 0,
        explanation: '"Unless", "-medikçe, -mazsa" (if not) anlamına gelir. "Yağmur şiddetli yağmadıkça pikniğe gideceğiz" anlamı uygundur.',
        difficulty: 'easy',
        grammarFocus: 'Conditionals with Unless'
      },
      {
        id: 'ai-q16',
        type: 'multiple_choice',
        question: 'My brother and I have a lot _____ common; we both love playing tennis and guitar.',
        options: ['in', 'on', 'with', 'at'],
        correctAnswer: 0,
        explanation: '"Ortak çok yönü olmak" ifadesi İngilizce\'de "have a lot in common" kalıbı ile söylenir.',
        difficulty: 'easy',
        grammarFocus: 'Prepositions'
      },
      {
        id: 'ai-q17',
        type: 'multiple_choice',
        question: 'She gets _____ well with her classmates, so she has many friends.',
        options: ['on', 'up', 'over', 'by'],
        correctAnswer: 0,
        explanation: '"Biriyle iyi geçinmek / anlaşmak" phrasal verb\'ü "get on well with" şeklindedir.',
        difficulty: 'easy',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-q18',
        type: 'multiple_choice',
        question: 'I take _____ my father; we both have blue eyes and love painting.',
        options: ['after', 'up', 'over', 'off'],
        correctAnswer: 0,
        explanation: '"Bir aile büyüğüne (fiziksel veya karakter olarak) benzemek" phrasal verb\'ü "take after"dır.',
        difficulty: 'easy',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-q19',
        type: 'multiple_choice',
        question: 'They used to be best friends, but they began to _____ apart after moving to different cities.',
        options: ['grow', 'get', 'take', 'go'],
        correctAnswer: 0,
        explanation: '"Zamanla birbirinden uzaklaşmak / arkadaşlığın soğuması" phrasal verb\'ü "grow apart" olarak ifade edilir.',
        difficulty: 'easy',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-q20',
        type: 'multiple_choice',
        question: 'It took me several months to _____ to the cold climate of London.',
        options: ['adapt', 'exchange', 'swap', 'replace'],
        correctAnswer: 0,
        explanation: '"Yeni bir duruma uyum sağlamak / adapte olmak" fiili "adapt (to)" kelimesidir.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q21',
        type: 'multiple_choice',
        question: 'We decided to _____ seats because I wanted to sit next to the window.',
        options: ['swap', 'convert', 'transform', 'vary'],
        correctAnswer: 0,
        explanation: '"Kendi aralarında yer değiştirmek / takas etmek" (gayriresmi dilde) "swap" fiiliyle ifade edilir.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q22',
        type: 'multiple_choice',
        question: 'The government wants to protect _____ species like pandas and tigers from disappearing.',
        options: ['endangered', 'dangerous', 'filthy', 'enormous'],
        correctAnswer: 0,
        explanation: '"Nesli tehlike altında olan türler" İngilizce\'de "endangered species" olarak adlandırılır.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q23',
        type: 'multiple_choice',
        question: 'We should _____ paper, glass, and plastic to protect our environment.',
        options: ['recycle', 'damage', 'cut down', 'solve'],
        correctAnswer: 0,
        explanation: '"Geri dönüştürmek" anlamına gelen "recycle" fiili, çevre koruma bağlamında en uygun kelimedir.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q24',
        type: 'multiple_choice',
        question: 'Instead of complaining, we need to take action and _____ the problem together.',
        options: ['tackle', 'cause', 'face to', 'know about'],
        correctAnswer: 0,
        explanation: '"Bir sorunu ele almak / çözmeye çalışmak / üstesinden gelmek" fiili "tackle" kelimesidir.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q25',
        type: 'multiple_choice',
        question: 'I don\'t like raw lemons because they taste very _____.',
        options: ['sour', 'sweet', 'bitter', 'spicy'],
        correctAnswer: 0,
        explanation: 'Limonun tadı "ekşi"dir, bu yüzden doğru sıfat "sour"dır.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q26',
        type: 'multiple_choice',
        question: 'These potato chips are very fresh and _____; you can hear the sound when I eat them.',
        options: ['crunchy', 'creamy', 'bitter', 'raw'],
        correctAnswer: 0,
        explanation: 'Isırıldığında ses çıkaran, kıtır/çıtır yiyecekleri tarif etmek için "crunchy" sıfatı kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q27',
        type: 'multiple_choice',
        question: 'Put the milk in the fridge, or it will _____ bad.',
        options: ['go', 'make', 'do', 'take'],
        correctAnswer: 0,
        explanation: 'Yiyeceklerin bozulmasını ifade etmek için "go bad" kalıbı kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Collocations'
      },
      {
        id: 'ai-q28',
        type: 'multiple_choice',
        question: 'The alarm clock _____ off at 6 AM every morning.',
        options: ['goes', 'runs', 'starts', 'rings'],
        correctAnswer: 0,
        explanation: 'Alarmın çalmasını/patlamasını ifade etmek için "go off" (alarm goes off) phrasal verb\'ü kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-q29',
        type: 'multiple_choice',
        question: 'You cannot get on the airplane without showing your _____ pass.',
        options: ['boarding', 'crossing', 'campsite', 'vending'],
        correctAnswer: 0,
        explanation: 'Uçağa biniş kartına "boarding pass" denir.',
        difficulty: 'easy',
        grammarFocus: 'Compound Nouns'
      },
      {
        id: 'ai-q30',
        type: 'multiple_choice',
        question: 'During the _____ hour, the public transport is extremely crowded.',
        options: ['rush', 'jam', 'light', 'lights'],
        correctAnswer: 0,
        explanation: 'Trafiğin ve işe gidiş-dönüş saatlerinin en yoğun olduğu zamana "rush hour" denir.',
        difficulty: 'easy',
        grammarFocus: 'Compound Nouns'
      },
      {
        id: 'ai-q31',
        type: 'multiple_choice',
        question: 'Please be quiet! The baby _____ right now.',
        options: ['is sleeping', 'sleeps', 'slept', 'has slept'],
        correctAnswer: 0,
        explanation: '"Right now" ve "Please be quiet!" ifadeleri eylemin şu an devam ettiğini gösterir, bu yüzden Present Continuous kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Present Continuous'
      },
      {
        id: 'ai-q32',
        type: 'multiple_choice',
        question: '_____ you ever visited a rainforest?',
        options: ['Have', 'Did', 'Were', 'Do'],
        correctAnswer: 0,
        explanation: 'Hayat tecrübelerini sorarken "Have you ever + V3?" yapısı (Present Perfect) kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Present Perfect'
      },
      {
        id: 'ai-q33',
        type: 'multiple_choice',
        question: 'I _____ along the street when I suddenly saw my old English teacher.',
        options: ['was walking', 'walked', 'had walked', 'have walked'],
        correctAnswer: 0,
        explanation: 'Geçmişte devam eden bir eylem sırasında başka bir eylemin gerçekleşmesini anlatmak için Past Continuous (was walking) kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Past Continuous'
      },
      {
        id: 'ai-q34',
        type: 'multiple_choice',
        question: 'We _____ live in a small village, but now we live in a big city.',
        options: ['used to', 'usually', 'would', 'are used to'],
        correctAnswer: 0,
        explanation: 'Geçmişteki kalıcı durumları (live fiili gibi durum bildiren fiillerle) anlatmak için "used to" kullanılır. "Would" bu tür durum fiilleriyle kullanılmaz.',
        difficulty: 'easy',
        grammarFocus: 'Used to'
      },
      {
        id: 'ai-q35',
        type: 'multiple_choice',
        question: 'I promise I _____ call you as soon as I arrive at the hotel.',
        options: ['will', 'am going to', 'am calling', 'shall'],
        correctAnswer: 0,
        explanation: 'Söz verme (promises) cümlelerinde "will" kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Future Will'
      },
      {
        id: 'ai-q36',
        type: 'multiple_choice',
        question: 'If you study hard, you _____ pass the English exam easily.',
        options: ['will', 'would', 'did', 'passed'],
        correctAnswer: 0,
        explanation: 'First Conditional yapısında koşul cümlesi Present Simple ise ana cümle "will + V1" yapısında olur.',
        difficulty: 'easy',
        grammarFocus: 'First Conditional'
      },
      {
        id: 'ai-q37',
        type: 'multiple_choice',
        question: 'My phone is broken. Can you help me _____ this problem?',
        options: ['solve', 'cause', 'face', 'damage'],
        correctAnswer: 0,
        explanation: '"Bir problemi çözmek" ifadesi "solve the problem" şeklinde kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q38',
        type: 'multiple_choice',
        question: 'This soup is delicious because it contains fresh _____ like parsley and mint.',
        options: ['herbs', 'cuisines', 'campsites', 'vending'],
        correctAnswer: 0,
        explanation: 'Maydanoz (parsley) ve nane (mint) gibi taze baharat/otlar için "herbs" kelimesi kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-q39',
        type: 'multiple_choice',
        question: 'I had a job interview yesterday and it went really _____. I got the job!',
        options: ['well', 'badly', 'off', 'wrong'],
        correctAnswer: 0,
        explanation: 'Bir işin iyi gitmesini ifade etmek için "go well" (went well) kalıbı kullanılır.',
        difficulty: 'easy',
        grammarFocus: 'Collocations'
      },
      {
        id: 'ai-q40',
        type: 'multiple_choice',
        question: 'We were late for the flight because we got stuck in a traffic _____.',
        options: ['jam', 'lights', 'crossing', 'lane'],
        correctAnswer: 0,
        explanation: 'Trafik sıkışıklığına girmek "get stuck in a traffic jam" ifadesiyle söylenir.',
        difficulty: 'easy',
        grammarFocus: 'Compound Nouns'
      }
    ]
  }
];
