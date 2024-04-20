//для data-price функция, принимает макс цену и скрывает все элем с ценой выше. прям с контентом на странице

const filterElementByDataAttribute = (attributeName, maxPrice) => {
  const elements = Array.from(document.querySelectorAll(`[${attributeName}]`)); //не пугаемся форме
  elements.forEach((element) => {
    const price = parseFloat(element.getAttribute(attributeName));
    if (price > maxPrice) {
      element.style.display = "none";
    }
  });
};

filterElementByDataAttribute("data-price", 50);

//сортируем элем по убыванию рейтинга, переставляя их

const sortElementsByRating = (attributeName) => {
  const rating = document.querySelector(".rating");
  const elements = Array.from(rating.querySelectorAll(`[${attributeName}]`));
  // elements.sort((a, b) => b.getAttribute(attributeName) - a.getAttribute(attributeName));

  elements.sort((a, b) => {
    const ratingA = parseInt(a.getAttribute(attributeName));
    const ratingB = parseInt(b.getAttribute(attributeName));
    return ratingB - ratingA;
  });
  elements.forEach((element) => {
    rating.appendChild(element);
  });
};

sortElementsByRating("data-rating");
