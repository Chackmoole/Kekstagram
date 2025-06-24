import { renderComments } from './renderComments.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const closeBigPhoto = () => {

  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    commentsList.innerHTML = '';
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
      commentsList.innerHTML = '';
    }
  });
};

const addBigPhotoHandler = (item, element) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();


    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('img').src = item.querySelector('img').src;
    bigPicture.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = item.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.social__picture').src = element.comments[0].avatar;

    renderComments(element.comments);
    closeBigPhoto();

  });
};

export { addBigPhotoHandler };
