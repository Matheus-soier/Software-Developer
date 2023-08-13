//Elements
const input = document.querySelector('#inputText');
const lista = document.querySelector('ul');

//Functions
function handleKeyUp(e) {
  if (e.key === 'Enter') {
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    lista.appendChild(newLi);
    input.value = '';
  }
}

//Events
input.addEventListener('keyup', handleKeyUp);

