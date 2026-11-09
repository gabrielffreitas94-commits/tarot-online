# 🔮 Tarot Online — Oráculo Celestial

> Aplicação web interativa, mística e responsiva para leituras de Tarot com baralho clássico completo (78 cartas), suporte a múltiplos jogos com casas interpretativas contextualizadas, animações 3D de revelação, internacionalização (EFIGS + LATAM) e efeitos sonoros procedurais. Projetada para execução 100% estática e deploy automático no **GitHub Pages**.

---

## ✨ Funcionalidades Principais

- **Sorteio Aleatório Estrito sem Repetição:** Algoritmo Fisher-Yates de amostragem sem reposição, garantindo que nenhuma carta seja sorteada mais de uma vez na mesma leitura.
- **Baralho Completo com Filtro de Arcanos:** 
  - 78 cartas clássicas (22 Arcanos Maiores + 56 Arcanos Menores) baseadas nas ilustrações originais de Pamela Colman Smith e Arthur Edward Waite (Rider-Waite 1909) em domínio público.
  - Alternância com 1 clique entre **Baralho Completo (78)** e **Apenas Arcanos Maiores (22)**.
- **Suporte a Cartas Invertidas Opcionais:**
  - Chave liga/desliga para habilitar ou desabilitar cartas invertidas.
  - Cartas invertidas recebem rotação visual de 180° e interpretação dedicada de sombra/bloqueio.
- **Catálogo de 6 Jogos (Tiragens) com Casas Contextualizadas:**
  1. **Carta do Dia (1 carta):** Foco e energia central para o seu dia.
  2. **Passado, Presente e Futuro (3 cartas):** Linha temporal de causas passadas, desafio atual e tendência futura.
  3. **Amor & Relacionamento (4 cartas):** Clareza sobre sua postura, a energia da outra pessoa, a dinâmica da relação e conselho.
  4. **Tomada de Decisão (5 cartas):** A encruzilhada atual comparando o Caminho A e o Caminho B com seus respectivos desfechos.
  5. **Cruz Celta Tradicional (10 cartas):** O mais clássico e profundo sistema oracular com as 10 posições arquetípicas.
  6. **Tiragem Livre / Customizada (X cartas):** O consulente escolhe livremente a quantidade X de cartas (1 a 10) para uma consulta aberta.
- **Experiência Ritualística de Revelação:**
  - As cartas são distribuídas viradas para baixo na mesa mística.
  - Virada individual com animação fluida de **flip 3D** ao toque/clique.
  - Botão **"Revelar Todas"** para virar o jogo instantaneamente.
- **Modal de Detalhes da Carta:**
  - Clique em qualquer carta revelada para abrir um modal com zoom ampliado da arte clássica, significado da casa onde caiu, interpretação profunda (normal ou invertida), conselho do oráculo e palavras-chave.
- **Internacionalização Completa (i18n): EFIGS + LATAM:**
  - 🇧🇷 Português Brasileiro (`pt-BR`)
  - 🇺🇸 English (`en`)
  - 🇪🇸 Español (`es`)
  - 🇫🇷 Français (`fr`)
  - 🇮🇹 Italiano (`it`)
  - 🇩🇪 Deutsch (`de`)
  - Detecção automática do idioma do navegador e seletor manual no topo com persistência no `localStorage`.
- **Efeitos Sonoros Procedurais via Web Audio API:**
  - Som sutil e tátil de papel cartão ao virar a carta.
  - Som de embaralhar rápido (*riffle shuffle*).
  - Ressonância cósmica/chime harmônico ao concluir a tiragem.
  - Botão de ativar/silenciar som no cabeçalho.
  - *Zero dependência de arquivos MP3 pesados ou falhas de carregamento de rede.*
- **Ações de Leitura:**
  - **"Copiar Resumo"**: Copia um resumo formatado da leitura para a área de transferência (para compartilhar no WhatsApp, bloco de notas, etc.).
  - **"Nova Leitura"**: Embaralha o baralho e reinicia a consulta.
- **Estética Dark Celestial & Gold:**
  - Paleta cósmica profunda (azul da meia-noite `#05060d`, veludo roxo místico e dourado imperial `#f5d061`).
  - Constelações de fundo, tipografia serifada clássica (*Cinzel*) e brilho dourado etéreo.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (já incluso com o Node.js)

### Instalação e Execução

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Rodar a suíte completa de testes automatizados (Vitest)
npm test

# 4. Gerar build de produção para o GitHub Pages
npm run build
```

---

## 🌐 Publicação no GitHub Pages

O projeto já inclui um workflow pronto do GitHub Actions em `.github/workflows/deploy.yml` e o Vite está configurado com `base: './'`.

Para publicar o seu Tarot Online no GitHub Pages:

1. Crie um repositório no seu GitHub (ex.: `tarot-online`).
2. Envie o código para o GitHub:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/tarot-online.git
   git branch -M main
   git push -u origin main
   ```
3. No seu repositório no GitHub:
   - Acesse **Settings** > **Pages** (na barra lateral esquerda).
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
4. Pronto! O GitHub Actions irá construir e publicar o site automaticamente a cada push na branch `main`. O link público ficará disponível em:
   `https://SEU-USUARIO.github.io/tarot-online/`

---

## 🛠️ Tecnologias Utilizadas

- **React 18** & **TypeScript**
- **Vite 6** (Build ultra-rápido e otimizado para páginas estáticas)
- **Tailwind CSS** (Design system cósmico personalizado)
- **Lucide React** (Ícones elegantes)
- **Web Audio API** (Síntese sonora procedural em tempo real)
- **Vitest** & **React Testing Library** (Testes unitários e de integração com cobertura total)

---

## 📜 Licença

As ilustrações originais do baralho Rider-Waite-Smith (1909) por Pamela Colman Smith são de domínio público.  
O código deste projeto é livre para uso e estudos.
