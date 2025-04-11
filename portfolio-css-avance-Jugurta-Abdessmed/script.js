document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector(".ul");
  const chap = document.querySelector(".chap");
  const projet = document.getElementById("projet");
  const competencee = document.getElementById("competencee");
  const contact = document.getElementById("contact");

  const container3 = document.querySelector(".container3");
  const container2 = document.querySelector(".container2");
  const container5 = document.querySelector(".container5");

  container3.style.opacity = "0";
  container2.style.opacity = "1";
  container5.style.opacity = "0";

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

  ul.addEventListener("mouseover", () => {
    chap.classList.add("transi");
  });

  ul.addEventListener("mouseout", () => {
    chap.classList.remove("transi");
  });

  projet.addEventListener("click", showProjet);
  competencee.addEventListener("click", showCompetence);
  contact.addEventListener("click", showContact);
});
