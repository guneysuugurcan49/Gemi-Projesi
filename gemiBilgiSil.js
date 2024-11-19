document.addEventListener('DOMContentLoaded', () => {
    const silForm = document.getElementById('silForm');
    const gemiListesi = document.getElementById('gemiListesi');

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const gemiler = [
        { id: 1, imoNumarasi: '1234567', bayrakDevleti: 'Türkiye', sahipBilgileri: 'Sahip A', gemiTipi: 'Yük Gemisi' },
        { id: 2, imoNumarasi: '2345678', bayrakDevleti: 'Yunanistan', sahipBilgileri: 'Sahip B', gemiTipi: 'Yolcu Gemisi' }
    ];

    // Gemileri listele
    gemiler.forEach(gemi => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>ID:</strong> ${gemi.id} <br>
            <strong>IMO Numarası:</strong> ${gemi.imoNumarasi} <br>
            <strong>Bayrak Devleti:</strong> ${gemi.bayrakDevleti} <br>
            <strong>Sahip Bilgileri:</strong> ${gemi.sahipBilgileri} <br>
            <strong>Gemi Tipi:</strong> ${gemi.gemiTipi}
        `;
        gemiListesi.appendChild(listItem);
    });

    silForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const gemiId = document.getElementById('gemiId').value;

        // Gemi silme işlemlerini burada gerçekleştirin
        console.log('Gemi ID:', gemiId);

        // Gerçek bir uygulamada, burada API çağrısı yaparak gemiyi veri tabanından silebilirsiniz.
        // Örneğin: fetch('/api/deleteGemi', { method: 'POST', body: JSON.stringify({ gemiId }) })

        alert('Gemi bilgisi başarıyla silindi!');

        // Formu temizleyin
        silForm.reset();
    });
});
