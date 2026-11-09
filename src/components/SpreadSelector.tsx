import { SpreadType } from '../types/tarot.ts';
import { SPREADS } from '../data/spreads.ts';
import { t } from '../i18n/index.ts';
import { Sparkles, Compass, Heart, Split, Eye, Grid } from 'lucide-react';

export interface SpreadSelectorProps {
  selectedSpread: SpreadType;
  onSelectSpread: (spread: SpreadType) => void;
}

const SPREAD_ICONS: Record<SpreadType, React.ElementType> = {
  single: Sparkles,
  three_cards: Compass,
  love: Heart,
  decision: Split,
  celtic_cross: Eye,
  free: Grid,
};

export function SpreadSelector({ selectedSpread, onSelectSpread }: SpreadSelectorProps) {
  const spreadKeys: SpreadType[] = ['single', 'three_cards', 'love', 'decision', 'celtic_cross', 'free'];

  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-3">
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gold/30">
        {spreadKeys.map((type) => {
          const spread = SPREADS[type];
          const isSelected = selectedSpread === type;
          const Icon = SPREAD_ICONS[type];
          const title = t(spread.nameKey);

          return (
            <button
              key={type}
              type="button"
              onClick={() => onSelectSpread(type)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                isSelected
                  ? 'bg-gradient-to-r from-gold/25 via-gold/15 to-mystic-purple border-gold text-gold shadow-celestial-gold scale-[1.03]'
                  : 'bg-celestial-900/70 hover:bg-celestial-800 text-gray-300 hover:text-white border-gold/20 hover:border-gold/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-gold' : 'text-gray-400'}`} />
              <span className="font-serif font-semibold">{title}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-celestial-950/80 text-gray-400 border border-gold/10">
                {spread.isCustomCount ? 'X' : spread.cardCount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
