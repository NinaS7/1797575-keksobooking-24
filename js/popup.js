import {similarAdvertisements} from './data.js';

const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;

const typePlaces = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarListElement = document.querySelector('.map__canvas');
const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const createAd = similarAdvertisements;

const similarListFragment = document.createDocumentFragment();

const popupTemplate = (popup) => {
  const adElement = similarAdTemplate.cloneNode(true);

  //Предусмотрите ситуацию, когда отсутствует описание. Тогда соответствующий блок в карточке скрывается.
  adElement.querySelector('.popup__avatar').src = popup.author.avatar;
  adElement.querySelector('.popup__title').textContent = popup.offer.title;
  adElement.querySelector('.popup__text--address').textContent = popup.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${popup.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = typePlaces[popup.offer.type];
  adElement.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${popup.offer.checkin}, выезд до ${popup.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = popup.offer.description;
  adElement.querySelector('.popup__photos').src = popup.offer.photos;

  const featureContainer = similarAdTemplate.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('popup__feature');
  featureList.forEach((featureListItem) => {
    const isNessesary = popup.offer.features.some(
      (feature) => featureListItem.classList.contains(`.popup__feature--${feature}`),
    );
    if (!isNessesary) {
      featureListItem.remove();
    }
  });

  const popupPhotos = similarAdTemplate.querySelector('.popup__photos');
  popupPhotos.innerHTML = '';
  popup.offer.photos.forEach((photo) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = photo;
    img.width = PHOTO_WIDTH;
    img.height = PHOTO_HEIGHT;
    popupPhotos.appendChild(img);
  });

  similarListFragment.appendChild(adElement);
};

similarListElement.appendChild(similarListFragment);

createAd; // Временно!!!

export {similarListElement, popupTemplate};
