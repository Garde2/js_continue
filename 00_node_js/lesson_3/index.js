const exp = require("constants");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("static"));

app.use((req, res, next) => {
  console.log("Поступил запрос", req.method, req.url);
  next(); //нужно для продолжения действий, основной обработчик
});

//обработчик для логирования должен быть перед остальными

//app.get("/", (req, res) => {
//  res.send("<h1> Hello there, here is my site<h1)");
//});
//app.get("/about", (req, res) => {
//  res.send("<h1> Страница обо мне<h1>");
//});

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "static/index.html")); //на объекте res метод sendFile, директория откуда запущен и дир, где сам файл, если не указан app.use(express.static("static"));
//});

app.get("/", (req, res) => {
  res.sendFile("static/index.html"); //на объекте res метод sendFile, директория откуда запущен и дир, где сам файл
});

app.get("/about", (req, res) => {
  res.sendFile("static/aboutme.html");
});

app.get("/about/test", (req, res) => {
  res.send("<h1> тестовая<h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is up on the port ${port}`);
});

//промежуточные обработчики
