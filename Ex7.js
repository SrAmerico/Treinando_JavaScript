// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

var soma = 0;

var contador = 1;

// Enquanto o contador for menor ou igual a 100
while (contador <= 100) {
  // Adiciona o valor do contador à soma
  soma = soma + contador;

  contador = contador + 1;
}

console.log("A soma é: " + soma);


