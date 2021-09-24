import React from 'react';

import './skills.scss';

function Skills() {

    return(
<div>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  <h2 id="skills"className="skills"> Mes Compétences</h2>
      <div className="description-skills">Developpeur Full Stack, React js et Node js</div>
   <div class="content-skills">
      <div class="card-skills">
         
            <div class="icon"><i class="material-icons md-36">front_hand</i></div>
            <p class="title">Front-end</p>
            <p class="text">React js</p>
            <p class="text">Javascript</p>
            <p class="text">Css</p>
            <p class="text">Html</p>
   
      </div>
      <div class="card-skills">
         
            <div class="icon"><i class="material-icons md-36">back_hand</i></div>
            <p class="title">Back-end</p>
            <p class="text">Node js</p>
            <p class="text">Express</p>
            <p class="text">Mysql</p>
            <p class="text">Mongo db</p>
         
      </div>
   </div>
</div>
    )
   }
   export default Skills;