let person = {
  name: "Matheus",
  lastname: "Soier",
  age: 20,
  getFullName() {
    return `${this.name} ${this.lastname}`;
  },
  start() {
    console.log(`Deu start na pessoa`)
  }
}

person.start();
console.log(person.getFullName());