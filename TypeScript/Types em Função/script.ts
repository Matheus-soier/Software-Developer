function firstLetterUppercase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return `${firstLetter}${name.substring(1)}`;
}

let nome = firstLetterUppercase('matheus');

function somar(n1: number, n2: number): number {
    return n1 + n2;
}

let soma = somar(20, 50);