const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLink.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLink.classList.remove('active');
  })
);
