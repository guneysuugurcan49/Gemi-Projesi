document.addEventListener('DOMContentLoaded', () => {
    const guncelleForm = document.getElementById('guncelleForm');
    
    guncelleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const gemiId = document.getElementById('gemiId').value;
        const imoNumarasi = document.getElementById('imoNumarasi').value;
        const bayrakDevleti = document.getElementById('bayrakDevleti').value;
        const sahipBilgileri = document.getElementById('sahipBilgileri').value;
        const gemiTipi = document.getElementById('gemiTipi').value;

        // Gemi güncelleme verilerini kontrol edin ve işlemleri burada gerçekleştirin
        console.log('Gemi ID:', gemiId);
        console.log('IMO Numarası:', imoNumarasi);
        console.log('Bayrak Devleti:', bayrakDevleti);
        console.log('Sahip Bilgileri:', sahipBilgileri);
        console.log('Gemi Tipi:', gemiTipi);

        alert('Gemi bilgileri başarıyla güncellendi!');

        // Formu temizleyin
        guncelleForm.reset();
    });
});
