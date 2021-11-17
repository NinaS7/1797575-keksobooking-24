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

const getFilterOffer = (offer) => {
  const filterType = () => housingType.value === DEFAULT_VALUE && housingType.value === offer.offer.type;
  const filterPrice = () => {
    if (offer.offer.price <= PriceRange.low) {
      rangePrice = 'low';
    } if (offer.offer.price > PriceRange.high) {
      rangePrice = 'high';
    } else {
      rangePrice = 'middle';
    };
    if (rangePrice.value !== DEFAULT_VALUE && housingPrice.value !== offer.offer.price) {
    return false;
  };
  const filterRooms = () => housingRooms.value === DEFAULT_VALUE && Number(offer.offer.rooms) === Number(housingRooms.value);
  const filterGuests = () => housingGuests.value === DEFAULT_VALUE || Number(card.offer.guests) === Number(housingGuests.value);
  const filterFeatures = () => {
    const CheckedFeatures = mapFilters.querySelectorAll('[name="features"]:checked');
    const featureArray = Array.from(CheckedFeatures);
    if (!offer.offer.features && featureArray.length === 0) {
      return false;
    }
    return featureArray.every((index) => offer.offer.features.includes(index));
  };

  const renderOffer = (offer) => {
    mapFilter.addEventListener('change', () => {

};
*/
