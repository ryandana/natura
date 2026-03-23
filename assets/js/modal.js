document.addEventListener('DOMContentLoaded', function () {
  const openModalBtns = document.querySelectorAll('#openModal, .openModal');
  const popupModal = document.getElementById('popupModal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (popupModal) {
          popupModal.classList.remove('hidden');
          popupModal.classList.add('flex');
      }
    });
  });

  document.querySelectorAll('button[id="closeModal"], #closeModal').forEach(btn => {
    btn.addEventListener('click', function() {
      if (popupModal) {
          popupModal.classList.add('hidden');
          popupModal.classList.remove('flex');
      }
    });
  });

  if (popupModal) {
      popupModal.addEventListener('click', function (e) {
        if (e.target === this) {
          this.classList.add('hidden');
          this.classList.remove('flex');
        }
      });
  }
});
