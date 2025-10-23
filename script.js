let leBanner = document.getElementById("banner");
console.log(leBanner);
let leftSpan = document.createElement("span");
leftSpan.setAttribute("id", "leftspan");
leBanner.appendChild(leftSpan);
console.log(leftspan);
let rightSpan = document.createElement("span");
rightSpan.setAttribute("id", "rightspan");
leBanner.appendChild(rightSpan);
console.log(rightspan);
// Flèches ajoutées ci dessus

//  Début mission interaction de fleche en cours d edition

//   creation des objets sliders
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];  

// Sélection des éléments du DOM
const dots = document.querySelectorAll(".dot");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// Fonction pour mettre à jour l'affichage
function updateSlide(index) {
  // Met à jour l'image
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  // Met à jour le texte
  bannerText.innerHTML = slides[index].tagLine;

  // Met à jour les classes des dots
  dots.forEach(dot => dot.classList.remove("dot_selected"));
  dots[index].classList.add("dot_selected");
}

// Ajout des écouteurs d'événements sur chaque dot
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateSlide(index);
  });
});
