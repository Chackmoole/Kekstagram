import { showAlert } from './util.js';

const getData = () =>
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json());

const sendData = (formData) =>
  fetch('https://25.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showAlert('Не удалось отправить данные. Попробуйте повторить');
    }
    )
    .catch(() => showAlert('Не удалось отправить данные. Попробуйте повторить'));

export { getData, sendData };
