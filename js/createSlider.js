const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsField = document.querySelector('.img-upload__effects');
const uploadImage = document.querySelector('.img-upload__preview').firstElementChild;

valueElement.value = 1;

let filterPhotoEffect = 'none';
let filterUnit = '';

const setAttribute = (min, max, step) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    step: step,
  });
  sliderElement.noUiSlider.set(max);
};

const createSlider = () => {

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1
    }, start: 1,
    step: 0.1,
    connect: 'lower'
  });
  sliderElement.setAttribute('disabled', true);

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    uploadImage.style.filter = `${filterPhotoEffect}(${valueElement.value}${filterUnit})`;
  });

  effectsField.addEventListener('change', (evt) => {
    const item = evt.target.id;

    switch (item) {
      case 'effect-none':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--none');
        filterPhotoEffect = 'none';
        filterUnit = '';
        sliderElement.setAttribute('disabled', true);

        break;
      case 'effect-chrome':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--chrome');
        filterPhotoEffect = 'grayscale';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttribute(0, 1, 0.1);
        break;
      case 'effect-sepia':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--sepia');
        filterPhotoEffect = 'sepia';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttribute(0, 1, 0.1);
        break;
      case 'effect-marvin':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--marvin');
        filterPhotoEffect = 'invert';
        filterUnit = '%';
        sliderElement.removeAttribute('disabled');
        setAttribute(0, 100, 1);
        break;
      case 'effect-phobos':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--phobos');
        filterPhotoEffect = 'blur';
        filterUnit = 'px';
        sliderElement.removeAttribute('disabled');
        setAttribute(0, 3, 0.1);
        break;
      case 'effect-heat':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--heat');
        filterPhotoEffect = 'brightness';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        setAttribute(0, 3, 0.1);
        break;
    }
  });


};


export { createSlider };
