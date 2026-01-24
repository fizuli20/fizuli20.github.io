// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize Tableau visualizations (prevents "shrinks to top-left")
document.addEventListener('DOMContentLoaded', () => {
  const placeholders = document.querySelectorAll('.tableauPlaceholder');

  function resizeOne(ph) {
    const obj = ph.querySelector('object.tableauViz');
    if (!obj) return;

    // IMPORTANT: your HTML has display:none; turn it on
    obj.style.display = 'block';

    // Give the placeholder a real height (not only min-height)
    const w = ph.clientWidth || 1000;

    let h;
    if (w >= 900) h = 720;
    else if (w >= 600) h = 820;
    else h = 950;

    ph.style.height = h + 'px';

    // Size the tableau object (Tableau will replace with iframe, CSS below will handle iframe too)
    obj.style.width = '100%';
    obj.style.height = h + 'px';
  }

  // Initial sizing
  placeholders.forEach(resizeOne);

  // After Tableau finishes loading, size again (common fix)
  setTimeout(() => placeholders.forEach(resizeOne), 800);

  // On resize
  window.addEventListener('resize', () => placeholders.forEach(resizeOne));
});



// Smooth scroll (safe + consistent)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


// Observe all animated elements
document.querySelectorAll('.section-header, .project-card, .dashboard-container, .skill-category, .timeline-item, .cert-card, .contact-info').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
