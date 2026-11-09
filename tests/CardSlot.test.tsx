import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardSlot } from '../src/components/CardSlot.tsx';
import { DrawnCard, SpreadHouse } from '../src/types/tarot.ts';

describe('CardSlot Component', () => {
  const sampleCard: DrawnCard = {
    card: {
      id: 'major_0',
      nameKey: 'cards.fool',
      arcana: 'major',
      number: 0,
      image: 'https://example.com/fool.jpg',
    },
    isReversed: false,
    houseId: 'single_focus',
  };

  const sampleHouse: SpreadHouse = {
    id: 'single_focus',
    nameKey: 'spreads.single.houses.focus.name',
    descKey: 'spreads.single.houses.focus.desc',
    order: 1,
  };

  it('renders face-down card with celestial card back and house title when not revealed', () => {
    const onFlip = vi.fn();
    const onInspect = vi.fn();

    render(
      <CardSlot
        drawnCard={sampleCard}
        house={sampleHouse}
        isRevealed={false}
        onFlip={onFlip}
        onInspect={onInspect}
      />
    );

    expect(screen.getByTestId('card-back')).toBeInTheDocument();
    expect(screen.queryByAltText(/O Louco|The Fool/i)).not.toBeInTheDocument();

    // Clicking unrevealed card should call onFlip
    const slot = screen.getByRole('button');
    fireEvent.click(slot);
    expect(onFlip).toHaveBeenCalledTimes(1);
    expect(onInspect).not.toHaveBeenCalled();
  });

  it('renders face-up card with artwork and title when revealed', () => {
    const onFlip = vi.fn();
    const onInspect = vi.fn();

    render(
      <CardSlot
        drawnCard={sampleCard}
        house={sampleHouse}
        isRevealed={true}
        onFlip={onFlip}
        onInspect={onInspect}
      />
    );

    expect(screen.getByTestId('card-front')).toBeInTheDocument();
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/fool.jpg');

    // Clicking revealed card should trigger onInspect
    const slot = screen.getByRole('button');
    fireEvent.click(slot);
    expect(onInspect).toHaveBeenCalledTimes(1);
  });

  it('applies inverted transformation when isReversed is true', () => {
    const reversedCard: DrawnCard = {
      ...sampleCard,
      isReversed: true,
    };

    render(
      <CardSlot
        drawnCard={reversedCard}
        house={sampleHouse}
        isRevealed={true}
        onFlip={() => {}}
        onInspect={() => {}}
      />
    );

    const imgContainer = screen.getByTestId('card-image-container');
    expect(imgContainer.className).toContain('rotate-180');
  });
});
