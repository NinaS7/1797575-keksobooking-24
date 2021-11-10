const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_ROOMS = 100;

const MIN_PRICE_TYPES = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const titleInput = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const type = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const getPageDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');

  const adFormChildren = Array.from(adForm.childrens);
  adFormChildren.forEach((children) => {
    children.setAttribute('disabled', 'disabled');
  });
  const mapFiltersChildren = Array.from(mapFilters.childrens);
  mapFiltersChildren.forEach((children) => {
    children.setAttribute('disabled', 'disabled');
  });
};

const getPageActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');

  const adFormChildren = Array.from(adForm.childrens);
  adFormChildren.forEach((children) => {
    children.removeAttribute('disabled', 'disabled');
  });
  const mapFiltersChildren = Array.from(mapFilters.childrens);
  mapFiltersChildren.forEach((children) => {
    children.removeAttribute('disabled', 'disabled');
  });
};

titleInput.addEventListener('input', () => {
  titleInput.setCustomValidity('');
  if (titleInput.value.length < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Заголовок должен состоять минимум из ${MIN_TITLE_LENGTH} символов`);
    titleInput.style = 'border: 2px solid red';
  } else
  if (titleInput.value.length > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Заголовок не должен превышать ${MAX_TITLE_LENGTH} символов`);
    titleInput.style = 'border: 2px solid red';
  }
  titleInput.reportValidity();
});

type.addEventListener('change', () => {
  const getMinPrice = () => {
    price.min = MIN_PRICE_TYPES[type.value];
    price.placeholder = MIN_PRICE_TYPES[type.value];
  };
  price.setCustomValidity('');
  if (Number(price.value) < Number(MIN_PRICE_TYPES[type.value])) {
    price.setCustomValidity(`Минимальная цена для выбранного типа жилья должна быть не менее ${MIN_PRICE_TYPES[type.value]} ₽/ночь`);
    price.style = 'border: 2px solid red';
  } else
  if (Number(price.value) > Number(price.max)) {
    price.setCustomValidity(`Цена не должна превышать ${price.max}`);
    price.style = 'border: 2px solid red';
  }
  price.reportValidity();
  getMinPrice();
});

roomNumber.addEventListener('change', () => {
  roomNumber.setCustomValidity('');
  if (Number(roomNumber.value) < Number(capacity.value)) {
    roomNumber.setCustomValidity('Количество комнат должно быть не менее количества гостей');
    roomNumber.style = 'border: 2px solid red';
  } else
  if (Number(roomNumber.value) === MAX_ROOMS && Number(capacity.value) !== 0) {
    capacity.setCustomValidity('Вы выбрали вариант недвижимости "не для гостей"');
    capacity.style = 'border: 2px solid red';
  }
  roomNumber.reportValidity();
});

capacity.addEventListener('change', () => {
  capacity.setCustomValidity('');
  if (Number(capacity.value) > Number(roomNumber.value)) {
    capacity.setCustomValidity('Количество гостей должно быть не более количества комнат');
    capacity.style = 'border: 2px solid red';
  } else
  if (Number(capacity.value) === 0 && Number(roomNumber.value) !== MAX_ROOMS) {
    capacity.setCustomValidity('Укажите количество гостей');
    capacity.style = 'border: 2px solid red';
  }
  capacity.reportValidity();
});

export {getPageDisabled, getPageActive};
