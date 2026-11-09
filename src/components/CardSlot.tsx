import { useState } from 'react';
import { DrawnCard, SpreadHouse } from '../types/tarot.ts';
import { CardBack } from './CardBack.tsx';
import { getCardTranslation, getHouseTranslation, t } from '../i18n/index.ts';

export interface CardSlotProps {
  drawnCard: DrawnCard;
  house: SpreadHouse;
  isRevealed: boolean;
  onFlip: () => void;
  onInspect: () => void;
  className?: string;
}

export function CardSlot({
  drawnCard,
  house,
  isRevealed,
  onFlip,
  onInspect,
  className = '',
}: CardSlotProps) {
  const [imageError, setImageError] = useState(false);
  const cardData = getCardTranslation(drawnCard.card.id);
  const houseData = getHouseTranslation(house.nameKey, house.descKey);

  const handleClick = () => {
    if (!isRevealed) {
      onFlip();
    } else {
      onInspect();
    }
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* House Name & Order Badge */}
      <div className="mb-2 text-center max-w-[170px] sm:max-w-[200px]">
        <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-celestial-800/90 text-gold border border-gold/40 shadow-sm truncate">
          {houseData.name}
        </span>
      </div>

      {/* 3D Card Container Button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label={isRevealed ? `${cardData.name} (${houseData.name})` : `${t('actions.flip_card')} - ${houseData.name}`}
        className="group relative w-36 h-60 sm:w-44 sm:h-72 md:w-48 md:h-80 rounded-xl cursor-pointer perspective-1000 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-celestial-950 transition-transform duration-300 hover:scale-[1.02]"
      >
        <div
          className={`w-full h-full relative transform-style-3d transition-transform duration-700 ease-out ${
            isRevealed ? 'rotate-y-180' : ''
          }`}
        >
          {/* Card Back (Unrevealed State) */}
          <div className="absolute inset-0 backface-hidden">
            <CardBack />
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_20px_rgba(245,208,97,0.3)]" />
          </div>

          {/* Card Front (Revealed State) */}
          <div
            data-testid="card-front"
            className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-xl bg-celestial-900 border-2 border-gold shadow-celestial-gold overflow-hidden flex flex-col justify-between"
          >
            {/* Top Bar on Card Front */}
            <div className="px-2 py-1 bg-celestial-950/80 border-b border-gold/30 flex items-center justify-between z-10">
              <span className="text-[11px] font-serif text-gold font-bold truncate max-w-[110px]">
                {cardData.name}
              </span>
              {drawnCard.isReversed && (
                <span className="text-[9px] font-medium px-1.5 py-0.2 rounded bg-mystic-rose/80 text-rose-100 border border-rose-300/40">
                  {t('reading.reversed')}
                </span>
              )}
            </div>

            {/* Card Artwork Container */}
            <div
              data-testid="card-image-container"
              className={`relative flex-1 w-full h-full overflow-hidden bg-black flex items-center justify-center transition-transform duration-500 ${
                drawnCard.isReversed ? 'rotate-180' : ''
              }`}
            >
              {isRevealed && !imageError && (
                <img
                  src={drawnCard.card.image}
                  alt={cardData.name}
                  loading="lazy"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                />
              )}
              {isRevealed && imageError && (
                /* Fallback stylized artwork if offline or CDN blocked */
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-celestial-800 to-celestial-950">
                  <div className="text-3xl text-gold mb-1">✧</div>
                  <div className="font-serif text-sm text-gold font-bold">{cardData.name}</div>
                  <div className="text-[10px] text-gray-400 mt-1 capitalize">{drawnCard.card.arcana} Arcana</div>
                </div>
              )}
            </div>

            {/* Bottom Insight Footer */}
            <div className="px-2 py-1.5 bg-celestial-950/90 border-t border-gold/30 flex items-center justify-center gap-1 z-10">
              <span className="text-[10px] text-gold/80 italic truncate">
                {cardData.keywords.slice(0, 2).join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </button>

      {/* House Description Teaser */}
      <p className="mt-1 text-[11px] text-gray-400 max-w-[170px] sm:max-w-[200px] text-center line-clamp-2 leading-tight">
        {houseData.desc}
      </p>
    </div>
  );
}
