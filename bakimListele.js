document.addEventListener('DOMContentLoaded', () => {
    const yeniBakimButton = document.getElementById('yeniBakim');
    
    // Yeni Bakım Ekle butonuna tıklandığında yeni bakım ekleme sayfasına yönlendir
    yeniBakimButton.addEventListener('click', () => {
        window.location.href = 'bakimEkle.html';
    });

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const bakimlar = [
        { id: 1, tarih: '2024-11-01', ekipman: 'Motor', detaylar: 'Motor yağı değiştirildi' },
        { id: 2, tarih: '2024-11-05', ekipman: 'Jeneratör', detaylar: 'Filtreler temizlendi' }
    ];

    const bakimListesi = document.getElementById('bakimListesi');

    // Bakım kayıtlarını listele
    bakimlar.forEach(bakim => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>ID:</strong> ${bakim.id} <br>
            <strong>Tarih:</strong> ${bakim.tarih} <br>
            <strong>Ekipman:</strong> ${bakim.ekipman} <br>
            <strong>Detaylar:</strong> ${bakim.detaylar}
        `;
        bakimListesi.appendChild(listItem);
    });
});
