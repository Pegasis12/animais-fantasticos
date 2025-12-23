/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js"
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(\n    \"[data-anime='accordion'] dt\",\n  ); //selecionei o dt dentro da classe\n\n  function activeAccordion() {\n    this.classList.toggle('ativo'); //ativo no d tbm pra troca de cetinha no css\n    this.nextElementSibling.classList.toggle('ativo'); //ja que o proximo elemento de dt é dd ele add a classe de ativo nele ao ser clicado, usei this ao invez do event.currentTarget\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add('ativo'); //atribuindo na primeira dt a classe de ativo pra o preiro elemento começar com a ceta pra cima\n    accordionList[0].nextElementSibling.classList.add('ativo'); //atribuindo no primeiro dd de dt a classe de ativo pra começar aberto\n\n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?\n}");

/***/ },

/***/ "./js/modules/anima-numeros.js"
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    //fiz uma funcao coloquei tudo dentro\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((item) => {\n      const total = +item.innerText;\n      const incremento = Math.floor(total / 100);\n\n      let start = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        item.innerText = start;\n        if (start > total) {\n          item.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random()); //um tempo diferente pra cada execução de cada item\n    });\n  }\n\n  function handleMutation(mutation) {\n    //recebe um parametro especial omo se fosse o event, com ele podemos verificar se existea classe ativo\n    if (mutation[0].target.classList.contains('ativo')) {\n      //se existir ativo ele disconecta o observador e anima os numeros\n      observer.disconnect(); //disconecta\n      animaNumeros(); //anima os numeros uma vez pq mesmo rodando agora ele ja vai esta desconectado\n    }\n  }\n\n  // MutationObserver é um objeto que observa um atributo ou algo se modificando\n  const observer = new MutationObserver(handleMutation); //recebe como argumento um callback\n\n  const observerTarget = document.querySelector('.numeros'); //selecionei a section numeros\n  //um metodo de Mutation observe() pra identificar qual elemento ele deve observar, no caso ele observa nossa section numeros\n  observer.observe(observerTarget, { attributes: true }); //alem do argumento de oq observar ele tbm recebe mais argumentos, como um objeto de configuração, no nosso caso ele observa a modifição dos atributos da section numeros\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?\n}");

/***/ },

/***/ "./js/modules/dropdown-menu.js"
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n //separei o outside e importei ele aq dentro\n\nfunction initDropdownMenu() {\n  const dropdownsMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('ativo');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('ativo');\n    });\n  }\n\n  dropdownsMenus.forEach((item) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      item.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?\n}");

/***/ },

/***/ "./js/modules/fetch-animais.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n //importando a animacao aq, pois ea precisa ser executada so depois do fetch, pq se n ele vai ser executado antes do fetch ser concluido e ja vai tentar animar algo que n existe\nfunction initFetchAnimais() {\n  async function fetchAnimais(url) {\n    try {\n      //trantando o erro\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json(); //retorna a array de animais\n      const numeros = document.querySelector('.numeros-grid');\n\n      animaisJSON.forEach((animal) => {\n        //percorrendo a array com foreach e passando como argumento cada animal\n        const divAnimal = createAnimal(animal);\n        numeros.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); //executando a aniamcao depois do fetch, o fech conclui ai sim ele é executado\n    } catch (erro) {\n    }\n  }\n\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n\n  fetchAnimais('./animaisapi.json');\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?\n}");

/***/ },

/***/ "./js/modules/fetch-bitcoin.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https://blockchain.info/ticker')\n    .then((r) => {\n      return r.json();\n    })\n    .then((json) => {\n      const btcPreco = document.querySelector('.btc-preco');\n      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4); //se ueremos por exemplo uma doação de 100 reais em bitcoin é so dividir o valor que deseja pelo valor do bitcoin, e usar o toFixed pra apresenta somente 4 casas decimais ou a quantidade que vc escolher\n    })\n    .catch((erro) => {\n      //sempre tratar os erros\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?\n}");

/***/ },

