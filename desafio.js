const usuario = {
  nome: "",
  idade: 0,
  endereco: null
};

console.log(usuario.nome || "Visitante"); //"Visitante" (String vazia "" é false)
console.log(usuario.nome ?? "Visitante");//"" (String vazia)
console.log(usuario.idade || 18);//18 (0 é false)
console.log(usuario.idade ?? 18);//0 (0 não é null nem undefined)
console.log(usuario.endereco?.cidade);//undefined (Acessou cidade de forma segura em um endereco nulo)
console.log(usuario.endereco?.cidade ?? "Sem cidade");//"Sem cidade" (Resultado foi undefined)

