//Manipulação de String -> Atualização ES6

let telefone = '5';

console.log(telefone.padEnd(9, '*')); //Completa a quantidade de espaço para trás
console.log(telefone.padStart(9, '*')); //Completa a quantidade de espaço para frente


const cartao = "4561214774466413";
const lastDigits = cartao.substring(12, 16); // Pegando os ultimos 4 digitos
console.log(`Este é o seu cartão? ${lastDigits.padStart(16, '*')}`);


