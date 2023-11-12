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
    }
};

let {nome, idade, sobrenome:sobrenomePessoa, social, nomeCompleto, matricula = 23465412379031} = pessoa;
console.log(nome, sobrenomePessoa, idade, social.tiktok, nomeCompleto(), matricula);