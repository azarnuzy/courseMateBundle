class LearningFacilities extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="why-choose-us-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <div class="section-title text-center">
                  <h2>Fasilitas Pembelajaran</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="why-chhose-us-box wow fadeInUp center">
                  <div class="why-chhose-us-box-inner">
                    <div class="why-chhose-us-icon">
                      <img src="./src/img/live.png" alt="Live" />
                    </div>
                    <div class="why-chhose-us-content">
                      <h3 class="theme-title">Live Teaching</h3>
                      <p class="theme-description">
                        Pembelajaran dilakukan secara langsung oleh tutor yang
                        berpengalaman
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="why-chhose-us-box wow fadeInUp center">
                  <div class="why-chhose-us-box-inner">
                    <div
                      class="why-chhose-us-icon modul-icon"
                      style="
                        color: #4382ff;
                        background-color: rgba(67, 130, 255, 0.13);
                      "
                    >
                      <img src="./src/img/course-builder.png" alt="Modul" />
                    </div>
                    <div class="why-chhose-us-content">
                      <h3 class="theme-title">Modul</h3>
                      <p class="theme-description">
                        Modul pembelajaran yang lengkap dan menarik
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="why-chhose-us-box wow fadeInUp center">
                  <div class="why-chhose-us-box-inner">
                    <div
                      class="why-chhose-us-icon"
                      style="
                        color: #f89035;
                        background-color: rgba(248, 144, 53, 0.13);
                      "
                    >
                      <img src="./src/img/flexible-lock.png" alt="Soal" />
                    </div>
                    <div class="why-chhose-us-content">
                      <h3 class="theme-title">Bank Soal</h3>
                      <p class="theme-description">
                        Bank soal dan pembahasan dari tahun 2015-2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-end flex-column bd-highlight mt-4">
              <div class="link-why text-center">
                <strong><a href="">Lihat Selengkapnya...</a></strong>
              </div>
            </div>
          </div>
        </section>
    `;
  }
}

customElements.define('learning-facilities', LearningFacilities);
