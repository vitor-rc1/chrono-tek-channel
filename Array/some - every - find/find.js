const pessoas = [
  { nome: 'Vitor', sobrenome: 'Santos', profissao: 'Dev' },
  { nome: 'Milena', sobrenome: 'Santos', profissao: 'Contadora' },
  { nome: 'Sandra', sobrenome: 'Rodrigues', profissao: 'Advogada' },
  { nome: 'Denner', sobrenome: 'Souza', profissao: 'Dev' },
]

// procura no Array a pessoa que tem o sobrenome Santos
// Retorna o primeiro resultado
const santos = pessoas.find(pessoa => pessoa.sobrenome === 'Santos');
console.log(santos)

// procura no Array a pessoa que tem o sobrenome Gomes
// Como a lista não tem ninguem com sobrenome Gomes retorna undefined
const gomes = pessoas.find(pessoa => pessoa.sobrenome === 'Gomes');
console.log(gomes)