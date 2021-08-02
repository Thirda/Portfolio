import React from 'react';

import './portfolio.scss';

function Portfolio() {
      
    return (
        <>
    <h2 id="portfolio"className="title-portfolio">Portfolio</h2>
<section className="conteneur-p">

<div class="portfolio-container">
    <input className="input-portfolio" type="radio" name="slider" id="item-1" checked/>
    <input className="input-portfolio" type="radio" name="slider" id="item-2"/>
    <input className="input-portfolio" type="radio" name="slider" id="item-3"/>
  <div className="portfolio-cards">
    <label class="portfolio-card" htmlFor="item-1" id="song-1">
      <img className="image-portfolio" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="song"/>
    </label>
    <label class="portfolio-card" htmlFor="item-2" id="song-2">
      <img className="image-portfolio" src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt="song"/>
    </label>
    <label class="portfolio-card" htmlFor="item-3" id="song-3">
      <img className="image-portfolio" src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg" alt="song"/>
    </label>
  </div>
  <div class="player">
    <div class="upper-part">
      <div class="info-area" id="test">
        <label class="song-info" id="song-info-1">
          <div class="title">Projet 1</div>
          <div class="sub-line">
            <div class="subtitle">Html, CSS</div>
          </div>
        </label>
        <label class="song-info" id="song-info-2">
          <div class="title">Projet 2</div>
          <div class="sub-line">
            <div class="subtitle">React js, Javascript</div>
          </div>
        </label>
        <label class="song-info" id="song-info-3">
          <div class="title">Projet 3</div>
          <div class="sub-line">
            <div class="subtitle">React js, Node js</div>
          </div>
        </label>
      </div>
    </div>
  </div>
</div>
</section>
</>
        )
    }
    
    export default Portfolio;