const calculoComplexo = (numero, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero + numero2 > 25) {
      return setTimeout(() => resolve(numero + numero2), 
      2000);
      
    }

    reject("Operação inválida");
  })
}

const resultado = calculoComplexo(20,30)
  .then(resposta => console.log(resposta));
console.log(resultado);
console.log('Terminou');
