const produtos = ['celular', 'tablet', 'computador', 'caneta', 'borracha'];

// procura por todo Array se tem pelo menos um item com a string 'caneta'
const temCaneta = produtos.some(produto => produto === 'caneta');
console.log(temCaneta);

// procura por todo Array se tem pelo menos um item com a string 'grafite'
const temGrafite = produtos.some(produto => produto === 'grafite');
console.log(temGrafite);
