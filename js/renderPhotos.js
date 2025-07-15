import { addBigPhotoHandler } from './renderBigPhoto.js';
import { renderUploadPhoto } from './renderUploadPhoto.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const photoList = document.querySelector('.pictures');
const photoPreview = document.querySelector('.img-upload__start');


const createPhoto = (src, description, commentsCount, likesCount) => {
  const item = template.cloneNode(true);

  item.querySelector('img').src = src;
  item.querySelector('img').alt = description;
  item.querySelector('.picture__comments').textContent = commentsCount;
  item.querySelector('.picture__likes').textContent = likesCount;

  return item;
};


const renderPhotosSet = (dataArray) => {
  for (let i = 0; i < dataArray.length; i++) {
    fragment.appendChild(createPhoto((dataArray[i].url), dataArray[i].description, dataArray[i].comments.length, dataArray[i].likes));
  }
  return photoList.appendChild(fragment);
};


const addHandlers = (dataArray) => {
  const photosList = document.querySelectorAll('.picture');

  for (let i = 0; i < dataArray.length; i++) {
    addBigPhotoHandler(photosList[i], dataArray[i]);
  }
};

photoPreview.addEventListener('change', renderUploadPhoto);


export const renderPhotos = (dataArray) => {
  renderPhotosSet(dataArray);
  addHandlers(dataArray);
};
