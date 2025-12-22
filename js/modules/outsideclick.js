export default function outsideClick(element, events, callbak) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      //fazendo isso para não disparar eventos demais quando ficar clciando, vai verificasr se term o atributo, caso tenha ele retorna true e n faz nada, caso n tenha retorna false e agora ele dispara o evento e atribui o atributo
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      }); //colocamos o setTimeout para evitar acontecer tudo de uma vez so, por conta do bouble, o menu=mobile n iria funcionar sem ele (procurar compreender melhor a fila pra entender essa solução do setTimeout) a fase de bouble acontece primeiro q o setTimeout q é assincrono ent so acotnece o evento depois de toda verificação do bouble
    });
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      //negando a operação pois se ela for true quer dizer q o elemento esta dentro, e se for false esta fora, ent ele precisa ser false para o if ser executado e retirar a classe ativo
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick); //removendo o evento quando clicar do lado de fora, para n acumular por uma boa pratica
      });
      callbak();
    }
  }
}
