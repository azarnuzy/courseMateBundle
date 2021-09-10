import facility from '../data/facilities.js';

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
                      <img src="./src/img/${facility[0].photo}" alt="Live" />
                    </div>
                    <div class="why-chhose-us-content">
                      <h3 class="theme-title">${facility[0].title}</h3>
                      <p class="theme-description">${facility[0].description}</p>
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
                      <img src="./src/img/${facility[1].photo}" alt="Modul" />
                    </div>
                    <div class="why-chhose-us-content">
                      <h3 class="theme-title">${facility[1].title}</h3>
                      <p class="theme-description">${facility[1].description}</p>
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
                      <img src="./src/img/${facility[2].photo}" alt="Soal" />
                    </div>
                    <div class="why-chhose-us-content">
                      <h3 class="theme-title">${facility[2].title}</h3>
                      <p class="theme-description">
                        ${facility[2].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-end flex-column bd-highlight mt-4">
              <div class="link-why text-center">
                <strong><a href="./about.html#learn-facilites">Lihat Selengkapnya...</a></strong>
              </div>
            </div>
          </div>
        </section>
    `;
  }
}

customElements.define('learning-facilities', LearningFacilities);
