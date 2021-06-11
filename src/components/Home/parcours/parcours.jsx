import React from 'react';

import './parcours.css';

function Parcours() {
    return (
<>
        <section id="resume" class="resume">
          
        <div class="section-title" data-aos="fade-left">
          <h2 className="parcours-h2">Parcours</h2>
          <p>Passioné d'informatique j'ai décidé de me diriger dans ce domaine pour mes études après un bac en tant que technicien système en numérique j'ai souhaité continuer dans le développement web.</p>
        </div>
      <div class="container">


        <div class="conteneur-parcours">
          <div className="conteneur-parent">

          <div class="conteneur-resume" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Résumé</h3>
            <div class="resume-item pb-0">
              <h4>Kevin Estival</h4>
              <p><em>Developpeur Web en fin de formation. En validation d'un bac +2 je cherche un stage dans le Developpement en tant que Full Stack.</em></p>
              <ul>
                <li>île de France</li>
                <li>antonestival@gmail.com</li>
              </ul>
            </div>
          <div class="" data-aos="fade-up">
            <h3 class="pro-title">Experience profesionnel</h3>
            <div class="resume-item">
              <h4>Technicien Système en Numérique</h4>
              <h5>2020 - 2 mois</h5>
              <p><em>Aston École</em></p>
              <ul>
                <li>Assistance technique aux utilisateurs</li>
                <li>Dépannage, configuration et maintenance des postes de l'entreprise.</li>
                <li>Maintenance et câblage de baie de serveurs</li>
                <li>Installation complète de salle de formations.</li>
              </ul>
            </div>
          </div>
          </div>
          <div class="etudes-cours">

            <h3 class="school-title">Études</h3>
            <div class="resume-item">
              <h4>Bac +2 Developpeur Web et mobile (en cours)</h4>
              <h5>2021-2021</h5>
              <p><em>Wild Code School</em></p>
              <p>Developpement Web, front-end et back-end. J'ai étudié le React js, le design et la conception de site internet et les sytèmes de gestions de bases de données, stockage de données. React js et Node js avec leur frameworks.</p>
            </div>
            <div class="resume-item">
              <h4>Bac Technicien Système en Numérique </h4>
              <h5>2019-2020</h5>
              <p><em>Aston Ecole</em></p>
              <p>Configuration et maintenance de serveurs, dépannage matériel et réseau, aide à l'utilisateur, maintenance d'ordinateurs et configuration utilisateur d'outils de travails.</p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </section>
  </>
    )
  }
  
  export default Parcours;