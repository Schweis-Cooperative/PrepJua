import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Upload, Loader2, Lightbulb, ChevronRight, MessageSquare, Info, BookOpen } from 'lucide-react';
import { writingTopics } from '../data/cheatSheetData';
import { writingTips } from '../data/writingTipsData';
import { gradeEssay } from '../utils/ai';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { WritingResult, WritingScoreEntry } from '../types/writing';
import { logAI } from '../utils/logger';

type TabType = 'write' | 'tips';

export default function WritingHub() {
  const [activeTab, setActiveTab] = useState<TabType>('write');
  const [selectedTopic, setSelectedTopic] = useState(writingTopics[0] || { id: 'temp', title: 'Loading...', prompt: '', type: 'opinion' });
  const [customTopic, setCustomTopic] = useState('');
  const [essay, setEssay] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [grading, setGrading] = useState(false);
  const [result, setResult] = useState<WritingResult | null>(null);
  const [, setWritingScores] = useLocalStorage<WritingScoreEntry[]>('writingScores', []);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [selectedTipId, setSelectedTipId] = useState(writingTips[0].id);
  const activeTip = writingTips.find(t => t.id === selectedTipId) || writingTips[0];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const maxImages = 2;
    const newImages: string[] = [];

    Array.from(files)
      .slice(0, maxImages - images.length)
      .forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          newImages.push(base64);
          if (newImages.length === Math.min(files.length, maxImages - images.length)) {
            setImages((prev) => [...prev, ...newImages].slice(0, maxImages));
          }
        };
        reader.readAsDataURL(file);
      });
  };

  const handleGrade = async () => {
    if (!essay.trim() && images.length === 0) return;
    setGrading(true);
    const topic = customTopic || selectedTopic.prompt;

    try {
      const raw = await gradeEssay(topic, essay, images.length > 0 ? images : undefined);
      const cleanJson = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed: WritingResult = JSON.parse(cleanJson);
      setResult(parsed);

      const entry: WritingScoreEntry = {
        id: crypto.randomUUID(),
        topicId: selectedTopic.id,
        topicTitle: customTopic || selectedTopic.title,
        cefrLevel: parsed.cefrLevel,
        date: new Date().toISOString(),
        result: parsed,
      };
      setWritingScores((prev) => [entry, ...prev]);
      logAI('Essay Grading', `Topic: ${entry.topicTitle} — CEFR: ${parsed.cefrLevel}`);
    } catch (e) {
      console.error('Failed to parse grading result:', e);
    } finally {
      setGrading(false);
    }
  };

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Writing Hub</h1>
        <p className="text-sm text-zinc-500">Master your writing skills with AI-powered feedback</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-zinc-900 p-1 rounded-lg border border-zinc-800 w-fit">
        <button onClick={() => setActiveTab('write')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${activeTab === 'write' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
          <PenTool size={14} /> Write & Grade
        </button>
        <button onClick={() => setActiveTab('tips')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${activeTab === 'tips' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
          <Lightbulb size={14} /> Writing Tips
        </button>
      </div>

      {activeTab === 'tips' ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {writingTips.map((tip) => (
              <button
                key={tip.id}
                onClick={() => setSelectedTipId(tip.id)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-between group ${
                  selectedTipId === tip.id
                    ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                    : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tip.title}
                <ChevronRight size={14} className={selectedTipId === tip.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'} />
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div 
            key={selectedTipId}
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-3 glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <Lightbulb size={20} className="text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">{activeTip.title}</h2>
            </div>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">{activeTip.description}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-4 flex items-center gap-2">
                  <Info size={14} /> Structural Roadmap
                </h3>
                <div className="space-y-4">
                  {activeTip.structure.map((item, i) => (
                    <div key={i} className="relative pl-6 pb-4 border-l border-zinc-800 last:border-0 last:pb-0">
                      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-900" />
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-2">{item.content}</p>
                      {item.example && (
                        <div className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg italic">
                          <p className="text-[11px] text-zinc-500">Example: "{item.example}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-4 flex items-center gap-2">
                  <MessageSquare size={14} /> Essential Phrases
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeTip.usefulPhrases.map((phrase) => (
                    <div key={phrase} className="px-4 py-3 bg-zinc-900/50 rounded-xl text-xs text-zinc-300 border border-zinc-800 group hover:border-emerald-500/30 transition-all">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : result ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
            <h2 className="text-4xl font-bold text-indigo-400 mb-2">{result.cefrLevel}</h2>
            <p className="text-sm text-zinc-400">Estimated CEFR Level</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-6 border-t-4 border-t-amber-500/30">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">Grammar Corrections</h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {result.grammarCorrections && result.grammarCorrections.map((corr, idx) => (
                  <li key={idx} className="flex gap-2">
                    <ChevronRight size={16} className="text-zinc-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{corr}</span>
                  </li>
                ))}
                {(!result.grammarCorrections || result.grammarCorrections.length === 0) && (
                  <p className="text-zinc-500 italic">No major grammar issues found.</p>
                )}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-6 border-t-4 border-t-emerald-500/30">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">Vocabulary Upgrades</h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {result.vocabularyUpgrades && result.vocabularyUpgrades.map((upg, idx) => (
                  <li key={idx} className="flex gap-2">
                    <ChevronRight size={16} className="text-zinc-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{upg}</span>
                  </li>
                ))}
                {(!result.vocabularyUpgrades || result.vocabularyUpgrades.length === 0) && (
                  <p className="text-zinc-500 italic">No significant vocabulary upgrades suggested.</p>
                )}
              </ul>
            </div>
          </div>

          <button onClick={() => { setResult(null); setEssay(''); setImages([]); }} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
            Write Another Essay
          </button>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {/* Essay writing UI remains same but with layout improvements */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen size={16} className="text-zinc-400" /> Choose Your Prompt
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {writingTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => { setSelectedTopic(topic); setCustomTopic(''); }}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    selectedTopic.id === topic.id && !customTopic
                      ? 'bg-indigo-500/10 border-indigo-500/40 shadow-inner'
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'
                  }`}
                >
                  <p className={`text-sm font-bold ${selectedTopic.id === topic.id && !customTopic ? 'text-indigo-300' : 'text-zinc-400'}`}>
                    {topic.title}
                  </p>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 mt-1 block">{topic.type}</span>
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="Or define your own custom topic..."
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/30 transition-all"
              />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-white">Drafting Area</h2>
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-bold ${wordCount > 250 ? 'text-rose-400' : 'text-zinc-500'}`}>{wordCount} / 250 words</span>
              </div>
            </div>

            <textarea
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              placeholder={customTopic || selectedTopic.prompt}
              rows={14}
              className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/30 resize-none custom-scrollbar leading-relaxed"
            />

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 rounded-lg text-[11px] font-bold transition-all border border-zinc-700"
                >
                  <Upload size={14} /> Add Images ({images.length}/2)
                </button>
                {images.length > 0 && (
                  <button onClick={() => setImages([])} className="text-[10px] font-bold text-rose-500 hover:text-rose-400 px-2 uppercase tracking-tighter">Clear</button>
                )}
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
            </div>
          </div>

          <button
            onClick={handleGrade}
            disabled={grading || (!essay.trim() && images.length === 0)}
            className={`w-full py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xl ${
              grading || (!essay.trim() && images.length === 0)
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20'
            }`}
          >
            {grading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Analyzing Composition...
              </>
            ) : (
              <>
                <PenTool size={18} /> Run AI Diagnostic
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
