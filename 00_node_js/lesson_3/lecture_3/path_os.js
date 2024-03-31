const path = require("path");
const os = require("os");

console.log(path.join("/User/Student", "Desktop/index.js"));
// выведет /User/Student/Desktop/index.js

console.log(path.parse("/User/Student/Desktop/index.js"));
//объект пути

console.log(path.dirname("/User/Student/Desktop/index.js"));
//путь к директории без назв файла

console.log(path.extname("/User/Student/Desktop/index.js"));
//выведет расширение js

console.log(os.cpus()); //ядра проц
console.log(os.arch); // арх проц
console.log(os.feemem); //своб память в байтах
console.log(os.totalmem); //общее колво оперативки

//url - с адресами и компонентами
//crypto криптография
// stream - с большими потоками данных
