import { validationHashTag } from './validationHashTag.js';

const previewPhoto = document.querySelector('.img-upload__overlay');
const elementBody = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('.img-upload__form');


const closeModal = () => {
  previewPhoto.classList.add('hidden');
  elementBody.classList.remove('modal-open');
  uploadCancel.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscDown);
};

function onEscDown(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

const addHandlers = () => {
  uploadCancel.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscDown);
};

const showModal = () => {
  previewPhoto.classList.remove('hidden');
  elementBody.classList.add('modal-open');
  addHandlers();
};

const addSubmitHandler = () => {
  submitButton.addEventListener('submit', (evt) => {
    evt.preventDefault();
    validationHashTag();

  });
};

export const renderPreview = () => {
  showModal();
  addSubmitHandler();
};
