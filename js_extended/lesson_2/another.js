// //instanceof

// //type of не работает!

// //принадлежит ли объект к предполагаемому классу?
// //Либо к одному из встроенных классов, пример с Array?
// //или для функций кострукторов

// function Rabbit() {}
// console.log(new Rabbit() instanceof Rabbit); //true

//-----------------------------------------------------------------------------

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const animal = new Animal("Animal");
const dog = new Dog("Dog");

console.log(animal instanceof Animal); //true
console.log(dog instanceof Animal); //true
console.log(dog instanceof Dog); //true

console.log(animal instanceof Dog); //false
console.log(dog instanceof Cat); //false
