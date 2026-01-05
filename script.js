document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Initialize Animate On Scroll
    if (window.AOS) {
        AOS.init({ duration: 1200, once: true, offset: 50 });
    }

    // 3. Navbar Scroll Transformation
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Parallax Background for Hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (window.innerWidth > 1024 && hero) {
            const scroll = window.pageYOffset;
            hero.style.backgroundPositionY = (scroll * 0.45) + 'px';
        }
    });
});