document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        // Kontrol popup profil di navbar
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const popup = document.getElementById('profilePopup');
            const arrow = document.getElementById('profileArrow');
            
            if (popup && popup.classList.contains('opacity-0')) {
                // Tampilkan popup
                popup.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                popup.classList.add('opacity-100', 'visible', 'translate-y-0');
                if (arrow) arrow.classList.add('rotate-180');
            } else if (popup) {
                // Sembunyikan popup
                popup.classList.remove('opacity-100', 'visible', 'translate-y-0');
                popup.classList.add('opacity-0', 'invisible', 'translate-y-2');
                if (arrow) arrow.classList.remove('rotate-180');
            }
        });
    }

    // Tutup popup profil jika klik di luar area profil
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('profilePopup');
        const arrow = document.getElementById('profileArrow');
        if (popup && !e.target.closest('#profileBtn') && !e.target.closest('#profilePopup')) {
            popup.classList.remove('opacity-100', 'visible', 'translate-y-0');
            popup.classList.add('opacity-0', 'invisible', 'translate-y-2');
            if (arrow) arrow.classList.remove('rotate-180');
        }
    });

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        // Kontrol menu mobile (hamburger menu)
        mobileMenuBtn.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburgerIcon = document.getElementById('hamburgerIcon');
            const closeIcon = document.getElementById('closeIcon');
            
            if (mobileMenu && mobileMenu.classList.contains('translate-x-full')) {
                // Buka menu mobile
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('opacity-100', 'scale-100');
                    hamburgerIcon.classList.add('opacity-0', 'scale-0');
                }
                if (closeIcon) {
                    closeIcon.classList.remove('opacity-0', 'scale-0');
                    closeIcon.classList.add('opacity-100', 'scale-100');
                }
                document.body.classList.add('overflow-hidden'); // Mencegah scrolling saat menu terbuka
            } else if (mobileMenu) {
                // Tutup menu mobile
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('opacity-0', 'scale-0');
                    hamburgerIcon.classList.add('opacity-100', 'scale-100');
                }
                if (closeIcon) {
                    closeIcon.classList.remove('opacity-100', 'scale-100');
                    closeIcon.classList.add('opacity-0', 'scale-0');
                }
                document.body.classList.remove('overflow-hidden');
            }
        });
    }

    const closeMobileMenu = document.getElementById('closeMobileMenu');
    if (closeMobileMenu) {
        // Tombol khusus untuk menutup menu mobile
        closeMobileMenu.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
            }
            const hamburgerIcon = document.getElementById('hamburgerIcon');
            if (hamburgerIcon) {
                hamburgerIcon.classList.remove('opacity-0', 'scale-0');
                hamburgerIcon.classList.add('opacity-100', 'scale-100');
            }
            const closeIcon = document.getElementById('closeIcon');
            if (closeIcon) {
                closeIcon.classList.remove('opacity-100', 'scale-100');
                closeIcon.classList.add('opacity-0', 'scale-0');
            }
            document.body.classList.remove('overflow-hidden');
        });
    }

    // Tutup menu mobile jika salah satu link di dalamnya diklik
    document.querySelectorAll('#mobileMenu a, #mobileMenu button').forEach(function(item) {
        item.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
            }
            const hamburgerIcon = document.getElementById('hamburgerIcon');
            if (hamburgerIcon) {
                hamburgerIcon.classList.remove('opacity-0', 'scale-0');
                hamburgerIcon.classList.add('opacity-100', 'scale-100');
            }
            const closeIcon = document.getElementById('closeIcon');
            if (closeIcon) {
                closeIcon.classList.remove('opacity-100', 'scale-100');
                closeIcon.classList.add('opacity-0', 'scale-0');
            }
            document.body.classList.remove('overflow-hidden');
        });
    });
});