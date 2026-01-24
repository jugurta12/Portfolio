document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel").forEach(carousel => {
        const imagesContainer = carousel.querySelector(".carousel-images");
        const images = carousel.querySelectorAll("img");
        const prevBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");

        let index = 0;

        function updateCarousel() {
            imagesContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            updateCarousel();
        });

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % images.length;
            updateCarousel();
        });
    });
});

// Sélectionne tous les liens qui commencent par #
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // empêche le jump direct

    const targetId = this.getAttribute('href'); // récupère l'ancre
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // le smooth scroll
        block: 'start'      // scroll jusqu'en haut de l'élément
      });
    }
  });
});
