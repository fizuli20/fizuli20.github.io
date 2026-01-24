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

// Initialize Tableau embeds (consistent sizing + fixes display:none)
function sizeTableau(viz) {
  const vizElement = viz.querySelector('.tableauViz');
  if (!vizElement) return;

  // Make sure it's visible (your HTML sets display:none)
  vizElement.style.display = 'block';
  vizElement.style.width = '100%';

  const w = viz.offsetWidth || 1000;

  // Keep a stable height so both dashboards look aligned
  // You can tweak these numbers if you want taller/shorter dashboards.
  let h;
  if (w >= 900) h = 720;
  else if (w >= 600) h = 820;
  else h = 950;

  vizElement.style.height = h + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
  const vizElements = document.querySelectorAll('.tableauPlaceholder');

  // Size once on load
  vizElements.forEach(sizeTableau);

  // Size again after a short delay (Tableau loads async; this helps alignment)
  setTimeout(() => vizElements.forEach(sizeTableau), 600);

  // Resize on window resize
  window.addEventListener('resize', () => vizElements.forEach(sizeTableau));
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
