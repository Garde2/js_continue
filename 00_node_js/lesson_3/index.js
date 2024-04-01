//const exp = require("constants");
const fs = require("fs");
const express = require("express");
const path = require("path");
const countPage = path.join(__dirname, "countPage.json");

const app = express();

//app.use(express.static("static"));

// const counter = [
//   { page: "/", count: 0 },
//   { page: "/about", count: 0 },
//   { page: "/fortest", count: 0 },
// ];

// try {
//   const data = fs.readFileSync(countPage, "utf8");
//   counter = JSON.parse(data);
// } catch (err) {
//   console.error(`Ошибка прочтения файла ${err}`);
// }

// app.get(["/"], (req, res) => {
//   counter[0] += 1;
//   fs.writeFile(countPage, JSON.stringify(counter[0]), (err) => {
//     if (err) throw err;
//   });
//   res.send(`<h1>Счетчик просмотров =>  ${counter[0].count}</h1>`);
// });
// app.get(["/about"], (req, res) => {
//   counter[1] += 1;
//   fs.writeFile(countPage, JSON.stringify(counter[1]), (err) => {
//     if (err) throw err;
//   });
//   res.send(`<h1>Счетчик просмотров =>  ${counter[1].count}</h1>`);
// });

//

if (!fs.existsSync(countPage)) {
  const counter = [
    { page: "/", count: 0 },
    { page: "/about", count: 0 },
    { page: "/fortest", count: 0 },
  ];

  fs.writeFile(countPage, JSON.stringify(counter, null, 2), (error) => {
    if (error) return console.error("Ошибка!");
  });
}

// app.use((req, res, next) => {
//   console.log("Поступил запрос", req.method, req.url);
//   next(); //нужно для продолжения действий, основной обработчик
// });

//обработчик для логирования должен быть перед остальными

//app.get("/", (req, res) => {
//  res.send('<h1>Обо мне</h1> <a href ="/about">link</a>');
//});
//app.get("/about", (req, res) => {
// res.send('<h1>Главная</h1> <a href ="/">link</a>');
//});

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "static/index.html")); //на объекте res метод sendFile, директория откуда запущен и дир, где сам файл, если не указан app.use(express.static("static"));
//});

app.get("/", (req, res) => {
  fs.readFile(countPage, "utf-8", (error, data) => {
    if (error) return console.error("Ошибка в чтении файла!");
    let dataPage = JSON.parse(data, "utf-8");
    dataPage[0].count += 1;
    fs.writeFile(countPage, JSON.stringify(dataPage, null, 2), (error) => {
      if (error) return console.error("Ошибка в чтении файла!");
    });
    res.send(`
         <h1>Главная страница</h1>
         <p>Счетчик просмотров =>  ${dataPage[0].count}</p>
         <a href="/about">Обо мне</a>
      `);
  });
});

app.get("/about", (req, res) => {
  fs.readFile(countPage, "utf-8", (error, data) => {
    if (error) return console.error("Ошибка в чтении файла!");
    let dataPage = JSON.parse(data, "utf-8");
    dataPage[1].count += 1;
    fs.writeFile(countPage, JSON.stringify(dataPage, null, 2), (error) => {
      if (error) return console.error("Ошибка в чтении файла!");
    });
    res.send(`
    <h1>Обо мне</h1>
    <p>Счетчик просмотров =>  ${dataPage[1].count}</p>
    <a href="/">На главную</a>
 `);
  });
});

// app.get("/about", (req, res) => {
//   res.sendFile("static/aboutme.html");
// });

//res.sendFile("static/index.html"); //на объекте res метод sendFile, директория откуда запущен и дир, где сам файл

app.get("/about/test", (req, res) => {
  res.send("<h1> тестовая <h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is up, port ${port}`);
});

//промежуточные обработчики
