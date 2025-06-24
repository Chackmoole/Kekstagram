import { renderComments } from './renderComments.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');

const closePopup = (element, parentElement) => {

  element.addEventListener('click', () => {
    parentElement.classList.add('hidden');
    commentsList.innerHTML = '';
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      parentElement.classList.add('hidden');
      commentsList.innerHTML = '';
    }
  });
};

const addBigPhotoHandler = (item, element) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();

    const closeButton = bigPicture.querySelector('.big-picture__cancel');

    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('img').src = item.querySelector('img').src;
    bigPicture.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = item.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.social__picture').src = element.comments[0].avatar;

    renderComments(element.comments);
    closePopup(closeButton, bigPicture);

  });
};

export { addBigPhotoHandler };
