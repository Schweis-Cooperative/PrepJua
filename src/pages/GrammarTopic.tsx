import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, CheckCircle2, XCircle, Lightbulb, PenTool } from 'lucide-react';
import { grammarData } from '../data/grammarData';
import { useProgress } from '../hooks/useProgress';
import { useMistakeBook } from '../hooks/useMistakeBook';
import AIExplanation from '../components/AIExplanation';
import EmptyState from '../components/EmptyState';
import { logAnswer, logScore } from '../utils/logger';

type TabType = 'lesson' | 'quiz';

export default function GrammarTopic() {
  const { id } = useParams<{ id: string }>();
  const topic = grammarData.find((t) => t.id === id);
  const { completeGrammarTopic } = useProgress();
  const { addMistake } = useMistakeBook();

  const [activeTab, setActiveTab] = useState<TabType>('lesson');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!topic) {
    return (
      <EmptyState
        title="Topic Not Found"
        description="The grammar topic you're looking for doesn't exist."
        action={
          <Link to="/grammar" className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium">
            Back to Grammar Hub
          </Link>
        }
      />
    );
  }

  const currentQuestion = topic.questions[currentIndex];

  const handleAnswer = useCallback(
    (index: number) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(index);
      const isCorrect = index === currentQuestion.correctAnswer;
      if (isCorrect) {
        setScore((s) => s + 1);
      } else {
        addMistake({
          topicId: topic.id,
          questionId: currentQuestion.id,
          type: 'grammar',
          question: currentQuestion.question,
          userAnswer: currentQuestion.options[index],
          correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
        });
      }
      logAnswer({
        section: 'Grammar',
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        userAnswer: currentQuestion.options[index],
        correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
        isCorrect,
      });
    },
    [selectedAnswer, currentQuestion, addMistake, topic.id]
  );

  const nextQuestion = () => {
    if (currentIndex < topic.questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
      completeGrammarTopic(topic.id);
      logScore('Grammar', topic.title, score, topic.questions.length);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  // Simple markdown rendering
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-3">{line.replace('## ', '')}</h2>;
      if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-semibold text-zinc-200 mt-4 mb-2">{line.replace('### ', '')}</h3>;
      if (line.startsWith('---')) return <hr key={i} className="border-zinc-800 my-6" />;
      if (line.startsWith('| ')) {
        return <p key={i} className="text-sm text-zinc-400 font-mono">{line}</p>;
      }
      if (line.startsWith('- ')) {
        const text = line.replace('- ', '');
        return (
          <div key={i} className="flex gap-2 text-sm text-zinc-300 mb-1 ml-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-300">$1</strong>').replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-zinc-800 rounded text-amber-300 text-xs">$1</code>') }} />
          </div>
        );
      }
      if (line.trim() === '') return <div key={i} className="h-2" />;
      return (
        <p key={i} className="text-sm text-zinc-400 mb-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-zinc-800 rounded text-amber-300 text-xs">$1</code>') }}
        />
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/grammar" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">{topic.title}</h1>
          <p className="text-xs text-zinc-500">{topic.description}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-zinc-900 p-1 rounded-lg border border-zinc-800 w-fit">
        <button
          onClick={() => setActiveTab('lesson')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${
            activeTab === 'lesson' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <BookOpen size={14} /> Lesson
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all ${
            activeTab === 'quiz' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <PenTool size={14} /> Quiz ({topic.questions.length})
        </button>
      </div>

      {activeTab === 'lesson' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card rounded-2xl p-6 sm:p-8"
        >
          {renderContent(topic.content)}

          {topic.tips.length > 0 && (
            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                <Lightbulb size={16} /> Tips
              </h3>
              {topic.tips.map((tip, i) => (
                <div key={i} className="flex gap-3 p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                  <span className="text-amber-400 text-sm">💡</span>
                  <p className="text-sm text-zinc-300">{tip}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ) : finished ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Topic Complete!</h2>
          <p className="text-4xl font-bold text-emerald-400 mb-4">
            {score}/{topic.questions.length}
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/grammar"
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700"
            >
              Back to Grammar Hub
            </Link>
            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium"
            >
              Try Again
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-zinc-500">
              Question {currentIndex + 1} of {topic.questions.length}
            </span>
            <span className="text-xs text-emerald-400 font-medium">Score: {score}</span>
          </div>

          <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              animate={{ width: `${((currentIndex + 1) / topic.questions.length) * 100}%` }}
            />
          </div>

          <h2 className="text-lg font-semibold text-white mb-6">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, i) => {
              let style = 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50';
              if (selectedAnswer !== null) {
                if (i === currentQuestion.correctAnswer) style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                else if (i === selectedAnswer) style = 'bg-rose-500/10 border-rose-500/30 text-rose-300';
                else style = 'bg-zinc-800/30 border-zinc-800 text-zinc-600';
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${style}`}
                >
                  <span className="text-zinc-600 mr-3">{String.fromCharCode(65 + i)}.</span>
                  {option}
                  {selectedAnswer !== null && i === currentQuestion.correctAnswer && <CheckCircle2 size={16} className="inline ml-2 text-emerald-400" />}
                  {selectedAnswer === i && i !== currentQuestion.correctAnswer && <XCircle size={16} className="inline ml-2 text-rose-400" />}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                <p className="text-sm text-zinc-300">{currentQuestion.explanation}</p>
              </div>

              <AIExplanation
                correctAnswer={currentQuestion.options[currentQuestion.correctAnswer]}
                userAnswer={selectedAnswer !== currentQuestion.correctAnswer ? currentQuestion.options[selectedAnswer] : ''}
                questionContext={currentQuestion.question}
                show={selectedAnswer !== currentQuestion.correctAnswer}
              />

              <button
                onClick={nextQuestion}
                className="mt-4 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors"
              >
                {currentIndex < topic.questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}
