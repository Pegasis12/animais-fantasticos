export default function initTabNav() {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li"); //selecionei cada li pois quero um evento em cada uma
  const tabcontent = document.querySelectorAll("[data-tab='content'] section"); //selecionei cada section pois elas que vão aparecer e desaparecer com base no evento do menu li

  // fazendo uma verificacao pra ver se o elemento existe na pagina, caso exista ele executa o codigo, caso n n faz NamedNodeMap, isso previni erros noconsole

  function activeTab(index) {
    //recebe o parametro de index, para identificar qual section recebe ativo apos sem clicado no tabmenu
    tabcontent.forEach((item) => {
      // limpando o ativo de outros itens ao da start na funcao
      item.classList.remove('ativo');
    });
    tabcontent[index].classList.add('ativo', tabcontent[index].dataset.anime); //add ativo somente no elemento clicado
  }

  if (tabmenu.length && tabcontent.length) {
    //.leght pq se retornar o total de itens dentro maior que 0 é true, caso for 0 é false
    tabcontent[0].classList.add('ativo'); //mantendo a primeira section como ativo

    tabmenu.forEach((item, index) => {
      //passando o parametro index tbm, pois ele leva esse mesmo index para o parametro de activetab
      item.addEventListener('click', () => {
        activeTab(index); //atribui o index do foreach dentro da propria funcao ativetab
      }); //não passei apenas o nome da funcao depois do "click" pois temos q passar o index para funcao active
    });
  }
}
