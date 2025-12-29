export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    //verificando se existe, pra fazer, se n existir n faz
    const windowMetade = window.innerHeight * 0.6; //pega a altura da tela e multiplica por 0,6 pra pega pelo menos 60% da tela

    function animaScroll() {
      sections.forEach((item) => {
        //precisamos do loop para saber a distancia de cada item do topo
        const sectionTop = item.getBoundingClientRect().top; //usamos o metodo bound pois ele retorna diversas propriedades uteis como a distancia do topo cm top
        const isSectionVisible = sectionTop - windowMetade < 0; //peguei a variavel da metade da tela e diminui menos a section top, e toda vez q estiver nesse calculo vai anima se for menor que 0
        if (isSectionVisible) {
          //se for true ocorre a animacao com a classe
          item.classList.add('ativo');
        } else if (item.classList.contains('ativo')) {
          item.classList.remove('ativo');
        }
      });
    }

    // funcao que vai ser disparada ao scroll
    animaScroll(); //executa a funcao pelo menos 1 vez pra quando o usuario entrar n esta tudo em branco

    window.addEventListener('scroll', animaScroll); //anima o scroll do window q é o objeto maior
  }
}
