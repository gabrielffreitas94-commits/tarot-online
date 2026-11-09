import { ALL_CARDS, MAJOR_ARCANA } from '../data/cards.ts';
import { ArcanaType, DrawnCard, TarotCard } from '../types/tarot.ts';

export const TAROT_DECK = ALL_CARDS;

/**
 * Modern Fisher-Yates (Knuth) in-place array shuffle.
 * Produces an unbiased random permutation in O(n) time.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Draws X cards without repetition from the specified deck subset.
 *
 * @param deckType - 'all' (78 cards) or 'major' (22 cards)
 * @param count - Number of cards to draw
 * @param allowReversed - Whether drawn cards have a chance of being reversed
 * @param houseIds - Optional list of house IDs corresponding to positions
 * @returns Array of unique drawn cards with orientation and house assignment
 */
export function drawCards(
  deckType: 'all' | 'major',
  count: number,
  allowReversed: boolean = false,
  houseIds: string[] = []
): DrawnCard[] {
  const sourceDeck: TarotCard[] = deckType === 'major' ? MAJOR_ARCANA : ALL_CARDS;
  
  // Safe bounds: cannot draw more than the available unique cards
  const drawCount = Math.max(0, Math.min(count, sourceDeck.length));
  
  const shuffled = shuffleArray(sourceDeck);
  const selected = shuffled.slice(0, drawCount);

  return selected.map((card, index) => ({
    card,
    isReversed: allowReversed ? Math.random() < 0.5 : false,
    houseId: houseIds[index] || `house_${index + 1}`,
  }));
}
