import initAnimaNumeros from './anima-numeros.js'; //importando a animacao aq, pois ea precisa ser executada so depois do fetch, pq se n ele vai ser executado antes do fetch ser concluido e ja vai tentar animar algo que n existe
export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      //trantando o erro
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json(); //retorna a array de animais
      const numeros = document.querySelector('.numeros-grid');

      animaisJSON.forEach((animal) => {
        //percorrendo a array com foreach e passando como argumento cada animal
        const divAnimal = createAnimal(animal);
        numeros.appendChild(divAnimal);
      });
      initAnimaNumeros(); //executando a aniamcao depois do fetch, o fech conclui ai sim ele é executado
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('./animaisapi.json');
}
