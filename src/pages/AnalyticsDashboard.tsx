import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  AreaChart, Area,
} from 'recharts';
import { ArrowLeft, TrendingUp, BookOpen, Target, Flame, BarChart3 } from 'lucide-react';
import { vocabularyData } from '../data/vocabularyData';
import { useProgress } from '../hooks/useProgress';
import { LEITNER_INTERVALS } from '../types/progress';

const CATEGORY_COLORS: Record<string, string> = {
  phrase: '#10b981',
  verb: '#3b82f6',
  noun: '#f59e0b',
  adjective: '#8b5cf6',
  adverb: '#ec4899',
  preposition: '#06b6d4',
  conjunction: '#f97316',
};

// Custom dark tooltip
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs shadow-xl">
      <p className="text-zinc-400 mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} style={{ color: entry.color }} className="font-medium">
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
}

export default function AnalyticsDashboard() {
  const { learnedWords, srsCards, streak, activityHistory, completedGrammar, completedExams, completedUoe, completedReading } = useProgress();

  const totalWords = vocabularyData.length;
  const learnedCount = learnedWords.length;
  const remaining = totalWords - learnedCount;

  // ── Mastery pie chart data ───────────────────────────────────────────
  const masteryData = useMemo(() => [
    { name: 'Mastered', value: learnedCount, color: '#10b981' },
    { name: 'Remaining', value: remaining, color: '#3f3f46' },
  ], [learnedCount, remaining]);

  // ── Category breakdown ───────────────────────────────────────────────
  const categoryData = useMemo(() => {
    const counts: Record<string, { total: number; learned: number }> = {};
    vocabularyData.forEach(w => {
      if (!counts[w.category]) counts[w.category] = { total: 0, learned: 0 };
      counts[w.category].total++;
      if (learnedWords.includes(w.id)) counts[w.category].learned++;
    });
    return Object.entries(counts).map(([cat, data]) => ({
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      total: data.total,
      learned: data.learned,
      fill: CATEGORY_COLORS[cat] || '#71717a',
    }));
  }, [learnedWords]);

  // ── SRS Box distribution ─────────────────────────────────────────────
  const srsBoxData = useMemo(() => {
    const boxes: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    srsCards.forEach(c => { boxes[c.box] = (boxes[c.box] || 0) + 1; });
    return Object.entries(boxes).map(([box, count]) => ({
      name: `Box ${box}`,
      words: count,
      interval: `${LEITNER_INTERVALS[Number(box)]}d`,
      fill: Number(box) === 5 ? '#10b981' : Number(box) >= 3 ? '#3b82f6' : '#f59e0b',
    }));
  }, [srsCards]);

  // ── Activity timeline (last 14 days) ─────────────────────────────────
  const timelineData = useMemo(() => {
    const days: { date: string; wordsLearned: number; reviews: number }[] = [];
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const event = activityHistory.find(e => e.date === dateStr);
      days.push({
        date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        wordsLearned: event?.wordsLearned || 0,
        reviews: event?.reviewsDone || 0,
      });
    }
    return days;
  }, [activityHistory]);

  // ── Module completion stats ──────────────────────────────────────────
  const grammarCompleted = Object.keys(completedGrammar).length;
  const examsCompleted = Object.keys(completedExams).length;
  const uoeCompleted = Object.keys(completedUoe).length;
  const readingCompleted = Object.keys(completedReading).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-6 transition-colors">
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
            <BarChart3 size={22} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
            <p className="text-sm text-zinc-500">Your learning journey at a glance</p>
          </div>
        </div>

        {/* ── Stat Cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={16} className="text-emerald-400" />
              <span className="text-xs text-zinc-500">Words Mastered</span>
            </div>
            <p className="text-2xl font-bold text-white">{learnedCount}</p>
            <p className="text-xs text-zinc-600">of {totalWords} total</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame size={16} className="text-amber-400" />
              <span className="text-xs text-zinc-500">Current Streak</span>
            </div>
            <p className="text-2xl font-bold text-white">{streak.current}</p>
            <p className="text-xs text-zinc-600">Best: {streak.longest} days</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-sky-400" />
              <span className="text-xs text-zinc-500">In SRS Queue</span>
            </div>
            <p className="text-2xl font-bold text-white">{srsCards.length}</p>
            <p className="text-xs text-zinc-600">{srsCards.filter(c => c.box >= 4).length} near mastery</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-violet-400" />
              <span className="text-xs text-zinc-500">Modules Done</span>
            </div>
            <p className="text-2xl font-bold text-white">{grammarCompleted + examsCompleted + uoeCompleted + readingCompleted}</p>
            <p className="text-xs text-zinc-600">G:{grammarCompleted} · E:{examsCompleted} · U:{uoeCompleted} · R:{readingCompleted}</p>
          </div>
        </div>

        {/* ── Charts Grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Mastery Pie */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Vocabulary Mastery</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={masteryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {masteryData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              {masteryData.map(d => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-zinc-400">{d.name}: {d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SRS Box Distribution */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-4">SRS Box Distribution</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={srsBoxData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis dataKey="name" tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="words" radius={[6, 6, 0, 0]}>
                    {srsBoxData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-2 text-[10px] text-zinc-600">
              {srsBoxData.map(d => (
                <span key={d.name}>{d.name}: {d.interval}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Category Breakdown ──────────────────────────────────────── */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h3 className="text-sm font-semibold text-white mb-4">Category Breakdown</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" tick={{ fill: '#a1a1aa', fontSize: 11 }} axisLine={false} tickLine={false} width={90} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="total" name="Total" fill="#3f3f46" radius={[0, 4, 4, 0]} />
                <Bar dataKey="learned" name="Learned" radius={[0, 4, 4, 0]}>
                  {categoryData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ── Activity Timeline ───────────────────────────────────────── */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-white mb-4">14-Day Activity Timeline</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="gradLearned" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradReviews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="date" tick={{ fill: '#71717a', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#71717a', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="wordsLearned" name="Words Learned" stroke="#10b981" fill="url(#gradLearned)" strokeWidth={2} />
                <Area type="monotone" dataKey="reviews" name="Reviews" stroke="#3b82f6" fill="url(#gradReviews)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-3">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-zinc-400">Words Learned</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-zinc-400">Reviews Completed</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
