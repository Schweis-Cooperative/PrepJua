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
  },
  {
    id: 'ai-challenge-medium-1',
    title: 'AI Challenge — Medium Level Exam',
    description: 'An intermediate 40-question practice mock exam powered by AI. Evaluates B1/B2 grammar structures and vocabulary.',
    difficulty: 'medium',
    grammarFocus: 'Narrative Tenses, Passives, Modals of Obligation/Speculation, Second/Third Conditionals, Relative Clauses',
    questions: [
      {
        id: 'ai-med-q1',
        type: 'multiple_choice',
        question: 'I _____ this book all afternoon, but I _____ only fifty pages so far.',
        options: ['have been reading / have read', 'have read / have been reading', 'am reading / read', 'was reading / have read'],
        correctAnswer: 0,
        explanation: 'Süregiden bir eylemi ve onun geçici etkisini anlatmak için ilk kısımda Present Perfect Continuous ("have been reading"), şu ana kadar elde edilen miktarı/sonucu belirtmek için ise ikinci kısımda Present Perfect Simple ("have read") kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Present Perfect Continuous vs Simple'
      },
      {
        id: 'ai-med-q2',
        type: 'multiple_choice',
        question: 'By the time the ambulance arrived, the police officers _____ already _____ the injured driver.',
        options: ['had / rescued', 'were / rescuing', 'did / rescue', 'have / rescued'],
        correctAnswer: 0,
        explanation: 'Geçmişte gerçekleşen bir olaydan ("arrived") daha önce tamamlanmış olan bir eylemi anlatmak için Past Perfect Tense ("had rescued") kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Past Perfect'
      },
      {
        id: 'ai-med-q3',
        type: 'multiple_choice',
        question: 'When we were children, my grandfather _____ always take us to the local park, but he didn\'t use to _____ pets in the house.',
        options: ['would / keep', 'used to / keeping', 'would / keeping', 'used / keep'],
        correctAnswer: 0,
        explanation: 'Geçmişteki tekrarlanan aksiyonlar için "would" kullanılabilir. "Didn\'t use to" yapısından sonra ise yalın fiil ("keep") gelir.',
        difficulty: 'medium',
        grammarFocus: 'Used to & Would'
      },
      {
        id: 'ai-med-q4',
        type: 'multiple_choice',
        question: 'Although the storm was severe, the pilot _____ land the plane safely on the second attempt.',
        options: ['was able to', 'could', 'can', 'managed'],
        correctAnswer: 0,
        explanation: 'Geçmişte yaşanmış belirli bir zorluk durumunda başarıyla tamamlanan tekil bir eylemi anlatmak için "could" yerine "was able to" veya "managed to" kullanılır. Seçeneklerde "managed" yanında "to" olmadığı için "was able to" doğrudur.',
        difficulty: 'medium',
        grammarFocus: 'Modals of Ability'
      },
      {
        id: 'ai-med-q5',
        type: 'multiple_choice',
        question: 'Please don\'t call me at 9 PM tonight because I _____ my favorite TV series at that time.',
        options: ['will be watching', 'will watch', 'will have watched', 'am going to watch'],
        correctAnswer: 0,
        explanation: 'Gelecekte belirli bir zaman diliminde devam ediyor olacak sürekli bir eylemi anlatmak için Future Continuous Tense ("will be watching") kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Future Continuous'
      },
      {
        id: 'ai-med-q6',
        type: 'multiple_choice',
        question: 'By the end of next month, our team _____ the development of the new mobile application.',
        options: ['will have completed', 'will be completing', 'will complete', 'completes'],
        correctAnswer: 0,
        explanation: 'Gelecekteki belirli bir noktaya ("by the end of next month") kadar tamamlanmış olacak eylemleri anlatmak için Future Perfect Tense ("will have completed") kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Future Perfect'
      },
      {
        id: 'ai-med-q7',
        type: 'multiple_choice',
        question: 'You _____ wear a tie in the office, but most employees prefer to wear one anyway.',
        options: ["don't have to", "mustn't", "shouldn't", "ought not to"],
        correctAnswer: 0,
        explanation: 'Zorunluluk olmaması durumunu belirtmek için "don\'t have to" (zorunda değilsin) kullanılır. "Mustn\'t" ise yasak belirtir.',
        difficulty: 'medium',
        grammarFocus: 'Modals of Obligation'
      },
      {
        id: 'ai-med-q8',
        type: 'multiple_choice',
        question: 'I had a great time at the party, but I _____ stay up so late because I had an early meeting the next morning.',
        options: ['shouldn’t have', 'mustn’t have', 'didn’t need', 'had to'],
        correctAnswer: 0,
        explanation: 'Geçmişte yapılmaması gereken ama yapılan bir eyleme yönelik pişmanlık veya eleştiri belirtmek için "shouldn\'t have + V3" yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Past Modals of Obligation'
      },
      {
        id: 'ai-med-q9',
        type: 'multiple_choice',
        question: 'Look! The lights in their house are turned off and their car is gone. They _____ be out.',
        options: ['must', 'can\'t', 'might not', 'should'],
        correctAnswer: 0,
        explanation: 'Güçlü bir kanıta dayanarak yapılan olumlu çıkarımlarda (yüksek olasılık) "must" modal yapısı kullanılır ("dışarıda olmalılar").',
        difficulty: 'medium',
        grammarFocus: 'Modals of Deduction'
      },
      {
        id: 'ai-med-q10',
        type: 'multiple_choice',
        question: 'The window is broken and some money is missing. The thief _____ entered through the kitchen window.',
        options: ['must have', 'can\'t have', 'should have', 'would have'],
        correctAnswer: 0,
        explanation: 'Geçmişe yönelik güçlü bir kanıta dayanan olumlu çıkarımlarda "must have + V3" yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Past Modals of Deduction'
      },
      {
        id: 'ai-med-q11',
        type: 'multiple_choice',
        question: 'I tried to call both of my friends, but _____ of them answered their phones because they were in class.',
        options: ['neither', 'either', 'both', 'none'],
        correctAnswer: 0,
        explanation: 'İki kişiden veya nesneden bahsederken, ikisinin de olumsuz olduğunu belirtmek için "neither (of)" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Quantifiers'
      },
      {
        id: 'ai-med-q12',
        type: 'multiple_choice',
        question: 'You can choose _____ the red jacket or the blue one; unfortunately, you cannot have both.',
        options: ['either', 'neither', 'both', 'none'],
        correctAnswer: 0,
        explanation: 'İki seçenekten birini seçme durumunu ("ya ... ya da ...") ifade etmek için "either ... or ..." kalıbı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Quantifiers'
      },
      {
        id: 'ai-med-q13',
        type: 'multiple_choice',
        question: 'David said, \'I have already booked the flight.\' -> David told me that he _____ already _____ the flight.',
        options: ['had / booked', 'has / booked', 'was / booking', 'would / book'],
        correctAnswer: 0,
        explanation: 'Dolaylı anlatımda (Reported Speech), ana cümle geçmiş zaman ("told") ile kurulduğunda aktarılan cümledeki Present Perfect, Past Perfect\'e ("had booked") dönüşür.',
        difficulty: 'medium',
        grammarFocus: 'Reported Speech'
      },
      {
        id: 'ai-med-q14',
        type: 'multiple_choice',
        question: 'The manager _____ us that the project deadline had been extended by one week.',
        options: ['told', 'said', 'explained', 'suggested'],
        correctAnswer: 0,
        explanation: '"Tell" fiili kendisinden sonra dolaysız bir nesne (object - "us") alır. "Said" veya "explained" fiillerinden sonra doğrudan nesne gelmez (said to us / explained to us şeklinde olmalıdır).',
        difficulty: 'medium',
        grammarFocus: 'Reported Speech'
      },
      {
        id: 'ai-med-q15',
        type: 'multiple_choice',
        question: 'She decided to avoid _____ coffee in the evening to improve her sleep quality.',
        options: ['drinking', 'to drink', 'drink', 'to drinking'],
        correctAnswer: 0,
        explanation: '"Avoid" fiilinden sonra gelen diğer fiil gerund (-ing) yapısında olmalıdır.',
        difficulty: 'medium',
        grammarFocus: 'Verb Patterns'
      },
      {
        id: 'ai-med-q16',
        type: 'multiple_choice',
        question: 'The teacher encouraged all the students _____ in the speaking competition.',
        options: ['to participate', 'participating', 'participate', 'to participating'],
        correctAnswer: 0,
        explanation: '"Encourage someone to do something" yapısı gereği fiil infinitive ("to + V1") biçiminde kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Verb Patterns'
      },
      {
        id: 'ai-med-q17',
        type: 'multiple_choice',
        question: 'The old library building _____ down next month to build a modern cultural center.',
        options: ['will be knocked', 'is knocked', 'will knock', 'was knocked'],
        correctAnswer: 0,
        explanation: 'Gelecek zaman pasif yapısı (Future Passive) "will be + V3" (will be knocked) şeklinde kurulur.',
        difficulty: 'medium',
        grammarFocus: 'The Passive'
      },
      {
        id: 'ai-med-q18',
        type: 'multiple_choice',
        question: 'Our school website _____ by a professional web design company last year.',
        options: ['was designed', 'designed', 'has been designed', 'is designed'],
        correctAnswer: 0,
        explanation: 'Geçmiş zaman edilgen yapısı (Past Passive) "was/were + V3" ile kurulur. Eylemin kimin tarafından yapıldığını belirtmek için "by" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'The Passive'
      },
      {
        id: 'ai-med-q19',
        type: 'multiple_choice',
        question: 'The woman _____ suitcase was lost at the airport went to the customer service office.',
        options: ['whose', 'who', 'whom', 'which'],
        correctAnswer: 0,
        explanation: 'Sahiplik bildiren relative clause yapılarında "whose" kullanılır ("bavulu kaybolan kadın").',
        difficulty: 'medium',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-med-q20',
        type: 'multiple_choice',
        question: 'Our hotel room, _____ had a beautiful view of the sea, was very spacious.',
        options: ['which', 'that', 'where', 'whose'],
        correctAnswer: 0,
        explanation: 'Tanımlayıcı olmayan relative clause (non-defining relative clause - virgüller arasında yazılan) yapılarında cansız nesneler için "that" kullanılamaz, "which" tercih edilmelidir.',
        difficulty: 'medium',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-med-q21',
        type: 'multiple_choice',
        question: 'If I _____ more free time, I _____ take up a new hobby like photography.',
        options: ['had / would', 'have / will', 'had / will', 'would have / had'],
        correctAnswer: 0,
        explanation: 'Şu anki hayali veya gerçek dışı durumları anlatmak için Second Conditional (If + Past Simple, would + V1) yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Second Conditional'
      },
      {
        id: 'ai-med-q22',
        type: 'multiple_choice',
        question: 'If we _____ a map with us, we _____ got lost in the forest yesterday.',
        options: ["had taken / wouldn't have", "took / wouldn't have", "had taken / won't have", "take / wouldn't"],
        correctAnswer: 0,
        explanation: 'Geçmişte yaşanmış gerçek dışı/gerçekleşmemiş bir durumu anlatmak için Third Conditional (If + Past Perfect, would have + V3) yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Third Conditional'
      },
      {
        id: 'ai-med-q23',
        type: 'multiple_choice',
        question: 'Over the years, the two childhood friends slowly _____ apart due to their busy lives.',
        options: ['grew', 'went', 'got', 'kept'],
        correctAnswer: 0,
        explanation: '"Zamanla birbirinden uzaklaşmak / kopmak" phrasal verb\'ü "grow apart"dır (geçmiş zaman hali "grew apart").',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q24',
        type: 'multiple_choice',
        question: 'He really _____ after his mother; they are both very creative and passionate about art.',
        options: ['takes', 'gets', 'grows', 'brings'],
        correctAnswer: 0,
        explanation: '"Aile büyüklerinden birine benzemek" phrasal verb\'ü "take after"dır.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q25',
        type: 'multiple_choice',
        question: 'The old factory building was _____ into a modern art gallery last year.',
        options: ['converted', 'exchanged', 'swapped', 'replaced'],
        correctAnswer: 0,
        explanation: '"Bir binayı veya nesneyi başka bir forma/işleve dönüştürmek" fiili "convert (into)"dur.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q26',
        type: 'multiple_choice',
        question: 'I had to _____ my old computer with a new one because it was too slow for my work.',
        options: ['replace', 'alter', 'adjust', 'convert'],
        correctAnswer: 0,
        explanation: '"Eski veya çalışmayan bir şeyi yenisiyle değiştirmek/yerine koymak" fiili "replace"dir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q27',
        type: 'multiple_choice',
        question: 'Many unique animal species are facing extinction because their natural _____ is being destroyed.',
        options: ['habitat', 'rainforest', 'valley', 'stream'],
        correctAnswer: 0,
        explanation: 'Hayvanların "doğal yaşam alanı/ortamı" "natural habitat" olarak ifade edilir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q28',
        type: 'multiple_choice',
        question: 'The oil spill in the ocean has caused severe _____ to the local marine life.',
        options: ['damage', 'tackle', 'recycle', 'solve'],
        correctAnswer: 0,
        explanation: '"Zarar / hasar" anlamına gelen "damage" kelimesi "cause damage" (zarar vermek) kalıbı ile sıkça kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q29',
        type: 'multiple_choice',
        question: 'The local government is trying to _____ the issue of traffic congestion by expanding the subway network.',
        options: ['tackle', 'cause', 'face', 'aware'],
        correctAnswer: 0,
        explanation: '"Bir sorunla mücadele etmek / üstesinden gelmeye çalışmak" fiili "tackle" kelimesidir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q30',
        type: 'multiple_choice',
        question: 'This soup has a very _____ texture because it contains fresh cream and butter.',
        options: ['creamy', 'spicy', 'sour', 'bitter'],
        correctAnswer: 0,
        explanation: 'Kremalı veya yumuşak dokulu yiyecekleri tarif etmek için "creamy" sıfatı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q31',
        type: 'multiple_choice',
        question: 'Be careful! The chicken curry is extremely _____; it has a lot of red hot chillies in it.',
        options: ['spicy', 'crunchy', 'bitter', 'raw'],
        correctAnswer: 0,
        explanation: 'Baharatlı ve acılı yiyecekleri tarif etmek için "spicy" sıfatı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q32',
        type: 'multiple_choice',
        question: 'The milk in the carton has gone _____; it smells terrible, so you should throw it away.',
        options: ['off', 'well', 'wrong', 'badly'],
        correctAnswer: 0,
        explanation: 'Süt ve et gibi yiyeceklerin bozulmasını/kokmasını belirtmek için "go off" phrasal verb\'ü kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-med-q33',
        type: 'multiple_choice',
        question: 'Although we made careful plans, everything went _____ at the last minute.',
        options: ['wrong', 'off', 'well', 'badly'],
        correctAnswer: 0,
        explanation: 'İşlerin ters gitmesi veya bozulmasını belirtmek için "go wrong" kalıbı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Collocations'
      },
      {
        id: 'ai-med-q34',
        type: 'multiple_choice',
        question: 'We were stuck in a massive traffic _____ on our way to the airport and missed our flight.',
        options: ['jam', 'lights', 'crossing', 'lane'],
        correctAnswer: 0,
        explanation: '"Trafik sıkışıklığı" "traffic jam" olarak adlandırılır.',
        difficulty: 'medium',
        grammarFocus: 'Compound Nouns'
      },
      {
        id: 'ai-med-q35',
        type: 'multiple_choice',
        question: 'You must stand on the platform behind the yellow line and wait for the train to arrive at the station _____.',
        options: ['platform', 'boarding', 'campsite', 'crossing'],
        correctAnswer: 0,
        explanation: 'İstasyonlarda trenlerin yanaştığı perona/yola "platform" denir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q36',
        type: 'multiple_choice',
        question: 'I don\'t mind _____ you with your project, but I can\'t start until I finish my own work.',
        options: ['helping', 'to help', 'help', 'to helping'],
        correctAnswer: 0,
        explanation: '"Mind" fiilinden sonra gelen fiil gerund (-ing) yapısında olmalıdır.',
        difficulty: 'medium',
        grammarFocus: 'Verb Patterns'
      },
      {
        id: 'ai-med-q37',
        type: 'multiple_choice',
        question: 'A: Did you like the two movies? B: Honestly, I thought _____ of them were quite boring.',
        options: ['both', 'either', 'neither', 'none'],
        correctAnswer: 0,
        explanation: 'İki şeyin her ikisini de kapsayarak olumlu fiille ("were") anlatırken "both" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Quantifiers'
      },
      {
        id: 'ai-med-q38',
        type: 'multiple_choice',
        question: 'The village _____ I spent my childhood holidays is now a popular tourist destination.',
        options: ['where', 'which', 'that', 'whose'],
        correctAnswer: 0,
        explanation: 'Yer bildiren relative clause yapılarında "where" (veya in which) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-med-q39',
        type: 'multiple_choice',
        question: 'Unless we _____ our carbon footprint immediately, climate change _____ get much worse.',
        options: ['reduce / will', 'will reduce / will', 'reduced / would', 'reduce / does'],
        correctAnswer: 0,
        explanation: '"Unless" cümlesinde Present Simple ("reduce") kullanılır, ana cümlede ise gelecek zaman tahmini için "will" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Conditionals'
      },
      {
        id: 'ai-med-q40',
        type: 'multiple_choice',
        question: 'If they _____ the train timetable, they _____ have missed their connection.',
        options: ["had checked / wouldn't", "checked / wouldn't", "have checked / won't", "had checked / didn't"],
        correctAnswer: 0,
        explanation: 'Geçmişteki gerçek dışı durumu anlatan Third Conditional yapısında conditional clause "had + V3" (had checked), main clause ise "would/could/might not + have + V3" (wouldn\'t have missed) yapısındadır.',
        difficulty: 'medium',
        grammarFocus: 'Third Conditional'
      }
    ]
  }
];
