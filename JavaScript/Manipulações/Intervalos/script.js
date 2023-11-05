let timer;
document.querySelector('#iniciar').addEventListener('click', () => timer=setInterval(showTime, 10));
document.querySelector('#pausar').addEventListener('click', () => clearInterval(timer));

function showTime() {
    let d = new Date();
    let txt = `<div>${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</div>`;
    document.querySelector('.bloco').innerHTML = txt;
}

//Testando o Set Time Out
document.querySelector('#temporizador').addEventListener('click', () => setTimeout(() => {
    alert('Acabou o Time Out!'); //Executa  o código quando o Time definido acaba
}, 2000));

//Para para o setTimeout é possivel usar o clearTimeout