// Operação 1
let ingredientes = [
  'farinha',
  'leite',
  'ovos',
  'cenoura',
  'chocolate'
]
ingredientes.shift() //remove o 1 item da lista
ingredientes.pop() //remove o ultimo item da lista
ingredientes.push('cereja')

console.log(ingredientes)

console.log(`Total de ingredientes: ${ingredientes.length}`)

