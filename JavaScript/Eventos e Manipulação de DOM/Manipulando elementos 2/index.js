function clicou() {
  const teste = document.querySelector('.teste')
  const ul = teste.querySelector('ul')

  let newLi = document.createElement("li")
  newLi.innerText = "Item adicionado"

  //append -> adiciona no final
  ul.appendChild(newLi)

  //prepend -> adiciona no inicio
  // ul.prepend(newLi)
}