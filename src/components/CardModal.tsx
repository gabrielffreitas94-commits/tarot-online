import React, { useEffect, useState } from 'react';
import { DrawnCard, SpreadHouse } from '../types/tarot.ts';
import { getCardTranslation, getHouseTranslation, t } from '../i18n/index.ts';
import { X, Sparkles, Compass, ShieldAlert } from 'lucide-react';

export interface CardModalProps {
  card: DrawnCard | null;
  house: SpreadHouse | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CardModal({ card, house, isOpen, onClose }: CardModalProps) {
  const [imageError, setImageError] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !card || !house) {
    return null;
  }

  const cardData = getCardTranslation(card.card.id);
  const houseData = getHouseTranslation(house.nameKey, house.descKey);
  const meaning = card.isReversed ? cardData.reversed : cardData.upright;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="card-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-celestial-900 border-2 border-gold/70 rounded-2xl shadow-2xl p-5 sm:p-7 flex flex-col md:flex-row gap-6 scrollbar-thin scrollbar-thumb-gold/30"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t('actions.close')}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gold/70 hover:text-gold hover:bg-gold/10 transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Column: Enlarged Card Visual */}
        <div className="flex flex-col items-center justify-center sm:min-w-[240px]">
          <div className="relative w-48 h-80 sm:w-56 sm:h-96 rounded-xl overflow-hidden border-2 border-gold shadow-celestial-gold bg-black flex items-center justify-center">
            {!imageError ? (
              <img
                src={card.card.image}
                alt={cardData.name}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-center filter contrast-105 transition-transform duration-500 ${
                  card.isReversed ? 'rotate-180' : ''
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-celestial-800 to-celestial-950">
                <div className="text-4xl text-gold mb-2">✧</div>
                <div className="font-serif text-lg text-gold font-bold">{cardData.name}</div>
              </div>
            )}
          </div>

          <div className="mt-2.5 text-center">
            {card.isReversed ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-mystic-rose/60 text-rose-200 border border-rose-400/40">
                <ShieldAlert className="w-3 h-3" />
                {t('reading.reversed')}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/40">
                <Sparkles className="w-3 h-3" />
                {t('reading.upright')}
              </span>
            )}
          </div>
        </div>

        {/* Right Column: In-Depth Interpretation & House Context */}
        <div className="flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* House Placement Banner */}
            <div className="mb-2 p-2.5 rounded-lg bg-celestial-800/80 border border-gold/30">
              <div className="text-xs uppercase tracking-wider text-gold font-serif flex items-center gap-1.5 font-bold">
                <Compass className="w-3.5 h-3.5" />
                {houseData.name}
              </div>
              <div className="text-xs text-gray-300 mt-0.5">{houseData.desc}</div>
            </div>

            {/* Card Title & Arcana Details */}
            <div className="mt-3">
              <h2 id="card-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-gold tracking-wide">
                {cardData.name}
              </h2>
              <p className="text-xs text-gray-400 capitalize mt-0.5">
                {card.card.arcana} Arcana {card.card.suit ? `• ${card.card.suit}` : ''}
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {cardData.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gold/15 text-gold border border-gold/30"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* In-depth Meaning */}
            <div className="mt-4 pt-4 border-t border-gold/20">
              <h3 className="text-sm font-serif font-bold text-gold mb-1.5">
                {card.isReversed ? t('reading.reversed') : t('reading.upright')}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed font-sans">{meaning}</p>
            </div>

            {/* Oracle Advice Context */}
            <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-mystic-purple/50 to-celestial-800/50 border border-gold/25">
              <div className="text-xs font-serif font-bold text-gold flex items-center gap-1 mb-1">
                <Sparkles className="w-3 h-3 text-gold" />
                {t('reading.advice')}
              </div>
              <p className="text-xs text-gray-300 italic leading-normal">
                "{cardData.name} na casa de {houseData.name} convida você a honrar sua sabedoria interior e agir com integridade cósmica."
              </p>
            </div>
          </div>

          {/* Close Action */}
          <div className="pt-2 text-right">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-1.5 rounded-lg bg-celestial-800 hover:bg-celestial-700 text-gold border border-gold/40 text-xs sm:text-sm font-serif transition-colors"
            >
              {t('actions.close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
