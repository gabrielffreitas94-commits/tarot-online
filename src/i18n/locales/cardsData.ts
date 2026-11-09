import { SupportedLanguage } from '../../types/tarot.ts';
import { CardMeaning } from '../types.ts';

// 22 Major Arcana full rich definitions across all 6 languages
const MAJOR_ARCANA_DEFINITIONS: Record<string, Record<SupportedLanguage, CardMeaning>> = {
  major_0: {
    'pt-BR': {
      name: 'O Louco',
      upright: 'Início de uma nova jornada, inocência, espontaneidade, espírito livre e fé no desconhecido.',
      reversed: 'Imprudência, ingenuidade excessiva, medo de arriscar, impulsividade desordenada.',
      keywords: ['Início', 'Liberdade', 'Espontaneidade', 'Fé'],
    },
    'en': {
      name: 'The Fool',
      upright: 'New beginnings, innocence, spontaneity, a free spirit, taking a leap of faith.',
      reversed: 'Recklessness, naivety, foolish risks, fear of starting anew.',
      keywords: ['Beginnings', 'Freedom', 'Spontaneity', 'Faith'],
    },
    'es': {
      name: 'El Loco',
      upright: 'Nuevos comienzos, inocencia, espontaneidad, libertad de espíritu y salto de fe.',
      reversed: 'Imprudencia, ingenuidad, miedo a dar el salto, riesgo innecesario.',
      keywords: ['Comienzo', 'Libertad', 'Espontaneidad', 'Fe'],
    },
    'fr': {
      name: 'Le Mat',
      upright: 'Nouveaux départs, innocence, spontanéité, esprit libre et foi en l\'inconnu.',
      reversed: 'Imprudence, naïveté excessive, peur de sauter le pas, égarement.',
      keywords: ['Départ', 'Liberté', 'Spontanéité', 'Foi'],
    },
    'it': {
      name: 'Il Matto',
      upright: 'Nuovi inizi, innocenza, spontaneità, spirito libero e slancio verso l\'ignoto.',
      reversed: 'Imprudenza, ingenuità eccessiva, timore del cambiamento, impulsività.',
      keywords: ['Inizio', 'Libertà', 'Spontaneità', 'Fede'],
    },
    'de': {
      name: 'Der Narr',
      upright: 'Neubeginn, Unschuld, Spontaneität, freier Geist und Vertrauen ins Unbekannte.',
      reversed: 'Leichtsinn, Naivität, Furcht vor dem Neubeginn, unüberlegtes Handeln.',
      keywords: ['Neubeginn', 'Freiheit', 'Spontaneität', 'Vertrauen'],
    },
  },
  major_1: {
    'pt-BR': {
      name: 'O Mago',
      upright: 'Manifestação, poder pessoal, recursos conscientes, habilidade, foco e força de vontade.',
      reversed: 'Manipulação, talentos desperdiçados, ilusão, planos mal direcionados.',
      keywords: ['Manifestação', 'Vontade', 'Criação', 'Poder'],
    },
    'en': {
      name: 'The Magician',
      upright: 'Manifestation, personal power, resourcefulness, inspired action, concentration.',
      reversed: 'Manipulation, wasted talents, illusion, lack of direction.',
      keywords: ['Manifestation', 'Willpower', 'Creation', 'Skill'],
    },
    'es': {
      name: 'El Mago',
      upright: 'Manifestación, poder personal, creatividad, destreza y recursos disponibles.',
      reversed: 'Manipulación, talento desaprovechado, engaño o falta de concentración.',
      keywords: ['Manifestación', 'Voluntad', 'Creación', 'Poder'],
    },
    'fr': {
      name: 'Le Bateleur',
      upright: 'Manifestation, habileté, puissance créatrice, volonté et maîtrise de soi.',
      reversed: 'Manipulation, potentiel inexploité, illusions, dispersion des talents.',
      keywords: ['Manifestation', 'Volonté', 'Création', 'Pouvoir'],
    },
    'it': {
      name: 'Il Bagatto',
      upright: 'Manifestazione, abilità, volontà creativa, risorse e concentrazione.',
      reversed: 'Manipolazione, dispersione energetica, inganno, talenti sprecati.',
      keywords: ['Manifestazione', 'Volontà', 'Creazione', 'Abilità'],
    },
    'de': {
      name: 'Der Magier',
      upright: 'Manifestation, Willenskraft, Schöpfergeist, Konzentration und Tatendrang.',
      reversed: 'Manipulation, ungenutzte Talente, Täuschung, zielloses Handeln.',
      keywords: ['Manifestation', 'Wille', 'Schöpfung', 'Kraft'],
    },
  },
  major_2: {
    'pt-BR': {
      name: 'A Sacerdotisa',
      upright: 'Intuição profunda, sabedoria interior, mistério, o sagrado feminino e serenidade.',
      reversed: 'Segredos revelados, desconexão intuitiva, repressão emocional, superficialidade.',
      keywords: ['Intuição', 'Mistério', 'Sabedoria', 'Silêncio'],
    },
    'en': {
      name: 'The High Priestess',
      upright: 'Intuition, sacred knowledge, divine feminine, subconscious mind, inner mystery.',
      reversed: 'Secrets unveiled, disconnected from intuition, emotional withdrawal, gossip.',
      keywords: ['Intuition', 'Mystery', 'Wisdom', 'Silence'],
    },
    'es': {
      name: 'La Sacerdotisa',
      upright: 'Intuición profunda, misterio, sabiduría interior, el inconsciente y calma.',
      reversed: 'Secretos expuestos, bloqueo intuitivo, superficialidad o frialdad.',
      keywords: ['Intuición', 'Misterio', 'Sabiduría', 'Silencio'],
    },
    'fr': {
      name: 'La Papesse',
      upright: 'Intuition, sagesse secrète, féminin sacré, mystère et profondeur intérieure.',
      reversed: 'Secrets divulgués, intuition étouffée, repli excessif, faux-semblants.',
      keywords: ['Intuition', 'Mystère', 'Sagesse', 'Silence'],
    },
    'it': {
      name: 'La Papessa',
      upright: 'Intuizione profonda, mistero, saggezza interiore, conoscenza spirituale.',
      reversed: 'Segreti svelati, disconnessione intuitiva, ipocrisia, superficialità.',
      keywords: ['Intuizione', 'Mistero', 'Saggezza', 'Silenzio'],
    },
    'de': {
      name: 'Die Hohepriesterin',
      upright: 'Intuition, inneres Wissen, Geheimnis, das göttlich Weibliche und Stille.',
      reversed: 'Offenbarte Geheimnisse, getrübte Intuition, emotionale Distanz.',
      keywords: ['Intuition', 'Geheimnis', 'Weisheit', 'Stille'],
    },
  },
  major_3: {
    'pt-BR': {
      name: 'A Imperatriz',
      upright: 'Abundância, fertilidade, nutrição, amor compassivo, beleza e criatividade fecunda.',
      reversed: 'Bloqueio criativo, dependência, sufocamento emocional, negligência pessoal.',
      keywords: ['Abundância', 'Fertilidade', 'Nutrição', 'Amor'],
    },
    'en': {
      name: 'The Empress',
      upright: 'Abundance, fertility, nurturing, unconditional love, nature, creative fruition.',
      reversed: 'Creative block, over-dependence, smothering love, neglect of self-care.',
      keywords: ['Abundance', 'Fertility', 'Nurturing', 'Love'],
    },
    'es': {
      name: 'La Emperatriz',
      upright: 'Abundancia, fertilidad, nutrición, belleza, maternidad y gracia creativa.',
      reversed: 'Bloqueo creativo, dependencia afectiva, descuido personal o tiranía doméstica.',
      keywords: ['Abundancia', 'Fertilidad', 'Nutrición', 'Belleza'],
    },
    'fr': {
      name: 'L\'Impératrice',
      upright: 'Abondance, fertilité, créativité, générosité maternelle, grâce et beauté.',
      reversed: 'Blocage créatif, étouffement affectif, négligence de soi, futilité.',
      keywords: ['Abondance', 'Fertilité', 'Créativité', 'Amour'],
    },
    'it': {
      name: 'L\'Imperatrice',
      upright: 'Abbondanza, fertilità, cura materna, bellezza, armonia e fioritura creativa.',
      reversed: 'Blocco creativo, soffocamento emotivo, trascuratezza, dipendenza.',
      keywords: ['Abbondanza', 'Fertilità', 'Nutrizione', 'Amore'],
    },
    'de': {
      name: 'Die Herrscherin',
      upright: 'Fülle, Fruchtbarkeit, Mütterlichkeit, Naturverbundenheit und Kreativität.',
      reversed: 'Kreative Blockade, Überfürsorglichkeit, Vernachlässigung der eigenen Bedürfnisse.',
      keywords: ['Fülle', 'Fruchtbarkeit', 'Liebe', 'Wachstum'],
    },
  },
  major_4: {
    'pt-BR': {
      name: 'O Imperador',
      upright: 'Estrutura, autoridade justa, liderança estável, disciplina e proteção sólida.',
      reversed: 'Tirania, rigidez excessiva, falta de disciplina, controle obsessivo.',
      keywords: ['Estrutura', 'Autoridade', 'Ordem', 'Estabilidade'],
    },
    'en': {
      name: 'The Emperor',
      upright: 'Authority, structure, established order, reliable leadership, solid foundation.',
      reversed: 'Tyranny, excessive rigidity, abuse of power, lack of self-discipline.',
      keywords: ['Structure', 'Authority', 'Order', 'Stability'],
    },
    'es': {
      name: 'El Emperador',
      upright: 'Autoridad, orden, liderazgo firme, estructura sólida y disciplina.',
      reversed: 'Tiranía, terquedad, abuso de poder o falta de control propio.',
      keywords: ['Estructura', 'Autoridad', 'Orden', 'Estabilidad'],
    },
    'fr': {
      name: 'L\'Empereur',
      upright: 'Autorité, structure solide, ordre, stabilité, maîtrise et protection.',
      reversed: 'Autoritarisme, rigidité, tyrannie, perte d\'autonomie ou de repères.',
      keywords: ['Structure', 'Autorité', 'Ordre', 'Stabilité'],
    },
    'it': {
      name: 'L\'Imperatore',
      upright: 'Autorità, ordine, fermezza, leadership protettiva e stabilità.',
      reversed: 'Autoritarismo, intransigenza, abuso di controllo, anarchia.',
      keywords: ['Struttura', 'Autorità', 'Ordine', 'Stabilità'],
    },
    'de': {
      name: 'Der Herrscher',
      upright: 'Struktur, feste Ordnung, Führungsstärke, Disziplin und Stabilität.',
      reversed: 'Tyrannei, Starrheit, Kontrollsucht oder mangelnde Selbstdisziplin.',
      keywords: ['Struktur', 'Autorität', 'Ordnung', 'Stabilität'],
    },
  },
  major_5: {
    'pt-BR': {
      name: 'O Hierofante',
      upright: 'Tradição, mentoria espiritual, instituições sábias, aprendizado e ética superior.',
      reversed: 'Dogmatismo cego, rebeldia necessária, hipocrisia institucional, ortodoxia.',
      keywords: ['Tradição', 'Ensino', 'Espiritualidade', 'Ética'],
    },
    'en': {
      name: 'The Hierophant',
      upright: 'Spiritual wisdom, religious or cultural traditions, mentorship, higher ethics.',
      reversed: 'Rebellion, subverting dogmas, institutional hypocrisy, personal belief.',
      keywords: ['Tradition', 'Mentorship', 'Wisdom', 'Ethics'],
    },
    'es': {
      name: 'El Sumo Sacerdote',
      upright: 'Tradición espiritual, guía moral, mentoría, estudio y principios compartidos.',
      reversed: 'Dogmatismo, rebelión, cuestionamiento de normas, hipocresía.',
      keywords: ['Tradición', 'Mentoría', 'Ética', 'Enseñanza'],
    },
    'fr': {
      name: 'Le Pape',
      upright: 'Sagesse spirituelle, transmission, conseil avisé, enseignement et morale.',
      reversed: 'Dogmatisme étouffant, non-conformisme, rupture avec les traditions.',
      keywords: ['Tradition', 'Transmission', 'Sagesse', 'Éthique'],
    },
    'it': {
      name: 'Il Papa',
      upright: 'Spiritualità, guida saggia, rispetto delle tradizioni, etica e apprendimento.',
      reversed: 'Dogmatismo, ipocrisia, ribellione a regole ingiuste, rottura di schemi.',
      keywords: ['Tradizione', 'Guida', 'Spiritualità', 'Etica'],
    },
    'de': {
      name: 'Der Hierophant',
      upright: 'Spirituelle Weisheit, Tradition, Lehre, moralische Werte und Mentorenschaft.',
      reversed: 'Dogmatismus, blinder Gehorsam, Rebellion, Suche nach eigenem Glauben.',
      keywords: ['Tradition', 'Weisheit', 'Ethik', 'Lehre'],
    },
  },
  major_6: {
    'pt-BR': {
      name: 'Os Enamorados',
      upright: 'Amor verdadeiro, escolhas do coração, harmonia, alinhamento de valores e união.',
      reversed: 'Conflito de valores, indecisão dolorosa, desarmonia, tentação irrefletida.',
      keywords: ['Amor', 'Escolha', 'União', 'Harmonia'],
    },
    'en': {
      name: 'The Lovers',
      upright: 'True love, alignment of core values, heartfelt choices, deep harmony and union.',
      reversed: 'Disharmony, misalignment of values, indecision, moral struggle.',
      keywords: ['Love', 'Choice', 'Union', 'Harmony'],
    },
    'es': {
      name: 'Los Enamorados',
      upright: 'Amor auténtico, elección desde el corazón, unión sagrada y coherencia ética.',
      reversed: 'Desarmonía, dilema moral, conflicto interno o decisiones impulsivas.',
      keywords: ['Amor', 'Elección', 'Unión', 'Armonía'],
    },
    'fr': {
      name: 'L\'Amoureux',
      upright: 'Amour profond, choix du cœur, communion, harmonie et engagement mutuel.',
      reversed: 'Dilemme douloureux, tentation coupable, désunion, hésitation stérile.',
      keywords: ['Amour', 'Choix', 'Union', 'Harmonie'],
    },
    'it': {
      name: 'Gli Amanti',
      upright: 'Amore autentico, scelta del cuore, unione sacra e armonia relazionale.',
      reversed: 'Conflitto interiore, indecisione fatale, rottura o disallineamento.',
      keywords: ['Amore', 'Scelta', 'Unione', 'Armonia'],
    },
    'de': {
      name: 'Die Liebenden',
      upright: 'Wahre Liebe, Herzensentscheidungen, tiefe Verbundenheit und Werteharmonie.',
      reversed: 'Zerrissenheit, Unentschlossenheit, Konflikte, schmerzhafter Zweifel.',
      keywords: ['Liebe', 'Wahl', 'Verbindung', 'Harmonie'],
    },
  },
  major_7: {
    'pt-BR': {
      name: 'O Carro',
      upright: 'Vitória pela determinação, foco, superação de adversidades e autodomínio.',
      reversed: 'Perda de controle, agressividade desmedida, direção errática, pressa excessiva.',
      keywords: ['Vitória', 'Foco', 'Determinação', 'Controle'],
    },
    'en': {
      name: 'The Chariot',
      upright: 'Victory through willpower, triumph, determination, steering through challenges.',
      reversed: 'Lack of control, aimlessness, aggression, burnout through force.',
      keywords: ['Victory', 'Willpower', 'Triumph', 'Focus'],
    },
    'es': {
      name: 'El Carro',
      upright: 'Victoria, determinación, avance imparable y superación de obstáculos.',
      reversed: 'Pérdida de rumbo, arrogancia, descontrol o choque frontal.',
      keywords: ['Victoria', 'Enfoque', 'Avance', 'Control'],
    },
    'fr': {
      name: 'Le Chariot',
      upright: 'Victoire, maîtrise des forces opposées, avancement rapide et triomphe.',
      reversed: 'Perte de contrôle, précipitation aveugle, déroute ou agressivité.',
      keywords: ['Victoire', 'Détermination', 'Triomphe', 'Maîtrise'],
    },
    'it': {
      name: 'Il Carro',
      upright: 'Vittoria per perseveranza, guida decisa, trionfo sulle difficoltà.',
      reversed: 'Perdita di redini, collera cieca, stallo o direzione confusa.',
      keywords: ['Vittoria', 'Volontà', 'Focus', 'Controllo'],
    },
    'de': {
      name: 'Der Wagen',
      upright: 'Triumph durch Willenskraft, Entschlossenheit, Zielstrebigkeit und Durchbruch.',
      reversed: 'Kontrollverlust, Überheblichkeit, Richtungsstreit, Stillstand.',
      keywords: ['Sieg', 'Fokus', 'Entschlossenheit', 'Vorwärts'],
    },
  },
  major_8: {
    'pt-BR': {
      name: 'A Força',
      upright: 'Coragem compassiva, domínio suave dos instintos, paciência e força moral.',
      reversed: 'Insegurança interior, vulnerabilidade ao medo, agressividade ou fraqueza.',
      keywords: ['Coragem', 'Compaixão', 'Paciência', 'Poder Suave'],
    },
    'en': {
      name: 'Strength',
      upright: 'Gentle courage, patience, compassion, overcoming instinct with love.',
      reversed: 'Self-doubt, inner weakness, raw aggression, letting fear take over.',
      keywords: ['Courage', 'Patience', 'Compassion', 'Grace'],
    },
    'es': {
      name: 'La Fuerza',
      upright: 'Coraje, paciencia infinita, autodominio amoroso y resistencia moral.',
      reversed: 'Inseguridad, impaciencia, sumisión al miedo o agresión defensiva.',
      keywords: ['Coraje', 'Paciencia', 'Compasión', 'Firmeza'],
    },
    'fr': {
      name: 'La Force',
      upright: 'Courage bienveillant, maîtrise des instincts, endurance morale et douceur.',
      reversed: 'Doute de soi, faiblesse passagère, emportement brutal, peur paralysante.',
      keywords: ['Courage', 'Patience', 'Compassion', 'Maîtrise'],
    },
    'it': {
      name: 'La Forza',
      upright: 'Coraggio calmo, dolcezza che doma gli istinti, pazienza e valore morale.',
      reversed: 'Insicurezza, resa alla paura, prepotenza o collasso emotivo.',
      keywords: ['Coraggio', 'Pazienza', 'Compassione', 'Grazia'],
    },
    'de': {
      name: 'Die Kraft',
      upright: 'Sanfter Mut, Geduld, Bändigung der Triebe durch Liebe und seelische Stärke.',
      reversed: 'Selbstzweifel, Ohnmachtsgefühl, Aggression aus Angst.',
      keywords: ['Mut', 'Geduld', 'Sanftmut', 'Stärke'],
    },
  },
  major_9: {
    'pt-BR': {
      name: 'O Eremita',
      upright: 'Introspecção iluminadora, busca da verdade, recolhimento sábio e autoconhecimento.',
      reversed: 'Isolamento amargo, solidão prejudicial, fuga do mundo, reclusão estéril.',
      keywords: ['Introspecção', 'Luz Interior', 'Sabedoria', 'Busca'],
    },
    'en': {
      name: 'The Hermit',
      upright: 'Soul-searching, introspection, inner guidance, solitude, seeking authentic truth.',
      reversed: 'Loneliness, harmful isolation, withdrawing from reality, lost in cynicism.',
      keywords: ['Introspection', 'Solitude', 'Wisdom', 'Truth'],
    },
    'es': {
      name: 'El Ermitaño',
      upright: 'Búsqueda interior, guía luminosa, reflexión profunda y sabiduría madura.',
      reversed: 'Aislamiento doloroso, encierro excesivo, soledad estéril o terquedad.',
      keywords: ['Introspección', 'Soledad', 'Sabiduría', 'Verdad'],
    },
    'fr': {
      name: 'L\'Hermite',
      upright: 'Introspection, quête de vérité, lumière intérieure, recueillement et sagesse.',
      reversed: 'Solitude pesante, isolement stérile, fermeture au monde, repli excessif.',
      keywords: ['Introspection', 'Solitude', 'Sagesse', 'Vérité'],
    },
    'it': {
      name: 'L\'Eremita',
      upright: 'Riflessione interiore, ricerca della verità, luce della saggezza e guida morale.',
      reversed: 'Isolamento amaro, solitudine soffocante, rifiuto di aiuto, cinismo.',
      keywords: ['Introspezione', 'Solitudine', 'Saggezza', 'Verità'],
    },
    'de': {
      name: 'Der Eremit',
      upright: 'Innere Einkehr, Selbsterkenntnis, Seelensuche, Weisheit und innere Erleuchtung.',
      reversed: 'Verbitterte Einsamkeit, soziale Isolation, Flucht vor der Wirklichkeit.',
      keywords: ['Einkehr', 'Erkenntnis', 'Stille', 'Weisheit'],
    },
  },
  major_10: {
    'pt-BR': {
      name: 'A Roda da Fortuna',
      upright: 'Ciclos da vida, destino, virada favorável, karma e oportunidades inesperadas.',
      reversed: 'Má sorte temporária, resistência às mudanças, ciclos repetitivos indesejados.',
      keywords: ['Ciclos', 'Destino', 'Evolução', 'Mudança'],
    },
    'en': {
      name: 'Wheel of Fortune',
      upright: 'Cycles of destiny, turning points, good fortune, karma, inevitable evolution.',
      reversed: 'Bad luck, resistance to change, repeating negative cycles, lack of control.',
      keywords: ['Cycles', 'Destiny', 'Change', 'Luck'],
    },
    'es': {
      name: 'La Rueda de la Fortuna',
      upright: 'Ciclos vitales, destino favorable, giro positivo y lecciones kármicas.',
      reversed: 'Racha desfavorable, resistencia al cambio, tropiezo o ciclo repetitivo.',
      keywords: ['Ciclos', 'Destino', 'Cambio', 'Fortuna'],
    },
    'fr': {
      name: 'La Roue de Fortune',
      upright: 'Cycles cosmiques, tournant décisif, opportunités, karma et évolution.',
      reversed: 'Revers de fortune temporaire, résistance au changement, cycles vicieux.',
      keywords: ['Cycles', 'Destin', 'Changement', 'Chance'],
    },
    'it': {
      name: 'La Ruota della Fortuna',
      upright: 'Cicli cosmici, svolta fortunata, destino, opportunità e movimento karmico.',
      reversed: 'Contrattempo transitorio, resistenza al flusso, ripetizione di errori.',
      keywords: ['Cicli', 'Destino', 'Svolta', 'Fortuna'],
    },
    'de': {
      name: 'Das Rad des Schicksals',
      upright: 'Lebenszyklen, Wendepunkt zum Guten, Schicksalsfügung, Karma und Chance.',
      reversed: 'Pechsträhne, Widerstand gegen den Wandel, Gefangensein in alten Mustern.',
      keywords: ['Zyklen', 'Schicksal', 'Wandel', 'Glück'],
    },
  },
  major_11: {
    'pt-BR': {
      name: 'A Justiça',
      upright: 'Verdade, clareza, imparcialidade, causa e efeito, decisões justas e integridade.',
      reversed: 'Injustiça, desonestidade, julgamento parcial, falta de responsabilidade.',
      keywords: ['Justiça', 'Verdade', 'Equilíbrio', 'Integridade'],
    },
    'en': {
      name: 'Justice',
      upright: 'Fairness, truth, law of cause and effect, clear judgment, moral clarity.',
      reversed: 'Injustice, dishonesty, unfair blame, refusal of accountability.',
      keywords: ['Fairness', 'Truth', 'Clarity', 'Integrity'],
    },
    'es': {
      name: 'La Justicia',
      upright: 'Equidad, verdad, honestidad, causa y efecto, balance y justicia ética.',
      reversed: 'Injusticia, parcialidad, evasión de responsabilidad, falsedad.',
      keywords: ['Justicia', 'Verdad', 'Equilibrio', 'Claridad'],
    },
    'fr': {
      name: 'La Justice',
      upright: 'Équité, vérité, loi de cause à effet, clarté d\'esprit et rectitude.',
      reversed: 'Injustice, malhonnêteté, parti pris injuste, déni de responsabilité.',
      keywords: ['Justice', 'Vérité', 'Équilibre', 'Clarté'],
    },
    'it': {
      name: 'La Giustizia',
      upright: 'Equità, verità, legge di causa ed effetto, equilibrio e giudizio integro.',
      reversed: 'Ingiustizia, favoritismo, disonestà, fuga dalle responsabilità.',
      keywords: ['Giustizia', 'Verità', 'Equilibrio', 'Chiarezza'],
    },
    'de': {
      name: 'Die Gerechtigkeit',
      upright: 'Fairness, Wahrheit, Ursache und Wirkung, Rechtschaffenheit und Klarheit.',
      reversed: 'Ungerechtigkeit, Voreingenommenheit, Verleugnung von Verantwortung.',
      keywords: ['Gerechtigkeit', 'Wahrheit', 'Klarheit', 'Balance'],
    },
  },
  major_12: {
    'pt-BR': {
      name: 'O Enforcado',
      upright: 'Pausa voluntária, nova perspectiva, entrega, desapego e sabedoria na espera.',
      reversed: 'Estagnação inútil, vitimismo, resistência em ceder, sacrifício em vão.',
      keywords: ['Perspectiva', 'Pausa', 'Entrega', 'Desapego'],
    },
    'en': {
      name: 'The Hanged Man',
      upright: 'Surrender, new perspective, pausing, spiritual release, letting go.',
      reversed: 'Senseless sacrifice, stagnation, victim mentality, resisting the flow.',
      keywords: ['Perspective', 'Surrender', 'Pause', 'Release'],
    },
    'es': {
      name: 'El Colgado',
      upright: 'Nueva perspectiva, pausa reflexiva, entrega, desapego y sacrificio consciente.',
      reversed: 'Estancamiento, victimismo, resistencia testaruda, pérdida de tiempo.',
      keywords: ['Perspectiva', 'Pausa', 'Entrega', 'Desapego'],
    },
    'fr': {
      name: 'Le Pendu',
      upright: 'Lâcher-prise, nouveau regard sur les choses, pause féconde, don de soi.',
      reversed: 'Stagnation inutile, posture de victime, sacrifice vain, obstination.',
      keywords: ['Perspective', 'Pause', 'Lâcher-prise', 'Don'],
    },
    'it': {
      name: 'L\'Appeso',
      upright: 'Nuova prospettiva, sosta contemplativa, resa benefica, distacco sereno.',
      reversed: 'Stasi forzata, vittimismo, sacrificio sterile, incapacità di cedere.',
      keywords: ['Prospettiva', 'Pausa', 'Resa', 'Distacco'],
    },
    'de': {
      name: 'Der Gehängte',
      upright: 'Loslassen, Perspektivenwechsel, bewusste Ruhepause, innere Hingabe.',
      reversed: 'Stillstand, Opferrolle, vergebliches Ausharren, Starrsinn.',
      keywords: ['Perspektive', 'Hingabe', 'Pause', 'Loslassen'],
    },
  },
  major_13: {
    'pt-BR': {
      name: 'A Morte',
      upright: 'Fim de ciclo inevitável, profunda transformação, renascimento e libertação do velho.',
      reversed: 'Resistência dolorosa ao término, medo de mudar, apego ao passado morto.',
      keywords: ['Transformação', 'Renascimento', 'Fim de Ciclo', 'Renovação'],
    },
    'en': {
      name: 'Death',
      upright: 'End of a cycle, profound transformation, metamorphosis, clearing space for new life.',
      reversed: 'Fear of change, lingering in the past, resisting inevitable endings, decay.',
      keywords: ['Transformation', 'Rebirth', 'Closure', 'Transition'],
    },
    'es': {
      name: 'La Muerte',
      upright: 'Cierre de ciclo, profunda transformación, renacer, despedida de lo obsoleto.',
      reversed: 'Resistencia a cambiar, miedo a soltar, estancamiento en un duelo.',
      keywords: ['Transformación', 'Renacimiento', 'Cierre', 'Renovación'],
    },
    'fr': {
      name: 'La Mort',
      upright: 'Fin de cycle incontournable, transformation profonde, renaissance et métamorphose.',
      reversed: 'Peur viscérale du changement, refus de faire son deuil, inertie.',
      keywords: ['Transformation', 'Renaissance', 'Clôture', 'Renouveau'],
    },
    'it': {
      name: 'La Morte',
      upright: 'Fine ciclo ineluttabile, profonda trasformazione, rinascita e liberazione del nuovo.',
      reversed: 'Resistenza al mutamento, terrore della fine, attaccamento a ciò che è spento.',
      keywords: ['Trasformazione', 'Rinascita', 'Conclusione', 'Rinnovamento'],
    },
    'de': {
      name: 'Der Tod',
      upright: 'Abschluss eines Zyklus, tiefe Wandlung, Erneuerung, Raum für Neues.',
      reversed: 'Klammern an die Vergangenheit, Angst vor Veränderung, Stillstand.',
      keywords: ['Wandel', 'Neugeburt', 'Abschluss', 'Erneuerung'],
    },
  },
  major_14: {
    'pt-BR': {
      name: 'A Temperança',
      upright: 'Equilíbrio, moderação, cura, harmonia cósmica, síntese de opostos e paciência.',
      reversed: 'Excessos desmedidos, desarmonia interior, impaciência, conflitos de extremos.',
      keywords: ['Equilíbrio', 'Cura', 'Moderação', 'Harmonia'],
    },
    'en': {
      name: 'Temperance',
      upright: 'Balance, moderation, patience, spiritual healing, synthesizing dualities.',
      reversed: 'Imbalance, excess, extreme friction, lack of patience or foresight.',
      keywords: ['Balance', 'Healing', 'Moderation', 'Patience'],
    },
    'es': {
      name: 'La Templanza',
      upright: 'Equilibrio sereno, sanación, paciencia, moderación y unión armónica.',
      reversed: 'Extremos nocivos, impaciencia, falta de moderación, discordia.',
      keywords: ['Equilibrio', 'Sanación', 'Moderación', 'Paciencia'],
    },
    'fr': {
      name: 'Tempérance',
      upright: 'Harmonie, guérison, équilibre subtil, modération et réconciliation des contraires.',
      reversed: 'Excès, désaccord intérieur, précipitation néfaste, rupture d\'équilibre.',
      keywords: ['Équilibre', 'Guérison', 'Modération', 'Patience'],
    },
    'it': {
      name: 'La Temperanza',
      upright: 'Equilibrio, moderazione, guarigione interiore, pazienza e fusione armoniosa.',
      reversed: 'Intemperanza, sregolatezza, contrasti insanabili, fretta dannosa.',
      keywords: ['Equilibrio', 'Guarigione', 'Moderazione', 'Armonia'],
    },
    'de': {
      name: 'Die Mäßigkeit',
      upright: 'Ausgleich, Heilung, Geduld, Maßhalten und Vereinigung der Gegensätze.',
      reversed: 'Zügellosigkeit, Extremismus, innere Unruhe, Ungeduld.',
      keywords: ['Balance', 'Heilung', 'Geduld', 'Einklang'],
    },
  },
  major_15: {
    'pt-BR': {
      name: 'O Diabo',
      upright: 'Confronto com as sombras, apegos tóxicos, ilusão de aprisionamento, desejos materiais.',
      reversed: 'Quebra de correntes, libertação de vícios, despertar da consciência, redenção.',
      keywords: ['Sombra', 'Apego', 'Libertação', 'Ilusão'],
    },
    'en': {
      name: 'The Devil',
      upright: 'Shadow work, toxic bonds, material obsession, feeling entrapped by illusion.',
      reversed: 'Breaking free from chains, overcoming addiction, releasing control, awakening.',
      keywords: ['Shadow', 'Attachment', 'Release', 'Freedom'],
    },
    'es': {
      name: 'El Diablo',
      upright: 'Enfrentar la sombra, ataduras obsesivas, espejismo material y dependencias.',
      reversed: 'Ruptura de cadenas, liberación de adicciones, emancipación y lucidez.',
      keywords: ['Sombra', 'Atadura', 'Liberación', 'Poder'],
    },
    'fr': {
      name: 'Le Diable',
      upright: 'Affrontement de l\'ombre, attachements toxiques, illusions matérielles, passions.',
      reversed: 'Briser ses chaînes, émancipation, sortie d\'addiction, reprise en main.',
      keywords: ['Ombre', 'Attachement', 'Délivrance', 'Passion'],
    },
    'it': {
      name: 'Il Diavolo',
      upright: 'Lavoro sull\'ombra, catene interiori, avidità, illusioni e dipendenze oscure.',
      reversed: 'Spezzare le catene, superare le dipendenze, risveglio e liberazione.',
      keywords: ['Ombra', 'Attaccamento', 'Liberazione', 'Passione'],
    },
    'de': {
      name: 'Der Teufel',
      upright: 'Schattenseiten, ungesunde Bindungen, materielle Abhängigkeiten, Täuschung.',
      reversed: 'Befreiung von Fesseln, Überwindung von Sucht, seelisches Erwachen.',
      keywords: ['Schatten', 'Bindung', 'Befreiung', 'Erwachen'],
    },
  },
  major_16: {
    'pt-BR': {
      name: 'A Torre',
      upright: 'Ruptura súbita, desmoronamento de ilusões, revelação chocante, catarse necessária.',
      reversed: 'Atraso na catástrofe inevitável, medo da verdade, reconstrução dolorosa.',
      keywords: ['Ruptura', 'Revelação', 'Despertar', 'Catarse'],
    },
    'en': {
      name: 'The Tower',
      upright: 'Sudden upheaval, shattering illusions, truth revealed like lightning, breakthrough.',
      reversed: 'Averting disaster narrowly, fear of collapse, delaying necessary breakdown.',
      keywords: ['Upheaval', 'Truth', 'Awakening', 'Breakthrough'],
    },
    'es': {
      name: 'La Torre',
      upright: 'Derrumbe de falsedades, catarsis inesperada, rayo de claridad y cambio abrupto.',
      reversed: 'Evitar el colapso por poco, miedo al cambio, retrasar lo inevitable.',
      keywords: ['Ruptura', 'Verdad', 'Catarsis', 'Revelación'],
    },
    'fr': {
      name: 'La Maison Dieu',
      upright: 'Effondrement des faux repères, choc libérateur, illumination foudroyante.',
      reversed: 'Catastrophe évitée de justesse, peur de la chute, résistance inutile.',
      keywords: ['Rupture', 'Vérité', 'Éveil', 'Catharsis'],
    },
    'it': {
      name: 'La Torre',
      upright: 'Crollo delle illusioni, scossa rivelatrice, purificazione improvvisa e verità.',
      reversed: 'Disastro schivato per poco, paura della caduta, prolungamento dell\'agonia.',
      keywords: ['Crollo', 'Verità', 'Risveglio', 'Catarsi'],
    },
    'de': {
      name: 'Der Turm',
      upright: 'Plötzlicher Umbruch, Einsturz von Illusionen, kathartische Befreiung, Wahrheit.',
      reversed: 'Hinauszögern des Unausweichlichen, Furcht vor dem Wandel, Schock.',
      keywords: ['Umbruch', 'Wahrheit', 'Befreiung', 'Erwachen'],
    },
  },
  major_17: {
    'pt-BR': {
      name: 'A Estrela',
      upright: 'Esperança renovada, fé serena, inspiração espiritual, cura profunda e otimismo.',
      reversed: 'Desânimo temporário, pessimismo, perda de fé nas próprias bênçãos.',
      keywords: ['Esperança', 'Fé', 'Cura', 'Inspiração'],
    },
    'en': {
      name: 'The Star',
      upright: 'Renewed hope, peace, divine inspiration, deep healing, faith in destiny.',
      reversed: 'Despair, loss of faith, discouragement, pessimism regarding the future.',
      keywords: ['Hope', 'Faith', 'Healing', 'Peace'],
    },
    'es': {
      name: 'La Estrella',
      upright: 'Esperanza radiante, fe renovada, serenidad, sanación e inspiración bendecida.',
      reversed: 'Desánimo pasajero, falta de fe, pesimismo o desconexión espiritual.',
      keywords: ['Esperanza', 'Fe', 'Sanación', 'Luz'],
    },
    'fr': {
      name: 'L\'Étoile',
      upright: 'Espérance, paix intérieure, inspiration divine, guérison et confiance sereine.',
      reversed: 'Doute, découragement passager, perte d\'espoir ou manque de gratitude.',
      keywords: ['Espoir', 'Foi', 'Guérison', 'Lumière'],
    },
    'it': {
      name: 'Le Stelle',
      upright: 'Speranza rinnovata, fede pura, serenità, guarigione e orizzonti luminosi.',
      reversed: 'Sconforto, perdita di ottimismo, cinismo, chiusura alla bellezza.',
      keywords: ['Speranza', 'Fede', 'Guarigione', 'Luce'],
    },
    'de': {
      name: 'Der Stern',
      upright: 'Neue Hoffnung, Seelenfrieden, Inspiration, Heilung und Licht am Horizont.',
      reversed: 'Entmutigung, Hoffnungslosigkeit, Zweifel an der göttlichen Führung.',
      keywords: ['Hoffnung', 'Frieden', 'Heilung', 'Licht'],
    },
  },
  major_18: {
    'pt-BR': {
      name: 'A Lua',
      upright: 'Intuição misteriosa, sonhos vívidos, ilusão a desvendar, medos subconscientes.',
      reversed: 'Superação de medos, dissipação de névoas, verdade que emerge das sombras.',
      keywords: ['Mistério', 'Sonhos', 'Inconsciente', 'Ilusão'],
    },
    'en': {
      name: 'The Moon',
      upright: 'Subconscious depth, vivid dreams, navigating illusions, facing hidden fears.',
      reversed: 'Clarity breaking through mist, overcoming anxiety, truth revealed.',
      keywords: ['Mystery', 'Dreams', 'Intuition', 'Unconscious'],
    },
    'es': {
      name: 'La Luna',
      upright: 'Misterio nocturno, sueños reveladores, confusión temporal e intuición pura.',
      reversed: 'Disipación de la niebla, alivio de ansiedades, superación del engaño.',
      keywords: ['Misterio', 'Sueños', 'Inconsciente', 'Ilusión'],
    },
    'fr': {
      name: 'La Lune',
      upright: 'Profondeur psychique, rêves prémonitoires, illusions à percer, mystère.',
      reversed: 'Dissipation des doutes, fin des faux-semblants, apaisement de l\'angoisse.',
      keywords: ['Mystère', 'Rêves', 'Inconscient', 'Intuition'],
    },
    'it': {
      name: 'La Luna',
      upright: 'Mistero, mondo dei sogni, paure recondite, intuizione tra le nebbie.',
      reversed: 'Chiarezza che dissolve l\'ansia, fine degli inganni, serenità ritrovata.',
      keywords: ['Mistero', 'Sogni', 'Inconscio', 'Intuizione'],
    },
    'de': {
      name: 'Der Mond',
      upright: 'Seelentiefe, Träume, Auseinandersetzung mit Ängsten, Ahnungen und Geheimnis.',
      reversed: 'Lichtung des Nebels, Überwindung von Ängsten, Wahrheit tritt hervor.',
      keywords: ['Geheimnis', 'Träume', 'Ahnung', 'Seele'],
    },
  },
  major_19: {
    'pt-BR': {
      name: 'O Sol',
      upright: 'Alegria radiante, clareza absoluta, vitalidade, sucesso brilhante e celebração.',
      reversed: 'Otimismo excessivo ou nublado, demora no reconhecimento, alegria tímida.',
      keywords: ['Alegria', 'Sucesso', 'Vitalidade', 'Clareza'],
    },
    'en': {
      name: 'The Sun',
      upright: 'Radiant joy, absolute clarity, vitality, triumph, warmth and celebration.',
      reversed: 'Temporary cloudiness, delayed recognition, dimmed optimism, overconfidence.',
      keywords: ['Joy', 'Success', 'Vitality', 'Clarity'],
    },
    'es': {
      name: 'El Sol',
      upright: 'Alegría desbordante, éxito radiante, vitalidad, claridad y celebración.',
      reversed: 'Optimismo algo ensombrecido, retraso en el éxito, egocentrismo.',
      keywords: ['Alegría', 'Éxito', 'Vitalidad', 'Luz'],
    },
    'fr': {
      name: 'Le Soleil',
      upright: 'Joie éclatante, clarté triomphante, vitalité, succès généreux et plénitude.',
      reversed: 'Joie voilée, retard dans la reconnaissance, excès d\'orgueil.',
      keywords: ['Joie', 'Succès', 'Vitalité', 'Clarté'],
    },
    'it': {
      name: 'Il Sole',
      upright: 'Gioia radiosa, chiarezza assoluta, calore, trionfo solare e vitalità pura.',
      reversed: 'Ottimismo temporaneamente offuscato, ritardo nel successo, vanità.',
      keywords: ['Gioia', 'Successo', 'Vitalità', 'Luce'],
    },
    'de': {
      name: 'Die Sonne',
      upright: 'Strahlende Freude, Klarheit, Lebenskraft, Erfolg und innere Wärme.',
      reversed: 'Vorübergehend getrübte Freude, verzögerter Erfolg, Selbstgefälligkeit.',
      keywords: ['Freude', 'Erfolg', 'Lebenskraft', 'Klarheit'],
    },
  },
  major_20: {
    'pt-BR': {
      name: 'O Julgamento',
      upright: 'Despertar espiritual, chamado da alma, redenção, perdão e novo renascimento.',
      reversed: 'Dúvidas paralisantes, autocrítica implacável, fuga do próprio propósito.',
      keywords: ['Despertar', 'Chamado', 'Redenção', 'Renascimento'],
    },
    'en': {
      name: 'Judgement',
      upright: 'Spiritual rebirth, soul calling, reckoning, redemption, absolution.',
      reversed: 'Self-doubt, harsh inner critic, ignoring the soul\'s calling, regret.',
      keywords: ['Rebirth', 'Calling', 'Redemption', 'Awakening'],
    },
    'es': {
      name: 'El Juicio',
      upright: 'Despertar del alma, llamado interior, perdón, redención y renacimiento.',
      reversed: 'Dudas internas, juicio severo contra uno mismo, ignorar la llamada.',
      keywords: ['Despertar', 'Llamado', 'Redención', 'Perdón'],
    },
    'fr': {
      name: 'Le Jugement',
      upright: 'Éveil spirituel, vocation de l\'âme, pardon libérateur, renaissance.',
      reversed: 'Doutes invalidants, autoflagellation, refus d\'entendre son appel.',
      keywords: ['Éveil', 'Vocation', 'Renaissance', 'Pardon'],
    },
    'it': {
      name: 'Il Giudizio',
      upright: 'Risveglio dell\'anima, chiamata interiore, perdono redentore e rinascita.',
      reversed: 'Dubbi paralizzanti, severità spietata verso se stessi, rimorso.',
      keywords: ['Risveglio', 'Chiamata', 'Redenzione', 'Rinascita'],
    },
    'de': {
      name: 'Das Gericht',
      upright: 'Spirituelles Erwachen, Seelenruf, Vergebung, Erlösung und Neugeburt.',
      reversed: 'Zweifel, harte Selbstkritik, Weigerung dem Ruf der Seele zu folgen.',
      keywords: ['Erwachen', 'Berufung', 'Erlösung', 'Neubeginn'],
    },
  },
  major_21: {
    'pt-BR': {
      name: 'O Mundo',
      upright: 'Realização total, completude cósmica, triunfo, integração e encerramento triunfal.',
      reversed: 'Pequenos detalhes pendentes, sensação de incompletude, atraso na coroação.',
      keywords: ['Completude', 'Realização', 'Triunfo', 'Integração'],
    },
    'en': {
      name: 'The World',
      upright: 'Cosmic completion, wholeness, fulfillment, ultimate celebration and mastery.',
      reversed: 'Incompletion, missing closure, delayed culmination, near the finish line.',
      keywords: ['Completion', 'Wholeness', 'Fulfillment', 'Victory'],
    },
    'es': {
      name: 'El Mundo',
      upright: 'Realización absoluta, plenitud cósmica, culminación exitosa e integración.',
      reversed: 'Asunto pendiente por cerrar, retraso en el éxito, falta de cierre.',
      keywords: ['Plenitud', 'Éxito', 'Culminación', 'Victoria'],
    },
    'fr': {
      name: 'Le Monde',
      upright: 'Accomplissement total, plénitude, triomphe harmonieux et couronnement.',
      reversed: 'Inachèvement temporaire, boucle non bouclée, manque de conclusion.',
      keywords: ['Accomplissement', 'Plénitude', 'Victoire', 'Totalité'],
    },
    'it': {
      name: 'Il Mondo',
      upright: 'Compimento cosmico, pienezza, successo totale, armonia e trionfo finale.',
      reversed: 'Incompletezza temporanea, ritardo nella chiusura, mancato traguardo.',
      keywords: ['Compimento', 'Pienezza', 'Trionfo', 'Integrazione'],
    },
    'de': {
      name: 'Die Welt',
      upright: 'Vollendung, Ganzheit, Triumph, Erfüllung und harmonischer Abschluss.',
      reversed: 'Unvollständigkeit, verzögerte Vollendung, offene Rechnungen.',
      keywords: ['Vollendung', 'Erfüllung', 'Ganzheit', 'Sieg'],
    },
  },
};

