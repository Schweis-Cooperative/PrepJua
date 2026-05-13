import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { vocabularyData } from '../data/vocabularyData';
import { useProgress } from '../hooks/useProgress';
import { useMistakeBook } from '../hooks/useMistakeBook';
import { logAnswer, logScore } from '../utils/logger';

export default function GeneralQuiz() {
  const { learnedWords, isWordLearned } = useProgress();
  const { addMistake } = useMistakeBook();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = useMemo(() => {
    const unlearned = vocabularyData.filter((w) => !isWordLearned(w.id));
    const pool = unlearned.length >= 10 ? unlearned : vocabularyData;
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);

    return shuffled.map((word) => {
      const others = vocabularyData
        .filter((w) => w.id !== word.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((w) => w.translation);
      const options = [...others, word.translation].sort(() => Math.random() - 0.5);
      return { word, options, correctAnswer: options.indexOf(word.translation) };
    });
  }, [learnedWords, isWordLearned]);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = useCallback(
    (index: number) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(index);
      const isCorrect = index === currentQuestion.correctAnswer;
      if (isCorrect) {
        setScore((s) => s + 1);
      } else {
        addMistake({
          topicId: 'vocabulary',
          questionId: currentQuestion.word.id,
          type: 'vocabulary',
          question: `What does "${currentQuestion.word.word}" mean?`,
          userAnswer: currentQuestion.options[index],
          correctAnswer: currentQuestion.word.translation,
        });
      }
      logAnswer({
        section: 'Vocabulary Quiz',
        questionId: currentQuestion.word.id,
        question: `What does "${currentQuestion.word.word}" mean?`,
        userAnswer: currentQuestion.options[index],
        correctAnswer: currentQuestion.word.translation,
        isCorrect,
      });
    },
    [selectedAnswer, currentQuestion, addMistake]
  );

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
      logScore('Vocabulary Quiz', 'Quick Vocabulary Quiz', score, questions.length);
    }
  };

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className="text-4xl font-bold text-emerald-400 mb-1">
            {score}/{questions.length}
          </p>
          <p className="text-sm text-zinc-500 mb-6">
            {Math.round((score / questions.length) * 100)}% accuracy
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/"
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700 transition-colors"
            >
              Back to Vocabulary
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors"
            >
              <RotateCcw size={16} /> Try Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Quick Vocabulary Quiz</h1>
          <p className="text-xs text-zinc-500">
            Question {currentIndex + 1} of {questions.length} · Score: {score}
          </p>
        </div>
      </div>

      <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500 rounded-full"
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-1">
          What does "{currentQuestion.word.word}" mean?
        </h2>
        <p className="text-xs text-zinc-600 italic mb-6">
          "{currentQuestion.word.example}"
        </p>

        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => {
            let style = 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50';
            if (selectedAnswer !== null) {
              if (i === currentQuestion.correctAnswer) {
                style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
              } else if (i === selectedAnswer) {
                style = 'bg-rose-500/10 border-rose-500/30 text-rose-300';
              } else {
                style = 'bg-zinc-800/30 border-zinc-800 text-zinc-600';
              }
            }
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${style}`}
              >
                <span className="text-zinc-600 mr-3">{String.fromCharCode(65 + i)}.</span>
                {option}
                {selectedAnswer !== null && i === currentQuestion.correctAnswer && (
                  <CheckCircle2 size={16} className="inline ml-2 text-emerald-400" />
                )}
                {selectedAnswer === i && i !== currentQuestion.correctAnswer && (
                  <XCircle size={16} className="inline ml-2 text-rose-400" />
                )}
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={nextQuestion}
            className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
