// EXERCICIO 1

function porcentagem(x, y) {
  return (y / x) * 100
}

let x = 50
let y = 20
let pctn = porcentagem(x, y)
console.log(`${pctn}% de ${x} é ${y}`)

 // EXERCICIO 2

function precoCasa(metragem, quartos) {
  if (quartos === 1) {
    return metragem * 1
  } else if (quartos === 2) {
    return metragem * 1.2
  } else if (quartos === 3) {
    return metragem * 1.5
  }
}

let metragem = 3000
let quartos = 3
let precoTotal = precoCasa(metragem, quartos)

if (quartos < 1 || quartos > 3) {
  console.log("Escolha os quartos entre 1 e 3")
} else {
  console.log(`A casa custa R$ ${precoTotal}`)
}

// EXERCICIO 3

function userComplete(user, password) {
  if (user === "matheus" && password === 123) {
    console.log("Acesso PERMITIDO")
  } else {
    console.log("Acesso NEGADO")
  }
}

let user = "matheus"
let password = 123

userComplete(user, password)