// Suit translations for Minor Arcana across 6 languages
const SUIT_NAMES: Record<string, Record<SupportedLanguage, string>> = {
  wands: {
    'pt-BR': 'de Paus',
    'en': 'of Wands',
    'es': 'de Bastos',
    'fr': 'de Bâtons',
    'it': 'di Bastoni',
    'de': 'der Stäbe',
  },
  cups: {
    'pt-BR': 'de Copas',
    'en': 'of Cups',
    'es': 'de Copas',
    'fr': 'de Coupes',
    'it': 'di Coppe',
    'de': 'der Kelche',
  },
  swords: {
    'pt-BR': 'de Espadas',
    'en': 'of Swords',
    'es': 'de Espadas',
    'fr': 'd\'Épées',
    'it': 'di Spade',
    'de': 'der Schwerter',
  },
  pentacles: {
    'pt-BR': 'de Ouros',
    'en': 'of Pentacles',
    'es': 'de Oros',
    'fr': 'de Deniers',
    'it': 'di Denari',
    'de': 'der Münzen',
  },
};

const RANK_NAMES: Record<number, Record<SupportedLanguage, string>> = {
  1: { 'pt-BR': 'Ás', 'en': 'Ace', 'es': 'As', 'fr': 'As', 'it': 'Asso', 'de': 'Ass' },
  2: { 'pt-BR': 'Dois', 'en': 'Two', 'es': 'Dos', 'fr': 'Deux', 'it': 'Due', 'de': 'Zwei' },
  3: { 'pt-BR': 'Três', 'en': 'Three', 'es': 'Tres', 'fr': 'Trois', 'it': 'Tre', 'de': 'Drei' },
  4: { 'pt-BR': 'Quatro', 'en': 'Four', 'es': 'Cuatro', 'fr': 'Quatre', 'it': 'Quattro', 'de': 'Vier' },
  5: { 'pt-BR': 'Cinco', 'en': 'Five', 'es': 'Cinco', 'fr': 'Cinq', 'it': 'Cinque', 'de': 'Fünf' },
  6: { 'pt-BR': 'Seis', 'en': 'Six', 'es': 'Seis', 'fr': 'Six', 'it': 'Sei', 'de': 'Sechs' },
  7: { 'pt-BR': 'Sete', 'en': 'Seven', 'es': 'Siete', 'fr': 'Sept', 'it': 'Sette', 'de': 'Sieben' },
  8: { 'pt-BR': 'Oito', 'en': 'Eight', 'es': 'Ocho', 'fr': 'Huit', 'it': 'Otto', 'de': 'Acht' },
  9: { 'pt-BR': 'Nove', 'en': 'Nine', 'es': 'Nueve', 'fr': 'Neuf', 'it': 'Nove', 'de': 'Neun' },
  10: { 'pt-BR': 'Dez', 'en': 'Ten', 'es': 'Diez', 'fr': 'Dix', 'it': 'Dieci', 'de': 'Zehn' },
  11: { 'pt-BR': 'Valete', 'en': 'Page', 'es': 'Sota', 'fr': 'Valet', 'it': 'Fante', 'de': 'Bube' },
  12: { 'pt-BR': 'Cavaleiro', 'en': 'Knight', 'es': 'Caballero', 'fr': 'Cavalier', 'it': 'Cavaliere', 'de': 'Ritter' },
  13: { 'pt-BR': 'Rainha', 'en': 'Queen', 'es': 'Reina', 'fr': 'Reine', 'it': 'Regina', 'de': 'Königin' },
  14: { 'pt-BR': 'Rei', 'en': 'King', 'es': 'Rey', 'fr': 'Roi', 'it': 'Re', 'de': 'König' },
};

