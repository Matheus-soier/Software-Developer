let d = new Date(2020, 3, 19, 10, 11, 12); // Ano / Mês / Dia / Hora / Minuto / Segundo

console.log(d);
console.log(d.getFullYear()); //Selecionando Ano da data
console.log(d.getMonth()); //Selecionando mês da data
console.log(d.getDay()) //Selecionando dia da semana, Exemplo: Domingo = 0.
console.log(d.getDate()); //Selecionado o dia atual
console.log(d.getHours()); //Selecionando as horas
console.log(d.getMinutes()); //Selecionando as Minutos
console.log(d.getSeconds()); //Selecionando as Segundos
console.log(d.getMilliseconds()); //Selecionando os milisegundos

let tempoAgora = Date.now();
console.log(tempoAgora);

let dManipulado = new Date();

dManipulado.setFullYear(2018); //Setando um novo ano a data padrão
dManipulado.setMonth(11); //Setando um mês novo

dManipulado.setDate(dManipulado.getDate() + 5); //Somando 5 dias na data padrão

console.log(dManipulado);

//Exercicio

let m = new Date(2021, 9, 23);

m.setDate( m.getDate() + 100);

console.log(m);