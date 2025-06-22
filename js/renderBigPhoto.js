import { photosList } from './renderPhotos.js';

const bigPicture = document.querySelector('.big-picture');

const addBigPhotoHadler = (item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();

    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('img').src = item.querySelector('img').src;
    bigPicture.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = item.querySelector('.picture__comments').textContent;

  });
};

const tempArray = [...photosList];

for (const item of tempArray) {
  addBigPhotoHadler(item);
}

export { photosList };
