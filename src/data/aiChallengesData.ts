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
        explanation: 'Düşünceleri kelimelere dökmek ifadesi "put into words" şeklinde söylenir.',
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
  }
];
