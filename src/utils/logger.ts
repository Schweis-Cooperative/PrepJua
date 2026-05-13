/**
 * Centralized logging utility for PrepJua.
 * All user interactions are sent to the Express backend as fire-and-forget
 * POST requests. The backend writes to both global and user-specific log files.
 *
 * This module is the ONLY frontend entry point for server logging.
 * Components should call logActivity() or the specialized helpers below.
 */

function getUsername(): string {
  const raw = localStorage.getItem('prepjua_username') || localStorage.getItem('username') || '';
  return raw.replace(/^"(.*)"$/, '$1') || 'Unknown User';
}

/** Fire-and-forget log to the Express backend. Never blocks UI. */
function sendLog(action: string): void {
  const nickname = getUsername();
  const timestamp = new Date().toISOString();
  const logDetails = `[${timestamp}] Action: ${action}`;

  fetch('/api/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ logDetails, nickname }),
  }).catch(() => { /* silent — never block UI */ });
}

// ─── Public API ────────────────────────────────────────────────

/** General activity log (navigation, registration, etc.) */
export const logActivity = (action: string): void => {
  sendLog(action);
};

/** Log when a word is marked as Learned or Unlearned */
export const logWordToggle = (wordId: string, wordText: string, learned: boolean): void => {
  sendLog(`VOCAB: ${learned ? '✅ Marked Learned' : '❌ Marked Unlearned'} — "${wordText}" (${wordId})`);
};

/** Log an individual question answer */
export const logAnswer = (opts: {
  section: string;
  questionId: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}): void => {
  const verdict = opts.isCorrect ? '✅ CORRECT' : '❌ INCORRECT';
  sendLog(
    `ANSWER [${opts.section}]: ${verdict} | Q: "${opts.question}" | User: "${opts.userAnswer}" | Correct: "${opts.correctAnswer}" (${opts.questionId})`
  );
};

/** Log final score of a quiz/exercise/exam session */
export const logScore = (section: string, title: string, score: number, total: number): void => {
  const pct = Math.round((score / total) * 100);
  sendLog(`SCORE [${section}]: ${title} — ${score}/${total} (${pct}%)`);
};

/** Log AI feature usage (explanation requests, essay grading) */
export const logAI = (feature: string, context: string): void => {
  sendLog(`AI [${feature}]: ${context}`);
};
