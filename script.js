/* ══════════════════════════════════════════════════════════
   TECH TONIC 2026 — Paper Presentation Scripts
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── Cache DOM elements ──────────────────────────────────
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // ══════════════════════════════════════════════════════════
    //  Scroll-Reveal Animation
    // ══════════════════════════════════════════════════════════
    sections.forEach(section => section.classList.add('animate-in'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    sections.forEach(section => revealObserver.observe(section));

    // ══════════════════════════════════════════════════════════
    //  Active Navigation Highlighting
    // ══════════════════════════════════════════════════════════
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active class to the matching link
                const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(section => navObserver.observe(section));

    // ══════════════════════════════════════════════════════════
    //  Scroll-to-Top Button
    // ══════════════════════════════════════════════════════════
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
