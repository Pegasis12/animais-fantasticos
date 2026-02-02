# Animais Fantásticos

Projeto desenvolvido durante o curso **JavaScript ES6+ Completo** da [Origamid](https://www.origamid.com/). Um site interativo sobre animais fantásticos, demonstrando conceitos avançados de JavaScript moderno, modularização de código e manipulação do DOM.

## Sobre o Projeto

O **Animais Fantásticos** é uma aplicação web single-page que apresenta informações sobre diferentes animais através de uma interface interativa e moderna. O projeto foi desenvolvido com foco em:

- **Modularização de código** usando ES6 Modules
- **Programação orientada a objetos** com Classes
- **Manipulação avançada do DOM**
- **Consumo de APIs** (Fetch API)
- **Animações e interatividade**
- **Responsividade** e experiência mobile

## Tecnologias Utilizadas

### Core

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **JavaScript ES6+** - Lógica e interatividade

### Ferramentas de Build

- **Webpack 5** - Bundler e module bundling
- **Babel** - Transpilação de código ES6+ para compatibilidade com navegadores antigos
  - `@babel/core`
  - `@babel/preset-env`
  - `@babel/plugin-transform-runtime`
  - `babel-loader`

### Ferramentas de Desenvolvimento

- **ESLint** - Linter para qualidade de código
- **npm** - Gerenciador de pacotes

## Bibliotecas e Dependências

### Dependências de Desenvolvimento

```json
{
  "@babel/core": "^7.28.5",
  "@babel/plugin-transform-runtime": "^7.28.5",
  "@babel/preset-env": "^7.28.5",
  "@babel/runtime": "^7.28.4",
  "babel-loader": "^10.0.0",
  "eslint": "^9.39.2",
  "webpack": "^5.104.1",
  "webpack-cli": "^6.0.1"
}
```

## Funcionalidades

### 1. **Scroll Suave**

- Navegação suave entre seções ao clicar nos links do menu

### 2. **Menu Mobile**

- Menu responsivo com animação para dispositivos móveis
- Suporte a touch events

### 3. **Dropdown Menu**

- Menu dropdown interativo com detecção de clique fora

### 4. **Tab Navigation**

- Sistema de abas para navegação entre diferentes animais
- Animações de entrada ao trocar de aba

### 5. **Accordion (FAQ)**

- Lista de perguntas frequentes com expansão/colapso
- Primeiro item aberto por padrão

### 6. **Modal**

- Modal de login com overlay
- Fechamento ao clicar fora ou no botão de fechar

### 7. **Tooltip**

- Tooltips informativos ao passar o mouse sobre elementos
- Posicionamento dinâmico baseado na posição do cursor

### 8. **Animações no Scroll**

- Elementos aparecem com animação ao entrar na viewport
- Diferentes direções de animação (show-right, show-down)

### 9. **Galeria de Slides**

- Carrossel de imagens com navegação
- Suporte a touch/swipe em dispositivos móveis
- Controles customizados com thumbnails
- Responsivo e adaptável

### 10. **Fetch de Dados**

- **Fetch Animais**: Busca dados de animais de um arquivo JSON local e exibe estatísticas
- **Fetch Bitcoin**: Busca preço atual do Bitcoin via API pública e calcula doação equivalente

### 11. **Animação de Números**

- Contadores animados que incrementam até o valor final
- Usa MutationObserver para detectar quando iniciar a animação

### 12. **Funcionamento**

- Exibe horário de funcionamento dinamicamente
- Verifica se está aberto baseado no dia e horário atual

## Estrutura do Projeto

```
animais-fantasticos/
├── css/
│   ├── dropdown-menu.css
│   ├── geral.css
│   ├── menu-mobile.css
│   ├── modal.css
│   ├── numeros.css
│   ├── slide.css
│   ├── style.css
│   └── tooltip.css
├── img/
│   ├── slide/
│   └── [imagens]
├── js/
│   ├── modules/
│   │   ├── accordion.js
│   │   ├── anima-numeros.js
│   │   ├── debounce.js
│   │   ├── dropdown-menu.js
│   │   ├── fetch-animais.js
│   │   ├── fetch-bitcoin.js
│   │   ├── funcionamento.js
│   │   ├── menu-mobile.js
│   │   ├── modal.js
│   │   ├── outsideclick.js
│   │   ├── scroll-anima.js
│   │   ├── scroll-suave.js
│   │   ├── slide.js
│   │   ├── tabnav.js
│   │   └── tooltip.js
│   └── script.js
├── index.html
├── main.js (gerado pelo Webpack)
├── animaisapi.json
├── package.json
├── webpack.config.js
├── eslint.config.mjs
└── vercel.json
```

## Instalação e Uso

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório ou navegue até a pasta do projeto**

```bash
cd animais-fantasticos
```

2. **Instale as dependências**

```bash
npm install
```

3. **Modo de desenvolvimento**

```bash
npm run dev
```

Este comando inicia o Webpack em modo watch, recompilando automaticamente quando houver mudanças nos arquivos.

4. **Build para produção**

```bash
npm run build
```

Gera o arquivo `main.js` otimizado e minificado para produção.

5. **Abra o arquivo `index.html` no navegador**
   - Você pode usar um servidor local como Live Server (VS Code) ou qualquer outro servidor HTTP
   - Ou simplesmente abrir o arquivo diretamente no navegador

## Conceitos Aprendidos

Este projeto demonstra o uso de:

- **ES6 Modules** (import/export)
- **Classes e Orientação a Objetos**
- **Arrow Functions**
- **Template Literals**
- **Destructuring**
- **Spread Operator**
- **Async/Await e Promises**
- **Fetch API**
- **Event Delegation**
- **Debounce**
- **MutationObserver**
- **Webpack e Babel** para build e transpilação
- **Modularização e organização de código**
