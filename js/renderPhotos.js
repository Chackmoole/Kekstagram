import { renderUploadPhoto } from './renderUploadPhoto.js';
import { filterPhotos } from './filter.js';

const photoPreview = document.querySelector('.img-upload__start');
const filterElement = document.querySelector('.img-filters');

photoPreview.addEventListener('change', renderUploadPhoto);

export const renderPhotos = (dataArray) => {
  filterPhotos(dataArray);
  filterElement.classList.remove('img-filters--inactive');
};
