import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TarotTable } from '../src/components/TarotTable.tsx';
import { SpreadSelector } from '../src/components/SpreadSelector.tsx';
import { SPREADS } from '../src/data/spreads.ts';
import { DrawnCard } from '../src/types/tarot.ts';

describe('TarotTable & Spread Controls', () => {
  const threeCardsSpread = SPREADS.three_cards;
  const mockDrawnCards: DrawnCard[] = [
    {
      card: { id: 'major_0', nameKey: 'cards.fool', arcana: 'major', number: 0, image: 'fool.jpg' },
      isReversed: false,
      houseId: 'tc_past',
    },
    {
      card: { id: 'major_1', nameKey: 'cards.magician', arcana: 'major', number: 1, image: 'magician.jpg' },
      isReversed: false,
      houseId: 'tc_present',
    },
    {
      card: { id: 'major_2', nameKey: 'cards.high_priestess', arcana: 'major', number: 2, image: 'priestess.jpg' },
      isReversed: true,
      houseId: 'tc_future',
    },
  ];

  it('renders all houses in TarotTable for three_cards spread', () => {
    const onFlipCard = vi.fn();
    const onInspectCard = vi.fn();

    render(
      <TarotTable
        spreadType="three_cards"
        houses={threeCardsSpread.houses}
        drawnCards={mockDrawnCards}
        revealedCardIds={new Set(['major_0'])}
        onFlipCard={onFlipCard}
        onInspectCard={onInspectCard}
      />
    );

    // Expect 3 card buttons
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);

    // One card is revealed (major_0), two are unrevealed
    expect(screen.getByAltText('The Fool')).toBeInTheDocument();
    expect(screen.queryByAltText('The Magician')).not.toBeInTheDocument();
    expect(screen.queryByAltText('The High Priestess')).not.toBeInTheDocument();
  });

  it('handles clicking unrevealed card slot to flip', () => {
    const onFlipCard = vi.fn();
    const onInspectCard = vi.fn();

    render(
      <TarotTable
        spreadType="three_cards"
        houses={threeCardsSpread.houses}
        drawnCards={mockDrawnCards}
        revealedCardIds={new Set()}
        onFlipCard={onFlipCard}
        onInspectCard={onInspectCard}
      />
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // Click second card (major_1)
    expect(onFlipCard).toHaveBeenCalledWith('major_1');
    expect(onInspectCard).not.toHaveBeenCalled();
  });

  it('triggers onSelectSpread when changing spread in SpreadSelector', () => {
    const onSelectSpread = vi.fn();
    render(
      <SpreadSelector
        selectedSpread="three_cards"
        onSelectSpread={onSelectSpread}
      />
    );

    const celticButton = screen.getByRole('button', { name: /Cruz Celta|Celtic Cross/i });
    fireEvent.click(celticButton);
    expect(onSelectSpread).toHaveBeenCalledWith('celtic_cross');
  });
});
