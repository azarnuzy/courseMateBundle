class HeroWrap extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section class="hero-wrap hero-wrap-2">
              <div class="overlay"></div>
              <div class="container">
                <div
                  class="
                    row
                    no-gutters
                    slider-text
                    align-items-center
                    justify-content-center
                  "
                >
                  <div class="col-md-9 text-center">
                    <h1 class="mb-2 bread">Tentang Kami</h1>
                  </div>
                </div>
              </div>
            </section>
        `;
  }
}

customElements.define('hero-wrap', HeroWrap);
