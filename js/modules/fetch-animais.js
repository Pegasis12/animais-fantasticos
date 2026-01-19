import AnimaNumeros from './anima-numeros.js'; //importando a animacao aq, pois ea precisa ser executada so depois do fetch, pq se n ele vai ser executado antes do fetch ser concluido e ja vai tentar animar algo que n existe
export default function fetchAnimais(url, target) {
  //cria a div cm as informacoes cm total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    //percorrendo a array com foreach e passando como argumento cada animal
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //anima os numeros de cada animal
  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais atravez do json e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      //fetch espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json(); //retorna a array de animais em json

      //apos a transformacao de json ativa as funcoes para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
