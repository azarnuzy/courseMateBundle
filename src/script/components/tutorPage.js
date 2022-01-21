import tutor from '../data/tutor.js';

const tutorListCard = document.createElement('div');
tutorListCard.setAttribute('class', 'tutorListCard');

const loopTutorCard = () => {
  for (let i = 0; i < 16; i += 2) {
    const tutorCard = document.createElement('div');
    tutorCard.setAttribute('class', 'row');

    tutorCard.innerHTML = `
    <div class="col-lg-6 mt-4 mt-lg-3">
      <div class="member d-flex align-items-start">
        <div class="pic">
          <img src="./src/img/${tutor[i].foto}" class="img-fluid" alt="" />
        </div>
        <div class="member-info">
          <h4>${tutor[i].name}</h4>
          <span>${tutor[i].bidang}</span>
          <p>
            ${tutor[i].descBidang}
          </p>
          <div class="profile-social-links mt-2">
            <a href="#"><i class="fab fa-linkedin"></i></a>            
            <a href="#"><i class="fab fa-instagram"></i></a>        
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mt-4 mt-lg-3">
      <div class="member d-flex align-items-start">
        <div class="pic">
          <img src="./src/img/${tutor[i + 1].foto}" class="img-fluid" alt="" />
        </div>
        <div class="member-info">
          <h4>${tutor[i + 1].name}</h4>
          <span>${tutor[i + 1].bidang}</span>
          <p>
            ${tutor[i + 1].descBidang}
          </p>
          <div class="profile-social-links mt-2">
            <a href="#"><i class="fab fa-linkedin"></i></a>            
            <a href="#"><i class="fab fa-instagram"></i></a>        
          </div>
        </div>
      </div>
    </div>
    `;
    tutorListCard.appendChild(tutorCard);
  }
};

loopTutorCard();

class TutorPage extends HTMLElement {
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
                <h1 class="mb-2 bread">Tenaga Pengajar</h1>
              </div>
            </div>
          </div>
        </section>
        <section id="team" class="team section-bg">
          <div class="container">
            <div class="section-title">
              <h2>TENAGA PENGAJAR COURSE MATE</h2>
              <p>
                Lebih seru belajar bareng para tenaga pengajar di Course Mate.
                Yuk Kenalan sama mereka!
              </p>
            </div>
            ${tutorListCard.innerHTML}
          </div>
        </section>
        `;
  }
}

customElements.define('tutor-page', TutorPage);