/***/ "./js/modules/funcionamento.js"
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  // o objetivo do script é comparar a data e hora do cliente pra saber se estamos fechados ou abertos, caso esteja fechado vai atribuir uma classe a uma bolinha em que ela vai ficar vermelha, cso esteja aberto a classe atribuida sera verde\n\n  const funcionamento = document.querySelector('[data-semana]');\n  //Me retorna uma string do conteudo dentro do data-semana, para compara tenho q transformar em array, pra isso do split em (,) porem ainda n acabou pois ele me retorna a array com string, e quero number, pra isso podemos interagir com map, lembrando q ele intera na array e retorna uma array nova modificada, diferente do foreach\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); //macetinho se passar number dentro de map ele ja me reotrna number a array\n  const horariosSemana = funcionamento.dataset.horario.split(',').map(Number); //pega o horario dentro de data-horario\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours(); //pega exatamente o horario de agora\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; //Se for diferente de menos 1 é verdadeiro. A expressão me retorna onde esta o index na array exemplo, hoje é dia 4 os dias que tem dentro de dias semana são [1,2,3,4,5] ele vai verificar onde meu dia de hoje esta na array, no caso na posição 3 do array que é 4, caso n encontre me retorna -1\n  const horarioAberto =\n    horarioAgora >= horariosSemana[0] && horarioAgora < horariosSemana[1]; //verifica se o horario de agora é maior que 8 e menor q 18\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n// // new Date()\n// // O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.\n// const agora = new Date();\n// //posso passar uma data futura tbm\n// const futuro = new Date('Dec 25 2025'); //alem de atribuir isso posso passar a hora o gmt etc\n\n// console.log(agora); //horario, data com base no sistema - Thu Sep 04 2025 15:05:04 GMT-0300 (Horário Padrão de Brasília)\n// console.log(futuro); //Thu Dec 25 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)\n\n// console.log(agora.getDate()); //dia hoje no caso dia 04/09/2025, me retorna 4\n// console.log(agora.getDay()); //retorna o dia da semana em numero, no dia de hoje quinta ent 4 pq quinta é o 4 dia da semana\n// console.log(agora.getMonth()); //tem base 0, estamos no mes 9 mas ele retonna 8\n\n// // getTime()\n// // O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.\n// console.log(agora.getTime()); //me retorna o tempo em segundos desde de 1970 até agora\n// console.log(futuro.getTime()); //agora me da o tempo em segundos desde a data de 1970 até oq eu defini em futuro\n\n// // claro para tranformar em dispatchEvent, comparar datas etc é necessario usar a matematica pra isSecureContext, com funcoes etc\n// function transformarDias(tempo) {\n//   return tempo / (24 * 60 * 60 * 1000); //formula matematica transformar os milessegundos em dias, (24 horas que tem um dia * 60 minutos q tem em uma hora, 60 segundos q tem em 1 minuto, 1000 milessegundos pra da um segundo)\n// }\n// console.log(transformarDias(agora.getTime())); //se passaram 20335.763845648147 dias desde 1970 até hoje\n\n// //com esses macetes posso comparar exemplo\n// const diasAgora = transformarDias(agora.getTime());\n// const diasFuturo = transformarDias(futuro.getTime());\n\n// console.log(Math.floor(diasFuturo - diasAgora)); //faltam 111 dias até de agora até a data q setei para o futuro, ele me da normalment eum numero quebrado dai é so usar o Math.floor\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?\n}");

/***/ },

/***/ "./js/modules/menu-mobile.js"
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector(\"[data-menu='button']\");\n  const menuList = document.querySelector(\"[data-menu='list']\");\n  const eventos = ['click', 'touchstart'];\n\n  function openMenu(event) {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((userEvent) => {\n      menuButton.addEventListener(userEvent, openMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?\n}");

/***/ },

/***/ "./js/modules/modal.js"
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector(\"[data-modal='abrir']\");\n  const botaoFechar = document.querySelector(\"[data-modal='fechar']\");\n  const containerModal = document.querySelector(\"[data-modal='container']\");\n  // sempre cirar uma verificacao pra identificar se nossos seletores existem\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n\n  function cliqueForaModal(event) {\n    //container modal é a section que carrega modal, ao clicar nela fecha tbm, o problema disso é que q section carrega tudo, ent ao clicar no que a section carrega tbm fecha o modal, porem o event faz referecnai a section que o this principal, ent é so criarmos um if se o clique foi no this, se foi nele fecha se n n fecha\n    if (event.target === this) {\n      toggleModal(event); //ao clicar do lado de fora a funcao cliqueFora executa a funcao fechar modal\n    }\n  }\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    //se n existir retorna undefined q é false\n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?\n}");

/***/ },

