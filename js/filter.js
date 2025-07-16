import { renderPhotosSet } from './photos.js';
import { addBigPhotoHandler } from './renderBigPhoto.js';
import { createRandomArray } from './util.js';
import { debounce } from './util.js';

const RANDOM_NUMBER_PHOTO = 10;

const formFilterElement = document.querySelector('.img-filters__form');
const filterElements = formFilterElement.querySelectorAll('.img-filters__button');
const defaultFilterElement = formFilterElement.querySelector('#filter-default');
const randomFilterElement = formFilterElement.querySelector('#filter-random');
const discussedFilterElement = formFilterElement.querySelector('#filter-discussed');
const photoList = document.querySelector('.pictures');

const clearPhotoList = () => {
  const deleteELements = photoList.querySelectorAll('.picture');
  deleteELements.forEach((element) => {
    element.remove();
  });
};

const addHandlers = (dataArray) => {
  const photosList = document.querySelectorAll('.picture');

  for (let i = 0; i < dataArray.length; i++) {
    addBigPhotoHandler(photosList[i], dataArray[i]);
  }
};

const showActiveFilterButton = (evt) => {
  for (const element of filterElements) {
    element.classList.remove('img-filters__button--active');
  }
  evt.target.classList.add('img-filters__button--active');
};


export const filterPhotos = (dataArray2) => {
  let result = dataArray2.slice();
  renderPhotosSet(result);
  addHandlers(result);

  defaultFilterElement.addEventListener('click', debounce((evt) => {
    showActiveFilterButton(evt);
    result = dataArray2.slice();
    clearPhotoList();
    renderPhotosSet(result);
    addHandlers(result);
  }));

  randomFilterElement.addEventListener('click', debounce((evt) => {
    showActiveFilterButton(evt);
    result = dataArray2.slice();
    clearPhotoList();
    const randomPhotos = createRandomArray(result, RANDOM_NUMBER_PHOTO);
    renderPhotosSet(randomPhotos);
    addHandlers(randomPhotos);
  }));

  discussedFilterElement.addEventListener('click', debounce((evt) => {
    showActiveFilterButton(evt);
    result = dataArray2.slice().sort((a, b) => b.comments.length - a.comments.length);
    clearPhotoList();
    renderPhotosSet(result);
    addHandlers(result);
  }));

  return result;
};

