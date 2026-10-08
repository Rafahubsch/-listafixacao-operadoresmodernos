const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

//quantidade || 10 resulta em 10  por que o operador || trata 0 como um valor false, logo ele ignora o 0.

//quantidade ?? 10 resulta em 0: O operador ?? considera null nulo. Ai ele consta como 0.