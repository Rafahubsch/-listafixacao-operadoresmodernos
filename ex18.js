const aluno = {
  nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

//Primeira saida: 10

//Segunda saida: 0

//Explicação: 0 é considerado false pelo operador ||,ai a escolha vai 10. Ja o operador ?? aceita o 0 porque ele so substitui o valor se for null ou undefined.