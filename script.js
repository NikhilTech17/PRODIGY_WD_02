function scrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const navbar = document.getElementById('navbar');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

const sections = document.querySelectorAll('section');
const reveal = () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
