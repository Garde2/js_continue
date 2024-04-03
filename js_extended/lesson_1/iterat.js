// //for (...of...)

// const string = "Hello";
// console.log(string[2]); //l
// console.log(string.length); //5

// for (let str of string) {
//   console.log(str);
// }
//как циклы, а так же с любыми символами включая имеющие свои ASCII коды

// //как пробежаться по значениям между ключами и значениями
// let range = {
//   from: 1,
//   to: 17,
// };

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       // должен вернуть значение в виду объекта {done:..., value:...}
//       return this.current <= this.last
//         ? { done: false, value: this.current++ }
//         : { done: true };
//     },
//   };
// };
// for (let number of range) {
//   console.log(number);
// }

//всё вместе - работает в обном объекте, но можем заблудиться в this
let range = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    return this.current <= this.to
      ? { done: false, value: this.current++ }
      : {
          done: true,
        };
  },
};

for (let number of range) {
  console.log(number);
}
//объект итератор отделен от итерируемого объекта. метод next() у итератора
//можно использовать несколько одновременно даже асинх

//--Array.from--

let pseudo = {
  0: "first",
  1: "second",
  2: "new elem",
  length: 3,
};

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

//работает и со строкой
let pseudo2 = "It is array too";
let array2 = Array.from(pseudo2);
console.log(array2);
//каждый символ, включая пробел, - элемент массива
//43:57
