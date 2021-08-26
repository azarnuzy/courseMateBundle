class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header d-flex flex-row">
        <div class="header_content d-flex flex-row align-items-center">
          <div class="logo_container">
            <div class="logo">
              <img src="./src/img/output-onlinepngtools.png" alt="LOGO" />
              <span>MDCared</span>
            </div>
          </div>
          <div class="main_nav_container">
            <div class="main_nav">
              <ul class="main_nav_list">
                <li class="main_nav_item">
                  <a href="#">BERANDA</a>
                </li>
                <li class="main_nav_item">
                  <a href="#">TENTANG KAMI</a>
                </li>
                <li class="main_nav_item">
                  <a href="#pricing-list">PAKET BELAJAR</a>
                </li>
                <li class="main_nav_item">
                  <a href="#contact">KONTAK KAMI</a>
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
          <span><a href="#">HUBUNGI KAMI</a></span>
        </div>
        <div class="hamburger_container">
          <i class="fas fa-bars trans_200"></i>
        </div>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
