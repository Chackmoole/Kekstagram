import { dataArray } from './data.js';
import { addBigPhotoHandler } from './renderBigPhoto.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const photoList = document.querySelector('.pictures');


const createPhoto = (src, description, commentsCount, likesCount) => {
  const item = template.cloneNode(true);

  item.querySelector('img').src = src;
  item.querySelector('img').alt = description;
  item.querySelector('.picture__comments').textContent = commentsCount;
  item.querySelector('.picture__likes').textContent = likesCount;

  return item;
};


const renderPhotosSet = () => {
  for (let i = 0; i < dataArray.length; i++) {
    fragment.appendChild(createPhoto((dataArray[i].url), dataArray[i].description, dataArray[i].comments.length, dataArray[i].likes));
  }
  return photoList.appendChild(fragment);
};


const addHandlers = () => {
  const photosList = document.querySelectorAll('.picture');

  for (let i = 0; i < dataArray.length; i++) {
    addBigPhotoHandler(photosList[i], dataArray[i]);
  }
};


export const renderPhotos = () => {
  renderPhotosSet();
  addHandlers();
};
