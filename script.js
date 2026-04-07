document.addEventListener('DOMContentLoaded', () => {
    // Scroll Effekt für die Navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = '#000';
            nav.style.padding = '10px 0';
        } else {
            nav.style.background = 'rgba(0,0,0,0.9)';
            nav.style.padding = '0';
        }
    });

    // Sanftes Scrollen zu den Ankern
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


