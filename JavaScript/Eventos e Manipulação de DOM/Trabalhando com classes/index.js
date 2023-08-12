//Adicionando e removendo classes

function clicou() {
  let botao = document.querySelector('.btn')

  if (botao.classList.contains('azul')) {
    //adicionando e removendo a classe
    botao.classList.add('verde')
    botao.classList.remove('azul')
  } else {
    //repondo a classe
    botao.classList.replace('verde', 'azul')
  }

  /*
  Fica adicionando e removendo elemento, de maneira alternada
  botao.classList.toggle('azul')
  */
}