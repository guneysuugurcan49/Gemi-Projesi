document.addEventListener('DOMContentLoaded', () => {
    const yeniEkipmanButton = document.getElementById('yeniEkipman');
    
    // Yeni Ekipman Ekle butonuna tıklandığında yeni ekipman ekleme sayfasına yönlendir
    yeniEkipmanButton.addEventListener('click', () => {
        window.location.href = 'ekipmanEkle.html';
    });

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const ekipmanlar = [
        { id: 1, adi: 'Yangın Söndürücü', model: 'XYZ-123', seriNumarasi: 'SN-001', uretimTarihi: '2024-01-01', aciklama: 'Yangın söndürücü iyi durumda' },
        { id: 2, adi: 'Kurtarma Sandalı', model: 'ABC-456', seriNumarasi: 'SN-002', uretimTarihi: '2024-02-01', aciklama: 'Kurtarma sandalı eksik' }
    ];

    const ekipmanListesi = document.getElementById('ekipmanListesi');

    // Ekipman kayıtlarını listele
    ekipmanlar.forEach(ekipman => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>ID:</strong> ${ekipman.id} <br>
            <strong>Adı:</strong> ${ekipman.adi} <br>
            <strong>Model:</strong> ${ekipman.model} <br>
            <strong>Seri Numarası:</strong> ${ekipman.seriNumarasi} <br>
            <strong>Üretim Tarihi:</strong> ${ekipman.uretimTarihi} <br>
            <strong>Açıklama:</strong> ${ekipman.aciklama}
        `;
        ekipmanListesi.appendChild(listItem);
    });
});
