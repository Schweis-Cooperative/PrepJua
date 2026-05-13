import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, BookOpen } from 'lucide-react';
import { readingPassages } from '../data/readingData';
import { useProgress } from '../hooks/useProgress';
import { useMistakeBook } from '../hooks/useMistakeBook';
import AIExplanation from '../components/AIExplanation';
import EmptyState from '../components/EmptyState';
import { logAnswer, logScore } from '../utils/logger';

export default function ReadingTest() {
  const { id } = useParams<{ id: string }>();
  const passage = readingPassages.find((p) => p.id === id);
  const { completeReadingTest } = useProgress();
  const { addMistake } = useMistakeBook();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!passage) {
    return (
      <EmptyState
        title="Passage Not Found"
        description="The reading passage you're looking for doesn't exist."
        action={<Link to="/reading" className="px-4 py-2 bg-violet-600 text-white rounded-xl text-sm font-medium">Back to Reading</Link>}
      />
    );
  }

  const question = passage.questions[currentQuestion];

  const handleAnswer = useCallback((index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const isCorrect = index === question.correctAnswer;
    if (isCorrect) {
      setScore((s) => s + 1);
    } else {
      addMistake({
        topicId: passage.id,
        questionId: question.id,
        type: 'reading',
        question: question.question,
        userAnswer: question.options[index],
        correctAnswer: question.options[question.correctAnswer],
      });
    }
    logAnswer({
      section: 'Reading',
      questionId: question.id,
      question: question.question,
      userAnswer: question.options[index],
      correctAnswer: question.options[question.correctAnswer],
      isCorrect,
    });
  }, [selectedAnswer, question, addMistake, passage.id]);

  const nextQuestion = () => {
    if (currentQuestion < passage.questions.length - 1) {
      setCurrentQuestion((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
      completeReadingTest(passage.id);
      logScore('Reading', passage.title, score, passage.questions.length);
    }
  };

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-8 text-center">
          <CheckCircle2 size={48} className="text-violet-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Test Complete!</h2>
          <p className="text-4xl font-bold text-violet-400 mb-4">{score}/{passage.questions.length}</p>
          <div className="flex gap-3 justify-center">
            <Link to="/reading" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-sm font-medium border border-zinc-700">Back to Reading</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Highlight vocabulary in text
  const renderText = () => {
    let text = passage.text;
    return text.split('\n').map((line, i) => {
      if (line.trim() === '') return <div key={i} className="h-3" />;
      const paragraphMatch = line.match(/^\[(\d+)\]\s*(.*)/);
      if (paragraphMatch) {
        const paraNum = paragraphMatch[1];
        let content = paragraphMatch[2];

        // Highlight vocabulary
        passage.vocabularyHighlights.forEach((vh) => {
          const regex = new RegExp(`\\b(${vh.word})\\b`, 'gi');
          content = content.replace(regex, `<span class="underline decoration-violet-400/50 decoration-dotted cursor-help text-violet-300" title="${vh.definition}">$1</span>`);
        });

        return (
          <p key={i} className="text-sm text-zinc-300 leading-relaxed mb-3">
            <span className="text-violet-400 font-mono text-xs mr-2">[{paraNum}]</span>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </p>
        );
      }
      return <p key={i} className="text-sm text-zinc-300 leading-relaxed mb-3">{line}</p>;
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/reading" className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">{passage.title}</h1>
          <p className="text-xs text-zinc-500">{passage.wordCount} words · {passage.estimatedTime} min</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Text pane */}
        <div className="glass-card rounded-2xl p-6 overflow-y-auto max-h-[75vh]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-violet-400" />
            <h2 className="text-sm font-semibold text-violet-300">Passage</h2>
          </div>
          {renderText()}
          {passage.vocabularyHighlights.length > 0 && (
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 mb-2">Vocabulary (hover over highlighted words)</p>
              <div className="flex flex-wrap gap-1">
                {passage.vocabularyHighlights.map((vh) => (
                  <span key={vh.word} className="text-[10px] px-2 py-0.5 bg-violet-500/10 text-violet-300 rounded border border-violet-500/20">
                    {vh.word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Questions pane */}
        <div>
          <motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-zinc-500">Question {currentQuestion + 1}/{passage.questions.length}</span>
              <span className="text-xs text-violet-400 font-medium">Score: {score}</span>
            </div>

            <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
              <motion.div className="h-full bg-violet-500 rounded-full" animate={{ width: `${((currentQuestion + 1) / passage.questions.length) * 100}%` }} />
            </div>

            <h2 className="text-base font-semibold text-white mb-6">{question.question}</h2>

            <div className="space-y-3">
              {question.options.map((opt, i) => {
                let style = 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50';
                if (selectedAnswer !== null) {
                  if (i === question.correctAnswer) style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                  else if (i === selectedAnswer) style = 'bg-rose-500/10 border-rose-500/30 text-rose-300';
                  else style = 'bg-zinc-800/30 border-zinc-800 text-zinc-600';
                }
                return (
                  <button key={i} onClick={() => handleAnswer(i)} disabled={selectedAnswer !== null} className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${style}`}>
                    <span className="text-zinc-600 mr-2">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                    {selectedAnswer !== null && i === question.correctAnswer && <CheckCircle2 size={14} className="inline ml-2 text-emerald-400" />}
                    {selectedAnswer === i && i !== question.correctAnswer && <XCircle size={14} className="inline ml-2 text-rose-400" />}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                  <p className="text-sm text-zinc-300">{question.explanation}</p>
                </div>
                <AIExplanation correctAnswer={question.options[question.correctAnswer]} userAnswer={selectedAnswer !== question.correctAnswer ? question.options[selectedAnswer] : ''} questionContext={question.question} show={selectedAnswer !== question.correctAnswer} />
                <button onClick={nextQuestion} className="mt-4 w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-colors">
                  {currentQuestion < passage.questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
