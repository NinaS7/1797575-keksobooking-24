const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const WIDTH_SIZE = 70;
const HEIGHT_SIZE = 70;

const avatarInput = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const houseInput = document.querySelector('.ad-form__upload input[type=file]');
const PhotoContainer = document.querySelector('.ad-form__photo');
const img = document.createElement('img');

avatarInput.addEventListener('change', () => {
  const avatarFile = avatarInput.files[0];
  const avatarName = avatarFile.name.toLowerCase();
  const fileMatches = FILE_TYPES.some((extension) => avatarName.endsWith(extension));

  if(fileMatches) {
    avatarPreview.src = URL.createObjectURL(avatarFile);
  }
});

houseInput.addEventListener('change', () => {
  const photoFile = houseInput.files[0];
  const photoName = photoFile.name.toLowerCase();
  const fileMatches = FILE_TYPES.some((extension) => photoName.endsWith(extension));

  if(fileMatches) {
    img.src = URL.createObjectURL(photoFile);
    img.width = WIDTH_SIZE;
    img.height = HEIGHT_SIZE;
    img.alt = 'Фотография жилья';
  }
  PhotoContainer.appendChild(img);
  return  img;
});


const deletePictures = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  img.remove();
};

export {deletePictures};
