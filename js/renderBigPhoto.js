import { photosList } from './renderPhotos.js';

const bigPicture = document.querySelector('.big-picture');

const addBigPhotoHadler = (item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');

  });
};

const tempArray = [...photosList];

for (const item of tempArray) {
  addBigPhotoHadler(item);
}

export { photosList };
