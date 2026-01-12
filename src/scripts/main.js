/* eslint-env browser */
'use strict';

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      target.classList.toggle('show', isIntersecting);
    });
  },
  {
    threshold: 0.2,
  },
);

document
  .querySelectorAll('.categories, .recommended')
  .forEach((el) => observer.observe(el));
