import { renderComments } from './renderComments.js';

const elementBody = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const addCommentsButton = bigPicture.querySelector('.comments-loader');


const closeBigPhoto = () => {

  closeButton.addEventListener('  ', () => {
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

const calcComments = (array, count) => {
  if (array.length <= 5) { return array; }
  else {
    const sliceArray = array.slice(0, count);
    return sliceArray;
  }
};


const addBigPhotoHandler = (element, item) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();

    const commentsCount = item.comments.length;
    let commentsCounter = 5;

    bigPicture.classList.remove('hidden');
    elementBody.classList.add('modal-open');

    bigPicture.querySelector('img').src = item.url;
    bigPicture.querySelector('.likes-count').textContent = item.likes;
    bigPicture.querySelector('.social__caption').textContent = item.description;

    commentCount.textContent = `${commentsCount} из ${item.comments.length} комментариев`;

    renderComments(calcComments(item.comments, commentsCounter));
    addCommentsButton.addEventListener('click', () => {
      commentsCounter += 5;
      renderComments(calcComments(item.comments, commentsCounter));
    });
    closeBigPhoto();
  });
};

export { addBigPhotoHandler };
