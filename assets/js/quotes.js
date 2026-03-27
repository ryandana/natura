document.addEventListener('DOMContentLoaded', function () {
  // Daftar kutipan (quotes) tentang lingkungan
  const quotes = [
    {
      text: "Alam tidak membutuhkan manusia. Manusia yang membutuhkan alam.",
      author: "David Attenborough",
    },
    {
      text: "Perubahan iklim bukan masalah masa depan. Ini masalah sekarang.",
      author: "Greta Thunberg",
    },
    {
      text: "Satu pohon bisa membuat jutaan napas. Tanamlah satu.",
      author: "Wangari Maathai",
    },
    {
      text: "Lingkungan adalah cerminan dari pilihan kita sehari-hari.",
      author: "Jane Goodall",
    },
  ];

  let currentIndex = 0;

  // Fungsi untuk menampilkan kutipan berdasarkan indeks
  function showQuote(index) {
    const selected = quotes[index];
    const quoteBox = document.getElementById('quote-box');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    if (quoteBox) {
      // Efek transisi pudar (fade) saat mengganti kutipan
      quoteBox.style.transition = 'opacity 0.5s ease';
      quoteBox.style.opacity = '0';
      
      setTimeout(function () {
        if (quoteText) quoteText.textContent = `"${selected.text}"`;
        if (quoteAuthor) quoteAuthor.textContent = `– ${selected.author}`;
        quoteBox.style.opacity = '1';
      }, 500);
    }
  }

  // Tampilkan kutipan pertama saat halaman dimuat
  showQuote(currentIndex);

  // Ganti kutipan secara otomatis setiap 6 detik
  setInterval(() => {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
  }, 6000);
});
