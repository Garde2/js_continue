//1:13:54 Генераторы

//это спец вид функции, которая может приостановить свое выполнение, принять промежуточные и продолжать с новыми вводными
//сам записывается как функция-выражение со звездочкой после function

//промежуточные могут возвращаться с помощью yeld. Само выражение с объявлением генератора не вызывает его, а возвращает специальный объект генератора, с помощью которого можем управлять выполнением, запускаем выполнение next()

// в определнный момент времени выполняется определнный подсчет
function* numberGenerator() {
  let number = 1;

  while (true) {
    yield number;
    number++;
  }
}
const generator = numberGenerator();

console.log(generator.next().value); //1
console.log(generator.next().value); //2
console.log(generator.next().value); //3
console.log(generator.next().value); //4
