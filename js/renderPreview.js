// const fileUploadElement = document.querySelector('#upload-file');
const previewPhoto = document.querySelector('.img-upload__overlay');
const elementBody = document.querySelector('body');

export const renderPreview = () => {
  previewPhoto.classList.remove('hidden');
  elementBody.classList.remove('modal-open');
  // console.log(fileUploadElement);


};
