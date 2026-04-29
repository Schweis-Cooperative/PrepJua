import { motion } from 'framer-motion';
import {
  Clock,
  GitBranch,
  Link as LinkIcon,
  Key,
  ArrowRightLeft,
  MessageSquare,
  FileText,
  AlertTriangle,
} from 'lucide-react';
import { cheatSheetSections } from '../data/cheatSheetData';

const iconMap: Record<string, React.ElementType> = {
  Clock,
  GitBranch,
  Link: LinkIcon,
  Key,
  ArrowRightLeft,
  MessageSquare,
  FileText,
  AlertTriangle,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  sky: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/20' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20' },
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20' },
};

export default function CheatSheet() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Cheat Sheet</h1>
        <p className="text-sm text-zinc-500">Quick reference for grammar, structures, and test strategies</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cheatSheetSections.map((section, index) => {
          const Icon = iconMap[section.icon] || FileText;
          const colors = colorMap[section.color] || colorMap.emerald;

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`glass-card rounded-xl p-5 border ${colors.border}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                  <Icon size={20} className={colors.text} />
                </div>
                <h2 className={`text-base font-semibold ${colors.text}`}>{section.title}</h2>
              </div>

              <div className="space-y-2">
                {section.items.map((item, i) => (
                  <div key={i} className="p-3 bg-zinc-800/30 rounded-lg">
                    <p className="text-xs font-semibold text-zinc-200 mb-0.5">{item.title}</p>
                    <p className="text-xs text-zinc-400">{item.content}</p>
                    {item.example && (
                      <p className="text-[10px] text-zinc-600 italic mt-1">e.g., {item.example}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
