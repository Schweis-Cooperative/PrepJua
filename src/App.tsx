import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import RouteTracker from './components/RouteTracker';

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
        <Route path="/" element={<PageTransition><VocabularyDashboard /></PageTransition>} />
        <Route path="/learned-quiz" element={<PageTransition><LearnedQuiz /></PageTransition>} />
        <Route path="/quiz" element={<PageTransition><GeneralQuiz /></PageTransition>} />
        <Route path="/grammar" element={<PageTransition><GrammarHub /></PageTransition>} />
        <Route path="/grammar/:id" element={<PageTransition><GrammarTopic /></PageTransition>} />
        <Route path="/uoe" element={<PageTransition><UoEHub /></PageTransition>} />
        <Route path="/uoe/cloze" element={<PageTransition><UoECloze /></PageTransition>} />
        <Route path="/uoe/rewrite" element={<PageTransition><UoERewrite /></PageTransition>} />
        <Route path="/uoe/mock" element={<PageTransition><UoEMock /></PageTransition>} />
        <Route path="/reading" element={<PageTransition><ReadingHub /></PageTransition>} />
        <Route path="/reading/:id" element={<PageTransition><ReadingTest /></PageTransition>} />
        <Route path="/writing" element={<PageTransition><WritingHub /></PageTransition>} />
        <Route path="/exam-practice" element={<PageTransition><ExamPractice /></PageTransition>} />
        <Route path="/past-questions" element={<PageTransition><PastQuestions /></PageTransition>} />
        <Route path="/irregular-verbs" element={<PageTransition><IrregularVerbs /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/cheat-sheet" element={<PageTransition><CheatSheet /></PageTransition>} />
        <Route path="/mistake-book" element={<PageTransition><MistakeBook /></PageTransition>} />
        <Route path="/wordpower" element={<PageTransition><WordpowerHub /></PageTransition>} />
        <Route path="/wordpower/:id" element={<PageTransition><WordpowerBlock /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
