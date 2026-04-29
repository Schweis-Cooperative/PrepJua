import { useState } from 'react';
import { Download, Upload, Settings, Key, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { downloadBackup, uploadBackup } from '../utils/storage';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useLocalStorage('apiKey', '');
  const [tempKey, setTempKey] = useState(apiKey);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleExport = () => {
    downloadBackup();
  };

  const handleImport = async () => {
    const success = await uploadBackup();
    setImportStatus(success ? 'success' : 'error');
    if (success) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    setTimeout(() => setImportStatus('idle'), 3000);
  };

  const handleSaveKey = () => {
    setApiKey(tempKey);
    setShowSettings(false);
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="flex items-center justify-between px-4 sm:px-6 h-14">
          <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}
          <div className="hidden lg:block" />
          <div className="flex items-center gap-2">
            {importStatus !== 'idle' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  importStatus === 'success'
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-rose-500/10 text-rose-400'
                }`}
              >
                {importStatus === 'success' ? 'Import successful!' : 'Import failed'}
              </motion.span>
            )}

            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg border border-zinc-700/50 transition-all duration-200"
              id="export-btn"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Export</span>
            </button>

            <button
              onClick={handleImport}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg border border-zinc-700/50 transition-all duration-200"
              id="import-btn"
            >
              <Upload size={14} />
              <span className="hidden sm:inline">Import</span>
            </button>

            <button
              onClick={() => { setTempKey(apiKey); setShowSettings(true); }}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg border border-zinc-700/50 transition-all duration-200"
              id="settings-btn"
            >
              <Settings size={14} />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Settings</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                    <Key size={14} className="text-amber-400" />
                    Gemini API Key
                  </label>
                  <input
                    type="password"
                    value={tempKey}
                    onChange={(e) => setTempKey(e.target.value)}
                    placeholder="Enter your Gemini API key"
                    className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    id="api-key-input"
                  />
                  <p className="text-xs text-zinc-500 mt-2">
                    Required for AI explanations and essay grading. Your key is stored locally and never shared.
                  </p>
                </div>

                <button
                  onClick={handleSaveKey}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors"
                  id="save-settings-btn"
                >
                  <Check size={16} />
                  Save Settings
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
