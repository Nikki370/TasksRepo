
// Smooth scroll helper used by inline buttons
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[type=text]')?.value.trim() || '';
      const email = form.querySelector('input[type=email]')?.value.trim() || '';
      const message = form.querySelector('textarea')?.value.trim() || '';

      if (!name || !email || !message) {
        alert('Please fill all required fields.');
        return;
      }

      // Basic email pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach((a) => a.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href='#${sec.id}']`);
        if (link) link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
  });
});
