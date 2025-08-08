// Modo escuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Movimento dos balões com scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const balao1 = document.querySelector('.balao1');
  const balao2 = document.querySelector('.balao2');
  const balao3 = document.querySelector('.balao3');
  const balao4 = document.querySelector('.balao4');
  const balao5 = document.querySelector('.balao5');


  balao1.style.transform = `translateY(${scrollY * 0.6}px)`;
  balao2.style.transform = `translateY(${scrollY * 0.5}px)`;
  balao3.style.transform = `translateY(-${scrollY * 0.4}px)`;
  balao4.style.transform = `translatey(-${scrollY * 0.6}px)`;
  balao5.style.transform = `translatey(${scrollY * 0.8}px)`; // sobe
});
