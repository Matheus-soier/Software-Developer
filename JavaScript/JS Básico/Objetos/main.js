let personagem = {
  nome: 'superman',
  idade: 29,
  nacionalidade: 'Brasileiro',
  olhos: ['azuis', 'marrons'],
  caracteristicas: {
    forca: 99,
    imortalidade: true,
    vida: 100,
  }
}

// adicionar item no objeto
personagem.caracteristicas.forca += 5

// adicionar item no array

personagem.olhos.push('verde')

if (personagem.caracteristicas.imortalidade) {
  console.log("Imorta Ativado")
} else {
  console.log("Imortal Desativado")
}

console.log(`${personagem.nome} tem ${personagem.idade} anos de idade`)

console.log(`Cor dos olhos: ${personagem.olhos[1]}`)

// Parte 2

let personagem02 = {
  nome: "soier",
  idade: 20,
  carros: [
    { modelo: 'fiati', cor: 'preto' },
    { modelo: 'ferrari', cor: 'vermelho' }
  ],
}

console.log(personagem02.carros[0].cor)