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

const createConstantsArray = () => ({
  PHOTO_COUNT: PHOTO_COUNT,
  MIN_ID: MIN_ID,
  MAX_ID: MAX_ID,
  MIN_LIKES: MIN_LIKES,
  MAX_LIKES: MAX_LIKES,
  NAMES: NAMES,
  COMMENTS: COMMENTS
});

export { createConstantsArray };
