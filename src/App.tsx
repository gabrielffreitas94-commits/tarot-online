import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  DrawnCard,
  SpreadHouse,
  SpreadType,
  SupportedLanguage,
} from './types/tarot.ts';
import { SPREADS, getSpreadHouses } from './data/spreads.ts';
import { drawCards } from './utils/deck.ts';
import {
  getCurrentLanguage,
  setLanguage,
  subscribeLanguageChange,
  t,
  getCardTranslation,
  getHouseTranslation,
} from './i18n/index.ts';
import {
  isAudioMuted,
  toggleAudio,
  subscribeAudio,
  playCardFlipSound,
  playCardShuffleSound,
  playCelestialChime,
} from './utils/audio.ts';
import { Header } from './components/Header.tsx';
import { SpreadSelector } from './components/SpreadSelector.tsx';
import { FreeDrawControls } from './components/FreeDrawControls.tsx';
import { TarotTable } from './components/TarotTable.tsx';
import { SummaryBar } from './components/SummaryBar.tsx';
import { CardModal } from './components/CardModal.tsx';
import { Sparkles } from 'lucide-react';
import { copyToClipboard } from './utils/clipboard.ts';

export function App() {
  // Global preferences
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(getCurrentLanguage());
  const [isMuted, setIsMuted] = useState<boolean>(isAudioMuted());
  const [deckType, setDeckType] = useState<'all' | 'major'>('all');
  const [allowReversed, setAllowReversed] = useState<boolean>(true);

  // Spread & Reading State
  const [selectedSpread, setSelectedSpread] = useState<SpreadType>('single');
  const [customFreeCount, setCustomFreeCount] = useState<number>(3);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [revealedCardIds, setRevealedCardIds] = useState<Set<string>>(new Set());

  // Modal inspection state
  const [modalSlot, setModalSlot] = useState<{
    card: DrawnCard;
    house: SpreadHouse;
  } | null>(null);

  // Feedback states
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Subscribe to external language and audio events
  useEffect(() => {
    const unsubLang = subscribeLanguageChange(setCurrentLang);
    const unsubAudio = subscribeAudio(setIsMuted);
    return () => {
      unsubLang();
      unsubAudio();
    };
  }, []);

  // Compute active houses
  const activeHouses = useMemo(() => {
    return getSpreadHouses(selectedSpread, customFreeCount);
  }, [selectedSpread, customFreeCount]);

  // Max cards available for free draw
  const maxAvailableCards = deckType === 'major' ? 22 : 78;

  // Draw cards function
  const handleDeal = useCallback(
    (sound = true) => {
      const houses = getSpreadHouses(selectedSpread, customFreeCount);
      const houseIds = houses.map((h) => h.id);
      const cards = drawCards(deckType, houses.length, allowReversed, houseIds);

      setDrawnCards(cards);
      setRevealedCardIds(new Set());
      setModalSlot(null);

      if (sound) {
        playCardShuffleSound();
      }
    },
    [selectedSpread, customFreeCount, deckType, allowReversed]
  );

  // Initial deal and updates when core draw parameters change
  useEffect(() => {
    handleDeal(false);
  }, [selectedSpread, deckType, allowReversed, handleDeal]);

  // Flip individual card
  const handleFlipCard = (cardId: string) => {
    playCardFlipSound();

    setRevealedCardIds((prev) => {
      const next = new Set(prev);
      next.add(cardId);

      // If all cards are now revealed, play celestial chime
      if (next.size === drawnCards.length && drawnCards.length > 0) {
        setTimeout(playCelestialChime, 300);
      }

      return next;
    });
  };

  // Reveal all cards at once
  const handleRevealAll = () => {
    const allIds = new Set(drawnCards.map((c) => c.card.id));
    setRevealedCardIds(allIds);
    playCelestialChime();
  };

  // Inspect card in modal
  const handleInspectCard = (card: DrawnCard, house: SpreadHouse) => {
    setModalSlot({ card, house });
  };

  // Copy Reading Summary to Clipboard with robust fallback cascade
  const handleCopySummary = async () => {
    const spreadTitle = t(SPREADS[selectedSpread].nameKey);
    const dateStr = new Date().toLocaleDateString(
      currentLang === 'pt-BR' ? 'pt-BR' : 'en-US',
      { dateStyle: 'long' }
    );

    let summaryText = `${t('reading.reading_summary_title')}\n`;
    summaryText += `✨ ${spreadTitle} — ${dateStr}\n\n`;

    drawnCards.forEach((drawn, index) => {
      const house = activeHouses[index];
      const isRevealed = revealedCardIds.has(drawn.card.id);
      const houseInfo = house
        ? getHouseTranslation(house.nameKey, house.descKey)
        : { name: `${t('reading.house')} ${index + 1}` };

      if (!isRevealed) {
        summaryText += `[${houseInfo.name}]: ${t('reading.unrevealed_card')}\n`;
      } else {
        const cardInfo = getCardTranslation(drawn.card.id);
        const orientation = drawn.isReversed ? ` (${t('reading.reversed')})` : '';
        const meaning = drawn.isReversed ? cardInfo.reversed : cardInfo.upright;

        summaryText += `🔮 ${houseInfo.name}: ${cardInfo.name}${orientation}\n`;
        summaryText += `   ${t('reading.keywords')}: ${cardInfo.keywords.join(', ')}\n`;
        summaryText += `   ${meaning}\n\n`;
      }
    });

    summaryText += `\n${t('reading.consult_again')}`;

    const copied = await copyToClipboard(summaryText);
    setIsCopied(copied);
    if (copied) {
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const isAllRevealed = drawnCards.length > 0 && revealedCardIds.size === drawnCards.length;

  return (
    <div className="min-h-screen flex flex-col bg-celestial-950 text-gray-100 relative overflow-x-hidden selection:bg-gold-dark selection:text-white">
      {/* Mystical Background Celestial Particles and Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle radial nebula glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-mystic-purple/35 via-mystic-rose/15 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-10 w-[500px] h-[400px] bg-gradient-to-t from-gold/10 via-mystic-purple/20 to-transparent rounded-full blur-3xl opacity-50" />
        {/* Starfield overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f5d061_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Header */}
      <Header
        deckType={deckType}
        onToggleDeckType={() => setDeckType((prev) => (prev === 'all' ? 'major' : 'all'))}
        allowReversed={allowReversed}
        onToggleAllowReversed={() => setAllowReversed((prev) => !prev)}
        isMuted={isMuted}
        onToggleAudio={toggleAudio}
        currentLang={currentLang}
        onChangeLang={setLanguage}
      />

      {/* Main Reading Arena */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-4 sm:py-6 flex flex-col items-center relative z-10">
        {/* Spread Selector */}
        <SpreadSelector
          selectedSpread={selectedSpread}
          onSelectSpread={(spread) => setSelectedSpread(spread)}
        />

        {/* Free Draw Custom Card Count Stepper */}
        {selectedSpread === 'free' && (
          <FreeDrawControls
            count={customFreeCount}
            maxCount={Math.min(10, maxAvailableCards)}
            onChangeCount={(newCount) => {
              setCustomFreeCount(newCount);
            }}
            onDraw={() => handleDeal(true)}
          />
        )}

        {/* Tarot Table with Dealt Cards */}
        <section aria-label="Mesa de Tarot" className="w-full flex-1 flex flex-col justify-center my-2">
          <TarotTable
            spreadType={selectedSpread}
            houses={activeHouses}
            drawnCards={drawnCards}
            revealedCardIds={revealedCardIds}
            onFlipCard={handleFlipCard}
            onInspectCard={handleInspectCard}
          />
        </section>

        {/* Reading Actions and Status */}
        <SummaryBar
          isAllRevealed={isAllRevealed}
          onRevealAll={handleRevealAll}
          onNewReading={() => handleDeal(true)}
          onCopySummary={handleCopySummary}
          isCopied={isCopied}
        />

        {/* Hint helper */}
        <div className="text-center text-xs text-gray-400/80 italic mt-2 flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3.5 h-3.5 text-gold/60" />
          <span>
            {isAllRevealed ? t('reading.click_to_zoom') : t('reading.unrevealed_hint')}
          </span>
        </div>
      </main>

      {/* Card Detail Modal */}
      <CardModal
        card={modalSlot?.card || null}
        house={modalSlot?.house || null}
        isOpen={Boolean(modalSlot)}
        onClose={() => setModalSlot(null)}
      />

      {/* Footer */}
      <footer className="w-full border-t border-gold/15 py-4 px-4 text-center text-xs text-gray-500 relative z-10 bg-celestial-950/70">
        <p className="font-serif">
          Tarot Online • Baralho clássico Rider-Waite Smith (1909) em domínio público.
        </p>
        <p className="text-[10px] text-gray-600 mt-1">
          Hospedado no GitHub Pages com tecnologia aberta.
        </p>
      </footer>
    </div>
  );
}

export default App;
