document.addEventListener('DOMContentLoaded', function () {
  // Tambahkan event listener untuk setiap gambar galeri agar bisa dibuka di lightbox
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
        // Tampilkan lightbox dengan efek transisi opacity
        lightbox.style.display = 'flex';
        lightbox.style.opacity = '0';
        void lightbox.offsetWidth; // Memicu reflow agar transisi berjalan
        lightbox.style.transition = 'opacity 0.3s ease';
        lightbox.style.opacity = '1';
      }
    });
  });

  // Fungsi untuk menutup lightbox
  const closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.style.opacity = '0';
      // Sembunyikan elemen setelah transisi selesai (300ms)
      setTimeout(() => { lightbox.style.display = 'none'; }, 300);
    }
  };

  const lightboxCloseBtn = document.getElementById('lightboxClose');
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);

  // Tutup lightbox jika mengklik di luar gambar
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target.id === 'lightbox') {
        closeLightbox();
      }
    });
  }

  // Tutup lightbox jika menekan tombol Escape (ESC) pada keyboard
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});
