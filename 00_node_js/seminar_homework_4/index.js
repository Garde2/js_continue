const express = require("express");
const path = require("path");
const fs = require("fs");
const Joi = require("joi");

const app = express();
const userDbPath = path.join(__dirname, "./user.json");

const userSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  secondName: Joi.string().min(2).required(),
  age: Joi.number().min(0).required(),
  city: Joi.string().min(2).required(),
});

let uniqId = 1;

app.use(express.json());

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  res.send({ users });
});

app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath));
  const findUser = users.find((user) => {
    return user.id === Number(req.params.id); //params и querry после ?
  });
  res.send({ user: [findUser] });
});

app.post("/users", (req, res) => {
  const resultValidation = userSchema.validate(req.body);

  if (resultValidation.error) {
    return res.status(440).send({ error: resultValidation.error.details });
  }

  uniqId++;
  const users = JSON.parse(fs.readFileSync(userDbPath));
  users.push({ id: uniqId, ...req.body }); //всё, что в body положи сюда - ... - "спред оператор"
  fs.writeFileSync(userDbPath, JSON.stringify(users));
  res.send({ id: uniqId });
});

app.put("/users/:id", (req, res) => {
  const resultValidation = userSchema.validate(req.body);

  if (resultValidation.error) {
    return res.status(440).send({ error: resultValidation.error.details });
  }

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
});

app.delete("/users/:id", (req, res) => {
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
