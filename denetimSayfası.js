document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const liste = document.getElementById('liste');

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const denetimler = [
        { gemiId: 1, tur: 'Yangın', tarih: '2024-11-01', detaylar: 'Yangın söndürücü kontrolü yapıldı.' },
        { gemiId: 2, tur: 'Kurtarma', tarih: '2024-11-05', detaylar: 'Kurtarma sandalı kontrol edildi.' }
    ];

    // Denetim kayıtlarını listele
    function listeleDenetimler() {
        liste.innerHTML = '';
        denetimler.forEach(denetim => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Gemi ID:</strong> ${denetim.gemiId} <br>
                <strong>Denetim Türü:</strong> ${denetim.tur} <br>
                <strong>Tarih:</strong> ${denetim.tarih} <br>
                <strong>Detaylar:</strong> ${denetim.detaylar}
            `;
            liste.appendChild(listItem);
        });
    }

    listeleDenetimler();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const gemiId = document.getElementById('gemiId').value;
        const denetimTarihi = document.getElementById('denetimTarihi').value;
        const denetimDetaylari = document.getElementById('denetimDetaylari').value;
        const denetimTuru = document.getElementById('denetimTuru').value;

        // Yeni denetim kaydını listeye ekleyin
        denetimler.push({ gemiId, tur: denetimTuru, tarih: denetimTarihi, detaylar: denetimDetaylari });
        listeleDenetimler();

        // Formu temizle
        form.reset();

        alert('Denetim kaydı başarıyla eklendi!');
    });
});
