const fieldScale = document.querySelector('.img-upload__scale');
const decreaseButton = fieldScale.querySelector('.scale__control--smaller');
const increaseButton = fieldScale.querySelector('.scale__control--bigger');
const scaleInput = fieldScale.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview').firstElementChild;

scaleInput.value = '100%';

const resetScale = () => {
  scaleInput.value = '100%';
  uploadImageElement.style.transform = 'scale(1)';
};

const scaleHandler = () => {
  let scaleCount = scaleInput.value.slice(0, -1);

  decreaseButton.addEventListener('click', () => {
    if (scaleCount > 25) {
      decreaseButton.disabled = false;
      increaseButton.disabled = false;
      scaleCount -= 25;
      uploadImageElement.style.transform = `scale(0.${scaleCount})`;
      scaleInput.value = `${scaleCount}%`;
    } else {
      decreaseButton.disabled = true;
    }
  });
  increaseButton.addEventListener('click', () => {
    if (scaleCount <= 75) {
      increaseButton.disabled = false;
      decreaseButton.disabled = false;
      scaleCount += 25;
      if (scaleCount <= 75) { uploadImageElement.style.transform = `scale(0.${scaleCount})`; }
      else { uploadImageElement.style.transform = 'scale(1)'; }
      scaleInput.value = `${scaleCount}%`;
    } else {
      increaseButton.disabled = true;
    }
  });
};

export { resetScale, scaleHandler };
