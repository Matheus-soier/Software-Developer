/*Opções 
String para Number:
-> Number.parseFloat(n);
-> Number.parseInt(n);
-> NUmber(n);

Number para String:
-> String(n);
-> n.toString();
*/

let n1 = Number.parseFloat(window.prompt(`Digite um numero: `));
let n2 = Number(window.prompt(`Digite outro numero: `));
let s = n1 + n2;
let salario = 1550.5;
window.alert(`A soma de ${n1} e ${n2} é igual a: ${s.toString()}`);
window.alert(`${salario.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})}`); //mostrar em BRL