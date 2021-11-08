import {getRandomIntRange, getRandomFloatRange, getRandomArrayElement} from './util.js';

const MIN_PRICE = 1000;
const MAX_PRICE = 30000;
const MAX_ROOMS = 5;
const MAX_GUESTS = 10;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const COMMA_OUT = 5;
const COUNT_OFFER = 10;

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
  'Хороший вариант для семей с детьми',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

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

//Функция для создания массива случайной длины из заданных значений.

function getRandomArray (elements) {
  const maxLength = elements.length;
  const lengthArray = getRandomIntRange(1, maxLength);
  const array = [];

  while (array.length < lengthArray) {
    const indexElement = getRandomIntRange(0, maxLength - 1);
    const el = elements[indexElement];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

// Функция для создания объекта с описанием одного случайного объявления.

const createAdvertisement = () => {
  const locationRandomLat = getRandomFloatRange (LAT_MIN, LAT_MAX, COMMA_OUT);
  const locationRandomLng = getRandomFloatRange (LNG_MIN, LNG_MAX, COMMA_OUT);
  return {
    author: {
      avatar: getRandomArrayElement(AVATARS),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: String(`${locationRandomLat}, ${locationRandomLng}`),
      price: getRandomIntRange(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntRange(1, MAX_ROOMS),
      guests: getRandomIntRange(1, MAX_GUESTS),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: locationRandomLat,
      lng: locationRandomLng,
    },
  };
};

// Генерация массива заданной длины.

const similarAdvertisements = Array.from({length: COUNT_OFFER}, createAdvertisement);

export {similarAdvertisements};
