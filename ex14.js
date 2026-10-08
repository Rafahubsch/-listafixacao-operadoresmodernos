const nome = "";

console.log(nome || "Visitante");

// Qual será o resultado?
//a) ""
//b) "Visitante"-esse
//c) null
//d) undefined
//O "" é considerada um valor false. O operador || ignora valores false e seleciona o próximo valor verdadeiro que seria o ("Visitante").