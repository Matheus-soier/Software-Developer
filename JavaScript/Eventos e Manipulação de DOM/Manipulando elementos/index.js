//Maneira de verificar os filhos de elementos
// function clicou() {
//   const teste = document.querySelector('.teste')
//   console.log(teste.children[0].children)
// }

function clicou() {
  const teste = document.querySelector('.teste')
  const ul = teste.querySelector('ul')

  ul.innerHTML += '<li>Item <strong>adicionado</strong></li>'

  ul.children[0].innerHTML = '<li>Item <strong>alterado</strong> haha</li>'

  ul.children[1].append(` - (alterado)`)
}

//Existe o innerHTML -> altera o HTML, adiciona, etc
//e tambem o innerText -> adiciona um texto no lugar selecionado
//Existe tambem o outerHTML -> que seleciona o item de fora