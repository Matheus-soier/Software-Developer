let lista = ['Ovo', 'Farinha', 'Corante', 'Massa', 'Recheio'];
let lista2 = ['Forno'];

let arrayTexto = lista.toString(); //Transforma o array em uma string separado por virgula
let arrayJoin = lista.join('-'); //Junta o array em uma string separado pelo parâmetro
let arrayIndexOf = lista.indexOf('Massa');  //Procura item no array
let array = lista;
let arrayPop = array.pop(); //Último item do array
let arrayShift = array.shift(); //Primeiro item do array
let arrayPush = array.push('Forma'); //Adicionando item no array
lista[0] = 'Ovos'; //Substituindo item do array
lista[lista.length] = 'Chocolate'; // Adiciona item na ultima posição
let arraySplice = lista.splice(1,1);
let arrayConcat = lista.concat(lista2);
//sorte() -> Orderna o array em ordem alfabética
//Reverse() -> Imprime de trás para frente

console.log(arrayTexto);
console.log(arrayJoin);
console.log(arrayIndexOf);
console.log(arrayPop);
console.log(arrayShift);
console.log(lista); // ArrayPush
console.log(arraySplice);
console.log(arrayConcat);
console.log(' ');
console.log(' ');

let numeros = [45, 4, 9, 16, 25];
let numeros2 = [];
let numeros3 = [];

//Multiplicando valores do array
numeros2 = numeros.map((item) => item * 2);

// Filtrando valores do array
numeros3 = numeros.filter((item) => (item > 20) ? true : false);

//Verificando se todos os itens passam de uma condição ou não
let arrayEvery = numeros.every((item) => (item > 20) ? true : false);

//Verifica se pelo menos 1 valor passa na condição
let arraySome = numeros.some((item) => (item > 5) ? true : false);

//Verifica e retorna se existe o valor dentro do array
let arrayFind = numeros.find((item) => (item == 16) ? true : false);

//Retorna a posição que o valor se encontra no array
let arrayFindIndex = numeros.findIndex((item) => (item == 4) ? true : false);

console.log(numeros2.toString());
console.log(numeros3.toString());
console.log(arrayEvery);
console.log(arraySome);
console.log(arrayFind);
console.log(`Valor se encontra na posição ${arrayFindIndex} do array`);

let Clientes = [
    {id: 1, nome: 'Matheus', sobrenome: 'Sampaio'},
    {id: 2, nome: 'Gustavo', sobrenome: 'Soier'},
    {id: 3, nome: 'Maria', sobrenome: 'Sampaio'}
];

let cliente = Clientes.find((cliente) => (cliente.id == 1) ? true : false); console.log(cliente);

//Imprimindo todos objetos do array
for(let i in Clientes) {
    console.log(Clientes[i]);
}

