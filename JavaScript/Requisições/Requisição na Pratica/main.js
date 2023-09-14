let button = document.querySelector('#button');
button.addEventListener('click', clicou);

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        return response.json();
    })
    .then((json)=>{
        alert(`Titulo do primeiro post: ${json[0].title}`);
    })
}