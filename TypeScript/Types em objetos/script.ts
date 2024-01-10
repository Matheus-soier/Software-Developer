function boasVindas(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome} seja bem vindo, sua idade é ${usuario.idade} correto?`;
}

let u = {
    nome: `Matheus`,
    idade: 20
}

let result = boasVindas(u);