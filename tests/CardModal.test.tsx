import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardModal } from '../src/components/CardModal.tsx';
import { DrawnCard, SpreadHouse } from '../src/types/tarot.ts';

describe('CardModal Component', () => {
  const mockCard: DrawnCard = {
    card: { id: 'major_0', nameKey: 'cards.fool', arcana: 'major', number: 0, image: 'fool.jpg' },
    isReversed: false,
    houseId: 'tc_present',
  };

  const mockHouse: SpreadHouse = {
    id: 'tc_present',
    nameKey: 'spreads.three_cards.houses.present.name',
    descKey: 'spreads.three_cards.houses.present.desc',
    order: 2,
  };

  it('renders nothing or is hidden when isOpen is false', () => {
    render(
      <CardModal
        card={mockCard}
        house={mockHouse}
        isOpen={false}
        onClose={() => {}}
      />
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders detailed card modal when isOpen is true', () => {
    const onClose = vi.fn();
    render(
      <CardModal
        card={mockCard}
        house={mockHouse}
        isOpen={true}
        onClose={onClose}
      />
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /The Fool|O Louco/i })).toBeInTheDocument();

    // Close button works
    const closeBtn = screen.getAllByRole('button', { name: /Close|Fechar/i })[0];
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
