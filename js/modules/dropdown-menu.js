import outsideClick from './outsideclick.js'; //separei o outside e importei ele aq dentro

export default function initDropdownMenu() {
  const dropdownsMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropdownsMenus.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
}
