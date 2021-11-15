import {similarAdvertisements} from './data.js';
import { createMarker, doReset } from './map.js';
import './popup.js';

createMarker(similarAdvertisements);
doReset();
