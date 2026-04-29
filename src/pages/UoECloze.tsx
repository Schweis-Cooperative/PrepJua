import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { clozeTests } from '../data/uoeData';
import { useMistakeBook } from '../hooks/useMistakeBook';
import { useProgress } from '../hooks/useProgress';
import AIExplanation from '../components/AIExplanation';
import { logActivity } from '../utils/activity';

export default function UoECloze() {
  const [testIndex, setTestIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeBlank, setActiveBlank] = useState<string | null>(null);
  const { addMistake } = useMistakeBook();
  const { completeUoeTest } = useProgress();

  const test = clozeTests[testIndex];

  const handleSelectAnswer = (blankId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [blankId]: optionIndex }));
    setActiveBlank(null);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    completeUoeTest(test.id);
    let correct = 0;
    test.blanks.forEach((blank) => {
      if (answers[blank.id] === blank.correctAnswer) {
        correct++;
      } else {
        addMistake({
          topicId: test.id,
          questionId: blank.id,
          type: 'uoe',
          question: `Cloze: ${test.title} — Blank ${blank.id}`,
          userAnswer: blank.options[answers[blank.id] ?? -1] || 'No answer',
          correctAnswer: blank.options[blank.correctAnswer],
        });
      }
    });
    logActivity('Completed Cloze Test', `${test.title} — Score: ${correct}/${test.blanks.length}`);
  };

  const allAnswered = test.blanks.every((b) => answers[b.id] !== undefined && answers[b.id] !== null);
  const score = submitted
    ? test.blanks.filter((b) => answers[b.id] === b.correctAnswer).length
    : 0;

  const renderPassage = () => {
    const parts = test.passage.split(/(\{\{b\d+\}\})/);
    return parts.map((part, i) => {
      const match = part.match(/\{\{(b\d+)\}\}/);
      if (!match) return <span key={i}>{part}</span>;

      const blankId = match[1];
      const blank = test.blanks.find((b) => b.id === blankId);
      if (!blank) return <span key={i}>[?]</span>;

      const answered = answers[blankId] !== undefined && answers[blankId] !== null;
      const isCorrect = submitted && answers[blankId] === blank.correctAnswer;
      const isWrong = submitted && answered && answers[blankId] !== blank.correctAnswer;

      return (
        <span key={i} className="relative inline-block">
          <button
            onClick={() => !submitted && setActiveBlank(activeBlank === blankId ? null : blankId)}
            className={`inline-block min-w-[100px] px-2 py-0.5 mx-1 rounded border-b-2 text-sm font-medium transition-all cursor-pointer ${
              isCorrect
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300'
                : isWrong
                ? 'bg-rose-500/10 border-rose-500 text-rose-300'
                : answered
                ? 'bg-sky-500/10 border-sky-500/50 text-sky-300'
                : 'bg-zinc-800 border-zinc-600 text-zinc-400 hover:border-sky-500/50'
            }`}
          >
            {answered ? blank.options[answers[blankId]!] : '______'}
            {isCorrect && <CheckCircle2 size={12} className="inline ml-1" />}
            {isWrong && <XCircle size={12} className="inline ml-1" />}
          </button>

          {activeBlank === blankId && !submitted && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-0 top-full mt-1 z-20 bg-zinc-800 border border-zinc-700 rounded-lg p-1 shadow-xl min-w-[160px]"
            >
              {blank.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => handleSelectAnswer(blankId, oi)}
                  className={`block w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                    answers[blankId] === oi
                      ? 'bg-sky-500/20 text-sky-300'
                      : 'text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </motion.div>
          )}

          {isWrong && (
            <span className="text-xs text-emerald-400 ml-1">
              ({blank.options[blank.correctAnswer]})
            </span>
          )}
        </span>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/uoe" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Cloze Test</h1>
          <p className="text-xs text-zinc-500">{test.title}</p>
        </div>
      </div>

      {/* Test selector */}
      <div className="flex gap-2 mb-6">
        {clozeTests.map((t, i) => (
          <button
            key={t.id}
            onClick={() => {
              setTestIndex(i);
              setAnswers({});
              setSubmitted(false);
              setActiveBlank(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              i === testIndex
                ? 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300'
            }`}
          >
            Test {i + 1}
          </button>
        ))}
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <div className="text-sm text-zinc-300 leading-7">{renderPassage()}</div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50"
          >
            <p className="text-sm font-semibold text-white">
              Score: <span className="text-emerald-400">{score}/{test.blanks.length}</span>
            </p>

            {test.blanks.map((blank) => {
              const isWrong = answers[blank.id] !== blank.correctAnswer;
              if (!isWrong) return null;
              return (
                <AIExplanation
                  key={blank.id}
                  correctAnswer={blank.options[blank.correctAnswer]}
                  userAnswer={blank.options[answers[blank.id] ?? 0]}
                  questionContext={`Cloze fill-in: The blank should be filled with the most appropriate word.`}
                  show={true}
                />
              );
            })}
          </motion.div>
        )}

        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`mt-6 w-full py-3 rounded-xl text-sm font-medium transition-all ${
              allAnswered
                ? 'bg-sky-600 hover:bg-sky-700 text-white'
                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
            }`}
          >
            {allAnswered ? 'Submit Answers' : `Fill all blanks (${Object.keys(answers).length}/${test.blanks.length})`}
          </button>
        )}
      </div>
    </div>
  );
}
