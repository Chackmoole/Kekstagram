const inputComment = document.querySelector('.text__description');

export const validationComment = () => {
  if (inputComment.value.length <= 140) {
    return true;
  }
};
