const fs = require('fs');

let file = fs.readFileSync('src/data/grammarData.ts', 'utf8');

const units1and2 = `
  // ═══════════════════════════════════════════════════════════════
  // UNIT 1 — Subject and object questions (Grammar Focus 1A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "subject-object-questions",
    title: "Subject and object questions",
    description: "Subject and object questions usage. (Grammar Focus 1A)",
    content: \`
## Subject and object questions

a Look at the questions and answers. The main verb is in bold.
1 Q: What do experts **say** about making friends online?
A: You need to build friendships carefully.
2 Q: Who **thinks** online friendships aren't real?
A: People from generations that didn't grow up with online friendships.

- In question 1 the subject is *experts*. Question 1 is an **object question**.
- In question 2, the subject is *Who*. Question 2 is a **subject question**.
- We use auxiliary verbs *do, does, did* in **object questions**.
    \`,
    tips: [
      "In object questions, the question word is the object. We use do/does/did.",
      "In subject questions, the question word is the subject. We don't use do/does/did.",
    ],
    questions: [
      {
        id: "gf1a-q1",
        question: "Grammar Focus 1A: Make a question: Who / call / you / yesterday? (Subject question)",
        options: ["Who called you yesterday?", "Who did call you yesterday?"],
        correctAnswer: 0,
        explanation: "Subject question, we don't use auxiliary verb did.",
      },
      {
        id: "gf1a-q2",
        question: "Grammar Focus 1A: Make a question: Who / you / last / text? (Object question)",
        options: ["Who did you last text?", "Who you last texted?"],
        correctAnswer: 0,
        explanation: "Object question, we use auxiliary verb did.",
      },
      {
        id: "gf1a-q3",
        question: "Grammar Focus 1A: Make a question: What / you and your friends / talk about? (Object question)",
        options: ["What do you and your friends talk about?", "What you and your friends talk about?"],
        correctAnswer: 0,
        explanation: "Object question, we use auxiliary verb do.",
      },
      {
        id: "gf1a-q4",
        question: "Grammar Focus 1A: Make a question: What / make / you and your friends / laugh? (Subject question)",
        options: ["What makes you and your friends laugh?", "What does make you and your friends laugh?"],
        correctAnswer: 0,
        explanation: "Subject question, we don't use auxiliary verb does.",
      },
      {
        id: "gf1a-q5",
        question: "Grammar Focus 1A: Make a question: Which of your friends / you / see / every day? (Object question)",
        options: ["Which of your friends do you see every day?", "Which of your friends see you every day?"],
        correctAnswer: 0,
        explanation: "Object question, we use auxiliary verb do.",
      },
      {
        id: "gf1a-q6",
        question: "Grammar Focus 1A: Make a question: What / post / last / make / you laugh? (Subject question)",
        options: ["What post last made you laugh?", "What did post last make you laugh?"],
        correctAnswer: 0,
        explanation: "Subject question, we don't use auxiliary verb did.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 1 — Present simple and present continuous (Grammar Focus 1B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "present-simple-continuous",
    title: "Present simple and present continuous",
    description: "Present simple and present continuous usage. (Grammar Focus 1B)",
    content: \`
## Present simple
We can use the present simple:
1 to talk about things that are generally true
2 to talk about habits and routines
3 with state verbs – verbs about thoughts (e.g., *understand*), feelings (e.g., *want*) and possession (e.g., *own*)

## Present continuous
We can use the present continuous to talk about:
1 actions in progress at the same time as speaking/writing
2 actions in progress around (before and after) the time of speaking/writing
3 changing situations

**Rule:**
subject + *am / is / are* + verb + *-ing*
    \`,
    tips: [
      "Present simple: habits, routines, general truths, and state verbs.",
      "Present continuous: actions in progress, changing situations.",
    ],
    questions: [
      {
        id: "gf1b-q1",
        question: "Grammar Focus 1B: Which tense is used to talk about habits and routines?",
        options: ["Present simple", "Present continuous"],
        correctAnswer: 0,
        explanation: "Present simple is used for habits and routines.",
      },
      {
        id: "gf1b-q2",
        question: "Grammar Focus 1B: Which tense is used for actions in progress at the same time as speaking?",
        options: ["Present simple", "Present continuous"],
        correctAnswer: 1,
        explanation: "Present continuous is used for actions in progress.",
      },
      {
        id: "gf1b-q3",
        question: "Grammar Focus 1B: 'Young people are spending more and more time playing video games.' What is this an example of?",
        options: ["Habits and routines", "Changing situations"],
        correctAnswer: 1,
        explanation: "It describes a changing situation (Present continuous).",
      },
      {
        id: "gf1b-q4",
        question: "Grammar Focus 1B: 'People learn better if they enjoy learning.' What is this an example of?",
        options: ["Things that are generally true", "State verbs"],
        correctAnswer: 0,
        explanation: "It is a general truth (Present simple).",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 2 — Present perfect and past simple (Grammar Focus 2A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "present-perfect-past-simple",
    title: "Present perfect and past simple",
    description: "Present perfect and past simple usage. (Grammar Focus 2A)",
    content: \`
## Present perfect and past simple

a Look at these sentences from the stories. Which verbs in bold are in the present perfect and which are in the past simple?
1 I'**ve had** a lot of good interviews, but this one was a disaster. (Present perfect)
2 I **had** a job interview with two people last week. (Past simple)
3 They'**ve** just **offered** me the job! (Present perfect)

**Rule:**
To form the past simple, we add *-ed* to the verb, or we use an *irregular* past form of the verb.
We form the present perfect with *have/has* + *past participle*.

- We use the **past simple** to talk about events at a particular time in the past.
- We use the **present perfect** to talk about recent events that have an effect on the present.
- We use the **present perfect** to talk about experiences at some time in our life.
    \`,
    tips: [
      "Past simple: events at a particular time in the past.",
      "Present perfect: recent events with an effect on the present, or life experiences.",
    ],
    questions: [
      {
        id: "gf2a-q1",
        question: "Grammar Focus 2A: Complete the sentence: I ________ (never / have) a really terrible job interview.",
        options: ["'ve never had", "never had"],
        correctAnswer: 0,
        explanation: "Life experience = Present perfect.",
      },
      {
        id: "gf2a-q2",
        question: "Grammar Focus 2A: Complete the sentence: Once, I ________ (forget) to turn off my phone when I was at the cinema.",
        options: ["forgot", "have forgotten"],
        correctAnswer: 0,
        explanation: "Event at a particular time in the past = Past simple.",
      },
      {
        id: "gf2a-q3",
        question: "Grammar Focus 2A: Complete the sentence: Sorry, I can't come with you. My boss ________ (ask) me to work at the weekend.",
        options: ["has asked", "asked"],
        correctAnswer: 0,
        explanation: "Recent event with an effect on the present = Present perfect.",
      },
      {
        id: "gf2a-q4",
        question: "Grammar Focus 2A: Complete the sentence: I ________ (finish) my exams, but I ________ (not / get) the results yet.",
        options: ["finished / didn't get", "'ve finished / haven't got"],
        correctAnswer: 1,
        explanation: "Recent event / up to now = Present perfect.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 2 — Present perfect and present perfect continuous (Grammar Focus 2B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "present-perfect-continuous",
    title: "Present perfect and present perfect continuous",
    description: "Present perfect and present perfect continuous usage. (Grammar Focus 2B)",
    content: \`
## Present perfect and present perfect continuous

a Read the extracts and answer the questions.
- I'**ve always been** keen on photography. I'**ve been taking** photos since I was 12.
- StopApp is a really useful app and I'**ve been recommending** it to all my friends.
- I'**ve had** it for a week, and I'**ve been using** it a lot.

**Rule:**
To form the present perfect continuous tense, use *have/has* + *been* + *verb-ing*.

- We use the **present perfect** for verbs that are about states (the way things are).
- We use the **present perfect continuous** for verbs that are about activities (things you do) and to show how long something has continued up until now, or a repeated activity that started recently.
    \`,
    tips: [
      "Present perfect: states (be, have).",
      "Present perfect continuous: activities (taking, recommending, using).",
    ],
    questions: [
      {
        id: "gf2b-q1",
        question: "Grammar Focus 2B: Complete the sentence: I ________ this phone for three years. (own)",
        options: ["'ve owned", "'ve been owning"],
        correctAnswer: 0,
        explanation: "'own' is a state verb, so we use Present perfect.",
      },
      {
        id: "gf2b-q2",
        question: "Grammar Focus 2B: Complete the sentence: I ________ for my own name online. (never / search)",
        options: ["'ve never searched", "'ve never been searching"],
        correctAnswer: 0,
        explanation: "Experience = Present perfect.",
      },
      {
        id: "gf2b-q3",
        question: "Grammar Focus 2B: Complete the sentence: I ________ TV all day. (watch)",
        options: ["'ve watched", "'ve been watching"],
        correctAnswer: 1,
        explanation: "Activity continuing up to now = Present perfect continuous.",
      },
      {
        id: "gf2b-q4",
        question: "Grammar Focus 2B: Complete the sentence: I ________ for a new tablet, but I haven't got enough money yet. (save up)",
        options: ["'ve saved up", "'ve been saving up"],
        correctAnswer: 1,
        explanation: "Activity continuing up to now = Present perfect continuous.",
      }
    ],
  },
`;

