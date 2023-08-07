// 1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', "Mercedes"]
let x = 1
console.log(`1. ${carros[x]}`)

// 2. Troque a ferrari por Audi
carros[1] = 'Audi'
console.log(`2. Lista com Audi: ${carros}`)

// 3. Adicione o Volvo a lista
carros.push('Volvo')
console.log(`3. Lista com volvo: ${carros}`)

//4. Exoba quantos itens tem no array
console.log(`4. Itens no Array: ${carros.length}`)