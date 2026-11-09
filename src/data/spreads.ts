import { SpreadDefinition, SpreadHouse, SpreadType } from '../types/tarot.ts';

export const SPREADS: Record<SpreadType, SpreadDefinition> = {
  single: {
    id: 'single',
    nameKey: 'spreads.single.name',
    descKey: 'spreads.single.desc',
    cardCount: 1,
    houses: [
      {
        id: 'single_focus',
        nameKey: 'spreads.single.houses.focus.name',
        descKey: 'spreads.single.houses.focus.desc',
        order: 1,
      },
    ],
  },

  three_cards: {
    id: 'three_cards',
    nameKey: 'spreads.three_cards.name',
    descKey: 'spreads.three_cards.desc',
    cardCount: 3,
    houses: [
      {
        id: 'tc_past',
        nameKey: 'spreads.three_cards.houses.past.name',
        descKey: 'spreads.three_cards.houses.past.desc',
        order: 1,
      },
      {
        id: 'tc_present',
        nameKey: 'spreads.three_cards.houses.present.name',
        descKey: 'spreads.three_cards.houses.present.desc',
        order: 2,
      },
      {
        id: 'tc_future',
        nameKey: 'spreads.three_cards.houses.future.name',
        descKey: 'spreads.three_cards.houses.future.desc',
        order: 3,
      },
    ],
  },

  love: {
    id: 'love',
    nameKey: 'spreads.love.name',
    descKey: 'spreads.love.desc',
    cardCount: 4,
    houses: [
      {
        id: 'love_you',
        nameKey: 'spreads.love.houses.you.name',
        descKey: 'spreads.love.houses.you.desc',
        order: 1,
      },
      {
        id: 'love_partner',
        nameKey: 'spreads.love.houses.partner.name',
        descKey: 'spreads.love.houses.partner.desc',
        order: 2,
      },
      {
        id: 'love_dynamic',
        nameKey: 'spreads.love.houses.dynamic.name',
        descKey: 'spreads.love.houses.dynamic.desc',
        order: 3,
      },
      {
        id: 'love_advice',
        nameKey: 'spreads.love.houses.advice.name',
        descKey: 'spreads.love.houses.advice.desc',
        order: 4,
      },
    ],
  },

  decision: {
    id: 'decision',
    nameKey: 'spreads.decision.name',
    descKey: 'spreads.decision.desc',
    cardCount: 5,
    houses: [
      {
        id: 'dec_context',
        nameKey: 'spreads.decision.houses.context.name',
        descKey: 'spreads.decision.houses.context.desc',
        order: 1,
      },
      {
        id: 'dec_path_a',
        nameKey: 'spreads.decision.houses.path_a.name',
        descKey: 'spreads.decision.houses.path_a.desc',
        order: 2,
      },
      {
        id: 'dec_path_b',
        nameKey: 'spreads.decision.houses.path_b.name',
        descKey: 'spreads.decision.houses.path_b.desc',
        order: 3,
      },
      {
        id: 'dec_outcome_a',
        nameKey: 'spreads.decision.houses.outcome_a.name',
        descKey: 'spreads.decision.houses.outcome_a.desc',
        order: 4,
      },
      {
        id: 'dec_outcome_b',
        nameKey: 'spreads.decision.houses.outcome_b.name',
        descKey: 'spreads.decision.houses.outcome_b.desc',
        order: 5,
      },
    ],
  },

  celtic_cross: {
    id: 'celtic_cross',
    nameKey: 'spreads.celtic_cross.name',
    descKey: 'spreads.celtic_cross.desc',
    cardCount: 10,
    houses: [
      {
        id: 'cc_present',
        nameKey: 'spreads.celtic_cross.houses.present.name',
        descKey: 'spreads.celtic_cross.houses.present.desc',
        order: 1,
      },
      {
        id: 'cc_challenge',
        nameKey: 'spreads.celtic_cross.houses.challenge.name',
        descKey: 'spreads.celtic_cross.houses.challenge.desc',
        order: 2,
      },
      {
        id: 'cc_foundation',
        nameKey: 'spreads.celtic_cross.houses.foundation.name',
        descKey: 'spreads.celtic_cross.houses.foundation.desc',
        order: 3,
      },
      {
        id: 'cc_recent_past',
        nameKey: 'spreads.celtic_cross.houses.recent_past.name',
        descKey: 'spreads.celtic_cross.houses.recent_past.desc',
        order: 4,
      },
      {
        id: 'cc_higher_power',
        nameKey: 'spreads.celtic_cross.houses.higher_power.name',
        descKey: 'spreads.celtic_cross.houses.higher_power.desc',
        order: 5,
      },
      {
        id: 'cc_near_future',
        nameKey: 'spreads.celtic_cross.houses.near_future.name',
        descKey: 'spreads.celtic_cross.houses.near_future.desc',
        order: 6,
      },
      {
        id: 'cc_self',
        nameKey: 'spreads.celtic_cross.houses.self.name',
        descKey: 'spreads.celtic_cross.houses.self.desc',
        order: 7,
      },
      {
        id: 'cc_environment',
        nameKey: 'spreads.celtic_cross.houses.environment.name',
        descKey: 'spreads.celtic_cross.houses.environment.desc',
        order: 8,
      },
      {
        id: 'cc_hopes_fears',
        nameKey: 'spreads.celtic_cross.houses.hopes_fears.name',
        descKey: 'spreads.celtic_cross.houses.hopes_fears.desc',
        order: 9,
      },
      {
        id: 'cc_outcome',
        nameKey: 'spreads.celtic_cross.houses.outcome.name',
        descKey: 'spreads.celtic_cross.houses.outcome.desc',
        order: 10,
      },
    ],
  },

  free: {
    id: 'free',
    nameKey: 'spreads.free.name',
    descKey: 'spreads.free.desc',
    cardCount: 3, // Default, can be adjusted between 1 and 10
    isCustomCount: true,
    houses: [
      {
        id: 'free_1',
        nameKey: 'spreads.free.houses.card_1.name',
        descKey: 'spreads.free.houses.card_1.desc',
        order: 1,
      },
      {
        id: 'free_2',
        nameKey: 'spreads.free.houses.card_2.name',
        descKey: 'spreads.free.houses.card_2.desc',
        order: 2,
      },
      {
        id: 'free_3',
        nameKey: 'spreads.free.houses.card_3.name',
        descKey: 'spreads.free.houses.card_3.desc',
        order: 3,
      },
    ],
  },
};

/**
 * Returns the houses for a given spread. If the spread is 'free',
 * dynamically generates `count` houses up to the maximum permitted.
 */
export function getSpreadHouses(type: SpreadType, customCount?: number): SpreadHouse[] {
  const spread = SPREADS[type];
  if (type !== 'free') {
    return spread.houses;
  }

  const count = Math.max(1, Math.min(customCount ?? spread.cardCount, 10));
  return Array.from({ length: count }, (_, index) => ({
    id: `free_${index + 1}`,
    nameKey: `spreads.free.houses.card_${index + 1}.name`,
    descKey: `spreads.free.houses.card_${index + 1}.desc`,
    order: index + 1,
  }));
}
