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
