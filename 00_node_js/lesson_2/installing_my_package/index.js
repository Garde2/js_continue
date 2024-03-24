const dariaVoronkova = require("daria_voronkova_math_package_2");
const { calculateResultSum } = require("./calculateResultSum.js");
require("colors");

const addRes = dariaVoronkova.add(4.2, 8.3);
const subRes = dariaVoronkova.subtract(10.5, 6.1);
const multRes = dariaVoronkova.multiply(4.5, 2);
const quadroRes = dariaVoronkova.quadraticWithTwoUnknown(2, 5, 7);

console.log(addRes);
console.log(subRes);
console.log(multRes);
console.log(quadroRes);

//const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
const total = calculateResultSum([1.1, 12.2, 13.1], 0.9);

const resultText = `Общая стоимость покупок: ${total} руб`;

console.log(total > 50 ? resultText.red : resultText.green);
