export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this); //em scrollToSection this.scrollToSection no evento, perde a referenciado this, ocasionando em erro, o bild, me permite definir um this padrão para esse metodo
  }

  scrollToSection(event) {
    event.preventDefault(); //previnir o parão do link obviamente
    const href = event.currentTarget.getAttribute('href'); //currentTarget pq é o elemento clicado, poderia ser this tbm, e o getAttribute para pegar o atributo href
    const section = document.querySelector(href); //como a section tem os ids com o mesmo href, eu fiz uma const q seleciona esses ids pelo href clciado
    const topo = section.offsetTop;
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener('click', this.scrollToSection); //não funciona sem definir um this, pq o atual faz referencia errada, necessario apssar bild com this padrão
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this; //retornamos this pq assim quando a classe for chamada para acao conseguimos linkar metodos e propriedades
  }
}
