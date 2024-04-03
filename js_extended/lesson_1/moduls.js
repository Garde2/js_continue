//автоматически в строгом режиме, могут быть ошибки CORS при локальной загрузке HTML
//в теге script по умолчанию атрибут defer
//модули подключаются единожды, даже если несколько ссылок в скриптах
//объектыиз модуля добавляются в область видимости скрипта, ене видны в глобальной

//import {name as title, draw as picture} from "./modules/square.js";
//с помощью промиса import() подгружаем только когда необходимо, снижаем нагрузку на сервер и облегчаем выполнение скриптов

export const name = "square";
export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}

//внутри блоков нельзя экспортировать

import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
// import * as Square from "./modules/square.js"; // очень тяжелое
