import React from 'react';
import './presentation.css';

import '../../assets/img/tête-cv.jpeg'
function Presentation() {
return (

    <section id="about" class="presentation-section">
      <div class="container">

        <div class="section-title">
          <h2 className="presentation-title" data-aos="fade-left">Présentation</h2>
          <p className="presentation-about" data-aos="fade-right">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="">
          <div class="">
            <h3 data-aos="fade-right">Web Developer</h3>
            <p class="fst-italic" data-aos="fade-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="columns">
          <img className="img-fond" src="https://www.acadienouvelle.com/wp-content/uploads/fly-images/431888/moon-416973_1280.jpg.gallery-320x190-c.jpg" alt="" />
              <div class="column-presentation">
                <ul className="ul-presentation" data-aos="fade-left">
                  <li><i class="bi bi-chevron-right"></i> <strong>Diplôme</strong> <span>Bac +2</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Paris</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>antonestival@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p data-aos="fade-up">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
)
}

export default Presentation;