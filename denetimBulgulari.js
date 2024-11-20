document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const liste = document.getElementById('liste');

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const bulgular = [];

    // Bulguları listele
    function listeleBulgular() {
        liste.innerHTML = '';
        bulgular.forEach(bulgu => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Gemi ID:</strong> ${bulgu.gemiId} <br>
                <strong>Denetim Türü:</strong> ${bulgu.tur} <br>
                <strong>Tarih:</strong> ${bulgu.tarih} <br>
                <strong>Bulgu Detayları:</strong> ${bulgu.detaylar} <br>
                <strong>Bulgu Ciddiyeti:</strong> ${bulgu.ciddiyet} <br>
                <button onclick="düzenleBulgu(${bulgu.id})">Düzenle</button>
            `;
            liste.appendChild(listItem);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const gemiId = document.getElementById('gemiId').value;
        const denetimTarihi = document.getElementById('denetimTarihi').value;
        const denetimTuru = document.getElementById('denetimTuru').value;
        const bulguDetaylari = document.getElementById('bulguDetaylari').value;
        const bulguCiddiyeti = document.getElementById('bulguCiddiyeti').value;

        bulgular.push({ id: bulgular.length + 1, gemiId, tur: denetimTuru, tarih: denetimTarihi, detaylar: bulguDetaylari, ciddiyet: bulguCiddiyeti });
        listeleBulgular();

        // Formu temizle
        form.reset();

        alert('Bulgu kaydı başarıyla eklendi!');
    });
});

function düzenleBulgu(bulguId) {
    const bulgu = bulgular.find(b => b.id === bulguId);
    if (bulgu) {
        document.getElementById('gemiId').value = bulgu.gemiId;
        document.getElementById('denetimTarihi').value = bulgu.tarih;
        document.getElementById('denetimTuru').value = bulgu.tur;
        document.getElementById('bulguDetaylari').value = bulgu.detaylar;
        document.getElementById('bulguCiddiyeti').value = bulgu.ciddiyet;
    }
}
