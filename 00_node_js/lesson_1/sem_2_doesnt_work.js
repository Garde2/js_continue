class Order {
  productsArray = [];

  constructor(orderNumber, totalPrice = 0) {
    this.orderNumber = orderNumber;
    this.totalPrice = totalPrice;
  }

  addProduct(product) {
    this.productsArray.push(product);
  }

  getTotalPrice(productsArray) {
    for (let i = 0; i < this.productsArray.length; i++) {
      this.totalPrice += this.productsArray[i].price;
    }
    return this.totalPrice;
  }
}

class Product extends Order {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
}
//console.log(getTotalPrice());
const order = new Order(12345);
console.log(order);
const product1 = new Product("Phone", 500);
console.log(product1);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
console.log(product2);
order.addProduct(product2);
// print.productsArray;
console.log(order.productsArray);
console.log(order.getTotalPrice());
