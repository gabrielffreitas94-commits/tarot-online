import { SupportedLanguage } from '../types/tarot.ts';

export interface CardMeaning {
  name: string;
  upright: string;
  reversed: string;
  keywords: string[];
}

export interface HouseTranslation {
  name: string;
  desc: string;
}

export interface LocaleData {
  app: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  actions: {
    reveal_all: string;
    new_reading: string;
    copy_summary: string;
    copied: string;
    close: string;
    flip_card: string;
    draw: string;
    select_spread: string;
  };
  settings: {
    all_deck: string;
    major_only: string;
    allow_reversed: string;
    sound_on: string;
    sound_off: string;
    language: string;
    card_count: string;
  };
  reading: {
    house: string;
    position: string;
    upright: string;
    reversed: string;
    keywords: string;
    advice: string;
    card_revealed: string;
    click_to_zoom: string;
    unrevealed_hint: string;
    reading_summary_title: string;
  };
  spreads: Record<string, any>;
  cards: Record<string, CardMeaning>;
}

export type LocaleMap = Record<SupportedLanguage, LocaleData>;
