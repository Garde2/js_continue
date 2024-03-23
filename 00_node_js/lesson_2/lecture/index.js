const uuid = require("uuid");
const firstModule = require("./first-module");

firstModule.sayHello();
const id = uuid.v4();
console.log("Ваш уникальный идентификатор: " + id);

//console.log(id);
//firstModule.sayHello();
