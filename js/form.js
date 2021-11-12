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
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const getPageDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  const adFormChildrens = Array.from(adForm.children);
  adFormChildrens.forEach((children) => {
    children.setAttribute('disabled', 'disabled');
  });
  const mapFiltersChildrens = Array.from(mapFilters.children);
  mapFiltersChildrens.forEach((children) => {
    children.setAttribute('disabled', 'disabled');
  });
};

const getPageActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  const adFormChildrens = Array.from(adForm.children);
  adFormChildrens.forEach((children) => {
    children.removeAttribute('disabled', 'disabled');
  });
  const mapFiltersChildrens = Array.from(mapFilters.children);
  mapFiltersChildrens.forEach((children) => {
    children.removeAttribute('disabled', 'disabled');
  });
};

titleInput.addEventListener('input', () => {
  titleInput.setCustomValidity('');
  if (titleInput.value.length < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Заголовок должен состоять минимум из ${MIN_TITLE_LENGTH} символов`);
  } if (titleInput.value.length > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Заголовок не должен превышать ${MAX_TITLE_LENGTH} символов`);
  }
  titleInput.reportValidity();
});

const getMinPrice = () => {
  price.min = MIN_PRICE_TYPES[type.value];
  price.placeholder = MIN_PRICE_TYPES[type.value];
};

type.addEventListener('change', getMinPrice);

type.addEventListener('change', () => {
  price.setCustomValidity('');
  if (Number(price.value) < Number(MIN_PRICE_TYPES[type.value])) {
    price.setCustomValidity(`Минимальная цена для выбранного типа жилья должна быть не менее ${MIN_PRICE_TYPES[type.value]} ₽/ночь`);
  } if (Number(price.value) > Number(price.max)) {
    price.setCustomValidity(`Цена не должна превышать ${price.max}`);
  }
  price.reportValidity();
});

price.addEventListener('input', () => {
  price.setCustomValidity('');
  if (Number(price.value) < Number(MIN_PRICE_TYPES[type.value])) {
    price.setCustomValidity(`Минимальная цена для выбранного типа жилья должна быть не менее ${MIN_PRICE_TYPES[type.value]} ₽/ночь`);
  } if (Number(price.value) > Number(price.max)) {
    price.setCustomValidity(`Цена не должна превышать ${price.max}`);
  }
  price.reportValidity();
});

roomNumber.addEventListener('change', () => {
  roomNumber.setCustomValidity('');
  if (Number(roomNumber.value) < Number(capacity.value)) {
    roomNumber.setCustomValidity('Количество комнат должно быть не менее количества гостей');
  } if (Number(roomNumber.value) === MAX_ROOMS && Number(capacity.value) !== 0) {
    capacity.setCustomValidity('Вы выбрали вариант недвижимости "не для гостей"');
  }
  roomNumber.reportValidity();
});

capacity.addEventListener('change', () => {
  capacity.setCustomValidity('');
  if (Number(capacity.value) > Number(roomNumber.value)) {
    capacity.setCustomValidity('Количество гостей должно быть не более количества комнат');
  } if (Number(capacity.value) === 0 && Number(roomNumber.value) !== MAX_ROOMS) {
    capacity.setCustomValidity('Укажите количество гостей');
  }
  capacity.reportValidity();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export {getPageDisabled, adForm, mapFilters, getPageActive};
