document.addEventListener('DOMContentLoaded', () => {
    const silForm = document.getElementById('silForm');
    const bakimListesi = document.getElementById('bakimListesi');

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const bakimlar = [
        { id: 1, tarih: '2024-11-01', ekipman: 'Motor', detaylar: 'Motor yağı değiştirildi' },
        { id: 2, tarih: '2024-11-05', ekipman: 'Jeneratör', detaylar: 'Filtreler temizlendi' }
    ];

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

    silForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const bakimId = document.getElementById('bakimId').value;

        // Bakım silme işlemlerini burada gerçekleştirin
        console.log('Bakım ID:', bakimId);

        // Gerçek bir uygulamada, burada API çağrısı yaparak bakım kaydını veri tabanından silebilirsiniz.
        // Örneğin: fetch('/api/deleteBakim', { method: 'POST', body: JSON.stringify({ bakimId }) })

        alert('Bakım kaydı başarıyla silindi!');

        // Formu temizleyin
        silForm.reset();
    });
});
