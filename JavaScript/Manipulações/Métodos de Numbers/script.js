let n = 10.46465;
let m = "25";
let o = "34.2423"

let parseFloatee = parseFloat(o);
let parseInteiro = parseInt(m); //Passa de String para Int
let toString = n.toString(); //Transforma em String
let toFixed = n.toFixed(2); //Determina a quantidade de casas 

console.log(toString, toFixed, parseInteiro, parseFloatee);