const express = require("express");
const path = require("path");
const fs = require("fs");

const { checkBody, checkParam } = require("./validation/validator");
const { idSchema, userSchema } = require("./validation/sceme");

const app = express();
const userDbPath = path.join(__dirname, "./user.json");

let uniqId = 1;

app.use(express.json());

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  res.send({ users });
});

app.get("/users/:id", checkParam(idSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  const findUser = users.find((user) => {
    return user.id === Number(req.params.id); //params и querry после ?
  });
  res.send({ user: [findUser] });
});

app.post("/users", checkBody(userSchema), (req, res) => {
  uniqId++;
  const users = JSON.parse(fs.readFileSync(userDbPath));
  users.push({ id: uniqId, ...req.body }); //всё, что в body положи сюда - ... - "спред оператор"
  fs.writeFileSync(userDbPath, JSON.stringify(users));
  res.send({ id: uniqId });
});

app.put(
  "/users/:id",
  checkParam(idSchema),
  checkBody(userSchema),
  (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath));
    const findUser = users.find((user) => {
      return user.id === Number(req.params.id); //params и querry после ?
    });
    if (findUser) {
      findUser.firstName = req.body.firstName;
      findUser.secondName = req.body.secondName;
      findUser.age = req.body.age;
      findUser.city = req.body.city;
      fs.writeFileSync(userDbPath, JSON.stringify(users));
      res.send({ user: findUser });
    } else {
      res.send({ user: null });
    }
  }
);

app.delete("/users/:id", checkParam(idSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  const findUser = users.findIndex((user) => {
    return user.id === Number(req.params.id);
  });
  users.splice(findUser, 1);
  fs.writeFileSync(userDbPath, JSON.stringify(users));
  res.send({ id: req.params.id });
});

app.listen(3000);

//1:28:44
