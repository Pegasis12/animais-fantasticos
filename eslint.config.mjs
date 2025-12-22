export default [
  {
    rules: {
      // 'no-console': 'error'
      indent: ['error', 2], //caso a indentação n seja de dois espaços
      'keyword-spacing': 'error', //trata erro de espacamento de uma palavra chave, exemplo if() correto na minha visao if () cm espaco
      'no-multiple-empty-lines': 'error', //da erro caso tenha multiplas linhas de espaco entre codigos
      'eol-last': ['error', 'always'], //sempre coloca uma ultima linha vazia nos arquivos js always = sempre
      semi: ['error', 'always'], //sempre colocar um ; no final
      'no-trailing-spaces': 'error', //espacamentos q n sao pra identacao
      'operator-assignment': 'error', //força o uso do += ao invez de por exemplo numero = numero + 2; forca a ser numero += 2;
      'no-inner-declarations': [
        'error',
        'functions',
        { blockScopedFunctions: 'disallow' }, //forca funcoes a serem criadas fora do escopo do if por exemplo
      ],
    },
  },
];
