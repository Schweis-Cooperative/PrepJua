import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, Send, RotateCcw } from 'lucide-react';
import { rewriteQuestions } from '../data/uoeData';
import { compareAnswers } from '../utils/normalize';
import { useMistakeBook } from '../hooks/useMistakeBook';
import AIExplanation from '../components/AIExplanation';
import { logActivity } from '../utils/activity';

export default function UoERewrite() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { addMistake } = useMistakeBook();

  const question = rewriteQuestions[currentIndex];

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    const correct = compareAnswers(userInput, question.correctAnswer);
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) {
      setScore((s) => s + 1);
    } else {
      addMistake({
        topicId: 'uoe-rewrite',
        questionId: question.id,
        type: 'uoe',
        question: `Rewrite: "${question.originalSentence}" using ${question.keyword}`,
        userAnswer: userInput,
        correctAnswer: question.correctAnswer,
      });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < rewriteQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setUserInput('');
      setSubmitted(false);
      setIsCorrect(false);
    } else {
      setFinished(true);
      logActivity('Completed Rewrite Exercise', `Score: ${score}/${rewriteQuestions.length}`);
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
          <CheckCircle2 size={48} className="text-sky-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Exercise Complete!</h2>
          <p className="text-4xl font-bold text-sky-400 mb-4">
            {score}/{rewriteQuestions.length}
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/uoe" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700">
              Back to UoE
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium"
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
        <Link to="/uoe" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Sentence Rewrite</h1>
          <p className="text-xs text-zinc-500">Question {currentIndex + 1} of {rewriteQuestions.length}</p>
        </div>
      </div>

      <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-sky-500 rounded-full"
          animate={{ width: `${((currentIndex + 1) / rewriteQuestions.length) * 100}%` }}
        />
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card rounded-2xl p-6"
      >
        <p className="text-sm text-zinc-400 mb-2">Rewrite the following sentence using the keyword:</p>
        <p className="text-base text-white font-medium mb-3">"{question.originalSentence}"</p>

        <div className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-lg mb-4">
          <span className="text-sm font-bold text-sky-300">{question.keyword}</span>
        </div>

        {question.hint && (
          <p className="text-xs text-zinc-600 mb-4 italic">Hint: {question.hint}</p>
        )}

        <div className="relative">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !submitted && handleSubmit()}
            disabled={submitted}
            placeholder="Type your rewritten sentence..."
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all pr-12"
          />
          {!submitted && (
            <button
              onClick={handleSubmit}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Send size={18} />
            </button>
          )}
        </div>

        {submitted && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
            <div className={`flex items-center gap-2 p-3 rounded-lg ${
              isCorrect
                ? 'bg-emerald-500/10 border border-emerald-500/20'
                : 'bg-rose-500/10 border border-rose-500/20'
            }`}>
              {isCorrect ? (
                <>
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <p className="text-sm text-emerald-300">Correct!</p>
                </>
              ) : (
                <>
                  <XCircle size={16} className="text-rose-400" />
                  <div>
                    <p className="text-sm text-rose-300">Incorrect</p>
                    <p className="text-xs text-zinc-400 mt-1">
                      Correct answer: <span className="text-emerald-300">{question.correctAnswer}</span>
                    </p>
                  </div>
                </>
              )}
            </div>

            {!isCorrect && (
              <AIExplanation
                correctAnswer={question.correctAnswer}
                userAnswer={userInput}
                questionContext={`Rewrite "${question.originalSentence}" using the keyword "${question.keyword}".`}
                show={true}
              />
            )}

            <button
              onClick={nextQuestion}
              className="mt-4 w-full py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors"
            >
              {currentIndex < rewriteQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
