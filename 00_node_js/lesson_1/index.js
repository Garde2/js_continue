const http = require("http");

let userCountMain = 0;
let userCountAbout = 0;
let userCount404 = 0;

const server = http.createServer((req, res) => {
  console.log("запрос получен");

  if (req.url === "/") {
    userCountMain++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.write("Главная страничка");
    res.write("Просмотров ->" + userCountMain + " ");
    res.end('<a href="/about">Ссылаемся на страничку /about</a>');
    // res.end("<h1>Hello here!</h1>");
  } else if (req.url === "/about") {
    userCountAbout++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.write("Просмотров ->" + userCountAbout + " ");
    res.end('<a href="/">Ссылаемся на страничку /, то есть главную</a>');
    //res.end("<h1>About!</h1>");
  } else {
    userCount404++;
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.write("Просмотров ->" + userCount404 + " ");
    res.write(
      "Ошибка 404, такой страницы нет! хотя раз вы ее видите, то есть...%)"
    );
    res.end('<a href="/">Вернуться на главную</a>');
    //res.end("Oops, page isnt found!");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

// node имя_файла.js
//Ctrl+C чтоб закрыть
//localhost это аналог 127.0.0.1
//http://127.0.0.1:3000/
//http://127.0.0.1:3000/about
//404
