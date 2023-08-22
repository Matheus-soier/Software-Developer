class person {

  static hands = 2;
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

let p1 = new person("Soier");

console.log(`${p1.name} tem ${person.hands} mãos.`);