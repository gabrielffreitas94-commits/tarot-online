import { describe, it, expect } from 'vitest';
import { SPREADS, getSpreadHouses } from '../src/data/spreads.ts';
import { SpreadType } from '../src/types/tarot.ts';

describe('Spreads and Houses Definition', () => {
  const expectedSpreads: SpreadType[] = [
    'single',
    'three_cards',
    'love',
    'decision',
    'celtic_cross',
    'free',
  ];

  it('contains all 6 expected spreads', () => {
    expectedSpreads.forEach((type) => {
      expect(SPREADS[type]).toBeDefined();
      expect(SPREADS[type].id).toBe(type);
      expect(SPREADS[type].nameKey).toBeTruthy();
      expect(SPREADS[type].descKey).toBeTruthy();
    });
  });

  it('defines the correct fixed house counts for structured spreads', () => {
    expect(SPREADS.single.houses).toHaveLength(1);
    expect(SPREADS.three_cards.houses).toHaveLength(3);
    expect(SPREADS.love.houses).toHaveLength(4);
    expect(SPREADS.decision.houses).toHaveLength(5);
    expect(SPREADS.celtic_cross.houses).toHaveLength(10);
  });

  it('ensures each house has unique id, order and valid keys', () => {
    Object.values(SPREADS).forEach((spread) => {
      const houseIds = new Set<string>();
      spread.houses.forEach((house) => {
        expect(house.id).toBeTruthy();
        expect(house.nameKey).toBeTruthy();
        expect(house.descKey).toBeTruthy();
        expect(typeof house.order).toBe('number');
        expect(houseIds.has(house.id)).toBe(false);
        houseIds.add(house.id);
      });
    });
  });

  it('generates dynamic houses for free draw with custom card counts', () => {
    const freeHouses3 = getSpreadHouses('free', 3);
    expect(freeHouses3).toHaveLength(3);
    expect(freeHouses3[0].id).toBe('free_1');
    expect(freeHouses3[2].id).toBe('free_3');

    const freeHouses7 = getSpreadHouses('free', 7);
    expect(freeHouses7).toHaveLength(7);
  });
});