// Suit archetypes and esoteric energies
const SUIT_ARCHETYPES: Record<string, Record<SupportedLanguage, { upright: string; reversed: string; kw: string[] }>> = {
  wands: {
    'pt-BR': {
      upright: 'Inspiração ardente, iniciativa vibrante, crescimento, entusiasmo e paixão em ação.',
      reversed: 'Impaciência, frustração, energia dispersa, cansaço ou atrasos em projetos.',
      kw: ['Fogo', 'Paixão', 'Ação', 'Criatividade'],
    },
    'en': {
      upright: 'Fiery inspiration, creative spark, enthusiasm, bold leadership and expansion.',
      reversed: 'Burnout, impatience, scattered energy, delays in ambitious projects.',
      kw: ['Fire', 'Passion', 'Action', 'Creativity'],
    },
    'es': {
      upright: 'Inspiración entusiasta, fuego creativo, liderazgo, pasión y avance enérgico.',
      reversed: 'Impaciencia, dispersión, frustración o sobrecarga de tareas.',
      kw: ['Fuego', 'Pasión', 'Acción', 'Creatividad'],
    },
    'fr': {
      upright: 'Inspiration ardente, étincelle créatrice, courage, passion et élan vital.',
      reversed: 'Épuisement, impatience, dispersion d\'énergie, blocages d\'initiatives.',
      kw: ['Feu', 'Passion', 'Action', 'Créativité'],
    },
    'it': {
      upright: 'Ispirazione ardente, impulso creativo, energia dinamica e leadership attiva.',
      reversed: 'Impazienza, stanchezza, sforzi inconcludenti, dispersione di forze.',
      kw: ['Fuoco', 'Passione', 'Azione', 'Creatività'],
    },
    'de': {
      upright: 'Feurige Inspiration, Schöpferkraft, Tatendrang und leidenschaftliche Expansion.',
      reversed: 'Ungeduld, Verzögerungen, Erschöpfung, ziellose Hektik.',
      kw: ['Feuer', 'Leidenschaft', 'Tatendrang', 'Energie'],
    },
  },
  cups: {
    'pt-BR': {
      upright: 'Amor compassivo, intuição fértil, harmonia emocional, beleza e conexão espiritual.',
      reversed: 'Instabilidade emocional, desilusão, carência afetiva ou sentimentos contidos.',
      kw: ['Água', 'Emoção', 'Amor', 'Intuição'],
    },
    'en': {
      upright: 'Compassionate love, rich emotional connection, intuition, empathy and inner peace.',
      reversed: 'Emotional turbulence, heartache, codependency, suppressed feelings.',
      kw: ['Water', 'Emotion', 'Love', 'Intuition'],
    },
    'es': {
      upright: 'Amor empático, ternura, fluir del corazón, intuición y bienestar afectivo.',
      reversed: 'Turbulencia emocional, desilusión, apego o aislamiento afectivo.',
      kw: ['Agua', 'Emoción', 'Amor', 'Intuición'],
    },
    'fr': {
      upright: 'Amour bienveillant, sensibilité intuitive, communion affective et paix du cœur.',
      reversed: 'Remous émotionnels, déception amoureuse, dépendance, tristesse refoulée.',
      kw: ['Eau', 'Émotion', 'Amour', 'Intuition'],
    },
    'it': {
      upright: 'Amore limpido, empatia, fioritura emotiva, intelligenza del cuore e armonia.',
      reversed: 'Turbolenza emotiva, delusione, insicurezza affettiva, sentimenti repressi.',
      kw: ['Acqua', 'Emozione', 'Amore', 'Intuizione'],
    },
    'de': {
      upright: 'Mitfühlende Liebe, seelische Harmonie, Intuition und emotionale Fülle.',
      reversed: 'Emotionale Unruhe, Enttäuschung, Beziehungsfrust, Verschlossenheit.',
      kw: ['Wasser', 'Gefühl', 'Liebe', 'Intuition'],
    },
  },
  swords: {
    'pt-BR': {
      upright: 'Clareza mental, verdade objetiva, coragem intelectual, superação de ilusões.',
      reversed: 'Ansiedade mental, conflito de ideias, palavras ríspidas, excesso de racionalização.',
      kw: ['Ar', 'Mente', 'Verdade', 'Clareza'],
    },
    'en': {
      upright: 'Mental clarity, honest truth, decisive intellect, overcoming challenges.',
      reversed: 'Mental anguish, harsh words, misunderstanding, overthinking.',
      kw: ['Air', 'Mind', 'Truth', 'Clarity'],
    },
    'es': {
      upright: 'Claridad mental, verdad deslumbrante, discernimiento y lucidez estratégica.',
      reversed: 'Ansiedad, disputas verbales, confusión o sobreanálisis paralizante.',
      kw: ['Aire', 'Mente', 'Verdad', 'Claridad'],
    },
    'fr': {
      upright: 'Clarté d\'esprit, vérité sans fard, discernement intellectuel et courage.',
      reversed: 'Angoisse mentale, paroles blessantes, confusion, conflit d\'idées.',
      kw: ['Air', 'Esprit', 'Vérité', 'Clarté'],
    },
    'it': {
      upright: 'Lucidità mentale, verità incisiva, coraggio intellettuale e discernimento.',
      reversed: 'Ansia paralizzante, parole affilate, incomprensioni, tormento interiore.',
      kw: ['Aria', 'Mente', 'Verità', 'Lucidità'],
    },
    'de': {
      name: '',
      upright: 'Geistige Klarheit, objektive Wahrheit, scharfer Verstand und Mut.',
      reversed: 'Gedankenkarussell, harte Worte, Missverständnisse, quälende Zweifel.',
      kw: ['Luft', 'Verstand', 'Wahrheit', 'Klarheit'],
    },
  },
  pentacles: {
    'pt-BR': {
      upright: 'Prosperidade tangível, trabalho diligente, segurança material, saúde e realizações concretas.',
      reversed: 'Preocupações financeiras, ganância, instabilidade material ou estagnação profissional.',
      kw: ['Terra', 'Matéria', 'Prosperidade', 'Estabilidade'],
    },
    'en': {
      upright: 'Tangible abundance, diligent work, financial security, health and grounded success.',
      reversed: 'Financial stress, greed, material instability, lack of long-term planning.',
      kw: ['Earth', 'Material', 'Abundance', 'Stability'],
    },
    'es': {
      upright: 'Prosperidad palpable, fruto del trabajo, seguridad económica y bienestar físico.',
      reversed: 'Inseguridad financiera, derroche, bloqueo material o lentitud.',
      kw: ['Tierra', 'Materia', 'Prosperidad', 'Estabilidad'],
    },
    'fr': {
      upright: 'Prospérité tangible, travail fécond, sécurité matérielle et santé florissante.',
      reversed: 'Inquiétudes financières, instabilité, avidité, perte de pragmatisme.',
      kw: ['Terre', 'Matière', 'Prospérité', 'Stabilité'],
    },
    'it': {
      upright: 'Prosperità tangibile, operosità seria, sicurezza economica e benessere materiale.',
      reversed: 'Preoccupazioni economiche, avidità, instabilità pratica, pigrizia.',
      kw: ['Terra', 'Materia', 'Prosperità', 'Stabilità'],
    },
    'de': {
      upright: 'Greifbarer Wohlstand, Fleiß, materielle Sicherheit, Gesundheit und Beständigkeit.',
      reversed: 'Finanzielle Sorgen, Gier, Instabilität, Vernachlässigung des Körpers.',
      kw: ['Erde', 'Materie', 'Wohlstand', 'Sicherheit'],
    },
  },
};

