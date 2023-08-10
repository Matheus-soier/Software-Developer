//Selecionar elemento pela tag
let elementos = document.getElementsByTagName('h1')
console.log(elementos[1])
console.log(elementos[0])

//Selecionar elemento pelo ID
let identificador = document.getElementById('teste')
console.log(identificador)

//Selecionar elemento pela Class
let classe = document.getElementsByClassName('button')
console.log(classe[0])

//Selecionar o elemento que desejar
let qualquer = document.querySelector('#teste')
console.log(qualquer)

//Selecionando ekemento por cascata
let cascata = document.querySelectorAll('#teste2 ul li')
console.log(cascata[0])