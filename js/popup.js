import './data.js';

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

const popupTemplate = (popup) => {
  const adElement = similarAdTemplate.cloneNode(true);

  const checkContent = (keyName, className) => {
    if(!keyName){
      adElement.querySelector(className).classList.add('hidden');
    }
  };
  checkContent(adElement.querySelector('.popup__avatar').src = popup.author.avatar);
  checkContent(adElement.querySelector('.popup__title').textContent = popup.offer.title);
  checkContent(adElement.querySelector('.popup__text--address').textContent = popup.offer.address);
  checkContent(adElement.querySelector('.popup__text--price').textContent = `${popup.offer.price} ₽/ночь`);
  checkContent(adElement.querySelector('.popup__type').textContent = typePlaces[popup.offer.type]);
  checkContent(adElement.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`);
  checkContent(adElement.querySelector('.popup__text--time').textContent = `Заезд после ${popup.offer.checkin}, выезд до ${popup.offer.checkout}`);
  checkContent(adElement.querySelector('.popup__description').textContent = popup.offer.description);

  const featureContainer = adElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('popup__feature');
  featureList.forEach((featureListItem) => {
    const isNessesary = popup.offer.features.some(
      (feature) => featureListItem.classList.contains(`.popup__feature--${feature}`),
    );
    if (!isNessesary) {
      featureListItem.remove();
    }
  });

  const popupPhotos = adElement.querySelector('.popup__photos');
  popupPhotos.innerHTML = '';
  popup.offer.photos.forEach((photo) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = photo;
    img.width = PHOTO_WIDTH;
    img.height = PHOTO_HEIGHT;
    popupPhotos.appendChild(img);
  });
  return adElement;
};

export {popupTemplate};
