document.querySelector("#button").addEventListener('click', () =>{
    fetch('https://jsonplaceholder.typicode.com/po2sts').then((response) => {
        return response.json();
    }).then((json) => {
        alert(`Titulo do primeiro post ${json[0].title}`)
    }).catch((error) => {
        alert("Requisição falhou!");
        console.log(error);
    }).finally(() => {
        alert("Acabou tudo!");
    })
})

//catch -> usado quando requisição falha de alguma maneira

//finally -> sempre será executado, requisição dando certo ou errado
