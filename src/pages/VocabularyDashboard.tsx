import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Check, Star, ArrowRight, Sparkles } from 'lucide-react';
import { vocabularyData } from '../data/vocabularyData';
import { useProgress } from '../hooks/useProgress';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ProgressBar from '../components/ProgressBar';

type TabType = 'all' | 'learned' | 'unlearned';
type CategoryType = 'all' | 'phrase' | 'verb' | 'noun' | 'adjective' | 'adverb' | 'preposition' | 'conjunction';

const categories: { value: CategoryType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'phrase', label: 'Phrases' },
  { value: 'verb', label: 'Verbs' },
  { value: 'noun', label: 'Nouns' },
  { value: 'adjective', label: 'Adjectives' },
  { value: 'adverb', label: 'Adverbs' },
  { value: 'preposition', label: 'Prepositions' },
  { value: 'conjunction', label: 'Conjunctions' },
];

export default function VocabularyDashboard() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [username] = useLocalStorage('username', '');
  const { learnedWords, toggleLearnedWord, isWordLearned } = useProgress();

  const filteredWords = useMemo(() => {
    return vocabularyData.filter((word) => {
      const matchesSearch =
        word.word.toLowerCase().includes(search.toLowerCase()) ||
        word.translation.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || word.category === activeCategory;
      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'learned' && isWordLearned(word.id)) ||
        (activeTab === 'unlearned' && !isWordLearned(word.id));
      return matchesSearch && matchesCategory && matchesTab;
    });
  }, [search, activeCategory, activeTab, learnedWords, isWordLearned]);

  const totalWords = vocabularyData.length;
  const learnedCount = learnedWords.length;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              {username ? `Welcome, ${username}!` : 'Vocabulary Dashboard'}
            </h1>
            <p className="text-sm text-zinc-500">
              Master {totalWords} essential words for your exam
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/quiz"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors"
              id="quick-quiz-btn"
            >
              <Sparkles size={16} />
              Quick Quiz
            </Link>
            <Link
              to="/learned-quiz"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-xl text-sm font-medium transition-colors"
              id="learned-quiz-btn"
            >
              <Star size={16} />
              Learned Quiz
            </Link>
          </div>
        </div>

        {/* Progress */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <BookOpen size={20} className="text-emerald-400" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Learning Progress</h2>
              <p className="text-xs text-zinc-500">
                {learnedCount} of {totalWords} words mastered
              </p>
            </div>
          </div>
          <ProgressBar value={learnedCount} max={totalWords} color="bg-emerald-500" />
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search words or translations..."
            className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            id="vocab-search"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 bg-zinc-900 p-1 rounded-lg border border-zinc-800 w-fit">
          {(['all', 'learned', 'unlearned'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === tab
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === 'learned' && ` (${learnedCount})`}
              {tab === 'unlearned' && ` (${totalWords - learnedCount})`}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                activeCategory === cat.value
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Word Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredWords.map((word, index) => {
            const learned = isWordLearned(word.id);
            return (
              <motion.div
                key={word.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.02 }}
                className={`group relative glass-card rounded-xl p-5 hover:border-zinc-600/80 transition-all duration-300 ${
                  learned ? 'border-emerald-500/20' : ''
                }`}
              >
                {learned && (
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check size={12} className="text-emerald-400" />
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {word.word}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-medium">
                      {word.category}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-2">{word.translation}</p>

                <p className="text-xs text-zinc-600 italic mb-4 leading-relaxed">
                  "{word.example}"
                </p>

                <button
                  onClick={() => toggleLearnedWord(word.id)}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    learned
                      ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                  }`}
                >
                  {learned ? (
                    <>
                      <Check size={14} /> Learned
                    </>
                  ) : (
                    <>
                      <ArrowRight size={14} /> Mark as Learned
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredWords.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-zinc-500 text-sm">No words found matching your criteria.</p>
        </motion.div>
      )}
    </div>
  );
}
