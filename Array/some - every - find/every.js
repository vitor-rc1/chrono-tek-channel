const produtos = ['celular', 'tablet', 'computador', 'caneta', 'borracha'];

// busca por todo o Arra se todos tem a palavra 'celular'
const temCelular = produtos.every(produto => produto === 'celular');
console.log(temCelular);

// busca por todo o Array se todos tem a letra 'a' 
const temLetraA = produtos.every(produto => produto.includes('a'));
console.log(temLetraA);