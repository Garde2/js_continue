//1
// const symbol = Symbol();

// const dogID = Symbol("dog");

// const dog1 = Symbol("dog");
// const dog2 = Symbol("dog");

// console.log(dog1);
// console.log(dog2);

// console.log(dog1 == dog2);

// //2
// const dogID = Symbol("dog");
// //alert(dogID); //не может конвертировать Symbol  в String

// console.log(dogID);
// console.log(dogID.description);

// // //3
// // let id = Symbol("dogID");

// let id = Symbol("id");
// let buddy = {
//   [id]: "Жучка",
// };

// console.log(buddy[id]);

// buddy[id] = "Бобик";

// //4
// let buddy = { name: "Tusik" };
// buddy.id = "our ident";
// buddy.id = "their ident";

// console.log(buddy.id);

// //5
// let buddies = {
//   [Symbol("Жучка")]: "Жучка",
//   [Symbol("Бобик")]: "Бобик",
//   [Symbol("Мурка")]: "Мурка",
//   elephant: "Слон",
// };

// console.log(buddies); //есть cat: "Vaska",

// let newBuddies = {};
// Object.assign(newBuddies, buddies); //Object.assign копирует все свойства в тч символьные

// buddies.cat = "Vaska";
// console.log(newBuddies); //нет cat: "Vaska",
// console.log(buddies); // есть cat: "Vaska",

//Symbol.for and Symbol.keyFor are in readme_forMe.md
