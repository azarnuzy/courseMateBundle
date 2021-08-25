class PricingList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="pricing-list">
          <div class="pricing-background">
            <div class="pricing-wrap">
              <div class="section-title text-center">
                <h2>RAGAM PILIHAN KELAS</h2>
              </div>
              <div class="panel pricing-table">
                <div class="pricing-plan">
                  <img
                    src="./src/img/Paket 1-mini.png"
                    alt=""
                    class="pricing-img"
                  />
                  <h2 class="pricing-header">PAKET 1</h2>
                  <ul class="pricing-features">
                    <li class="pricing-features-item">Lorem, ipsum.</li>
                    <li class="pricing-features-item">
                      Lorem ipsum dolor sit amet.
                    </li>
                  </ul>
                  <span class="pricing-price">100K</span>
                  <a href="#/" class="pricing-button">Daftar</a>
                </div>

                <div class="pricing-plan">
                  <img
                    src="./src/img/Paket 2-mini.png"
                    alt=""
                    class="pricing-img"
                  />
                  <h2 class="pricing-header">PAKET 2</h2>
                  <ul class="pricing-features">
                    <li class="pricing-features-item">Lorem, ipsum.</li>
                    <li class="pricing-features-item">
                      Lorem ipsum dolor sit amet.
                    </li>
                  </ul>
                  <span class="pricing-price">125K</span>
                  <a href="#/" class="pricing-button">DAFTAR</a>
                </div>

                <div class="pricing-plan">
                  <img
                    src="./src/img/Paket 3-mini.png"
                    alt=""
                    class="pricing-img"
                  />
                  <h2 class="pricing-header">PAKET 3</h2>
                  <ul class="pricing-features">
                    <li class="pricing-features-item">Lorem, ipsum.</li>
                    <li class="pricing-features-item">
                      Lorem ipsum dolor sit amet.
                    </li>
                  </ul>
                  <span class="pricing-price">150K</span>
                  <a href="#/" class="pricing-button">DAFTAR</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    `;
  }
}

customElements.define('pricing-list', PricingList);
