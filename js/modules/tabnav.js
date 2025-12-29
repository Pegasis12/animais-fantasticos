export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu); //selecionei cada li pois quero um evento em cada uma
    this.tabcontent = document.querySelectorAll(content); //selecionei cada section pois elas que vão aparecer e desaparecer com base no evento do menu li
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    //recebe o parametro de index, para identificar qual section recebe ativo apos sem clicado no tabmenu
    this.tabcontent.forEach((item) => {
      // limpando o ativo de outros itens ao da start na funcao
      item.classList.remove(this.activeClass);
    });
    this.tabcontent[index].classList.add(
      this.activeClass,
      this.tabcontent[index].dataset.anime,
    ); //add ativo somente no elemento clicado
  }

  //add evento
  addTabNavEvent() {
    this.tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  //metodo pra iniciar
  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      //ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
