let btnReq = document.querySelector("#btnReq").addEventListener('click', loadPosts);
let posts = document.querySelector("#posts");
posts.innerHTML = `0 posts`;

async function loadPosts() {
    posts.innerHTML = `Carregando...`
    let req = await fetch("https://jsonplaceholder.typicode.com/posts")
    let response = await req.json();
    montarBlog(response);       
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