import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Trash2, X } from 'lucide-react';
import { useMistakeBook } from '../hooks/useMistakeBook';
import EmptyState from '../components/EmptyState';

const typeColors: Record<string, string> = {
  grammar: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  vocabulary: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  uoe: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  reading: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  exam: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  past_question: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
};

export default function MistakeBook() {
  const { mistakes, removeMistake, clearMistakes } = useMistakeBook();

  if (mistakes.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Mistake Book</h1>
          <p className="text-sm text-zinc-500">Review and learn from your errors</p>
        </motion.div>
        <EmptyState
          icon={<CheckCircle2 size={28} className="text-emerald-400" />}
          title="No Mistakes Yet!"
          description="Great job! You haven't made any mistakes yet, or you've already reviewed them all."
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Mistake Book</h1>
            <p className="text-sm text-zinc-500">
              {mistakes.length} mistake{mistakes.length !== 1 ? 's' : ''} to review
            </p>
          </div>
          <button
            onClick={clearMistakes}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-rose-400 hover:text-rose-300 bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/20 rounded-lg transition-all"
          >
            <Trash2 size={14} /> Clear All
          </button>
        </div>
      </motion.div>

      <div className="space-y-3">
        <AnimatePresence>
          {mistakes.map((mistake) => (
            <motion.div
              key={mistake.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, height: 0 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-rose-400" />
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${typeColors[mistake.type] || typeColors.grammar}`}>
                    {mistake.type.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    {new Date(mistake.date).toLocaleDateString()}
                  </span>
                </div>
                <button
                  onClick={() => removeMistake(mistake.id)}
                  className="flex items-center gap-1 px-2 py-1 text-[10px] text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 rounded transition-all"
                >
                  <CheckCircle2 size={12} /> Mark as Fixed
                </button>
              </div>

              <p className="text-sm font-medium text-zinc-200 mb-3">{mistake.question}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 p-2 rounded-lg bg-rose-500/5 border border-rose-500/10">
                  <X size={14} className="text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase">Your Answer</p>
                    <p className="text-sm text-rose-300">{mistake.userAnswer}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase">Correct Answer</p>
                    <p className="text-sm text-emerald-300">{mistake.correctAnswer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
