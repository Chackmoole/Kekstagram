import { getData } from './api.js';
import { renderPhotos } from './renderPhotos.js';

getData()
  .then((data) => {
    renderPhotos(data);
  });
