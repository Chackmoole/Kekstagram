const fieldScale = document.querySelector('.img-upload__scale');
const decreaseButton = fieldScale.querySelector('.scale__control--smaller');
const increaseButton = fieldScale.querySelector('.scale__control--bigger');
const scaleInput = fieldScale.querySelector('.scale__control--value');

scaleInput.value = '100%';


export const scaleHandler = () => {
  let scaleCount = scaleInput.value.slice(0, -1);

  decreaseButton.addEventListener('click', () => {
    if (scaleCount > 0) {
      decreaseButton.disabled = false;
      increaseButton.disabled = false;
      scaleCount -= 25;

      scaleInput.value = `${scaleCount}%`;
    } else {
      decreaseButton.disabled = true;
    }
  });
  increaseButton.addEventListener('click', () => {
    if (scaleCount < 100) {
      increaseButton.disabled = false;
      decreaseButton.disabled = false;
      scaleCount += 25;

      scaleInput.value = `${scaleCount}%`;
    } else {
      increaseButton.disabled = true;
    }
  });


};
