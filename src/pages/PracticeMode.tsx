import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, RotateCcw, Sparkles, Brain, Flame, ChevronRight } from 'lucide-react';
import { vocabularyData } from '../data/vocabularyData';
import { useProgress } from '../hooks/useProgress';
import { LEITNER_INTERVALS } from '../types/progress';

type PracticeSource = 'due' | 'all' | 'learned';

export default function PracticeMode() {
  const { dueToday, learnedWords, promoteWord, demoteWord, srsCards } = useProgress();
  const [source, setSource] = useState<PracticeSource | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  // Build practice word list based on selected source
  const practiceWords = useMemo(() => {
    if (!source) return [];
    let ids: string[] = [];
    if (source === 'due') {
      ids = dueToday.map(c => c.wordId);
    } else if (source === 'learned') {
      ids = learnedWords;
    } else {
      ids = vocabularyData.map(w => w.id);
    }
    // Shuffle
    const words = ids
      .map(id => vocabularyData.find(w => w.id === id))
      .filter(Boolean) as typeof vocabularyData;
    return words.sort(() => Math.random() - 0.5).slice(0, 20);
  }, [source, dueToday, learnedWords]);

  const currentWord = practiceWords[currentIndex];

  // Build the cloze sentence: blank out the target word
  const clozeSentence = useMemo(() => {
    if (!currentWord) return '';
    const { example, word } = currentWord;
    // Try to find and blank out the word (case-insensitive)
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    if (regex.test(example)) {
      return example.replace(regex, '_____');
    }
    // If word not found literally in example, just show the sentence with a hint
    return `${example}\n\n(Translate: ${currentWord.translation})`;
  }, [currentWord]);

  const handleSubmit = useCallback(() => {
    if (!currentWord || result) return;
    const answer = userInput.trim().toLowerCase();
    const correct = currentWord.word.toLowerCase();
    if (answer === correct) {
      setResult('correct');
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      promoteWord(currentWord.id);
    } else {
      setResult('wrong');
      setScore(prev => ({ ...prev, wrong: prev.wrong + 1 }));
      demoteWord(currentWord.id);
    }
  }, [currentWord, userInput, result, promoteWord, demoteWord]);

  const handleNext = useCallback(() => {
    setResult(null);
    setUserInput('');
    setCurrentIndex(prev => prev + 1);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (result) handleNext();
      else handleSubmit();
    }
  }, [result, handleNext, handleSubmit]);

  // Auto-focus input
  useEffect(() => {
    if (source && !result) {
      inputRef.current?.focus();
    }
  }, [source, currentIndex, result]);

  const isFinished = source && currentIndex >= practiceWords.length;
  const srsCard = currentWord ? srsCards.find(c => c.wordId === currentWord.id) : null;
  const boxLabel = srsCard ? `Box ${srsCard.box} · ${LEITNER_INTERVALS[srsCard.box]}d interval` : 'New word';

  // ── Source Selection Screen ──────────────────────────────────────────
  if (!source) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Vocabulary
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-white mb-2">Practice Mode</h1>
          <p className="text-sm text-zinc-500 mb-8">Fill in the blanks. Type the missing word from the example sentence.</p>

          <div className="grid gap-4">
            {/* Due Today */}
            <button
              onClick={() => dueToday.length > 0 && setSource('due')}
              disabled={dueToday.length === 0}
              className="group text-left bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-amber-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Flame size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Due Today</h3>
                  <p className="text-xs text-zinc-500">{dueToday.length} word{dueToday.length !== 1 ? 's' : ''} need review</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-zinc-600 group-hover:text-amber-400 transition-colors" />
              </div>
            </button>

            {/* Learned Words */}
            <button
              onClick={() => learnedWords.length > 0 && setSource('learned')}
              disabled={learnedWords.length === 0}
              className="group text-left bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Brain size={20} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Learned Words</h3>
                  <p className="text-xs text-zinc-500">Practice from your {learnedWords.length} learned words</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
            </button>

            {/* All Words */}
            <button
              onClick={() => setSource('all')}
              className="group text-left bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-sky-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-sky-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Random Mix</h3>
                  <p className="text-xs text-zinc-500">20 random words from the full database</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-zinc-600 group-hover:text-sky-400 transition-colors" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Finished Screen ──────────────────────────────────────────────────
  if (isFinished) {
    const total = score.correct + score.wrong;
    const pct = total > 0 ? Math.round((score.correct / total) * 100) : 0;
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Practice Complete!</h2>
          <p className="text-zinc-400 mb-6">
            You scored <span className="text-emerald-400 font-bold">{score.correct}</span> / {total} ({pct}%)
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => { setSource(null); setCurrentIndex(0); setScore({ correct: 0, wrong: 0 }); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium transition-colors border border-zinc-700"
            >
              <RotateCcw size={16} /> Practice Again
            </button>
            <Link to="/" className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors">
              <ArrowLeft size={16} /> Back to Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Active Practice Screen ───────────────────────────────────────────
  if (!currentWord) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => { setSource(null); setCurrentIndex(0); setScore({ correct: 0, wrong: 0 }); }} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
          <ArrowLeft size={16} /> Exit
        </button>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500">
            {currentIndex + 1} / {practiceWords.length}
          </span>
          <div className="flex gap-2 text-xs">
            <span className="text-emerald-400">✓ {score.correct}</span>
            <span className="text-red-400">✗ {score.wrong}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-zinc-800 rounded-full h-1 mb-8">
        <div
          className="bg-emerald-500 h-1 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex) / practiceWords.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
        >
          {/* SRS Box label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">
              {boxLabel}
            </span>
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">
              {currentWord.category}
            </span>
          </div>

          {/* Translation hint */}
          <p className="text-sm text-zinc-400 mb-1">Turkish: <span className="text-white font-medium">{currentWord.translation}</span></p>

          {/* Cloze sentence */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 my-4">
            <p className="text-base text-zinc-300 leading-relaxed italic whitespace-pre-line">
              "{clozeSentence}"
            </p>
          </div>

          {/* Input */}
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type the missing word..."
              disabled={!!result}
              className={`w-full px-4 py-3 rounded-xl text-sm transition-all border focus:outline-none ${
                result === 'correct'
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400'
                  : result === 'wrong'
                  ? 'bg-red-950/20 border-red-500/40 text-red-400'
                  : 'bg-zinc-900 border-zinc-700 text-zinc-200 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20'
              }`}
            />
          </div>

          {/* Result feedback */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                {result === 'correct' ? (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    <Check size={18} /> Correct! SRS box promoted.
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                      <X size={18} /> Incorrect. The answer was:
                    </div>
                    <p className="text-white font-bold text-lg">{currentWord.word}</p>
                    <p className="text-xs text-zinc-500">Word reset to Box 1 for earlier review.</p>
                  </div>
                )}
                <button
                  onClick={handleNext}
                  className="mt-4 w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium transition-colors border border-zinc-700"
                >
                  Next Word →
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit button (only when no result yet) */}
          {!result && (
            <button
              onClick={handleSubmit}
              disabled={!userInput.trim()}
              className="mt-4 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-colors"
            >
              Check Answer
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
