document.addEventListener('DOMContentLoaded', () => {
    const guncelleForm = document.getElementById('guncelleForm');
    
    guncelleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const bakimId = document.getElementById('bakimId').value;
        const bakimTarihi = document.getElementById('bakimTarihi').value;
        const ekipman = document.getElementById('ekipman').value;
        const bakimDetaylari = document.getElementById('bakimDetaylari').value;

        // Bakım güncelleme verilerini kontrol edin ve işlemleri burada gerçekleştirin
        console.log('Bakım ID:', bakimId);
        console.log('Bakım Tarihi:', bakimTarihi);
        console.log('Ekipman:', ekipman);
        console.log('Bakım Detayları:', bakimDetaylari);

        alert('Bakım kaydı başarıyla güncellendi!');

        // Formu temizleyin
        guncelleForm.reset();
    });
});
