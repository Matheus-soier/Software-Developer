let info = ['Matheus Soier', 'Matheus', 'Soier', '@eusoier'];

let [nomeCompleto, nome, sobrenome, instagram] = info; //Salvando um array por variável
let [primeiroItem, ...resto] = info; //o operador (...) salva todo o resto do array não usado, em uma variavel
let [primeiro, , ,quarto] = info; // pula os itens do array de acordo com a quantidade de virgula
let [idade, matricula] = [90, 42433965829]; //Criando um array já desconstruido

console.log(matricula);
console.log(resto);


// let numeros = [10, 20, 30, 50];

// function soma(primeiro, segundo) {
//     return primeiro + segundo;
// }

// console.log(soma(numeros[0],numeros[1]));


// let first = numeros[0],
//     second = numeros[1];

// let soma = (first, second)=>{
//         return first + second;
//     };

// console.log(soma(first, second));

function criar() {
    return [1,2,3,4,5];
}

let [a,b,c,d,e] = criar(); //Criando um array e desconstruíndo
console.log(a,b,c,d,e);


let arrayItens = ['Matheus', 'Gustavo', 'Alice', 'Ana', 'Maria', 'José'];
let pessoas = [];

for (i in arrayItens) {
    pessoas[i] = arrayItens[i];
}

for (i in pessoas) {
    console.log(pessoas[i].toString());
}
