interface alinhamento {
    nome: string,
    alinhamento: 'left' | 'right' | 'center'
}

function showText(align: alinhamento) {
    return `<div style="text-align: ${align.alinhamento}">${align.nome}</div>`;
}

let align: alinhamento = {
    nome: "matheus",
    alinhamento: "left"
}

showText(align);

function temNome(nome:string): boolean {
    return nome !== `` ? true : false;
}



