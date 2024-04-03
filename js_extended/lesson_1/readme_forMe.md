Symbol.hasInstance

Symbol.isConcatSpreadable

Symbol.iterator

Symbol.toPrimitive

Symbol.for
let id = Symbol.for("id"); //если символа не существует - он будет создан
let idAgain = Symbol.for("id"); // читаем его и пишем в другую переменную (можно из другого места кода)

проверяем
alert(id === idAgain); //true и оно работает

Symbol.keyFor

описание символа по идентификатору

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym)); //name
console.log(Symbol.keyFor(sym2)); /id
