export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; //pega a altura da tela e multiplica por 0,6 pra pega pelo menos 60% da tela

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      //precisamos do loop para saber a distancia de cada section do topo
      const sectionTop = section.getBoundingClientRect().top; //usamos o metodo bound pois ele retorna diversas propriedades uteis como a distancia do topo cm top
      const isSectionVisible = sectionTop - this.windowMetade < 0; //peguei a variavel da metade da tela e diminui menos a section top, e toda vez q estiver nesse calculo vai anima se for menor que 0
      if (isSectionVisible) {
        //se for true ocorre a animacao com a classe
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll); //anima o scroll do window q é o objeto maior
  }
}
