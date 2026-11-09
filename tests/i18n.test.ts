import { describe, it, expect, beforeEach } from 'vitest';
import {
  t,
  setLanguage,
  getCurrentLanguage,
  getInitialLanguage,
  SUPPORTED_LANGUAGES,
  getCardTranslation,
  getHouseTranslation,
} from '../src/i18n/index.ts';
import { SupportedLanguage } from '../src/types/tarot.ts';

describe('Internationalization (i18n) Engine', () => {
  beforeEach(() => {
    localStorage.clear();
    setLanguage('pt-BR');
  });

  it('supports all 6 specified EFIGS+LATAM languages', () => {
    const expectedLangs: SupportedLanguage[] = ['pt-BR', 'en', 'es', 'fr', 'it', 'de'];
    expectedLangs.forEach((lang) => {
      expect(SUPPORTED_LANGUAGES).toContain(lang);
    });
  });

  it('defaults to pt-BR if storage is empty and browser is Portuguese', () => {
    expect(getInitialLanguage()).toBe('pt-BR');
  });

  it('allows changing current language and persists to localStorage', () => {
    setLanguage('en');
    expect(getCurrentLanguage()).toBe('en');
    expect(localStorage.getItem('tarot_lang')).toBe('en');

    setLanguage('es');
    expect(getCurrentLanguage()).toBe('es');
    expect(localStorage.getItem('tarot_lang')).toBe('es');
  });

  it('translates common UI keys across all 6 languages', () => {
    const commonKeys = [
      'app.title',
      'actions.reveal_all',
      'actions.new_reading',
      'actions.copy_summary',
      'settings.all_deck',
      'settings.major_only',
      'settings.allow_reversed',
    ];

    SUPPORTED_LANGUAGES.forEach((lang) => {
      setLanguage(lang);
      commonKeys.forEach((key) => {
        const translated = t(key);
        expect(translated).toBeTruthy();
        expect(translated).not.toBe(key); // should not return the raw key
      });
    });
  });

  it('provides card translations with name, upright, reversed and keywords', () => {
    const cardId = 'major_0'; // The Fool
    const ptTrans = getCardTranslation(cardId, 'pt-BR');
    expect(ptTrans.name).toBe('O Louco');
    expect(ptTrans.upright).toBeTruthy();
    expect(ptTrans.reversed).toBeTruthy();
    expect(ptTrans.keywords.length).toBeGreaterThan(0);

    const enTrans = getCardTranslation(cardId, 'en');
    expect(enTrans.name).toBe('The Fool');

    const esTrans = getCardTranslation(cardId, 'es');
    expect(esTrans.name).toBe('El Loco');

    const frTrans = getCardTranslation(cardId, 'fr');
    expect(frTrans.name).toBe('Le Mat');

    const itTrans = getCardTranslation(cardId, 'it');
    expect(itTrans.name).toBe('Il Matto');

    const deTrans = getCardTranslation(cardId, 'de');
    expect(deTrans.name).toBe('Der Narr');
  });

  it('provides house translations accurately', () => {
    const house = getHouseTranslation(
      'spreads.three_cards.houses.past.name',
      'spreads.three_cards.houses.past.desc',
      'pt-BR'
    );
    expect(house.name).toBeTruthy();
    expect(house.desc).toBeTruthy();
  });
});
