const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsField = document.querySelector('.img-upload__effects');
const uploadImage = document.querySelector('.img-upload__preview').firstElementChild;

valueElement.value = 1;

let filterPhoto = 'none';
let filterUnit = '';

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
    uploadImage.style.filter = `${filterPhoto}(${valueElement.value}${filterUnit})`;
  });

  effectsField.addEventListener('change', (evt) => {
    const item = evt.target.id;

    switch (item) {
      case 'effect-none':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--none');
        filterPhoto = 'none';
        filterUnit = '';
        sliderElement.setAttribute('disabled', true);
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(1);
        break;
      case 'effect-chrome':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--chrome');
        filterPhoto = 'grayscale';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(1);
        break;
      case 'effect-sepia':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--sepia');
        filterPhoto = 'sepia';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(1);
        break;
      case 'effect-marvin':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--marvin');
        filterPhoto = 'invert';
        filterUnit = '%';
        sliderElement.removeAttribute('disabled');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          step: 1,
        });
        sliderElement.noUiSlider.set(100);
        break;
      case 'effect-phobos':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--phobos');
        filterPhoto = 'blur';
        filterUnit = 'px';
        sliderElement.removeAttribute('disabled');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(3);
        break;
      case 'effect-heat':
        uploadImage.classList.remove(...uploadImage.classList);
        uploadImage.classList.add('effects__preview--heat');
        filterPhoto = 'brightness';
        filterUnit = '';
        sliderElement.removeAttribute('disabled');
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          step: 0.1,
        });
        sliderElement.noUiSlider.set(3);
        break;
    }
  });


};


export { createSlider };
