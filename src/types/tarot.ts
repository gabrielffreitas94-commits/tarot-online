export type ArcanaType = 'major' | 'minor';
export type SuitType = 'wands' | 'cups' | 'swords' | 'pentacles';

export interface TarotCard {
  id: string;
  nameKey: string;
  arcana: ArcanaType;
  suit?: SuitType;
  number: number;
  image: string;
}

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  houseId: string;
}

export interface SpreadHouse {
  id: string;
  nameKey: string;
  descKey: string;
  order: number;
  // Visual layout hints for grid/coordinate placement
  gridArea?: string;
  x?: number; // relative coordinate for mystical cross layouts
  y?: number;
}

export type SpreadType = 'single' | 'three_cards' | 'love' | 'decision' | 'celtic_cross' | 'free';

export interface SpreadDefinition {
  id: SpreadType;
  nameKey: string;
  descKey: string;
  cardCount: number;
  isCustomCount?: boolean;
  houses: SpreadHouse[];
}

export type SupportedLanguage = 'pt-BR' | 'en' | 'es' | 'fr' | 'it' | 'de';
