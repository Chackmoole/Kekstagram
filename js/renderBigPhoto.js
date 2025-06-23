const bigPicture = document.querySelector('.big-picture');

const closePopup = (element, parentElement) => {

  element.addEventListener('click', () => {
    parentElement.classList.add('hidden');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      parentElement.classList.add('hidden');
    }
  });
};

const addBigPhotoHandler = (item, element) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const closeButton = bigPicture.querySelector('.big-picture__cancel');

    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('img').src = item.querySelector('img').src;
    bigPicture.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = item.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.social__picture').src = element.comments[0].avatar;

    closePopup(closeButton, bigPicture);

  });
};


export { addBigPhotoHandler };
