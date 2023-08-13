const inputNome = document.querySelector('#inputText');
const outputNome = document.querySelector('#outputText');

inputNome.addEventListener('input', nomeUpdate);

function nomeUpdate() {
  outputNome.textContent = inputNome.value;
}
