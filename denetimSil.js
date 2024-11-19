document.addEventListener('DOMContentLoaded', () => {
    const silForm = document.getElementById('silForm');
    const denetimListesi = document.getElementById('denetimListesi');

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const denetimler = [
        { id: 1, tarih: '2024-11-01', ekipman: 'Yangın Söndürücü', bulgular: 'İyi durumda' },
        { id: 2, tarih: '2024-11-05', ekipman: 'Kurtarma Sandalı', bulgular: 'Kurtarma sandalı eksik' }
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

    silForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const denetimId = document.getElementById('denetimId').value;

        // Denetim silme işlemlerini burada gerçekleştirin
        console.log('Denetim ID:', denetimId);

        // Gerçek bir uygulamada, burada API çağrısı yaparak denetimi veri tabanından silebilirsiniz.
        // Örneğin: fetch('/api/deleteDenetim', { method: 'POST', body: JSON.stringify({ denetimId }) })

        alert('Denetim başarıyla silindi!');

        // Formu temizleyin
        silForm.reset();
    });
});
