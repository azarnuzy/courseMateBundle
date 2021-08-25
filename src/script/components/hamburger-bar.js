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
                <li class="menu_item menu_mm"><a href="#">HOME</a></li>
                <li class="menu_item menu_mm"><a href="#">ABOUT US</a></li>
                <li class="menu_item menu_mm"><a href="#">COURSES</a></li>
                <li class="menu_item menu_mm"><a href="#">NEWS</a></li>
                <li class="menu_item menu_mm"><a href="#">CONTACT</a></li>
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
              <div class="menu_copyright menu_mm">Colorlib All Rights Reserved</div>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('hamburger-bar', HamburgerBar);
