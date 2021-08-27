import facility from '../data/facilities.js';

const boxFacilities = document.createElement('div');
boxFacilities.setAttribute('class', 'box-facilities');

const loopBox = () => {
  let i = 0;
  for (i = 0; i < 9; i += 3) {
    const box = document.createElement('div');
    box.setAttribute('class', 'row');
    box.innerHTML = `
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="why-chhose-us-box wow fadeInUp center">
            <div class="why-chhose-us-box-inner">
              <div class="why-chhose-us-icon">
                <img src="./src/img/${facility[i].photo}" alt="Live" />
              </div>
              <div class="why-chhose-us-content">
                <h3 class="theme-title">${facility[i].title}</h3>
                <p class="theme-description">${facility[i].description}</p>
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
                <img src="./src/img/${facility[i + 1].photo}" alt="Modul" />
              </div>
              <div class="why-chhose-us-content">
                <h3 class="theme-title">${facility[i + 1].title}</h3>
                <p class="theme-description">${facility[i + 1].description}</p>
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
                <img src="./src/img/${facility[i + 2].photo}" alt="Soal" />
              </div>
              <div class="why-chhose-us-content">
                <h3 class="theme-title">${facility[i + 2].title}</h3>
                <p class="theme-description">
                  ${facility[i + 2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
    `;
    boxFacilities.appendChild(box);
  }
};

loopBox();

class LearningFacilitiesAbout extends HTMLElement {
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
            ${boxFacilities.innerHTML}
          </div>
        </section>
    `;
  }
}

customElements.define('facilities-about', LearningFacilitiesAbout);
