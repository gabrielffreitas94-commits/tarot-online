import { describe, it, expect } from 'vitest';
import { drawCards, TAROT_DECK } from '../src/utils/deck.ts';

describe('Deck and Draw Engine', () => {
  it('contains exactly 78 cards in total (22 major + 56 minor)', () => {
    expect(TAROT_DECK).toHaveLength(78);
    const majors = TAROT_DECK.filter((c) => c.arcana === 'major');
    const minors = TAROT_DECK.filter((c) => c.arcana === 'minor');
    expect(majors).toHaveLength(22);
    expect(minors).toHaveLength(56);
  });

  it('draws requested number of cards without any duplicates', () => {
    const drawn = drawCards('all', 10, false);
    expect(drawn).toHaveLength(10);
    const ids = drawn.map((d) => d.card.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(10);
  });

  it('filters only major arcana when deckType is "major"', () => {
    const drawn = drawCards('major', 7, false);
    expect(drawn).toHaveLength(7);
    drawn.forEach((d) => {
      expect(d.card.arcana).toBe('major');
    });
  });

  it('sets isReversed to false for all cards when allowReversed is false', () => {
    const drawn = drawCards('all', 15, false);
    drawn.forEach((d) => {
      expect(d.isReversed).toBe(false);
    });
  });

  it('assigns houseIds correctly when provided', () => {
    const houseIds = ['house_1', 'house_2', 'house_3'];
    const drawn = drawCards('all', 3, false, houseIds);
    expect(drawn[0].houseId).toBe('house_1');
    expect(drawn[1].houseId).toBe('house_2');
    expect(drawn[2].houseId).toBe('house_3');
  });

  it('safely caps count if requested count exceeds available cards', () => {
    // There are only 22 major arcana cards
    const drawn = drawCards('major', 50, false);
    expect(drawn).toHaveLength(22);
    const uniqueIds = new Set(drawn.map((d) => d.card.id));
    expect(uniqueIds.size).toBe(22);
  });

  it('can draw reversed cards when allowReversed is true across multiple draws', () => {
    // Draw 30 cards with allowReversed: true; statistically at least one should be reversed
    let hasReversed = false;
    for (let i = 0; i < 5; i++) {
      const drawn = drawCards('all', 10, true);
      if (drawn.some((d) => d.isReversed)) {
        hasReversed = true;
        break;
      }
    }
    expect(hasReversed).toBe(true);
  });
});
