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

// 👉 Flèche droite
arrow_right.addEventListener("click", (e) => {
  counter++; // d'abord on avance
  if (counter > slides.length - 1) {
    counter = 0; // on revient au début
  }
  leBanner.src = `./assets/images/slideshow/${slides[counter].image}`;
  paragraphe.innerHTML = slides[counter].tagLine;
});

// 👉 Flèche gauche
arrow_left.addEventListener("click", (e) => {
  console.log('target', e);
    counter--; // d'abord on recule
  if (counter < 0) {
    counter = slides.length - 1; // on revient à la fin
  }
  leBanner.src = `./assets/images/slideshow/${slides[counter].image}`;
  paragraphe.innerHTML = slides[counter].tagLine;
});

// Fonction pour mettre à jour l'affichage

// function updateSlide(index) {
//   // Met à jour l'image
//   bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
//   // Met à jour le texte
//   bannerText.innerHTML = slides[index].tagLine;

//   // Met à jour les classes des dots
//   dots.forEach((dot) => dot.classList.remove("dot_selected"));
//   dots[index].classList.add("dot_selected");
// }

// Ajout des écouteurs d'événements sur chaque dot

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     updateSlide(index);
//   });
// });
