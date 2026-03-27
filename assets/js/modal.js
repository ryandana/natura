document.addEventListener('DOMContentLoaded', function () {
  const openModalBtns = document.querySelectorAll('#openModal, .openModal');
  const popupModal = document.getElementById('popupModal');

  // Tambahkan event listener untuk semua tombol yang membuka modal
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (popupModal) {
          popupModal.classList.remove('hidden');
          popupModal.classList.add('flex');
      }
    });
  });

  // Tambahkan event listener untuk semua tombol yang menutup modal
  document.querySelectorAll('button[id="closeModal"], #closeModal').forEach(btn => {
    btn.addEventListener('click', function() {
      if (popupModal) {
          popupModal.classList.add('hidden');
          popupModal.classList.remove('flex');
      }
    });
  });

  // Menutup modal jika area di luar konten modal (overlay) diklik
  if (popupModal) {
      popupModal.addEventListener('click', function (e) {
        if (e.target === this) {
          this.classList.add('hidden');
          this.classList.remove('flex');
        }
      });
  }
});
