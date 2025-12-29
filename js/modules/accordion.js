export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list); //selecionei o dt dentro da classe
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass); //ativo no d tbm pra troca de cetinha no css
    item.nextElementSibling.classList.toggle(this.activeClass); //ja que o proximo elemento de dt é dd ele add a classe de ativo nele ao ser clicado, usei this ao invez do event.currentTarget
  }

  //add os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  //iniciar funcao
  init() {
    if (this.accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
