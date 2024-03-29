document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--x', e.clientX / window.innerWidth);
  document.body.style.setProperty('--y', e.clientY / window.innerHeight);
})