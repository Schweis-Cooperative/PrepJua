import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import RouteTracker from './components/RouteTracker';
import ErrorFallback from './components/ErrorFallback';

// Pages
import VocabularyDashboard from './pages/VocabularyDashboard';
import LearnedQuiz from './pages/LearnedQuiz';
import GeneralQuiz from './pages/GeneralQuiz';
import GrammarHub from './pages/GrammarHub';
import GrammarTopic from './pages/GrammarTopic';
import UoEHub from './pages/UoEHub';
import UoECloze from './pages/UoECloze';
import UoERewrite from './pages/UoERewrite';
import UoEMock from './pages/UoEMock';
import ReadingHub from './pages/ReadingHub';
import ReadingTest from './pages/ReadingTest';
import WritingHub from './pages/WritingHub';
import ExamPractice from './pages/ExamPractice';
import PastQuestions from './pages/PastQuestions';
import IrregularVerbs from './pages/IrregularVerbs';
import Profile from './pages/Profile';
import CheatSheet from './pages/CheatSheet';
import MistakeBook from './pages/MistakeBook';
import WordpowerHub from './pages/WordpowerHub';
import WordpowerBlock from './pages/WordpowerBlock';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><VocabularyDashboard /></ErrorBoundary></PageTransition>} />
        <Route path="/learned-quiz" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><LearnedQuiz /></ErrorBoundary></PageTransition>} />
        <Route path="/quiz" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><GeneralQuiz /></ErrorBoundary></PageTransition>} />
        <Route path="/grammar" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><GrammarHub /></ErrorBoundary></PageTransition>} />
        <Route path="/grammar/:id" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><GrammarTopic /></ErrorBoundary></PageTransition>} />
        <Route path="/uoe" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><UoEHub /></ErrorBoundary></PageTransition>} />
        <Route path="/uoe/cloze" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><UoECloze /></ErrorBoundary></PageTransition>} />
        <Route path="/uoe/rewrite" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><UoERewrite /></ErrorBoundary></PageTransition>} />
        <Route path="/uoe/mock" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><UoEMock /></ErrorBoundary></PageTransition>} />
        <Route path="/reading" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><ReadingHub /></ErrorBoundary></PageTransition>} />
        <Route path="/reading/:id" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><ReadingTest /></ErrorBoundary></PageTransition>} />
        <Route path="/writing" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><WritingHub /></ErrorBoundary></PageTransition>} />
        <Route path="/exam-practice" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><ExamPractice /></ErrorBoundary></PageTransition>} />
        <Route path="/past-questions" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><PastQuestions /></ErrorBoundary></PageTransition>} />
        <Route path="/irregular-verbs" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><IrregularVerbs /></ErrorBoundary></PageTransition>} />
        <Route path="/profile" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><Profile /></ErrorBoundary></PageTransition>} />
        <Route path="/cheat-sheet" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><CheatSheet /></ErrorBoundary></PageTransition>} />
        <Route path="/mistake-book" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><MistakeBook /></ErrorBoundary></PageTransition>} />
        <Route path="/wordpower" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><WordpowerHub /></ErrorBoundary></PageTransition>} />
        <Route path="/wordpower/:id" element={<PageTransition><ErrorBoundary FallbackComponent={ErrorFallback}><WordpowerBlock /></ErrorBoundary></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

import { ProgressProvider } from './context/ProgressContext';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <ProgressProvider>
          <RouteTracker />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </ProgressProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
