"use strict";

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

const clientVasya = new Client("Василий", "Васильев");

// class Worker {
//   constructor(specialities, povar) {
//     this.specialities = specialities;
//     this.povar = povar;
//   }
// }
// const worker = new Worker();

const worker = [
  { specialities: "Пицца", povar: "Олег" },
  { specialities: "Суши", povar: "Андрей" },
  { specialities: "Десерт", povar: "Анна" },
];

class Dish {
  constructor(name, quantity, type) {
    this.name = name;
    this.quantity = quantity;
    this.type = type;
  }
}

// const menu = new Dish();
const menu = [
  { name: "Маргарита", type: "Пицца" },
  {
    name: "Пепперони",
    type: "Пицца",
  },
  {
    name: "Три сыра",
    type: "Пицца",
  },
  {
    name: "Филадельфия",
    type: "Суши",
  },
  {
    name: "Калифорния",
    type: "Суши",
  },
  {
    name: "Чизмаки",
    type: "Суши",
  },
  {
    name: "Сеякемаки",
    type: "Суши",
  },
  {
    name: "Тирамису",
    type: "Десерт",
  },
  { name: "Чизкейк", type: "Десерт" },
];

// Вам необходимо реализовать класс, который управляет заказами и поварами.

class Manager {
  clientOrder = [];

  dishExistsInMenu(dish) {
    for (const menuDish of menu) {
      if (dish.name === menuDish.name && dish.type === menuDish.type) {
        return;
      }
    }
    throw `${dish.type} ${dish.name} - такого блюда не существует!`;
  }

  newOrder(client, ...dish) {
    dish = dish.map((item) => new Dish(item.name, item.quantity, item.type));

    for (const orderDish of dish) {
      this.dishExistsInMenu(orderDish);
    }

    for (client of this.clientOrder) {
      if (
        client.name === client.firstname &&
        client.lastname === client.lastname
      ) {
        console.log(`Клиент ${client.firstname} уже заказал`);
        console.log(`и теперь нам надо как-то сплюсовать`);
      }
    }

    for (let i = 0; i < dish.length; i++) {
      console.log(
        `${dish[i].type} "${dish[i].name}" - ${
          dish[i].quantity
        }; готовит повар ${this.getWorkerBySpeciality(dish[i].type)}`
      );
    }
  }

  getWorkerBySpeciality(speciality) {
    for (let i = 0; i < worker.length; i++) {
      if (worker[i].specialities === speciality) {
        return worker[i].povar;
      }
    }
    return null;
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
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
