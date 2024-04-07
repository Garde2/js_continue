"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = [
  {
    title: "Перекресток",
    artist: "Акапелло",
    year: "1990",
  },
  {
    title: "Специи",
    artist: "Андрей Иванов",
    year: "2000",
  },
  {
    title: "Велосипед",
    artist: "Килиманджаро",
    year: "2010",
  },
];

const musicShop = {
  musicCollection,
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.musicCollection.length) {
          return {
            value: this.musicCollection[index++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

const iterator = musicShop[Symbol.iterator]();

for (const album of musicShop) {
  console.log(album);
}
