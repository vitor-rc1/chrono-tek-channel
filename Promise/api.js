const fetch = require('node-fetch');

const endereco = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(response =>  response.json())
  .then(json => console.log(json));

console.log(endereco)