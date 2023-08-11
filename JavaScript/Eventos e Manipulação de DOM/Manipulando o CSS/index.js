function clicou() {
  let lista = document.getElementsByTagName('li')
  let listaEscolhida = lista[0]

  console.log(lista)

  //alterando o css inline do elemento
  listaEscolhida.style.backgroundColor = '#00f'
  listaEscolhida.style.fontSize = '40px'
}