import { renderPhotos } from './renderPhotos.js';

export const api = () => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderPhotos(data);
    });
};
