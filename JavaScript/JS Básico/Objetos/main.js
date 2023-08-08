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

if (personagem.caracteristicas.imortalidade) {
  console.log("Imorta Ativado")
} else {
  console.log("Imortal Desativado")
}

console.log(`${personagem.nome} tem ${personagem.idade} anos de idade`)

console.log(`Cor dos olhos: ${personagem.olhos[1]}`)
