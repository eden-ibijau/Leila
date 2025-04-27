document.addEventListener('DOMContentLoaded', function() {
    // Animation pour le titre principal
    const heroTitle = document.querySelector('.hero-content h1');
    
    // Configuration
    const maxUnderlineWidth = 100;
    const scrollThreshold = window.innerHeight * 0.01;

    function updateUnderline() {
        if (heroTitle) {
            const scrollPosition = window.scrollY;
            let lineWidth = Math.min(maxUnderlineWidth, Math.max(0, (scrollPosition / scrollThreshold) * 100));
            heroTitle.style.setProperty('--underline-width', `${lineWidth}%`);
        }
    }

    function onScroll() {
        updateUnderline();
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    updateUnderline();

    // Gestion du header au scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Ajoute la classe scrolled quand on descend un peu
        if (scrollTop > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Cache/montre le header selon la direction du scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scroll vers le bas
            header.classList.add('header-hidden');
        } else {
            // Scroll vers le haut
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });

    // Animation des éléments au scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const serviceCards = document.querySelectorAll('.service-card');
    const qualificationCards = document.querySelectorAll('.qualification-card');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
        
        serviceCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardVisible = 150;
            
            if (cardTop < window.innerHeight - cardVisible) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100); // Délai progressif pour chaque carte
            }
        });
        
        // Animation des cartes de qualification avec délai progressif
        qualificationCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardVisible = 150;
            
            if (cardTop < window.innerHeight - cardVisible) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150); // Délai progressif pour chaque carte
            }
        });
        
        // Animation des éléments d'expérience avec délai progressif
        experienceItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const itemVisible = 150;
            
            if (itemTop < window.innerHeight - itemVisible) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 150); // Délai progressif pour chaque élément
            }
        });
    };
    
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Déclenche l'animation au chargement initial
});