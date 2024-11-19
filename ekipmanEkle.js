document.addEventListener('DOMContentLoaded', () => {
    const ekipmanForm = document.getElementById('ekipmanForm');
    
    ekipmanForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const ekipmanAdi = document.getElementById('ekipmanAdi').value;
        const model = document.getElementById('model').value;
        const seriNumarasi = document.getElementById('seriNumarasi').value;
        const uretimTarihi = document.getElementById('uretimTarihi').value;
        const aciklama = document.getElementById('aciklama').value;

        // Yeni ekipman ekleme verilerini kontrol edin ve işlemleri burada gerçekleştirin
        console.log('Ekipman Adı:', ekipmanAdi);
        console.log('Model:', model);
        console.log('Seri Numarası:', seriNumarasi);
        console.log('Üretim Tarihi:', uretimTarihi);
        console.log('Açıklama:', aciklama);

        alert('Ekipman başarıyla eklendi!');

        // Formu temizleyin
        ekipmanForm.reset();
    });
});
