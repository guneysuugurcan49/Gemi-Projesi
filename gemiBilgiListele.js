document.addEventListener('DOMContentLoaded', () => {
    const yeniGemiButton = document.getElementById('yeniGemi');
    
    // Yeni Gemi Ekle butonuna tıklandığında yeni gemi ekleme sayfasına yönlendir
    yeniGemiButton.addEventListener('click', () => {
        window.location.href = 'gemiBilgiEkle.html';
    });

    // Örnek veriler - gerçek veriler bir veri tabanından veya API'den alınabilir
    const gemiler = [
        { id: 1, imoNumarasi: '1234567', bayrakDevleti: 'Türkiye', sahipBilgileri: 'Sahip A', gemiTipi: 'Yük Gemisi' },
        { id: 2, imoNumarasi: '2345678', bayrakDevleti: 'Yunanistan', sahipBilgileri: 'Sahip B', gemiTipi: 'Yolcu Gemisi' }
    ];

    const gemiListesi = document.getElementById('gemiListesi');

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
});
