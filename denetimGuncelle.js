document.addEventListener('DOMContentLoaded', () => {
    const guncelleForm = document.getElementById('guncelleForm');
    
    guncelleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const denetimId = document.getElementById('denetimId').value;
        const denetimTarihi = document.getElementById('denetimTarihi').value;
        const ekipman = document.getElementById('ekipman').value;
        const bulgular = document.getElementById('bulgular').value;

        // Denetim güncelleme verilerini kontrol edin ve işlemleri burada gerçekleştirin
        console.log('Denetim ID:', denetimId);
        console.log('Denetim Tarihi:', denetimTarihi);
        console.log('Ekipman:', ekipman);
        console.log('Bulgular:', bulgular);

        alert('Denetim başarıyla güncellendi!');

        // Formu temizleyin
        guncelleForm.reset();
    });
});
