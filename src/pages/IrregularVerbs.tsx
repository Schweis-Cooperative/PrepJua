import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookMarked, Volume2, Search, PenTool, CheckCircle2, RotateCcw } from 'lucide-react';
import { irregularVerbs } from '../data/irregularVerbsData';
import { compareWithSlash } from '../utils/normalize';
import { logAnswer, logScore } from '../utils/logger';

type ModeType = 'list' | 'practice';

const playTTS = (word: string) => {
  try {
    const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=1`);
    audio.play().catch(() => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      }
    });
  } catch {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }
};

export default function IrregularVerbs() {
  const [mode, setMode] = useState<ModeType>('list');
  const [search, setSearch] = useState('');
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [v2Input, setV2Input] = useState('');
  const [v3Input, setV3Input] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const filteredVerbs = useMemo(
    () =>
      irregularVerbs.filter(
        (v) =>
          v.v1.toLowerCase().includes(search.toLowerCase()) ||
          v.v2.toLowerCase().includes(search.toLowerCase()) ||
          v.v3.toLowerCase().includes(search.toLowerCase()) ||
          v.meaning.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const practiceVerbs = useMemo(
    () => [...irregularVerbs].sort(() => Math.random() - 0.5).slice(0, 15),
    []
  );

  const currentVerb = practiceVerbs[practiceIndex];

  const handlePracticeSubmit = () => {
    if (submitted) return;
    setSubmitted(true);
    const v2Correct = compareWithSlash(v2Input, currentVerb.v2);
    const v3Correct = compareWithSlash(v3Input, currentVerb.v3);
    const isCorrect = v2Correct && v3Correct;
    if (isCorrect) setScore((s) => s + 1);
    logAnswer({
      section: 'Irregular Verbs',
      questionId: currentVerb.id,
      question: `V1: ${currentVerb.v1} — fill V2 and V3`,
      userAnswer: `V2: "${v2Input}", V3: "${v3Input}"`,
      correctAnswer: `V2: "${currentVerb.v2}", V3: "${currentVerb.v3}"`,
      isCorrect,
    });
  };

  const nextVerb = () => {
    if (practiceIndex < practiceVerbs.length - 1) {
      setPracticeIndex((i) => i + 1);
      setV2Input('');
      setV3Input('');
      setSubmitted(false);
    } else {
      setFinished(true);
      logScore('Irregular Verbs', 'Verb Practice', score, practiceVerbs.length);
    }
  };

  const resetPractice = () => {
    setPracticeIndex(0);
    setV2Input('');
    setV3Input('');
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-1">Irregular Verbs</h1>
        <p className="text-sm text-zinc-500">{irregularVerbs.length} verbs with V1, V2, V3 forms</p>
      </motion.div>

      <div className="flex gap-1 mb-6 bg-zinc-900 p-1 rounded-lg border border-zinc-800 w-fit">
        <button onClick={() => setMode('list')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${mode === 'list' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
          <BookMarked size={14} /> Verb List
        </button>
        <button onClick={() => setMode('practice')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${mode === 'practice' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
          <PenTool size={14} /> Practice
        </button>
      </div>

      {mode === 'list' ? (
        <div>
          <div className="relative mb-4">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search verbs..." className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-teal-500/50" />
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 px-5 py-3 bg-zinc-800/50 border-b border-zinc-700/50 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              <span>V1 (Base)</span>
              <span>V2 (Past)</span>
              <span>V3 (P.P.)</span>
              <span>Meaning</span>
              <span className="text-center">Listen</span>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              <AnimatePresence>
                {filteredVerbs.map((verb) => (
                  <motion.div
                    key={verb.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-5 gap-4 px-5 py-3 border-b border-zinc-800/50 text-sm hover:bg-zinc-800/30 transition-colors"
                  >
                    <span className="text-teal-300 font-medium">{verb.v1}</span>
                    <span className="text-zinc-300">{verb.v2}</span>
                    <span className="text-zinc-300">{verb.v3}</span>
                    <span className="text-zinc-500 text-xs">{verb.meaning}</span>
                    <div className="flex justify-center">
                      <button onClick={() => playTTS(verb.v1)} className="p-1 text-zinc-500 hover:text-teal-400 transition-colors">
                        <Volume2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : finished ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-8 text-center">
          <CheckCircle2 size={48} className="text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Practice Complete!</h2>
          <p className="text-4xl font-bold text-teal-400 mb-4">{score}/{practiceVerbs.length}</p>
          <button onClick={() => { resetPractice(); window.location.reload(); }} className="flex items-center gap-2 mx-auto px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-medium">
            <RotateCcw size={16} /> Try Again
          </button>
        </motion.div>
      ) : (
        <motion.div key={practiceIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-zinc-500">Verb {practiceIndex + 1}/{practiceVerbs.length}</span>
            <span className="text-xs text-teal-400 font-medium">Score: {score}</span>
          </div>

          <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
            <motion.div className="h-full bg-teal-500 rounded-full" animate={{ width: `${((practiceIndex + 1) / practiceVerbs.length) * 100}%` }} />
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="text-3xl font-bold text-teal-300">{currentVerb.v1}</h2>
              <button onClick={() => playTTS(currentVerb.v1)} className="p-1 text-zinc-500 hover:text-teal-400 transition-colors">
                <Volume2 size={20} />
              </button>
            </div>
            <p className="text-sm text-zinc-500">{currentVerb.meaning}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-zinc-500 mb-1 block">V2 (Past Simple)</label>
              <input type="text" value={v2Input} onChange={(e) => setV2Input(e.target.value)} disabled={submitted} placeholder="Type V2..." className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                submitted
                  ? compareWithSlash(v2Input, currentVerb.v2) ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-teal-500/50'
              }`} />
              {submitted && !compareWithSlash(v2Input, currentVerb.v2) && (
                <p className="text-xs text-emerald-400 mt-1">Answer: {currentVerb.v2}</p>
              )}
            </div>
            <div>
              <label className="text-xs text-zinc-500 mb-1 block">V3 (Past Participle)</label>
              <input type="text" value={v3Input} onChange={(e) => setV3Input(e.target.value)} disabled={submitted} placeholder="Type V3..." className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                submitted
                  ? compareWithSlash(v3Input, currentVerb.v3) ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-teal-500/50'
              }`} />
              {submitted && !compareWithSlash(v3Input, currentVerb.v3) && (
                <p className="text-xs text-emerald-400 mt-1">Answer: {currentVerb.v3}</p>
              )}
            </div>
          </div>

          {!submitted ? (
            <button onClick={handlePracticeSubmit} className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-medium transition-colors">
              Check Answer
            </button>
          ) : (
            <button onClick={nextVerb} className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-medium transition-colors">
              {practiceIndex < practiceVerbs.length - 1 ? 'Next Verb' : 'See Results'}
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}
