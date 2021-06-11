import React ,{useState, useEffect}from 'react';

import { BiHome, BiEnvelope, BiDesktop, BiLock } from "react-icons/bi";
import { MdInsertDriveFile, MdFolder, MdAccountCircle, MdViewHeadline } from "react-icons/md";
import ReactTypingEffect from './typescript';
import Aos from 'aos';
import"aos/dist/aos.css";

import './home.css';
import './main';


function Home() {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [largeur, setLargeur] = useState(window.innerWidth);
  
    const toggleNavSmallScreen = () => {
      setToggleMenu(!toggleMenu);
      console.log(toggleMenu)
    };
  
    useEffect(() => {
      const changeWidth = () => {
        setLargeur(window.innerWidth);
        console.log(largeur);
  
        if (window.innerWidth > 1024) {
          setToggleMenu(true);
        }
        else{
          setToggleMenu(false)
        }
      };
      window.addEventListener('resize', changeWidth);
      return () => {
        window.removeEventListener('resize', changeWidth);
      };
    }, [largeur]);

    useEffect(()  => {
      Aos.init({ duration: 1000 });
    }, [] );

         return (

            <div>
    <body>
    <button id='1' class="mobile-nav-toggle" onClick={toggleNavSmallScreen}>< MdViewHeadline size="2em" /></button>
    {toggleMenu && (

<header id="header">
    <div>
      <div class="profile">
        <div class="tete-profile"></div>
            
        <h1 class="text-light"><a href="index.html">Kevin Estival</a></h1>
        <div class="social-links">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu">
        
        <ul>

          <li><a href="#hero" class="nav-link scrollto active"><BiHome size="2em"/> <div className="link-name">Accueil</div></a></li>
          <li><a href="#about" class="nav-link scrollto"><MdAccountCircle size="2em"/> <div className="link-name">Présentation</div></a></li>
          <li><a href="#skills" class="nav-link scrollto"><BiDesktop size="2em"/> <div className="link-name">Compétences</div></a></li>
          <li><a href="#resume" class="nav-link scrollto"><MdInsertDriveFile size="2em"/> <div className="link-name">Parcours</div></a></li>
          <li><a href="#portfolio" class="nav-link scrollto"><MdFolder size="2em" /> <div className="link-name">Portfolio</div></a></li>
          <li><a href="#contact" class="nav-link scrollto"><BiEnvelope size="2em"/> <div className="link-name">Contact</div></a></li>

        </ul>

      </nav>
    </div>
  </header>
       ) 
      }
 
  <section id="hero" class="sectionhero">
  <div class="hero-container" data-aos="fade-in">
    <h1>Kevin Estival</h1>
    <div className="section-hero">
    <p><span class="typed"></span></p>
    < ReactTypingEffect />
    </div>
  </div>
</section>
      </body>
</div>
         )

}

export default Home;