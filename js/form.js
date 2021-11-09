const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const getPageDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');

  const adFormChildren = Array.from(adForm.childrens);
  adFormChildren.forEach((children) => {
    children.setAttribute('disabled', 'disabled');
  });
  const mapFiltersChildren = Array.from(mapFilters.childrens);
  mapFiltersChildren.forEach((children) => {
    children.setAttribute('disabled', 'disabled');
  });
};

const getPageActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');

  const adFormChildren = Array.from(adForm.childrens);
  adFormChildren.forEach((children) => {
    children.removeAttribute('disabled', 'disabled');
  });
  const mapFiltersChildren = Array.from(mapFilters.childrens);
  mapFiltersChildren.forEach((children) => {
    children.removeAttribute('disabled', 'disabled');
  });
};

export {getPageDisabled, getPageActive};
