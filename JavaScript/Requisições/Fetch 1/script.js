let btnReq = document.querySelector("#btnReq").addEventListener('click', loadPosts);
let posts = document.querySelector("#posts");
posts.innerHTML = `0 posts`;

function loadPosts() {
    posts.innerHTML = `Carregando...`
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            montarBlog(json);
        }).catch(function(error) {
            console.log(`Deu problema...`);
        })    
}

function montarBlog(lista) {
    let html = "";
    for(i in lista) {
        html += `<h3>${lista[i].title}</h3>`;
        html += `${lista[i].body}<br/>`;
        html += `<hr/>`;
    }
    posts.innerHTML = html;
}