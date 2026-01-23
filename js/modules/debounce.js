export default function debounce(callback, delay) {
  let timer;

  return (...args) => {
    //desestruturando o args conseguimos passar argumentos se necessario
    //debonce leva 2 argumentos
    if (timer) {
      //verifico se timer existe antes de limpalo
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      //no primeiro argumento de settime eu passo uma arrowfunction com o callback sendo ativado e timer = a null
      callback(...args);
      timer = null;
    }, delay);
  };
}
