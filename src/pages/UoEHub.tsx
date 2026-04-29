import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, PenTool, Clock, ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Cloze Tests',
    description: 'Read paragraphs and fill in the blanks with the correct words.',
    path: '/uoe/cloze',
    icon: FileText,
    count: '3 Tests',
    color: 'sky',
  },
  {
    title: 'Sentence Rewrite',
    description: 'Rewrite sentences using the given keyword while keeping the meaning.',
    path: '/uoe/rewrite',
    icon: PenTool,
    count: '12 Questions',
    color: 'cyan',
  },
  {
    title: 'Mock Exam',
    description: 'Timed 40-minute exam simulation with mixed question types.',
    path: '/uoe/mock',
    icon: Clock,
    count: '20 Questions',
    color: 'indigo',
  },
];

export default function UoEHub() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Use of English</h1>
        <p className="text-sm text-zinc-500">
          Practice cloze tests, sentence rewrites, and timed mock exams
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={section.path}
                className="group block glass-card rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 h-full"
                id={`uoe-${section.path.split('/').pop()}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-${section.color}-500/10 flex items-center justify-center mb-4 group-hover:bg-${section.color}-500/20 transition-colors`}>
                  <Icon size={24} className={`text-${section.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-4">{section.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600 font-medium">{section.count}</span>
                  <ArrowRight size={16} className="text-zinc-600 group-hover:text-sky-400 transition-colors" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
