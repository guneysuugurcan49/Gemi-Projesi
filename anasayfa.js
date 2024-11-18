document.addEventListener('DOMContentLoaded', () => {
    const yeniDenetimButton = document.getElementById('yeniDenetim');
    const denetimListesi = document.getElementById('denetimListesi');
    const yeniBakimButton = document.getElementById('yeniBakim');
    const bakimListesi = document.getElementById('bakimListesi');
    const yeniEkipmanButton = document.getElementById('yeniEkipman');
    const ekipmanListesi = document.getElementById('ekipmanListesi');

    // Yeni Denetim Ekle
    yeniDenetimButton.addEventListener('click', () => {
        const yeniDenetim = prompt('Denetim bilgisini girin:');
        if (yeniDenetim) {
            const listItem = document.createElement('li');
            listItem.textContent = yeniDenetim;
            denetimListesi.appendChild(listItem);
        }
    });

    // Yeni Bakım Kaydı Ekle
    yeniBakimButton.addEventListener('click', () => {
        const yeniBakim = prompt('Bakım kaydını girin:');
        if (yeniBakim) {
            const listItem = document.createElement('li');
            listItem.textContent = yeniBakim;
            bakimListesi.appendChild(listItem);
        }
    });

    // Yeni Ekipman Ekle
    yeniEkipmanButton.addEventListener('click', () => {
        const yeniEkipman = prompt('Ekipman bilgisini girin:');
        if (yeniEkipman) {
            const listItem = document.createElement('li');
            listItem.textContent = yeniEkipman;
            ekipmanListesi.appendChild(listItem);
        }
    });
});
