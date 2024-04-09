const App = {};

class User {
  #_name;

  constructor(name) {
    this.#_name = name;
  }
  getName() {
    return this.#_name;
  }
}

App.registerUser = (name, email, password) => {
  try {
    if (!name || !email || !password) {
      throw new Error("Name, email and password are required");
    }

    const user = new User(name);

    const userData = {
      name: user.getName(),
      email,
      password,
    };

    console.log("Пользователь зареген:", user.getName());
    console.log("Допданные:", userData);
  } catch (error) {
    console.error("Ошибка регистрации:", error.message);
  } finally {
    console.log("Зарегено!");
    //console.log("Registere! Written in file", __filename);
    // console.log("JSON:", JSON.stringify(userData));
  }
};

App.registerUser("<NAME>", "<EMAIL>", "<PASSWORD>");
App.registerUser("Jane Smith", "", "password");
