const fs = require("fs");
const path = require("path");

// const persone = {
//   name: "Ivan",
//   surname: "Petrov",
//   age: 30,
//   city: "Moscow",
// };

const jsonPath = path.join(__dirname, "persone.json"); //1куда и 2что писать
console.log(jsonPath);

const persone = JSON.parse(fs.readFileSync(jsonPath, "utf-8")); //1 откуда и 2 что читать

persone.age += 10;
persone.city = "Ekaterinburg";

fs.writeFileSync(jsonPath, JSON.stringify(persone, null, 2));

//fs.writeFileSync(jsonPath, JSON.stringify(persone, null, 2));

//stryngify - можем массив, где перечисляем. что нас интересует из исходного объекта - передаем поля, строку имя и только будет имя записано в json. 2 - форматировано - добавились переносы строк и пробелы
