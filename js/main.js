import { addBigPhotoHandler } from './renderBigPhoto.js';
import { renderPhotos } from './renderPhotos.js';
import { createPhotosDesc } from './data.js';
import { renderComments } from './renderComments.js';

const dataArray = createPhotosDesc();

renderPhotos(dataArray);

const photosList = document.querySelectorAll('.picture');

for (let i = 0; i < dataArray.length; i++) {
  addBigPhotoHandler(photosList[i], dataArray[i]);
}

renderComments(dataArray[0].comments);

