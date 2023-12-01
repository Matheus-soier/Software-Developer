let contador = 0;

function mostrar() {
    contador++;
    if (contador < 3) {
    let image = document.querySelector("#image").files[0]; //pegando arquivo upado
    let img = document.createElement('img'); //Criando elemento de IMG
    img.src = URL.createObjectURL(image); //Criando a URL para a IMG
    img.width = 300; //Definindo tamanho para a IMG
    document.querySelector("#area").appendChild(img); //Exibindo a IMG na tela
    } else {
        if (contador < 4) {
        document.querySelector("#area").innerHTML += `Limite de imagem atingido`;
    }
}
}