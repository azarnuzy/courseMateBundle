class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header d-flex flex-row">
        <div class="header_content d-flex flex-row align-items-center">
        <a href="./index.html#">
          <div class="logo_container">
            <div class="logo">
              <img src="./src/img/new_logo_coursemate1.png" alt="LOGO" />
              <span>CourseMate</span>
            </div>
          </div>
        </a>
          <div class="main_nav_container">
            <div class="main_nav">
              <ul class="main_nav_list">
                <li class="main_nav_item">
                  <a href="./index.html#">BERANDA</a>
                </li>
                <li class="main_nav_item">
                  <a href="./about.html">TENTANG KAMI</a>
                </li>
                <li class="main_nav_item">
                  <a href="./pricingList.html">PAKET BELAJAR</a>
                </li>
                <li class="main_nav_item">
                  <a href="./tutor.html#contact">Tutor</a>
                </li>
                <li class="main_nav_item">
                  <a href="./index.html#contact">KONTAK KAMI</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="
            header_side
            d-flex
            flex-row
            justify-content-center
            align-items-center
          "
        >
          <div class="img-phone">
            <i class="fas fa-phone-alt"></i>
          </div>
          <span><a href="https://api.whatsapp.com/send?phone=+62 838-9956-8791" target="_blank">HUBUNGI KAMI</a></span>
        </div>
        <div class="hamburger_container">
          <i class="fas fa-bars trans_200"></i>
        </div>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
