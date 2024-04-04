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
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  {
    name: "Пепперони",
    quantity: 1,
    type: "Пицца",
  },
  {
    name: "Три сыра",
    quantity: 1,
    type: "Пицца",
  },
  {
    name: "Филадельфия",
    quantity: 1,
    type: "Суши",
  },
  {
    name: "Калифорния",
    quantity: 1,
    type: "Суши",
  },
  {
    name: "Чизмаки",
    quantity: 1,
    type: "Суши",
  },
  {
    name: "Сеякемаки",
    quantity: 1,
    type: "Суши",
  },
  {
    name: "Тирамису",
    quantity: 1,
    type: "Десерт",
  },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
];

let clientOrder = [];

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  newOrder(client, ...dish) {
    dish = dish.map((item) => new Dish(item.name, item.quantity, item.type));
    console.log(dish);
    console.log(dish[0]);
    console.log(dish[0].name);
    console.log(menu[1].name);
    console.log(menu);

    // for (const item of dish) {
    //   forEach (item of menu) {
    //     if (i.name != menu[1].name) {
    //       throw `${i.type} "${i.name}" нет такого блюда!`;
    //     }
    //   }
    // }

    // for (let i = 0; i < menu.length; i++) {
    //   if (!dish[i].name in menu.name) {
    //     throw `${dish[i].type} "${dish[i].name}" нет такого блюда!`;
    //   }
    // }
    // foreach(obj in dish) {
    //   if (!dish[i].name in menu.name) {
    //     throw `${dish[i].type} "${dish[i].name}" нет такого блюда!`;
    //   }
    // };
    // for (let num of menu.values()) {
    //   if (num.name != dish.name) {
    //     throw `${num.type} "${num.name}" нет такого блюда!`;
    //   }
    // }

    //почемц же оно не работает =(

    console.log(`Клиент ${client.firstname} заказал:`);

    for (let i = 0; i < dish.length; i++) {
      console.log(
        `${dish[i].type} "${dish[i].name}" - ${
          dish[i].quantity
        }; готовит повар ${this.getWorkerBySpeciality(dish[i].type)}`
      );
    }
    clientOrder.push({
      client: client,
      dish: dish,
    }); // я знаю из семинара, что можно просо client и dish, но автоправка их возвращает!
    console.log("Запушено");
  }

  /** не получилось сделать проверку по названию блюда
 * 
 * newOrder(client, ...dish) {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].name === dish) {
        console.log(`Клиент ${client.firstname} заказал:`);
        for (let i = 0; i < dish.length; i++) {
          console.log(
            `${dish[i].type} "${dish[i].name}" - ${
              dish[i].quantity
            }; готовит повар ${this.getWorkerBySpeciality(dish[i].type)}`
          );
        }
        clientOrder.push({
          client: client,
          dish: dish,
        }); // я знаю из семинара, что можно просо client и dish, но автоправка их возвращает!
        console.log("Запушено");
      } else {
        console.log("Такого блюда не существует.");
      }
    }
    return null;
  }
 */

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
