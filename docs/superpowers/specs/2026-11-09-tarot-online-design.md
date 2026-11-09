# Especificação de Design: Tarot Online (GitHub Pages)

**Data:** 2026-11-09  
**Status:** Aguardando Aprovação do Usuário  
**Autor:** Antigravity & Usuário  

---

## 1. Visão Geral e Intenção

O **Tarot Online** é uma aplicação web interativa, atmosférica e mística para tiragens de cartas de Tarot sem repetição, hospedada gratuitamente no **GitHub Pages**.

A aplicação permite aos usuários selecionar entre diferentes tiragens clássicas com propósitos específicos (ou definir um número livre de cartas X), onde cada carta sorteada ocupa uma "casa" (posição) com significado interpretativo contextualizado. Além disso, conta com suporte a cartas invertidas (opcional), internacionalização completa em 6 idiomas (EFIGS + LATAM), animação 3D de revelação de cartas, efeitos sonoros imersivos via Web Audio API e estética refinada *Dark Celestial & Gold*.

---

## 2. Metas, Não-Metas e Anti-Metas

### Metas (Goals)
1. **Sorteio Aleatório Estrito sem Repetição:** Garantir algoritmo de amostragem sem reposição (Fisher-Yates shuffle) para qualquer tiragem de X cartas.
2. **Baralho Completo de 78 Cartas com Filtro:** Disponibilizar os 22 Arcanos Maiores e os 56 Arcanos Menores, com um toggle para o usuário optar por jogar apenas com os Arcanos Maiores.
3. **Catálogo de Jogos (Tiragens) com Casas Contextualizadas:**
   - **Carta do Dia (1 carta):** Foco e energia diária.
   - **Passado, Presente e Futuro (3 cartas):** Casa 1 (Passado/Origem), Casa 2 (Presente/Desafio), Casa 3 (Futuro/Desfecho).
   - **Amor & Relacionamento (4 cartas):** Casa 1 (Você), Casa 2 (A Outra Pessoa), Casa 3 (A Dinâmica da Conexão), Casa 4 (Conselho/Tendência).
   - **Tomada de Decisão (5 cartas):** Casa 1 (Situação Atual), Casa 2 (Caminho A), Casa 3 (Caminho B), Casa 4 (Resultado A), Casa 5 (Resultado B).
   - **Cruz Celta Tradicional (10 cartas):** O clássico layout com as 10 casas arquetípicas do Tarot.
   - **Tiragem Livre / Personalizada (X cartas):** O usuário seleciona a quantidade desejada de cartas (1 a 10) para uma leitura aberta.
4. **Cartas Invertidas Opcionais:** Switch para ligar/desligar a ocorrência de cartas invertidas (com rotação visual de 180° e interpretação de sombra/reversa).
5. **Experiência Ritualística de Revelação:** Cartas distribuídas viradas para baixo na mesa; cada carta pode ser virada individualmente com animação de flip 3D, ou todas de uma vez através do botão *"Revelar Todas"*.
6. **Modal de Detalhes:** Ao clicar em uma carta já revelada, exibir modal com zoom da imagem clássica (Rider-Waite Smith), significado da casa, palavras-chave, interpretação na posição (normal ou invertida) e conselho.
7. **Internacionalização (i18n) EFIGS + LATAM:**
   - Inglês (EN)
   - Francês (FR)
   - Italiano (IT)
   - Alemão (DE)
   - Espanhol (ES)
   - Português Brasileiro (PT-BR)
   - Detecção automática do idioma do navegador com seletor manual persistido em `localStorage`.
8. **Efeitos Sonoros Procedurais:** Sons sutis de embaralhar e virar cartas gerados dinamicamente via **Web Audio API** (sem arquivos MP3 externos pesados), com controle de mute.
9. **Ações de Compartilhamento:** Botão *"Copiar Resumo da Leitura"* (formata o resultado em texto elegante para WhatsApp/notas) e *"Nova Leitura"*.
10. **Deploy Automatizado no GitHub Pages:** Configuração via GitHub Actions (`.github/workflows/deploy.yml`) e Vite com caminhos relativos (`base: './'`).

### Não-Metas (Non-Goals)
- Backend, banco de dados ou autenticação de usuários (tudo roda 100% no cliente).
- Leitura gerada por IA externa em tempo real com cobrança de tokens (o foco é a sabedoria oracular tradicional e descrições pré-curadas de alta qualidade).
- Venda de baralhos físicos ou anúncios.

### Anti-Metas (Anti-Goals)
- Interface genérica ou poluída: evitar pop-ups invasivos e estética de cassino.
- Cartas repetidas na mesma tiragem (o baralho ativo deve sempre ser descontado).
- Dependência de recursos externos instáveis que impeçam o funcionamento offline/GitHub Pages.

---

## 3. Abordagens Consideradas

