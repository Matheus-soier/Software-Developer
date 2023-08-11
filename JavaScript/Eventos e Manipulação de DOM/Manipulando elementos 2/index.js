function clicou() {
  const teste = document.querySelector('.teste')
  const ul = teste.querySelector('ul')

  let newLi = document.createElement("li")
  newLi.innerText = "Item adicionado"

  //append -> adiciona no final
  ul.appendChild(newLi)

  //prepend -> adiciona no inicio
  // ul.prepend(newLi)

  const teste2 = document.querySelector('.teste2')
  const ul2 = teste2.querySelector('ul')

  const newButton = document.createElement('button')
  newButton.innerText = "Novo botão"

  ul2.before(newButton)

  //BEFORE = ANTES
  //AFTER = DEPOIS

  let newUl = document.createElement('ul')

  for (let i = 0; i < 5; i++) {
    let newLista = document.createElement('li')
    newLista.innerText = "Item add " + (i + 1)
    newUl.append(newLista)
  }

  ul.after(newUl)
}