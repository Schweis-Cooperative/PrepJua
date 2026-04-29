import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers, ArrowRight } from 'lucide-react';
import { wordpowerData } from '../data/wordpowerData';

const unitColors: Record<number, { bg: string; border: string; text: string; badge: string }> = {
    3: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', badge: 'bg-sky-500/20 text-sky-300' },
    4: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', badge: 'bg-violet-500/20 text-violet-300' },
    5: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' },
    6: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
};

export default function WordpowerHub() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
                <Link to="/" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Wordpower</h1>
                    <p className="text-xs text-zinc-500">
                        Deep-dive into root words — multiple meanings, collocations &amp; exercises
                    </p>
                </div>
            </div>

            <div className="grid gap-4">
                {wordpowerData.map((block, index) => {
                    const colors = unitColors[block.unit] ?? unitColors[3];
                    return (
                        <motion.div
                            key={block.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Link
                                to={`/wordpower/${block.id}`}
                                className={`block glass-card rounded-2xl p-5 border-l-4 ${colors.border} hover:bg-zinc-800/40 transition-all group`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4 flex-1 min-w-0">
                                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <Layers size={22} className={colors.text} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors.badge}`}>
                                                    Unit {block.unit}
                                                </span>
                                                <h2 className="text-lg font-bold text-white">"{block.rootWord}"</h2>
                                            </div>
                                            <p className="text-xs text-zinc-400 leading-relaxed mb-3">{block.description}</p>
                                            <div className="flex gap-3 text-[11px] text-zinc-500">
                                                <span>{block.usages.length} meanings</span>
                                                <span>•</span>
                                                <span>{block.exercises.length} exercises</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ArrowRight size={18} className="text-zinc-600 group-hover:text-zinc-300 transition-colors flex-shrink-0 mt-1" />
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
