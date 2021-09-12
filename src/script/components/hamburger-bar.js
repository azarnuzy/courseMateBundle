class HamburgerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="menu_container menu_mm">
          <div class="menu_close_container">
            <div class="menu_close"></div>
          </div>
          <div class="menu_inner menu_mm">
            <div class="menu menu_mm">
              <ul class="menu_list menu_mm">
                <li class="menu_item menu_mm"><a href="./index.html#">BERANDA</a></li>
                <li class="menu_item menu_mm"><a href="./about.html">TENTANG KAMI</a></li>
                <li class="menu_item menu_mm"><a href="./pricingList.html">PAKET BELAJAR</a></li>
                <li class="menu_item menu_mm"><a href="./index.html#contact">KONTAK KAMI</a></li>
              </ul>
              <div class="menu_social_container menu_mm">
                <ul class="menu_social menu_mm">
                  <li class="menu_social_item menu_mm">
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </li>
                  <li class="menu_social_item menu_mm">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
              <div class="menu_copyright menu_mm">MdCared All Rights Reserved</div>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('hamburger-bar', HamburgerBar);
