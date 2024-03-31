const fs = require("fs");

//асинхронные три ниже
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//выведет содержимое этого скрипта вместе с комментом если путь - __filename

fs.writeFile("test2.txt", 'console.log("Hi!")', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is saved");
  }
});

//сам

fs.appendFile("test2.txt", '\nconsole.log(""Anoter one!)', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is saved again!");
  }
});

//а эти синхронные, блокирует поток вызовов скрипта
//использовать при страте http сервера. читаем конфигурации, но когда запущен - то не надо

const fileData = fs.readFileSync(__filename, "utf-8");
console.log(fileData);
fs.appendFileSync(__filename, '\nconsole.log("Sync")');
