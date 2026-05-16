import { useState, useMemo, useCallback, memo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as ReactWindow from 'react-window';
// @ts-ignore
import { AutoSizer } from 'react-virtualized-auto-sizer';

const { FixedSizeList } = ReactWindow as any;
import { Search, BookOpen, Check, Star, ArrowRight, Sparkles, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, List as ListIcon } from 'lucide-react';
import { vocabularyData } from '../data/vocabularyData';
import { useProgress } from '../hooks/useProgress';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ProgressBar from '../components/ProgressBar';

type TabType = 'all' | 'learned' | 'unlearned';
type CategoryType = 'all' | 'phrase' | 'verb' | 'noun' | 'adjective' | 'adverb' | 'preposition' | 'conjunction';

const WORDS_PER_PAGE = 24; // Increased for better virtualization experience

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

// Memoized card component — strictly only re-renders when props change
const WordCard = memo(function WordCard({
  word,
  learned,
  onToggle,
}: {
  word: { id: string; word: string; translation: string; example: string; category: string };
  learned: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      className={`h-full group relative glass-card rounded-xl p-5 hover:border-zinc-600/80 transition-colors ${learned ? 'border-emerald-500/20' : ''
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

      <p className="text-xs text-zinc-600 italic mb-4 leading-relaxed line-clamp-2">
        &quot;{word.example}&quot;
      </p>

      <button
        onClick={() => onToggle(word.id)}
        className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-colors ${learned
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
    </div>
  );
});

export default function VocabularyDashboard() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [page, setPage] = useState(0);
  const [isPageMenuOpen, setIsPageMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [username] = useLocalStorage('username', '');
  const { learnedWords, toggleLearnedWord, isWordLearned } = useProgress();

  // Stable toggle callback
  const handleToggle = useCallback(
    (id: string) => toggleLearnedWord(id),
    [toggleLearnedWord]
  );

  const filteredWords = useMemo(() => {
    const searchLower = search.toLowerCase();
    return vocabularyData.filter((word) => {
      const matchesSearch =
        word.word.toLowerCase().includes(searchLower) ||
        word.translation.toLowerCase().includes(searchLower);
      const matchesCategory = activeCategory === 'all' || word.category === activeCategory;
      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'learned' && isWordLearned(word.id)) ||
        (activeTab === 'unlearned' && !isWordLearned(word.id));
      return matchesSearch && matchesCategory && matchesTab;
    });
  }, [search, activeCategory, activeTab, learnedWords, isWordLearned]);

  // Reset page when filters change
  const totalPages = Math.max(1, Math.ceil(filteredWords.length / WORDS_PER_PAGE));
  const safePage = Math.min(page, totalPages - 1);
  const pageWords = useMemo(
    () => filteredWords.slice(safePage * WORDS_PER_PAGE, (safePage + 1) * WORDS_PER_PAGE),
    [filteredWords, safePage]
  );

  // Debounce search input to prevent lag
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(inputValue);
      setPage(0);
    }, 250);
    return () => clearTimeout(timer);
  }, [inputValue]);

  // Click outside to close page menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsPageMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    setPage(0);
  }, []);

  const handleCategoryChange = useCallback((cat: CategoryType) => {
    setActiveCategory(cat);
    setPage(0);
  }, []);

  const handleSearchChange = useCallback((val: string) => {
    setInputValue(val);
  }, []);

  const handlePageChange = useCallback((p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const totalWords = vocabularyData.length;
  const learnedCount = learnedWords.length;

  const AutoSizerAny = AutoSizer as any;

  // Virtualization Grid Row Component
  const Row = useCallback(({ index, style, data }: any) => {
    const { items, columns, isLearned, onToggle } = data;
    const startIndex = index * columns;
    const rowItems = items.slice(startIndex, startIndex + columns);

    return (
      <div style={style} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 px-1">
        {rowItems.map((word: any) => (
          <div key={word.id} className="h-full">
            <WordCard
              word={word}
              learned={isLearned(word.id)}
              onToggle={onToggle}
            />
          </div>
        ))}
        {/* Placeholder divs to maintain grid structure in incomplete rows */}
        {rowItems.length < columns && 
          Array.from({ length: columns - rowItems.length }).map((_, i) => (
            <div key={`empty-${i}`} className="invisible" />
          ))
        }
      </div>
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            value={inputValue}
            onChange={(e) => handleSearchChange(e.target.value)}
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
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === tab
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
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${activeCategory === cat.value
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-700'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Word Grid — Virtualized for locked 60 FPS */}
      <div className="h-[600px] w-full">
        {filteredWords.length > 0 ? (
          <AutoSizerAny>
            {({ height, width }: any) => {
              const columns = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
              const rowCount = Math.ceil(pageWords.length / columns);
              const rowHeight = 260; // Approximate card height + gap

              return (
                <FixedSizeList
                  height={height}
                  itemCount={rowCount}
                  itemSize={rowHeight}
                  width={width}
                  itemData={{
                    items: pageWords,
                    columns,
                    isLearned: isWordLearned,
                    onToggle: handleToggle
                  }}
                  className="custom-scrollbar"
                >
                  {Row}
                </FixedSizeList>
              );
            }}
          </AutoSizerAny>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-zinc-500 text-sm">No words found matching your criteria.</p>
          </motion.div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center justify-center gap-4 mt-8 mb-8">
          <div className="flex items-center gap-2 bg-zinc-900/80 p-2 rounded-2xl border border-zinc-800/80 backdrop-blur-sm shadow-xl shadow-black/20">
            <button
              onClick={() => handlePageChange(0)}
              disabled={safePage === 0}
              title="First Page"
              className="p-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronsLeft size={16} />
            </button>
            <button
              onClick={() => handlePageChange(Math.max(0, safePage - 1))}
              disabled={safePage === 0}
              title="Previous Page"
              className="p-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsPageMenuOpen(!isPageMenuOpen)}
                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm font-bold transition-all min-w-[140px] justify-center"
              >
                <ListIcon size={16} />
                Page {safePage + 1} of {totalPages}
              </button>

              <AnimatePresence>
                {isPageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 max-h-64 overflow-y-auto custom-scrollbar glass-card rounded-2xl border border-zinc-700 shadow-2xl z-50 p-3"
                  >
                    <div className="text-xs font-semibold text-zinc-500 mb-3 px-2 uppercase tracking-wider">Go to Page...</div>
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            handlePageChange(i);
                            setIsPageMenuOpen(false);
                          }}
                          className={`h-10 rounded-xl text-xs font-bold transition-all ${
                            i === safePage
                              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages - 1, safePage + 1))}
              disabled={safePage >= totalPages - 1}
              title="Next Page"
              className="p-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => handlePageChange(totalPages - 1)}
              disabled={safePage >= totalPages - 1}
              title="Last Page"
              className="p-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronsRight size={16} />
            </button>
          </div>
          <span className="text-xs text-zinc-500 font-medium">
            Showing {safePage * WORDS_PER_PAGE + 1}-{Math.min((safePage + 1) * WORDS_PER_PAGE, filteredWords.length)} of {filteredWords.length} words
          </span>
        </div>
      )}
    </div>
  );
}
