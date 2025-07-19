import { effectsHandler, sliderHandler } from './slider-effects.js';


const createSlider = (element) => {

  noUiSlider.create(element, {
    range: {
      min: 0,
      max: 1
    }, start: 1,
    step: 0.1,
    connect: 'lower'
  });
  element.noUiSlider.set(1);
  element.setAttribute('disabled', true);
  sliderHandler(element);
  effectsHandler();
};


export { createSlider };
