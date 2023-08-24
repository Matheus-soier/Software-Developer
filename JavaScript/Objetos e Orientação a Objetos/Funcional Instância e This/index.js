let person = {
  name: 'Matheus',
  lastName: 'Soier',
  age: 20,
  getFullName() {
    return `${this.name} ${this.lastName}`
  }
}

console.log(person.getFullName());