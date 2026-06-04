import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  PenTool,
  FileText,
  ClipboardList,
  BookMarked,
  AlertTriangle,
  Scroll,
  User,
  Menu,
  X,
  BookA,
  Trophy,
  Layers,
  Brain,
  BarChart3,
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Vocabulary', icon: BookOpen, color: 'text-emerald-400' },
  { path: '/grammar', label: 'Grammar', icon: GraduationCap, color: 'text-emerald-400' },
  { path: '/wordpower', label: 'Wordpower', icon: Layers, color: 'text-violet-400' },
  { path: '/uoe', label: 'Use of English', icon: FileText, color: 'text-sky-400' },
  { path: '/reading', label: 'Reading', icon: BookA, color: 'text-violet-400' },
  { path: '/writing', label: 'Writing', icon: PenTool, color: 'text-indigo-400' },
  { path: '/exam-practice', label: 'Exam Practice', icon: ClipboardList, color: 'text-amber-400' },
  { path: '/past-questions', label: 'Past Questions', icon: Trophy, color: 'text-indigo-400' },
  { path: '/irregular-verbs', label: 'Irregular Verbs', icon: BookMarked, color: 'text-teal-400' },
  { path: '/mistake-book', label: 'Mistake Book', icon: AlertTriangle, color: 'text-rose-400' },
  { path: '/cheat-sheet', label: 'Cheat Sheet', icon: Scroll, color: 'text-amber-400' },
  { path: '/practice', label: 'Practice Mode', icon: Brain, color: 'text-pink-400' },
  { path: '/analytics', label: 'Analytics', icon: BarChart3, color: 'text-violet-400' },
  { path: '/profile', label: 'Profile', icon: User, color: 'text-zinc-400' },
];

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-zinc-800/90 backdrop-blur-sm border border-zinc-700 text-zinc-300 hover:text-white transition-colors"
        id="sidebar-toggle"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0c0c0e] border-r border-zinc-800/80 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-zinc-800/80">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <img src="/logo.jpeg" alt="Logo" className="w-8 h-8 rounded-lg object-cover border border-zinc-800 group-hover:border-emerald-500/50 transition-colors duration-200" />
            <div>
              <h1 className="text-sm font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-200">PrepJua</h1>
              <p className="text-[10px] text-zinc-500 font-medium">by Schweis Projects</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-3 overflow-y-auto h-[calc(100%-88px)] custom-scrollbar">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${active
                      ? 'bg-zinc-800/80 text-white'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                      }`}
                    id={`nav-${item.path.replace(/\//g, '') || 'home'}`}
                  >
                    {active && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-emerald-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <Icon
                      size={18}
                      className={`transition-colors ${active ? item.color : 'text-zinc-500 group-hover:text-zinc-400'}`}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
