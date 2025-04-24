const toggle = document.querySelector('.menu-toggle');
const menu   = document.querySelector('header .flex ul');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu   = document.querySelector('header .container .flex ul');
    if (!toggle || !menu) return;
    menu.style.overflow = 'hidden';
    menu.style.maxHeight = '0';
    menu.style.opacity = '0';
    menu.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
    toggle.addEventListener('click', () => {
      const isCollapsed = menu.style.maxHeight === '0px' || menu.style.maxHeight === '';
      const fullHeight = menu.scrollHeight + 'px';
  
      if (isCollapsed) {
        menu.style.maxHeight = fullHeight;
        menu.style.opacity = '1';
      } else {
        menu.style.opacity = '0';
        menu.style.maxHeight = '0';
      }
    });
  });
  
  