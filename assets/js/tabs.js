document.addEventListener('DOMContentLoaded', function () {
  const tabs = ['Sejarah', 'Misi', 'Visi', 'TentangKami'];

  // Fungsi untuk mengaktifkan tab berdasarkan nama
  function activateTab(name) {
    if (!tabs.includes(name)) return;
    
    const targetTab = document.getElementById('tab' + name);
    // Jika tab sudah aktif, tidak perlu melakukan apa-apa
    if (targetTab && targetTab.getAttribute('aria-selected') === 'true') return;

    // Reset semua tab dan panel ke kondisi tidak aktif (tersembunyi)
    tabs.forEach((n) => {
      const tab = document.getElementById('tab' + n);
      if (tab) {
        tab.classList.remove('bg-primary', 'text-secondary');
        tab.classList.add('bg-secondary', 'text-primary');
        tab.setAttribute('aria-selected', 'false');
      }

      const panel = document.getElementById('panel' + n);
      if (panel) panel.classList.add('hidden');
    });

    // Aktifkan tab yang dipilih
    if (targetTab) {
      targetTab.classList.add('bg-primary', 'text-secondary');
      targetTab.classList.remove('bg-secondary', 'text-primary');
      targetTab.setAttribute('aria-selected', 'true');
    }

    // Tampilkan panel konten yang sesuai dengan tab yang dipilih
    const panelTarget = document.getElementById('panel' + name);
    if (panelTarget) panelTarget.classList.remove('hidden');
  }

  // Tambahkan event listener untuk setiap tombol tab
  const tabSejarah = document.getElementById('tabSejarah');
  if (tabSejarah) tabSejarah.addEventListener('click', () => activateTab('Sejarah'));

  const tabMisi = document.getElementById('tabMisi');
  if (tabMisi) tabMisi.addEventListener('click', () => activateTab('Misi'));

  const tabVisi = document.getElementById('tabVisi');
  if (tabVisi) tabVisi.addEventListener('click', () => activateTab('Visi'));

  const tabTentangKami = document.getElementById('tabTentangKami');
  if (tabTentangKami) tabTentangKami.addEventListener('click', () => activateTab('TentangKami'));

  // Aktifkan tab 'TentangKami' secara default saat halaman dimuat
  activateTab('TentangKami');
});
