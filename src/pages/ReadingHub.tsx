import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Clock, BarChart3, ArrowRight } from 'lucide-react';
import { readingPassages } from '../data/readingData';
import { useProgress } from '../hooks/useProgress';

const difficultyColor = {
  easy: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  hard: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
};

export default function ReadingHub() {
  const { completedReading } = useProgress();

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Reading Hub</h1>
        <p className="text-sm text-zinc-500">Practice reading comprehension with varied passages</p>
      </motion.div>

      <div className="space-y-4">
        {readingPassages.map((passage, index) => {
          const completed = completedReading[passage.id] || 0;
          return (
            <motion.div
              key={passage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/reading/${passage.id}`}
                className="group block glass-card rounded-xl p-5 hover:border-violet-500/30 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {passage.title}
                      </h3>
                      {completed > 0 && (
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          Done ×{completed}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {passage.estimatedTime} min
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={12} /> {passage.wordCount} words
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart3 size={12} /> {passage.questions.length} questions
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${difficultyColor[passage.difficulty]}`}>
                        {passage.difficulty.charAt(0).toUpperCase() + passage.difficulty.slice(1)}
                      </span>
                    </div>
                  </div>

                  <ArrowRight size={18} className="text-zinc-600 group-hover:text-violet-400 transition-colors mt-1" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
