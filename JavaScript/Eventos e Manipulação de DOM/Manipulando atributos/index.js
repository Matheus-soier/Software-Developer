function clicou() {
  const input = document.querySelector('#input-text')

  //Pegar atributos do elemento
  console.log(input.getAttribute('type'))


  //Verificar se possue um atributo no elemento
  if (input.hasAttribute('placeholder')) {
    console.log(`Tem placeholder sim`)
  } else {
    console.log(`Não tem placeholder`)
  }

  //alterar atributo de um elemento
  input.setAttribute('placeholder', 'Placeholder alterado')

  //Alterando o type do input
  const botao = document.querySelector('.btn')

  if (input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password')
    botao.innerText = 'Mostrar senha'
  } else {
    input.setAttribute('type', 'text')
    botao.innerText = 'Ocultar senha'
  }
}