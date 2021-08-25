class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="banner_part">
          
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-xl-6">
                <img src="../../img/mentahan wave.png" alt="">
                <div class="banner_text">
                  <div class="banner_text_iner">
                    <h5>Madanian Cared</h5>
                    <h1>Solusi Belajar Terbaik Masuk SMA Favorit</h1>
                    <p>Tunggu apa lagi, mulai kelasmu sekarang juga!!!</p>
                    <a href="#" class="btn_1"><b>View Course</b></a>
                    <a href="#" class="btn_2"><b>Get Started</b></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      `;
  }
}

customElements.define('banner-sec', Banner);
