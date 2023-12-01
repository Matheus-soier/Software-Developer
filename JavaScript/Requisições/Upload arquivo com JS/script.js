// Envio  de arquivos com JS
async function enviar() { 
    let arquivo = document.querySelector("#arquivo").files[0]; // Pegando primeiro item do objeto files

    let body = new FormData();
    body.append(`Title`, `Bla bla bla`);
    body.append(`arquivo`, arquivo);

    let req = await fetch("https://meusitequalquer.com/upload", {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}