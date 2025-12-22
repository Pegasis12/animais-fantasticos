export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((r) => {
      return r.json();
    })
    .then((json) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4); //se ueremos por exemplo uma doação de 100 reais em bitcoin é so dividir o valor que deseja pelo valor do bitcoin, e usar o toFixed pra apresenta somente 4 casas decimais ou a quantidade que vc escolher
    })
    .catch((erro) => {
      //sempre tratar os erros
      console.log(Error(erro));
    });
}
