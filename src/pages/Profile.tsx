import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  BookOpen, 
  GraduationCap, 
  PenTool, 
  FileText, 
  Clock, 
  Trophy, 
  TrendingUp,
  Download,
  Upload,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { useMistakeBook } from '../hooks/useMistakeBook';
import { getActivities } from '../utils/activity';
import { vocabularyData } from '../data/vocabularyData';
import { grammarData } from '../data/grammarData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { WritingScoreEntry } from '../types/writing';
import ProgressBar from '../components/ProgressBar';

export default function Profile() {
  const { 
    learnedWords, 
    completedGrammar, 
    completedExams,
    completedUoe, 
    completedReading,
    exportData,
    importData
  } = useProgress();
  
  const { mistakes } = useMistakeBook();
  const activities = getActivities();
  const [username] = useLocalStorage('username', '');
  const [writingScores] = useLocalStorage<WritingScoreEntry[]>('writingScores', []);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const learnedCount = learnedWords.length;
  const totalWords = vocabularyData.length;
  const completedGrammarCount = Object.values(completedGrammar).filter((v) => v > 0).length;
  const totalGrammar = grammarData.length;
  const completedExamCount = Object.values(completedExams).filter((v) => v > 0).length;
  const completedUoeCount = Object.values(completedUoe).filter((v) => v > 0).length;
  const completedReadingCount = Object.values(completedReading).filter((v) => v > 0).length;
  const avgWritingScore = writingScores.length > 0
    ? Math.round(writingScores.reduce((sum, s) => sum + (s.score || 0), 0) / writingScores.length)
    : 0;

  const stats = [
    { label: 'Words Learned', value: learnedCount, total: totalWords, icon: BookOpen, color: 'emerald' },
    { label: 'Grammar Topics', value: completedGrammarCount, total: totalGrammar, icon: GraduationCap, color: 'emerald' },
    { label: 'Exams Completed', value: completedExamCount, total: null, icon: FileText, color: 'amber' },
    { label: 'UoE Tests', value: completedUoeCount, total: null, icon: FileText, color: 'sky' },
    { label: 'Reading Tests', value: completedReadingCount, total: null, icon: BookOpen, color: 'violet' },
    { label: 'Essays Graded', value: writingScores.length, total: null, icon: PenTool, color: 'indigo' },
    { label: 'Avg Writing Score', value: avgWritingScore, total: 100, icon: TrendingUp, color: 'amber' },
    { label: 'Mistakes Logged', value: mistakes.length, total: null, icon: Trophy, color: 'rose' },
  ];

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `PrepJua_Profile_${username || 'User'}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importData(content);
      setImportStatus(success ? 'success' : 'error');
      setTimeout(() => setImportStatus('idle'), 3000);
    };
    reader.readAsText(file);
  };

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
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <User size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{username ? `${username}'s Dashboard` : 'My Dashboard'}</h1>
            <p className="text-sm text-zinc-500">Track your progress and manage your data</p>
          </div>
        </motion.div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700 transition-all"
          >
            <Download size={16} /> Export
          </button>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 rounded-xl text-sm font-medium border border-emerald-500/20 transition-all"
          >
            <Upload size={16} /> Import
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImport} 
            className="hidden" 
            accept=".json"
          />
        </div>
      </div>

      {importStatus !== 'idle' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-xl border flex items-center gap-3 ${
            importStatus === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
          }`}
        >
          {importStatus === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span className="text-sm">{importStatus === 'success' ? 'Profile imported successfully!' : 'Failed to import profile. Invalid file.'}</span>
        </motion.div>
      )}

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Timeline */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <Clock size={16} className="text-zinc-400" /> Recent Activity
          </h2>
          {activities.length === 0 ? (
            <p className="text-sm text-zinc-600 text-center py-8">No activities recorded yet.</p>
          ) : (
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {activities.slice(0, 30).map((activity) => (
                <div key={activity.id} className="flex gap-3 text-sm group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 mt-1.5 transition-colors" />
                    <div className="w-px flex-1 bg-zinc-800" />
                  </div>
                  <div className="pb-3 flex-1">
                    <p className="text-zinc-300 font-medium text-xs leading-relaxed">{activity.action}</p>
                    {activity.details && <p className="text-zinc-600 text-[10px] italic mt-0.5">{activity.details}</p>}
                    <p className="text-zinc-700 text-[10px] mt-1 uppercase tracking-tighter">{formatDate(activity.timestamp)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Writing Score History */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <PenTool size={16} className="text-indigo-400" /> Writing Performance
            </h2>
            {writingScores.length === 0 ? (
              <p className="text-sm text-zinc-600 text-center py-8">No essays graded yet.</p>
            ) : (
              <div className="space-y-2">
                {writingScores.slice(0, 5).map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg border border-zinc-700/30">
                    <div className="max-w-[70%]">
                      <p className="text-sm text-zinc-200 truncate">{entry.topicTitle}</p>
                      <p className="text-[10px] text-zinc-600 font-medium">{formatDate(entry.date)}</p>
                    </div>
                    <span className={`text-lg font-bold ${(entry.score || 0) >= 70 || ['C1', 'C2', 'B2'].includes(entry.cefrLevel || '') ? 'text-emerald-400' : (entry.score || 0) >= 40 || ['B1', 'A2'].includes(entry.cefrLevel || '') ? 'text-amber-400' : 'text-rose-400'}`}>
                      {entry.cefrLevel || entry.score || 'N/A'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-2xl p-6 border-emerald-500/10">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-400" /> Learning Path
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Current Goal</p>
                <p className="text-sm text-zinc-300">Complete 5 Grammar Topics this week</p>
                <div className="mt-2 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-2/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
