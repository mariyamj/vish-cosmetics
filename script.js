document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    AOS.init({ duration: 1200, once: true });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // 3D COVER FLOW LOGIC
    const items = document.querySelectorAll('.carousel-item');
    const nextBtn = document.querySelector('.next-edge');
    const prevBtn = document.querySelector('.prev-edge');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, i) => {
            item.classList.remove('active', 'prev', 'next');
            
            if (i === currentIndex) {
                item.classList.add('active');
            } else if (i === (currentIndex - 1 + items.length) % items.length) {
                item.classList.add('prev');
            } else if (i === (currentIndex + 1) % items.length) {
                item.classList.add('next');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    updateCarousel();
});