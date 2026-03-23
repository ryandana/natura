function checkFadeUp() {
  const elements = document.querySelectorAll('.fade-up');
  const windowBottom = window.scrollY + window.innerHeight;

  elements.forEach(function(elem) {
    const elemTop = elem.getBoundingClientRect().top + window.scrollY;
    if (windowBottom > elemTop + 50) {
      elem.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFadeUp);
document.addEventListener('DOMContentLoaded', checkFadeUp);
