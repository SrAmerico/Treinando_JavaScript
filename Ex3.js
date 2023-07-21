// 3. Faça um programa que imprima os números ímpares de 0 a 50;

// for (inicializacao; condicao; contador += 2)
// for (inicializacao; condicao; contador = contador + 2)

let prompt = require('prompt-sync')()
for(let contador = 1; contador <= 50; contador += 2){
    console.log(contador)
}