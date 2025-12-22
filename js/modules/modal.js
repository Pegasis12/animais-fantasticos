export default function initModal(){
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");
  // sempre cirar uma verificacao pra identificar se nossos seletores existem
  if(botaoAbrir && botaoFechar && containerModal){ //se n existir retorna undefined q é false
    function toggleModal(event){
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }
    
    function cliqueForaModal(event){
       //container modal é a section que carrega modal, ao clicar nela fecha tbm, o problema disso é que q section carrega tudo, ent ao clicar no que a section carrega tbm fecha o modal, porem o event faz referecnai a section que o this principal, ent é so criarmos um if se o clique foi no this, se foi nele fecha se n n fecha
       if(event.target === this){
        toggleModal(event); //ao clicar do lado de fora a funcao cliqueFora executa a funcao fechar modal
       }
    }
    
    
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}