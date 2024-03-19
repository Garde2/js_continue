const http = require("http");

const server = http.createServer((req, res) => {
  console.log("запрос получен");

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Hello here!</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>About!</h1>");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("Oops, page isnt found!");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

//Ctrl+C чтоб закрыть
//localhost это аналог 127.0.0.1
//http://127.0.0.1:3000/
//http://127.0.0.1:3000/about
//404
