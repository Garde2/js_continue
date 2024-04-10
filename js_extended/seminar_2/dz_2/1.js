"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books;

  constructor(books = []) {
    const ifCopy = (books) =>
      books.filter((item, index) => books.indexOf(item) !== index);
    const duplicate = ifCopy(books);

    if (duplicate.length > 0) {
      throw new Error("Дубликаты в массиве книг!");
    } else {
      this.#books = books;
    }
  }

  allBooks() {
    return this.#books;
    // return this.books.map((book) => book);
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже есть в библиотеке!");
    }
    this.#books.push(title);
    return this.#books;
  }

  hasBook(title) {
    return this.#books.includes(title) ? true : false;
  }

  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("Книги с таким названием нет в библиотеке!");
    }
    this.#books = this.#books.filter((book) => book !== title);
  }
}

const newLib = new Library([
  "Маленький принц",
  "Степной волк",
  "Алгебра и начала анализа",
]);
console.log(newLib.allBooks());

newLib.addBook("Чиполлино");
console.log(newLib.allBooks());

// newLib.addBook("Степной волк");
// console.log(newLib.allBooks());

// console.log(newLib.hasBook("Чиполлино"));

newLib.removeBook("Чиполлино");
console.log(newLib.allBooks());
