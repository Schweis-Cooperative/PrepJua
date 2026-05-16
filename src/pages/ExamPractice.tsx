import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowLeft, 
  Cpu, 
  ShieldAlert, 
  Sparkles,
  BookOpen,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { examSets } from '../data/examData';
import { aLevelExamSets } from '../data/aLevelExamData';
import { bLevelExamSets } from '../data/bLevelExamData';
import { compareAnswers } from '../utils/normalize';
import { useMistakeBook } from '../hooks/useMistakeBook';
import AIExplanation from '../components/AIExplanation';
import { logAnswer, logScore } from '../utils/logger';
import { endOfYearExamSets } from '../data/endOfYearExamData';

const difficultyColors: Record<string, string> = {
  easy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  hard: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

type Category = 'worksheets' | 'ai_challenges' | 'simulations' | null;
type Level = 'A' | 'B' | 'Final' | null;

export default function ExamPractice() {
  const [category, setCategory] = useState<Category>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level>(null);
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [textInput, setTextInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { addMistake } = useMistakeBook();

  const allExams = useMemo(() => [...examSets, ...aLevelExamSets, ...bLevelExamSets, ...endOfYearExamSets], []);
  const exam = useMemo(() => allExams.find((e) => e.id === selectedExam), [allExams, selectedExam]);

  const handleMCAnswer = useCallback((index: number) => {
    if (submitted) return;
    setSelectedAnswer(index);
    const question = exam!.questions[currentIndex];
    const correct = index === question.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);
    else {
      addMistake({
        topicId: exam!.id,
        questionId: question.id,
        type: 'exam',
        question: question.question,
        userAnswer: question.options?.[index] || '',
        correctAnswer: question.options?.[question.correctAnswer as number] || String(question.correctAnswer),
      });
    }
    logAnswer({
      section: 'Exam Practice',
      questionId: question.id,
      question: question.question,
      userAnswer: question.options?.[index] || String(index),
      correctAnswer: question.options?.[question.correctAnswer as number] || String(question.correctAnswer),
      isCorrect: correct,
    });
  }, [submitted, exam, currentIndex, addMistake]);

  const handleTextSubmit = () => {
    if (submitted) return;
    const question = exam!.questions[currentIndex];
    const correct = compareAnswers(textInput, String(question.correctAnswer));
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);
    else {
      addMistake({
        topicId: exam!.id,
        questionId: question.id,
        type: 'exam',
        question: question.question,
        userAnswer: textInput,
        correctAnswer: String(question.correctAnswer),
      });
    }
    logAnswer({
      section: 'Exam Practice',
      questionId: question.id,
      question: question.question,
      userAnswer: textInput,
      correctAnswer: String(question.correctAnswer),
      isCorrect: correct,
    });
  };

  const nextQuestion = () => {
    if (!exam) return;
    if (currentIndex < exam.questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setTextInput('');
      setSubmitted(false);
      setIsCorrect(false);
    } else {
      setFinished(true);
      logScore('Exam Practice', exam.title, score, exam.questions.length);
    }
  };

  const backToHub = () => {
    setCategory(null);
    setSelectedLevel(null);
    setSelectedPart(null);
    setSelectedExam(null);
  };

  const backToLevels = () => {
    setSelectedLevel(null);
    setSelectedPart(null);
  };

  const backToParts = () => {
    setSelectedPart(null);
  };

  const resetExam = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setTextInput('');
    setSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setFinished(false);
  };

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Practice Hub</h1>
          <p className="text-sm text-zinc-500">Select a category to start your practice session</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard 
            title="Worksheets" 
            desc="Official curriculum worksheets from your teachers." 
            icon={BookOpen} 
            color="amber" 
            onClick={() => setCategory('worksheets')} 
          />
          <CategoryCard 
            title="AI Challenges" 
            desc="Personalized quizzes generated by AI based on your level." 
            icon={Cpu} 
            color="indigo" 
            onClick={() => setCategory('ai_challenges')} 
          />
          <CategoryCard 
            title="Exam Simulations" 
            desc="Timed full-length mock exams to test your readiness." 
            icon={ShieldAlert} 
            color="rose" 
            onClick={() => setCategory('simulations')} 
          />
        </div>
      </div>
    );
  }

  if (category && !selectedExam) {
    return (
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={backToHub}
          className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Hub
        </button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">
            {category === 'worksheets' ? 'Unit Worksheets' : category === 'ai_challenges' ? 'AI Challenges' : 'Exam Simulations'}
          </h1>
          <p className="text-sm text-zinc-500">
            {category === 'worksheets' 
              ? 'Practice with specific units from the Empower B1+ syllabus.' 
              : category === 'simulations' 
                ? 'Select your level to view available monthly simulations.'
                : 'Adaptive testing powered by AI.'}
          </p>
        </motion.div>

        {category === 'worksheets' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {examSets.map((set, i) => (
              <motion.button
                key={set.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedExam(set.id)}
                className="group text-left glass-card rounded-xl p-5 hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ClipboardList size={20} className="text-amber-400" />
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[set.difficulty]}`}>
                    {set.difficulty.charAt(0).toUpperCase() + set.difficulty.slice(1)}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors">{set.title}</h3>
                <p className="text-xs text-zinc-500 mb-2 line-clamp-2">{set.description}</p>
                <span className="text-[10px] text-zinc-600 font-medium">{set.questions.length} questions</span>
              </motion.button>
            ))}
          </div>
        ) : category === 'simulations' ? (
          <div>
            {!selectedLevel ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
                <LevelCard 
                  level="A" 
                  title="Advanced Level" 
                  desc="Focuses on B2+/C1 academic precision and complex structures."
                  color="rose"
                  onClick={() => setSelectedLevel('A')}
                />
                <LevelCard 
                  level="B" 
                  title="Intermediate Level" 
                  desc="Focuses on B1/B2 core proficiency and natural communication."
                  color="indigo"
                  onClick={() => setSelectedLevel('B')}
                />
                <LevelCard 
                  level="F" 
                  title="Final Exams" 
                  desc="Comprehensive 48-page end-of-year assessment."
                  color="amber"
                  onClick={() => setSelectedLevel('Final')}
                />
              </div>
            ) : (
              <div>
                <button 
                  onClick={backToLevels}
                  className="flex items-center gap-2 text-xs text-rose-400/60 hover:text-rose-400 mb-6 transition-colors font-bold uppercase tracking-wider"
                >
                  <ArrowLeft size={14} /> Back to Levels
                </button>

                {selectedLevel === 'Final' && !selectedPart ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    {[1, 2, 3, 4, 5].map((part) => (
                      <motion.button
                        key={part}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedPart(part)}
                        disabled={part > 5}
                        className={`p-6 rounded-2xl border-2 text-center transition-all ${
                          part <= 5 
                            ? 'glass-card border-amber-500/20 hover:border-amber-500/50 text-amber-400' 
                            : 'bg-zinc-900/50 border-zinc-800 text-zinc-700 cursor-not-allowed'
                        }`}
                      >
                        <span className="block text-2xl font-black mb-1">PART {part}</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">
                          {part <= 5 ? 'Available Now' : 'Coming Soon'}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div>
                    {selectedLevel === 'Final' && (
                      <button 
                        onClick={backToParts}
                        className="flex items-center gap-2 text-xs text-amber-400/60 hover:text-amber-400 mb-6 transition-colors font-bold uppercase tracking-wider"
                      >
                        <ArrowLeft size={14} /> Back to Parts
                      </button>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {(
                        selectedLevel === 'A' ? aLevelExamSets : 
                        selectedLevel === 'B' ? bLevelExamSets : 
                        (() => {
                          if (selectedPart === 1) return endOfYearExamSets.slice(0, 20);
                          if (selectedPart === 2) return endOfYearExamSets.slice(20, 40);
                          if (selectedPart === 3) return endOfYearExamSets.slice(40, 51);
                          if (selectedPart === 4) return endOfYearExamSets.slice(51, 57);
                          if (selectedPart === 5) return endOfYearExamSets.slice(57);
                          return [];
                        })()
                      ).map((set, i) => (
                        <motion.button
                          key={set.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => setSelectedExam(set.id)}
                          className={`group text-left glass-card rounded-xl p-5 hover:border-${selectedLevel === 'A' ? 'rose' : selectedLevel === 'B' ? 'indigo' : 'amber'}-500/30 transition-all`}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <ShieldAlert size={20} className={`text-${selectedLevel === 'A' ? 'rose' : selectedLevel === 'B' ? 'indigo' : 'amber'}-400`} />
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[set.difficulty]}`}>
                              {set.difficulty.charAt(0).toUpperCase() + set.difficulty.slice(1)}
                            </span>
                          </div>
                          <h3 className={`text-sm font-semibold text-white mb-1 group-hover:text-${selectedLevel === 'A' ? 'rose' : selectedLevel === 'B' ? 'indigo' : 'amber'}-300 transition-colors`}>{set.title}</h3>
                          <p className="text-xs text-zinc-500 mb-2 line-clamp-2">{set.description}</p>
                          <span className="text-[10px] text-zinc-600 font-medium">{set.questions.length} questions · ~{Math.ceil(set.questions.length * 1.5)} min</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center">
            <Sparkles size={48} className="text-zinc-700 mx-auto mb-4" />
            <h2 className="text-lg font-bold text-zinc-400 mb-2">Coming Soon</h2>
            <p className="text-sm text-zinc-600 max-w-xs mx-auto">
              Our AI challenge generator is currently being calibrated for the B1+ curriculum.
            </p>
          </div>
        )}
      </div>
    );
  }


  if (!exam) return null;

  if (finished) {

    return (
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-8 text-center">
          <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Exam Complete!</h2>
          <p className="text-sm text-zinc-500 mb-1">{exam.title}</p>
          <p className="text-4xl font-bold text-emerald-400 mb-4">{score}/{exam.questions.length}</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => { setSelectedExam(null); resetExam(); }} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700">
              Close
            </button>
            <button onClick={resetExam} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium">
              <RotateCcw size={16} /> Retry
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = exam.questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">{exam.title}</h1>
          <p className="text-xs text-zinc-500">Question {currentIndex + 1}/{exam.questions.length} · Score: {score}</p>
        </div>
        <button onClick={() => { setSelectedExam(null); resetExam(); }} className="text-xs text-zinc-500 hover:text-zinc-300">Exit</button>
      </div>

      <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-emerald-500 rounded-full" animate={{ width: `${((currentIndex + 1) / exam.questions.length) * 100}%` }} />
      </div>

      <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-6">
        {exam.passage && (
          <div className="mb-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-y-auto max-h-[400px] custom-scrollbar">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
              <BookOpen size={16} className="text-emerald-400" />
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Reading Passage</span>
            </div>
            <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap italic">
              {exam.passage}
            </div>
          </div>
        )}
        <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-medium">{question.type.replace('_', ' ')}</span>
        <h2 className="text-lg font-semibold text-white mt-1 mb-6">{question.question}</h2>

        {question.type === 'multiple_choice' && question.options ? (
          <div className="space-y-3">
            {question.options.map((opt, i) => {
              let style = 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50';
              if (submitted) {
                if (i === question.correctAnswer) style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                else if (i === selectedAnswer) style = 'bg-rose-500/10 border-rose-500/30 text-rose-300';
                else style = 'bg-zinc-800/30 border-zinc-800 text-zinc-600';
              }
              return (
                <button key={i} onClick={() => handleMCAnswer(i)} disabled={submitted} className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${style}`}>
                  <span className="text-zinc-600 mr-3">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                  {submitted && i === question.correctAnswer && <CheckCircle2 size={14} className="inline ml-2 text-emerald-400" />}
                  {submitted && i === selectedAnswer && i !== question.correctAnswer && <XCircle size={14} className="inline ml-2 text-rose-400" />}
                </button>
              );
            })}
          </div>
        ) : (
          <div>
            {question.keyword && (
              <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg mb-4">
                <span className="text-sm font-bold text-emerald-300">{question.keyword}</span>
              </div>
            )}
            <div className="flex gap-2">
              <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && !submitted && handleTextSubmit()} disabled={submitted} placeholder="Type your answer..." className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50" />
              {!submitted && (
                <button onClick={handleTextSubmit} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium">Check</button>
              )}
            </div>
            {submitted && (
              <div className={`flex items-center gap-2 mt-3 p-3 rounded-lg ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-rose-500/10 border border-rose-500/20'}`}>
                {isCorrect ? <CheckCircle2 size={16} className="text-emerald-400" /> : <XCircle size={16} className="text-rose-400" />}
                <span className="text-sm">{isCorrect ? <span className="text-emerald-300">Correct!</span> : <span className="text-rose-300">Incorrect. Answer: <span className="text-emerald-300">{String(question.correctAnswer)}</span></span>}</span>
              </div>
            )}
          </div>
        )}

        {submitted && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
              <p className="text-sm text-zinc-300">{question.explanation}</p>
            </div>
            {!isCorrect && (
              <AIExplanation
                correctAnswer={question.options?.[question.correctAnswer as number] || String(question.correctAnswer)}
                userAnswer={question.type === 'multiple_choice' ? (question.options?.[selectedAnswer!] || '') : textInput}
                questionContext={question.question}
                show={true}
              />
            )}
            <button onClick={nextQuestion} className="mt-4 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors">
              {currentIndex < exam.questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

function LevelCard({ level, title, desc, color, onClick }: any) {
  const colorMap: Record<string, string> = {
    rose: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400',
    indigo: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400',
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
  };

  return (
    <motion.button
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative group overflow-hidden glass-card rounded-3xl p-8 text-left border-2 transition-all ${colorMap[color]}`}
    >
      <div className={`w-16 h-16 rounded-2xl bg-${color}-500/10 flex items-center justify-center mb-6`}>
        <GraduationCap size={32} />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-4xl font-black opacity-20`}>{level}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
        Browse Monthly Tests <ChevronRight size={14} />
      </div>
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-${color}-500/10 blur-3xl rounded-full group-hover:scale-150 transition-transform`} />
    </motion.button>
  );
}

function CategoryCard({ title, desc, icon: Icon, color, onClick }: any) {
  const colorMap: Record<string, string> = {
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
    indigo: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400',
    rose: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400',
  };

  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative group overflow-hidden glass-card rounded-2xl p-6 text-left border-2 transition-all ${colorMap[color]}`}
    >
      <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-zinc-400 leading-relaxed mb-4">{desc}</p>
      <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
        Enter Section <ChevronRight size={12} />
      </div>
    </motion.button>
  );
}
