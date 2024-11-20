document.addEventListener('DOMContentLoaded', () => {
    const secimForm = document.getElementById('secimForm');
    const denetimFormContainer = document.getElementById('denetimFormContainer');
    const denetimBaslik = document.getElementById('denetimBaslik');
    const denetimForm = document.getElementById('denetimForm');
    const denetimListesi = document.getElementById('denetimListesi');
    const kriterContainer = document.getElementById('kriterContainer');

    // Denetim türlerine göre kriterler
    const denetimKriterleri = {
        'Güvenlik': [
            'Cankurtaran ekipmanlarının uygunluğu',
            'Yangın söndürme ekipmanlarının durumu'
        ],
        'Çevre': [
            'Atık yönetim planının uygunluğu',
            'Deniz kirliliği önleyici ekipmanların durumu'
        ],
        'Bakım': [
            'Motor bakımı yapılmış mı',
            'Geminin genel durumu'
        ]
    };

    // Denetim kayıtları
    const denetimler = [];

    // Denetim kayıtlarını listele
    function listeleDenetimler() {
        denetimListesi.innerHTML = '';
        denetimler.forEach(denetim => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Gemi ID:</strong> ${denetim.gemiId} <br>
                <strong>Denetim Türü:</strong> ${denetim.tur} <br>
                <strong>Tarih:</strong> ${denetim.tarih} <br>
                <strong>Kriterler:</strong> 
                <ul>
                    ${denetim.detaylar.map((detay, index) => `<li>${denetimKriterleri[denetim.tur][index]}: ${detay}</li>`).join('')}
                </ul>
                <button onclick="düzenleDenetim(${denetim.id})">Düzenle</button>
            `;
            denetimListesi.appendChild(listItem);
        });
    }

    // Denetim türü seçildiğinde kriterleri yükle
    secimForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const denetimTuru = document.getElementById('denetimTuru').value;
        
        if (denetimTuru) {
            denetimBaslik.textContent = `${denetimTuru} Denetimi`;
            kriterContainer.innerHTML = '';
            denetimKriterleri[denetimTuru].forEach((kriter, index) => {
                const label = document.createElement('label');
                label.setAttribute('for', `kriter${index}`);
                label.textContent = kriter;
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('id', `kriter${index}`);
                input.setAttribute('name', `kriter${index}`);
                input.setAttribute('required', true);
                kriterContainer.appendChild(label);
                kriterContainer.appendChild(input);
            });
            denetimFormContainer.style.display = 'block';
        }
    });

    // Denetim formu gönderildiğinde denetimi kaydet
    denetimForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const gemiId = document.getElementById('gemiId').value;
        const denetimTarihi = document.getElementById('denetimTarihi').value;
        const denetimTuru = document.getElementById('denetimTuru').value;
        const denetimDetaylari = denetimKriterleri[denetimTuru].map((_, index) => document.getElementById(`kriter${index}`).value);

        denetimler.push({ id: denetimler.length + 1, gemiId, tur: denetimTuru, tarih: denetimTarihi, detaylar: denetimDetaylari });
        listeleDenetimler();

        // Formu temizle
        denetimForm.reset();
        denetimFormContainer.style.display = 'none';

        alert('Denetim kaydı başarıyla eklendi!');
    });
});

function düzenleDenetim(denetimId) {
    const denetim = denetimler.find(d => d.id === denetimId);
    if (denetim) {
        document.getElementById('gemiId').value = denetim.gemiId;
        document.getElementById('denetimTarihi').value = denetim.tarih;
        document.getElementById('denetimTuru').value = denetim.tur;
        denetim.detaylar.forEach((detay, index) => {
            document.getElementById(`kriter${index}`).value = detay;
        });
    }
}
