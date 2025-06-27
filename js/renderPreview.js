const previewPhoto = document.querySelector('.img-upload__overlay');
const elementBody = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');


const closeModal = () => {
  previewPhoto.classList.add('hidden');
  elementBody.classList.remove('modal-open');
  uploadCancel.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscDown);
};

function onEscDown(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

const addHandlers = () => {
  uploadCancel.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscDown);
};

const showModal = () => {
  previewPhoto.classList.remove('hidden');
  elementBody.classList.add('modal-open');
  addHandlers();
};


export const renderPreview = () => {
  showModal();
};
