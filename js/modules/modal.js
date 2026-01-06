export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //bind para referenciar o this correto das funcoes
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  //abre ou fecha  modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //add o evento de togle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha modal ao clicar do lado de ora
  cliqueForaModal(event) {
    //container modal é a section que carrega modal, ao clicar nela fecha tbm, o problema disso é que q section carrega tudo, ent ao clicar no que a section carrega tbm fecha o modal, porem o event faz referecnai a section que o this principal, ent é so criarmos um if se o clique foi no this, se foi nele fecha se n n fecha
    if (event.target === this.containerModal) {
      this.toggleModal(); //ao clicar do lado de fora a funcao cliqueFora executa a funcao fechar modal
    }
  }

  //add os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
