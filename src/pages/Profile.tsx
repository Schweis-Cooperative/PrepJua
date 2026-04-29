import { motion } from 'framer-motion';
import { User, BookOpen, GraduationCap, PenTool, FileText, Clock, Trophy, TrendingUp } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { useMistakeBook } from '../hooks/useMistakeBook';
import { getActivities } from '../utils/activity';
import { vocabularyData } from '../data/vocabularyData';
import { grammarData } from '../data/grammarData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { WritingScoreEntry } from '../types/writing';
import ProgressBar from '../components/ProgressBar';

export default function Profile() {
  const { learnedWords, completedGrammar, completedUoe, completedReading } = useProgress();
  const { mistakes } = useMistakeBook();
  const activities = getActivities();
  const [username] = useLocalStorage('username', '');
  const [writingScores] = useLocalStorage<WritingScoreEntry[]>('writingScores', []);

  const learnedCount = learnedWords.length;
  const totalWords = vocabularyData.length;
  const completedGrammarCount = Object.values(completedGrammar).filter((v) => v > 0).length;
  const totalGrammar = grammarData.length;
  const completedUoeCount = Object.values(completedUoe).filter((v) => v > 0).length;
  const completedReadingCount = Object.values(completedReading).filter((v) => v > 0).length;
  const avgWritingScore = writingScores.length > 0
    ? Math.round(writingScores.reduce((sum, s) => sum + s.score, 0) / writingScores.length)
    : 0;

  const stats = [
    { label: 'Words Learned', value: learnedCount, total: totalWords, icon: BookOpen, color: 'emerald' },
    { label: 'Grammar Topics', value: completedGrammarCount, total: totalGrammar, icon: GraduationCap, color: 'emerald' },
    { label: 'UoE Tests', value: completedUoeCount, total: null, icon: FileText, color: 'sky' },
    { label: 'Reading Tests', value: completedReadingCount, total: null, icon: BookOpen, color: 'violet' },
    { label: 'Essays Graded', value: writingScores.length, total: null, icon: PenTool, color: 'indigo' },
    { label: 'Avg Writing Score', value: avgWritingScore, total: 100, icon: TrendingUp, color: 'amber' },
    { label: 'Mistakes Logged', value: mistakes.length, total: null, icon: Trophy, color: 'rose' },
  ];

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return d.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <User size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{username ? `${username}'s Profile` : 'Profile'}</h1>
            <p className="text-sm text-zinc-500">Your learning progress at a glance</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-4"
            >
              <div className={`w-9 h-9 rounded-lg bg-${stat.color}-500/10 flex items-center justify-center mb-3`}>
                <Icon size={18} className={`text-${stat.color}-400`} />
              </div>
              <p className="text-2xl font-bold text-white">
                {stat.value}
                {stat.total && <span className="text-sm text-zinc-500 font-normal">/{stat.total}</span>}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
              {stat.total && (
                <div className="mt-2">
                  <ProgressBar value={stat.value} max={stat.total} color={`bg-${stat.color}-500`} showLabel={false} size="sm" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Writing Score History */}
      {writingScores.length > 0 && (
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <PenTool size={16} className="text-indigo-400" /> Writing Score History
          </h2>
          <div className="space-y-2">
            {writingScores.slice(0, 10).map((entry) => (
              <div key={entry.id} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                <div>
                  <p className="text-sm text-zinc-200">{entry.topicTitle}</p>
                  <p className="text-[10px] text-zinc-600">{formatDate(entry.date)}</p>
                </div>
                <span className={`text-lg font-bold ${entry.score >= 70 ? 'text-emerald-400' : entry.score >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {entry.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activity Timeline */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Clock size={16} className="text-zinc-400" /> Activity Timeline
        </h2>
        {activities.length === 0 ? (
          <p className="text-sm text-zinc-600 text-center py-8">No activities recorded yet. Start learning!</p>
        ) : (
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {activities.slice(0, 30).map((activity) => (
              <div key={activity.id} className="flex gap-3 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                  <div className="w-px flex-1 bg-zinc-800" />
                </div>
                <div className="pb-3">
                  <p className="text-zinc-300 font-medium text-xs">{activity.action}</p>
                  <p className="text-zinc-600 text-[10px]">{activity.details}</p>
                  <p className="text-zinc-700 text-[10px]">{formatDate(activity.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
