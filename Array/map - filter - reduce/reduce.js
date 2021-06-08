const numeros = [1, 2, 3, 4, 5];
const produtos = [
	{ produto: 'Agua', valor: 1, origem: 'SP' },
	{ produto: 'Chocolate', valor: 3.5, origem: 'RS' },
	{ produto: 'Suco', valor: 2.5, origem: 'SP' },
];


const total = numeros.reduce((acc, curr) => {
  return acc + curr
});
// quando não é passado o valor inicial, o acc recebe o valor da primeira posição do array numeros
// no caso valor 1
console.log(total);


const total = produtos.reduce((acc, curr) => {
    return acc + curr.valor
}, 0);

console.log(total);