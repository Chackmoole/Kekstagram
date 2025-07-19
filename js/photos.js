import { renderUploadPhoto } from './upload/upload-photo.js';
import { filterPhotos } from './upload/filter.js';

const photoPreview = document.querySelector('.img-upload__start');
const filterElement = document.querySelector('.img-filters');

photoPreview.addEventListener('change', renderUploadPhoto);

export const renderPhotos = (dataArray) => {
  filterPhotos(dataArray);
  filterElement.classList.remove('img-filters--inactive');
};
