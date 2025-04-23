
document.addEventListener('DOMContentLoaded', () => {
  const stats = document.querySelectorAll('.stats .stat');

  stats.forEach(stat => {
    const numberEl = stat.querySelector('.number');
    const target = parseInt(stat.getAttribute('data-target'), 10);
    numberEl.textContent = '0';

    function animateCount(el, to) {
      let count = 0;
      const duration = 1500;
      const stepTime = Math.max(Math.floor(duration / to), 1);
      const timer = setInterval(() => {
        count++;
        el.textContent = count;
        if (count >= to) clearInterval(timer);
      }, stepTime);
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(numberEl, target);
          observer.unobserve(stat);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(stat);
  });
});

