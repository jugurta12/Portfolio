document.addEventListener("DOMContentLoaded", () => {
  // Initialisation des éléments
  const ul = document.querySelector(".ul");
  const chap = document.querySelector(".chap");
  const projet = document.getElementById("projet");
  const competencee = document.getElementById("competencee");
  const contact = document.getElementById("contact");

  const container3 = document.querySelector(".container3");
  const container2 = document.querySelector(".container2");
  const container5 = document.querySelector(".container5");

  // Cacher toutes les sections au départ (opacité 0)
  container3.style.opacity = "0";
  container2.style.opacity = "1";
  container5.style.opacity = "0";

  // Fonction pour afficher container3, cacher container2 et container5
  function showProjet() {
    container3.style.opacity = "0";
    container2.style.opacity = "1";
    container5.style.opacity = "0";
    container3.style.zIndex = "-5";
    container2.style.zIndex = "5";
    container5.style.zIndex = "-5";
    competencee.style.fontWeight = "normal";
    projet.style.fontWeight = "bold";
    contact.style.fontWeight = "normal";
  }

  // Fonction pour afficher container5, cacher container2 et container3
  function showCompetence() {
    container3.style.opacity = "1";
    container2.style.opacity = "0";
    container5.style.opacity = "0";
    container3.style.zIndex = "5";
    container2.style.zIndex = "-5";
    container5.style.zIndex = "-5";
    competencee.style.fontWeight = "bold";
    projet.style.fontWeight = "normal";
    contact.style.fontWeight = "normal";
  }

  // Fonction pour afficher container5, cacher container2 et container3
  function showContact() {
    container3.style.opacity = "0";
    container2.style.opacity = "0";
    container5.style.opacity = "1";
    container3.style.zIndex = "-5";
    container2.style.zIndex = "-5";
    container5.style.zIndex = "5";
    competencee.style.fontWeight = "normal";
    projet.style.fontWeight = "normal";
    contact.style.fontWeight = "bold";
  }

  // Ajouter l'effet de transition pour .chap au survol de .ul
  ul.addEventListener("mouseover", () => {
    chap.classList.add("transi");
    console.log("La souris est sur l'élément .ul 🐭");
  });

  ul.addEventListener("mouseout", () => {
    chap.classList.remove("transi");
  });

  // Événements pour les clics
  projet.addEventListener("click", showProjet);
  competencee.addEventListener("click", showCompetence);
  contact.addEventListener("click", showContact);
});