/**
 * Returns complete translation for any of the 78 Tarot cards in the chosen language.
 */
export function getCardData(cardId: string, lang: SupportedLanguage): CardMeaning {
  // Check Major Arcana
  if (MAJOR_ARCANA_DEFINITIONS[cardId] && MAJOR_ARCANA_DEFINITIONS[cardId][lang]) {
    return MAJOR_ARCANA_DEFINITIONS[cardId][lang];
  }

  // Parse Minor Arcana: e.g. "wands_1", "cups_14", etc.
  const parts = cardId.split('_');
  if (parts.length === 2) {
    const suit = parts[0];
    const rankNum = parseInt(parts[1], 10);
    const suitName = SUIT_NAMES[suit]?.[lang] || suit;
    const rankName = RANK_NAMES[rankNum]?.[lang] || `#${rankNum}`;
    const cardTitle = `${rankName} ${suitName}`;
    const archetype = SUIT_ARCHETYPES[suit]?.[lang] || SUIT_ARCHETYPES.wands[lang];

    return {
      name: cardTitle,
      upright: `${rankName}: ${archetype.upright}`,
      reversed: `${rankName} Invertido: ${archetype.reversed}`,
      keywords: [rankName, ...archetype.kw],
    };
  }

  // Fallback
  return {
    name: cardId,
    upright: 'Significado na luz.',
    reversed: 'Significado na sombra.',
    keywords: ['Tarot'],
  };
}
