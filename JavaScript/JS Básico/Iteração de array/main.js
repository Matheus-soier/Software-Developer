let fruits = ['Banana', 'Laranja', 'Maça', 'pêra', 'Uva']


// Filtra o array
let bigFruits = fruits.filter((value) => {
  return value.length < 5
})

console.log(bigFruits)

// Só satisffaz a função quando todos os itens do array estão de acordo

let ok = fruits.every((value) => {
  return value.length > 3
})

if (ok) {
  console.log('Todos são maiores que 3')
} else {
  console.log('Não são todos maiores que 3')
}

// Satisfaz quando algum item do array esta de acordo


let alguns = fruits.some((value) => {
  return value.length > 3
})

if (alguns) {
  console.log('Algum item é maior que 3')
} else {
  console.log('Nenhum item é maior que 3')
}

// Procurar algum item em especifico dentro de um array

if (fruits.includes('Uva')) {
  console.log('Tem uva sim!')
} else {
  console.log('Não tem uva...')
}