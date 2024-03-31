Math.floor(15.5);

globalThis.Math.floor(15.5);

globalThis.setTimeout(() => console.log("Hello@"), 1000);

setTimeout(() => console.log("Hello2!"), 1000);

console.log(process.version); // версия программы
console.log(process.arch); // арх процессора
console.log(process.pid); // Идентификатор текущего процесса в операционке - если снова выести, то выведет новый
console.log(process.cwd()); //директория, из которой скрипт ЗАПУЩЕН - путь

console.log(__filename); //выведет в консоль путь к файлу
console.log(__dirname); // выведет путь директории, в которой ХРАНИТСЯ скрипт
