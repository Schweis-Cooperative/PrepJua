import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { examSets } from '../data/examData';
import { compareAnswers } from '../utils/normalize';
import { useMistakeBook } from '../hooks/useMistakeBook';
import AIExplanation from '../components/AIExplanation';
import { logActivity } from '../utils/activity';

const difficultyColors: Record<string, string> = {
  easy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  hard: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

export default function ExamPractice() {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [textInput, setTextInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { addMistake } = useMistakeBook();

  const exam = examSets.find((e) => e.id === selectedExam);

  const handleMCAnswer = useCallback((index: number) => {
    if (submitted) return;
    setSelectedAnswer(index);
    const question = exam!.questions[currentIndex];
    const correct = index === question.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);
    else {
      addMistake({
        topicId: exam!.id,
        questionId: question.id,
        type: 'exam',
        question: question.question,
        userAnswer: question.options?.[index] || '',
        correctAnswer: question.options?.[question.correctAnswer as number] || String(question.correctAnswer),
      });
    }
  }, [submitted, exam, currentIndex, addMistake]);

  const handleTextSubmit = () => {
    if (submitted) return;
    const question = exam!.questions[currentIndex];
    const correct = compareAnswers(textInput, String(question.correctAnswer));
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);
    else {
      addMistake({
        topicId: exam!.id,
        questionId: question.id,
        type: 'exam',
        question: question.question,
        userAnswer: textInput,
        correctAnswer: String(question.correctAnswer),
      });
    }
  };

  const nextQuestion = () => {
    if (!exam) return;
    if (currentIndex < exam.questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setTextInput('');
      setSubmitted(false);
      setIsCorrect(false);
    } else {
      setFinished(true);
      logActivity('Completed Exam Practice', `${exam.title} — Score: ${score}/${exam.questions.length}`);
    }
  };

  const resetExam = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setTextInput('');
    setSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setFinished(false);
  };

  if (!selectedExam) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Exam Practice</h1>
          <p className="text-sm text-zinc-500">Practice with untimed exams at your own pace</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {examSets.map((set, i) => (
            <motion.button
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedExam(set.id)}
              className="group text-left glass-card rounded-xl p-5 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList size={20} className="text-amber-400" />
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[set.difficulty]}`}>
                  {set.difficulty.charAt(0).toUpperCase() + set.difficulty.slice(1)}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors">{set.title}</h3>
              <p className="text-xs text-zinc-500 mb-2">{set.description}</p>
              <span className="text-[10px] text-zinc-600">{set.questions.length} questions</span>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  if (!exam) return null;

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-8 text-center">
          <CheckCircle2 size={48} className="text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Exam Complete!</h2>
          <p className="text-sm text-zinc-500 mb-1">{exam.title}</p>
          <p className="text-4xl font-bold text-amber-400 mb-4">{score}/{exam.questions.length}</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => { setSelectedExam(null); resetExam(); }} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700">
              All Exams
            </button>
            <button onClick={resetExam} className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-medium">
              <RotateCcw size={16} /> Retry
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = exam.questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">{exam.title}</h1>
          <p className="text-xs text-zinc-500">Question {currentIndex + 1}/{exam.questions.length} · Score: {score}</p>
        </div>
        <button onClick={() => { setSelectedExam(null); resetExam(); }} className="text-xs text-zinc-500 hover:text-zinc-300">Exit</button>
      </div>

      <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-amber-500 rounded-full" animate={{ width: `${((currentIndex + 1) / exam.questions.length) * 100}%` }} />
      </div>

      <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-6">
        <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-medium">{question.type.replace('_', ' ')}</span>
        <h2 className="text-lg font-semibold text-white mt-1 mb-6">{question.question}</h2>

        {question.type === 'multiple_choice' && question.options ? (
          <div className="space-y-3">
            {question.options.map((opt, i) => {
              let style = 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50';
              if (submitted) {
                if (i === question.correctAnswer) style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                else if (i === selectedAnswer) style = 'bg-rose-500/10 border-rose-500/30 text-rose-300';
                else style = 'bg-zinc-800/30 border-zinc-800 text-zinc-600';
              }
              return (
                <button key={i} onClick={() => handleMCAnswer(i)} disabled={submitted} className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${style}`}>
                  <span className="text-zinc-600 mr-3">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                  {submitted && i === question.correctAnswer && <CheckCircle2 size={14} className="inline ml-2 text-emerald-400" />}
                  {submitted && i === selectedAnswer && i !== question.correctAnswer && <XCircle size={14} className="inline ml-2 text-rose-400" />}
                </button>
              );
            })}
          </div>
        ) : (
          <div>
            {question.keyword && (
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg mb-4">
                <span className="text-sm font-bold text-amber-300">{question.keyword}</span>
              </div>
            )}
            <div className="flex gap-2">
              <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && !submitted && handleTextSubmit()} disabled={submitted} placeholder="Type your answer..." className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50" />
              {!submitted && (
                <button onClick={handleTextSubmit} className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-medium">Check</button>
              )}
            </div>
            {submitted && (
              <div className={`flex items-center gap-2 mt-3 p-3 rounded-lg ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-rose-500/10 border border-rose-500/20'}`}>
                {isCorrect ? <CheckCircle2 size={16} className="text-emerald-400" /> : <XCircle size={16} className="text-rose-400" />}
                <span className="text-sm">{isCorrect ? <span className="text-emerald-300">Correct!</span> : <span className="text-rose-300">Incorrect. Answer: <span className="text-emerald-300">{String(question.correctAnswer)}</span></span>}</span>
              </div>
            )}
          </div>
        )}

        {submitted && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
              <p className="text-sm text-zinc-300">{question.explanation}</p>
            </div>
            {!isCorrect && (
              <AIExplanation
                correctAnswer={question.options?.[question.correctAnswer as number] || String(question.correctAnswer)}
                userAnswer={question.type === 'multiple_choice' ? (question.options?.[selectedAnswer!] || '') : textInput}
                questionContext={question.question}
                show={true}
              />
            )}
            <button onClick={nextQuestion} className="mt-4 w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-medium transition-colors">
              {currentIndex < exam.questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
