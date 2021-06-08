const produtos = [
	{ produto: 'Agua', valor: 1, origem: 'SP' },
	{ produto: 'Chocolate', valor: 3.5, origem: 'RS' },
	{ produto: 'Suco', valor: 2.5, origem: 'SP' },
];

const total = produtos
.filter(produto => produto.origem === 'SP')
.map(produto => produto.valor)
.reduce((acc, curr) => acc +curr);

console.log(total);