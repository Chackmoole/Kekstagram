const getRandomNumber = (min, max) => {
  if(typeof min !=='number' || typeof max !== 'number' || min <= 0 || max <= 0) {
    return null;
  }

  //если значения равны
  if (min===max){
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
