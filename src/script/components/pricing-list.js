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
              <div class="panel">              
                <div class="pricing-table">
                  <div class="pricing-plan">
                    <img
                      src="./src/img/Paket 1-mini.png"
                      alt=""
                      class="pricing-img"
                    />
                    <h2 class="pricing-header" id="pricing-list">BEASISWA COMATE</h2>
                    <ul class="pricing-features">
                      <li class="pricing-features-item"> Beasiswa sobat comate merupakan paket yang di tunjukan untuk para siswa/I yang memiliki keterbatasan dalam hal finansial, tetapi memiliki keinginan yang kuat untuk belajar guna menghadapi seleksi masuk ke jenjang pendidikan yang lebih tinggi di sekolah favorit. Beasiswa ini memberikan pembebasan biaya bimbel dan akses gratis terhadap semua fasilitas pembelajaran yang disediakan selama 1 bulan apabila peserta yang bersangkutan memenuhi syarat dan ketentuan yang berlaku.</li>
                    </ul>
                    <span class="pricing-price">Gratis</span>
                    <div class="pricing-regis d-flex justify-content-center d-block">
                      <a href="https://forms.gle/bT991Fa6jyMUUCCT6" target="_blank" class="pricing-button"><strong>DAFTAR</strong></a>
                    </div>
                  </div>
                  <div class="pricing-plan">
                    <img
                      src="./src/img/Paket 2-mini.png"
                      alt=""
                      class="pricing-img"
                    />
                    <h2 class="pricing-header">BIMBEL COMATE</h2>
                    <ul class="pricing-features">
                      <li class="pricing-features-item">Paket Bimbel ini merupakan paket yang memiliki berbagai penawaran fasilitas dan frekuensi pertemuan pembelajaran yang berbeda-beda sesuai dengan keinginan dan kebutuhan peserta. Paket ini juga dirancang  untuk memberikan penawaran fasilitas terbaik dengan harga yang terjangkau.</li>
                    </ul>
                    <span class="pricing-price">Berbayar</span>
                    <div class="pricing-regis d-flex justify-content-center d-block">
                      <a href="https://forms.gle/HY17XxoqB1cNQhiZ9" target="_blank" class="pricing-button"><strong>DAFTAR</strong></a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
    `;
  }
}

customElements.define('pricing-list', PricingList);
