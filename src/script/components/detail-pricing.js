class DetailPricing extends HTMLElement {
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
              <h1 class="mb-2 bread">PAKET KELAS</h1>
            </div>
          </div>
        </div>
      </section>
      <div class="pricing-detail panel">
        <div class="section-title text-center">
          <h2>PAKET KELAS</h2>
        </div>
        <div class="row d-flex justify-content-around pricing-detail">
          <div class="col-xl-1 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
            <img src="./src/img/Paket 1-mini.png" alt="" class="pricing-img" />
            <h2 class="detail-pricing-header">PAKET BEASISWA</h2>
            <a href="#"
              ><span class="requir-free-price" data-bs-toggle="modal" data-bs-target="#exampleModal">Syarat & Ketentuan Berlaku </span
              ><i class="fas fa-external-link-square-alt"></i
            ></a>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Syarat & Ketentuan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <ol class="custom-numbers">
                        <li class="mb-2">Follow instagram @coursemate.official</li>
                        <li class="mb-2">Instagram tidak di private selama kegiatan berlangsung</li>
                        <li class="mb-2">Repost postingan open registration di IG Story, like dan tag 5 teman kamu di kolom komentar</li>
                        <li class="mb-2">Upload twibbon dan tag @coursemate.official serta 3 teman kamu. </li>
                    </ol>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <ul class="pricing-features mt-2">
              <li class="pricing-features-item">1 Bulan Bimbel</li>
              <li class="pricing-features-item">4 kali try out</li>
              <li class="pricing-features-item">4 kunci jawaban try out</li>
              <li class="pricing-features-item">Booklet Soal</li>
              <li class="pricing-features-item">Kuota Terbatas</li>
            </ul>
            <span class="pricing-price">Gratis</span>
          </div>
          <div class="col-xl-1 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
            <img src="./src/img/Paket 2-mini.png" alt="" class="pricing-img" />
            <h2 class="detail-pricing-header">PAKET ALDEBARAN</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">1 Bulan Bimbel</li>
              <li class="pricing-features-item">4 kali try out</li>
              <li class="pricing-features-item">4 kunci jawaban try out</li>
              <li class="pricing-features-item">Booklet Soal</li>
            </ul>
            <span class="pricing-price">300K</span>
          </div>
          <div class="col-xl-1 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
            <img src="./src/img/Paket 2-mini.png" alt="" class="pricing-img" />
            <h2 class="detail-pricing-header">PAKET ALTAIR</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">3 Minggu Bimbel</li>
              <li class="pricing-features-item">3 kali try out</li>
              <li class="pricing-features-item">3 kunci jawaban try out</li>
              <li class="pricing-features-item">Booklet Soal</li>
            </ul>
            <span class="pricing-price">250K</span>
          </div>
          <div class="col-xl-1 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
            <img src="./src/img/Paket 2-mini.png" alt="" class="pricing-img" />
            <h2 class="detail-pricing-header">PAKET ANTARES</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">2 Minggu Bimbel</li>
              <li class="pricing-features-item">2 kali try out</li>
              <li class="pricing-features-item">2 kunci jawaban try out</li>
              <li class="pricing-features-item">Booklet Soal</li>
            </ul>
            <span class="pricing-price">175K</span>
          </div>
          <div class="col-xl-1 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
            <img src="./src/img/Paket 2-mini.png" alt="" class="pricing-img" />
            <h2 class="detail-pricing-header">PAKET STARLA</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">1 Minggu Bimbel</li>
              <li class="pricing-features-item">1 kali try out</li>
              <li class="pricing-features-item">1 kunci jawaban try out</li>
              <li class="pricing-features-item">Booklet Soal</li>
            </ul>
            <span class="pricing-price">150K</span>
          </div>
          <div class="col-xl-1 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
            <img src="./src/img/Paket 2-mini.png" alt="" class="pricing-img" />
            <h2 class="detail-pricing-header">PAKET ORION</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">4 kali try out</li>
              <li class="pricing-features-item">4 kunci jawaban try out</li>
              <li class="pricing-features-item">Booklet Soal</li>
            </ul>
            <span class="pricing-price">50K</span>
          </div>
          <div class="col-xl-1 col-lg-3 col-md-6 col-sm-12 col-12 text-center">
            <img src="./src/img/Paket 2-mini.png" alt="" class="pricing-img" />
            <h2 class="detail-pricing-header">PAKET SIRIUS</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">1 kali try out</li>
              <li class="pricing-features-item">1 kunci jawaban try out</li>
              <li class="pricing-features-item">Booklet Soal</li>
            </ul>
            <span class="pricing-price">15K</span>
          </div>
          <div class="pricing-regis d-flex justify-content-center d-block">
            <a href="./index.html#pricing-list" class="pricing-button"><strong>DAFTAR</strong></a>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('detail-pricing', DetailPricing);
