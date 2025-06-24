const commentsList = document.querySelector('.social__comments');
const template = commentsList.querySelector('.social__comment');

const createComment = (element) => {
  const item = template.cloneNode(true);
  const img = item.querySelector('.social__picture');
  const text = item.querySelector('.social__text');

  img.src = element.avatar;
  img.alt = element.name;
  text.textContent = element.message;

  return item;
};


const renderComments = (tempArray) => {
  const fragment = document.createDocumentFragment();
  commentsList.innerHTML = '';

  for (let i = 0; i < tempArray.length; i++) {
    fragment.appendChild(createComment(tempArray[i]));
  }

  commentsList.appendChild(fragment);

  return commentsList;

};

export { renderComments };
