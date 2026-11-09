import { t } from '../i18n/index.ts';
import { Eye, RefreshCw, Copy, Check } from 'lucide-react';

export interface SummaryBarProps {
  isAllRevealed: boolean;
  onRevealAll: () => void;
  onNewReading: () => void;
  onCopySummary: () => void;
  isCopied: boolean;
}

export function SummaryBar({
  isAllRevealed,
  onRevealAll,
  onNewReading,
  onCopySummary,
  isCopied,
}: SummaryBarProps) {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-3 py-4 px-2">
      {/* Reveal All Cards Button */}
      {!isAllRevealed && (
        <button
          type="button"
          onClick={onRevealAll}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-celestial-800 hover:bg-celestial-700 text-gold border border-gold/50 shadow-md text-xs sm:text-sm font-serif font-semibold hover:border-gold transition-all active:scale-95"
        >
          <Eye className="w-4 h-4 text-gold" />
          <span>{t('actions.reveal_all')}</span>
        </button>
      )}

      {/* New Reading Button */}
      <button
        type="button"
        onClick={onNewReading}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold/90 via-gold-accent to-gold-dark text-celestial-950 font-serif font-bold text-xs sm:text-sm shadow-celestial-gold hover:brightness-110 active:scale-95 transition-all"
      >
        <RefreshCw className="w-4 h-4 text-celestial-950" />
        <span>{t('actions.new_reading')}</span>
      </button>

      {/* Copy Reading Summary Button */}
      <button
        type="button"
        onClick={onCopySummary}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs sm:text-sm font-serif font-semibold transition-all active:scale-95 ${
          isCopied
            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500'
            : 'bg-celestial-900/80 hover:bg-celestial-800 text-gray-200 border-gold/30 hover:border-gold/60'
        }`}
      >
        {isCopied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{t('actions.copied')}</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-gold" />
            <span>{t('actions.copy_summary')}</span>
          </>
        )}
      </button>
    </div>
  );
}
