import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { pastQuestionSets } from '../data/examData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useMistakeBook } from '../hooks/useMistakeBook';
import AIExplanation from '../components/AIExplanation';

interface PQAnswer {
  selectedAnswer: number;
  isCorrect: boolean;
}

export default function PastQuestions() {
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pastProgress, setPastProgress] = useLocalStorage<Record<string, PQAnswer>>('pastQuestionsProgress', {});
  const [showExplanation, setShowExplanation] = useState(false);
  const { addMistake } = useMistakeBook();

  const set = pastQuestionSets.find((s) => s.id === selectedSet);

  const handleAnswer = useCallback((index: number) => {
    if (!set) return;
    const q = set.questions[currentIndex];
    const key = `${set.id}_${q.id}`;
    if (pastProgress[key]) return;

    const isCorrect = index === q.correctAnswer;
    setPastProgress((prev) => ({
      ...prev,
      [key]: { selectedAnswer: index, isCorrect },
    }));
    setShowExplanation(true);

    if (!isCorrect) {
      addMistake({
        topicId: set.id,
        questionId: q.id,
        type: 'past_question',
        question: q.question,
        userAnswer: q.options[index],
        correctAnswer: q.options[q.correctAnswer],
      });
    }
  }, [set, currentIndex, pastProgress, setPastProgress, addMistake]);

  const nextQuestion = () => {
    if (!set) return;
    if (currentIndex < set.questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowExplanation(false);
    }
  };

  if (!selectedSet) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Past Questions</h1>
          <p className="text-sm text-zinc-500">Browse and practice archived exam questions</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pastQuestionSets.map((set, i) => {
            const answeredCount = set.questions.filter((q) => pastProgress[`${set.id}_${q.id}`]).length;
            const correctCount = set.questions.filter((q) => pastProgress[`${set.id}_${q.id}`]?.isCorrect).length;
            return (
              <motion.button
                key={set.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { setSelectedSet(set.id); setCurrentIndex(0); setShowExplanation(false); }}
                className="group text-left glass-card rounded-xl p-5 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Trophy size={20} className="text-indigo-400" />
                  <span className="text-xs text-zinc-500 font-medium">{set.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">{set.examName}</h3>
                <p className="text-xs text-zinc-500 mb-2">{set.questions.length} questions</p>
                {answeredCount > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(answeredCount / set.questions.length) * 100}%` }} />
                    </div>
                    <span className="text-[10px] text-zinc-500 whitespace-nowrap">{correctCount}/{answeredCount}</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  if (!set) return null;
  const question = set.questions[currentIndex];
  const key = `${set.id}_${question.id}`;
  const answered = pastProgress[key];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">{set.examName} ({set.year})</h1>
          <p className="text-xs text-zinc-500">Question {currentIndex + 1}/{set.questions.length}</p>
        </div>
        <button onClick={() => setSelectedSet(null)} className="text-xs text-zinc-500 hover:text-zinc-300">Back</button>
      </div>

      <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-indigo-500 rounded-full" animate={{ width: `${((currentIndex + 1) / set.questions.length) * 100}%` }} />
      </div>

      <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-wider text-zinc-600">Q{question.questionNumber}</span>
          <span className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded border border-zinc-700">{question.topic}</span>
        </div>
        <h2 className="text-lg font-semibold text-white mb-6">{question.question}</h2>

        <div className="space-y-3">
          {question.options.map((opt, i) => {
            let style = 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50';
            if (answered) {
              if (i === question.correctAnswer) style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
              else if (i === answered.selectedAnswer && !answered.isCorrect) style = 'bg-rose-500/10 border-rose-500/30 text-rose-300';
              else style = 'bg-zinc-800/30 border-zinc-800 text-zinc-600';
            }
            return (
              <button key={i} onClick={() => handleAnswer(i)} disabled={!!answered} className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${style}`}>
                <span className="text-zinc-600 mr-3">{String.fromCharCode(65 + i)}.</span>
                {opt}
                {answered && i === question.correctAnswer && <CheckCircle2 size={14} className="inline ml-2 text-emerald-400" />}
                {answered && i === answered.selectedAnswer && !answered.isCorrect && <XCircle size={14} className="inline ml-2 text-rose-400" />}
              </button>
            );
          })}
        </div>

        {(answered || showExplanation) && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
              <p className="text-sm text-zinc-300">{question.explanation}</p>
            </div>
            {answered && !answered.isCorrect && (
              <AIExplanation
                correctAnswer={question.options[question.correctAnswer]}
                userAnswer={question.options[answered.selectedAnswer]}
                questionContext={question.question}
                show={true}
              />
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="mt-4 flex justify-between">
        <button onClick={() => { setCurrentIndex((i) => Math.max(0, i - 1)); setShowExplanation(false); }} disabled={currentIndex === 0} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-medium border border-zinc-700 disabled:opacity-50">
          Previous
        </button>
        <button onClick={nextQuestion} disabled={currentIndex >= set.questions.length - 1} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium disabled:opacity-50">
          Next <ArrowRight size={14} />
        </button>
      </div>

      {/* Question dots */}
      <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
        {set.questions.map((q, i) => {
          const a = pastProgress[`${set.id}_${q.id}`];
          return (
            <button key={q.id} onClick={() => { setCurrentIndex(i); setShowExplanation(false); }} className={`w-7 h-7 rounded text-[10px] font-medium transition-all ${
              i === currentIndex ? 'ring-2 ring-indigo-500 bg-zinc-700 text-white' : a?.isCorrect ? 'bg-emerald-500/20 text-emerald-400' : a ? 'bg-rose-500/20 text-rose-400' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
            }`}>
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
