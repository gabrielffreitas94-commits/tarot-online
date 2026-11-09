import { t } from '../i18n/index.ts';
import { Minus, Plus, Wand2 } from 'lucide-react';

export interface FreeDrawControlsProps {
  count: number;
  maxCount: number;
  onChangeCount: (newCount: number) => void;
  onDraw: () => void;
}

export function FreeDrawControls({
  count,
  maxCount,
  onChangeCount,
  onDraw,
}: FreeDrawControlsProps) {
  const handleDecrement = () => {
    if (count > 1) {
      onChangeCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < maxCount) {
      onChangeCount(count + 1);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-3 p-3 rounded-2xl bg-celestial-900/60 border border-gold/30 shadow-md max-w-md mx-auto">
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-300 font-serif">{t('settings.card_count')}:</span>
        <div className="flex items-center bg-celestial-950 border border-gold/40 rounded-lg p-0.5">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={count <= 1}
            aria-label="Decrease card count"
            className="p-1 rounded text-gold hover:bg-gold/20 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-bold text-gold">{count}</span>
          <button
            type="button"
            onClick={handleIncrement}
            disabled={count >= maxCount}
            aria-label="Increase card count"
            className="p-1 rounded text-gold hover:bg-gold/20 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onDraw}
        className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-gold via-gold-accent to-gold-dark text-celestial-950 font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-celestial-gold"
      >
        <Wand2 className="w-3.5 h-3.5" />
        <span>{t('actions.draw')}</span>
      </button>
    </div>
  );
}
