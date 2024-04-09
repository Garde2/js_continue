//опц цепочка вызовоо и оператор нулевого слияния

const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    street: "123 main St",
  },
  contacts: {
    email: "john@example.com",
    phone: "123-456-7890",
  },
};

const email = user?.contacts?.email;
console.log(email);

const defaultValue = user?.otherValue ?? "default value";
console.log(defaultValue);

const streetName = user?.address?.street ?? "Unknown";
console.log(streetName); //123 main St
