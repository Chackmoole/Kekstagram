import { renderPhotos } from './renderPhotos.js';

const getData = () => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderPhotos(data);
    });
};

const sendData = (formData) =>
  fetch('https://25.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: formData,
    }
  );

export { getData, sendData };
