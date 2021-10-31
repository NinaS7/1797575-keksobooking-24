/* Выполнено с использованием:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://learn.javascript.ru/number
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TITLES = [
  'Сдаётся недвижимость',
  'Жильё в центре',
  'Уютное место',
  'Недорогое жильё',
  'Лучшее предложение для туристов',
  'В 3-х минутах от метро',
  'Предложение от агенства недвижимости "Cити"',
  'Возможно размещение с животными',
  'Отличное предложение',
  'Хорошее вариант для семей с детьми',
];

const MIN_PRICE = 1000;
const MAX_PRICE = 30000;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const MAX_ROOMS = 5;
const MAX_GUESTS = 10;
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];

const DESCRIPTIONS = [
  'Есть всё необходимое для жизни, заходи и живи.',
  'Тихая, уютная и просторная квартира. Есть вся необходимая мебель и техника.',
  'Огороженная территория, охрана, система видео наблюдения, консьерж.',
  'Жильё премиум класса. Дизайнерский ремонт.',
  'Удобное расположение. Рядом магазины, торговые центры, остановка общественного транспорта.',
  'Тихий двор, огороженная территория, детская площадка.',
  'Панорамные окна, прекрасный вид из окна.',
  'Только на длительный срок!!!',
  'Свежий ремонт, 2 санузла, кондицинер. Отличный вариант для большой семьи, для двух семей или группы друзей.',
  'Компактная, но удачно организованная планировка, отделка в мягких светлых тонах.',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomIntRange = function (min, max) {
  if (min<0 || max<=min) {
    return 'Диапазон может быть только положительный и начальное значение должно быть меньше конечного!';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloatRange = function (min, max, fraction) {
  if (min<0 || max<=min) {
    return 'Диапазон может быть только положительный и начальное значение должно быть меньше конечного!';
  }
  const randomFloatRange = Math.random() * (max - min + 1) + min;
  return +randomFloatRange.toFixed(fraction);
};

//Функция для создания массива случайной длины из заданных значений.

function getArray (elements) {
  const maxLength = elements.length;
  const lengthArray = getRandomIntRange(1, maxLength);
  const ARRAY = [];

  while (ARRAY.length < lengthArray) {
    const indexElement = getRandomIntRange(0, maxLength - 1);
    const el = elements[indexElement];

    if (!ARRAY.includes(el)) {
      ARRAY.push(el);
    }
  }
  return ARRAY;
}

// Функция поиска случайного элемента в переданном массиве.

const getRandomArrayElement = (elements) => elements[getRandomIntRange(0, elements.length - 1)];

const createAdvertisement = () => {
  const locationLat = getRandomFloatRange (35.65000, 35.70000, 5);
  const locationLng = getRandomFloatRange (139.70000, 139.80000, 5);
  return {
    autor: getRandomArrayElement(AVATARS),
    offer: {
      title: getRandomArrayElement(TITLES),
      address: String(`${locationLat}, ${locationLng}`),
      price: getRandomIntRange(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntRange(1, MAX_ROOMS),
      guests: getRandomIntRange(1, MAX_GUESTS),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getArray(PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

// Генерация массива заданной длины.

const COUNT_OFFER = 10;
const similarAdvertisement = Array.from({length: COUNT_OFFER}, createAdvertisement);

similarAdvertisement(); // Временный вызов.
