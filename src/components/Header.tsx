import { useState } from 'react';
import { SupportedLanguage } from '../types/tarot.ts';
import { SUPPORTED_LANGUAGES, LANGUAGE_LABELS, t } from '../i18n/index.ts';
import { Volume2, VolumeX, Globe, Layers, RotateCw, Sparkles } from 'lucide-react';

export interface HeaderProps {
  deckType: 'all' | 'major';
  onToggleDeckType: () => void;
  allowReversed: boolean;
  onToggleAllowReversed: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
  currentLang: SupportedLanguage;
  onChangeLang: (lang: SupportedLanguage) => void;
}

export function Header({
  deckType,
  onToggleDeckType,
  allowReversed,
  onToggleAllowReversed,
  isMuted,
  onToggleAudio,
  currentLang,
  onChangeLang,
}: HeaderProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gold/20 bg-celestial-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Mystical Title */}
        <div className="flex items-center gap-2.5 text-center md:text-left">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-mystic-purple via-celestial-800 to-gold/30 border border-gold/60 flex items-center justify-center shadow-celestial-gold">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark tracking-wide">
              {t('app.title')}
            </h1>
            <p className="text-[11px] text-gray-400 font-serif tracking-widest uppercase">
              {t('app.subtitle')}
            </p>
          </div>
        </div>

        {/* Global Controls & Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          {/* Deck Mode Toggle */}
          <button
            type="button"
            onClick={onToggleDeckType}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-celestial-900 border border-gold/30 hover:border-gold text-gray-200 hover:text-gold transition-colors"
            title={t('settings.toggle_deck_tooltip')}
          >
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span className="font-medium">
              {deckType === 'all' ? t('settings.all_deck') : t('settings.major_only')}
            </span>
          </button>

          {/* Reversed Cards Toggle */}
          <button
            type="button"
            onClick={onToggleAllowReversed}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
              allowReversed
                ? 'bg-gold/20 border-gold text-gold font-semibold'
                : 'bg-celestial-900 border-gold/30 text-gray-400 hover:text-gray-200'
            }`}
            title={t('settings.toggle_reversed_tooltip')}
          >
            <RotateCw className={`w-3.5 h-3.5 ${allowReversed ? 'text-gold' : 'text-gray-500'}`} />
            <span>{t('settings.allow_reversed')}</span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            type="button"
            onClick={onToggleAudio}
            aria-label={isMuted ? t('settings.sound_off') : t('settings.sound_on')}
            className="p-2 rounded-lg bg-celestial-900 border border-gold/30 hover:border-gold text-gold transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-gray-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-gold" />
            )}
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-celestial-900 border border-gold/30 hover:border-gold text-gold font-medium transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>{LANGUAGE_LABELS[currentLang].flag} {LANGUAGE_LABELS[currentLang].label}</span>
            </button>

            {langMenuOpen && (
              <div
                className="absolute right-0 mt-1.5 w-36 rounded-xl bg-celestial-900 border border-gold/40 shadow-2xl py-1 z-50 animate-fadeIn"
                onMouseLeave={() => setLangMenuOpen(false)}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      onChangeLang(lang);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2 hover:bg-gold/15 transition-colors ${
                      currentLang === lang ? 'text-gold font-bold bg-gold/10' : 'text-gray-300'
                    }`}
                  >
                    <span>{LANGUAGE_LABELS[lang].flag}</span>
                    <span>{LANGUAGE_LABELS[lang].label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
