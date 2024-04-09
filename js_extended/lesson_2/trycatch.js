//переменные, объявленные в tryне будут видны в catch и finally, если нужен обмен данными - нуджно поднять на уровень выше

//код finally выполнится в любом случае, даже если в try был return

// try{
//     undefined = 1;
// }

// catch(){
//     console.log('Smth happened in catch');
// }
// finally {
//     console.log('Success');
// }

function dividenumbers(a, b) {
  try {
    const result = a / b;
    if (isNaN(result)) {
      throw new Error("Результат не число");
    }
    console.log("Result: ", result);
  } catch (error) {
    console.log("Ошибка деления: ", error);
  } finally {
    console.log("Поделили!");
  }
}

dividenumbers(10, 2);
dividenumbers(10, 0);

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function validateNumber(number) {
  if (typeof number !== "number") {
    throw new CustomError("Number is not a number");
  }
  console.log("Провалидировали!");
}

try {
  validateNumber(42);
} catch (err) {
  if (err instanceof CustomError) {
    console.error("Ошибка: ", err.message);
    console.log("тип ошибки: ", err.name);
  } else {
    console.error("Ошибка произошла: ", err);
  }
}
