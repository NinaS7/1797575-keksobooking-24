import {similarAdvertisements} from './data.js';
import './popup.js';
import {popupTemplate} from './popup.js';
import {getPageDisabled, getPageActive} from './form.js';

popupTemplate(similarAdvertisements[2]);
getPageDisabled();
getPageActive();
