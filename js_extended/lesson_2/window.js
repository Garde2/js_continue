console.log(window);
const newWindow = window.open("https://www.kinartel.com", "_blank"); //открываем новое
window.close(); //закрываем текущеее
window.resizeTo(800, 600); //меняем размер окна
window.location.href = "https://www.kinartel.com"; //перенаправление
const windowWidth = window.innerWidth; //ширина окна

const isWindowOpen = window.window.open("https://www.kinartel.com") !== null; //проверяем открыто ли окно
const windowHeight = window.window.innerHeight; //высота окна
window.window.location.href = "https://www.kinartel.com"; //перенапр во вложенном

const newWindowSelf = self.open("https://www.kinartel.com", "_blank"); //откр новое в браузере с помощью self
self.close(); //закрываем текущее
self.resizeBy(100, 100); //меняем размер ок
self.location.href = "https://www.kinartel.com"; //перенап

//редко frame
const frame = frame[0]; //получаем первый фрейм - cсылку на фрейм по индексу
frame[0].location.href = "https://www.kinartel.com"; //перенап во фрейме
const frameCount = frame.length; //количество фреймов на страницу
const parentFrame = frame.parent; //получаем родительский фрейм
const parentWindow = window.parent; // доступ к род окну из фрейма = одинаковые сайты в разных городах, "подглядываем" в окошко на родительский сайт, меняя только своё

const globalObject = globalThis; //ссылка на глобальный объект
globalThis.newVariable = "Hello"; //создание новой переменной глобальнолй
const globalVariable =
  globalThis.window === globalThis.self ? "Window" : "Worker"; //проверка глобальных объектов, получаем доступ к глоб перемен из разных сред исполнения

//лучше нет - забиваем глобал
var glob = 5;
function increment(val) {
  return val + 1;
}

console.log(window.glob);
console.log(window.increment);

console.log(alert() === window.alert()); //проверяем совместимость alert и window.alert - true

alert("Hello World");
window.alert("Hello World");

const local = 5;
let localFunc = () => "localFunc"; // значит уже есть return!
console.log(local); //5
console.log(localFunc()); //localFunc() - это функция, которая возвращает local
console.log(window.local); //undefined
console.log(window.localFunc()); //undefined

console.log(window.Symbol.for); //f for() {[native code]}
console.log(window.Symbol.iterator); // Symbol(Symbol.iterator))
console.log(window.Array.from); //f from() {[native code]}

//24:25 - объект функции
//свойство name - имя функции, length - число параметров, которые ожидает функция, внутри массив arguments с перечислением параметров функции
