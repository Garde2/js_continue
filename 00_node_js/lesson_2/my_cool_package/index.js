function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function quadraticWithTwoUnknown(a, b, c) {
  let discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return "Уравнение не имеет реальных корней";
  } else if (discriminant === 0) {
    return "Уравнение имеет один корень: " + -b / (2 * a);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);

    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return "Уравнение имеет два корня: " + root1 + " и " + root2;
  }
}

module.exports = { add, subtract, multiply, quadraticWithTwoUnknown };
