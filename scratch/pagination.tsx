import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { memo } from 'react';

export const Pagination = memo(function Pagination({ 
  page, 
  totalPages, 
  setPage, 
  totalItems 
}: { 
  page: number; 
  totalPages: number; 
  setPage: (p: number) => void;
  totalItems: number;
}) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i);
    if (page < 3) return [0, 1, 2, 3, 4, '...', totalPages - 1];
    if (page > totalPages - 4) return [0, '...', totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
    return [0, '...', page - 1, page, page + 1, '...', totalPages - 1];
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage(0)}
          disabled={page === 0}
          className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="First Page"
        >
          <ChevronsLeft size={18} />
        </button>
        <button
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Previous Page"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-1 mx-2">
          {getVisiblePages().map((p, i) => {
            if (p === '...') {
              return <span key={`ellipsis-${i}`} className="text-zinc-500 px-1">...</span>;
            }
            const pageNum = p as number;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                  pageNum === page
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700 hover:text-zinc-300'
                }`}
              >
                {pageNum + 1}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
          disabled={page >= totalPages - 1}
          className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Next Page"
        >
          <ChevronRight size={18} />
        </button>
        <button
          onClick={() => setPage(totalPages - 1)}
          disabled={page >= totalPages - 1}
          className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Last Page"
        >
          <ChevronsRight size={18} />
        </button>
      </div>
      
      <span className="text-xs text-zinc-600 font-medium">
        {totalItems} words total
      </span>
    </div>
  );
});
