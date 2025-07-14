import { validationHashTag } from './validationHashTag.js';
import { validationComment } from './validationComment.js';
import { createSlider } from './createSlider.js';
import { resetSlider, sliderElement } from './effectsSlider.js';
import { scaleHandler } from './scaleChange.js';
import { resetScale } from './scaleChange.js';
import { sendData } from './api.js';

const previewPhoto = document.querySelector('.img-upload__overlay');
const elementBody = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const formElement = document.querySelector('.img-upload__form');
const inputTag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');
const inputUpload = document.querySelector('#upload-file');
const errorHashElement = document.querySelector('.img-upload__error--hash');
const submitButton = document.querySelector('.img-upload__submit');


const closeModal = () => {

  if (document.activeElement !== inputTag && document.activeElement !== inputComment) {
    previewPhoto.classList.add('hidden');
    elementBody.classList.remove('modal-open');
    inputUpload.value = '';
    uploadCancel.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', onEscDown);
    resetSlider();
  }
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
  resetScale();
};

const validationOnSubmit = async (evt) => {
  evt.preventDefault();
  const isValidTag = validationHashTag();
  const isValidComment = validationComment();
  if (isValidTag === true && isValidComment === true) {
    const formData = new FormData(evt.target);
    submitButton.disable = true;
    submitButton.textContent = 'загружаю...';
    await sendData(formData);
    closeModal();
    submitButton.textContent = 'Опубликовать';
    submitButton.disable = false;
    formElement.removeEventListener('submit', validationOnSubmit);

    inputTag.value = '';
    inputComment.value = '';
    inputUpload.value = '';
    errorHashElement.classList.add('hidden');
  }
};

const addSubmitHandler = () => {
  formElement.addEventListener('submit', validationOnSubmit);
};

const renderUploadPhoto = () => {
  showModal();
  addSubmitHandler();
  createSlider(sliderElement);
  scaleHandler();
};

export { renderUploadPhoto, closeModal };
