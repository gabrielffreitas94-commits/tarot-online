import { SupportedLanguage } from '../types/tarot.ts';
import { CardMeaning, HouseTranslation } from './types.ts';
import { UI_TRANSLATIONS } from './locales/uiTranslations.ts';
import { getCardData } from './locales/cardsData.ts';

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['pt-BR', 'en', 'es', 'fr', 'it', 'de'];

export const LANGUAGE_LABELS: Record<SupportedLanguage, { label: string; flag: string }> = {
  'pt-BR': { label: 'Português', flag: '🇧🇷' },
  'en': { label: 'English', flag: '🇺🇸' },
  'es': { label: 'Español', flag: '🇪🇸' },
  'fr': { label: 'Français', flag: '🇫🇷' },
  'it': { label: 'Italiano', flag: '🇮🇹' },
  'de': { label: 'Deutsch', flag: '🇩🇪' },
};

const STORAGE_KEY = 'tarot_lang';

let currentLanguage: SupportedLanguage = getInitialLanguage();
const listeners = new Set<(lang: SupportedLanguage) => void>();

export function getInitialLanguage(): SupportedLanguage {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }

    const browserLang = navigator.language?.toLowerCase() || '';
    if (browserLang.startsWith('pt')) return 'pt-BR';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('it')) return 'it';
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('en')) return 'en';
  }
  return 'pt-BR';
}

export function getCurrentLanguage(): SupportedLanguage {
  return currentLanguage;
}

export function setLanguage(lang: SupportedLanguage): void {
  if (SUPPORTED_LANGUAGES.includes(lang)) {
    currentLanguage = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    listeners.forEach((fn) => fn(lang));
  }
}

export function subscribeLanguageChange(fn: (lang: SupportedLanguage) => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/**
 * Translates a key using the current language, falling back to pt-BR or the raw key.
 */
export function t(key: string, params?: Record<string, string | number>, lang?: SupportedLanguage): string {
  const activeLang = lang || currentLanguage;
  const dict = UI_TRANSLATIONS[activeLang] || UI_TRANSLATIONS['pt-BR'];
  let translation = dict[key] || UI_TRANSLATIONS['pt-BR']?.[key] || key;

  if (params) {
    Object.entries(params).forEach(([paramKey, val]) => {
      translation = translation.replace(new RegExp(`{${paramKey}}`, 'g'), String(val));
    });
  }

  return translation;
}

/**
 * Returns the card interpretation and title in the requested or active language.
 */
export function getCardTranslation(cardId: string, lang?: SupportedLanguage): CardMeaning {
  const activeLang = lang || currentLanguage;
  return getCardData(cardId, activeLang);
}

/**
 * Returns translated name and description for a house.
 */
export function getHouseTranslation(
  nameKey: string,
  descKey: string,
  lang?: SupportedLanguage
): HouseTranslation {
  return {
    name: t(nameKey, undefined, lang),
    desc: t(descKey, undefined, lang),
  };
}
