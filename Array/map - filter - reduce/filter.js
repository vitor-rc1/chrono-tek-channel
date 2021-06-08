const numeros = [1, 2, 3, 4, 5];
const produtos = [
	{ produto: 'Agua', valor: '1', origem: 'SP' },
	{ produto: 'Chocolate', valor: '3.5', origem: 'RS' },
	{ produto: 'Suco', valor: '2.5', origem: 'SP' },
];

const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares);

const origemSP = produtos.filter(produto => produto.origem === 'SP');

console.log(origemSP);