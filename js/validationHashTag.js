import { isUniq } from './util.js';

const inputTag = document.querySelector('.text__hashtags');

const checkTag = (item) => {
  const tagsArray = item.split(' ').map((x) => x.toLowerCase());

  return isUniq(tagsArray) && (tagsArray.length <= 5);
};


export const validationHashTag = () => {
  const regExp = /^(?:#([A-Za-z0-9]{1,19}))(\s#([A-Za-z0-9]{1,19})){0,4}$/;
  if ((regExp.test(inputTag.value) || inputTag.value === '') && checkTag(inputTag.value)) {
    console.log('правильный Хэш-Тэг');

    return true;
  }
  else {
    console.log('не правильный Хэш-Тэг');
  }
};


