const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  header?.classList.toggle('is-scrolled', currentScrollY > 8);
  lastScrollY = currentScrollY;
}, { passive: true });
