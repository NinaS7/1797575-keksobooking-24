import {createMarker} from './map.js';
import './popup.js';
import {getData} from './api.js';
import {setUserFormSubmit, doReset, getPageActive} from './form.js';
import {getFilteredOffers} from './filter.js';

const COUNT_OFFER = 10;

getData((popup) => {
  createMarker(popup.slice(0, COUNT_OFFER ));
  getFilteredOffers(popup.slice());
  getPageActive();
});

doReset();
setUserFormSubmit();
