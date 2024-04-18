// Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

// На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии, а именно:
// - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"

// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
// Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.

// Начальные данные (JSON):

const initialLessons = `[
  {
    id: 1,
    name: "Йога",
    time: "10:00 - 11:00",
    maxParticipants: 15,
    currentParticipants: 8,
  },
  {
    id: 2,
    name: "Пилатес",
    time: "11:30 - 12:30",
    maxParticipants: 10,
    currentParticipants: 5,
  },
  {
    id: 3,
    name: "Кроссфит",
    time: "13:00 - 14:00",
    maxParticipants: 20,
    currentParticipants: 15,
  },
  {
    id: 4,
    name: "Танцы",
    time: "14:30 - 15:30",
    maxParticipants: 12,
    currentParticipants: 10,
  },
  {
    id: 5,
    name: "Бокс",
    time: "16:00 - 17:00",
    maxParticipants: 8,
    currentParticipants: 6,
  },
]`;

const lessonsKey = "lessons";
const lsUsersKey = "users";
const lessonEl = document.querySelector(".lessons-table");

if (!localStorage.getItem(lessonsKey)) {
  localStorage.setItem(lessonsKey, JSON.stringify(initialLessons));
}

const lessons = getLessons();

function getLessons() {
  return JSON.parse(localStorage.getItem(lessonsKey));
}

lessons.forEach((lesson) => {
  lessonEl.insertAdjacentHTML("beforeend", getLessonHtml(lesson));
});

//тут у нас таблица
function getLessonHtml(lesson) {
  return `
  <table>
    <p class="article" data-id="${lesson.id}"></p>
    <td>
        <h3 class="title">${lesson.name}</h3>
        <p class="time">${lesson.time}</p>
        <p class="maxPart-name">Максимальное кол-во участников:</p>
        <p class="maxPart">${lesson.maxParticipants}</p>
        <p class="maxPart-name">Число записавшихся:</p>
        <p class="curPart">${lesson.currentParticipants}</p>
        <button class="removeBtn">Отменить запись</button>
        <button class="joinBtn">Записаться на урок</button>
    </td>
  </table>
    `;
}

//нам нужен уникальный id пользователя, потому что один участник может записаться на каждое занятие только один раз.
//будем писать как на семинаре промпт вводить никнейм

const userName = prompt("Введите ваше имя/никнейм");
if (!localStorage.getItem(lsUsersKey)) {
  localStorage.setItem(lsUsersKey, JSON.stringify([]));
}
//если участник уже записан, то ничего не делаем,если имя новое - добавляем в список
//но ничо не получается

let users = JSON.parse(localStorage.getItem(lsUsersKey));
if (!users.hasOwnProperty(userName)) {
  users[userName] = {};

  users.push(lsUsersKey, userName);
  saveLessons(lsUsersKey, users);
}

window.addEventListener("DOMContentLoaded", (e) => {
  const userLesson = users[userName];
  for (const lessonId in lessons) {
    const lessonEl = document.querySelector(`.lesson[data-id="${lessonId}"]`);
    if (userLesson.hasOwnProperty(lessonId)) {
      const joinBtn = lessonEl.querySelector(".joinBtn");
      joinBtn.disabled = true;
    } else {
      const removeBtn = lessonEl.querySelector(".removeBtn"); //а ты почему ты null?!
      removeBtn.disabled = true;
    }
  }
});

//далее проверяется, если участник уже записан, то сообщение, что невозможно записаться снова
//и проверяется, что количество currentParticipants не превышает maxParticipants. Если currentParticipants равно maxParticipants или пользователь уже записан на занятие, то кнопка Записаться становится неактивной.

//не там у меня никнейм проверяется, надо чтоб при попытк зарегиться
lessonEl.addEventListener("click", ({ target }) => {
  const lessonEl = target.closest(".lessons");
  const lessonId = lessonEl.dataset.id; //почему ты null?!

  if (target.matches(".removeBtn")) {
    //если участник записан и хочет отменить запись, то после нажатия кнопки Отменить запись один вычитается из currentParticipants, кнопка Записаться становится активной, а кнопка Отменить запись - неактивной.
    if (!checkUsers(lessonId)) {
      target.disabled = true;
      return;
    }
    removeBtn(lessonEl);
    const joinBtn = lessonEl.querySelector(".joinBtn");
    joinBtn.disabled = false;
    target.disabled = true;
    return;
  }
  if (target.matches(".joinBtn")) {
    if (checkParicipants(lessonId) || checkUsers(lessonId)) {
      target.disabled = true;
      return;
    }
    joinBtn(lessonEl);
    target.disabled = true;
    const removeBtn = lessonEl.querySelector(".removeBtn");
    removeBtn.disabled = false;
    return;
  }

  // const lessons = getLessons(); //иначе если кто-то откроет на второй странице этот html и удалит или запишет на ней, а оно может не отразиться в локале
  // const foundedIndex = lessons.findIndex(
  //   (lesson) => lesson.id === Number(lessonId)
  // );

  // if (foundedIndex !== -1) {
  //   lessons.splice(foundedIndex, 1);
  // }

  // saveLessons(lessons);
  // return;
});

function joinBtn(lessonEl) {
  const lessonId = lessonEl.dataset.id;
  lessons[userId].currentParticipants += 1;
  const { name, time } = lessons[lessonId];
  users[userName][lessonId] = { name, time };

  generalSave();
}

function removeBtn(lessonEl) {
  const userId = lessonEl.dataset.id;
  lessons[userId].currentParticipants -= 1;
  delete users[userName][userId];

  generalSave();
}

function generalSave() {
  saveLessons(lessonsKey, lessons);
  saveLessons(lsUsersKey, users);
  const currentParticipants = lessonEl.querySelector(".curPart");
  currentParticipants.textContent =
    lessons[lessonEl.dataset.id].currentParticipants;
}

function checkParicipants(lessonId) {
  return lessonId.currentParticipants < lessonId.maxParticipants;
}

function checkUsers(lessonId) {
  //???
  return users[userName].hasOwnProperty(lessonId);
}

function saveLessons(lessonsKey, lessons) {
  localStorage.setItem(lessonsKey, JSON.stringify(lessons));
}

//2:02:01  про свежие данные если 2 страницы
