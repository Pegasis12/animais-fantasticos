export default function initScrollSuave(){ //coloco export defaut
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");
  function scrollToSection(event){
    event.preventDefault(); //previnir o parão do link obviamente
    const href = event.currentTarget.getAttribute("href"); //currentTarget pq é o elemento clicado, poderia ser this tbm, e o getAttribute para pegar o atributo href
    const section = document.querySelector(href); //como a section tem os ids com o mesmo href, eu fiz uma const q seleciona esses ids pelo href clciado
    const topo = section.offsetTop;
  
    //forma mais facil pois n precisa ver a distancia do top q a section esta, um metodo que recebe diversas propriedades dentro, as duas principais o behavior q é o tipo de animcao no caso a rolagem suave e o block q onde o scroll vai da block, no caso no inicio da section cm start
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    // forma alternativa scroll
    //window.scrollTo(0, topo); //scrollto é um metodo do window q leva dois parametros, eixo x e eixo y, como queremos manipular o y o x é 0, e como o valor q procuramos para da scroll é o top da section nos passamos offsetTop da section para que retorne o valor do top, fazendo com que ele va automaticamente  para o top
    //window.scrollTo({
    //  top: topo,
    //  behavior:  "smooth", //propriedade que seta a rolagem suave
    //});//ele tem um terceiro parametro q podemos passar tudo via objeto
    }
  
    linksInternos.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
 //initScrollSuave(); //não preciso da execução no module

 