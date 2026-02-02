import debounce from './debounce.js';
export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);

    // obejto geral pra armazenar dados de onde o slide esta etc
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.activeClass = 'active';
    // evento pra mudar a paginacao quando usaurio passar slide movimentando ou clicando nos botoes de anterior e nex
    this.changeEvent = new Event('changeEvent');
  }

  // metodo pra adicionar transition animation ao mover slide
  trasition(active) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3D(${distX}px, 0, 0)`;
  }

  updadetePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let moveType;
    // verificamos se é um evento mobile ou desk
    if (event.type === 'mousedown') {
      event.preventDefault();
      // captura o x da posicao em que o usuario clicou e atribui a propriedade do objeto
      this.dist.startX = event.clientX;
      moveType = 'mousemove';
    } else {
      // faz a mesma coisa mas caso seja mobile ele atribui o primeiro touch 0 e captura o clieteX dele
      this.dist.startX = event.changedTouches[0].clientX;
      moveType = 'touchmove';
    }

    // o evento de mousemove deve ser add logo no start pois assim o evento star apenas apos o click do usuario e n so de passar o mouse
    //passando o moveType da verificacao acima
    this.wrapper.addEventListener(moveType, this.onMove);
    this.trasition(false);
  }

  onMove(event) {
    // verificamos o tipo de evento numa constante pra atribui o type do mesmo no update
    const pointerPosition =
      event.type === 'mousemove'
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.updadetePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  // on end remove o evento de mousemove ao acontecer o evento de mouseup
  onEnd(event) {
    // verificando tbm o tipo de evento para ser finalizado
    const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.trasition(true);
    this.changeSlideOnEnd();
  }

  // muda o slide no final
  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvents() {
    // disparando tanto evento mobile quanto desk
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  //slides config
  // metodo usado para capturar onde cada elemento do slide esta no centro, totalda tela menos o total do item e divide pra dois pra ter a margem
  slidePosition(slide) {
    const margem = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margem);
  }

  slidesConfig() {
    // pegando cada slide e desestruturando os filhos pra tranformar cada elemento em um item da array, usando map para modificar e retornar uma array com os dados da operação, element que captura o elemento em si, e position pra capturar apoiscao desse elemento
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { position, element };
    });
  }

  //index da minha navegação dos slides, saber o anterior, proximo, se pode ou n ir ou voltar
  slidesIndexNav(index) {
    // pegamos o total da array do slide, diminuimos menos 1 e encontramos o ultimo elemento
    const last = this.slideArray.length - 1;
    this.index = {
      // se index for true ele retorna index - 1, caso ele n exista ou seja n tem valor true ele retorna undefined
      prev: index ? index - 1 : undefined,
      active: index,
      // se index for igual ao last ele retorna undefined, caso n seja ele retorna + 1 pra ir pro proximo pq existe
      next: index === last ? undefined : index + 1,
    };
  }

  //move o slide pro index passado
  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    // ativando o evento criado - changeEvent toda vez q muda o slide
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  //ativando a classe active no slide ativo
  changeActiveClass() {
    this.slideArray.forEach((item) => {
      item.element.classList.remove(this.activeClass);
    });
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
  }

  // ativa o slide anterior
  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }

  //ativa o proximo slide
  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next);
  }

  //resetar resize quando a tela ser redmensionada pro slide n bugar
  onResize() {
    // passando stTime para esperar a tela ser redimensionada e depois rodar
    setTimeout(() => {
      //reativando a configuração pra ele peagar a nova
      this.slidesConfig();
      //passando novamente o slide ativo pra resposicionar corretamente
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  // evento de bind pra referenciar o this corretamente dos callbacks, agora o metodo referencia o objeto e n o elemento do evento
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    //passando debounce pro onResize n ocorrer diversas vezes
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.trasition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.addResizeEvent();
    // ativando pelo menos uma vez
    this.changeSlide(0);
    return this;
  }
}

// nada mais é do que uma classe que erda metodos e propriedades da slide
export default class SlideNav extends Slide {
  constructor(slide, wraper) {
    // quando uso construtor de uma classe extendida n posso esquecer do super pra puxar tudo da anterior
    super(slide, wraper);
    this.bindControlEvents();
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addErrowEvent();
  }

  //add evento de prev e nex aoclicar nos botões
  addErrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }

  //cria o elemento de paginação
  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';

    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${
        index + 1
      }</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  //cria o evento de clicar na paginação e ir para o slide
  eventControl(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    // observando o evento de dispatchEvent, passamos um evento no wrapper, que tem como acao a mudanca de slide, q ao ser ativado ele inicia a funcao de activeControllItem
    this.wrapper.addEventListener('changeEvent', this.activeControlItem);
  }

  // add classe ativo para mantero bg colorido pro usuario identificar onde esta a paginação
  activeControlItem() {
    this.controlArray.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.controlArray[this.index.active].classList.add(this.activeClass);
  }

  //executa o evento do evenControl
  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    // ativa uma primeira vez
    this.activeControlItem();
    //add umevento individual pra cada um dos lis de controlArray
    this.controlArray.forEach(this.eventControl);
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
