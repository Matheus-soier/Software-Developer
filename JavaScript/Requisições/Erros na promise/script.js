document.querySelector("#button").addEventListener('click', () =>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        console.log(`Status: ${response.status}`)
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

document.querySelector("#inserir").addEventListener("click", inserir());

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "Título de Teste",
            body: "Corpo de Teste",
            userId: 2
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    }).catch((error) => {
        alert("Requisição falhou!");
        console.log(error);
    }).finally(() => {
        alert("Acabou tudo!");
    });
}

//catch -> usado quando requisição falha de alguma maneira
//finally -> sempre será executado, requisição dando certo ou errado