| Abordagem | Prós | Contras | Veredito |
|---|---|---|---|
| **1. React 18 + Vite + Tailwind CSS (Selecionada)** | Modularidade, tipagem com TypeScript, fácil gerenciamento de estado das cartas (virada/aberta/invertida), i18n reativo, animações CSS 3D limpas, build estático ideal para GitHub Pages. | Requer etapa de build (automatizada via GitHub Actions). | **Escolhida pelo usuário.** |
| **2. Vanilla HTML/CSS/JS** | Sem dependências ou etapa de build. | Difícil manutenção do dicionário das 78 cartas em 6 idiomas, código espaguete para gerenciar 6 mesas diferentes e modal. | Descartada. |
| **3. Next.js Static Export** | Bom ecossistema React. | Complexidade desnecessária para uma aplicação 100% cliente sem SSR. | Descartada. |

---

## 4. Arquitetura Técnica e Decisões de Design

### 4.1 Estrutura do Projeto
```
tarot-online/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions para build e deploy no GitHub Pages
├── public/
│   └── favicon.svg             # Ícone místico celestial
├── src/
│   ├── assets/
│   │   └── cards/              # Imagens clássicas Rider-Waite ou fallbacks em SVG estilizados
│   ├── components/
│   │   ├── Header.tsx          # Título, Seletor de Idioma, Filtro Arcanos, Toggle Invertidas, Som
│   │   ├── SpreadSelector.tsx  # Navegação entre os tipos de tiragens (jogos)
│   │   ├── TarotTable.tsx      # Mesa mística com layout posicional das casas e cartas
│   │   ├── CardSlot.tsx        # Carta com animação 3D de flip, efeito celestial e casa
│   │   ├── CardModal.tsx       # Modal de detalhes com zoom, conselho e contexto da casa
│   │   ├── SummaryBar.tsx      # Botões "Revelar Todas", "Nova Leitura", "Copiar Resumo"
│   │   └── FreeDrawControls.tsx# Controle de quantidade X para a Tiragem Livre
│   ├── data/
│   │   ├── cards.ts            # Metadados das 78 cartas (id, tipo, naipe, número, imagem)
│   │   └── spreads.ts          # Definição dos 6 jogos e descrições das casas
│   ├── i18n/
│   │   ├── index.ts            # Gerenciador de i18n e persistência
│   │   └── locales/            # Traduções completas
│   │       ├── pt-BR.json
│   │       ├── en.json
│   │       ├── es.json
│   │       ├── fr.json
│   │       ├── it.json
│   │       └── de.json
│   ├── utils/
│   │   ├── audio.ts            # Síntese procedural de sons via Web Audio API
│   │   └── deck.ts             # Algoritmo Fisher-Yates de sorteio sem reposição
│   ├── App.tsx                 # Estado global da leitura e orquestração
│   ├── index.css               # Tailwind CSS e animações personalizadas de perspectiva 3D
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts              # Configurado com base: './'
```

### 4.2 Algoritmo de Sorteio sem Repetição
- Função `drawCards(deckType: 'all' | 'major', count: number, allowReversed: boolean)`:
  1. Filtra as cartas disponíveis (78 ou 22).
  2. Executa embaralhamento Fisher-Yates completo.
  3. Extrai exatamente `count` cartas únicas da cabeça do baralho.
  4. Para cada carta, se `allowReversed === true`, sorteia `isReversed: Math.random() < 0.5`.

### 4.3 Sistema de Áudio Procedural (Web Audio API)
- Não depende de downloads de arquivos `.mp3` ou problemas de CORS.
- **Card Flip:** Ruído branco modulado por envelope passa-baixa e ganho rápido (~80ms), simulando o atrito seco do papel cartão.
- **Card Shuffle:** Série de 3 a 5 impulsos rápidos filtrados com envelope suave.
- **Mystic Reveal/Chime:** Ressonância senoidal harmônica sutil (~432Hz/528Hz) com decaimento longo ao revelar a última carta da tiragem.

### 4.4 Estética Visual: Dark Celestial & Gold
- **Cores principais:**
  - Fundo cósmico: `#070814` até `#13152d` com gradiente radial e estrelas cintilantes sutis.
  - Acentos dourados: Dourado imperial `#f5d061`, bordas em `#b38728` e brilhos em `#fbf5b7`.
  - Superfície das cartas: Textura estilizada com verso místico com olho/sol e geometria sagrada.
- **Tipografia:** Serif refinada para títulos (Playfair Display / Cinzel / serif clássica) e Sans-serif limpa para textos de leitura.

---

## 5. O que fica a cargo do construtor (Builder Freedom)
- Ajustes finos de responsividade para telas pequenas de smartphones (ex.: na Cruz Celta de 10 cartas, dispor em grade adaptativa com numeração clara das casas).
- Valores exatos de ganho e decaimento dos nós da Web Audio API para obter a sonoridade mais agradável.
- Implementação detalhada dos dicionários JSON para cada idioma.
