const express = require("express");
const { checkBody, checkParam } = require("./validation/validator");
const { idScheme, articleScheme } = require("./validation/sceme");

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

/**
 * Получить все статьи
 */
app.get("/articles", (req, res) => {
  res.send({ articles });
});

/**
 * получить конкретную статью по id
 */
app.get("/articles/:id", checkParam(idScheme), (req, res) => {
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );

  if (article) {
    res.send({ article });
  } else {
    res.status(400);
    res.send({ article: null });
  }
});

/**
 * Создание статьи
 */
app.post("/articles", checkBody(articleScheme), (req, res) => {
  uniqueID += 1;

  articles.push({
    id: uniqueID,
    ...req.body,
  });

  res.send({ id: uniqueID });
});

/**
 * редактирование статьи
 */

app.put(
  "/articles/:id",
  checkParam(idScheme),
  checkBody(articleScheme),
  (req, res) => {
    const article = articles.find(
      (article) => article.id === Number(req.params.id)
    );

    if (article) {
      article.title = req.body.title;
      article.content = req.body.content;

      res.send({ article });
    } else {
      res.status(404);
      res.send({ article: null });
    }
  }
);
/**
 * удаление статьи
 */

app.delete("/articles/:id", (req, res) => {
  const idValidationResult = idScheme.validate(req.params);
  if (idValidationResult.error) {
    return res.status(400).send(idValidationResult.error.details);
  }

  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );

  if (article) {
    const articleIndex = articles.indexOf(article);
    articles.splice(articleIndex, 1); //удаляем объект из массива

    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});

/**
 * обработчик несуществующего роута, ошибка 404
 */

app.use((req, res) => {
  res.status(404).send({ message: "URL not found!" });
});

app.listen(3000);
