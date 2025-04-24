const carousel = document.querySelector('.caroussel');
const slides   = document.querySelector('.slides');
const total    = document.querySelectorAll('.cartes').length;
let   idx      = 0;

document.getElementById('next').onclick = () => { idx = (idx + 1) % total; update(); };
document.getElementById('prev').onclick = () => { idx = (idx - 1 + total) % total; update(); };

function update() {
  const w = carousel.clientWidth;
  slides.style.transform = `translateX(-${idx * w}px)`;
}