let prompt = require('prompt-sync')()

let numero = parseFloat(prompt('Digite sua idade: '))

while(numero <18) {
    numero = parseInt(prompt('Digite sua idade: '))
}

console.log('Voce ja atingiu a maioridade.')