import { ProfileBlock } from '../components/ProfileBlock.js';
import { PostBlock } from '../components/PostBlock.js';
import { POST_DATA } from '/data.js';

export const ActivityPage = () => {
  const homeWrapper = document.querySelector('.home__wrapper');
  homeWrapper.innerHTML = '';

  const postList = document.createElement('ul');
  postList.classList.add('post__list');
  homeWrapper.append(postList);

  POST_DATA.forEach((post) => {
    postList.insertAdjacentHTML('beforeend', PostBlock(post));
  });

  homeWrapper.insertAdjacentHTML('afterend', ProfileBlock());

  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      accordion.nextElementSibling.classList.toggle('accordion--hide');
      const arrow = accordion.querySelector('.arrow');
      arrow.classList.toggle('arrow--rotate');
    });
  });
};
