import { renderComments } from './renderComments.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const elementBody = document.querySelector('body');

const closeBigPhoto = () => {

  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    elementBody.classList.remove('modal-open');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
      elementBody.classList.remove('modal-open');
    }
  });
};

const addBigPhotoHandler = (element, item) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();


    bigPicture.classList.remove('hidden');
    elementBody.classList.add('modal-open');

    bigPicture.querySelector('img').src = item.url;
    bigPicture.querySelector('.likes-count').textContent = item.likes;
    bigPicture.querySelector('.comments-count').textContent = item.comments.length;
    bigPicture.querySelector('.social__caption').textContent = item.description;

    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');

    renderComments(item.comments);
    closeBigPhoto();

  });
};

export { addBigPhotoHandler };
