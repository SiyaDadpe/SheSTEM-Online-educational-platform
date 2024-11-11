let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    
    const newTransform = -currentIndex * 100;
    document.querySelector(".carousel-container").style.transform = `translateX(${newTransform}%)`;
}


document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
});


setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

