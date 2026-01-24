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


const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'     
      });
    }
  });
});


const slideElements = document.querySelectorAll('.desc, .lien, .nom, .projets, .projets2, .contacts, .contactsv, .contacts2, .skills-menu');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { 
      entry.target.classList.add('active');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.1 }); 

slideElements.forEach(el => observer.observe(el));
