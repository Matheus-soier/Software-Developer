let array = [0,1,2,3,4];
let outros = [...array,5,6,7,8]; //concatenando os dois vetores com o operador Spread
console.log(outros.toString());

let info = {
    nome: "Matheus",
    sobrenome: "Soier",
    dataNascimento: {
        idade: 20,
        nascimento: {
            dia: 17,
            mes: 4,
            ano: 2003
        }
    }
}

let novaInfo = {
    ...info, //Operador Spread
    cidade: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil"
}

let {nome:nomeSoier, dataNascimento:{idade:idadeSoier}} = novaInfo;

console.log(nomeSoier);
console.log(info);
console.log(novaInfo);

function adicionarInfo(info) {
    let novaInfo2 = {
        ...info,
        token: 1565165156,
        matricula: 589878
    }
    return novaInfo2;
}

console.log(adicionarInfo(novaInfo));

let arrayObjetos = [
    {nome: "Matheus"},
    {nome: "Bob"},
    {nome: "Djanira"}
];

function spreadOperator(arrayObjetos) {
    let arrayAtualizado = arrayObjetos.map(objeto => {
        return {
            ...objeto,
            endereco: "Rua Benjamin Capusso",
            numero: 247
        };
    });
    return arrayAtualizado;
}

console.log(spreadOperator(arrayObjetos));