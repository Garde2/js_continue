const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello there!</h1>");
});

app.post("/", (req, res) => {
  //res.send(req.body);
  console.log(req.body);
  res.send("This is a post request");
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.send("This is a put request");
});

app.delete("/", (req, res) => {
  console.log(req.body);
  res.send("This is a delete request");
});

//delete может использовать тело, но не рекомендуется, тк его идентификатор обычно в url и поэтому нам не надо передавать в теле запроса ничего, удаляем по id или что-то такое

app.listen(3000);
