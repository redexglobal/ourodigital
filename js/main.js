/* Ouro Digital — main.js */

/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', window.scrollY > 40);
}, { passive: true });

/* ── MOBILE MENU ── */
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('navMenu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  document.body.style.overflow = '';
}));

/* ── REVEAL ON SCROLL ── */
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (!e.isIntersecting) return;
    const delay = parseInt(e.target.dataset.delay || 0);
    setTimeout(() => e.target.classList.add('visible'), delay);
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* ── STAGGER CHILD CARDS ── */
const staggerParents = document.querySelectorAll('.sol-grid, .port-grid, .plans-wrap, .proc-steps');
const staggerObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const cards = entry.target.querySelectorAll('[data-reveal]');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 80);
    });
    staggerObs.unobserve(entry.target);
  });
}, { threshold: 0.08 });
staggerParents.forEach(p => staggerObs.observe(p));

/* ── ACTIVE NAV LINK ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const activeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.remove('active'));
    const link = document.querySelector(`.nav-menu a[href="#${e.target.id}"]`);
    if (link) link.classList.add('active');
  });
}, { threshold: 0.4 });
sections.forEach(s => activeObs.observe(s));
