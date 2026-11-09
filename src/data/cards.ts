import { TarotCard } from '../types/tarot.ts';

// Public domain Rider-Waite-Smith 1909 high-resolution images hosted on Wikimedia Commons CDN
const WIKI_BASE = 'https://upload.wikimedia.org/wikipedia/commons';

export const MAJOR_ARCANA: TarotCard[] = [
  { id: 'major_0', nameKey: 'cards.fool', arcana: 'major', number: 0, image: `${WIKI_BASE}/9/90/RWS_Tarot_00_Fool.jpg` },
  { id: 'major_1', nameKey: 'cards.magician', arcana: 'major', number: 1, image: `${WIKI_BASE}/d/de/RWS_Tarot_01_Magician.jpg` },
  { id: 'major_2', nameKey: 'cards.high_priestess', arcana: 'major', number: 2, image: `${WIKI_BASE}/8/88/RWS_Tarot_02_High_Priestess.jpg` },
  { id: 'major_3', nameKey: 'cards.empress', arcana: 'major', number: 3, image: `${WIKI_BASE}/d/d2/RWS_Tarot_03_Empress.jpg` },
  { id: 'major_4', nameKey: 'cards.emperor', arcana: 'major', number: 4, image: `${WIKI_BASE}/c/c3/RWS_Tarot_04_Emperor.jpg` },
  { id: 'major_5', nameKey: 'cards.hierophant', arcana: 'major', number: 5, image: `${WIKI_BASE}/8/8d/RWS_Tarot_05_Hierophant.jpg` },
  { id: 'major_6', nameKey: 'cards.lovers', arcana: 'major', number: 6, image: `${WIKI_BASE}/3/3a/RWS_Tarot_06_Lovers.jpg` },
  { id: 'major_7', nameKey: 'cards.chariot', arcana: 'major', number: 7, image: `${WIKI_BASE}/9/9b/RWS_Tarot_07_Chariot.jpg` },
  { id: 'major_8', nameKey: 'cards.strength', arcana: 'major', number: 8, image: `${WIKI_BASE}/f/f5/RWS_Tarot_08_Strength.jpg` },
  { id: 'major_9', nameKey: 'cards.hermit', arcana: 'major', number: 9, image: `${WIKI_BASE}/4/4d/RWS_Tarot_09_Hermit.jpg` },
  { id: 'major_10', nameKey: 'cards.wheel_of_fortune', arcana: 'major', number: 10, image: `${WIKI_BASE}/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg` },
  { id: 'major_11', nameKey: 'cards.justice', arcana: 'major', number: 11, image: `${WIKI_BASE}/e/e0/RWS_Tarot_11_Justice.jpg` },
  { id: 'major_12', nameKey: 'cards.hanged_man', arcana: 'major', number: 12, image: `${WIKI_BASE}/2/2b/RWS_Tarot_12_Hanged_Man.jpg` },
  { id: 'major_13', nameKey: 'cards.death', arcana: 'major', number: 13, image: `${WIKI_BASE}/d/d7/RWS_Tarot_13_Death.jpg` },
  { id: 'major_14', nameKey: 'cards.temperance', arcana: 'major', number: 14, image: `${WIKI_BASE}/f/f8/RWS_Tarot_14_Temperance.jpg` },
  { id: 'major_15', nameKey: 'cards.devil', arcana: 'major', number: 15, image: `${WIKI_BASE}/5/55/RWS_Tarot_15_Devil.jpg` },
  { id: 'major_16', nameKey: 'cards.tower', arcana: 'major', number: 16, image: `${WIKI_BASE}/5/53/RWS_Tarot_16_Tower.jpg` },
  { id: 'major_17', nameKey: 'cards.star', arcana: 'major', number: 17, image: `${WIKI_BASE}/d/db/RWS_Tarot_17_Star.jpg` },
  { id: 'major_18', nameKey: 'cards.moon', arcana: 'major', number: 18, image: `${WIKI_BASE}/7/7f/RWS_Tarot_18_Moon.jpg` },
  { id: 'major_19', nameKey: 'cards.sun', arcana: 'major', number: 19, image: `${WIKI_BASE}/1/17/RWS_Tarot_19_Sun.jpg` },
  { id: 'major_20', nameKey: 'cards.judgement', arcana: 'major', number: 20, image: `${WIKI_BASE}/d/dd/RWS_Tarot_20_Judgement.jpg` },
  { id: 'major_21', nameKey: 'cards.world', arcana: 'major', number: 21, image: `${WIKI_BASE}/f/ff/RWS_Tarot_21_World.jpg` },
];

const SUITS = [
  { suit: 'wands' as const, prefix: 'Wands', wikiCode: 'Wands' },
  { suit: 'cups' as const, prefix: 'Cups', wikiCode: 'Cups' },
  { suit: 'swords' as const, prefix: 'Swords', wikiCode: 'Swords' },
  { suit: 'pentacles' as const, prefix: 'Pentacles', wikiCode: 'Pents' },
];

