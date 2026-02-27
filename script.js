document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.innerHTML = menu.classList.contains('active')
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // Fake newsletter submit
    document.querySelector('.newsletter-form')?.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! 🌱 You’ve joined our green community.');
        e.target.reset();
    });
});


let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.slides img');

slides.style.width = `${images.length * 100}%`; // set slides width
images.forEach((img) => {
    img.style.width = `${100 / images.length}%`; // set image width
});

setInterval(() => {
    slideIndex++;
    if (slideIndex >= dots.length) slideIndex = 0;
    updateSlider();
}, 3000);

function updateSlider() {
    slides.style.transform = `translateX(-${slideIndex * 100 / images.length}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}
