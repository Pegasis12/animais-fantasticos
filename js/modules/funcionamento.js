export default class Funcionamento {
  // o objetivo do script é comparar a data e hora do cliente pra saber se estamos fechados ou abertos, caso esteja fechado vai atribuir uma classe a uma bolinha em que ela vai ficar vermelha, cso esteja aberto a classe atribuida sera verde
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number); //macetinho se passar number dentro de map ele ja me reotrna number a array
    this.horariosSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number); //pega o horario dentro de data-horario
  }

  //Me retorna uma string do conteudo dentro do data-semana, para compara tenho q transformar em array, pra isso do split em (,) porem ainda n acabou pois ele me retorna a array com string, e quero number, pra isso podemos interagir com map, lembrando q ele intera na array e retorna uma array nova modificada, diferente do foreach

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3; //pega exatamente o horario de agora, utc pra se estiver em outro pais ele pegue o time corretmanete -3 do brasil
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1; //Se for diferente de menos 1 é verdadeiro. A expressão me retorna onde esta o index na array exemplo, hoje é dia 4 os dias que tem dentro de dias semana são [1,2,3,4,5] ele vai verificar onde meu dia de hoje esta na array, no caso na posição 3 do array que é 4, caso n encontre me retorna -1
    const horarioAberto =
      this.horarioAgora >= this.horariosSemana[0] &&
      this.horarioAgora < this.horariosSemana[1]; //verifica se o horario de agora é maior que 8 e menor q 18

    return semanaAberto && horarioAberto; //retorna true ou false, com base nas operacoes acima
  }

  ativaAberto() {
    if (this.estaAberto()) {
      //se o retorno do metodo for true ele roda a classe aberto
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      //ativando os metodos de dadosFuncionamento e dadosagora pois eles precisam rodas pra funcionar e depois fazer o ativaaberto
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

// // new Date()
// // O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.
// const agora = new Date();
// //posso passar uma data futura tbm
// const futuro = new Date('Dec 25 2025'); //alem de atribuir isso posso passar a hora o gmt etc

// console.log(agora); //horario, data com base no sistema - Thu Sep 04 2025 15:05:04 GMT-0300 (Horário Padrão de Brasília)
// console.log(futuro); //Thu Dec 25 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)

// console.log(agora.getDate()); //dia hoje no caso dia 04/09/2025, me retorna 4
// console.log(agora.getDay()); //retorna o dia da semana em numero, no dia de hoje quinta ent 4 pq quinta é o 4 dia da semana
// console.log(agora.getMonth()); //tem base 0, estamos no mes 9 mas ele retonna 8

// // getTime()
// // O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
// console.log(agora.getTime()); //me retorna o tempo em segundos desde de 1970 até agora
// console.log(futuro.getTime()); //agora me da o tempo em segundos desde a data de 1970 até oq eu defini em futuro

// // claro para tranformar em dispatchEvent, comparar datas etc é necessario usar a matematica pra isSecureContext, com funcoes etc
// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000); //formula matematica transformar os milessegundos em dias, (24 horas que tem um dia * 60 minutos q tem em uma hora, 60 segundos q tem em 1 minuto, 1000 milessegundos pra da um segundo)
// }
// console.log(transformarDias(agora.getTime())); //se passaram 20335.763845648147 dias desde 1970 até hoje

// //com esses macetes posso comparar exemplo
// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(Math.floor(diasFuturo - diasAgora)); //faltam 111 dias até de agora até a data q setei para o futuro, ele me da normalment eum numero quebrado dai é so usar o Math.floor
