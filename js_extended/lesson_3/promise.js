// generateRandomNumber(1, 10);

let generateRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber) {
        resolve(randomNumber);
      } else {
        reject("Ошибка при генерации");
      }
    }, 1000);
  });
};

// печатаем
//nfn  - нейм фанкшн нейм - получили стандартную форму для функции
// prom получили ретерн нью промис
// setTimeou - получили
//переменную скопили
//if else - конструкция выбрана

generateRandomNumber()
  .then((number) => {
    console.log("Нагенерили", number);
  })
  .catch((error) => console.log("Ошибка при генерации: ", error));

//печатаем then и видим вариант then catch

//fetch это запрос к серверу чтоб получить данные

let fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject("Ошибка при загрузке данных: "));
  });
};

//бесплатные API примеры
//https://randombig.cat/roar.json
//"https://api.example.com/data"

fetchData("https://randombig.cat/roar.json")
  .then((data) => {
    console.log("получены данные", data);
  })
  .catch((error) => console.log("Ошибка при загрузке данных: ", error));

let checkFileExist2 = (file) => {};

let checkFileExist = (file) => {
  setTimeout(() => {
    const fileExists = checkFileExist(file);
    if (fileExists) {
      console.log("Файл существует");
    } else {
      console.log("Файл не существует");
    }
  }, 2000);
};

checkFileExist("exmple.txt")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Ошибка", error);
  });

//then

let calulateSumm = (a, b) => {
  return new Promise((resolve, reject) => {
    const summ = a + b;
    if (summ) {
      resolve(summ);
    } else {
      reject("Ошибка при суммировании");
    }
  });
};

calulateSumm("hieh", 7).then((summ) => {
  console.log("Сумма чисел", summ);
});

let divideNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a / b;
    if (b === 0) {
      reject("Ошибка при делении на 0");
    } else {
      resolve(a / b);
    }
  });
};

divideNumbers(10, 0)
  .then((result) => {
    console.log("Результат деления чисел", result);
  })
  .catch((err) => {
    console.log("Ошибка", err);
  });

//цепочка промисов, например в банке ряд операций с суммами - добавить что-то, отнять процент, начислить бонусы итд
//если всё хорошо - бежим дальше, если плохо - сообщение об ошибке

new Promise(function (resolve) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 3), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  });

//finally

let performOperation = (data) => {
  return new Promise((resolve, reject) => {
    let result = processData(data);

    if (result) {
      resolve(result);
    } else {
      reject("Ошибка при обработке данных");
    }
  }).finally(() => {
    console.log("Операция завершена");
  });
};

performOperation("example")
  .then((result) => {
    console.log("Результат операции", result);
  })
  .catch((error) => {
    console.log("Ошибка", error);
  });

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  //new Promise((resolve) => setTimeout(() => reject(new Error("Oops!")), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
])
  .then(console.log)
  .catch(console.log);

//будет ошибка

//принимает любой итерируемый объект, например, массив, выполняет промисы последовательно и возвращает новый примис,
// результат- массив результатов из каждого промиса, а если где-тоошибка, то результатом будет эта ошибка, прочие результаты игнорятся

let checkServerResponce = (urls) => {
  let promise = urls.map((url) => fetch(url));

  return Promise.race(promise).then((response) => {
    return response.url;
  });
};

let urls = [
  "https://api.example.com/server1",
  "https://api.example.com/server2",
  "https://api.example.com/server2",
];

checkServerResponce(urls)
  .then((fastestServer) => {
    console.log("Самый быстрый сервер:", fastestServer);
  })
  .catch((error) => {
    console.log("Ошибка", error);
  });
