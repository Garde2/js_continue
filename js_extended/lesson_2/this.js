//27:20 стрелочные функции - нет своего this, нет массива arguments, если в однострочной срелочной фукции нет выражения в фигурных скобок - автоматом return для выражения

//обычная функция

function regulaFunction() {
  console.log(this);
}

const arrowFunction = () => {
  console.log(this);
};
//обе не работают

regulaFunction(); // выводит контекст выполнения, объеккт window в браузере или global в Ноде
arrowFunction(); // выводит контекст выполнения, определенный вов ремя создания функции (лексический)

//внутри объекта

const obj = {
  regulaMethod: function () {
    console.log(this);
  },
  arrowMethod: () => {
    console.log(this);
  },
};

//различия очевидны и поэтому ВНУТРИ объекта так редки стрелочные

obj.regulaMethod(); // выводит  obj потому что метод вызывается на объекте obj
obj.arrowMethod(); // выводит  контекст, в котром была создана стрелочная функция типа window или `global

const result = (a, b) => a + b;

arr.filter((item) => item > 3); //

//34:07 сеттеры и геттеры
