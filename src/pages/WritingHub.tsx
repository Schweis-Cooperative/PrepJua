import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Upload, Loader2, FileText, Lightbulb } from 'lucide-react';
import { writingTopics } from '../data/cheatSheetData';
import { gradeEssay } from '../utils/ai';
import { CircularProgress } from '../components/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { WritingResult, WritingScoreEntry } from '../types/writing';
import { logActivity } from '../utils/activity';

type TabType = 'write' | 'tips';

export default function WritingHub() {
  const [activeTab, setActiveTab] = useState<TabType>('write');
  const [selectedTopic, setSelectedTopic] = useState(writingTopics[0]);
  const [customTopic, setCustomTopic] = useState('');
  const [essay, setEssay] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [grading, setGrading] = useState(false);
  const [result, setResult] = useState<WritingResult | null>(null);
  const [, setWritingScores] = useLocalStorage<WritingScoreEntry[]>('writingScores', []);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        score: parsed.score,
        date: new Date().toISOString(),
        result: parsed,
      };
      setWritingScores((prev) => [entry, ...prev]);
      logActivity('Graded Essay', `Topic: ${entry.topicTitle} — Score: ${parsed.score}/100`);
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
        <p className="text-sm text-zinc-500">Write essays and get AI-powered feedback</p>
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-4">How to Write an Opinion Essay</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-indigo-300 mb-2">1. Introduction</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Start with a hook sentence to grab the reader's attention. Provide brief background on the topic. End with your thesis statement that clearly states your opinion.</p>
              <div className="mt-2 p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-lg">
                <p className="text-xs text-zinc-500">Example: "In today's digital age, the question of whether technology improves education has become increasingly relevant. While some argue that traditional methods are superior, I firmly believe that technology has revolutionized learning for the better."</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-indigo-300 mb-2">2. Body Paragraphs (2-3)</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Each paragraph should start with a topic sentence. Support with evidence, examples, and explanations. Use linking words: Furthermore, Moreover, In addition, However, On the other hand.</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-indigo-300 mb-2">3. Conclusion</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Restate your thesis in different words. Summarize the main arguments. End with a final thought or recommendation.</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-amber-300 mb-2">Useful Phrases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['In my opinion...', 'I firmly believe that...', 'From my perspective...', 'It is widely acknowledged that...', 'On the other hand...', 'Taking everything into consideration...', 'All things considered...', 'To conclude...'].map((phrase) => (
                  <div key={phrase} className="px-3 py-2 bg-zinc-800/50 rounded-lg text-xs text-zinc-300 border border-zinc-700/50">
                    {phrase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : result ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          {/* Score */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <CircularProgress
              value={result.score}
              color={result.score >= 70 ? '#10b981' : result.score >= 40 ? '#f59e0b' : '#ef4444'}
            />
            <p className="text-sm text-zinc-400 mt-4">Overall Score</p>
          </div>

          {/* Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { title: 'General Feedback', content: result.generalFeedback, color: 'indigo' },
              { title: 'Structure', content: result.structureFeedback, color: 'violet' },
              { title: 'Grammar', content: result.grammarFeedback, color: 'amber' },
            ].map((fb) => (
              <div key={fb.title} className={`glass-card rounded-xl p-5`}>
                <h3 className={`text-sm font-semibold text-${fb.color}-300 mb-2`}>{fb.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{fb.content}</p>
              </div>
            ))}
          </div>

          {/* Corrections */}
          {result.corrections.length > 0 && (
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-rose-300 mb-4">Corrections</h3>
              <div className="space-y-3">
                {result.corrections.map((c, i) => (
                  <div key={i} className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                    <div className="flex flex-col sm:flex-row gap-2 mb-2">
                      <span className="text-sm text-rose-300 line-through">{c.original}</span>
                      <span className="text-sm text-zinc-600">→</span>
                      <span className="text-sm text-emerald-300">{c.corrected}</span>
                    </div>
                    <p className="text-xs text-zinc-500">{c.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Improved essay */}
          {result.improvedEssay && (
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-emerald-300 mb-3">Improved Version</h3>
              <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{result.improvedEssay}</p>
            </div>
          )}

          <button onClick={() => { setResult(null); setEssay(''); setImages([]); }} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors">
            Write Another Essay
          </button>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {/* Topic selection */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-white mb-3">Select a Topic</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {writingTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => { setSelectedTopic(topic); setCustomTopic(''); }}
                  className={`text-left p-3 rounded-lg border text-sm transition-all ${
                    selectedTopic.id === topic.id && !customTopic
                      ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                      : 'bg-zinc-800/50 border-zinc-700/50 text-zinc-400 hover:bg-zinc-800'
                  }`}
                >
                  <span className="font-medium">{topic.title}</span>
                  <span className="ml-2 text-[10px] uppercase tracking-wider text-zinc-600">{topic.type}</span>
                </button>
              ))}
            </div>

            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              placeholder="Or type a custom topic..."
              className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50"
            />
          </div>

          {/* Essay input */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-white">Your Essay</h2>
              <span className="text-xs text-zinc-500">{wordCount} words</span>
            </div>

            <textarea
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              placeholder={customTopic || selectedTopic.prompt}
              rows={12}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 resize-y"
            />

            {/* Image upload */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 rounded-lg text-xs font-medium border border-zinc-700 transition-colors"
              >
                <Upload size={14} /> Upload Image ({images.length}/2)
              </button>
              {images.length > 0 && (
                <button
                  onClick={() => setImages([])}
                  className="text-xs text-rose-400 hover:text-rose-300"
                >
                  Clear images
                </button>
              )}
              <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
            </div>

            {images.length > 0 && (
              <div className="mt-3 flex gap-2">
                {images.map((_, i) => (
                  <div key={i} className="flex items-center gap-1 px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded text-xs border border-indigo-500/20">
                    <FileText size={12} /> Image {i + 1}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleGrade}
            disabled={grading || (!essay.trim() && images.length === 0)}
            className={`w-full py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              grading || (!essay.trim() && images.length === 0)
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            {grading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Grading your essay...
              </>
            ) : (
              <>
                <PenTool size={16} /> Grade My Essay
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
