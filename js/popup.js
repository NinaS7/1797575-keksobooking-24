const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;

const typePlaces = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const getpopupTemplate = (popup) => {
  const adElement = similarAdTemplate.cloneNode(true);
  if (popup.author.avatar) {
    adElement.querySelector('.popup__avatar').src = popup.author.avatar;
  } else {
    adElement.querySelector('.popup__avatar').classList.add('hidden');
  }

  if (popup.offer.title) {
    adElement.querySelector('.popup__title').textContent = popup.offer.title;
  } else {
    adElement.querySelector('.popup__title').classList.add('hidden');
  }

  if (popup.offer.address) {
    adElement.querySelector('.popup__text--address').textContent = popup.offer.address;
  } else {
    adElement.querySelector('.popup__text--address').classList.add('hidden');
  }

  if (popup.offer.price) {
    adElement.querySelector('.popup__text--price').textContent = `${popup.offer.price} ₽/ночь`;
  } else {
    adElement.querySelector('.popup__text--price').classList.add('hidden');
  }

  if (popup.offer.type) {
    adElement.querySelector('.popup__type').textContent = typePlaces[popup.offer.type];
  } else {
    adElement.querySelector('.popup__type').classList.add('hidden');
  }

  if (popup.offer.rooms && popup.offer.guests) {
    adElement.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`;
  } else {
    adElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  if (popup.offer.checkin && popup.offer.checkout) {
    adElement.querySelector('.popup__text--time').textContent = `Заезд после ${popup.offer.checkin}, выезд до ${popup.offer.checkout}`;
  } else {
    adElement.querySelector('.popup__text--time').classList.add('hidden');
  }

  if (popup.offer.description) {
    adElement.querySelector('.popup__description').textContent = popup.offer.description;
  } else {
    adElement.querySelector('.popup__description').classList.add('hidden');
  }

  const featureContainer = adElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('popup__feature');
  if (popup.offer.features) {
    featureList.forEach((featureListItem) => {
      const isNessesary = popup.offer.features.some(
        (feature) => featureListItem.classList.contains(`.popup__feature--${feature}`),
      );
      if (!isNessesary) {
        featureListItem.remove();
      }
    });
  } else {
    featureContainer.classList.add('hidden');
  }

  const popupPhotos = adElement.querySelector('.popup__photos');
  const photoList = popupPhotos.querySelector('.popup__photo');
  if (popup.offer.photos) {
    popup.offer.photos.forEach((photo) => {
      const img = photoList.cloneNode(true);
      img.src = photo;
      img.width = PHOTO_WIDTH;
      img.height = PHOTO_HEIGHT;
      popupPhotos.appendChild(img);
    });
    photoList.remove();
  } else {
    popupPhotos.classList.add('hidden');
  }
  return adElement;
};

export { getpopupTemplate };
