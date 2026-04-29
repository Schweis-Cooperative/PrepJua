import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { grammarData } from '../data/grammarData';
import { useProgress } from '../hooks/useProgress';

export default function GrammarHub() {
  const { completedGrammar } = useProgress();

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Grammar Hub</h1>
        <p className="text-sm text-zinc-500">
          Master {grammarData.length} essential grammar topics
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {grammarData.map((topic, index) => {
          const completed = completedGrammar[topic.id] || 0;
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/grammar/${topic.id}`}
                className="group block glass-card rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300"
                id={`grammar-topic-${topic.id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <GraduationCap size={20} className="text-emerald-400" />
                  </div>
                  {completed > 0 && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-medium">
                        Cleared ×{completed}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-zinc-500 mb-3 line-clamp-2">{topic.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-600">
                    {topic.questions.length} questions
                  </span>
                  <ArrowRight size={14} className="text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
