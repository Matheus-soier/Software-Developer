//TYPE -> ORGANIZAR E SIMPLIFICAR O CÓDIGO, QND É REPLICAVÉL
//TYPE NÃO PODE SER EXTENDIDO

type User = {
    nome: string,
    idade: number,
    cidade?: string,
    cpf?: number,
    rg?: number,
    escolaridade?: string
}

function helloUser(user: User) {
    return `Olá ${user.nome}, você tem ${user.idade}`;
}

helloUser({
    nome: "Matheus",
    idade: 20,
    cidade: "São Paulo",
    cpf: 42433965829,
    rg: 391709975,
    escolaridade: "Ensino Superior Incompleto"
});

//INTERFACE PODE SER EXTENDIDO
interface Usuario {
    nome: string,
    idade: number
}

interface Usuario {
    cidade?: string
}

interface Usuario {
    cpf?: number 
}