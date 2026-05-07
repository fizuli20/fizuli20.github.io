/* =================================================================
   Fizuli Hasanov — Portfolio interactions
   ================================================================= */

(() => {
    'use strict';

    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Loader ---------- */
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => loader.classList.add('done'), 1200);
        }
    });

    /* ---------- Custom cursor + spotlight ---------- */
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const spotlight = document.querySelector('.bg-spotlight');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let spotX = mouseX;
    let spotY = mouseY;

    if (!isCoarse) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dot) {
                dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            }
        });
    }

    function tick() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        spotX += (mouseX - spotX) * 0.06;
        spotY += (mouseY - spotY) * 0.06;
        if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        if (spotlight) spotlight.style.transform = `translate(${spotX}px, ${spotY}px) translate(-50%, -50%)`;
        requestAnimationFrame(tick);
    }
    if (!prefersReduced) requestAnimationFrame(tick);

    // Hover state: enlarge cursor on links/buttons
    document.querySelectorAll('a, button, [data-magnetic], [data-tilt]').forEach((el) => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    /* ---------- Scroll progress + navbar state ---------- */
    const navbar = document.getElementById('navbar');
    const progress = document.querySelector('.scroll-progress');

    function onScroll() {
        const sc = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (sc / max) * 100 : 0;
        if (progress) progress.style.width = pct + '%';
        if (navbar) navbar.classList.toggle('scrolled', sc > 30);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Active section highlight in nav ---------- */
    const navAnchors = document.querySelectorAll('.nav-links a');
    const sections = ['work', 'experience', 'skills', 'awards']
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navAnchors.forEach((a) => {
                        a.classList.toggle('active', a.dataset.section === id);
                    });
                }
            });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => navObserver.observe(s));

    /* ---------- Reveal on scroll ---------- */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    /* ---------- Smooth scroll (accounting for nav height) ---------- */
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const navH = navbar ? navbar.offsetHeight + 12 : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top, behavior: 'smooth' });
            // Close mobile menu
            document.body.classList.remove('menu-open');
        });
    });

    /* ---------- Mobile menu toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }

    /* ---------- Magnetic buttons ---------- */
    if (!isCoarse && !prefersReduced) {
        document.querySelectorAll('[data-magnetic]').forEach((el) => {
            const strength = 0.25;
            el.addEventListener('mousemove', (e) => {
                const r = el.getBoundingClientRect();
                const x = e.clientX - (r.left + r.width / 2);
                const y = e.clientY - (r.top + r.height / 2);
                el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0,0)';
            });
        });
    }

    /* ---------- Bento glow follow + subtle tilt ---------- */
    if (!isCoarse && !prefersReduced) {
        document.querySelectorAll('[data-tilt]').forEach((el) => {
            el.addEventListener('mousemove', (e) => {
                const r = el.getBoundingClientRect();
                const mx = ((e.clientX - r.left) / r.width) * 100;
                const my = ((e.clientY - r.top) / r.height) * 100;
                el.style.setProperty('--mx', mx + '%');
                el.style.setProperty('--my', my + '%');
            });
        });
    }

    /* ---------- Text scramble on hero load ---------- */
    if (!prefersReduced) {
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        const scrambleEls = document.querySelectorAll('[data-scramble]');

        scrambleEls.forEach((el, idx) => {
            const finalText = el.dataset.scramble;
            const startDelay = 600 + idx * 80;

            setTimeout(() => {
                let frame = 0;
                const duration = 18; // frames
                const original = finalText;
                const len = original.length;

                const interval = setInterval(() => {
                    let out = '';
                    for (let i = 0; i < len; i++) {
                        if (frame > duration * (i / len)) {
                            out += original[i];
                        } else if (original[i] === ' ') {
                            out += ' ';
                        } else {
                            out += chars[Math.floor(Math.random() * chars.length)];
                        }
                    }
                    el.textContent = out;
                    frame++;
                    if (frame > duration + 2) {
                        clearInterval(interval);
                        el.textContent = original;
                    }
                }, 35);
            }, startDelay);
        });
    }

    /* ---------- Local time in footer ---------- */
    const timeEl = document.getElementById('localTime');
    function updateTime() {
        if (!timeEl) return;
        try {
            const now = new Date();
            const fmt = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Asia/Baku',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).format(now);
            timeEl.textContent = `BAKU · ${fmt}`;
        } catch {
            timeEl.textContent = '';
        }
    }
    updateTime();
    setInterval(updateTime, 1000);

    /* ---------- Dynamic theme-color shift on scroll past hero ---------- */
    // (subtle: keeps mobile chrome bar in sync with bg)
})();
