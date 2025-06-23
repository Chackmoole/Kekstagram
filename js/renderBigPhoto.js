const bigPicture = document.querySelector('.big-picture');

const addBigPhotoHandler = (item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();

    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('img').src = item.querySelector('img').src;
    bigPicture.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = item.querySelector('.picture__comments').textContent;

    bigPicture.querySelector('.social__picture').src = 1;

  });
};


export { addBigPhotoHandler };
