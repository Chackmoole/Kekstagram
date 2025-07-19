import { getData } from './api.js';
import { renderPhotos } from './photos.js';

getData()
  .then((data) => {
    renderPhotos(data);
  });
