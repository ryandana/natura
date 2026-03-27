// Fungsi untuk mengecek elemen yang akan muncul dengan efek fade-up saat scroll
function checkFadeUp() {
  const elements = document.querySelectorAll('.fade-up');
  const windowBottom = window.scrollY + window.innerHeight;

  elements.forEach(function(elem) {
    const elemTop = elem.getBoundingClientRect().top + window.scrollY;
    // Jika posisi bawah jendela sudah melewati posisi atas elemen (ditambah sedikit offset), maka tampilkan
    if (windowBottom > elemTop + 50) {
      elem.classList.add('show');
    }
  });
}

// Jalankan fungsi saat discroll dan saat halaman pertama kali diload
window.addEventListener('scroll', checkFadeUp);
document.addEventListener('DOMContentLoaded', checkFadeUp);
