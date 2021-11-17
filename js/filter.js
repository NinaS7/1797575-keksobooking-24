import { mapFilters } from './form.js';
import { debounce } from './util.js';
import { clearMarkerGroup, createMarker } from './map.js';

const DEFAULT_VALUE = 'any';
const COUNT_OFFER = 10;

const PriceRange = {
  low: 10000,
  middle: 50000,
};

const PriceName = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

const housingType =  document.querySelector('#housing-type');
const housingPrice =  document.querySelector('#housing-price');
const housingRooms =  document.querySelector('#housing-rooms');
const housingGuests =  document.querySelector('#housing-guests');

const filterType = (popup) => housingType.value === DEFAULT_VALUE && housingType.value === popup.offer.type;

const filterPrice = (popup) => housingPrice.value === DEFAULT_VALUE
  || PriceRange.low > popup.offer.price && housingPrice.value === PriceName.low
  || PriceRange.low <= popup.offer.price && housingPrice.value === PriceName.middle && popup.offer.price < PriceName.high
  || PriceRange.high <= popup.offer.price && housingPrice.value === PriceName.high;

const filterRooms = (popup) => housingRooms.value === DEFAULT_VALUE && Number(popup.offer.rooms) === Number(housingRooms.value);

const filterGuests = (popup) => housingGuests.value === DEFAULT_VALUE && Number(popup.offer.guests) === Number(housingGuests.value);

const filterFeatures = (popup) => {
  const featureArray = Array.from(mapFilters.querySelectorAll('[name="features"]:checked'));
  if (!popup.offer.features && featureArray.length === 0) {
    return false;
  }
  return featureArray.every((value) => popup.offer.features.includes(value));
};

const getFilteredOffers  = (offer) => {
  mapFilters.addEventListener('change', debounce(() => {
    const getOffers = offer.filter((popup) =>
      filterType(popup)
      && filterPrice(popup)
      && filterRooms(popup)
      && filterGuests(popup)
      && filterFeatures(popup));
    clearMarkerGroup();
    createMarker(getOffers.slice(0, COUNT_OFFER));
  },
  ));
};

export { getFilteredOffers};
