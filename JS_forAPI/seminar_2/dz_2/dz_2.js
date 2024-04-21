// Честно говоря, я тоже дааавно учусь, как и человек из второго семинара, и тоже диплом нужен, ибо жаль денег и двух лет. JS мне нравится, хоть с ним и надо сидеть, а споследние 2,5 месяца непрекращающийся аврал на работе и не получается. а от css трясет еще с момента моей с ними встречи лет 16-17 назад, когда все красоты кода html были в одной километровой портянке из таблиц в таблицах... Учусь, чтоб мозги не засыхали, ну и интересно. Но работаю в другой области, которая мне нравится.

//я плавно разбираюсь с первым заданием, которое Вы уже оценили и хочу разобраться по-нормальному и с ним с остальными на майских каникулах в GeekBrain.По первому заданию смотрю чужие коды, устраняю огромное количество пробелов в своем понимании проблем (заодно и с заданиями предыдущего курса). А так же реально смотрю и пытаюсь врубиться в текущие лекции и семинары.
// Огромное спасибо еще раз за Ваши объяснения к предыдущим дз и на семинарах! Они не прошли даром!

//А ПОКА, к своему стыду, СКОПИРУЮ ЧУЖОЕ. Извините, что отнимаю время.

const imagesItemNodeList = document.querySelectorAll(".gallery__item");
const imagesItemArray = Array.from(imagesItemNodeList);
const btnBoxEl = document.querySelector(".button__box");

const paginationItemList = document.querySelectorAll(".pagination__item");
const paginationArray = Array.from(paginationItemList);
console.log(paginationArray);

btnBoxEl.addEventListener("click", ({ target }) => {
  let indexCurrentImage = 0;
  indexCurrentImage = findImageIndex(indexCurrentImage);

  deleteClassVisible(indexCurrentImage);

  if (target.dataset.direction === "prev") {
    if (indexCurrentImage === 0) {
      addClassVisible(imagesItemArray.length - 1);
    } else {
      addClassVisible(indexCurrentImage - 1);
    }
  } else {
    if (indexCurrentImage === imagesItemArray.length - 1) {
      addClassVisible(0);
    } else {
      addClassVisible(indexCurrentImage + 1);
    }
  }
});

paginationItemList.forEach((paginationItem) => {
  paginationItem.addEventListener("click", () => {
    // console.log(target);
    let indexCurrentImage = 0;
    indexCurrentImage = findImageIndex(indexCurrentImage);

    deleteClassVisible(indexCurrentImage);
    let imageNewCurrent = paginationArray.indexOf(paginationItem);

    addClassVisible(imageNewCurrent);
  });
});

// Находим индекс текущего изображения
function findImageIndex(indexCurrentImage) {
  imagesItemArray.forEach((image) => {
    if (image.matches(".visible")) {
      indexCurrentImage = imagesItemArray.indexOf(image);
    }
  });
  return indexCurrentImage;
}

// Добавляем класс к новому
function addClassVisible(index) {
  imagesItemArray[index].classList.add("visible");
  paginationArray[index].classList.add("checked");
}

//Удаляем класс с текущего
function deleteClassVisible(index) {
  imagesItemArray[index].classList.remove("visible");
  paginationArray[index].classList.remove("checked");
}
