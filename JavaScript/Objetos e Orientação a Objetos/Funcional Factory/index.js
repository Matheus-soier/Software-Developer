function creatPerson(name, lasname, age) {
  return {
    name, lasname, age
  }
}

let person1 = creatPerson("Matheus", "Soier", 20);
console.log(`${person1.name} ${person1.lasname} tem ${person1.age} anos.`);