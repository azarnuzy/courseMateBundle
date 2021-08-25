import testimonials from '../data/testimonial-data.js';

class TestimonilMember extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="section-title text-center mt-4">
                <h2>Testimoni Siswa</h2>
            </div>
            <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="container">
                    <div class="row">
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[0].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[0].photo}" />
                            <h5>
                              ${testimonials[0].name}<span> ${testimonials[0].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[1].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[1].photo}" />
                            <h5>
                              ${testimonials[1].name}<span> ${testimonials[1].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div class="container">
                    <div class="row">
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[2].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[2].photo}" />
                            <h5>
                              ${testimonials[2].name}<span> ${testimonials[2].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[3].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[3].photo}" />
                            <h5>
                              ${testimonials[3].name}<span> ${testimonials[3].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[4].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[4].photo}" />
                            <h5>
                              ${testimonials[4].name}<span> ${testimonials[4].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[5].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[5].photo}" />
                            <h5>
                              ${testimonials[5].name}<span> ${testimonials[5].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[6].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[6].photo}" />
                            <h5>
                              ${testimonials[6].name}<span> ${testimonials[6].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                      <div class="col d-flex justify-content-center">
                        <figure class="snip1192 text-center">
                          <blockquote>
                            ${testimonials[7].description}
                          </blockquote>
                          <div class="author">
                            <img src="./src/img/${testimonials[7].photo}" />
                            <h5>
                              ${testimonials[7].name}<span> ${testimonials[7].school}</span>
                            </h5>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span class="visually-hidden">Next</span>
              </button>
            </div>
      `;
  }
}

customElements.define('testimonials-member', TestimonilMember);
