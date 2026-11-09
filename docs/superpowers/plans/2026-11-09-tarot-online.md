# Tarot Online Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma aplicação web interativa de Tarot com 78 cartas clássicas, suporte a múltiplos jogos com casas personalizadas, animação 3D de flip, i18n para 6 idiomas (EFIGS+LATAM), efeitos sonoros procedurais via Web Audio API e deploy automatizado no GitHub Pages.

**Architecture:** Single Page Application (SPA) em React 18 e TypeScript empacotada com Vite (`base: './'`). O estado gerencia o baralho ativo, o sorteio sem reposição via Fisher-Yates, as posições das casas da tiragem selecionada, o estado de revelação de cada carta e a persistência de idioma/áudio.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Web Audio API, Vitest, React Testing Library.

**Spec:** [docs/superpowers/specs/2026-11-09-tarot-online-design.md](file:///c:/Users/Pichau/Desktop/tarot-online/docs/superpowers/specs/2026-11-09-tarot-online-design.md)

## Global Constraints

- Sorteio estrito sem reposição: nunca duplicar cartas na mesma tiragem.
- Build estático com caminhos relativos (`base: './'`) para funcionar em qualquer subdiretório do GitHub Pages.
- Suporte a 6 idiomas: `en`, `es`, `fr`, `it`, `de`, `pt-BR`.
- Áudio sintetizado proceduralmente via Web Audio API (zero dependência de assets `.mp3` externos).
- Totalmente responsivo para smartphones, tablets e desktop.

## Review Focus

1. **Tentativa de sortear mais cartas do que o baralho disponível:** Em modo "Apenas Arcanos Maiores" (22 cartas), garantir que tiragens com mais de 22 cartas sejam limitadas com segurança.
2. **Navegador sem suporte ou com política restritiva de áudio (autoplay policy):** Inicializar o AudioContext apenas sob interação do usuário (clique) e tratar exceções sem quebrar a aplicação.
3. **Persistência de idioma no `localStorage` inválida:** Tratar valores desconhecidos com fallback gracioso para o idioma do navegador ou `pt-BR`.
4. **Comportamento em telas pequenas (mobile):** Layouts complexos como a Cruz Celta (10 cartas) devem quebrar responsivamente sem transbordamento horizontal da tela.
5. **Cópia do resumo da leitura sem permissão de clipboard:** Tratar falha de `navigator.clipboard.writeText` com fallback amigável.

---

### Task 1: Scaffolding, Tooling & GitHub Actions Setup

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `tailwind.config.js`, `postcss.config.js`, `index.html`
- Create: `.github/workflows/deploy.yml`
- Create: `vitest.config.ts`, `tests/setup.ts`

**Interfaces:**
- Consumes: Node.js / npm environment
- Produces: Executable Vite dev server, Vitest test runner, and production build artifact.

- [ ] **Step 1: Create project configuration files**
  Configurar `package.json` com scripts (`dev`, `build`, `test`, `preview`), dependências (`react`, `react-dom`, `lucide-react`) e devDependencies (`vite`, `@vitejs/plugin-react`, `typescript`, `tailwindcss`, `postcss`, `autoprefixer`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`).
- [ ] **Step 2: Configure Vite, Tailwind & TypeScript**
  Configurar `vite.config.ts` com `base: './'`, `tailwind.config.js` com a paleta Celestial & Gold (`celestial-dark: #070814`, `gold: #f5d061`, etc.) e `tsconfig.json`.
- [ ] **Step 3: Setup GitHub Actions Workflow**
  Criar `.github/workflows/deploy.yml` com pipeline para checkout, setup-node, npm ci, npm run build e upload-pages-artifact / deploy-pages.
- [ ] **Step 4: Run test and build verification**
  Run: `npm install && npm run build`
  Expected: Build bem-sucedido gerando pasta `dist/`.
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "chore: scaffold react vite tailwind project and github actions workflow"
  ```

---

### Task 2: Data Models & Fisher-Yates Shuffle Engine

**Files:**
- Create: `src/types/tarot.ts`
- Create: `src/data/cards.ts`
- Create: `src/utils/deck.ts`
- Test: `tests/deck.test.ts`

**Interfaces:**
- Consumes: Definições de tipos e dados brutos
- Produces:
  - `TarotCard`: `{ id: string; nameKey: string; arcana: 'major' | 'minor'; suit?: 'wands'|'cups'|'swords'|'pentacles'; number: number; image: string }`
  - `DrawnCard`: `{ card: TarotCard; isReversed: boolean; houseId: string }`
  - `drawCards(deckType: 'all' | 'major', count: number, allowReversed: boolean): DrawnCard[]`

- [ ] **Step 1: Write failing tests for deck drawing**
  Em `tests/deck.test.ts`:
  - Testar que `drawCards('all', 10, false)` retorna 10 cartas únicas sem repetição.
  - Testar que `drawCards('major', 5, false)` retorna apenas cartas com `arcana === 'major'`.
  - Testar que quando `allowReversed === false`, todas as cartas têm `isReversed === false`.
  - Testar que quando `count > availableCards`, retorna no máximo as cartas disponíveis sem lançar erro.
- [ ] **Step 2: Run test to verify failure**
  Run: `npx vitest run tests/deck.test.ts`
  Expected: FAIL (módulos não encontrados).
- [ ] **Step 3: Implement data structures and Fisher-Yates shuffle**
  - Em `src/types/tarot.ts`, definir todas as interfaces tipadas.
  - Em `src/data/cards.ts`, cadastrar todas as 78 cartas (22 Maiores + 56 Menores) com URLs/caminhos de imagem e referências a chaves i18n.
  - Em `src/utils/deck.ts`, implementar algoritmo Fisher-Yates de embaralhamento e amostragem aleatória sem reposição.
- [ ] **Step 4: Run test to verify pass**
  Run: `npx vitest run tests/deck.test.ts`
  Expected: PASS
- [ ] **Step 5: Commit**
  ```bash
  git add src/types/tarot.ts src/data/cards.ts src/utils/deck.ts tests/deck.test.ts
  git commit -m "feat: implement 78-card dataset and fisher-yates drawing engine"
  ```

---

### Task 3: Spreads & House Positions Definitions

**Files:**
- Create: `src/data/spreads.ts`
- Test: `tests/spreads.test.ts`

**Interfaces:**
- Consumes: `src/types/tarot.ts`
- Produces:
  - `SPREADS: Record<SpreadType, SpreadDefinition>` com os 6 jogos: `single` (1), `three_cards` (3), `love` (4), `decision` (5), `celtic_cross` (10), `free` (customizável).
  - Cada casa possui: `id`, `nameKey`, `descKey`, `order`, `gridArea` ou coordenadas de layout.

- [ ] **Step 1: Write failing tests for spreads**
  Em `tests/spreads.test.ts`:
  - Testar que todos os 6 spreads existem e têm contagem de casas esperada (1, 3, 4, 5, 10).
  - Testar que cada casa possui chaves válidas de identificação e descrição.
- [ ] **Step 2: Run test to verify failure**
  Run: `npx vitest run tests/spreads.test.ts`
  Expected: FAIL
- [ ] **Step 3: Implement spreads data**
  Escrever `src/data/spreads.ts` com as configurações e metadados de posicionamento de cada tiragem.
- [ ] **Step 4: Run test to verify pass**
  Run: `npx vitest run tests/spreads.test.ts`
  Expected: PASS
- [ ] **Step 5: Commit**
  ```bash
  git add src/data/spreads.ts tests/spreads.test.ts
  git commit -m "feat: define 6 tarot spreads and contextual house layouts"
  ```

---

### Task 4: Internationalization (i18n) Engine & Dictionaries (EFIGS + LATAM)

**Files:**
- Create: `src/i18n/types.ts`
- Create: `src/i18n/index.ts`
- Create: `src/i18n/locales/pt-BR.json`
- Create: `src/i18n/locales/en.json`
- Create: `src/i18n/locales/es.json`
- Create: `src/i18n/locales/fr.json`
- Create: `src/i18n/locales/it.json`
- Create: `src/i18n/locales/de.json`
- Test: `tests/i18n.test.ts`

**Interfaces:**
- Consumes: Idiomas suportados (`'pt-BR' | 'en' | 'es' | 'fr' | 'it' | 'de'`)
- Produces:
  - `useTranslation()` / `t(key: string, params?: Record<string, string>): string`
  - `setLanguage(lang: SupportedLanguage): void`
  - `getInitialLanguage(): SupportedLanguage`

- [ ] **Step 1: Write failing tests for i18n system**
  Em `tests/i18n.test.ts`:
  - Testar detecção de idioma padrão e fallback para `pt-BR`.
  - Testar tradução de chaves comuns de UI, nomes de tiragens e cartas.
  - Testar que os 6 arquivos de tradução contêm as chaves essenciais sem exceções.
- [ ] **Step 2: Run test to verify failure**
  Run: `npx vitest run tests/i18n.test.ts`
  Expected: FAIL
- [ ] **Step 3: Implement i18n engine and translation files**
  - Implementar gerenciador reativo de i18n em `src/i18n/index.ts`.
  - Criar dicionários completos em `src/i18n/locales/` com nomes de cartas, significados (normal e invertido), palavras-chave, títulos das casas e rótulos de botões.
- [ ] **Step 4: Run test to verify pass**
  Run: `npx vitest run tests/i18n.test.ts`
  Expected: PASS
- [ ] **Step 5: Commit**
  ```bash
  git add src/i18n tests/i18n.test.ts
  git commit -m "feat: implement i18n system supporting en, es, fr, it, de, pt-BR"
  ```

---

### Task 5: Procedural Web Audio API Sound Synthesizer

**Files:**
- Create: `src/utils/audio.ts`
- Test: `tests/audio.test.ts`

**Interfaces:**
- Consumes: Web Audio API (`window.AudioContext` ou `window.webkitAudioContext`)
- Produces:
  - `playCardFlipSound(): void`
  - `playCardShuffleSound(): void`
  - `playCelestialChime(): void`
  - `toggleAudio(muted?: boolean): boolean`
  - `isAudioMuted(): boolean`

- [ ] **Step 1: Write failing tests for audio module**
  Em `tests/audio.test.ts`:
  - Testar que os métodos de áudio executam com segurança mesmo em ambientes sem suporte ou mock de AudioContext.
  - Testar alternância de mute e persistência no localStorage.
- [ ] **Step 2: Run test to verify failure**
  Run: `npx vitest run tests/audio.test.ts`
  Expected: FAIL
- [ ] **Step 3: Implement procedural audio synthesizer**
  Construir os sintetizadores de ruído passa-baixa e osciladores senoidais com tratamento seguro para autoplay policy do navegador.
- [ ] **Step 4: Run test to verify pass**
  Run: `npx vitest run tests/audio.test.ts`
  Expected: PASS
- [ ] **Step 5: Commit**
  ```bash
  git add src/utils/audio.ts tests/audio.test.ts
  git commit -m "feat: implement procedural sound effects with web audio api"
  ```

---

### Task 6: 3D Flip Card Component & Card Visuals

**Files:**
- Create: `src/components/CardSlot.tsx`
- Create: `src/components/CardBack.tsx`
- Modify: `src/index.css` (estilos 3D: `perspective`, `transform-style: preserve-3d`, `rotateY(180deg)`)
- Test: `tests/CardSlot.test.tsx`

**Interfaces:**
- Consumes: `DrawnCard`, `SpreadHouse`, estado `isRevealed: boolean`, callback `onFlip: () => void`, callback `onClick: () => void`
- Produces: CardSlot visual com verso sagrado dourado e frente revelada com rotação 180° caso `isReversed === true`.

- [ ] **Step 1: Write failing tests for CardSlot**
  Em `tests/CardSlot.test.tsx`:
  - Testar que carta virada para baixo exibe o verso.
  - Testar que clique em carta virada para baixo dispara `onFlip`.
  - Testar que carta revelada exibe a frente e o nome da carta.
  - Testar que carta invertida recebe classe de rotação 180°.
- [ ] **Step 2: Run test to verify failure**
  Run: `npx vitest run tests/CardSlot.test.tsx`
  Expected: FAIL
- [ ] **Step 3: Implement CardSlot and 3D CSS effects**
  Criar `CardSlot.tsx`, `CardBack.tsx` com arte em SVG geométrico místico e estilização Tailwind/CSS 3D.
- [ ] **Step 4: Run test to verify pass**
  Run: `npx vitest run tests/CardSlot.test.tsx`
  Expected: PASS
- [ ] **Step 5: Commit**
  ```bash
  git add src/components/CardSlot.tsx src/components/CardBack.tsx src/index.css tests/CardSlot.test.tsx
  git commit -m "feat: create 3d interactive flip cardslot and celestial card back"
  ```

---

### Task 7: Table Layouts, Spread Selector & Free Draw Controls

**Files:**
- Create: `src/components/TarotTable.tsx`
- Create: `src/components/SpreadSelector.tsx`
- Create: `src/components/FreeDrawControls.tsx`
- Test: `tests/TarotTable.test.tsx`

**Interfaces:**
- Consumes: Tiragem ativa, lista de cartas sorteadas, estado de revelação
- Produces: Renderização geométrica das casas (1 carta centrada, 3 cartas em linha, Cruz Celta em formato clássico cruz + bastão, ou grade responsiva).

- [ ] **Step 1: Write failing test for TarotTable**
  Em `tests/TarotTable.test.tsx`:
  - Verificar renderização correta de todas as casas da tiragem selecionada.
  - Verificar que o layout se adapta à tiragem ativa.
- [ ] **Step 2: Run test to verify failure**
  Run: `npx vitest run tests/TarotTable.test.tsx`
  Expected: FAIL
- [ ] **Step 3: Implement TarotTable, SpreadSelector and FreeDrawControls**
  Construir os seletores de tiragem e o tabuleiro místico com grid flexível e rótulos das casas.
- [ ] **Step 4: Run test to verify pass**
  Run: `npx vitest run tests/TarotTable.test.tsx`
  Expected: PASS
- [ ] **Step 5: Commit**
  ```bash
  git add src/components/TarotTable.tsx src/components/SpreadSelector.tsx src/components/FreeDrawControls.tsx tests/TarotTable.test.tsx
  git commit -m "feat: implement responsive tarot table layouts and spread selector"
  ```

---

### Task 8: Card Detail Modal, Summary Bar & Navigation Header

**Files:**
- Create: `src/components/CardModal.tsx`
- Create: `src/components/SummaryBar.tsx`
- Create: `src/components/Header.tsx`
- Test: `tests/CardModal.test.tsx`, `tests/SummaryBar.test.tsx`

**Interfaces:**
- Consumes: Carta selecionada para inspeção, estado da tiragem completa
- Produces:
  - Modal com zoom da ilustração Rider-Waite, significado específico na casa, conselho e palavras-chave.
  - Barra de ações ("Revelar Todas", "Nova Leitura", "Copiar Resumo").
  - Header com seletor de idioma, toggle de arcanos e controle de som.

- [ ] **Step 1: Write failing tests for Modal and SummaryBar**
  Em `tests/CardModal.test.tsx` e `tests/SummaryBar.test.tsx`:
  - Testar abertura e fechamento do modal ao clicar na carta ou no botão de fechar.
  - Testar cópia do resumo para a área de transferência.
- [ ] **Step 2: Run test to verify failure**
  Run: `npx vitest run tests/CardModal.test.tsx tests/SummaryBar.test.tsx`
  Expected: FAIL
- [ ] **Step 3: Implement CardModal, SummaryBar and Header**
  Construir os componentes com design Dark Celestial & Gold, backdrop blur, e formatação amigável de texto.
- [ ] **Step 4: Run test to verify pass**
  Run: `npx vitest run tests/CardModal.test.tsx tests/SummaryBar.test.tsx`
  Expected: PASS
- [ ] **Step 5: Commit**
  ```bash
  git add src/components/CardModal.tsx src/components/SummaryBar.tsx src/components/Header.tsx tests/CardModal.test.tsx tests/SummaryBar.test.tsx
  git commit -m "feat: implement card detail modal, summary bar and header controls"
  ```

---

### Task 9: Full App Assembly, End-to-End Verification & Documentation

**Files:**
- Create/Modify: `src/App.tsx`, `src/main.tsx`, `index.html`, `README.md`
- Test: `tests/App.test.tsx`

**Interfaces:**
- Consumes: Todos os componentes e módulos dos passos anteriores
- Produces: Aplicação completa pronta para produção e deploy no GitHub Pages.

- [ ] **Step 1: Write integration tests in `tests/App.test.tsx`**
  - Testar fluxo completo: carregar página, alternar idioma, mudar tiragem, virar cartas individualmente, virar todas, abrir modal de detalhes.
- [ ] **Step 2: Assemble `App.tsx` and mystical background**
  Integrar todos os componentes com o estado orquestrador, fundo cósmico estrelado, e sons procedurais.
- [ ] **Step 3: Run full test suite and production build**
  Run: `npm test && npm run build`
  Expected: Todos os testes passando (100% de sucesso) e pasta `dist/` gerada sem erros de lint ou compilação TypeScript.
- [ ] **Step 4: Create comprehensive README.md**
  Instruções claras de como rodar localmente (`npm run dev`) e como ativar o GitHub Pages em 1 clique nas configurações do repositório.
- [ ] **Step 5: Final Commit**
  ```bash
  git add .
  git commit -m "feat: complete tarot online application and documentation"
  ```
