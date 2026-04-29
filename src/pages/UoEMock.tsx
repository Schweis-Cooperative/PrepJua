import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { uoeMockExams } from '../data/uoeData';
import { compareAnswers } from '../utils/normalize';
import { useMistakeBook } from '../hooks/useMistakeBook';
import { logActivity } from '../utils/activity';

export default function UoEMock() {
  const exam = uoeMockExams[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [textInputs, setTextInputs] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(exam.duration * 60);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const { addMistake } = useMistakeBook();

  useEffect(() => {
    if (!started || finished) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setFinished(true);
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, finished]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleMCAnswer = (questionId: string, index: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: index }));
  };

  const handleTextAnswer = (questionId: string, value: string) => {
    setTextInputs((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleFinish = useCallback(() => {
    setFinished(true);
    let correct = 0;
    exam.questions.forEach((q) => {
      let isCorrect = false;
      if (q.type === 'multiple_choice') {
        isCorrect = answers[q.id] === q.correctAnswer;
      } else {
        isCorrect = compareAnswers(textInputs[q.id] || '', String(q.correctAnswer));
      }
      if (isCorrect) correct++;
      else {
        addMistake({
          topicId: exam.id,
          questionId: q.id,
          type: 'uoe',
          question: q.question,
          userAnswer: q.type === 'multiple_choice' ? (q.options?.[answers[q.id] as number] || 'No answer') : (textInputs[q.id] || 'No answer'),
          correctAnswer: q.type === 'multiple_choice' ? (q.options?.[q.correctAnswer as number] || '') : String(q.correctAnswer),
        });
      }
    });
    logActivity('Completed UoE Mock Exam', `Score: ${correct}/${exam.questions.length}`);
  }, [answers, textInputs, exam, addMistake]);

  const question = exam.questions[currentIndex];
  const timePercent = (timeLeft / (exam.duration * 60)) * 100;

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/uoe" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold text-white">Mock Exam</h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <Clock size={48} className="text-indigo-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">{exam.title}</h2>
          <p className="text-sm text-zinc-400 mb-1">{exam.questions.length} questions</p>
          <p className="text-sm text-zinc-400 mb-6">Time limit: {exam.duration} minutes</p>
          <div className="flex items-center gap-2 p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg mb-6 text-left">
            <AlertTriangle size={16} className="text-amber-400 shrink-0" />
            <p className="text-xs text-amber-300">The exam will auto-submit when time runs out.</p>
          </div>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors"
          >
            Start Exam
          </button>
        </motion.div>
      </div>
    );
  }

  if (finished) {
    let correct = 0;
    exam.questions.forEach((q) => {
      if (q.type === 'multiple_choice') {
        if (answers[q.id] === q.correctAnswer) correct++;
      } else {
        if (compareAnswers(textInputs[q.id] || '', String(q.correctAnswer))) correct++;
      }
    });

    return (
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-8 text-center">
          <CheckCircle2 size={48} className="text-indigo-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Exam Complete!</h2>
          <p className="text-4xl font-bold text-indigo-400 mb-4">{correct}/{exam.questions.length}</p>
          <p className="text-sm text-zinc-500 mb-6">
            {Math.round((correct / exam.questions.length) * 100)}% accuracy
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/uoe" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700">
              Back to UoE
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Timer Bar */}
      <div className="sticky top-14 z-20 bg-[#09090b]/80 backdrop-blur-xl py-3 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-500">Question {currentIndex + 1}/{exam.questions.length}</span>
          <span className={`flex items-center gap-1 text-sm font-mono font-bold ${timeLeft < 300 ? 'text-rose-400' : 'text-indigo-400'}`}>
            <Clock size={14} /> {formatTime(timeLeft)}
          </span>
        </div>
        <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all ${timeLeft < 300 ? 'bg-rose-500' : 'bg-indigo-500'}`} style={{ width: `${timePercent}%` }} />
        </div>
      </div>

      <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-6">
        <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-medium">{question.type.replace('_', ' ')}</span>
        <h2 className="text-lg font-semibold text-white mt-1 mb-6">{question.question}</h2>

        {question.type === 'multiple_choice' && question.options && (
          <div className="space-y-3">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleMCAnswer(question.id, i)}
                className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${
                  answers[question.id] === i
                    ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                    : 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50'
                }`}
              >
                <span className="text-zinc-600 mr-3">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            ))}
          </div>
        )}

        {(question.type === 'fill_blank' || question.type === 'rewrite') && (
          <input
            type="text"
            value={textInputs[question.id] || ''}
            onChange={(e) => handleTextAnswer(question.id, e.target.value)}
            placeholder="Type your answer..."
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50"
          />
        )}

        <div className="flex gap-3 mt-6">
          {currentIndex > 0 && (
            <button onClick={() => setCurrentIndex((i) => i - 1)} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-medium border border-zinc-700">
              Previous
            </button>
          )}
          <div className="flex-1" />
          {currentIndex < exam.questions.length - 1 ? (
            <button onClick={() => setCurrentIndex((i) => i + 1)} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium">
              Next
            </button>
          ) : (
            <button onClick={handleFinish} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium">
              Finish Exam
            </button>
          )}
        </div>
      </motion.div>

      {/* Question navigation */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {exam.questions.map((q, i) => {
          const answered = q.type === 'multiple_choice' ? answers[q.id] !== undefined : !!textInputs[q.id];
          return (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(i)}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                i === currentIndex
                  ? 'bg-indigo-600 text-white'
                  : answered
                  ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                  : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
