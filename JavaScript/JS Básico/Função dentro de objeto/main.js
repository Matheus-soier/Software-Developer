let pessoas = {
  nome: 'Matheus',
  sobrenome: 'Soier',
  idade: 20,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`
  }
}

console.log(pessoas.nomeCompleto( ))