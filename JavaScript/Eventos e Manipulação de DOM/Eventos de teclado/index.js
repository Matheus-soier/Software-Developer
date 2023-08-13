function soltou(e) {

  //key -> Simples
  //code -> especifico
  console.log('TECLA APERTADA: ' + e.key)

  console.log('SHIFT? ' + e.shiftKey)

  console.log('CTRL? ' + e.ctrlKey)

  console.log('ALT? ' + e.altKey)

  console.log('--')
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)

//Keyup -> Soltou
//Keydown -> Apertou
//Keypress -> Segurou