import { getRandomNumber } from './util.js';
import { createConstantsArray } from './constants.js';

const data = createConstantsArray();

const createDataArray = (min, max) => {
  const tempArray = [];
  const minNumber = Math.min(min, max);
  const maxNumber = Math.max(min, max);
  for (let i = minNumber; i <= maxNumber; i++) {
    tempArray.push(i);
  }
  return tempArray;
};

const createRandomArray = (min, max) => {
  const randomArray = [];
  const tempArray = createDataArray(min, max);

  while (tempArray.length > 0) {
    const randomNum = getRandomNumber(0, tempArray.length - 1);
    randomArray.push(tempArray[randomNum]);
    tempArray.splice(randomNum, 1);
  }
  return randomArray;
};

const idsArray = createRandomArray(data.MIN_ID, data.MAX_ID);

const urlsArray = createRandomArray(data.MIN_ID, data.MAX_ID);

const messageIdsArray = createRandomArray(0, 200);

const likesArray = createRandomArray(data.MIN_LIKES, data.MAX_LIKES);

const createComment = () => {
  const randomNum = getRandomNumber(0, 2);
  const tempArray = [];
  for (let i = 0; i <= randomNum; i++) {
    tempArray.push(data.COMMENTS[getRandomNumber(0, data.COMMENTS.length - 1)]);
  }
  const comment = {
    id: messageIdsArray[0],
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: tempArray.join(', '),
    name: data.NAMES[getRandomNumber(0, data.NAMES.length - 1)],
  };
  messageIdsArray.splice(0, 1);
  return comment;
};

const createPhotoCommenta = () => {
  const tempArray = Array.from({ length: data.PHOTO_COUNT }, createComment);
  return tempArray;

};

const commentsArray = createPhotoCommenta();

const createPhotoDescription = () => {

  const result = {
    id: idsArray[0],
    url: `photos/${urlsArray[0]}.jpg`,
    description: data.COMMENTS[getRandomNumber(0, data.COMMENTS.length - 1)],
    likes: likesArray[getRandomNumber(0, likesArray.length - 1)],
    message: commentsArray[0],
  };
  idsArray.splice(0, 1);
  urlsArray.splice(0, 1);
  commentsArray.splice(0, 1);

  return result;
};

const createPhotosDesc = () => {
  const tempArray = Array.from({ length: data.PHOTO_COUNT }, createPhotoDescription);
  return tempArray;
};

export { createPhotosDesc };
