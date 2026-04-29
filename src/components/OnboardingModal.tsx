import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { logActivity } from '../utils/logger';

export default function OnboardingModal() {
  const [username, setUsername] = useLocalStorage('username', '');
  const [isOpen, setIsOpen] = useState(false);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    if (!username) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [username]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim()) {
      setUsername(inputName.trim());
      setIsOpen(false);
      
      // Delay log slightly to ensure localStorage is flushed
      setTimeout(() => logActivity('Registered / Entered Name'), 100);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-md p-8 shadow-2xl bg-zinc-900 border border-zinc-800 rounded-2xl"
          >
            <h2 className="mb-2 text-2xl font-bold text-center text-white">Welcome</h2>
            <p className="mb-6 text-sm text-center text-zinc-400">
              Please enter your name to personalize your learning experience.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 text-sm transition-all focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-xl placeholder:text-zinc-500"
                autoFocus
              />
              <button
                type="submit"
                disabled={!inputName.trim()}
                className="w-full py-3 text-sm font-medium text-white transition-colors rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
