class person {

  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`${this.name} diz Oi`);
  }
}

class student extends person {

  constructor(name, id) {
    super(name);
    this.id = id;
  }

  sayHello() {
    super.sayHi();
  }
}

let p1 = new student("Matheus", 100110110);
p1.age = 33;

p1.sayHello();
console.log(`${p1.name} tem ${p1.age} anos e sua matricula é #${p1.id}.`);
