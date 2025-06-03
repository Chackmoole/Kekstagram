const getRandomNumber = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || min <= 0 || max <= 0) {
    return null;
  }

  //если значения равны
  if (min === max) {
    return min;
  }
  //получаем минимальное и максимальное значение
  const minNumber = Math.min(min, max);
  const maxNumber = Math.max(min, max);
  // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

getRandomNumber(0, 1);


const checkStringLength = (str, maxLength) => typeof maxLength === 'number' && typeof str === 'string' && str.trim().length <= maxLength;

checkStringLength('   qwertqwert  ', 10);

const PHOTO_COUNT = 25;
const MIN_ID = 1;
const MAX_ID = PHOTO_COUNT;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const comments = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const createDataArray = (minId, maxId) => {
  const tempArray = [];
  for (let i = minId; i <= maxId; i++) {
    tempArray.push(i);
  }
  return tempArray;
};

createDataArray(MIN_ID, MAX_ID);

const createPhotoDescription = () => ({
  id: 1,
  url: `photos/${MIN_ID}.jpg`,
  description: comments[0],
  likes: MAX_LIKES - MIN_LIKES,
  comments: [{ MIN_ID: comments[0] }],
  avatar: `img/avatar-${MIN_ID}.svg`
});

const createPhotosDesc = () => {
  const tempArray = Array.from({ length: PHOTO_COUNT }, createPhotoDescription);
  return tempArray;
};


createPhotosDesc();