/***/ "./js/modules/outsideclick.js"
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callbak) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      //fazendo isso para não disparar eventos demais quando ficar clciando, vai verificasr se term o atributo, caso tenha ele retorna true e n faz nada, caso n tenha retorna false e agora ele dispara o evento e atribui o atributo\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      }); //colocamos o setTimeout para evitar acontecer tudo de uma vez so, por conta do bouble, o menu=mobile n iria funcionar sem ele (procurar compreender melhor a fila pra entender essa solução do setTimeout) a fase de bouble acontece primeiro q o setTimeout q é assincrono ent so acotnece o evento depois de toda verificação do bouble\n    });\n    element.setAttribute(outside, '');\n  }\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      //negando a operação pois se ela for true quer dizer q o elemento esta dentro, e se for false esta fora, ent ele precisa ser false para o if ser executado e retirar a classe ativo\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick); //removendo o evento quando clicar do lado de fora, para n acumular por uma boa pratica\n      });\n      callbak();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?\n}");

/***/ },

/***/ "./js/modules/scroll-animacao.js"
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\n\n  function animaScroll() {\n    sections.forEach((item) => {\n      //precisamos do loop para saber a distancia de cada item do topo\n      const sectionTop = item.getBoundingClientRect().top; //usamos o metodo bound pois ele retorna diversas propriedades uteis como a distancia do topo cm top\n      const isSectionVisible = sectionTop - windowMetade < 0; //peguei a variavel da metade da tela e diminui menos a section top, e toda vez q estiver nesse calculo vai anima se for menor que 0\n      if (isSectionVisible) {\n        //se for true ocorre a animacao com a classe\n        item.classList.add('ativo');\n      } else if (item.classList.contains('ativo')) {\n        item.classList.remove('ativo');\n      }\n    });\n  }\n\n  if (sections) {\n    //verificando se existe, pra fazer, se n existir n faz\n    const windowMetade = window.innerHeight * 0.6; //pega a altura da tela e multiplica por 0,6 pra pega pelo menos 60% da tela\n    // funcao que vai ser disparada ao scroll\n    animaScroll(); //executa a funcao pelo menos 1 vez pra quando o usuario entrar n esta tudo em branco\n\n    window.addEventListener('scroll', animaScroll); //anima o scroll do window q é o objeto maior\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?\n}");

/***/ },

/***/ "./js/modules/scroll-suave.js"
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  //coloco export defaut\n  const linksInternos = document.querySelectorAll(\n    \"[data-menu='suave'] a[href^='#']\",\n  );\n  function scrollToSection(event) {\n    event.preventDefault(); //previnir o parão do link obviamente\n    const href = event.currentTarget.getAttribute('href'); //currentTarget pq é o elemento clicado, poderia ser this tbm, e o getAttribute para pegar o atributo href\n    const section = document.querySelector(href); //como a section tem os ids com o mesmo href, eu fiz uma const q seleciona esses ids pelo href clciado\n    const topo = section.offsetTop;\n\n    //forma mais facil pois n precisa ver a distancia do top q a section esta, um metodo que recebe diversas propriedades dentro, as duas principais o behavior q é o tipo de animcao no caso a rolagem suave e o block q onde o scroll vai da block, no caso no inicio da section cm start\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n    // forma alternativa scroll\n    //window.scrollTo(0, topo); //scrollto é um metodo do window q leva dois parametros, eixo x e eixo y, como queremos manipular o y o x é 0, e como o valor q procuramos para da scroll é o top da section nos passamos offsetTop da section para que retorne o valor do top, fazendo com que ele va automaticamente  para o top\n    //window.scrollTo({\n    //  top: topo,\n    //  behavior:  \"smooth\", //propriedade que seta a rolagem suave\n    //});//ele tem um terceiro parametro q podemos passar tudo via objeto\n  }\n\n  linksInternos.forEach((item) => {\n    item.addEventListener('click', scrollToSection);\n  });\n}\n//initScrollSuave(); //não preciso da execução no module\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?\n}");

/***/ },

/***/ "./js/modules/tabav.js"
/*!*****************************!*\
  !*** ./js/modules/tabav.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabmenu = document.querySelectorAll(\"[data-tab='menu'] li\"); //selecionei cada li pois quero um evento em cada uma\n  const tabcontent = document.querySelectorAll(\"[data-tab='content'] section\"); //selecionei cada section pois elas que vão aparecer e desaparecer com base no evento do menu li\n\n  // fazendo uma verificacao pra ver se o elemento existe na pagina, caso exista ele executa o codigo, caso n n faz NamedNodeMap, isso previni erros noconsole\n\n  function activeTab(index) {\n    //recebe o parametro de index, para identificar qual section recebe ativo apos sem clicado no tabmenu\n    tabcontent.forEach((item) => {\n      // limpando o ativo de outros itens ao da start na funcao\n      item.classList.remove('ativo');\n    });\n    tabcontent[index].classList.add('ativo', tabcontent[index].dataset.anime); //add ativo somente no elemento clicado\n  }\n\n  if (tabmenu.length && tabcontent.length) {\n    //.leght pq se retornar o total de itens dentro maior que 0 é true, caso for 0 é false\n    tabcontent[0].classList.add('ativo'); //mantendo a primeira section como ativo\n\n    tabmenu.forEach((item, index) => {\n      //passando o parametro index tbm, pois ele leva esse mesmo index para o parametro de activetab\n      item.addEventListener('click', () => {\n        activeTab(index); //atribui o index do foreach dentro da propria funcao ativetab\n      }); //não passei apenas o nome da funcao depois do \"click\" pois temos q passar o index para funcao active\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabav.js?\n}");

/***/ },

