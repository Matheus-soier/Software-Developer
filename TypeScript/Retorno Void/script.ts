function removerElemento(elemento: HTMLElement): void {
    elemento.remove();
}

removerElemento(document.getElementById('teste') as HTMLElement);

