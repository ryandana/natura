document.addEventListener('DOMContentLoaded', function () {
    const imageUpload = document.getElementById('imageUpload');
    if (imageUpload) {
        imageUpload.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const previewImage = document.getElementById('previewImage');
                    if (previewImage) previewImage.setAttribute('src', e.target.result);
                    
                    const previewContainer = document.getElementById('previewContainer');
                    if (previewContainer) previewContainer.classList.remove('hidden');
                    
                    // Riset status
                    const aiResultCard = document.getElementById('aiResultCard');
                    const previewText = document.getElementById('previewText');
                    const scannerOverlay = document.getElementById('scannerOverlay');
                    
                    if (aiResultCard) aiResultCard.classList.add('hidden');
                    if (previewText) previewText.classList.add('hidden');
                    if (scannerOverlay) scannerOverlay.classList.remove('hidden');
                    
                    // Simulasi pemindaian AI
                    setTimeout(() => {
                        if (scannerOverlay) scannerOverlay.classList.add('hidden');
                        
                        // Buat data tiruan untuk demo
                        const categories = [
                            { name: "Plastik PET", price: 3000, comp: "95% Plastik PET" },
                            { name: "Kertas & Kardus", price: 2000, comp: "80% Kardus, 20% Kertas HVS" },
                            { name: "Kaca & Logam", price: 5000, comp: "90% Kaleng Aluminium" },
                            { name: "Campuran", price: 2500, comp: "60% Plastik, 40% Kertas" }
                        ];
                        const selected = categories[Math.floor(Math.random() * categories.length)];
                        const weightMock = (Math.random() * 3 + 1).toFixed(1); // Berat acak 1.0 - 4.0 kg
                        const estPrice = Math.floor(weightMock * selected.price);
                        
                        const aiCategory = document.getElementById('aiCategory');
                        const aiComposition = document.getElementById('aiComposition');
                        const aiPrice = document.getElementById('aiPrice');
                        
                        if (aiCategory) aiCategory.textContent = selected.name;
                        if (aiComposition) aiComposition.textContent = selected.comp;
                        if (aiPrice) aiPrice.textContent = `Rp ${estPrice.toLocaleString('id-ID')} (±${weightMock} kg)`;
                        
                        // Tampilkan hasil
                        if (aiResultCard) {
                            aiResultCard.classList.remove('hidden');
                            aiResultCard.style.opacity = '0';
                            aiResultCard.style.display = 'block';
                            void aiResultCard.offsetWidth;
                            aiResultCard.style.transition = 'opacity 0.5s ease-in';
                            aiResultCard.style.opacity = '1';
                        }
                    }, 2500);
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
