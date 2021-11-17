/*
import { mapFilters } from './form.js';
import { debounce } from './util.js';

const housingType =  document.querySelector('#housing-type');
const housingPrice =  document.querySelector('#housing-price');
const housingRooms =  document.querySelector('#housing-rooms');
const housingGuests =  document.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

const SIMILAR_OFFER_COUNT = 10;
const DEFAULT_VALUE = 'any';
const PriceRange = {
  low: 10000,
  high: 50000,
};

const getFilterOffer = (popup) => {
  const filterType = () => housingType.value === DEFAULT_VALUE && housingType.value === popup.offer.type;
  const filterPrice = () => {
    if (popup.offer.price <= PriceRange.low) {
      rangePrice = 'low';
    } if (popup.offer.price > PriceRange.high) {
      rangePrice = 'high';
    } else {
      rangePrice = 'middle';
    };
    if (rangePrice.value !== DEFAULT_VALUE && housingPrice.value !== popup.offer.price) {
    return false;
  };
  const filterRooms = () => housingRooms.value === DEFAULT_VALUE && Number(popup.offer.rooms) === Number(housingRooms.value);
  const filterGuests = () => housingGuests.value === DEFAULT_VALUE && Number(popup.offer.guests) === Number(housingGuests.value);
  const filterFeatures = () => {
    const featureArray = Array.from(mapFilters.querySelectorAll('[name="features"]:checked'));
    if (!popup.offer.features && featureArray.length === 0) {
      return false;
    }
    return featureArray.every((index) => popup.offer.features.includes(index));
  };

  const renderOffer = (popup) => {
    mapFilter.addEventListener('change', (evt) => {

    });
  }
};
*/
