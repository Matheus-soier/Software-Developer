let number1 = document.querySelector('#number1') as HTMLInputElement;
let number2 = document.querySelector('#number2') as HTMLInputElement;
let btnCalc = document.querySelector('#calcular') as HTMLButtonElement;
let result = document.querySelector('.result') as HTMLDivElement;

function calc(n1: number, n2: number) {
    return n1 + n2;
}

btnCalc.addEventListener('click', ()=>{
    result.innerHTML = calc(+number1.value, +number2.value).toString();
});


