//24:25 - объект функции
//свойство name - имя функции, length - число параметров, которые ожидает функция, внутри массив arguments с перечислением параметров функции

function sayHello() {
  console.log("Hello");
}

console.log(sayHello.name); //sayHello
console.log(window.name); //имя окна браузера, пустую строку
console.log(frames[0].name); //название фрейма, пустую строку

const obj = {};
console.log(obj.name); //undefined потому что не определяли name для объекта

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);

console.log(rect.constructor.name); //Rectangle - имя класса

//27:20 стрелочные функции - нет своего this, нет массива arguments, если в однострочной срелочной фукции нет выражения в фигурных скобок - автоматом return для выражения
