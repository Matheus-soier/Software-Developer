let nome = 'Matheus Sampaio Soier';
let sobrenome = "            SOIER         "

let resultado = nome.length; // Quantos caracteres a variavel possui
let posicao = nome.indexOf('Soier'); //Qual posição esta a String desejada
let slice = nome.slice(-5); //Pega um pedaço ou uma parte da String e negativo pega de traz para a frente
let substring = nome.substring(8, 15) // Igual o slice porem apenas da esquerda para a direita
let substr = nome.substr(8, 15); // Primeiro parâmetro onde começa, segundo quantos caracteres pegar
let replace = nome.replace('Sampaio', "Gomes"); //Substitui uma parte da variavel
let uppercase = nome.toUpperCase();
let lowercase = nome.toLowerCase();
let trim = sobrenome.trim().toLowerCase(); //Dispensa espaços vazios
let chatat = nome.charAt(3); // Qual caracter está na posição
let caracter = nome[3]; //Qual caracter está na posição
let split = nome.split(' '); //Divide a String em um array

console.log(split[1]);
console.log(resultado, posicao, slice, substring, substr, replace, uppercase, lowercase, trim, chatat, caracter, split);