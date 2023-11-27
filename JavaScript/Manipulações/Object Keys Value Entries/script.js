let numerosArray = [1,2,3,4,5];
let numerosObject = {nome: "teste", idade: 10};
console.log(typeof numerosArray, typeof numerosObject, typeof numero); // Type de variável

console.log(Object.keys(numerosArray)); // Retorna os indices do array
console.log(Object.values(numerosArray)); // Retorna o proprio array
console.log(Object.entries(numerosArray)); // Retorna arrays com o indice e o valor de cada posição

let pessoa = {
    nome: "teste",
    idade: 90,
    sobrenome: "TesteSobrenome"
}

console.log(Object.keys(pessoa)); // Cria um array mostrando as chave do objeto (muito util);
console.log(Object.values(pessoa)); // Retorna os valores dos objetos
console.log(Object.entries(pessoa)); // Retorna um array com todas informações do objeto

