document.addEventListener('DOMContentLoaded', () => {
    const bakimForm = document.getElementById('bakimForm');
    const bakimListesi = document.getElementById('bakimListesi');
    
    bakimForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const bakimTarihi = document.getElementById('bakimTarihi').value;
        const ekipman = document.getElementById('ekipman').value;
        const bakimDetaylari = document.getElementById('bakimDetaylari').value;

        // Yeni bakım kaydını listeye ekleyin
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Tarih:</strong> ${bakimTarihi} <br> <strong>Ekipman:</strong> ${ekipman} <br> <strong>Detaylar:</strong> ${bakimDetaylari}`;
        bakimListesi.appendChild(listItem);

        // Formu temizle
        bakimForm.reset();

        alert('Bakım kaydı başarıyla eklendi!');
    });
});
