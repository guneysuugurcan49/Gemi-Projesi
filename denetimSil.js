document.addEventListener('DOMContentLoaded', () => {
    const silForm = document.getElementById('silForm');
    
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
