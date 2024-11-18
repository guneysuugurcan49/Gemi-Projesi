document.addEventListener('DOMContentLoaded', () => {
    const denetimForm = document.getElementById('denetimForm');
    
    denetimForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const denetimTarihi = document.getElementById('denetimTarihi').value;
        const ekipman = document.getElementById('ekipman').value;
        const bulgular = document.getElementById('bulgular').value;

        // Giriş verilerini kontrol edebilir ve işlemleri burada yapabilirsiniz
        console.log('Denetim Tarihi:', denetimTarihi);
        console.log('Ekipman:', ekipman);
        console.log('Bulgular:', bulgular);

        alert('Denetim başarıyla kaydedildi!');

        // Giriş alanlarını temizle
        denetimForm.reset();
    });
});
