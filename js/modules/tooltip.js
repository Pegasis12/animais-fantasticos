export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]'); //primeiro passo selecionar todas as tooltips

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this); //executando a funcao de criar Tooltip com argumento do proprio this que no caso é o mapa.
    //agora preciso de um evento para identificar quando o mouse sai para retirar as caixas, esse evento deve ocorrer no propio elemento que a funcao faz referencia no caso o this
    onMouseLeave.tooltipBox = tooltipBox; //falei que o obejto fora do escopo onMouseLeave recebe uma propriedade tooltipBox com valor de tooltipBox desse escopo
    onMouseLeave.element = this; //recebe uma proprieadade element com valor de this desse escopo, dessa forma o removeevent vai remover o evento desse this no escopo do objeto fora dessa funcao
    this.addEventListener('mouseleave', onMouseLeave); //se passarmos essa funcao fora desse escopo vai da errado, mas por uma questão de organiação podemos passar um obejto que tem acesso a esse escopo fora dele
    // agora preciso de um evento de mousemove para a toltip seguir o mesmo
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove); //tbm vou criar a funcao como objeto fora desse escopo
  }

  const onMouseLeave = {
    handleEvent() {
      //precisa ter esse metodo para executar acões
      this.tooltipBox.remove(); //falando com o this.tooltipBox que faz referencia a tooltipBox dentro do escopo da funcao do evento onde onMouseLeave está
      this.element.removeEventListener('mouseleave', onMouseLeave); //remove o evento do event listener do element do escopo onde esta o evento
      this.element.removeEventListener('mousemove', onMouseMove); //removendo tbm a funcao quando tira o mouse do evento pra otimizar o codigo
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      //posso passar o parametro event aq dentro tbm
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
      //style carrega todos os estilos do elemento. com ele conseguimos definir estilos, e atrave do evento conseguimos ter acesso a propriedades como pageY e pageX q é referente onde o mouse esta no momento, ent a logica é q o elemento recebe a posicao do topo e right com base no do mouse, tem q somar mais "px" pq o resultado e um valor inteiro, e no estilo passamos em px, somei mais 20 tbm pq o evento vai identifica o this e n a caixa, quando tem a caixa ele quebra o evento, o mouse sempre precisa ta no mapa
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div'); //cria uma div
    tooltipBox.classList.add('tooltip'); //add classe na mesma
    const text = element.getAttribute('aria-label'); //pega o atributo do parametro element passado no onMouseOver
    tooltipBox.innerText = text; //atribuindo o texto do atributo a tooltipBox
    document.body.appendChild(tooltipBox); //add ao final do body o tooltipBox
    return tooltipBox;
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver); //evento quando o mouse entra no mapa
  });
}
