import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    BookOpen,
    PenTool,
    CheckCircle2,
    XCircle,
    ChevronDown,
    ChevronUp,
    Layers,
    Zap,
} from 'lucide-react';
import { wordpowerData } from '../data/wordpowerData';
import { useMistakeBook } from '../hooks/useMistakeBook';
import AIExplanation from '../components/AIExplanation';
import EmptyState from '../components/EmptyState';
import { logActivity } from '../utils/activity';

type TabType = 'study' | 'exercise';

export default function WordpowerBlock() {
    const { id } = useParams<{ id: string }>();
    const block = wordpowerData.find((b) => b.id === id);
    const { addMistake } = useMistakeBook();

    const [activeTab, setActiveTab] = useState<TabType>('study');
    const [expandedUsage, setExpandedUsage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
    const [fillInput, setFillInput] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    if (!block) {
        return (
            <EmptyState
                title="Wordpower Block Not Found"
                description="The Wordpower section you're looking for doesn't exist."
                action={
                    <Link to="/wordpower" className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium">
                        Back to Wordpower
                    </Link>
                }
            />
        );
    }

    const exercises = block.exercises;
    const currentExercise = exercises[currentIndex];

    const handleMultipleChoiceAnswer = useCallback(
        (index: number) => {
            if (showResult) return;
            setSelectedAnswer(index);
            setShowResult(true);
            if (index === currentExercise.correctAnswer) {
                setScore((s) => s + 1);
            } else {
                addMistake({
                    topicId: block.id,
                    questionId: currentExercise.id,
                    type: 'grammar',
                    question: currentExercise.question,
                    userAnswer: currentExercise.options?.[index] ?? String(index),
                    correctAnswer:
                        typeof currentExercise.correctAnswer === 'number'
                            ? currentExercise.options?.[currentExercise.correctAnswer] ?? ''
                            : String(currentExercise.correctAnswer),
                });
            }
        },
        [showResult, currentExercise, addMistake, block.id]
    );

    const handleFillBlankSubmit = useCallback(() => {
        if (showResult) return;
        setShowResult(true);
        const isCorrect = fillInput.trim().toLowerCase() === String(currentExercise.correctAnswer).toLowerCase();
        if (isCorrect) {
            setScore((s) => s + 1);
        } else {
            addMistake({
                topicId: block.id,
                questionId: currentExercise.id,
                type: 'grammar',
                question: currentExercise.question,
                userAnswer: fillInput,
                correctAnswer: String(currentExercise.correctAnswer),
            });
        }
    }, [showResult, fillInput, currentExercise, addMistake, block.id]);

    const nextExercise = () => {
        if (currentIndex < exercises.length - 1) {
            setCurrentIndex((i) => i + 1);
            setSelectedAnswer(null);
            setFillInput('');
            setShowResult(false);
        } else {
            setFinished(true);
            logActivity('Completed Wordpower', `${block.title} — Score: ${score}/${exercises.length}`);
        }
    };

    const resetExercises = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setFillInput('');
        setShowResult(false);
        setScore(0);
        setFinished(false);
    };

    const toggleUsage = (usageId: string) => {
        setExpandedUsage(expandedUsage === usageId ? null : usageId);
    };

    const isCorrectFill = fillInput.trim().toLowerCase() === String(currentExercise?.correctAnswer).toLowerCase();

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <Link to="/wordpower" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-violet-500/20 text-violet-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
                            Unit {block.unit}
                        </span>
                        <h1 className="text-xl font-bold text-white">{block.title}</h1>
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5">{block.description}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-zinc-900 p-1 rounded-lg border border-zinc-800 w-fit">
                <button
                    onClick={() => setActiveTab('study')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${activeTab === 'study' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                >
                    <BookOpen size={14} /> Study
                </button>
                <button
                    onClick={() => setActiveTab('exercise')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${activeTab === 'exercise' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                >
                    <PenTool size={14} /> Exercises ({exercises.length})
                </button>
            </div>

            {/* ───── STUDY TAB ───── */}
            {activeTab === 'study' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    {/* Root word hero */}
                    <div className="glass-card rounded-2xl p-6 border-l-4 border-violet-500">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center">
                                <Layers size={20} className="text-violet-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">"{block.rootWord}"</h2>
                                <p className="text-xs text-zinc-400">{block.usages.length} different usages</p>
                            </div>
                        </div>
                    </div>

                    {/* Usage accordion cards */}
                    {block.usages.map((usage, index) => (
                        <motion.div
                            key={usage.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleUsage(usage.id)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="w-7 h-7 bg-emerald-500/15 text-emerald-400 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-white truncate">{usage.meaning}</p>
                                        <p className="text-xs text-violet-300 mt-0.5">{usage.meaningTr}</p>
                                    </div>
                                </div>
                                {expandedUsage === usage.id ? (
                                    <ChevronUp size={16} className="text-zinc-500 flex-shrink-0 ml-2" />
                                ) : (
                                    <ChevronDown size={16} className="text-zinc-500 flex-shrink-0 ml-2" />
                                )}
                            </button>

                            <AnimatePresence>
                                {expandedUsage === usage.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 pb-4 pt-1 border-t border-zinc-800/50">
                                            <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2">
                                                Example Sentences
                                            </p>
                                            <div className="space-y-2">
                                                {usage.examples.map((ex, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex gap-2 p-2.5 bg-zinc-800/40 rounded-lg border border-zinc-700/30"
                                                    >
                                                        <span className="text-emerald-500 text-xs mt-0.5 flex-shrink-0">▸</span>
                                                        <p className="text-sm text-zinc-300 italic leading-relaxed">{ex}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {/* Quick-start exercise CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 p-4 bg-violet-500/5 border border-violet-500/15 rounded-xl flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <Zap size={18} className="text-violet-400" />
                            <div>
                                <p className="text-sm font-medium text-white">Ready to practice?</p>
                                <p className="text-xs text-zinc-400">{exercises.length} exercises waiting</p>
                            </div>
                        </div>
                        <button
                            onClick={() => { setActiveTab('exercise'); resetExercises(); }}
                            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-medium transition-colors"
                        >
                            Start Exercises
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* ───── EXERCISE TAB ───── */}
            {activeTab === 'exercise' && !finished && currentExercise && (
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card rounded-2xl p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-zinc-500">
                            Exercise {currentIndex + 1} of {exercises.length}
                        </span>
                        <span className="text-xs text-emerald-400 font-medium">Score: {score}</span>
                    </div>

                    <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-4 overflow-hidden">
                        <motion.div
                            className="h-full bg-violet-500 rounded-full"
                            animate={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
                        />
                    </div>

                    {/* Exercise type badge + instruction */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${currentExercise.type === 'match'
                                ? 'bg-blue-500/15 text-blue-400'
                                : currentExercise.type === 'fill_blank'
                                    ? 'bg-amber-500/15 text-amber-400'
                                    : 'bg-emerald-500/15 text-emerald-400'
                            }`}>
                            {currentExercise.type === 'match' ? 'Match' : currentExercise.type === 'fill_blank' ? 'Fill in' : 'Choose'}
                        </span>
                    </div>

                    <p className="text-[11px] text-zinc-500 italic mb-3">{currentExercise.instruction}</p>
                    <h2 className="text-lg font-semibold text-white mb-6">{currentExercise.question}</h2>

                    {/* Multiple choice / match */}
                    {(currentExercise.type === 'match' || currentExercise.type === 'multiple_choice') && currentExercise.options && (
                        <div className="space-y-3">
                            {currentExercise.options.map((option, i) => {
                                let style = 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50';
                                if (showResult) {
                                    if (i === currentExercise.correctAnswer) style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                                    else if (i === selectedAnswer) style = 'bg-rose-500/10 border-rose-500/30 text-rose-300';
                                    else style = 'bg-zinc-800/30 border-zinc-800 text-zinc-600';
                                }
                                return (
                                    <button
                                        key={i}
                                        onClick={() => handleMultipleChoiceAnswer(i)}
                                        disabled={showResult}
                                        className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${style}`}
                                    >
                                        <span className="text-zinc-600 mr-3">{String.fromCharCode(65 + i)}.</span>
                                        {option}
                                        {showResult && i === currentExercise.correctAnswer && <CheckCircle2 size={16} className="inline ml-2 text-emerald-400" />}
                                        {showResult && i === selectedAnswer && i !== currentExercise.correctAnswer && <XCircle size={16} className="inline ml-2 text-rose-400" />}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {/* Fill in the blank */}
                    {currentExercise.type === 'fill_blank' && (
                        <div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={fillInput}
                                    onChange={(e) => setFillInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && !showResult && fillInput.trim() && handleFillBlankSubmit()}
                                    disabled={showResult}
                                    placeholder="Type your answer..."
                                    className="flex-1 px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 transition-colors disabled:opacity-50"
                                />
                                {!showResult && (
                                    <button
                                        onClick={handleFillBlankSubmit}
                                        disabled={!fillInput.trim()}
                                        className="px-5 py-3 bg-violet-600 hover:bg-violet-700 disabled:opacity-30 text-white rounded-xl text-sm font-medium transition-colors"
                                    >
                                        Check
                                    </button>
                                )}
                            </div>

                            {showResult && (
                                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
                                    {isCorrectFill ? (
                                        <div className="flex items-center gap-2 text-emerald-400 text-sm">
                                            <CheckCircle2 size={16} /> Correct!
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-rose-400 text-sm">
                                                <XCircle size={16} /> Your answer: <span className="line-through">{fillInput}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-emerald-400 text-sm">
                                                <CheckCircle2 size={16} /> Correct answer: <span className="font-semibold">{String(currentExercise.correctAnswer)}</span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    )}

                    {/* Explanation + Next */}
                    {showResult && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                                <p className="text-sm text-zinc-300">{currentExercise.explanation}</p>
                            </div>

                            {/* AI Explanation for wrong answers */}
                            {((currentExercise.type !== 'fill_blank' && selectedAnswer !== currentExercise.correctAnswer) ||
                                (currentExercise.type === 'fill_blank' && !isCorrectFill)) && (
                                    <AIExplanation
                                        correctAnswer={
                                            typeof currentExercise.correctAnswer === 'number'
                                                ? currentExercise.options?.[currentExercise.correctAnswer] ?? ''
                                                : String(currentExercise.correctAnswer)
                                        }
                                        userAnswer={
                                            currentExercise.type === 'fill_blank'
                                                ? fillInput
                                                : currentExercise.options?.[selectedAnswer as number] ?? ''
                                        }
                                        questionContext={currentExercise.question}
                                        show={true}
                                    />
                                )}

                            <button
                                onClick={nextExercise}
                                className="mt-4 w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-colors"
                            >
                                {currentIndex < exercises.length - 1 ? 'Next Exercise' : 'See Results'}
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            )}

            {/* ───── RESULTS ───── */}
            {activeTab === 'exercise' && finished && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-2xl p-8 text-center"
                >
                    <CheckCircle2 size={48} className="text-violet-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Wordpower Complete!</h2>
                    <p className="text-4xl font-bold text-violet-400 mb-1">
                        {score}/{exercises.length}
                    </p>
                    <p className="text-sm text-zinc-400 mb-6">
                        {score === exercises.length
                            ? 'Perfect score! You\'ve mastered this Wordpower block.'
                            : score >= exercises.length * 0.7
                                ? 'Great work! Review the usages you missed.'
                                : 'Keep practicing! Go back to the Study tab to review.'}
                    </p>
                    <div className="flex gap-3 justify-center">
                        <Link
                            to="/wordpower"
                            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700"
                        >
                            Back to Wordpower
                        </Link>
                        <button
                            onClick={resetExercises}
                            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium"
                        >
                            Try Again
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
