let cores = [
  { nome: 'preto', qt: 15 },
  { nome: 'verde', qt: 6 },
  { nome: 'rosa', qt: 5 },
  { nome: 'azul', qt: 10 }
]

// Formas Diferentes de chegar ao mesmo resultado

// for (let n = 0; n < cores.length; n++) {
//   console.log(cores[n].nome)
// }

// for (let i in cores) {
//   console.log(`Nome: ${cores[i].nome} - Quantidade: ${cores[i].qt}`)
// }

for (let cor of cores) {
  console.log(`Nome: ${cor.nome} - Quantidade: ${cor.qt}`)
}
