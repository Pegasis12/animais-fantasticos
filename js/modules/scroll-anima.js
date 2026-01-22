export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; //pega a altura da tela e multiplica por 0,6 pra pega pelo menos 60% da tela

    this.checkDistance = this.checkDistance.bind(this);
  }

  //captura a distancia do top de cada sectione retonna um objeto com o elemento e a distancia offsetTop
  getDistance() {
    // quero o retorno do this.distance, por isso se usa map, pq map retorna o dado, porem preciso desestruturar o this.sections, pois ele n é uma array
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop; //offsetTop pega a distancia exata do top das secoes, mesmo cm scroll mostra a distancia da sessão até o topo
      // retorno um objeto
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  //checa se a distancia do scroll em relacao a o ofsset da section e anima a mesma
  checkDistance() {
    // pageYOffset retorna o valor real do scroll no eixo y
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance); //anima o scroll do window q é o objeto maior
    }
    return this;
  }

  //remove o evento, apenas deixei aq para caso queiramos fazer uma pausa caso algo ocorra temos aq
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
