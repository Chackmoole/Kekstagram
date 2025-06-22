import { fragment } from './renderPhotos.js';
import { photosList } from './renderBigPhoto.js';

const photoList = document.querySelector('.pictures');

photoList.appendChild(fragment);
console.log(photosList);
