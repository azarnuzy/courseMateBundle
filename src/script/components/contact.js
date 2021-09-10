class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
              <p>
                Hubungi kami lebih lanjut pada kontak berikut:
              </p>
            </div>
        
            <div class="row">
              <div class="col-lg-5 d-flex align-items-lg-stretch">
                <div class="info">
                  <div class="email">
                    <i class="far fa-envelope"></i>
                    <h4>Email:</h4>
                    <p>official.coursemate@gmail.com</p>
                  </div>
                  <div class="email">
                    <i class="fab fa-instagram"></i>
                    <h4>Instagram</h4>
                    <p>@official.coursemate</p>
                  </div>
                  <div class="phone">
                    <i class="fab fa-youtube"></i>
                    <h4>Youtube</h4>
                    <p>official.coursemate</p>
                  </div>
                  <div class="phone">
                    <i class="fas fa-phone-alt"></i>
                    <h4>Telepon:</h4>
                    <p>+62 812-1271-5806 </p>
                  </div>
                </div>
              </div>
        
              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Subject</label>
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Message</label>
                    <textarea
                      class="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn disabled">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    `;
  }
}

customElements.define('contact-md', Contact);
