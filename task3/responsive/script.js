const menuBtn = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  mobileNav.hidden = !mobileNav.hidden;
});

mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuBtn.setAttribute('aria-expanded','false');
  });
});

const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if(window.scrollY > 40){
    header.classList.add('shrink');
  } 
  else {
    header.classList.remove('shrink');
  }
});
