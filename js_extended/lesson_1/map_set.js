// new Map();
// map.set(key, value);
// map.get(key);
// map.has(key);
// map.delete(key);
// map.clear();
// map.size;

// new Set(iterable); //обычно массив - копируем его в новый set
// set.add(value);
// set.delete(value);
// set.has(value); //true false
// set.clear();
// set.size();

//методы и свойства коллекций
//keys()
//values()
//entries() - пара [ключ, значение] по умолчанию в for (...of...)
//foreach() - как с массивом

// let map = new Map(); ////коллекция

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1"); ////bool как ключ

// console.log(map);

////Объект приводит ключи к строкам, а map сохраняет типы ключей

// console.log(map.get(1)); //num1
// console.log(map.get("1")); //str1
// console.log(map.size); //3

// let map = new Map();

// map.set("1", "We").set(1, "Likes").set(true, "JS");

// console.log(map);

let recipeMap = new Map([
  ["cucmber", 500],
  ["tomato", 350],
  ["onion", 70],
]);

console.log(recipeMap);

//по ключам
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

// по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount);
}

//recipeMap.entries() оба значения [,]
for (let entry of recipeMap) {
  console.log(entry);
}

//для каждой пары (б)
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// //Object.entries

// let map = new Map(Object.entries(obj));
// let obj = Object.fromEntries(map);

let buddies = [
  "Vaska",
  "Zhuchka",
  "Bulka",
  "Tusik",
  "Manka",
  "Zhuchka",
  "Bulka",
  "Tusik",
  "Korn",
];

let uniqueBuddies = new Set(buddies); //убрал дубли и этоколлекция
console.log(uniqueBuddies);

let arr = Array.from(uniqueBuddies);
console.log(arr);

//Map- коллекция где ключи только объекты Set- коллекция хранит только объекты
//удаляют значения автоматически сборщиком мусора
//нет дубликатов и ветвистости - нет обращения - нет мусора
