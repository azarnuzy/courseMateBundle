import tutor from '../data/tutor.js';

const tutorListCard = document.createElement('div');
tutorListCard.setAttribute('class', 'tutorListCard');

const loopTutorCard = () => {
  for (let i = 0; i < 4; i += 2) {
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
            <a href="${
              tutor[i].linkInstagram
            } " target="_blank"><i class="fab fa-instagram"></i></a>        
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
            <a href="${
              tutor[i + 1].linkInstagram
            }" target="_blank"><i class="fab fa-instagram"></i></a>        
          </div>
        </div>
      </div>
    </div>
    `;
    tutorListCard.appendChild(tutorCard);
  }
};

loopTutorCard();

class TeamTutor extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
            <div class="d-flex align-items-end flex-column bd-highlight mt-4">
              <div class="link-why text-center">
                <strong><a href="./tutor.html">Lihat Selengkapnya...</a></strong>
              </div>
            </div>
          </div>
        </section>
        `;
  }
}

customElements.define('team-tutor', TeamTutor);
