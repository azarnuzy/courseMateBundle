import about from '../data/about-data.js';

class DescAbout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="ftco-section ftco-no-pt ftc-no-pb mb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="heading-section text-center">
                  <span class="subheading"> Selamat Datang di Course Mate! </span>
                  <h2 class="mb-3">
                    Belajar Asik dan Mudah Bersama Course Mate!
                  </h2>
                </div>
                <p>
                 ${about.description}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 order-md-last wrap-about py-5 bg-light">
                <div class="text px-4">
                  <h2>Sejarah Berdirinya Course Mate</h2>
                  <p>${about.sejarah.a}</p>
                  <p>${about.sejarah.b}</p>
                  <p>${about.sejarah.c}</p>
                </div>
              </div>
              <div class="col-md-5 wrap-about py-5 pr-md-4">
                <h2 class="mb-4">Visi Course Mate</h2>
                <p>${about.visi}</p>
                <h2 class="mb-4">Misi Course Mate</h2>
                <ol>
                  <li>${about.misi.a}</li>
                  <li>${about.misi.b}</li>
                  <li>${about.misi.c}</li>
                  <li>${about.misi.d}</li>
                  <li>${about.misi.e}</li>
                </ol>
                <h2 class="mb-4">Tujuan Course Mate</h2>
                <p>${about.tujuan}</p>
              </div>
            </div>
          </div>
        </section>
        `;
  }
}

customElements.define('desc-about', DescAbout);
