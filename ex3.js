const produto = {
  nome: "Notebook"
};

console.log(produto.fabricante?.nome);

//3. Qual será a saída do código abaixo?
//a) null
//b) undefined - apareceu esse!
//c) "Notebook"
//d) Erro
//Como fabricante não existe em produto, o operador ?.  retorna undefined.