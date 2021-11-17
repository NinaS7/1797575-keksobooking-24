import { popupTemplate } from './popup.js';
import { adForm} from './form.js';

const ZOOM = 12;
const COMMA_OUT = 5;

const START_LOCATION = {
  lat: 35.68409,
  lng: 139.75290,
};

const MAIN_ICON = {
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
};

const MARKER_ICON = {
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
};

const inputAddress = adForm.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    inputAddress.value = `${START_LOCATION.lat},${START_LOCATION.lng}`;
  })
  .setView( START_LOCATION, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon(MAIN_ICON);

const mainPinMarker = L.marker(
  START_LOCATION,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  inputAddress.value = `${coordinates.lat.toFixed(COMMA_OUT)}, ${coordinates.lng.toFixed(COMMA_OUT)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const clearMarkerGroup = () => markerGroup.clearLayers();

const createMarker = (points) => {
  points.forEach((point) => {
    const { lat, lng } = point.location;
    const icon = L.icon(MARKER_ICON);

    const marker = L.marker({
      lat,
      lng,
    },
    {
      icon,
    });
    marker
      .addTo(markerGroup)
      .bindPopup(popupTemplate(point));
  });
};

const clearMap = () => {
  mainPinMarker.setLatLng(START_LOCATION);
  inputAddress.value = `${START_LOCATION.lat},${START_LOCATION.lng}`;
  map.setView(START_LOCATION, ZOOM);
  map.closePopup();
};

export { clearMap, createMarker, clearMarkerGroup};
