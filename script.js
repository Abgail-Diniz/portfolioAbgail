let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrosel-item');
    const textElement = document.getElementById('carroselText');
    
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carrosel-inner').style.transform = `translateX(${offset}%)`;
    
    const currentSlide = slides[currentIndex];
    textElement.textContent = currentSlide.getAttribute('data-text');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicializa a exibição do primeiro slide
showSlide(currentIndex);
