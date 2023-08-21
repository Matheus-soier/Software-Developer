//Construtor e This
class Person {

  _age = 10;
  steps = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  takeAStep() {
    this.steps++;
  }

  get fullName() {
    return (`${this.firstName} ${this.lastName}`)
  }

  get age() {
    return this._age;
  }

  set age(x) {
    if (typeof x == 'number') {
      this._age = x;
    }
  }
}

//Instâncias
let p1 = new Person("João", "Soier");
let p2 = new Person("Maria", "Santos");
let p3 = new Person("Pedro", "Sampaio");

p1.age = 30;

//Imprimindo no console
console.log(`${p1.fullName} tem ${p1.age} anos e mora na cidade de ${p1.state} e andou ${p1.steps} passos.`);