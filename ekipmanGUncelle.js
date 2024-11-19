document.addEventListener('DOMContentLoaded', () => {
    const guncelleForm = document.getElementById('guncelleForm');
    
    guncelleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const ekipmanId = document.getElementById('ekipmanId').value;
        const ekipmanAdi = document.getElementById('ekipmanAdi').value;
        const model = document.getElementById('model').value;
        const seriNumarasi = document.getElementById('seriNumarasi').value;
        const uretimTarihi = document.getElementById('uretimTarihi').value;
        const aciklama = document.getElementById('aciklama').value;

        // Ekipman güncelleme verilerini kontrol edin ve işlemleri burada gerçekleştirin
        console.log('Ekipman ID:', ekipmanId);
        console.log('Ekipman Adı:', ekipmanAdi);
        console.log('Model:', model);
        console.log('Seri Numarası:', seriNumarasi);
        console.log('Üretim Tarihi:', uretimTarihi);
        console.log('Açıklama:', aciklama);

        alert('Ekipman başarıyla güncellendi!');

        // Formu temizleyin
        guncelleForm.reset();
    });
});
