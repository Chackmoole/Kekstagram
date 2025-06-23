const fragment = document.createDocumentFragment();
const commentsList = document.querySelector('.social__comments');
const template = commentsList.querySelector('.social__comment');
const item = template.cloneNode(true);
commentsList.innerHTML = '';

const createComments = (element) => {
  const item2 = item.cloneNode(true);
  const img = item2.querySelector('.social__picture');
  const text = item2.querySelector('.social__text');


  img.src = element.avatar;
  img.alt = element.name;
  text.textContent = element.message;

  return fragment.appendChild(item2);
};


const renderComments = (tempArray) => {
  for (let i = 0; i < tempArray.length; i++) {
    commentsList.appendChild(createComments(tempArray[i]));
  }

  return commentsList;
};

export { renderComments };
