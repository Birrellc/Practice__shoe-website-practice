const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

// Open Nav Menu
menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

// Close Nav Menu
close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});
