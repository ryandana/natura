document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.gallery-img').forEach(function(img) {
    img.addEventListener('click', function() {
      const src = this.getAttribute('src');
      const desc = this.dataset.desc || this.getAttribute('alt');

      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxDesc = document.getElementById('lightboxDesc');
      if (lightboxImg) lightboxImg.setAttribute('src', src);
      if (lightboxDesc) lightboxDesc.textContent = desc;

      const lightbox = document.getElementById('lightbox');
      if (lightbox) {
        lightbox.style.display = 'flex';
        lightbox.style.opacity = '0';
        void lightbox.offsetWidth; // reset reflow
        lightbox.style.transition = 'opacity 0.3s ease';
        lightbox.style.opacity = '1';
      }
    });
  });

  const closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.style.opacity = '0';
      setTimeout(() => { lightbox.style.display = 'none'; }, 300);
    }
  };

  const lightboxCloseBtn = document.getElementById('lightboxClose');
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target.id === 'lightbox') {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});
