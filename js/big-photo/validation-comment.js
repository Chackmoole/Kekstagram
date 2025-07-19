const inputComment = document.querySelector('.text__description');
const errorElement = document.querySelector('.img-upload__error--comment');

export const validationComment = () => {
  if (inputComment.value.length <= 140) {
    errorElement.classList.add('hidden');
    return true;
  }
  errorElement.classList.remove('hidden');
};
