let names = ["Matheus", "João", "Maria", "José", 90];

names.forEach( (name) => {
    if (typeof name === 'string') {
    console.log(name.toUpperCase());
    } else {
        console.log(name);
    }
});


