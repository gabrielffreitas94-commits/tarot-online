import { DrawnCard, SpreadHouse, SpreadType } from '../types/tarot.ts';
import { CardSlot } from './CardSlot.tsx';
import { t } from '../i18n/index.ts';

export interface TarotTableProps {
  spreadType: SpreadType;
  houses: SpreadHouse[];
  drawnCards: DrawnCard[];
  revealedCardIds: Set<string>;
  onFlipCard: (cardId: string) => void;
  onInspectCard: (drawnCard: DrawnCard, house: SpreadHouse) => void;
}

export function TarotTable({
  spreadType,
  houses,
  drawnCards,
  revealedCardIds,
  onFlipCard,
  onInspectCard,
}: TarotTableProps) {
  // Pair each house with its drawn card
  const slots = houses.map((house, index) => ({
    house,
    drawnCard: drawnCards[index],
  })).filter((slot) => Boolean(slot.drawnCard));

  if (slots.length === 0) {
    return (
      <div className="w-full min-h-[350px] flex items-center justify-center text-gray-500 italic">
        {t('reading.shuffling_deck')}
      </div>
    );
  }

  // Single card spread
  if (spreadType === 'single') {
    const { house, drawnCard } = slots[0];
    return (
      <div className="w-full flex justify-center py-6">
        <CardSlot
          drawnCard={drawnCard}
          house={house}
          isRevealed={revealedCardIds.has(drawnCard.card.id)}
          onFlip={() => onFlipCard(drawnCard.card.id)}
          onInspect={() => onInspectCard(drawnCard, house)}
        />
      </div>
    );
  }

  // Three cards spread
  if (spreadType === 'three_cards') {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 py-6">
        {slots.map(({ house, drawnCard }) => (
          <CardSlot
            key={house.id}
            drawnCard={drawnCard}
            house={house}
            isRevealed={revealedCardIds.has(drawnCard.card.id)}
            onFlip={() => onFlipCard(drawnCard.card.id)}
            onInspect={() => onInspectCard(drawnCard, house)}
          />
        ))}
      </div>
    );
  }

  // Love spread (4 cards)
  if (spreadType === 'love') {
    return (
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-6 justify-items-center">
        {slots.map(({ house, drawnCard }) => (
          <CardSlot
            key={house.id}
            drawnCard={drawnCard}
            house={house}
            isRevealed={revealedCardIds.has(drawnCard.card.id)}
            onFlip={() => onFlipCard(drawnCard.card.id)}
            onInspect={() => onInspectCard(drawnCard, house)}
          />
        ))}
      </div>
    );
  }

  // Decision spread (5 cards)
  if (spreadType === 'decision') {
    const contextSlot = slots[0];
    const pathASlots = [slots[1], slots[3]]; // Path A, Outcome A
    const pathBSlots = [slots[2], slots[4]]; // Path B, Outcome B

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-6 py-6">
        {/* Crossroads Center Context */}
        {contextSlot && (
          <div className="flex justify-center">
            <CardSlot
              drawnCard={contextSlot.drawnCard}
              house={contextSlot.house}
              isRevealed={revealedCardIds.has(contextSlot.drawnCard.card.id)}
              onFlip={() => onFlipCard(contextSlot.drawnCard.card.id)}
              onInspect={() => onInspectCard(contextSlot.drawnCard, contextSlot.house)}
            />
          </div>
        )}

        {/* Two diverging paths */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center pt-2 border-t border-gold/15">
          {/* Path A Column */}
          <div className="flex flex-col items-center gap-6 p-4 rounded-2xl bg-celestial-900/30 border border-gold/20 w-full max-w-sm">
            <div className="text-gold font-serif font-bold text-sm tracking-widest uppercase">{t('spreads.decision.path_a_title')}</div>
            <div className="flex flex-wrap justify-center gap-4">
              {pathASlots.map(({ house, drawnCard }) => (
                <CardSlot
                  key={house.id}
                  drawnCard={drawnCard}
                  house={house}
                  isRevealed={revealedCardIds.has(drawnCard.card.id)}
                  onFlip={() => onFlipCard(drawnCard.card.id)}
                  onInspect={() => onInspectCard(drawnCard, house)}
                />
              ))}
            </div>
          </div>

          {/* Path B Column */}
          <div className="flex flex-col items-center gap-6 p-4 rounded-2xl bg-celestial-900/30 border border-gold/20 w-full max-w-sm">
            <div className="text-gold font-serif font-bold text-sm tracking-widest uppercase">{t('spreads.decision.path_b_title')}</div>
            <div className="flex flex-wrap justify-center gap-4">
              {pathBSlots.map(({ house, drawnCard }) => (
                <CardSlot
                  key={house.id}
                  drawnCard={drawnCard}
                  house={house}
                  isRevealed={revealedCardIds.has(drawnCard.card.id)}
                  onFlip={() => onFlipCard(drawnCard.card.id)}
                  onInspect={() => onInspectCard(drawnCard, house)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Celtic Cross (10 cards)
  if (spreadType === 'celtic_cross') {
    // 10 cards split: 0-5 Cross, 6-9 Staff
    const crossSlots = slots.slice(0, 6);
    const staffSlots = slots.slice(6, 10);

    return (
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 py-6">
        {/* Left Section: The Cross (6 cards in responsive layout) */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-xs font-serif text-gold uppercase tracking-wider mb-4">{t('spreads.celtic_cross.cross_title')}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
            {crossSlots.map(({ house, drawnCard }) => (
              <CardSlot
                key={house.id}
                drawnCard={drawnCard}
                house={house}
                isRevealed={revealedCardIds.has(drawnCard.card.id)}
                onFlip={() => onFlipCard(drawnCard.card.id)}
                onInspect={() => onInspectCard(drawnCard, house)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: The Staff/Pillar (4 cards) */}
        <div className="w-full lg:w-72 flex flex-col items-center p-4 rounded-2xl bg-celestial-900/40 border border-gold/20">
          <div className="text-xs font-serif text-gold uppercase tracking-wider mb-4">{t('spreads.celtic_cross.staff_title')}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 justify-items-center">
            {staffSlots.map(({ house, drawnCard }) => (
              <CardSlot
                key={house.id}
                drawnCard={drawnCard}
                house={house}
                isRevealed={revealedCardIds.has(drawnCard.card.id)}
                onFlip={() => onFlipCard(drawnCard.card.id)}
                onInspect={() => onInspectCard(drawnCard, house)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default / Free draw: responsive auto-wrapping grid
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 py-6">
      {slots.map(({ house, drawnCard }) => (
        <CardSlot
          key={house.id}
          drawnCard={drawnCard}
          house={house}
          isRevealed={revealedCardIds.has(drawnCard.card.id)}
          onFlip={() => onFlipCard(drawnCard.card.id)}
          onInspect={() => onInspectCard(drawnCard, house)}
        />
      ))}
    </div>
  );
}
