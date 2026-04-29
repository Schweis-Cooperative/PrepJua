export interface WordpowerUsage {
    id: string;
    meaning: string;           // English meaning/usage label
    meaningTr: string;         // Turkish explanation of this usage
    examples: string[];        // Example sentences from the textbook
}

export interface WordpowerExercise {
    id: string;
    type: 'match' | 'fill_blank' | 'multiple_choice';
    instruction: string;       // Original exercise instruction from the textbook
    question: string;
    options?: string[];
    correctAnswer: string | number;
    explanation: string;
}

export interface WordpowerBlock {
    id: string;
    unit: number;
    rootWord: string;          // The root word (have, so/such, problem, go)
    title: string;             // Display title
    description: string;       // Brief intro from the textbook
    usages: WordpowerUsage[];
    exercises: WordpowerExercise[];
}