const MINOR_RANKS = [
  { num: 1, key: 'ace', wiki: '01' },
  { num: 2, key: 'two', wiki: '02' },
  { num: 3, key: 'three', wiki: '03' },
  { num: 4, key: 'four', wiki: '04' },
  { num: 5, key: 'five', wiki: '05' },
  { num: 6, key: 'six', wiki: '06' },
  { num: 7, key: 'seven', wiki: '07' },
  { num: 8, key: 'eight', wiki: '08' },
  { num: 9, key: 'nine', wiki: '09' },
  { num: 10, key: 'ten', wiki: '10' },
  { num: 11, key: 'page', wiki: '11' },
  { num: 12, key: 'knight', wiki: '12' },
  { num: 13, key: 'queen', wiki: '13' },
  { num: 14, key: 'king', wiki: '14' },
];

// Map of specific Wikimedia image hashes for the 56 minor arcana
const WIKI_MINOR_MAP: Record<string, string> = {
  // Wands
  'wands_1': '1/11/Wands01.jpg', 'wands_2': '0/0f/Wands02.jpg', 'wands_3': 'f/ff/Wands03.jpg',
  'wands_4': 'a/a4/Wands04.jpg', 'wands_5': '9/9d/Wands05.jpg', 'wands_6': '3/3b/Wands06.jpg',
  'wands_7': 'e/e4/Wands07.jpg', 'wands_8': '6/6b/Wands08.jpg', 'wands_9': '4/4d/Tarot_Nine_of_Wands.jpg',
  'wands_10': '0/0b/Wands10.jpg', 'wands_11': '6/6a/Wands11.jpg', 'wands_12': '1/16/Wands12.jpg',
  'wands_13': '0/04/Wands13.jpg', 'wands_14': 'c/ce/Wands14.jpg',
  // Cups
  'cups_1': '3/36/Cups01.jpg', 'cups_2': 'f/f8/Cups02.jpg', 'cups_3': '7/7a/Cups03.jpg',
  'cups_4': '3/35/Cups04.jpg', 'cups_5': 'd/d7/Cups05.jpg', 'cups_6': '1/17/Cups06.jpg',
  'cups_7': 'a/ae/Cups07.jpg', 'cups_8': '6/60/Cups08.jpg', 'cups_9': '2/24/Cups09.jpg',
  'cups_10': '8/84/Cups10.jpg', 'cups_11': 'a/ad/Cups11.jpg', 'cups_12': 'f/fa/Cups12.jpg',
  'cups_13': '6/62/Cups13.jpg', 'cups_14': '0/04/Cups14.jpg',
  // Swords
  'swords_1': '1/1a/Swords01.jpg', 'swords_2': '9/9e/Swords02.jpg', 'swords_3': '0/02/Swords03.jpg',
  'swords_4': 'b/bf/Swords04.jpg', 'swords_5': '2/23/Swords05.jpg', 'swords_6': '2/29/Swords06.jpg',
  'swords_7': '3/34/Swords07.jpg', 'swords_8': 'a/a7/Swords08.jpg', 'swords_9': '2/2f/Swords09.jpg',
  'swords_10': 'd/d4/Swords10.jpg', 'swords_11': '4/4c/Swords11.jpg', 'swords_12': 'b/b0/Swords12.jpg',
  'swords_13': 'd/d4/Swords13.jpg', 'swords_14': '3/33/Swords14.jpg',
  // Pentacles
  'pentacles_1': 'f/fd/Pents01.jpg', 'pentacles_2': '9/9f/Pents02.jpg', 'pentacles_3': '4/42/Pents03.jpg',
  'pentacles_4': '3/35/Pents04.jpg', 'pentacles_5': '9/96/Pents05.jpg', 'pentacles_6': 'a/a6/Pents06.jpg',
  'pentacles_7': '6/6a/Pents07.jpg', 'pentacles_8': '4/49/Pents08.jpg', 'pentacles_9': 'f/f0/Pents09.jpg',
  'pentacles_10': '4/42/Pents10.jpg', 'pentacles_11': 'e/ec/Pents11.jpg', 'pentacles_12': 'd/d5/Pents12.jpg',
  'pentacles_13': '8/88/Pents13.jpg', 'pentacles_14': '1/1c/Pents14.jpg',
};

export const MINOR_ARCANA: TarotCard[] = SUITS.flatMap(({ suit }) =>
  MINOR_RANKS.map(({ num, key }) => {
    const cardId = `${suit}_${num}`;
    const hash = WIKI_MINOR_MAP[cardId] || `0/00/${suit}_${num}.jpg`;
    return {
      id: cardId,
      nameKey: `cards.${suit}.${key}`,
      arcana: 'minor' as const,
      suit,
      number: num,
      image: `${WIKI_BASE}/${hash}`,
    };
  })
);

export const ALL_CARDS: TarotCard[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];
