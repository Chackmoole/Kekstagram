const getRandomNumber = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0) {
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

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const COMMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

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

const idsArray = createRandomArray(MIN_ID, MAX_ID);

const urlsArray = createRandomArray(MIN_ID, MAX_ID);

const messageIdsArray = createRandomArray(0, 200);

const likesArray = createRandomArray(MIN_LIKES, MAX_LIKES);

const createComment = () => {
  const randomNum = getRandomNumber(0, 2);
  const tempArray = [];
  for (let i = 0; i <= randomNum; i++) {
    tempArray.push(COMMENTS[getRandomNumber(0, COMMENTS.length - 1)]);
  }
  const comment = {
    id: messageIdsArray[0],
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: tempArray.join(', '),
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
  };
  messageIdsArray.splice(0, 1);
  return comment;
};

const createPhotoCommenta = () => {
  const tempArray = Array.from({ length: PHOTO_COUNT }, createComment);
  return tempArray;

};

const commentsArray = createPhotoCommenta();

const createPhotoDescription = () => {

  const result = {
    id: idsArray[0],
    url: `photos/${urlsArray[0]}.jpg`,
    description: COMMENTS[getRandomNumber(0, COMMENTS.length - 1)],
    likes: likesArray[getRandomNumber(0, likesArray.length - 1)],
    message: commentsArray[0],
  };
  idsArray.splice(0, 1);
  urlsArray.splice(0, 1);
  commentsArray.splice(0, 1);

  return result;
};

const createPhotosDesc = () => {
  const tempArray = Array.from({ length: PHOTO_COUNT }, createPhotoDescription);
  return tempArray;
};


createPhotosDesc();


