const effectsField = document.querySelector('.img-upload__effects');
const valueElement = document.querySelector('.effect-level__value');
const uploadImage = document.querySelector('.img-upload__preview').firstElementChild;
const sliderElement = document.querySelector('.effect-level__slider');
let filterPhotoEffect = 'none';
let filterUnit = '';

valueElement.value = 1;

const sliderHandler = (element) => {
  element.noUiSlider.on('update', () => {
    valueElement.value = element.noUiSlider.get();
    uploadImage.style.filter = `${filterPhotoEffect}(${valueElement.value}${filterUnit})`;
  });
};

const setAttributeEffect = (min, max, step) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    step: step,
  });
  sliderElement.noUiSlider.set(max);
};

const effectsHandler = () => {
  effectsField.addEventListener('change', (evt) => {
    const item = evt.target.id;

    switch (item) {
      case 'effect-none':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--none');
        filterPhotoEffect = 'none';
        filterUnit = '';
        setAttributeEffect(0, 1, 0.1);
        sliderElement.setAttribute('disabled', true);

        break;
      case 'effect-chrome':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--chrome');
        filterPhotoEffect = 'grayscale';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 1, 0.1);
        break;
      case 'effect-sepia':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--sepia');
        filterPhotoEffect = 'sepia';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 1, 0.1);
        break;
      case 'effect-marvin':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--marvin');
        filterPhotoEffect = 'invert';
        filterUnit = '%';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 100, 1);
        break;
      case 'effect-phobos':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--phobos');
        filterPhotoEffect = 'blur';
        filterUnit = 'px';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 3, 0.1);
        break;
      case 'effect-heat':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--heat');
        filterPhotoEffect = 'brightness';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 3, 0.1);
        break;
    }
  });
};

export { effectsHandler, sliderHandler };
