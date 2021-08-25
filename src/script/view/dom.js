const menuContainer = document.querySelector('.menu_container');

document.addEventListener('click', function (e) {
  const tar = e.target.classList;
  if (tar.contains('fas')) {
    menuContainer.classList.add('active');
  } else if (tar.contains('menu_close')) {
    menuContainer.classList.remove('active');
  }
});

let scrollY = window.scrollY;
const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  scrollY = this.scrollY;
  if (scrollY > 0) {
    header.classList.add('scroll-header');
  } else if (scrollY == 0) {
    header.classList.remove('scroll-header');
  }
});
