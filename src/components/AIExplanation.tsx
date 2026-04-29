import { Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAIExplanation } from '../hooks/useAIExplanation';

interface AIExplanationProps {
  correctAnswer: string;
  userAnswer: string;
  questionContext: string;
  show: boolean;
}

export default function AIExplanation({
  correctAnswer,
  userAnswer,
  questionContext,
  show,
}: AIExplanationProps) {
  const { explanation, loading, fetchExplanation } = useAIExplanation();

  if (!show) return null;

  return (
    <div className="mt-3">
      {!explanation && !loading && (
        <button
          onClick={() => fetchExplanation(correctAnswer, userAnswer, questionContext)}
          className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg transition-all duration-200"
          id="ai-explain-btn"
        >
          <Sparkles size={14} />
          Ask AI for Explanation
        </button>
      )}

      {loading && (
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
          <Loader2 size={16} className="text-indigo-400 animate-spin" />
          <span className="text-xs text-zinc-400">Getting AI explanation...</span>
        </div>
      )}

      <AnimatePresence>
        {explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-indigo-400" />
                <span className="text-xs font-semibold text-indigo-300">AI Explanation</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
                {explanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
