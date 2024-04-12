//устанавливает сервер
//одна пара ключ-хначение
//4кб

let setCookie = (name, value, days) => {
  let expitationDate = new Date();
  expitationDate.setDate(expitationDate.getDate() + days);

  let cookieValue =
    encodeURIComponent(value) + "; expires=" + expitationDate.toUTCString();
  document.cookie = name + "=" + cookieValue;
};

setCookie("username", "John", 7);
setCookie("userinfo", "Olga", 5);
setCookie("userinfo2", "Olga2", 55);

//запускаем live server идем в Applications, смотрим Cookie и видим, что наш друг записал

let getCookie = (name) => {
  let cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

let username = getCookie("username");
console.log("Значение cookie username:", username);

let deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

deleteCookie("userinfo2");

// 50:51 Storage
