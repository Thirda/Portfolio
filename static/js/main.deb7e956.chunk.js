(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{24:function(e,s,c){},25:function(e,s,c){},28:function(e,s,c){},29:function(e,s,c){},30:function(e,s,c){},31:function(e,s,c){},32:function(e,s,c){},33:function(e,s,c){},34:function(e,s,c){},35:function(e,s,c){},45:function(e,s,c){"use strict";c.r(s);var t=c(14),i=c.n(t),n=(c(24),c(6)),l=c(2),a=c(9),r=c(7),o=c(15),j=c.n(o),d=(c(25),c(1)),b=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-dev",children:Object(d.jsx)(j.a,{text:["Developper Web","Developper Full Stack"],cursorRenderer:function(e){return Object(d.jsx)("h3",{children:e})},speed:100,eraseSpeed:100,eraseDelay:700,typingDelay:500,displayTextRenderer:function(e,s){return Object(d.jsx)("h3",{children:e.split("").map((function(e,s){var c="".concat(s);return Object(d.jsx)("span",{style:{color:"white",padding:0,fontFamily:"Helvetica, sans-serif",fontSize:"25px"},children:e},c)}))})}})})})},h=c(16),u=c.n(h),x=(c(27),c.p+"static/media/t\xeate2.0d83f71e.png"),m=(c(28),c(19));!function(){var e=function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),s?Object(m.a)(document.querySelectorAll(e)):document.querySelector(e)},s=function(s,c,t){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=e(c,i);n&&(i?n.forEach((function(e){return e.addEventListener(s,t)})):n.addEventListener(s,t))},c=function(e,s){e.addEventListener("scroll",s)},t=e("#navbar .scrollto",!0),i=function(){var s=window.scrollY+200;t.forEach((function(c){if(c.hash){var t=e(c.hash);t&&(s>=t.offsetTop&&s<=t.offsetTop+t.offsetHeight?c.classList.add("active"):c.classList.remove("active"))}}))};window.addEventListener("load",i),c(document,i);var n=function(s){var c=e(s).offsetTop;window.scrollTo({top:c,behavior:"smooth"})},l=e(".back-to-top");if(l){var a=function(){window.scrollY>100?l.classList.add("active"):l.classList.remove("active")};window.addEventListener("load",a),c(document,a)}s("click",".mobile-nav-toggle",(function(s){e("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),s("click",".scrollto",(function(s){if(e(this.hash)){s.preventDefault();var c=e("body");if(c.classList.contains("mobile-nav-active")){c.classList.remove("mobile-nav-active");var t=e(".mobile-nav-toggle");t.classList.toggle("bi-list"),t.classList.toggle("bi-x")}n(this.hash)}}),!0),window.addEventListener("load",(function(){window.location.hash&&e(window.location.hash)&&n(window.location.hash)}))}();var O=function(){var e=Object(l.useState)(!0),s=Object(n.a)(e,2),c=s[0],t=s[1],i=Object(l.useState)(window.innerWidth),o=Object(n.a)(i,2),j=o[0],h=o[1];return Object(l.useEffect)((function(){var e=function(){h(window.innerWidth),console.log(j),window.innerWidth>1024?t(!0):t(!1)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[j]),Object(l.useEffect)((function(){u.a.init({duration:1e3})}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("body",{children:[Object(d.jsx)("button",{id:"1",class:"mobile-nav-toggle",onClick:function(){t(!c),console.log(c)},children:Object(d.jsx)(r.d,{size:"2em"})}),c&&Object(d.jsxs)("header",{id:"header",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{class:"profile",children:[Object(d.jsx)("img",{src:x,alt:"imageprofile",class:"tete-profile"}),Object(d.jsx)("h1",{class:"text-light",children:Object(d.jsx)("a",{href:"index.html",children:"Kevin Estival"})})]}),Object(d.jsx)("nav",{id:"navbar",class:"nav-menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"#hero",class:"nav-link scrollto active",children:[Object(d.jsx)(a.c,{size:"2em"})," ",Object(d.jsx)("div",{className:"link-name",children:"Accueil"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"#about",class:"nav-link scrollto",children:[Object(d.jsx)(r.a,{size:"2em"})," ",Object(d.jsx)("div",{className:"link-name",children:"Pr\xe9sentation"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"#skills",class:"nav-link scrollto",children:[Object(d.jsx)(a.a,{size:"2em"})," ",Object(d.jsx)("div",{className:"link-name",children:"Comp\xe9tences"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"#resume",class:"nav-link scrollto",children:[Object(d.jsx)(r.c,{size:"2em"})," ",Object(d.jsx)("div",{className:"link-name",children:"Parcours"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"#portfolio",class:"nav-link scrollto",children:[Object(d.jsx)(r.b,{size:"2em"})," ",Object(d.jsx)("div",{className:"link-name",children:"Portfolio"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"#contact",class:"nav-link scrollto",children:[Object(d.jsx)(a.b,{size:"2em"})," ",Object(d.jsx)("div",{className:"link-name",children:"Contact"})]})})]})})]}),Object(d.jsx)("div",{className:"copyright",children:"Copyright Estival Kevin."})]}),Object(d.jsx)("section",{id:"hero",class:"sectionhero",children:Object(d.jsxs)("div",{class:"hero-container","data-aos":"fade-in",children:[Object(d.jsx)("h1",{children:"Kevin Estival"}),Object(d.jsxs)("div",{className:"section-hero",children:[Object(d.jsx)("p",{children:Object(d.jsx)("span",{class:"typed"})}),Object(d.jsx)(b,{})]})]})})]})})},p=(c(29),c.p+"static/media/t\xeate.ce94bee6.png");var v=function(){return Object(d.jsx)("section",{id:"about",class:"presentation-section",children:Object(d.jsxs)("div",{class:"container-presentation",children:[Object(d.jsxs)("div",{class:"section-title","data-aos":"fade-left",children:[Object(d.jsx)("h2",{className:"presentation-title",children:"Pr\xe9sentation"}),Object(d.jsx)("p",{className:"presentation-about",children:"Hello je me pr\xe9sente ! Kevin je vie en banlieue proche parisienne. Actuellement en \xe9tude de D\xe9veloppement Web je pars sur un profil Full-Stack. Principalement React js. Node js."})]}),Object(d.jsx)("div",{class:"",children:Object(d.jsxs)("div",{"data-aos":"fade-up",children:[Object(d.jsx)("h3",{children:"D\xe9veloppeur Web"}),Object(d.jsx)("p",{class:"fst-italic",children:"Formation \xe0 la Wild Code School de d\xe9veloppement web !"}),Object(d.jsxs)("div",{class:"columns",children:[Object(d.jsx)("img",{className:"img-fond",src:p,alt:""}),Object(d.jsx)("div",{class:"column-presentation",children:Object(d.jsxs)("ul",{className:"ul-presentation","data-aos":"fade-up",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(d.jsx)("strong",{children:"Dipl\xf4me"})," ",Object(d.jsx)("span",{children:"Bac +2"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(d.jsx)("strong",{children:"Ville:"})," ",Object(d.jsx)("span",{children:"Paris"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(d.jsx)("strong",{children:"Age:"})," ",Object(d.jsx)("span",{children:"21"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(d.jsx)("strong",{children:"Email:"})," ",Object(d.jsx)("span",{children:"antonestival@gmail.com"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(d.jsx)("strong",{children:"Github:"}),Object(d.jsx)("a",{className:"presentation-social",href:"https://github.com/Thirda?tab=repositories",children:"Github"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(d.jsx)("strong",{children:"Linkedin:"}),Object(d.jsx)("a",{className:"presentation-social",href:"https://www.linkedin.com/in/kevin-estival-61b614213/",children:"Linkedin"})]})]})})]}),Object(d.jsx)("p",{children:"Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores."})]})})]})})};c(30);var f=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{id:"resume",class:"resume",children:[Object(d.jsxs)("div",{class:"section-title","data-aos":"fade-left",children:[Object(d.jsx)("h2",{className:"parcours-h2",children:"Parcours"}),Object(d.jsx)("p",{className:"parcours-text",children:"Passion\xe9 d'informatique j'ai d\xe9cid\xe9 de me diriger dans ce domaine pour mes \xe9tudes apr\xe8s un bac en tant que technicien syst\xe8me en num\xe9rique j'ai souhait\xe9 continuer dans le d\xe9veloppement web."})]}),Object(d.jsx)("div",{class:"container-parcours",children:Object(d.jsx)("div",{class:"conteneur-parcours",children:Object(d.jsxs)("div",{className:"conteneur-parent",children:[Object(d.jsxs)("div",{class:"conteneur-resume","data-aos":"fade-up","data-aos-delay":"100",children:[Object(d.jsx)("h3",{class:"resume-title",children:"R\xe9sum\xe9"}),Object(d.jsxs)("div",{class:"resume-item pb-0",children:[Object(d.jsx)("h4",{children:"Kevin Estival"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Developpeur Web en fin de formation. En validation d'un bac +2 je cherche un stage dans le Developpement en tant que Full Stack."})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"\xeele de France"}),Object(d.jsx)("li",{children:"antonestival@gmail.com"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{class:"pro-title",children:"Experience profesionnel"}),Object(d.jsxs)("div",{class:"resume-item",children:[Object(d.jsx)("h4",{children:"Technicien Syst\xe8me en Num\xe9rique"}),Object(d.jsx)("h5",{children:"2020 - 2 mois"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Aston \xc9cole"})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Assistance technique aux utilisateurs"}),Object(d.jsx)("li",{children:"D\xe9pannage, configuration et maintenance des postes de l'entreprise."}),Object(d.jsx)("li",{children:"Maintenance et c\xe2blage de baie de serveurs"}),Object(d.jsx)("li",{children:"Installation compl\xe8te de salle de formations."})]})]})]})]}),Object(d.jsxs)("div",{className:"etudes-cours","data-aos":"fade-up","data-aos-delay":"100",style:{width:"50%"},children:[Object(d.jsx)("h3",{class:"school-title",children:"\xc9tudes"}),Object(d.jsxs)("div",{class:"resume-item",children:[Object(d.jsx)("h4",{children:"Bac +2 Developpeur Web et mobile (en cours)"}),Object(d.jsx)("h5",{children:"2021-2021"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Wild Code School"})}),Object(d.jsx)("p",{children:"Developpement Web, front-end et back-end. J'ai \xe9tudi\xe9 le React js, le design et la conception de site internet et les syt\xe8mes de gestions de bases de donn\xe9es, stockage de donn\xe9es. React js et Node js avec leur frameworks."})]}),Object(d.jsxs)("div",{class:"resume-item",children:[Object(d.jsx)("h4",{children:"Bac Technicien Syst\xe8me en Num\xe9rique "}),Object(d.jsx)("h5",{children:"2019-2020"}),Object(d.jsx)("p",{children:Object(d.jsx)("em",{children:"Aston Ecole"})}),Object(d.jsx)("p",{children:"Configuration et maintenance de serveurs, d\xe9pannage mat\xe9riel et r\xe9seau, aide \xe0 l'utilisateur, maintenance d'ordinateurs et configuration utilisateur d'outils de travails."})]})]})]})})})]})})};c(31);var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(d.jsx)("h2",{id:"skills",className:"skills",children:" Mes Comp\xe9tences"}),Object(d.jsx)("div",{className:"description-skills",children:"Developpeur Full Stack, React js et Node js"}),Object(d.jsxs)("div",{class:"content-skills",children:[Object(d.jsxs)("div",{class:"card-skills",children:[Object(d.jsx)("div",{class:"icon",children:Object(d.jsx)("i",{class:"material-icons md-36",children:"front_hand"})}),Object(d.jsx)("p",{class:"title",children:"Front-end"}),Object(d.jsx)("p",{class:"text",children:"React js"}),Object(d.jsx)("p",{class:"text",children:"Javascript"}),Object(d.jsx)("p",{class:"text",children:"Css"}),Object(d.jsx)("p",{class:"text",children:"Html"})]}),Object(d.jsxs)("div",{class:"card-skills",children:[Object(d.jsx)("div",{class:"icon",children:Object(d.jsx)("i",{class:"material-icons md-36",children:"back_hand"})}),Object(d.jsx)("p",{class:"title",children:"Back-end"}),Object(d.jsx)("p",{class:"text",children:"Node js"}),Object(d.jsx)("p",{class:"text",children:"Express"}),Object(d.jsx)("p",{class:"text",children:"Mysql"}),Object(d.jsx)("p",{class:"text"})]})]})]})};c(32);var N=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{id:"portfolio",className:"title-portfolio",children:"Portfolio"}),Object(d.jsx)("section",{className:"conteneur-p",children:Object(d.jsxs)("div",{class:"portfolio-container",children:[Object(d.jsx)("input",{className:"input-portfolio",type:"radio",name:"slider",id:"item-1",checked:!0}),Object(d.jsx)("input",{className:"input-portfolio",type:"radio",name:"slider",id:"item-2"}),Object(d.jsx)("input",{className:"input-portfolio",type:"radio",name:"slider",id:"item-3"}),Object(d.jsxs)("div",{className:"portfolio-cards",children:[Object(d.jsx)("label",{class:"portfolio-card",htmlFor:"item-1",id:"song-1",children:Object(d.jsx)("img",{className:"image-portfolio",src:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",alt:"song"})}),Object(d.jsx)("label",{class:"portfolio-card",htmlFor:"item-2",id:"song-2",children:Object(d.jsx)("img",{className:"image-portfolio",src:"https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",alt:"song"})}),Object(d.jsx)("label",{class:"portfolio-card",htmlFor:"item-3",id:"song-3",children:Object(d.jsx)("img",{className:"image-portfolio",src:"https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg",alt:"song"})})]}),Object(d.jsx)("div",{class:"player",children:Object(d.jsx)("div",{class:"upper-part",children:Object(d.jsxs)("div",{class:"info-area",id:"test",children:[Object(d.jsxs)("label",{class:"song-info",id:"song-info-1",children:[Object(d.jsx)("div",{class:"title",children:"Projet 1"}),Object(d.jsx)("div",{class:"sub-line",children:Object(d.jsx)("div",{class:"subtitle",children:"Html, CSS"})})]}),Object(d.jsxs)("label",{class:"song-info",id:"song-info-2",children:[Object(d.jsx)("div",{class:"title",children:"Projet 2"}),Object(d.jsx)("div",{class:"sub-line",children:Object(d.jsx)("div",{class:"subtitle",children:"React js, Javascript"})})]}),Object(d.jsxs)("label",{class:"song-info",id:"song-info-3",children:[Object(d.jsx)("div",{class:"title",children:"Projet 3"}),Object(d.jsx)("div",{class:"sub-line",children:Object(d.jsx)("div",{class:"subtitle",children:"React js, Node js"})})]})]})})})]})})]})};c(33);var k=function(e){return e.trigger?Object(d.jsx)("div",{className:"popup center",children:Object(d.jsxs)("div",{className:"popup-inner",children:[Object(d.jsx)("div",{className:"icon-contact",children:Object(d.jsx)("i",{className:"check-mark",children:"\u2713"})}),Object(d.jsx)("div",{className:"title-pop",children:Object(d.jsx)("h1",{children:"Successfully send!"})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"description",children:Object(d.jsxs)("p",{children:["We have received your message and we will get back to you within 24 hours. ",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{})," Have you checked our new playlist yet?"]})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"dismiss-btn",children:[Object(d.jsx)("button",{className:"dismiss-popup-btn",onClick:function(){return e.close(!1)},children:"Close"}),e.children]})]})}):""};c(34);var w=function(){var e=Object(l.useState)(!1),s=Object(n.a)(e,2),c=s[0],t=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{id:"contact",className:"contact-title",children:"Contact"}),Object(d.jsx)("div",{className:"contact-text",children:"Sur ce formulaire vous pouvez me contacter je recevrai le message dans ma boite mail. Je r\xe9ponds sous 24h maximum."}),Object(d.jsx)("div",{className:"contact-container",children:Object(d.jsxs)("form",{className:"formContact",onSubmit:function(e){return function(e){e.preventDefault(),t(!0)}(e)},children:[Object(d.jsx)("label",{htmlFor:"label-name",className:"label-name",children:"Name"}),Object(d.jsx)("input",{className:"Name-comment",placeholder:"titre..",required:!0,type:"text"}),Object(d.jsx)("label",{htmlFor:"label-email",className:"label-email",children:"Email"}),Object(d.jsx)("input",{className:"Email-comment",placeholder:"yourmail@mail.com..",required:!0,type:"text"}),Object(d.jsx)("label",{htmlFor:"label-comment",className:"label-comment",children:"Message"}),Object(d.jsx)("textarea",{className:"Message-comment",placeholder:"message..",required:!0,type:"text"}),Object(d.jsxs)("div",{className:"openpopup",children:[Object(d.jsx)("button",{className:"btn-sub-contact",children:"Envoyer"}),Object(d.jsx)("div",{className:"center",children:Object(d.jsx)(k,{trigger:c,close:t})})]})]})})]})};c(35);var y=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"pages",children:[Object(d.jsx)(v,{}),Object(d.jsx)(g,{}),Object(d.jsx)(f,{}),Object(d.jsx)(N,{}),Object(d.jsx)(w,{})]})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(s){var c=s.getCLS,t=s.getFID,i=s.getFCP,n=s.getLCP,l=s.getTTFB;c(e),t(e),i(e),n(e),l(e)}))},E=c(18);c(36);i.a.render(Object(d.jsx)(E.a,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),q()}},[[45,1,2]]]);
//# sourceMappingURL=main.deb7e956.chunk.js.map