// Flèches ajoutées ci dessus

//  Début mission interaction de fleche en cours d edition

//   creation des objets sliders
const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

const leBanner = document.querySelector(".banner-img");
const paragraphe = document.querySelector(".banner-img + p");

// 🔹 On part du premier slide
let counter = 0;

// 🔹 Initialisation correcte
leBanner.src = `./assets/images/slideshow/${slides[counter].image}`;
paragraphe.innerHTML = slides[counter].tagLine;


  function MajSlider() {
  // Met à jour l'image
  leBanner.src = `./assets/images/slideshow/${slides[counter].image}`;
  
  // Met à jour le texte
  paragraphe.innerHTML = slides[counter].tagLine;

  // Met à jour les dots
  dots.forEach(d => d.classList.remove("dot_selected"));
  dots[counter].classList.add("dot_selected");
}



//  Attribution counter flèche droite
arrow_right.addEventListener("click", (e) => {
  counter++; // d'abord on avance
  if (counter > slides.length - 1) {
    counter = 0; // on revient au début
  }
    MajSlider();
    console.log(counter);
});


//  Attribution counter flèche gauche
arrow_left.addEventListener("click", (e) => {
  console.log('target', e);
    counter--; // d'abord on recule
  if (counter < 0) {
    counter = slides.length - 1; // on revient à la fin
  }
    MajSlider();
    console.log(counter);
});

// Recuperation des dots : 

const dots = document.querySelectorAll(".dot");
const counterIded = counter + 1;

dots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    // On retire "dot_selected" de tous les dots
    dots.forEach(d => d.classList.remove("dot_selected"));
    
    // On ajoute "dot_selected" uniquement à celui qu'on vient de cliquer
    e.target.classList.add("dot_selected");
    console.log(e.target, e.target.id );
    
  });
});

// Fonction pour mettre à jour l'affichage

// //   // code de mise à jour de l'image
//   leBanner.src = `./assets/images/slideshow/${slides[index].image}`;
//   // Met à jour le texte
//   tagLine.innerHTML = slides[index].tagLine;






