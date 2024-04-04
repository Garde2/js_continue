"use strict";
//52:08

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

//const clientVasya = new Client("Василий", "Васильев");

// Можно передать внутрь конструктора что-либо, если необходимо.
// const managerPizza = new Manager("Пицца", "Олег");
// const managerSusi = new Manager("Суши", "Андрей");
// const managerDesert = new Manager("Десерты", "Анна");
// console.log(managerPizza);
class Worker {
  constructor(specialities, povar) {
    this.specialities = specialities;
    this.povar = povar;
  }
}

const worker = new Worker();
worker = [
  { specialities: "Пицца", povar: "Олег" },
  { specialities: "Суши", povar: "Андрей" },
  { specialities: "Десерты", povar: "Анна" },
];

class Menu {
  constructor(name, quantity, type) {
    this.name = name;
    this.quantity = quantity;
    this.type = type;
  }
}

for (const item of dish) {
  for (const menuItem of menu) {
    if (menuItem.name !== dish.name) {
      throw `${menuItem.type} "${menuItem.name}" нет такого блюда!`;
    }
  }
}

const menu = new Menu();
menu = [
  { type: "Пицца", name: "Маргарита", quantity: 1 },
  {
    type: "Пицца",
    name: "Пепперони",
    quantity: 1,
  },
  {
    type: "Пицца",
    name: "Три сыра",
    quantity: 1,
  },
  {
    type: "Суши",
    name: "Филадельфия",
    quantity: 1,
  },
  {
    type: "Суши",
    name: "Калифорния",
    quantity: 1,
  },
  {
    type: "Суши",
    name: "Чизмаки",
    quantity: 1,
  },
  {
    type: "Суши",
    name: "Сеякемаки",
    quantity: 1,
  },
  {
    type: "Десерт",
    name: "Тирамису",
    quantity: 1,
  },
  {
    type: "Десерт",
    name: "Чизкейк",
    quantity: 1,
  },
];

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor() {
    this.workers = new Map();
    this.dishes = new Map();
  }

  newOrder(client, dishes) {
    client, (order = new Dish());
  }

  getWorkerBySpeciality(speciality) {
    for (const worker of this.workers) {
      if (worker.specialities === speciality) {
        return worker.povar;
      }
    }
  }
}

const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);
// Вывод:
// Клиент Иван заказал:
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.
