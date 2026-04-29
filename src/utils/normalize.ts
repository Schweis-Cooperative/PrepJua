/**
 * Normalize a string for comparison: lowercase, trim, strip punctuation.
 */
export function normalizeAnswer(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?'"()\-–—]/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * Compare two answers with normalization
 */
export function compareAnswers(userAnswer: string, correctAnswer: string): boolean {
  return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
}

/**
 * Handle was/were slash notation: "was/were" matches either "was" or "were"
 */
export function compareWithSlash(userAnswer: string, correctAnswer: string): boolean {
  const normalized = normalizeAnswer(userAnswer);
  
  if (correctAnswer.includes('/')) {
    const variants = correctAnswer.split('/').map(v => normalizeAnswer(v.trim()));
    return variants.includes(normalized);
  }
  
  return normalizeAnswer(correctAnswer) === normalized;
}
