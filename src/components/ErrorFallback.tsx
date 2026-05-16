import { FallbackProps } from 'react-error-boundary';

/**
 * Dark-theme error fallback UI.
 * Displayed when a React rendering error is caught by an ErrorBoundary.
 */
export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-6 py-12">
      <div className="bg-zinc-900 border border-red-500/20 rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-400"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Message */}
        <h2 className="text-lg font-semibold text-white mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
          This section encountered an error and couldn't render properly.
          Your progress data is safe.
        </p>

        {/* Error detail (collapsed) */}
        {error?.message && (
          <details className="mb-5 text-left">
            <summary className="text-xs text-zinc-600 cursor-pointer hover:text-zinc-400 transition-colors">
              Technical details
            </summary>
            <pre className="mt-2 text-[11px] text-red-400/70 bg-zinc-950 border border-zinc-800 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-words">
              {error.message}
            </pre>
          </details>
        )}

        {/* Reset button */}
        <button
          onClick={resetErrorBoundary}
          className="w-full px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl text-sm font-medium transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
