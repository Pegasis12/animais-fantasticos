import outsideClick from './outsideclick.js'; //separei o outside e importei ele aq dentro

export default class DropdownMenu {
  constructor(dropdownsMenus, events) {
    this.dropdownsMenus = document.querySelectorAll(dropdownsMenus);
    this.activeClass = 'ativo';

    //define touchstart e click argumento undfined, caso usuario informe ele pega os informados
    if (this.events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //ativa o dropdownmenu e adiciona a funcao que oabserva o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // add os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownsMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownsMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
