export default function initAnimaNumeros() {
  function animaNumeros() {
    //fiz uma funcao coloquei tudo dentro
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((item) => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        item.innerText = start;
        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random()); //um tempo diferente pra cada execução de cada item
    });
  }

  function handleMutation(mutation) {
    //recebe um parametro especial omo se fosse o event, com ele podemos verificar se existea classe ativo
    if (mutation[0].target.classList.contains('ativo')) {
      //se existir ativo ele disconecta o observador e anima os numeros
      observer.disconnect(); //disconecta
      animaNumeros(); //anima os numeros uma vez pq mesmo rodando agora ele ja vai esta desconectado
    }
  }

  // MutationObserver é um objeto que observa um atributo ou algo se modificando
  const observer = new MutationObserver(handleMutation); //recebe como argumento um callback

  const observerTarget = document.querySelector('.numeros'); //selecionei a section numeros
  //um metodo de Mutation observe() pra identificar qual elemento ele deve observar, no caso ele observa nossa section numeros
  observer.observe(observerTarget, { attributes: true }); //alem do argumento de oq observar ele tbm recebe mais argumentos, como um objeto de configuração, no nosso caso ele observa a modifição dos atributos da section numeros
}
