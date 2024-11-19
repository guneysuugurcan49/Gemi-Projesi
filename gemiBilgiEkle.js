document.addEventListener('DOMContentLoaded', () => {
    const gemiForm = document.getElementById('gemiForm');
    
    gemiForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const imoNumarasi = document.getElementById('imoNumarasi').value;
        const bayrakDevleti = document.getElementById('bayrakDevleti').value;
        const sahipBilgileri = document.getElementById('sahipBilgileri').value;
        const gemiTipi = document.getElementById('gemiTipi').value;

        // Gemi bilgilerini kontrol edin ve işlemleri burada gerçekleştirin
        console.log('IMO Numarası:', imoNumarasi);
        console.log('Bayrak Devleti:', bayrakDevleti);
        console.log('Sahip Bilgileri:', sahipBilgileri);
        console.log('Gemi Tipi:', gemiTipi);

        alert('Gemi bilgileri başarıyla kaydedildi!');

        // Formu temizleyin
        gemiForm.reset();
    });
});
