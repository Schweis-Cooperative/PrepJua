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
        explanation: '"Ortak çok yönü olmak" ifadesi İngilizce\'de "have a lot in common" kalıbı ile söujenir.',
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
        explanation: 'Trafik sıkışıklığına girmek "get stuck in a traffic jam" ifadesiyle söujenir.',
        difficulty: 'easy',
        grammarFocus: 'Compound Nouns'
      }
    ]
  },
  {
    id: 'ai-challenge-medium-1',
    title: 'AI Challenge — Medium Level Exam',
    description: 'A comprehensive 40-question practice mock exam powered by AI. Evaluates intermediate (B1/B2) grammar, structure, and vocabulary.',
    difficulty: 'medium',
    grammarFocus: 'Narrative Tenses, Modals, Causatives, Conditionals, Relative Clauses, Phrasal Verbs, Word Formation',
    questions: [
      {
        id: 'ai-med-q1',
        type: 'multiple_choice',
        question: 'By the time the rescue team finally reached the stranded climbers, they _____ for over twelve hours in the freezing storm.',
        options: ['had been waiting', 'were waiting', 'have been waiting', 'would wait'],
        correctAnswer: 0,
        explanation: 'Geçmişte başka bir eylemden önce başlayıp o ana kadar devam eden eylemin süresini belirtmek için Past Perfect Continuous (had been waiting) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Past Perfect Continuous'
      },
      {
        id: 'ai-med-q2',
        type: 'multiple_choice',
        question: 'David looked absolutely shocked when he heard the news. He _____ known about the secret plan beforehand.',
        options: ["can't have", "must have", "shouldn't have", "didn't need to"],
        correctAnswer: 0,
        explanation: 'Geçmişe yönelik güçlü bir olumsuz çıkarım (deduction) yapmak için "can\'t have + V3" (bilmiş olması imkansız/olamaz) yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Modals of Past Deduction'
      },
      {
        id: 'ai-med-q3',
        type: 'multiple_choice',
        question: 'I really _____ shared the draft proposal with the client before the team leader reviewed and approved it.',
        options: ["shouldn't have", "must not have", "didn't have to", "couldn't have"],
        correctAnswer: 0,
        explanation: 'Geçmişte yapılan bir hatadan dolayı pişmanlığı belirtmek için "shouldn\'t have + V3" (yapmamalıydım ama yaptım) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Modals of Regret'
      },
      {
        id: 'ai-med-q4',
        type: 'multiple_choice',
        question: 'Instead of painting the living room ourselves, we decided to have it _____ by a professional team.',
        options: ['painted', 'paint', 'painting', 'to paint'],
        correctAnswer: 0,
        explanation: 'Ettirgen yapı (Causative): "have + nesne + V3" yapısı kullanılır (bir şeyi birine yaptırmak).',
        difficulty: 'medium',
        grammarFocus: 'Causative'
      },
      {
        id: 'ai-med-q5',
        type: 'multiple_choice',
        question: 'If our local library _____ open on Sundays, I would study there instead of noisy coffee shops.',
        options: ['were', 'is', 'would be', 'had been'],
        correctAnswer: 0,
        explanation: 'Şimdiki zamanda hayali/gerçek dışı durumları anlatan Second Conditional cümlelerinde "If" kısmında Past Simple (be fiili için were) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Second Conditional'
      },
      {
        id: 'ai-med-q6',
        type: 'multiple_choice',
        question: 'If the security team had checked the cameras earlier, the thief _____ caught before escaping.',
        options: ['would have been', 'would be', 'had been', 'was'],
        correctAnswer: 0,
        explanation: 'Geçmişte gerçekleşmemiş durumlar için Third Conditional (If + Past Perfect, would have + V3) kullanılır. Pasif yapı olduğu için "would have been V3" uygundur.',
        difficulty: 'medium',
        grammarFocus: 'Third Conditional'
      },
      {
        id: 'ai-med-q7',
        type: 'multiple_choice',
        question: '_____ the severe weather warnings, the hiking group decided to continue their climb up the mountain.',
        options: ['Despite', 'Although', 'Even though', 'Whereas'],
        correctAnswer: 0,
        explanation: '"Despite" (rağmen) arkasından bir isim öbeği (noun phrase) alır. "Although" ve "Even though" ise tam cümle alır.',
        difficulty: 'medium',
        grammarFocus: 'Contrast Linkers'
      },
      {
        id: 'ai-med-q8',
        type: 'multiple_choice',
        question: 'The young candidate, _____ research proposal won the national science award, will join our lab next month.',
        options: ['whose', 'who', 'whom', 'which'],
        correctAnswer: 0,
        explanation: 'İyelik bildirmek (adayın araştırma önerisi) için ilgi zamiri olarak "whose" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-med-q9',
        type: 'multiple_choice',
        question: 'It was his lack of patience _____ ultimately caused the negotiations to fail.',
        options: ['that', 'which', 'what', 'who'],
        correctAnswer: 0,
        explanation: 'Vurgulu cümle (Cleft Sentence) yapısı: "It is/was + vurgulanan öge + that/who..." şeklinde kurulur.',
        difficulty: 'medium',
        grammarFocus: 'Cleft Sentences'
      },
      {
        id: 'ai-med-q10',
        type: 'multiple_choice',
        question: 'I distinctly remember _____ the windows before leaving the house, so someone must have broken in.',
        options: ['locking', 'to lock', 'locked', 'lock'],
        correctAnswer: 0,
        explanation: 'Geçmişte yapılmış bir eylemi hatırlamak anlamında "remember" fiilinden sonra "-ing" (gerund) gelir. (Hatırlayıp kilitledim).',
        difficulty: 'medium',
        grammarFocus: 'Verb Patterns'
      },
      {
        id: 'ai-med-q11',
        type: 'multiple_choice',
        question: 'Please don\'t forget _____ the gas valve before you go on holiday.',
        options: ['to turn off', 'turning off', 'turned off', 'turn off'],
        correctAnswer: 0,
        explanation: 'Gelecekte yapılması gereken bir şeyi unutmamak anlamında "forget" fiilinden sonra "to + infinitive" gelir.',
        difficulty: 'medium',
        grammarFocus: 'Verb Patterns'
      },
      {
        id: 'ai-med-q12',
        type: 'multiple_choice',
        question: 'Since the museum offered free admission on Thursday, we _____ pay for the tickets.',
        options: ["didn't have to", "must not", "shouldn't", "needn't have"],
        correctAnswer: 0,
        explanation: 'Geçmişte bir şeyin yapılmasına gerek olmadığını ve bu yüzden yapılmadığını ifade etmek için "didn\'t have to" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Modals of Necessity'
      },
      {
        id: 'ai-med-q13',
        type: 'multiple_choice',
        question: 'This time tomorrow, we _____ over the Alps on our way to Geneva.',
        options: ['will be flying', 'will fly', 'will have flown', 'are flying'],
        correctAnswer: 0,
        explanation: 'Gelecekte belirli bir anda devam etmekte olacak eylemler için Future Continuous (will be flying) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Future Continuous'
      },
      {
        id: 'ai-med-q14',
        type: 'multiple_choice',
        question: 'By the end of this month, the construction company _____ the entire ring road project.',
        options: ['will have completed', 'will complete', 'will be completing', 'is completing'],
        correctAnswer: 0,
        explanation: 'Gelecekte belirli bir tarihten önce tamamlanmış olacak eylemler için Future Perfect (will have + V3) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Future Perfect'
      },
      {
        id: 'ai-med-q15',
        type: 'multiple_choice',
        question: 'After two hours of intense walking, the hikers stopped _____ some fresh mountain water.',
        options: ['to drink', 'drinking', 'drink', 'to drinking'],
        correctAnswer: 0,
        explanation: 'Bir amaç doğrultusunda devam eden eylemi yarıda kesmek/durmak anlamında "stop + to infinitive" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Verb Patterns'
      },
      {
        id: 'ai-med-q16',
        type: 'multiple_choice',
        question: 'The manager\'s sudden _____ to approve the budget extension surprised the entire development team.',
        options: ['refusal', 'refuse', 'refusing', 'refused'],
        correctAnswer: 0,
        explanation: 'Boşluktan önce gelen iyelik ifadesinden ("manager\'s") sonra bir isim gelmelidir. "Refuse" fiilinin isim hali "refusal"dır.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-med-q17',
        type: 'multiple_choice',
        question: 'Dealing with constant customer complaints requires a great deal of _____ and emotional resilience.',
        options: ['patience', 'patient', 'impatient', 'patiently'],
        correctAnswer: 0,
        explanation: '"A great deal of" ifadesinden sonra sayılamayan bir isim gelmelidir. "Patient" sıfatının isim hali "patience"tır.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-med-q18',
        type: 'multiple_choice',
        question: 'We had to _____ our camping trip because we did not prepare enough emergency supplies.',
        options: ['cut short', 'run out of', 'fall out with', 'put off'],
        correctAnswer: 0,
        explanation: 'Bir etkinliği/seyahati beklenenden erken bitirmek/kesmek anlamında "cut short" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-med-q19',
        type: 'multiple_choice',
        question: 'I was surprised when Sarah told me she had _____ her best friend over a minor financial dispute.',
        options: ['fallen out with', 'run out of', 'got away with', 'looked down on'],
        correctAnswer: 0,
        explanation: '"Biriyle tartışıp küsmek/bozuşmak" anlamına gelen phrasal verb "fall out with"dir.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-med-q20',
        type: 'multiple_choice',
        question: 'The suspect managed to _____ committing the fraud because the police lacked concrete evidence.',
        options: ['get away with', 'cope with', 'come up with', 'look forward to'],
        correctAnswer: 0,
        explanation: 'Yaptığı bir cezadan veya kötü durumdan sıyrılmak/ceza almadan kurtulmak anlamında "get away with" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-med-q21',
        type: 'multiple_choice',
        question: 'Although they were close in high school, they slowly started to _____ after attending different universities.',
        options: ['grow apart', 'hang out', 'mix up', 'bring up'],
        correctAnswer: 0,
        explanation: 'Zamanla bağların kopması, arkadaşlıktan uzaklaşılması anlamında "grow apart" phrasal verb\'ü kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q22',
        type: 'multiple_choice',
        question: 'The old train station was completely _____ into a modern art gallery last year.',
        options: ['transformed', 'swapped', 'altered', 'exchanged'],
        correctAnswer: 0,
        explanation: 'Bir şeyin şeklini veya yapısını tamamen değiştirmek, dönüştürmek anlamında "transform" fiili kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q23',
        type: 'multiple_choice',
        question: 'To survive the economic downturn, the company needs to _____ the problem of rising operational costs.',
        options: ['tackle', 'cause', 'damage', 'face to'],
        correctAnswer: 0,
        explanation: 'Bir problemi çözmek için kararlılıkla ele almak anlamında "tackle" fiili kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q24',
        type: 'multiple_choice',
        question: 'This dark chocolate has a slightly _____ orange filling that goes perfectly with black coffee.',
        options: ['bitter', 'creamy', 'fresh', 'raw'],
        correctAnswer: 0,
        explanation: 'Kakaonun veya bazı narenciyelerin bıraktığı keskin ve acımsı tat "bitter" kelimesiyle ifade edilir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-med-q25',
        type: 'multiple_choice',
        question: 'Drivers are advised to avoid the city center during the morning _____ due to roadworks.',
        options: ['rush hour', 'traffic jam', 'pedestrian crossing', 'cycle lane'],
        correctAnswer: 0,
        explanation: 'Trafiğin en yoğun olduğu saatleri belirtmek için "rush hour" bileşik ismi kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Compound Nouns'
      },
      {
        id: 'ai-med-q26',
        type: 'multiple_choice',
        question: 'I _____ this report all afternoon, and I have only completed three pages so far.',
        options: ['have been writing', 'have written', 'wrote', 'am writing'],
        correctAnswer: 0,
        explanation: 'Öğleden beri devam eden ve hala bitmemiş yazma eylemini vurgulamak için Present Perfect Continuous (have been writing) kullanımı uygundur.',
        difficulty: 'medium',
        grammarFocus: 'Present Perfect Continuous'
      },
      {
        id: 'ai-med-q27',
        type: 'multiple_choice',
        question: 'The village _____ we stayed during our Patagonia trip was famous for its wild nature.',
        options: ['where', 'which', 'that', 'whose'],
        correctAnswer: 0,
        explanation: 'Yer niteleyen sıfat tümleçlerinde (relative clause) edat kullanılmadığında yer bildiren "where" ilgi zarfı tercih edilir.',
        difficulty: 'medium',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-med-q28',
        type: 'multiple_choice',
        question: 'I wish I _____ more attention to the safety briefing before the diving expedition began.',
        options: ['had paid', 'paid', 'would pay', 'have paid'],
        correctAnswer: 0,
        explanation: 'Geçmişe yönelik keşkeler (regrets) ifade edilirken "wish + Past Perfect" yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Wish Clauses'
      },
      {
        id: 'ai-med-q29',
        type: 'multiple_choice',
        question: 'Elena said that she _____ a strange sense of calm during the Patagonia blizzard the previous week.',
        options: ['had felt', 'feels', 'has felt', 'is feeling'],
        correctAnswer: 0,
        explanation: 'Dolaylı anlatımda (Reported Speech), ana cümle geçmiş zamandaysa aktarılan geçmiş zaman eylemi Past Perfect\'e (had felt) dönüşür.',
        difficulty: 'medium',
        grammarFocus: 'Reported Speech'
      },
      {
        id: 'ai-med-q30',
        type: 'multiple_choice',
        question: 'The research findings on deep-sea ecosystems _____ in a major scientific journal next month.',
        options: ['will be published', 'will publish', 'are publishing', 'have published'],
        correctAnswer: 0,
        explanation: 'Gelecek zamanda pasif yapı (yayınlanacak) için "will be + V3" (will be published) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Passive Voice'
      },
      {
        id: 'ai-med-q31',
        type: 'multiple_choice',
        question: 'Police arrested a notorious _____ who was caught hiding expensive clothes inside his coat.',
        options: ['shoplifter', 'shoplifting', 'shoplifted', 'shoplift'],
        correctAnswer: 0,
        explanation: 'Mağazadan hırsızlık yapan kişiyi tanımlamak için "shoplifter" ismi kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-med-q32',
        type: 'multiple_choice',
        question: 'His behavior during the board meeting was completely _____; no one could understand his actions.',
        options: ['bizarre', 'bizarrely', 'bizarreness', 'consistent'],
        correctAnswer: 0,
        explanation: 'Boşluktan önce gelen "was completely" ifadesinden sonra özneyi niteleyen bir sıfat gelmelidir ("bizarre" - tuhaf/garip).',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-med-q33',
        type: 'multiple_choice',
        question: 'The operations manager is _____ charge of organizing the logistics for the exhibition.',
        options: ['in', 'on', 'at', 'with'],
        correctAnswer: 0,
        explanation: 'Sorumluluk bildiren "bir şeyin başında/sorumlusu olmak" kalıbı "in charge of" şeklindedir.',
        difficulty: 'medium',
        grammarFocus: 'Prepositional Phrases'
      },
      {
        id: 'ai-med-q34',
        type: 'multiple_choice',
        question: 'We decided to _____ on coffee because we were spending too much money at coffee shops.',
        options: ['cut down', 'calm down', 'run away', 'get away'],
        correctAnswer: 0,
        explanation: 'Bir şeyin tüketimini veya kullanımını azaltmak anlamında "cut down (on)" phrasal verb\'ü kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-med-q35',
        type: 'multiple_choice',
        question: 'I had never tried skiing before, but my friends convinced me to have a _____.',
        options: ['go', 'try', 'do', 'run'],
        correctAnswer: 0,
        explanation: 'Bir şeyi denemek, şansını denemek anlamındaki deyimsel ifade "have a go"dur.',
        difficulty: 'medium',
        grammarFocus: 'Idiomatic Expressions'
      },
      {
        id: 'ai-med-q36',
        type: 'multiple_choice',
        question: 'Unless you _____ the safety gear, you are not allowed to enter the chemical laboratory.',
        options: ['wear', 'will wear', 'wore', 'are wearing'],
        correctAnswer: 0,
        explanation: '"Unless" (-medikçe) ile kurulan genel kural cümlelerinde geniş zaman (Present Simple) kullanılır ve "unless" anlamca olumsuzdur.',
        difficulty: 'medium',
        grammarFocus: 'Zero Conditional with Unless'
      },
      {
        id: 'ai-med-q37',
        type: 'multiple_choice',
        question: 'They debated the strategy for hours, but _____ the end, they agreed on the original plan.',
        options: ['in', 'at', 'on', 'by'],
        correctAnswer: 0,
        explanation: 'Sonunda, nihayetinde anlamındaki kalıp ifade "in the end" şeklindedir.',
        difficulty: 'medium',
        grammarFocus: 'Prepositional Phrases'
      },
      {
        id: 'ai-med-q38',
        type: 'multiple_choice',
        question: 'Our school encourages students to be _____ with their studies, as research takes a long time.',
        options: ['patient', 'patience', 'impatient', 'patiently'],
        correctAnswer: 0,
        explanation: 'Özneyi niteleyen sıfat aranmaktadır. Sabırlı olmak anlamında "patient" sıfatı uygundur.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-med-q39',
        type: 'multiple_choice',
        question: 'It is often difficult to put my deep thoughts _____ words during public speaking.',
        options: ['into', 'on', 'with', 'to'],
        correctAnswer: 0,
        explanation: 'Düşünceleri kelimelere dökmek ifadesi "put into words" şeklinde söujenir.',
        difficulty: 'medium',
        grammarFocus: 'Prepositional Phrases'
      },
      {
        id: 'ai-med-q40',
        type: 'multiple_choice',
        question: 'A: "I don\'t enjoy crowded public transport during rush hour." B: "Me _____. It is extremely exhausting."',
        options: ['neither', 'too', 'so', 'either'],
        correctAnswer: 0,
        explanation: 'Olumsuz bir cümleye katılım göstermek için "Me neither" (ben de sevmem/katılmam) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Agreement'
      }
    ]
  },
  {
    id: 'ai-challenge-mediumplus-1',
    title: 'AI Challenge — Medium+ Level Exam',
    description: 'A comprehensive 40-question practice mock exam powered by AI. Evaluates upper-intermediate (B2) grammar, structure, and vocabulary.',
    difficulty: 'medium',
    grammarFocus: 'Mixed Conditionals, Inversion, Complex Passives, Advanced Modals, Reduced Relative Clauses, Advanced Phrasal Verbs, Word Formation',
    questions: [
      {
        id: 'ai-medplus-q1',
        type: 'multiple_choice',
        question: 'If Elena _____ the map before setting off on her Patagonia hike, she wouldn\'t be lost in the blizzard right now.',
        options: ['had checked', 'checked', 'has checked', 'would have checked'],
        correctAnswer: 0,
        explanation: 'Karışık Koşul Cümlesi (Mixed Conditional - Type 3 & 2): Geçmişteki bir eylemin (haritayı kontrol etme) günümüzdeki sonucunu (kayıp olmama) anlatmak için If kısmında Past Perfect, ana cümlede ise "would + V1" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Mixed Conditionals'
      },
      {
        id: 'ai-medplus-q2',
        type: 'multiple_choice',
        question: 'If my brother _____ so patient, he would have lost his temper during the difficult negotiations yesterday.',
        options: ["weren't", "hadn't been", "isn't", "wouldn't be"],
        correctAnswer: 0,
        explanation: 'Karışık Koşul Cümlesi (Mixed Conditional - Type 2 & 3): Kişinin genel bir özelliğinin (sabırlı olmama) geçmişteki bir duruma etkisini anlatmak için If kısmında Past Simple (weren\'t), ana cümlede ise "would have + V3" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Mixed Conditionals'
      },
      {
        id: 'ai-medplus-q3',
        type: 'multiple_choice',
        question: 'Seldom _____ such a dramatic and inspiring survival story in the patagonian wilderness.',
        options: ['have we heard', 'we have heard', 'did we heard', 'we heard'],
        correctAnswer: 0,
        explanation: 'Seldom, rarely, barely gibi olumsuz zarflarla başlayan cümlelerde devriklik (inversion) yapılır. Yardımcı fiil (have) özneden önce gelir.',
        difficulty: 'medium',
        grammarFocus: 'Inversion'
      },
      {
        id: 'ai-medplus-q4',
        type: 'multiple_choice',
        question: 'No sooner _____ at the campsite than the heavy snowstorm began to block all the mountain trails.',
        options: ['had they arrived', 'they arrived', 'did they arrived', 'they had arrived'],
        correctAnswer: 0,
        explanation: '"No sooner... than" yapısında devrik cümle kullanımı yaygındır ve geçmişteki ardışık eylemleri anlatırken "had + özne + V3" yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Inversion'
      },
      {
        id: 'ai-medplus-q5',
        type: 'multiple_choice',
        question: 'Deep-sea ecosystems _____ life without any sunlight near hydrothermal vents.',
        options: ['are believed to support', 'are believed supporting', 'believe to support', 'were believed to supported'],
        correctAnswer: 0,
        explanation: 'Etken-Edilgen dönüşümü: "It is believed that deep-sea ecosystems support..." yapısı "Subject + be believed + to V1" şeklinde kısaltılır.',
        difficulty: 'medium',
        grammarFocus: 'Complex Passives'
      },
      {
        id: 'ai-medplus-q6',
        type: 'multiple_choice',
        question: 'The candidate _____ the exam rules beforehand, but she claims she didn\'t receive any notification.',
        options: ['is said to have been told', 'says to have told', 'is said to tell', 'was said to have told'],
        correctAnswer: 0,
        explanation: 'Geçmişte yapılmış pasif bir eyleme yönelik iddiayı belirtmek için "Subject + be said + to have been + V3" (söylenmiş olduğu söyleniyor) yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Complex Passives'
      },
      {
        id: 'ai-medplus-q7',
        type: 'multiple_choice',
        question: 'I would rather you _____ the confidential documents with the client yesterday morning.',
        options: ["hadn't shared", "didn't share", "not share", "wouldn't share"],
        correctAnswer: 0,
        explanation: '"Would rather" kalıbından sonra gelen özne farklıysa ve eylem geçmiş zamana aitse Past Perfect (hadn\'t shared) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Advanced Modals'
      },
      {
        id: 'ai-medplus-q8',
        type: 'multiple_choice',
        question: 'The project team regrets _____ you that the funding for the local library extension has been suspended.',
        options: ['to inform', 'informing', 'inform', 'to informing'],
        correctAnswer: 0,
        explanation: 'Üzücü bir haberi vermekten duyulan pişmanlığı/üzüntüyü ifade ederken "regret" fiilinden sonra "to + infinitive" (to inform) gelir.',
        difficulty: 'medium',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-medplus-q9',
        type: 'multiple_choice',
        question: 'We proposed _____ the obsolete office systems with modern cloud infrastructure to cut down on costs.',
        options: ['replacing', 'to replace', 'replace', 'to replacing'],
        correctAnswer: 0,
        explanation: '"Propose" (önermek) fiili kendisinden sonra doğrudan bir fiil geldiğinde "-ing" (gerund) yapısı alır.',
        difficulty: 'medium',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-medplus-q10',
        type: 'multiple_choice',
        question: 'The international committee consists of fifteen scientists, many of _____ have studied polar climate change.',
        options: ['whom', 'which', 'who', 'whose'],
        correctAnswer: 0,
        explanation: 'Preposition (of) arkasından insanları nitelemek için "whom" ilgi zamiri kullanılır. "Who" bu konumda doğrudan kullanılamaz.',
        difficulty: 'medium',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-medplus-q11',
        type: 'multiple_choice',
        question: 'The emergency plan, details of _____ were kept secret from the public, was successfully executed yesterday.',
        options: ['which', 'whom', 'what', 'whose'],
        correctAnswer: 0,
        explanation: 'Cansız bir varlığı (planı) niteleyen prepositional relative clause yapısında "of which" kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-medplus-q12',
        type: 'multiple_choice',
        question: 'Any student _____ in the long-term research project is expected to submit a weekly progress report.',
        options: ['involved', 'involving', 'who involved', 'was involved'],
        correctAnswer: 0,
        explanation: 'Sıfat tümleci kısaltması (Reduced Relative Clause): "who is involved" yapısı pasif anlam taşıdığı için kısaltıldığında sadece V3 ("involved") kalır.',
        difficulty: 'medium',
        grammarFocus: 'Reduced Relative Clauses'
      },
      {
        id: 'ai-medplus-q13',
        type: 'multiple_choice',
        question: 'But for his timely warning during the blizzard, the mountain guides _____ their way in the Patagonia storm.',
        options: ['would have lost', 'would lose', 'had lost', 'lost'],
        correctAnswer: 0,
        explanation: '"But for" (-olmasaydı) yapısı gizli bir koşul cümlesidir. Geçmişteki gerçek dışı durumdan bahsettiği için ana cümlede "would have + V3" (would have lost) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Mixed Conditionals'
      },
      {
        id: 'ai-medplus-q14',
        type: 'multiple_choice',
        question: 'We will go ahead with the deep-sea exploration project _____ the weather conditions remain stable.',
        options: ['provided that', 'unless', 'even if', 'in case'],
        correctAnswer: 0,
        explanation: '"Provided that" (koşuluyla / şartıyla), "as long as" ile aynı anlamda bir koşul bağlacıdır.',
        difficulty: 'medium',
        grammarFocus: 'Advanced Conjunctions'
      },
      {
        id: 'ai-medplus-q15',
        type: 'multiple_choice',
        question: 'You should carry backup battery packs for your GPS device _____ it runs out of power during the expedition.',
        options: ['in case', 'unless', 'so that', 'on condition that'],
        correctAnswer: 0,
        explanation: '"In case" (-durumunda / -ihtimaline karşı) tedbir bildiren cümlelerde kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Advanced Conjunctions'
      },
      {
        id: 'ai-medplus-q16',
        type: 'multiple_choice',
        question: 'I wish the local council _____ cutting down the old trees in our neighborhood; it makes me so angry.',
        options: ['would stop', 'had stopped', 'stopped', 'will stop'],
        correctAnswer: 0,
        explanation: 'Şimdiki zamandaki rahatsız edici veya değiştirilmek istenen alışkanlıkları/durumları belirtmek için "wish + would + V1" yapısı kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Wish Clauses'
      },
      {
        id: 'ai-medplus-q17',
        type: 'multiple_choice',
        question: 'The manager made the developers _____ the entire source code to fix the security vulnerability.',
        options: ['rewrite', 'to rewrite', 'rewriting', 'rewritten'],
        correctAnswer: 0,
        explanation: 'Ettirgen "make" fiili aktif yapıda yalın fiil (bare infinitive - "rewrite") alır.',
        difficulty: 'medium',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-medplus-q18',
        type: 'multiple_choice',
        question: 'The scientists need to _____ more research to determine the exact effects of the new substance on wildlife.',
        options: ['carry out', 'bring about', 'take up', 'put up with'],
        correctAnswer: 0,
        explanation: '"Bir araştırmayı, görevi veya planı yürütmek/gerçekleştirmek" anlamındaki phrasal verb "carry out"dur.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-medplus-q19',
        type: 'multiple_choice',
        question: 'The dramatic changes in the climate have _____ serious challenges for the agricultural sector.',
        options: ['brought about', 'come across', 'run out of', 'held back'],
        correctAnswer: 0,
        explanation: '"Bir duruma sebep olmak / yol açmak" anlamındaki phrasal verb "bring about"dur.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-medplus-q20',
        type: 'multiple_choice',
        question: 'I cannot _____ his irritating behavior and lack of punctuality any longer.',
        options: ['put up with', 'get along with', 'look forward to', 'keep up with'],
        correctAnswer: 0,
        explanation: '"Bir olumsuz duruma veya kişiye katlanmak / tolere etmek" anlamına gelen phrasal verb "put up with"dir.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-medplus-q21',
        type: 'multiple_choice',
        question: 'While sorting through the archive files, I _____ an interesting document about early polar exploration.',
        options: ['came across', 'brought up', 'cut off', 'took after'],
        correctAnswer: 0,
        explanation: '"Tesadüfen karşılaşmak / bulmak" anlamına gelen phrasal verb "come across"dur.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-medplus-q22',
        type: 'multiple_choice',
        question: 'She decided to _____ photography as a hobby after her retirement.',
        options: ['take up', 'take after', 'take charge', 'take over'],
        correctAnswer: 0,
        explanation: '"Yeni bir hobiye, aktiviteye veya işe başlamak" anlamındaki phrasal verb "take up"tır.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-medplus-q23',
        type: 'multiple_choice',
        question: 'The local government stressed the _____ of protecting endangered species from extinction.',
        options: ['necessity', 'necessary', 'necessitate', 'necessarily'],
        correctAnswer: 0,
        explanation: 'İsimleştiren "-ity" son ekiyle türetilen "necessity" (gereklilik), boşluğa uygun isim formudur.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-medplus-q24',
        type: 'multiple_choice',
        question: 'It is highly _____ that the weather will clear up before tomorrow morning\'s flight.',
        options: ['unlikely', 'dislike', 'improbable', 'unusual'],
        correctAnswer: 0,
        explanation: '"İhtimal dışı / olası olmayan" anlamındaki sıfat "unlikely"dır.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-medplus-q25',
        type: 'multiple_choice',
        question: 'The architect suggested making a minor _____ to the building design to improve energy efficiency.',
        options: ['alteration', 'exchange', 'conversion', 'replacement'],
        correctAnswer: 0,
        explanation: 'Bir şey üzerinde yapılan ufak değişiklik/düzeltme anlamındaki isim "alteration"dır (alter fiilinden).',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-medplus-q26',
        type: 'multiple_choice',
        question: 'Don\'t let these fresh herbs _____ to waste; use them in the tomato soup tonight.',
        options: ['go', 'make', 'run', 'take'],
        correctAnswer: 0,
        explanation: 'Ziyan olmak / boşa gitmek deyimsel ifadesi "go to waste" şeklindedir.',
        difficulty: 'medium',
        grammarFocus: 'Wordpower'
      },
      {
        id: 'ai-medplus-q27',
        type: 'multiple_choice',
        question: 'The security protocol demands that everyone _____ their ID badges visible at all times.',
        options: ['keep', 'keeps', 'to keep', 'keeping'],
        correctAnswer: 0,
        explanation: 'İngilizce\'de "demand, insist, suggest, recommend" gibi talep/öneri bildiren fiillerden sonraki "that" cümlelerinde fiilin yalın hali (Subjunctive) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Subjunctive'
      },
      {
        id: 'ai-medplus-q28',
        type: 'multiple_choice',
        question: 'You _____ taken the expensive taxi; I would have gladly picked you up from the airport.',
        options: ["needn't have", "didn't need to", "must not have", "shouldn't have"],
        correctAnswer: 0,
        explanation: 'Geçmişte gerek olmadığı halde yapılmış ve boşa gitmiş eylemleri anlatmak için "needn\'t have + V3" (yapmana gerek yoktu ama yaptın) kullanılır.',
        difficulty: 'medium',
        grammarFocus: 'Advanced Modals'
      },
      {
        id: 'ai-medplus-q29',
        type: 'multiple_choice',
        question: 'The document _____ by the committee yesterday details the new environmental guidelines.',
        options: ['approved', 'approving', 'which approved', 'was approved'],
        correctAnswer: 0,
        explanation: 'Sıfat tümleci kısaltması (Relative Clause Reduction): "which was approved by..." yapısı "approved by..." şeklinde kısaltılır.',
        difficulty: 'medium',
        grammarFocus: 'Reduced Relative Clauses'
      },
      {
        id: 'ai-medplus-q30',
        type: 'multiple_choice',
        question: 'The development team is dedicated to _____ the user interface based on student feedback.',
        options: ['improving', 'improve', 'to improve', 'improved'],
        correctAnswer: 0,
        explanation: '"Be dedicated to" (kendini adamak) yapısındaki "to" bir edattır (preposition) ve arkasından isim veya fiilin "-ing" hali (gerund) gelir.',
        difficulty: 'medium',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-medplus-q31',
        type: 'multiple_choice',
        question: 'The sudden _____ of the key witness forced the court to delay the trial.',
        options: ['disappearance', 'disappear', 'disappeared', 'appearance'],
        correctAnswer: 0,
        explanation: 'İsimleştiren "-ance" son ekiyle türetilen "disappearance" (ortadan kaybolma), iyelik veya belirtici sonrasında gelen isim formudur.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-medplus-q32',
        type: 'multiple_choice',
        question: 'It is hard for rural students to _____ the rapid updates in digital education tools.',
        options: ['keep up with', 'run out of', 'fall out with', 'look down on'],
        correctAnswer: 0,
        explanation: '"Hızına ayak uydurmak / takip etmek / geri kalmamak" anlamına gelen phrasal verb "keep up with"dir.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-medplus-q33',
        type: 'multiple_choice',
        question: 'The arctic guide\'s extensive knowledge of mountain paths is _____ to our expedition\'s success.',
        options: ['integral', 'bizarre', 'impatient', 'underrated'],
        correctAnswer: 0,
        explanation: '"Temel, ayrılmaz, bütünleyici parça" anlamına gelen sıfat "integral"dir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-medplus-q34',
        type: 'multiple_choice',
        question: 'Before launching the software, the team must _____ all technical errors.',
        options: ['resolve', 'cause', 'face', 'damage'],
        correctAnswer: 0,
        explanation: 'Sorunları/hata/anlaşmazlıkları çözmek anlamında "resolve" (çözüme kavuşturmak) kelimesi en uygun fiildir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-medplus-q35',
        type: 'multiple_choice',
        question: 'I love making guacamole using raw avocados because it has a rich, _____ texture.',
        options: ['creamy', 'bitter', 'crunchy', 'sour'],
        correctAnswer: 0,
        explanation: 'Avokadonun yumuşak ve pürüzsüz yapısı "creamy" (kremsi/yumuşak) sıfatıyla tarif edilir.',
        difficulty: 'medium',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-medplus-q36',
        type: 'multiple_choice',
        question: 'My supervisor objects to _____ the project deadline without a valid reason.',
        options: ['extending', 'extend', 'to extend', 'extended'],
        correctAnswer: 0,
        explanation: '"Object to" (itiraz etmek) yapısındaki "to" bir edattır (preposition) ve arkasından gerund ("extending") gelir.',
        difficulty: 'medium',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-medplus-q37',
        type: 'multiple_choice',
        question: 'Due to the storm, the flights were delayed; _____ a result, hundreds of passengers were stranded at the airport.',
        options: ['as', 'by', 'for', 'in'],
        correctAnswer: 0,
        explanation: 'Neden-sonuç bildiren kalıp ifade "as a result" (sonuç olarak) şeklindedir.',
        difficulty: 'medium',
        grammarFocus: 'Prepositional Phrases'
      },
      {
        id: 'ai-medplus-q38',
        type: 'multiple_choice',
        question: 'The researcher\'s presentation was very _____, providing clear solutions to the traffic problem.',
        options: ['informative', 'information', 'inform', 'informatively'],
        correctAnswer: 0,
        explanation: 'Özneyi ("presentation") niteleyen sıfat aranmaktadır. Bilgilendirici anlamında "informative" sıfatı uygundur.',
        difficulty: 'medium',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-medplus-q39',
        type: 'multiple_choice',
        question: 'They struggled to _____ a workable solution to the complex network issues.',
        options: ['come up with', 'look forward to', 'put up with', 'run out of'],
        correctAnswer: 0,
        explanation: '"Bir fikir/çözüm yolu bulmak veya üretmek" anlamına gelen phrasal verb "come up with"dir.',
        difficulty: 'medium',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-medplus-q40',
        type: 'multiple_choice',
        question: 'We chose that hotel because it was close to public transport, and _____ instance, there was a metro station right outside.',
        options: ['for', 'as', 'by', 'in'],
        correctAnswer: 0,
        explanation: 'Örnekleme yaparken kullanılan "for instance" (örneğin) kalıp ifadesi tamamlanmaktadır.',
        difficulty: 'medium',
        grammarFocus: 'Prepositional Phrases'
      }
    ]
  },
  {
    id: 'ai-challenge-hard-1',
    title: 'AI Challenge — Hard Level Exam',
    description: 'A comprehensive 40-question practice mock exam powered by AI. Evaluates advanced (C1) grammar, structure, and vocabulary within the core curriculum bounds.',
    difficulty: 'hard',
    grammarFocus: 'Inversion, Subjunctive, Mixed Conditionals, Reporting Passives, Subtle Gerund/Infinitive Exceptions, Cleft Sentences, Prepositional Phrases',
    questions: [
      {
        id: 'ai-hard-q1',
        type: 'multiple_choice',
        question: 'Hardly _____ set foot in the office when the manager asked him to sign the new business contract.',
        options: ['had he', 'he had', 'did he', 'he has'],
        correctAnswer: 0,
        explanation: 'Cümle başında "Hardly" gibi olumsuz zarf öbekleri kullanıldığında cümle devrik (inverted) olur. Ardışık geçmiş eylemleri vurgulamak için "Hardly had + özne + V3 ... when ..." yapısı tercih edilir.',
        difficulty: 'hard',
        grammarFocus: 'Inversion'
      },
      {
        id: 'ai-hard-q2',
        type: 'multiple_choice',
        question: '_____ the engineer warned us about the broken gas valve earlier, we would not have had to cancel the work.',
        options: ['Had', 'If had', 'Should', 'Were'],
        correctAnswer: 0,
        explanation: 'Third Conditional devrik (inverted) yapısında "If" atılır ve yardımcı fiil "Had" cümlenin başına gelir: "Had the engineer warned..." = "If the engineer had warned..."',
        difficulty: 'hard',
        grammarFocus: 'Inversion in Conditionals'
      },
      {
        id: 'ai-hard-q3',
        type: 'multiple_choice',
        question: '_____ I to accept their job offer, I would have to relocate to a very cold climate.',
        options: ['Were', 'Had', 'Should', 'If'],
        correctAnswer: 0,
        explanation: 'Second Conditional devrik (inverted) yapısında "If" atılır ve "Were + özne + to + V1" yapısı kullanılır: "Were I to accept..." = "If I accepted..."',
        difficulty: 'hard',
        grammarFocus: 'Inversion in Conditionals'
      },
      {
        id: 'ai-hard-q4',
        type: 'multiple_choice',
        question: '_____ you experience any difficulty logging into the online system, please contact customer support immediately.',
        options: ['Should', 'Were', 'Had', 'Would'],
        correctAnswer: 0,
        explanation: 'First Conditional devrik (inverted) yapısında "If" yerine "Should + özne + V1" yapısı kullanılır: "Should you experience..." = "If you experience..."',
        difficulty: 'hard',
        grammarFocus: 'Inversion in Conditionals'
      },
      {
        id: 'ai-hard-q5',
        type: 'multiple_choice',
        question: 'If my parents _____ from the same background, they probably would never have met at university thirty years ago.',
        options: ["weren't", "hadn't been", "aren't", "wouldn't be"],
        correctAnswer: 0,
        explanation: 'Karışık Koşul Cümlesi (Mixed Conditional): Kişilerin genel ve kalıcı olan geçmişe uzanan köken durumu (aynı çevreden gelip gelmeme) şu an da geçerli bir durumdur (Type 2 - weren\'t). Ancak bunun geçmişteki etkisi sorgulanmaktadır (Type 3 - would never have met).',
        difficulty: 'hard',
        grammarFocus: 'Mixed Conditionals'
      },
      {
        id: 'ai-hard-q6',
        type: 'multiple_choice',
        question: 'Only after the team leader had reviewed the details of the contract _____ to sign it.',
        options: ['did she agree', 'she agreed', 'had she agreed', 'she had agreed'],
        correctAnswer: 0,
        explanation: '"Only after" ifadesiyle başlayan cümlelerin ana cümle (ikinci kısım) devrik olur. Geçmiş zaman olduğu için "did she agree" yardımcı fiiliyle devriklik kurulur.',
        difficulty: 'hard',
        grammarFocus: 'Inversion'
      },
      {
        id: 'ai-hard-q7',
        type: 'multiple_choice',
        question: 'The laboratory has developed a new clean technology, _____ the company expects to reduce its operational waste.',
        options: ['by which', 'in which', 'to which', 'whose'],
        correctAnswer: 0,
        explanation: '"Technology by which..." (aracılığıyla atık azaltmayı umduğu teknoloji) ifadesinde yöntem/araç bildiren "by" edatı "which" ilgi zamiriyle birlikte kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-hard-q8',
        type: 'multiple_choice',
        question: 'We have hired three new developers, the most experienced of _____ will lead the security update team.',
        options: ['whom', 'who', 'which', 'whose'],
        correctAnswer: 0,
        explanation: 'Edattan (of) sonra insanları nitelemek amacıyla "whom" ilgi zamiri kullanılır. "Who" edattan sonra doğrudan gelemez.',
        difficulty: 'hard',
        grammarFocus: 'Relative Clauses'
      },
      {
        id: 'ai-hard-q9',
        type: 'multiple_choice',
        question: 'The guidelines _____ by the international committee yesterday emphasize the protection of endangered species.',
        options: ['published', 'publishing', 'which published', 'were published'],
        correctAnswer: 0,
        explanation: 'Sıfat tümleci kısaltması: Cümle edilgendir. "Guidelines which were published..." yapısı kısaltılarak sadece V3 ("published") olarak bırakılır.',
        difficulty: 'hard',
        grammarFocus: 'Reduced Relative Clauses'
      },
      {
        id: 'ai-hard-q10',
        type: 'multiple_choice',
        question: 'Anyone _____ to enter the chemical laboratory must wear full protective clothing.',
        options: ['wishing', 'wished', 'who wishing', 'is wishing'],
        correctAnswer: 0,
        explanation: 'Sıfat tümleci kısaltması: Etken (active) cümlelerde kısaltma fiile "-ing" takısı getirilerek yapılır. "Anyone who wishes..." ifadesi "Anyone wishing..." olur.',
        difficulty: 'hard',
        grammarFocus: 'Reduced Relative Clauses'
      },
      {
        id: 'ai-hard-q11',
        type: 'multiple_choice',
        question: 'The manager insisted that the employee _____ the document before making a final decision.',
        options: ['rewrite', 'rewrites', 'to rewrite', 'rewriting'],
        correctAnswer: 0,
        explanation: '"Insist that" yapısından sonra gelen cümlede fiil yalın halde (Subjunctive) kullanılır. Tekil özne olsa bile fiil ek almaz.',
        difficulty: 'hard',
        grammarFocus: 'Subjunctive'
      },
      {
        id: 'ai-hard-q12',
        type: 'multiple_choice',
        question: 'It is high time we _____ some serious action to solve the problem of rising operational costs.',
        options: ['took', 'take', 'had taken', 'to take'],
        correctAnswer: 0,
        explanation: '"It is high time / It is time + özne + Past Simple" yapısı, çoktan yapılmış olması gereken bir eylemi gecikmiş olarak ifade etmek için kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'It is time'
      },
      {
        id: 'ai-hard-q13',
        type: 'multiple_choice',
        question: 'I would rather you _____ the draft version with the board members during yesterday\'s meeting.',
        options: ["hadn't discussed", "didn't discuss", "not discuss", "wouldn't discuss"],
        correctAnswer: 0,
        explanation: '"Would rather" yapısında özne değiştiğinde ve tercih geçmiş zaman eylemine ait olduğunda Past Perfect (hadn\'t discussed) kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Advanced Modals'
      },
      {
        id: 'ai-hard-q14',
        type: 'multiple_choice',
        question: 'I wish you _____ making so much noise while studying; I am trying to focus here.',
        options: ['would stop', 'stopped', 'had stopped', 'will stop'],
        correctAnswer: 0,
        explanation: 'Başkasının rahatsız edici bir eylemi durdurmasını istemek/keşke bıraksa demek için "wish + would + V1" yapısı kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Wish Clauses'
      },
      {
        id: 'ai-hard-q15',
        type: 'multiple_choice',
        question: 'Taking this new job in London means _____ to a completely different climate.',
        options: ['adapting', 'to adapt', 'adapt', 'to adapting'],
        correctAnswer: 0,
        explanation: '"Mean" fiili "anlamına gelmek / gerektirmek" anlamındayken kendisinden sonra "-ing" (gerund) alır. "Niyet etmek" anlamındayken ise "to + infinitive" alır.',
        difficulty: 'hard',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-hard-q16',
        type: 'multiple_choice',
        question: 'I deeply regret _____ so much money on expensive coffee when I was a university student.',
        options: ['spending', 'to spend', 'spent', 'to spending'],
        correctAnswer: 0,
        explanation: 'Geçmişte yapılmış bir eylemden dolayı pişmanlık duyulduğunda "regret" fiilinden sonra "-ing" (spending) kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-hard-q17',
        type: 'multiple_choice',
        question: 'The security protocol at the office is obsolete; it desperately needs _____ as soon as possible.',
        options: ['updating', 'to update', 'updated', 'to be updating'],
        correctAnswer: 0,
        explanation: '"Need" fiili pasif anlam bildirdiğinde kendisinden sonra fiilen "-ing" hali (gerund) gelir: "needs updating" = "needs to be updated".',
        difficulty: 'hard',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-hard-q18',
        type: 'multiple_choice',
        question: 'No sooner _____ the button to start the machine than the electrical fuse blew out.',
        options: ['had I pressed', 'I had pressed', 'did I pressed', 'I pressed'],
        correctAnswer: 0,
        explanation: '"No sooner... than" kalıbı cümle başında kullanıldığında birinci kısım devrik (had I pressed) olur.',
        difficulty: 'hard',
        grammarFocus: 'Inversion'
      },
      {
        id: 'ai-hard-q19',
        type: 'multiple_choice',
        question: '_____ the timely warnings from the local weather station, we would have gone ahead with the outdoor event.',
        options: ['But for', 'Unless', 'Even though', 'Provided that'],
        correctAnswer: 0,
        explanation: '"But for" (-olmasaydı / -olmasa), kendisinden sonra gelen isim öbeğiyle birlikte gizli bir koşul bildirir ve cümleyi olumsuz koşula bağlar.',
        difficulty: 'hard',
        grammarFocus: 'Advanced Conjunctions'
      },
      {
        id: 'ai-hard-q20',
        type: 'multiple_choice',
        question: 'The suspect _____ the city before the police could establish a security barricade.',
        options: ['is reported to have left', 'reports to leave', 'is reported leaving', 'was reported to leave'],
        correctAnswer: 0,
        explanation: 'Rapor edilen durum geçmişte gerçekleştiği için (terk etmiş olması), edilgen raporlama yapısında "to have + V3" (to have left) kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Complex Passives'
      },
      {
        id: 'ai-hard-q21',
        type: 'multiple_choice',
        question: 'With the help of modern translation applications, we can easily _____ with traditional dictionaries.',
        options: ['do away', 'do up', 'do with', 'do out'],
        correctAnswer: 0,
        explanation: '"Do away with" (yürürlükten kaldırmak / ortadan kaldırmak / gerek kalmamak) phrasal verb\'üdür.',
        difficulty: 'hard',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-hard-q22',
        type: 'multiple_choice',
        question: 'I had to _____ my draft research paper several times to find the grammatical errors.',
        options: ['go over', 'go off', 'go through with', 'go up'],
        correctAnswer: 0,
        explanation: '"Go over" (dikkatlice incelemek / gözden geçirmek) phrasal verb\'üdür.',
        difficulty: 'hard',
        grammarFocus: 'Phrasal Verbs'
      },
      {
        id: 'ai-hard-q23',
        type: 'multiple_choice',
        question: 'The manager was _____ surprised when the client approved the contract without any criticism.',
        options: ['agreeably', 'agreeable', 'agreement', 'agree'],
        correctAnswer: 0,
        explanation: 'Sıfatı nitelemek için zarf formu ("agreeably" - hoş bir şekilde / memnuniyet verici şekilde) kullanılmalıdır.',
        difficulty: 'hard',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-hard-q24',
        type: 'multiple_choice',
        question: 'His signature on the contract was so _____ that the bank rejected the document.',
        options: ['illegible', 'legible', 'legibility', 'illegibly'],
        correctAnswer: 0,
        explanation: 'Okunamayan yazıları tarif etmek için "illegible" (okunaksız) olumsuz sıfatı kullanılır. "Legible" okunabilir demektir.',
        difficulty: 'hard',
        grammarFocus: 'Word Formation'
      },
      {
        id: 'ai-hard-q25',
        type: 'multiple_choice',
        question: 'The construction worker was fired because he was found working without safety gear _____ of the rules.',
        options: ['in defiance', 'with respect', 'in accordance', 'by means'],
        correctAnswer: 0,
        explanation: 'Kuralları hiçe sayarak / meydan okuyarak anlamındaki edat öbeği "in defiance of" şeklindedir.',
        difficulty: 'hard',
        grammarFocus: 'Prepositional Phrases'
      },
      {
        id: 'ai-hard-q26',
        type: 'multiple_choice',
        question: 'The committee recommended that the school council _____ the old rules immediately.',
        options: ['abolish', 'abolishes', 'abolished', 'to abolish'],
        correctAnswer: 0,
        explanation: 'Tavsiye fiili "recommend that" sonrasındaki cümlede fiil yalın halde (Subjunctive - "abolish") kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Subjunctive'
      },
      {
        id: 'ai-hard-q27',
        type: 'multiple_choice',
        question: 'What really surprised the developers _____ the sudden decision to suspend the project.',
        options: ['was', 'it was', 'did', 'being'],
        correctAnswer: 0,
        explanation: 'Cleft Sentence (Vurgulu cümle) yapısı: "What + eylem + be + vurgulanan öge" şeklinde kurulur. Geçmiş zaman olduğu için "was" kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Cleft Sentences'
      },
      {
        id: 'ai-hard-q28',
        type: 'multiple_choice',
        question: 'On no account _____ touch the red button unless the team leader gives you permission.',
        options: ['should you', 'you should', 'do you', 'you do'],
        correctAnswer: 0,
        explanation: 'Cümle başında "On no account" (hiçbir koşulda) gibi olumsuz bir ifade kullanıldığında cümle devrik ("should you") olur.',
        difficulty: 'hard',
        grammarFocus: 'Inversion'
      },
      {
        id: 'ai-hard-q29',
        type: 'multiple_choice',
        question: 'The celebrity expressed deep annoyance at _____ by the reporters outside the court.',
        options: ['being photographed', 'photographing', 'photographed', 'having photographed'],
        correctAnswer: 0,
        explanation: '"At" edatından sonra gelen pasif eylemi ifade etmek için Passive Gerund ("being + V3") yapısı kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Passive Voice'
      },
      {
        id: 'ai-hard-q30',
        type: 'multiple_choice',
        question: 'I had a terrible headache, so I tried _____ a hot cup of lemon tea, but it didn\'t help.',
        options: ['drinking', 'to drink', 'drink', 'having drunk'],
        correctAnswer: 0,
        explanation: 'Denemek / çare aramak amacıyla yapılan eylemler için "try + gerund" (drinking) kullanılır. Çaba sarf etmek / gayret etmek anlamında ise "to + infinitive" kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-hard-q31',
        type: 'multiple_choice',
        question: 'The operation failed because the assistant did not _____ the instructions correctly.',
        options: ['follow', 'make', 'do', 'run'],
        correctAnswer: 0,
        explanation: 'Talimatlara / yönergelere uymak collocation yapısı "follow instructions" şeklindedir.',
        difficulty: 'hard',
        grammarFocus: 'Wordpower'
      },
      {
        id: 'ai-hard-q32',
        type: 'multiple_choice',
        question: 'We regret _____ you that your application for the developer position has not been successful.',
        options: ['to inform', 'informing', 'inform', 'informed'],
        correctAnswer: 0,
        explanation: 'Üzücü bir resmi haber vermek için "regret + to + V1" (regret to inform) kalıbı kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-hard-q33',
        type: 'multiple_choice',
        question: 'The local laboratory is _____ the verge of discovering a clean technology to recycle plastic.',
        options: ['on', 'in', 'at', 'by'],
        correctAnswer: 0,
        explanation: 'Bir şeyin eşiğinde olmak deyimsel ifadesi "on the verge of" şeklindedir.',
        difficulty: 'hard',
        grammarFocus: 'Prepositional Phrases'
      },
      {
        id: 'ai-hard-q34',
        type: 'multiple_choice',
        question: 'The committee congratulated the researcher on _____ the prestigious environment award.',
        options: ['winning', 'to win', 'win', 'won'],
        correctAnswer: 0,
        explanation: '"Congratulate someone on" yapısında "on" edat olduğu için arkasından gelen fiil "-ing" (gerund) alır.',
        difficulty: 'hard',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-hard-q35',
        type: 'multiple_choice',
        question: 'The two business partners decided to end their contract because they had _____ apart over financial matters.',
        options: ['grown', 'got', 'taken', 'gone'],
        correctAnswer: 0,
        explanation: 'Zamanla birbirinden uzaklaşmak/ilişkinin soğuması anlamındaki phrasal verb "grow apart" fiilinin V3 hali "grown"dur.',
        difficulty: 'hard',
        grammarFocus: 'Vocabulary'
      },
      {
        id: 'ai-hard-q36',
        type: 'multiple_choice',
        question: 'The rare deep-sea creature is believed _____ in the deepest parts of the ocean.',
        options: ['to exist', 'to be existed', 'exists', 'existing'],
        correctAnswer: 0,
        explanation: '"Exist" geçişsiz (intransitive) bir durum fiilidir, bu yüzden edilgen yapı almaz. Doğru kullanım "to exist" şeklindedir.',
        difficulty: 'hard',
        grammarFocus: 'Complex Passives'
      },
      {
        id: 'ai-hard-q37',
        type: 'multiple_choice',
        question: 'The student looked very confused during the test. He _____ understood the instructions.',
        options: ["can't have", "must have", "should have", "didn't need to"],
        correctAnswer: 0,
        explanation: 'Geçmişe dair güçlü olumsuz çıkarım (anlamış olması imkansız) için "can\'t have + V3" yapısı kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Modals of Past Deduction'
      },
      {
        id: 'ai-hard-q38',
        type: 'multiple_choice',
        question: 'No sooner _____ down to rest than the loud alarm went off.',
        options: ['had we sat', 'we had sat', 'did we sit', 'we sat'],
        correctAnswer: 0,
        explanation: '"No sooner... than" ile başlayan cümlede birinci kısım devrik ve Past Perfect ("had we sat") olur.',
        difficulty: 'hard',
        grammarFocus: 'Inversion'
      },
      {
        id: 'ai-hard-q39',
        type: 'multiple_choice',
        question: 'While driving through the forest, we stopped _____ at the map because we were lost.',
        options: ['to look', 'looking', 'look', 'looked'],
        correctAnswer: 0,
        explanation: 'Bir amaç doğrultusunda (haritaya bakmak için) devam eden eylemi (araba sürme) kesmek/durmak anlamında "stop + to infinitive" kullanılır.',
        difficulty: 'hard',
        grammarFocus: 'Gerunds and Infinitives'
      },
      {
        id: 'ai-hard-q40',
        type: 'multiple_choice',
        question: 'I will lend you my backup battery pack _____ you promise to return it tomorrow morning.',
        options: ['on condition that', 'unless', 'even if', 'in case'],
        correctAnswer: 0,
        explanation: '"On condition that" (şartıyla), koşul bildiren bir bağlaçtır.',
        difficulty: 'hard',
        grammarFocus: 'Advanced Conjunctions'
      }
    ]
  }
];
