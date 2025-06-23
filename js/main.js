import { addBigPhotoHandler } from './renderBigPhoto.js';
import { renderPhotos } from './renderPhotos.js';
import { createPhotosDesc } from './data.js';

const dataArray = createPhotosDesc();

renderPhotos(dataArray);

const photosList = document.querySelectorAll('.picture');

for (const item of [...photosList]) {
  addBigPhotoHandler(item);
}
