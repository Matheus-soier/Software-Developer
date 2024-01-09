var number1 = document.querySelector('#number1');
var number2 = document.querySelector('#number2');
var btnCalc = document.querySelector('#calcular');
var result = document.querySelector('.result');
function calc(n1, n2) {
    return n1 + n2;
}
btnCalc.addEventListener('click', function () {
    result.innerHTML = calc(+number1.value, +number2.value).toString();
});
