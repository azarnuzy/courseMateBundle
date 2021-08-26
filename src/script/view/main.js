import descFooter from '../components/footer.js';

const main = () => {
  const menuContainer = document.querySelector('.menu_container');

  document.addEventListener('click', function (e) {
    const tar = e.target.classList;
    const valText = e.target.innerText;
    const target = e.target.parentElement;
    const a = 'BERANDA';
    const b = 'TENTANG KAMI';
    const c = 'PAKET BELAJAR';
    const d = 'KONTAK KAMI';
    if (
      tar.contains('svg-inline--fa') ||
      target.classList.contains('svg-inline--fa')
    ) {
      menuContainer.classList.add('active');
    } else if (
      tar.contains('menu_close') ||
      valText === a ||
      valText === b ||
      valText === c ||
      valText === d
    ) {
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
};

export default main;