file = file.replace('export const grammarData: GrammarTopic[] = [', 'export const grammarData: GrammarTopic[] = [\n' + units1and2);

const units7to10 = `
  // ═══════════════════════════════════════════════════════════════
  // UNIT 7 — Modals of deduction (Grammar Focus 7A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "modals-of-deduction",
    title: "Modals of deduction",
    description: "Must, might, could, can't for deduction. (Grammar Focus 7A)",
    content: \`
## Modals of deduction

Look at these sentences and their meanings:
1 It **must** be a holiday home. -> I'm sure it's a holiday home.
2 It **might** be a holiday home. -> I think it's a holiday home (but I'm not sure).
3 It **could** be a holiday home. -> I think it's a holiday home (but I'm not sure).
4 It **can't** be a holiday home. -> I'm sure it's not a holiday home.

**Rule:**
After *must*, *might*, *could* and *can't*, we use the **infinitive without to**.
    \`,
    tips: [
      "must: I'm sure it is.",
      "might / could: I think it is (not sure).",
      "can't: I'm sure it is not. (Opposite of must for deduction is can't, not mustn't!)",
      "Use infinitive without to after these modals.",
    ],
    questions: [
      {
        id: "gf7a-q1",
        question: "Grammar Focus 7A: 'I'm sure it's a holiday home.' Which modal means this?",
        options: ["must", "might", "can't"],
        correctAnswer: 0,
        explanation: "must = I'm sure it is.",
      },
      {
        id: "gf7a-q2",
        question: "Grammar Focus 7A: 'I'm sure it's not a holiday home.' Which modal means this?",
        options: ["mustn't", "can't", "might not"],
        correctAnswer: 1,
        explanation: "can't = I'm sure it is not.",
      },
      {
        id: "gf7a-q3",
        question: "Grammar Focus 7A: Complete the sentence: It's very small, so it ________ belong to a big family.",
        options: ["must", "can't", "could"],
        correctAnswer: 1,
        explanation: "Since it's very small, I'm sure it doesn't belong to a big family = can't.",
      },
      {
        id: "gf7a-q4",
        question: "Grammar Focus 7A: Complete the sentence: Whoever lives there ________ have children.",
        options: ["must", "might", "can't"],
        correctAnswer: 1,
        explanation: "It is a possibility (I am not sure) = might/could.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 7 — Quantifiers (Grammar Focus 7B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "quantifiers",
    title: "Quantifiers",
    description: "Quantifiers usage: a lot of, too many, much, plenty of, many, enough, very few, very little. (Grammar Focus 7B)",
    content: \`
## Quantifiers

Underline the correct words:
1 There are **a lot of** / ~~too many~~ different kinds of plants in the Turia Gardens.
2 There are ~~much~~ / **plenty of** things to see and do in the park.
3 Pablo goes there early in the morning because there aren't so **many** / ~~much~~ people.
4 Ana thinks there are **too many** / ~~enough~~ tourists there.
5 There's ~~very few~~ / **very little** rubbish in the park.
6 Rosalia thinks there ~~aren't any~~ / **aren't enough** public toilets in the park.
    \`,
    tips: [
      "a lot of / plenty of: large amounts (countable & uncountable).",
      "too many: more than you want (countable).",
      "too much: more than you want (uncountable).",
      "many: countable nouns.",
      "much: uncountable nouns.",
      "very few: small amount (countable).",
      "very little: small amount (uncountable).",
      "enough / aren't enough: sufficient amount.",
    ],
    questions: [
      {
        id: "gf7b-q1",
        question: "Grammar Focus 7B: There are ________ different kinds of plants in the Turia Gardens.",
        options: ["a lot of", "too many"],
        correctAnswer: 0,
        explanation: "A lot of = a large amount. Too many would mean a negative thing.",
      },
      {
        id: "gf7b-q2",
        question: "Grammar Focus 7B: Pablo goes there early in the morning because there aren't so ________ people.",
        options: ["many", "much"],
        correctAnswer: 0,
        explanation: "People is a countable noun, so we use many.",
      },
      {
        id: "gf7b-q3",
        question: "Grammar Focus 7B: There's ________ rubbish in the park.",
        options: ["very few", "very little"],
        correctAnswer: 1,
        explanation: "Rubbish is uncountable, so we use very little.",
      },
      {
        id: "gf7b-q4",
        question: "Grammar Focus 7B: Rosalia thinks there ________ public toilets in the park.",
        options: ["aren't any", "aren't enough"],
        correctAnswer: 1,
        explanation: "There are some, but not a sufficient amount = aren't enough.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 8 — Reported speech (Grammar Focus 8A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "reported-speech",
    title: "Reported speech",
    description: "Reported speech and reported questions. (Grammar Focus 8A)",
    content: \`
## Reported speech

1 When we report what someone has said or written, we often change the tense of the direct speech **backwards** in time.
2 We use **normal word order** in reported questions.
3 We often don't change the tense when we report things that are **still true**.

### Tense changes:
| Direct speech | Reported speech |
|---------------|-----------------|
| present simple | past simple |
| past simple | past perfect |
| present continuous | past continuous |
| present perfect | past perfect |
| can | could |

**Examples:**
- The interviewer asked me **how I had started** listening to podcasts.
- I replied that I **'d been** bored with all my music.
- I told him that I **loved** them.
    \`,
    tips: [
      "Change tenses backwards in time.",
      "Reported questions use normal word order (subject + verb), not question word order.",
      "If something is still true, you don't always have to change the tense.",
    ],
    questions: [
      {
        id: "gf8a-q1",
        question: "Grammar Focus 8A: What is the reported speech tense for 'present continuous'?",
        options: ["past continuous", "past perfect", "present perfect"],
        correctAnswer: 0,
        explanation: "Present continuous changes to past continuous.",
      },
      {
        id: "gf8a-q2",
        question: "Grammar Focus 8A: What is the reported speech tense for 'past simple'?",
        options: ["past simple", "past continuous", "past perfect"],
        correctAnswer: 2,
        explanation: "Past simple changes to past perfect.",
      },
      {
        id: "gf8a-q3",
        question: "Grammar Focus 8A: What is the word order in reported questions?",
        options: ["normal word order", "question word order"],
        correctAnswer: 0,
        explanation: "We use normal word order in reported questions.",
      },
      {
        id: "gf8a-q4",
        question: "Grammar Focus 8A: 'How did you start listening?' -> The interviewer asked me how ________ listening.",
        options: ["did I start", "I had started"],
        correctAnswer: 1,
        explanation: "Past simple changes to past perfect, and we use normal word order.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 8 — Verb patterns (Grammar Focus 8B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "verb-patterns",
    title: "Verb patterns",
    description: "Verbs followed by -ing or infinitive. (Grammar Focus 8B)",
    content: \`
## Verb patterns

### We use verb + -ing:
a after prepositions (e.g., interested **in working**)
b after certain verbs (e.g., *keep*, *start*, *love*, *enjoy **eating***)
c after some expressions (e.g., *it's worth **pretending***, *it's no use*)
d as the subject of a sentence (e.g., ***Setting up** the website was easy*)

### We use an infinitive (with to):
a after question words (e.g., wasn't sure what **to do**)
b after certain verbs (e.g., *want*, *plan*, *seem*, *decide*, *managed **to make***)
c after certain adjectives (e.g., *difficult*, *good*, *important*, *happy **to believe***)
d to show purpose (e.g., needed... **to avoid** anti-spam technology)
    \`,
    tips: [
      "Verb + -ing: prepositions, subject of sentence, certain verbs (enjoy, keep), expressions (it's worth).",
      "Infinitive (to): purpose, question words, certain adjectives, certain verbs (want, decide, manage).",
    ],
    questions: [
      {
        id: "gf8b-q1",
        question: "Grammar Focus 8B: I enjoy ________ (shop) for clothes.",
        options: ["to shop", "shopping"],
        correctAnswer: 1,
        explanation: "'enjoy' is followed by -ing.",
      },
      {
        id: "gf8b-q2",
        question: "Grammar Focus 8B: I'm planning ________ (get) a new phone.",
        options: ["to get", "getting"],
        correctAnswer: 0,
        explanation: "'plan' is followed by the infinitive.",
      },
      {
        id: "gf8b-q3",
        question: "Grammar Focus 8B: It's difficult ________ (choose) clothes.",
        options: ["to choose", "choosing"],
        correctAnswer: 0,
        explanation: "After adjectives, we use the infinitive.",
      },
      {
        id: "gf8b-q4",
        question: "Grammar Focus 8B: I think it's worth ________ (spend) a lot of money.",
        options: ["to spend", "spending"],
        correctAnswer: 1,
        explanation: "After 'it's worth', we use -ing.",
      },
      {
        id: "gf8b-q5",
        question: "Grammar Focus 8B: ________ (go) to language classes is a good way to meet new people.",
        options: ["To go", "Going"],
        correctAnswer: 1,
        explanation: "As the subject of a sentence, we use -ing.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 9 — The passive (Grammar Focus 9A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "the-passive",
    title: "The passive",
    description: "The passive voice. (Grammar Focus 9A)",
    content: \`
## The passive

Last week, a new TV series **was uploaded** to your streaming service.
Young people **are attracted** to TV series they can binge on.

We often use the passive when:
1 we **don't know** who did an action
2 it's **obvious** who did an action
3 it's **not important** who did an action

- We can use **by** + noun after a passive verb to say who/what did the action. (e.g., *was directed **by** Martin Scorsese*)
- We can use **with** + noun after a passive verb to say what was used to do the action. (e.g., *was filmed **with** a smartphone camera*)
    \`,
    tips: [
      "Use passive when the doer is unknown, obvious, or unimportant.",
      "Use 'by' for the doer/agent.",
      "Use 'with' for the instrument/tool.",
    ],
    questions: [
      {
        id: "gf9a-q1",
        question: "Grammar Focus 9A: We use the passive when it's ________ who did an action.",
        options: ["obvious", "not obvious"],
        correctAnswer: 0,
        explanation: "We use the passive when the doer is obvious.",
      },
      {
        id: "gf9a-q2",
        question: "Grammar Focus 9A: The first episode was directed ________ Martin Scorsese.",
        options: ["by", "with"],
        correctAnswer: 0,
        explanation: "We use 'by' to say who did the action.",
      },
      {
        id: "gf9a-q3",
        question: "Grammar Focus 9A: The whole episode was filmed ________ a smartphone camera.",
        options: ["by", "with"],
        correctAnswer: 1,
        explanation: "We use 'with' to say what was used to do the action (the tool).",
      },
      {
        id: "gf9a-q4",
        question: "Grammar Focus 9A: 'Binge watching has been criticised by doctors.' What tense is this?",
        options: ["present continuous", "present perfect", "past simple"],
        correctAnswer: 1,
        explanation: "'has been criticised' is present perfect passive.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 9 — Defining and non-defining relative clauses (Grammar Focus 9B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "relative-clauses",
    title: "Defining and non-defining relative clauses",
    description: "Defining and non-defining relative clauses. (Grammar Focus 9B)",
    content: \`
## Defining relative clauses
1 Samba is a kind of Brazilian music **which also has African rhythms**.
2 It's a drum **you play with your hands**.
3 I was sitting next to one of the people **who was in my group**.
4 They were all about the place **where he grew up**.

- A defining relative clause **defines what the noun phrase means and makes it more specific**.
- It **has no comma before it**.
- In defining relative clauses, you can leave out the pronoun if it is the **object** of the relative clause.

## Non-defining relative clauses
5 I was with my brother and a friend of his, **who was older than me**, and we were listening to Jay-Z.
6 I started noticing the words, **which were really different from the songs I normally listened to**.

- A non-defining relative clause **only adds extra information about the noun phrase**.
- It **has a comma before it**, and sometimes after it.

A relative clause comes **immediately after the noun phrase it refers to**.
    \`,
    tips: [
      "Defining: specific, essential info, no commas. You can omit the relative pronoun if it's the object.",
      "Non-defining: extra info, uses commas.",
      "Relative pronouns: who, which, where, that.",
    ],
    questions: [
      {
        id: "gf9b-q1",
        question: "Grammar Focus 9B: Which kind of relative clause has commas?",
        options: ["Defining", "Non-defining"],
        correctAnswer: 1,
        explanation: "Non-defining relative clauses use commas.",
      },
      {
        id: "gf9b-q2",
        question: "Grammar Focus 9B: In which kind of clause can you sometimes omit the relative pronoun?",
        options: ["Defining relative clauses", "Non-defining relative clauses"],
        correctAnswer: 0,
        explanation: "You can leave out the pronoun in a defining relative clause if it is the object.",
      },
      {
        id: "gf9b-q3",
        question: "Grammar Focus 9B: Where does a relative clause come in a sentence?",
        options: ["Immediately after the noun phrase it refers to", "At the end of the sentence"],
        correctAnswer: 0,
        explanation: "It comes immediately after the noun phrase it refers to.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 10 — Second conditional (Grammar Focus 10A)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "second-conditional",
    title: "Second conditional",
    description: "Second conditional. (Grammar Focus 10A)",
    content: \`
## Second conditional

- Was it scary? I think if I went, I'd be terrified!
- If I was a bit fitter, I would definitely do it.

1 We use the second conditional to talk about **things we imagine, but are not real**.
2 To form the second conditional, we use **If + past simple, would / wouldn't + infinitive**.
    \`,
    tips: [
      "Second conditional is for unreal or imagined situations in the present or future.",
      "Form: If + past simple, would + infinitive.",
    ],
    questions: [
      {
        id: "gf10a-q1",
        question: "Grammar Focus 10A: We use the second conditional to talk about...",
        options: ["things we imagine, but are not real", "things that will probably do in the future"],
        correctAnswer: 0,
        explanation: "Second conditional is for imagined, unreal situations.",
      },
      {
        id: "gf10a-q2",
        question: "Grammar Focus 10A: To form the second conditional, we use If + past simple, ...",
        options: ["will + infinitive", "would + infinitive"],
        correctAnswer: 1,
        explanation: "We use would + infinitive in the main clause.",
      },
      {
        id: "gf10a-q3",
        question: "Grammar Focus 10A: 'If I ________ a bit fitter, I would definitely do it.'",
        options: ["was", "would be"],
        correctAnswer: 0,
        explanation: "We use the past simple after 'If'.",
      }
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // UNIT 10 — Third conditional (Grammar Focus 10B)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "third-conditional",
    title: "Third conditional",
    description: "Third conditional. (Grammar Focus 10B)",
    content: \`
## Third conditional

If Wendy **had had** better handwriting, my business **wouldn't have been** such a success, and I certainly **wouldn't have met** Matt.

1 We use the third conditional to talk about **an imagined past event and its likely result**.
2 The correct form of the third conditional is:
**If + past perfect, would have + past participle**.
    \`,
    tips: [
      "Third conditional is for imagined situations in the past (too late to change now!).",
      "Form: If + past perfect (had + V3), would have + past participle (V3).",
    ],
    questions: [
      {
        id: "gf10b-q1",
        question: "Grammar Focus 10B: When do we use the third conditional?",
        options: ["to talk about the results of real past events", "to talk about an imagined past event and its likely result"],
        correctAnswer: 1,
        explanation: "It is for imagined (unreal) past events.",
      },
      {
        id: "gf10b-q2",
        question: "Grammar Focus 10B: What is the correct form of the third conditional?",
        options: ["If + past simple, would + past participle", "If + past perfect, would have + past participle"],
        correctAnswer: 1,
        explanation: "If + past perfect, would have + past participle.",
      },
      {
        id: "gf10b-q3",
        question: "Grammar Focus 10B: 'If Wendy ________ better handwriting, my business wouldn't have been such a success.'",
        options: ["had had", "would have had"],
        correctAnswer: 0,
        explanation: "We use past perfect (had had) after 'If'.",
      }
    ],
  },
`;

file = file.replace('];', units7to10 + '\n];');
fs.writeFileSync('src/data/grammarData.ts', file);
