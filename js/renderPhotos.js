import { createPhotosDesc } from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const dataArray = createPhotosDesc();

const createPhoto = (src, description, commentsCount, likesCount) => {
  const item = template.cloneNode(true);

  item.querySelector('img').src = src;
  item.querySelector('img').alt = description;
  item.querySelector('.picture__comments').textContent = commentsCount;
  item.querySelector('.picture__likes').textContent = likesCount;

  return item;
};

for (let i = 0; i < dataArray.length; i++) {
  fragment.appendChild(createPhoto((dataArray[i].url), dataArray[i].description, dataArray[i].comments.length, dataArray[i].likes));
}

const photosList = fragment.querySelectorAll('.picture');

export { fragment, photosList };
