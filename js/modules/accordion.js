export default function initAccordion(){
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt"); //selecionei o dt dentro da classe
  if(accordionList.length){
    accordionList[0].classList.add("ativo"); //atribuindo na primeira dt a classe de ativo pra o preiro elemento começar com a ceta pra cima
    accordionList[0].nextElementSibling.classList.add("ativo"); //atribuindo no primeiro dd de dt a classe de ativo pra começar aberto
  
    function activeAccordion(){
      this.classList.toggle("ativo"); //ativo no d tbm pra troca de cetinha no css
      this.nextElementSibling.classList.toggle("ativo"); //ja que o proximo elemento de dt é dd ele add a classe de ativo nele ao ser clicado, usei this ao invez do event.currentTarget
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}