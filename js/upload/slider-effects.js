const effectsField = document.querySelector('.img-upload__effects');
const valueElement = document.querySelector('.effect-level__value');
const uploadImageElement = document.querySelector('.img-upload__preview').firstElementChild;
const sliderElement = document.querySelector('.effect-level__slider');
const defaultInput = document.querySelector('#effect-none');
let filterPhotoEffect = 'none';
let filterUnit = '';

valueElement.value = 1;

const sliderHandler = (element) => {
  element.noUiSlider.on('update', () => {
    valueElement.value = element.noUiSlider.get();
    if (filterPhotoEffect !== 'none') { uploadImageElement.style.filter = `${filterPhotoEffect}(${valueElement.value}${filterUnit})`; }
    else { uploadImageElement.style.filter = ''; }
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

const resetSlider = () => {
  defaultInput.checked = true;
  uploadImageElement.classList.remove(...uploadImageElement.classList);
  uploadImageElement.classList.add('effects__preview--none');
  uploadImageElement.style.filter = '';
  filterPhotoEffect = 'none';
  sliderElement.noUiSlider.destroy();
};

const effectsHandler = () => {
  effectsField.addEventListener('change', (evt) => {
    const item = evt.target.id;

    switch (item) {
      case 'effect-none':
        uploadImageElement.classList.remove(...uploadImageElement.classList);
        uploadImageElement.classList.add('effects__preview--none');
        sliderElement.classList.add('visually-hidden');
        filterPhotoEffect = 'none';
        filterUnit = '';
        setAttributeEffect(0, 1, 0.1);
        sliderElement.setAttribute('disabled', true);
        break;
      case 'effect-chrome':
        uploadImageElement.classList.remove(...uploadImageElement.classList);
        sliderElement.classList.remove('visually-hidden');
        uploadImageElement.classList.add('effects__preview--chrome');
        filterPhotoEffect = 'grayscale';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 1, 0.1);
        break;
      case 'effect-sepia':
        uploadImageElement.classList.remove(...uploadImageElement.classList);
        sliderElement.classList.remove('visually-hidden');
        uploadImageElement.classList.add('effects__preview--sepia');
        filterPhotoEffect = 'sepia';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 1, 0.1);
        break;
      case 'effect-marvin':
        uploadImageElement.classList.remove(...uploadImageElement.classList);
        sliderElement.classList.remove('visually-hidden');
        uploadImageElement.classList.add('effects__preview--marvin');
        filterPhotoEffect = 'invert';
        filterUnit = '%';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 100, 1);
        break;
      case 'effect-phobos':
        uploadImageElement.classList.remove(...uploadImageElement.classList);
        sliderElement.classList.remove('visually-hidden');
        uploadImageElement.classList.add('effects__preview--phobos');
        filterPhotoEffect = 'blur';
        filterUnit = 'px';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 3, 0.1);
        break;
      case 'effect-heat':
        uploadImageElement.classList.remove(...uploadImageElement.classList);
        sliderElement.classList.remove('visually-hidden');
        uploadImageElement.classList.add('effects__preview--heat');
        filterPhotoEffect = 'brightness';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttributeEffect(0, 3, 0.1);
        break;
    }
  });
};

export { effectsHandler, sliderHandler, resetSlider, sliderElement };
