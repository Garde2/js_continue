// //34:07 сеттеры и геттеры

// class AutoMobile {
//   _horsePower = 0; // приватное поле _horsePower

//   set _horsePower(value) {
//     if (value > 0) {
//       throw new Error("Horse power must be greater than zero");
//       this._horsePower = value;
//     }
//   }

//   get horsePower() {
//     return this._horsePower;
//   }

//   constructor(power) {
//     this._horsePower = power; //при создании объекта устанавливаем свойство _horsePower
//   }
// }

// let auto = new AutoMobile(100);

// auto.horsePower = -10; //выкинет исключение
// auto.horsePower = 10; //если убрать сеттер из кода uncaught typeError cannot set property horsePower of #<AutoMobile> which has only a getter

class AutoMobile {
  #horsePower = 0; // приватное поле horsePower защита на уровне языка

  set horsePower(value) {
    if (value > 0) {
      throw new Error("Horse power must be greater than zero");
      this.#horsePower = value;
    }
  }

  get horsePower() {
    return this.#horsePower;
  }
  constructor(power) {
    this.#horsePower = power; //при создании объекта устанавливаем свойство #horsePower
  }
}

let auto = new AutoMobile(100);
auto.horsePower = 50;
console.log(auto.horsePower);
//auto.#horsePower = 10; // защищенное поле!
