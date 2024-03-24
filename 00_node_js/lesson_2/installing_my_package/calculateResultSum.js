const nP = require("number-precision");

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => nP.plus(acc, purchase), 0);
  total = nP.times(total, discount);
  return total;
}

module.exports = { calculateResultSum };
