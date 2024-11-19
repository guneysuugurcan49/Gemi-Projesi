document.addEventListener('DOMContentLoaded', () => {
    const silForm = document.getElementById('silForm');
    const ekipmanListesi = document.getElementById('ekipmanListesi');

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const ekipmanlar = [
        { id: 1, adi: 'Yangın Söndürücü', model: 'XYZ-123', seriNumarasi: 'SN-001', uretimTarihi: '2024-01-01', aciklama: 'Yangın söndürücü iyi durumda' },
        { id: 2, adi: 'Kurtarma Sandalı', model: 'ABC-456', seriNumarasi: 'SN-002', uretimTarihi: '2024-02-01', aciklama: 'Kurtarma sandalı eksik' }
    ];

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

    silForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const ekipmanId = document.getElementById('ekipmanId').value;

        // Ekipman silme işlemlerini burada gerçekleştirin
        console.log('Ekipman ID:', ekipmanId);

        // Gerçek bir uygulamada, burada API çağrısı yaparak ekipmanı veri tabanından silebilirsiniz.
        // Örneğin: fetch('/api/deleteEkipman', { method: 'POST', body: JSON.stringify({ ekipmanId }) })

        alert('Ekipman başarıyla silindi!');

        // Formu temizleyin
        silForm.reset();
    });
});
