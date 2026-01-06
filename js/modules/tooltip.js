export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    //bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //move a tooltip com base em seus estilos de acordocom a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    if (event.pageX + 190 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + 'px';
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  //remove as tooltips e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  //cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const text = element.getAttribute('aria-label');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //cria a tooltip e adiciona os eventos de mouseleave e mousemove ao target
  onMouseOver({ currentTarget }) {
    //cria a tooltipBox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  //add evento de onmouseover as tooltips
  addToltipEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addToltipEvents();
    }
    return this;
  }
}
