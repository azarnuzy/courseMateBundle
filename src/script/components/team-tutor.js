class TeamTutor extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="team" class="team section-bg">
          <div class="container">
            <div class="section-title">
              <h2>TENAGA PENGAJAR MDCARED</h2>
              <p>
                Lebih seru belajar bareng para tenaga pengajar di Madanian Cared.
                Yuk Kenalan sama mereka!
              </p>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img src="./src/img/tutor1.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="member-info">
                    <h4>Asya Ismatullah Faris</h4>
                    <span>Biologi</span>
                    <p>
                      Kamu tahu? Penyanyi dangdut adalah salah satu makhluk hidup
                      yang unik karena dia bisa hidup dengan organ tunggal
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4 mt-lg-0">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img src="./src/img/tutor2.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="member-info">
                    <h4>Asya Ismatullah Faris</h4>
                    <span>Geografi</span>
                    <p>
                      Ketika jatuh cinta, dunia milik berdua. maka 270 Juta
                      penduduk Indonesia berstatus? Ngontrak, Ngekost, dll
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img src="./src/img/tutor3.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="member-info">
                    <h4>Asya Ismatullah Faris</h4>
                    <span>Fisika</span>
                    <p>
                      Berapa energi potensial dari sebuah cinta yang digantung 10
                      meter di atas permukaan laut?
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img src="./src/img/tutor4.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="member-info">
                    <h4>Asya Ismatullah Faris</h4>
                    <span>Matematika</span>
                    <p>
                      Ada layang-layang, ada diagonal. Kalo mau disayang-sayang,
                      ayo saling kenal
                    </p>
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

customElements.define('team-tutor', TeamTutor);
