import type { WordpowerBlock } from '../types/wordpower';

export const wordpowerData: WordpowerBlock[] = [
    // ═══════════════════════════════════════════════════════════════
    // UNIT 3 — WORDPOWER: have
    // Source: Unit 3 Review and Extension, Section 3 (p. 42)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 'wp-have',
        unit: 3,
        rootWord: 'have',
        title: 'Wordpower: have',
        description: 'The word "have" is used in many common phrases and expressions. In this section you will learn different meanings and collocations of "have".',
        usages: [
            {
                id: 'wp-have-u1',
                meaning: 'have + noun = experience / do an activity',
                meaningTr: '"have" + isim yapısında bir eylem veya deneyim ifade eder. Bu kullanımda "have" yardımcı fiil değil, ana fiildir.',
                examples: [
                    'Yes, we did, but we had an accident in the car we hired.',
                    'Yes, I did. Well, I had a go. I wasn\'t very good!',
                    'Shall we have lunch at a restaurant today?',
                    'I have no idea. What Spanish restaurant?',
                    'Does he have brown eyes and a beard?',
                    'You should have some lessons.',
                ],
            },
            {
                id: 'wp-have-u2',
                meaning: 'have fun',
                meaningTr: '"have fun" = eğlenmek, hoşça vakit geçirmek.',
                examples: [
                    'How was your holiday? Did you have fun?',
                ],
            },
            {
                id: 'wp-have-u3',
                meaning: 'have a look',
                meaningTr: '"have a look" = bir göz atmak, bakmak.',
                examples: [
                    'It\'s a new place. Let\'s go into town and have a look.',
                ],
            },
            {
                id: 'wp-have-u4',
                meaning: 'have a bite (to eat)',
                meaningTr: '"have a bite" = bir şeyler atıştırmak, hızlıca yemek.',
                examples: [
                    'Yes, but I only know the oldest one, Carl. I sometimes have a bite to eat with him after work.',
                ],
            },
            {
                id: 'wp-have-u5',
                meaning: 'have a go',
                meaningTr: '"have a go" = denemek, bir şeyi deneyimlemek.',
                examples: [
                    'Yes, I did. Well, I had a go. I wasn\'t very good!',
                ],
            },
        ],
        exercises: [
            // ── Exercise a: "Complete the conversations with sentences a–g." ──
            {
                id: 'wp-have-ex1',
                type: 'match',
                instruction: 'Complete the conversations with sentences a–g.',
                question: '"How was your holiday? Did you have fun?" — Which phrase with "have" is used here?',
                options: ['have fun', 'have a look', 'have a go', 'have a bite'],
                correctAnswer: 0,
                explanation: '"have fun" = eğlenmek. Tatil hakkında sorulduğunda "have fun" kullanılır.',
            },
            {
                id: 'wp-have-ex2',
                type: 'match',
                instruction: 'Complete the conversations with sentences a–g.',
                question: '"It\'s a new place. Let\'s go into town and _____."',
                options: ['have fun', 'have a look', 'have a go', 'have lunch'],
                correctAnswer: 1,
                explanation: '"have a look" = bir göz atmak. Yeni bir yeri görmek istediğinde kullanılır.',
            },
            {
                id: 'wp-have-ex3',
                type: 'match',
                instruction: 'Complete the conversations with sentences a–g.',
                question: '"How was the wedding? Did you dance?" — "_____. Maybe, I will."',
                options: ['Yes', 'No', 'Well, I had a go. I wasn\'t very good!'],
                correctAnswer: 2,
                explanation: '"have a go" = denemek. Dansı denemiş ama pek iyi olmamış.',
            },

            // ── Exercise c: "Add the phrases with have in bold in 3a to the table." ──
            // Table categories: eating/drinking, possession, experience, other phrases → have fun
            {
                id: 'wp-have-ex4',
                type: 'multiple_choice',
                instruction: 'Add the phrases with "have" in bold in 3a to the table. Categories: eating/drinking, possession, experience, other phrases, have fun.',
                question: '"We had an accident in the car we hired." — Which category does "have an accident" belong to?',
                options: ['eating/drinking', 'possession', 'experience', 'other phrases'],
                correctAnswer: 2,
                explanation: '"have an accident" = bir kaza geçirmek → experience (deneyim) kategorisine girer.',
            },
            {
                id: 'wp-have-ex5',
                type: 'multiple_choice',
                instruction: 'Add the phrases with "have" in bold in 3a to the table.',
                question: '"Shall we have lunch at a restaurant today?" — Which category does "have lunch" belong to?',
                options: ['eating/drinking', 'possession', 'experience', 'other phrases'],
                correctAnswer: 0,
                explanation: '"have lunch" = öğle yemeği yemek → eating/drinking kategorisine girer.',
            },
            {
                id: 'wp-have-ex6',
                type: 'multiple_choice',
                instruction: 'Add the phrases with "have" in bold in 3a to the table.',
                question: '"Neil has three brothers, doesn\'t he?" — Which category does "have" belong to here?',
                options: ['eating/drinking', 'possession', 'experience', 'other phrases'],
                correctAnswer: 1,
                explanation: '"have brothers" = kardeşleri olmak → possession (sahiplik) kategorisine girer.',
            },
            {
                id: 'wp-have-ex7',
                type: 'multiple_choice',
                instruction: 'Add the phrases with "have" in bold in 3a to the table.',
                question: '"I have no idea." — Which category does "have no idea" belong to?',
                options: ['eating/drinking', 'possession', 'experience', 'other phrases'],
                correctAnswer: 3,
                explanation: '"have no idea" = hiçbir fikrim yok → other phrases (diğer ifadeler) kategorisine girer.',
            },

            // ── Exercise d: "Complete the sentences with the correct form of have or have a/an." ──
            {
                id: 'wp-have-ex8',
                type: 'fill_blank',
                instruction: 'Complete the sentences with the correct form of "have" or "have a/an".',
                question: 'When was the last time you _____ special meal?',
                correctAnswer: 'had a',
                explanation: '"have a special meal" → geçmiş zamanda: "had a special meal".',
            },
            {
                id: 'wp-have-ex9',
                type: 'fill_blank',
                instruction: 'Complete the sentences with the correct form of "have" or "have a/an".',
                question: 'Are any of your friends or family _____ language lessons at the moment?',
                correctAnswer: 'having',
                explanation: '"have language lessons" → şu anda devam eden: "having language lessons".',
            },
            {
                id: 'wp-have-ex10',
                type: 'fill_blank',
                instruction: 'Complete the sentences with the correct form of "have" or "have a/an".',
                question: 'Do you usually _____ breakfast with your family or on your own?',
                correctAnswer: 'have',
                explanation: '"have breakfast" = kahvaltı yapmak.',
            },
            {
                id: 'wp-have-ex11',
                type: 'fill_blank',
                instruction: 'Complete the sentences with the correct form of "have" or "have a/an".',
                question: 'Have you ever _____ accident in a car or on a bike?',
                correctAnswer: 'had an',
                explanation: '"have an accident" → Present Perfect: "Have you ever had an accident".',
            },
            {
                id: 'wp-have-ex12',
                type: 'fill_blank',
                instruction: 'Complete the sentences with the correct form of "have" or "have a/an".',
                question: 'Did you _____ good time last weekend? Why / Why not?',
                correctAnswer: 'have a',
                explanation: '"have a good time" = hoşça vakit geçirmek.',
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════
    // UNIT 4 — WORDPOWER: so and such
    // Source: Unit 4 Review and Extension, Section 3 (p. 54)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 'wp-so-such',
        unit: 4,
        rootWord: 'so / such',
        title: 'Wordpower: so and such',
        description: '"so" and "such" are used for emphasis and in many common phrases. Learn the rules and the fixed expressions.',
        usages: [
            {
                id: 'wp-ss-u1',
                meaning: 'so + adjective/adverb (emphasis)',
                meaningTr: '"so" + sıfat/zarf = vurgu yapmak için kullanılır. "O kadar ..., çok ..." anlamına gelir.',
                examples: [
                    'Julie works so hard!',
                    'How many pages have you written?',
                ],
            },
            {
                id: 'wp-ss-u2',
                meaning: 'such (+ a/an) + noun (emphasis)',
                meaningTr: '"such" + isim = vurgu yapmak için kullanılır. Sayılabilen tekil isimlerden önce "such a/an" gelir.',
                examples: [
                    'She\'s such a nice person, too.',
                    'You\'re getting married. That\'s such good news!',
                    'Simon\'s a bit of an introvert, isn\'t he?',
                ],
            },
            {
                id: 'wp-ss-u3',
                meaning: 'and so on',
                meaningTr: '"and so on" = ve benzerleri, vesaire. Bir listeyi devam ettirmek için kullanılır.',
                examples: [
                    'Yes, paper, glue, paint, scissors and so on.',
                ],
            },
            {
                id: 'wp-ss-u4',
                meaning: 'so far',
                meaningTr: '"so far" = şimdiye kadar, bu ana kadar.',
                examples: [
                    'Ten so far, but I haven\'t finished yet.',
                ],
            },
            {
                id: 'wp-ss-u5',
                meaning: 'or so',
                meaningTr: '"or so" = yaklaşık, aşağı yukarı. Bir sayıdan sonra gelir.',
                examples: [
                    'About 20 or so, I think. I didn\'t speak to all of them.',
                ],
            },
            {
                id: 'wp-ss-u6',
                meaning: 'so (= clause connector, result)',
                meaningTr: '"so" = bu yüzden, dolayısıyla. Bir sonuç cümlesini bağlar.',
                examples: [
                    'Absolutely! So he wouldn\'t like to give the presentation.',
                ],
            },
        ],
        exercises: [
            // ── Exercise a: "Match statements and questions 1–6 with responses a–f." ──
            {
                id: 'wp-ss-ex1',
                type: 'match',
                instruction: 'Match statements and questions 1–6 with responses a–f.',
                question: '"How many people were in the group?" — Which response matches?',
                options: ['About 20 or so.', 'Ten so far.', 'Yes, paper, glue, paint, scissors and so on.', 'Such good news!'],
                correctAnswer: 0,
                explanation: '"or so" = yaklaşık. Kaç kişi sorusuna yaklaşık bir cevap verilir.',
            },
            {
                id: 'wp-ss-ex2',
                type: 'match',
                instruction: 'Match statements and questions 1–6 with responses a–f.',
                question: '"How many pages have you written?" — Which response matches?',
                options: ['About 20 or so.', 'Ten so far, but I haven\'t finished yet.', 'And so on.', 'Such a nice person.'],
                correctAnswer: 1,
                explanation: '"so far" = şimdiye kadar. Henüz tamamlanmamış bir iş hakkında konuşulur.',
            },
            {
                id: 'wp-ss-ex3',
                type: 'match',
                instruction: 'Match statements and questions 1–6 with responses a–f.',
                question: '"We\'re going to need a lot of stuff." — Which response matches?',
                options: ['Such good news!', 'Paper, glue, paint, scissors and so on.', 'Ten so far.', 'Or so.'],
                correctAnswer: 1,
                explanation: '"and so on" = ve benzerleri. Bir listeyi devam ettirmek için kullanılır.',
            },

            // ── Exercise b: "Find examples of rules 1–3 in 3a." ──
            {
                id: 'wp-ss-ex4',
                type: 'multiple_choice',
                instruction: 'Find examples of rules 1–3 in 3a.',
                question: 'Rule 1: We use "so" + clause to describe a result. Rule 2: We use "so" before an adjective or adverb to add emphasis. Rule 3: We use "such" before an adjective + noun to add emphasis. — "Julie works so hard!" follows which rule?',
                options: ['Rule 1 (result)', 'Rule 2 (so + adjective/adverb)', 'Rule 3 (such + adj + noun)'],
                correctAnswer: 1,
                explanation: '"so hard" = so + zarf (adverb) → Rule 2: vurgu için kullanılır.',
            },
            {
                id: 'wp-ss-ex5',
                type: 'multiple_choice',
                instruction: 'Find examples of rules 1–3 in 3a.',
                question: '"That\'s such good news!" follows which rule?',
                options: ['Rule 1 (result)', 'Rule 2 (so + adjective/adverb)', 'Rule 3 (such + adj + noun)'],
                correctAnswer: 2,
                explanation: '"such good news" = such + sıfat + isim → Rule 3: vurgu için kullanılır.',
            },

            // ── Exercise c: "Match the words in the box with the meanings." ──
            // and so on / or so / so far
            {
                id: 'wp-ss-ex6',
                type: 'match',
                instruction: 'Match the words in the box with the meanings: and so on, or so, so far.',
                question: '"there are more things on the list" = _____',
                options: ['and so on', 'or so', 'so far'],
                correctAnswer: 0,
                explanation: '"and so on" = listede daha fazla şey var, vesaire.',
            },
            {
                id: 'wp-ss-ex7',
                type: 'match',
                instruction: 'Match the words in the box with the meanings: and so on, or so, so far.',
                question: '"3 more or less" = _____',
                options: ['and so on', 'or so', 'so far'],
                correctAnswer: 1,
                explanation: '"or so" = aşağı yukarı, yaklaşık.',
            },
            {
                id: 'wp-ss-ex8',
                type: 'match',
                instruction: 'Match the words in the box with the meanings: and so on, or so, so far.',
                question: '"until now" = _____',
                options: ['and so on', 'or so', 'so far'],
                correctAnswer: 2,
                explanation: '"so far" = şimdiye kadar.',
            },

            // ── Exercise d: "Complete the sentences with one, two or three words." ──
            {
                id: 'wp-ss-ex9',
                type: 'fill_blank',
                instruction: 'Complete the sentences with one, two or three words. One of the words must be "so" or "such".',
                question: 'Emma speaks _____ quickly!',
                correctAnswer: 'so',
                explanation: '"so" + zarf: "so quickly" = o kadar hızlı.',
            },
            {
                id: 'wp-ss-ex10',
                type: 'fill_blank',
                instruction: 'Complete the sentences with one, two or three words.',
                question: 'We need to leave in 10 minutes _____.',
                correctAnswer: 'or so',
                explanation: '"or so" = yaklaşık.',
            },
            {
                id: 'wp-ss-ex11',
                type: 'fill_blank',
                instruction: 'Complete the sentences with one, two or three words.',
                question: 'It was too difficult, _____ I asked for help.',
                correctAnswer: 'so',
                explanation: '"so" = bu yüzden. Sonuç bağlacı olarak kullanılır.',
            },
            {
                id: 'wp-ss-ex12',
                type: 'fill_blank',
                instruction: 'Complete the sentences with one, two or three words.',
                question: 'She\'s _____ interesting person.',
                correctAnswer: 'such an',
                explanation: '"such an" + sıfat + sayılabilir tekil isim: "such an interesting person".',
            },
            {
                id: 'wp-ss-ex13',
                type: 'fill_blank',
                instruction: 'Complete the sentences with one, two or three words.',
                question: 'I don\'t like _____ hot weather.',
                correctAnswer: 'such',
                explanation: '"such" + sıfat + sayılamaz isim: "such hot weather".',
            },
            {
                id: 'wp-ss-ex14',
                type: 'fill_blank',
                instruction: 'Complete the sentences with one, two or three words.',
                question: 'It was _____ big achievement for me.',
                correctAnswer: 'such a',
                explanation: '"such a" + sıfat + sayılabilir tekil isim: "such a big achievement".',
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════
    // UNIT 5 — WORDPOWER: problem
    // Source: Unit 5 Review and Extension, Section 3 (p. 66)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 'wp-problem',
        unit: 5,
        rootWord: 'problem',
        title: 'Wordpower: problem',
        description: 'The word "problem" is used with many different verbs and expressions. Learn common collocations with "problem".',
        usages: [
            {
                id: 'wp-prob-u1',
                meaning: 'be aware of a problem',
                meaningTr: '"be aware of" = bir sorunun farkında olmak.',
                examples: [
                    'His shoelaces are untied, but he isn\'t aware of the problem.',
                ],
            },
            {
                id: 'wp-prob-u2',
                meaning: 'fix a problem',
                meaningTr: '"fix" = tamir etmek, düzeltmek, çözmek.',
                examples: [
                    'Juan\'s car won\'t start, but he\'s fixing the problem.',
                ],
            },
            {
                id: 'wp-prob-u3',
                meaning: 'face a problem',
                meaningTr: '"face" = yüzleşmek, karşı karşıya kalmak.',
                examples: [
                    'They\'re facing a lot of problems. Their bills are huge this month.',
                ],
            },
            {
                id: 'wp-prob-u4',
                meaning: 'cause a problem',
                meaningTr: '"cause" = neden olmak, sebep olmak.',
                examples: [
                    'Bad weather has caused a lot of problems for traffic.',
                ],
            },
            {
                id: 'wp-prob-u5',
                meaning: 'solve a problem',
                meaningTr: '"solve" = çözmek.',
                examples: [
                    'Lena is upset, but her parents are trying to solve the problem.',
                ],
            },
            {
                id: 'wp-prob-u6',
                meaning: 'tackle a problem',
                meaningTr: '"tackle" = ele almak, üstesinden gelmek, bir problemle başa çıkmak.',
                examples: [
                    'The fire quickly got out of control, but they\'re tackling the problem.',
                ],
            },
        ],
        exercises: [
            // ── Exercise a: "Match pictures a–f with sentences 1–6." ──
            {
                id: 'wp-prob-ex1',
                type: 'match',
                instruction: 'Match pictures a–f with sentences 1–6.',
                question: '"His shoelaces are untied, but he isn\'t _____ the problem." — What verb goes in the blank?',
                options: ['aware of', 'fixing', 'facing', 'solving', 'tackling', 'causing'],
                correctAnswer: 0,
                explanation: '"be aware of" = farkında olmak. Ayakkabı bağları çözük ama farkında değil.',
            },
            {
                id: 'wp-prob-ex2',
                type: 'match',
                instruction: 'Match pictures a–f with sentences 1–6.',
                question: '"Juan\'s car won\'t start, but he\'s _____ the problem." — What verb goes in the blank?',
                options: ['aware of', 'fixing', 'facing', 'solving', 'tackling', 'causing'],
                correctAnswer: 1,
                explanation: '"fix" = tamir etmek. Araba çalışmıyor ve sorunu çözmeye çalışıyor.',
            },
            {
                id: 'wp-prob-ex3',
                type: 'match',
                instruction: 'Match pictures a–f with sentences 1–6.',
                question: '"They\'re _____ a lot of problems. Their bills are huge this month." — What verb goes in the blank?',
                options: ['aware of', 'fixing', 'facing', 'solving', 'tackling', 'causing'],
                correctAnswer: 2,
                explanation: '"face" = yüzleşmek. Birçok sorunla karşı karşıyalar.',
            },

            // ── Exercise b: "Replace the words in bold with the correct forms of the verbs in the box." ──
            // Box: be aware of, cause, face, fix, solve, tackle
            {
                id: 'wp-prob-ex4',
                type: 'fill_blank',
                instruction: 'Replace the words in bold with the correct forms of the verbs in the box: be aware of, cause, face, fix, solve, tackle.',
                question: 'Most people in my country know about the problem of rising sea levels.',
                correctAnswer: 'are aware of',
                explanation: '"know about" = "are aware of" (farkında olmak).',
            },
            {
                id: 'wp-prob-ex5',
                type: 'fill_blank',
                instruction: 'Replace the words in bold with the correct forms of the verbs in the box.',
                question: 'My country is dealing with the problem of pollution in big cities.',
                correctAnswer: 'tackling',
                explanation: '"dealing with" = "tackling" (ele almak, üstesinden gelmek).',
            },
            {
                id: 'wp-prob-ex6',
                type: 'fill_blank',
                instruction: 'Replace the words in bold with the correct forms of the verbs in the box.',
                question: 'I\'m good at finding an answer to problems with computers.',
                correctAnswer: 'fixing',
                explanation: '"finding an answer to" = "fixing" (düzeltmek, çözmek).',
            },
            {
                id: 'wp-prob-ex7',
                type: 'fill_blank',
                instruction: 'Replace the words in bold with the correct forms of the verbs in the box.',
                question: 'I express my opinions strongly and that sometimes creates problems.',
                correctAnswer: 'causes',
                explanation: '"creates problems" = "causes problems" (sorunlara neden olmak).',
            },
            {
                id: 'wp-prob-ex8',
                type: 'fill_blank',
                instruction: 'Replace the words in bold with the correct forms of the verbs in the box.',
                question: 'Damage to the environment is a problem that everyone should try to stop.',
                correctAnswer: 'solve',
                explanation: '"try to stop" = "solve" (çözmek).',
            },
            {
                id: 'wp-prob-ex9',
                type: 'fill_blank',
                instruction: 'Replace the words in bold with the correct forms of the verbs in the box.',
                question: 'Engineers will soon end the problem of people not having enough clean drinking water.',
                correctAnswer: 'fix',
                explanation: '"end the problem" = "fix" (sorunu gidermek).',
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════
    // UNIT 6 — WORDPOWER: go
    // Source: Unit 6 Review and Extension, Section 3 (p. 78)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 'wp-go',
        unit: 6,
        rootWord: 'go',
        title: 'Wordpower: go',
        description: 'The word "go" has many different meanings and is used in many common phrases. Learn how "go" changes meaning in different contexts.',
        usages: [
            {
                id: 'wp-go-u1',
                meaning: 'go = disappear / be used up',
                meaningTr: '"go" = kaybolmak, bitmek, tükenmek.',
                examples: [
                    'Where does that path go?',
                    'Where\'s the milk?',
                ],
            },
            {
                id: 'wp-go-u2',
                meaning: 'go (well / badly) = turn out',
                meaningTr: '"go well / go wrong" = iyi gitmek / ters gitmek. Bir olayın sonucunu anlatır.',
                examples: [
                    'How did your trip go?',
                    'It went wrong. I threw it away.',
                    'Really well. I met some very nice people.',
                    'Yes, but when I got there it had all gone.',
                ],
            },
            {
                id: 'wp-go-u3',
                meaning: 'go with = match / suit',
                meaningTr: '"go with" = uymak, yakışmak.',
                examples: [
                    'This is my new dress. Do these shoes go with it?',
                ],
            },
            {
                id: 'wp-go-u4',
                meaning: 'go off = go bad (food)',
                meaningTr: '"go off" = bozulmak (yiyecek). "go bad" ile aynı anlamda.',
                examples: [
                    'Was there food at the party?',
                    'Yes, but when I got there it had all gone. It went off. I threw it away.',
                ],
            },
            {
                id: 'wp-go-u5',
                meaning: 'go + adverb to describe how things happen',
                meaningTr: '"go" + zarf = bir şeyin nasıl gerçekleştiğini anlatmak.',
                examples: [
                    'It went wrong. I threw it away.',
                    'How did your trip go?',
                ],
            },
            {
                id: 'wp-go-u6',
                meaning: 'go + adjective to describe a change',
                meaningTr: '"go" + sıfat = bir durum değişikliğini anlatmak (genellikle olumsuz). Renk, durum değişimleri.',
                examples: [
                    'The traffic lights went from red to green.',
                    'Milk that is not refrigerated will eventually go bad.',
                    'No, they\'re the wrong colour.',
                ],
            },
        ],
        exercises: [
            // ── Exercise a: "Match questions 1–6 with responses a–f." ──
            {
                id: 'wp-go-ex1',
                type: 'match',
                instruction: 'Match questions 1–6 with responses a–f.',
                question: '"Where does that path go?" — Which response matches?',
                options: [
                    'To the beach, I think.',
                    'Really well. I met some very nice people.',
                    'No, they\'re the wrong colour.',
                    'It went off. I threw it away.',
                ],
                correctAnswer: 0,
                explanation: '"Where does that path go?" sorusu bir yere giden yol hakkında → "To the beach, I think."',
            },
            {
                id: 'wp-go-ex2',
                type: 'match',
                instruction: 'Match questions 1–6 with responses a–f.',
                question: '"How did your trip go?" — Which response matches?',
                options: [
                    'To the beach, I think.',
                    'Really well. I met some very nice people.',
                    'No, they\'re the wrong colour.',
                    'It went off. I threw it away.',
                ],
                correctAnswer: 1,
                explanation: '"How did your trip go?" = gezi nasıl geçti → "Really well. I met some very nice people."',
            },
            {
                id: 'wp-go-ex3',
                type: 'match',
                instruction: 'Match questions 1–6 with responses a–f.',
                question: '"Do these shoes go with it?" — Which response matches?',
                options: [
                    'To the beach, I think.',
                    'Really well. I met some very nice people.',
                    'No, they\'re the wrong colour.',
                    'It went off. I threw it away.',
                ],
                correctAnswer: 2,
                explanation: '"go with" = uymak, yakışmak. Ayakkabılar uymuyor → "No, they\'re the wrong colour."',
            },
            {
                id: 'wp-go-ex4',
                type: 'match',
                instruction: 'Match questions 1–6 with responses a–f.',
                question: '"Where\'s the milk?" — Which response matches?',
                options: [
                    'To the beach, I think.',
                    'Really well. I met some very nice people.',
                    'No, they\'re the wrong colour.',
                    'It went off. I threw it away.',
                ],
                correctAnswer: 3,
                explanation: '"go off" = bozulmak (yiyecek). Süt gitmiş çünkü bozulmuş.',
            },

            // ── Exercise b: "Match the phrases with go in 3a with these descriptions." ──
            {
                id: 'wp-go-ex5',
                type: 'match',
                instruction: 'Match the phrases with "go" in 3a with these descriptions. We can use: go = to mean disappear, go (with) = to mean look similar / look good together, go = to mean go towards, go wrong = to mean develop problems / not succeed, go + adverb to describe how things happen, go + adjective to describe a change.',
                question: '"go" meaning "to mean disappear" — Which example from the conversation demonstrates this?',
                options: [
                    'Where does that path go?',
                    'Yes, but when I got there it had all gone.',
                    'How did your trip go?',
                    'Do these shoes go with it?',
                ],
                correctAnswer: 1,
                explanation: '"it had all gone" = hepsi kaybolmuştu/bitmişti → go = disappear.',
            },
            {
                id: 'wp-go-ex6',
                type: 'match',
                instruction: 'Match the phrases with "go" in 3a with these descriptions.',
                question: '"go (with)" meaning "look good together" — Which example demonstrates this?',
                options: [
                    'Where does that path go?',
                    'Yes, but when I got there it had all gone.',
                    'How did your trip go?',
                    'Do these shoes go with it?',
                ],
                correctAnswer: 3,
                explanation: '"go with" = uymak, yakışmak.',
            },

            // ── Exercise c: "Complete each sentence with the correct form of go and a word or phrase from the box." ──
            // Box: around, bad, orange, really well, with my eyes, wrong
            {
                id: 'wp-go-ex7',
                type: 'fill_blank',
                instruction: 'Complete each sentence with the correct form of "go" and a word or phrase from the box: around, bad, orange, really well, with my eyes, wrong.',
                question: 'In the autumn, the leaves _____.',
                correctAnswer: 'go orange',
                explanation: '"go" + sıfat = durum değişikliği. Yapraklar turuncuya döner.',
            },
            {
                id: 'wp-go-ex8',
                type: 'fill_blank',
                instruction: 'Complete each sentence with the correct form of "go" and a word or phrase from the box.',
                question: 'I had a job interview yesterday. It _____ — I got the job!',
                correctAnswer: 'went really well',
                explanation: '"go really well" = çok iyi gitmek. İşe kabul edilmiş.',
            },
            {
                id: 'wp-go-ex9',
                type: 'fill_blank',
                instruction: 'Complete each sentence with the correct form of "go" and a word or phrase from the box.',
                question: 'Don\'t worry if it _____. Just start again.',
                correctAnswer: 'goes wrong',
                explanation: '"go wrong" = ters gitmek. Ters giderse tekrar başla.',
            },
            {
                id: 'wp-go-ex10',
                type: 'fill_blank',
                instruction: 'Complete each sentence with the correct form of "go" and a word or phrase from the box.',
                question: 'When I turned to speak to Fred, he had already _____.',
                correctAnswer: 'gone',
                explanation: '"go" = kaybolmak, gitmek. Fred çoktan gitmişti.',
            },
            {
                id: 'wp-go-ex11',
                type: 'fill_blank',
                instruction: 'Complete each sentence with the correct form of "go" and a word or phrase from the box.',
                question: 'The road _____ the lake. It\'s a nice drive.',
                correctAnswer: 'goes around',
                explanation: '"go around" = etrafından dolanmak. Yol gölün etrafından geçiyor.',
            },
            {
                id: 'wp-go-ex12',
                type: 'fill_blank',
                instruction: 'Complete each sentence with the correct form of "go" and a word or phrase from the box.',
                question: 'Milk that is not refrigerated will eventually _____.',
                correctAnswer: 'go bad',
                explanation: '"go bad" = bozulmak (yiyecek). Buzdolabına konmayan süt sonunda bozulur.',
            },
        ],
    },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 1 — WORDPOWER: yourself
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'wp-yourself',
    unit: 1,
    rootWord: 'yourself',
    title: 'Wordpower: yourself',
    description: 'The word "yourself" (and other reflexive pronouns) is used in many common expressions in English.',
    usages: [
      {
        id: 'wp-self-u1',
        meaning: 'talk to yourself',
        meaningTr: 'kendi kendine konuşmak.',
        examples: ['I often talk to myself when I am alone.'],
      },
      {
        id: 'wp-self-u2',
        meaning: 'teach yourself',
        meaningTr: 'kendi kendine bir şeyler öğretmek.',
        examples: ['I taught myself how to play the guitar.'],
      },
      {
        id: 'wp-self-u3',
        meaning: 'do it yourself (DIY)',
        meaningTr: 'kendin hallet, kendin yap.',
        examples: ['Instead of hiring a professional, I decided to do it myself.'],
      },
      {
        id: 'wp-self-u4',
        meaning: 'make yourself at home',
        meaningTr: 'kendi evinde gibi hisset.',
        examples: ['Please, come in and make yourself at home!'],
      },
      {
        id: 'wp-self-u5',
        meaning: 'help yourself',
        meaningTr: 'buyur al, servis et.',
        examples: ['There is plenty of food on the table, so help yourself.'],
      },
      {
        id: 'wp-self-u6',
        meaning: 'be yourself',
        meaningTr: 'kendin ol.',
        examples: ['The most important thing is to be yourself.'],
      },
      {
        id: 'wp-self-u7',
        meaning: 'tell yourself',
        meaningTr: 'kendi kendine söylemek.',
        examples: ['I kept telling myself that everything would be okay.'],
      },
      {
        id: 'wp-self-u8',
        meaning: 'look after yourself',
        meaningTr: 'kendine iyi bak.',
        examples: ['Have a safe trip and look after yourself.'],
      },
      {
        id: 'wp-self-u9',
        meaning: 'enjoy yourself',
        meaningTr: 'eğlenmene bak.',
        examples: ['Have a great holiday and enjoy yourself!'],
      },
      {
        id: 'wp-self-u10',
        meaning: 'hurt yourself',
        meaningTr: 'kendini incitmek.',
        examples: ['Be careful with that knife, or you might hurt yourself.'],
      },
    ],
    exercises: [
      {
        id: 'wp-self-ex1',
        type: 'match',
        instruction: 'Match the phrases with the correct situations.',
        question: 'Someone visits your house for the first time.',
        options: ['make yourself at home', 'help yourself', 'be yourself'],
        correctAnswer: 0,
        explanation: 'Misafir geldiğinde "kendi evindeymişsin gibi davran" anlamında kullanılır.',
      },
      {
        id: 'wp-self-ex2',
        type: 'match',
        instruction: 'Match the phrases with the correct situations.',
        question: 'You want someone to take some food.',
        options: ['be yourself', 'help yourself', 'look after yourself'],
        correctAnswer: 1,
        explanation: 'Yemek teklif ederken "buyur al / servis et" anlamında kullanılır.',
      },
    ],
  },

];