/* Copyright © 2024 Jose Israel Castro. All rights reserved. */
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionsToAnimate = document.querySelectorAll('.homepage, .aboutmepage, .contact');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.target, entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetClass = this.getAttribute('href').substring(1);
        const targetSection = document.querySelector('.' + targetClass);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
/* Copyright © 2024 Jose Israel Castro. All rights reserved. */