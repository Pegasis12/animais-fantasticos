export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  // quando tenho uma funcao dentro de uma classe q n referencia nada da classe dentro dela podemos chamala de static
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random()); //um tempo diferente pra cada execução de cada item
  }

  // ativa incrementar numero para cada numero selecionadono dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero),
    ); //funcoes statics devem ser chamadas pelo construtor
  }

  // funcao que ocorre quando a mutacao ocorrrer
  handleMutation(mutation) {
    //recebe um parametro especial omo se fosse o event, com ele podemos verificar se existea classe ativo
    if (mutation[0].target.classList.contains(this.observerClass)) {
      //se existir ativo ele disconecta o observador e anima os numeros
      this.observer.disconnect(); //disconecta
      this.animaNumeros(); //anima os numeros uma vez pq mesmo rodando agora ele ja vai esta desconectado
    }
  }

  //add o MutationObserver para verificar quando  a classse ativo e adicionado ao target
  addMutationObserver() {
    // MutationObserver é um objeto que observa um atributo ou algo se modificando
    this.observer = new MutationObserver(this.handleMutation); //recebe como argumento um callback
    //um metodo de Mutation observe() pra identificar qual elemento ele deve observar, no caso ele observa nossa section numeros
    this.observer.observe(this.observerTarget, { attributes: true }); //alem do argumento de oq observar ele tbm recebe mais argumentos, como um objeto de configuração, no nosso caso ele observa a modifição dos atributos da section numeros
  }

  init() {
    if (this.numeros.lenght || this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
