document.addEventListener('DOMContentLoaded', () => {
    const denetimListesi = document.getElementById('denetimListesi');

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const denetimler = [
        { id: 1, tarih: '2024-11-01', ekipman: 'Yangın Söndürücü', bulgular: 'İyi durumda' },
        { id: 2, tarih: '2024-11-05', ekipman: 'Kurtarma Sandalı', bulgular: 'Kurtarma sandalı eksik' },
        { id: 3, tarih: '2024-11-10', ekipman: 'Navigasyon Sistemi', bulgular: 'Güncelleme gerekli' }
    ];

    // Denetimleri listele
    denetimler.forEach(denetim => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>ID:</strong> ${denetim.id} <br>
            <strong>Tarih:</strong> ${denetim.tarih} <br>
            <strong>Ekipman:</strong> ${denetim.ekipman} <br>
            <strong>Bulgular:</strong> ${denetim.bulgular}
        `;
        denetimListesi.appendChild(listItem);
    });
});
