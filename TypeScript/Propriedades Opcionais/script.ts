// ADICIONANDO ? PARA INFORMAR QUE O PARÂMETRO É OPCIONAL DE SER RECEBIDO
function boasVindas(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined) {
        return `Olá ${usuario.nome} seja bem vindo, sua idade é ${usuario.idade} correto?`;
    } else {
        return `Boas vindas ${usuario.nome}!`;
    }
}

let u = {
    nome: `Matheus`
}

let result = boasVindas(u);