/***/ "./js/modules/tooltip.js"
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]'); //primeiro passo selecionar todas as tooltips\n\n  function onMouseOver(event) {\n    const tooltipBox = criarTooltipBox(this); //executando a funcao de criar Tooltip com argumento do proprio this que no caso é o mapa.\n    //agora preciso de um evento para identificar quando o mouse sai para retirar as caixas, esse evento deve ocorrer no propio elemento que a funcao faz referencia no caso o this\n    onMouseLeave.tooltipBox = tooltipBox; //falei que o obejto fora do escopo onMouseLeave recebe uma propriedade tooltipBox com valor de tooltipBox desse escopo\n    onMouseLeave.element = this; //recebe uma proprieadade element com valor de this desse escopo, dessa forma o removeevent vai remover o evento desse this no escopo do objeto fora dessa funcao\n    this.addEventListener('mouseleave', onMouseLeave); //se passarmos essa funcao fora desse escopo vai da errado, mas por uma questão de organiação podemos passar um obejto que tem acesso a esse escopo fora dele\n    // agora preciso de um evento de mousemove para a toltip seguir o mesmo\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove); //tbm vou criar a funcao como objeto fora desse escopo\n  }\n\n  const onMouseLeave = {\n    handleEvent() {\n      //precisa ter esse metodo para executar acões\n      this.tooltipBox.remove(); //falando com o this.tooltipBox que faz referencia a tooltipBox dentro do escopo da funcao do evento onde onMouseLeave está\n      this.element.removeEventListener('mouseleave', onMouseLeave); //remove o evento do event listener do element do escopo onde esta o evento\n      this.element.removeEventListener('mousemove', onMouseMove); //removendo tbm a funcao quando tira o mouse do evento pra otimizar o codigo\n    },\n  };\n\n  const onMouseMove = {\n    handleEvent(event) {\n      //posso passar o parametro event aq dentro tbm\n      this.tooltipBox.style.top = event.pageY + 20 + 'px';\n      this.tooltipBox.style.left = event.pageX + 20 + 'px';\n      //style carrega todos os estilos do elemento. com ele conseguimos definir estilos, e atrave do evento conseguimos ter acesso a propriedades como pageY e pageX q é referente onde o mouse esta no momento, ent a logica é q o elemento recebe a posicao do topo e right com base no do mouse, tem q somar mais \"px\" pq o resultado e um valor inteiro, e no estilo passamos em px, somei mais 20 tbm pq o evento vai identifica o this e n a caixa, quando tem a caixa ele quebra o evento, o mouse sempre precisa ta no mapa\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div'); //cria uma div\n    tooltipBox.classList.add('tooltip'); //add classe na mesma\n    const text = element.getAttribute('aria-label'); //pega o atributo do parametro element passado no onMouseOver\n    tooltipBox.innerText = text; //atribuindo o texto do atributo a tooltipBox\n    document.body.appendChild(tooltipBox); //add ao final do body o tooltipBox\n    return tooltipBox;\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver); //evento quando o mouse entra no mapa\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?\n}");

/***/ },

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabav.js */ \"./js/modules/tabav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tabav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;