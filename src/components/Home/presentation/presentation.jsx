import React from "react";
import "./presentation.css";

import tête from "../../assets/img/tête.png";

function Presentation() {
  return (
    <section id="about" class="presentation-section">
      <div class="container-presentation">
        <div class="section-title" data-aos="fade-left">
          <h2 className="presentation-title">Présentation</h2>
          <p className="presentation-about">
            Hello je me présente ! Kevin je vie en banlieue proche parisienne.
            Actuellement en étude de Développement Web je pars sur un profil
            Full-Stack. Principalement React js. Node js.
          </p>
        </div>

        <div class="">
          <div data-aos="fade-up">
            <h3>Développeur Web</h3>
            <p class="fst-italic">
              Formation à la Wild Code School de développement web !
            </p>
            <div class="columns">
              <img
                className="img-fond"
                src={tête}
                alt=""
              />
              <div class="column-presentation">
                <ul className="ul-presentation" data-aos="fade-up">
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Diplôme</strong>{" "}
                    <span>Bac +2</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Ville:</strong>{" "}
                    <span>Paris</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                    <span>21</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>antonestival@gmail.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Github:</strong>
                    <a className="presentation-social"href="https://github.com/Thirda?tab=repositories">Github</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Linkedin:</strong>
                    <a className="presentation-social"href="https://www.linkedin.com/in/kevin-estival-61b614213/">Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
