document.querySelector('#btn').addEventListener('click', reqTeste);
document.querySelector('#inserir').addEventListener('click', inserirPost);

//let cliclou = async () => {}
//async function cliclou() {}

async function reqTeste() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json(); 
    console.log(`Status: ${response.status}`);
    alert(`Titulo do primeiro post ${json[0].title}`);
    //força o aguardo da resposta da requisição
    alert(`CLICOU!!`);
}

async function inserirPost() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "Título de Teste",
            body: "Corpo de Teste",
            userId: 2
        })
    });
    let json = await response.json();
    console.log(json);    
}
