let pessoa = {
    nome:  "Matheus",
    sobrenome: "Soier",
    idade: 20, 
    social: {
        facebook: "Matheus Soier",
        instagram: "eusoier",
        whatsapp: 11976989038,
        tiktok: "eusoier"
    },
    nomeCompleto: ()=>{
        return `${pessoa.nome} ${pessoa.sobrenome}`;
    },
    endereco: {
        rua: {
            nome: "Benjamin Capusso",
            numero: 247
        }
    }
};

let {nome, idade, sobrenome:sobrenomePessoa, nomeCompleto, matricula = 23465412379031} = pessoa;
let {tiktok:ticoteco} = pessoa.social; //Forma 1
let {social:{facebook:face}} = pessoa; // Forma 2
let {social} = pessoa; // Forma 3

let {endereco:{rua:{nome:endereco, numero}}} = pessoa;
console.log(endereco, numero);

console.log(`Forma 1: ${ticoteco}`);
console.log(`Forma 2: ${face}`)
console.log(`Forma 3: ${social.facebook} ${social.tiktok}`);
console.log(`Forma 4: ${pessoa.social.facebook}`); // Forma 4

console.log(nome, sobrenomePessoa, idade, nomeCompleto(), matricula);

//Função Descontruindo Objeto pelo prorpio parâmetro
function enderecoCompleto({endereco:{rua:{nome:endereco, numero}}}) {
    return console.log(`${endereco} ${numero}`);
}
enderecoCompleto(pessoa);



