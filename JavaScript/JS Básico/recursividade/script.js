const fatorial = (n) => (n == 0 | n == 1) ? 1 : n * fatorial(n - 1);
console.log(fatorial(5));


//Programação Dinamica, armazenar o valor em uma tabela para não repetir o fibonacci
const fibonacci = (n) => (n == 0 || n == 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
console.log(fibonacci(4));
