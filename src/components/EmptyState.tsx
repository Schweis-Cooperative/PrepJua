import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-4">
        {icon || <Inbox size={28} className="text-zinc-500" />}
      </div>
      <h3 className="text-lg font-semibold text-zinc-300 mb-1">{title}</h3>
      <p className="text-sm text-zinc-500 max-w-sm mb-4">{description}</p>
      {action}
    </motion.div>
  );
}
