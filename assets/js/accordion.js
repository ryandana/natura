document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua elemen header akordeon yang ada di dalam elemen dengan ID 'accordion'
  document.querySelectorAll('#accordion .accordion-header').forEach(function(header) {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling; // Konten yang tepat berada setelah header
      const icon = this.querySelector('i'); // Icon yang ada di dalam header
      const headerSpan = this.querySelector('span'); // Teks (span) yang ada di dalam header

      // Jika konten sedang terbuka, maka tutup
      if (content.classList.contains('open')) {
        content.classList.remove('open');
        content.style.maxHeight = '0';
        if (icon) icon.classList.remove('rotate-180');
        if (headerSpan) headerSpan.classList.remove('text-primary');
      } else {
        // Tutup semua konten akordeon yang lain terlebih dahulu
        document.querySelectorAll('#accordion .accordion-content').forEach(function(c) {
          c.classList.remove('open');
          c.style.maxHeight = '0';
        });
        document.querySelectorAll('#accordion .accordion-header i').forEach(function(i) {
          i.classList.remove('rotate-180');
        });
        document.querySelectorAll('#accordion .accordion-header span').forEach(function(s) {
          s.classList.remove('text-primary');
        });

        // Buka konten yang dipilih
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.classList.add('rotate-180');
        if (headerSpan) headerSpan.classList.add('text-primary');
      }
    });
  });
});
