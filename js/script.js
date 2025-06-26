// Dark Mode Toggle
const themeToggle = document.getElementById('darkModeToggle');
const rootEl = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';

rootEl.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const next = rootEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    rootEl.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile');
    navToggle.classList.toggle('open');
});

// Sticky Navbar Background on Scroll
window.addEventListener('scroll', () => {
    document.querySelector('.navbar')
        .classList.toggle('scrolled', window.scrollY > 80);
});

// Typewriter Effect
const typed = document.getElementById('typed');
const words = ["Front-end Developer", "Design Enthusiast", "Lifelong Learner"];
let wIndex = 0, lIndex = 0, isDeleting = false;

function typeEffect() {
    const current = words[wIndex];
    typed.textContent = current.substring(0, lIndex);

    if (!isDeleting && lIndex < current.length) {
        lIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && lIndex > 0) {
        lIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wIndex = (wIndex + 1) % words.length;
        setTimeout(typeEffect, 1500);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);

// Scroll Reveal Animation (only on sections)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Observe only `<section class="reveal">` elements
document.querySelectorAll('section.reveal').forEach(el => {
    observer.observe(el);
});
