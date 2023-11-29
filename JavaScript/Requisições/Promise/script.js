function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    }).then((json) => {
        alert(`Titulo do primeiro post: ${json[0].title}`);
    })
    alert(`Opa, clicou!`) //assíncrono
}

// Promisse possui 3 estados e uma fez finalizada seu estado não pode ser alterado:
// 1 -> Pending (Pendente)
// 2 -> Fulfilled (Realizada)
// 3 -> Rejected (Rejeitada)

async function obterDados() { // -> Função assíncrona, usada para indicar que retorna uma promisse
    try {
        let resposta = await fetch('https://api.exemplo.com/dados')
        let dados = await resposta.json();
        console.log(dados);
    } catch(erro) {
        console.log(`Erro na requisição: ${erro}`);
    }
}


