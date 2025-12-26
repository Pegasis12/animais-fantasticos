const path = require('path'); //preciso importar o pacote path do nodejs pra funcionar corretamente, retorna m obejto com varios metodos

module.exports = {
  entry: './js/script.js', //entrada arquivo script.js
  output: {
    //saida um pouco mais detalhada tendo que passar o caminho absoluto do computador, o requeire path ajuda nisso
    path: path.resolve(__dirname, './'), //agrupa vrios caminho diferente em um caminho unico, __dirname pega o diretorio atual do projeto é uma variavel global do nodejs
    filename: 'main.js', //nome do arquivo de saida
  },
  module: {
    //inidicando para o webpack que vamos usar regras de modulos
    rules: [
      //aqui dentro vao as regras, cada regra é um objeto, vamos ter apenas uma regra
      {
        test: /\.js$/, //um regex que vai procurar por todos os arquivos que terminam com .js
        exclude: /node_modules/, //exclui a pasta node_modules pra verificar apenas os arquivos do projeto
        use: {
          //indica oq ele vai usar
          loader: 'babel-loader', //babel-loader é o babel
          options: {
            presets: ['@babel/preset-env'], //preset-env é um conjunto de plugins do babel que vao transpilar o codigo
            plugins: ['@babel/plugin-transform-runtime'], //plugin que vai ajudar a reduzir o tamanho do codigo final
          },
        },
      },
    ],
  },
};
