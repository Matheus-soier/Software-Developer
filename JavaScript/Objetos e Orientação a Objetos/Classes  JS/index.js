//Construtor e This
class Person {

  state = "São Paulo";
  steps = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //Action
  takeAStep() {
    this.steps++;
  }

  setAge(newAge) {
    this.age = 0;
    if(typeof newAge == 'number') {
      this.age = newAge;
    } else {
      this.age = this.age;
      console.log("Idade foi zerada pois é aceito apenas numeros...")
    }
  }
}

//Instâncias
let p1 = new Person("João");
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

p2.state = "Rio de Janeiro"

//Executando o action
p2.takeAStep();
p3.takeAStep();
p3.takeAStep();
p1.setAge(25);

//Imprimindo no console
console.log(`${p1.name} tem ${p1.age} anos e mora na cidade de ${p1.state} e andou ${p1.steps} passos.`);
console.log(`${p2.name} tem ${p2.age} anos e mora na cidade de ${p2.state} e andou ${p2.steps} passos.`);
console.log(`${p3.name} tem ${p3.age} anos e mora na cidade de ${p3.state} e andou ${p3.steps} passos.`);