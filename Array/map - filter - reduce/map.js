const numeros = [1, 2, 3, 4, 5];

const produtos = [
	{ produto: 'Agua', valor: '1', origem: 'SP' },
	{ produto: 'Chocolate', valor: '3.5', origem: 'RS' },
	{ produto: 'Suco', valor: '2.5', origem: 'SP' },
];

const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados);

const valoresProdutos = produtos.map(produto => produto.valor)

console.log(valoresProdutos);