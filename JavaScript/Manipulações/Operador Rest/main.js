function semRest(numero) { //-> pega apenas o primeiro valor e atribui ao parametro da função
    console.log(numero);
}
semRest(5, 3, 2, 4, 6, 8); 

function comRest(...numeros) { // -> Pega todos os parametros passados e transforma em um array
    console.log(numeros);
}
comRest(5, 3, 2, 4, 6, 8); 

function nomeRest(...nomes) {
  for(i in nomes) {
    console.log(nomes[i].toString());
  }
}
nomeRest("Matheus", "Gustavo", "Gabriel", "Miguel", "João");

let nomes = ["Matheus", "Gustavo"];

function novosNomes(...nomes) {
    for(i in nomes) {
        console.log(nomes[i].toString());
      }
}
novosNomes(...nomes, "Miguel", "Carlos");