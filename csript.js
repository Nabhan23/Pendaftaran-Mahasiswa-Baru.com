document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const resetBtn = document.getElementById('resetBtn');
    const successMessage = document.getElementById('successMessage');
    const backBtn = document.getElementById('backBtn');
    
    // Validasi form sebelum submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validasi tambahan bisa ditambahkan di sini
        const today = new Date();
        const birthDate = new Date(document.getElementById('tanggal_lahir').value);
        const age = today.getFullYear() - birthDate.getFullYear();
        
        if (age < 17) {
            alert('Anda harus berusia minimal 17 tahun untuk mendaftar');
            return;
        }
        
        // Simulasi pengiriman data
        setTimeout(() => {
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Scroll ke atas
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1000);
    });
    
    // Reset form
    resetBtn.addEventListener('click', function() {
        if (confirm('Apakah Anda yakin ingin mengosongkan semua data yang telah diisi?')) {
            form.reset();
        }
    });
    
    // Kembali ke form dari success message
    backBtn.addEventListener('click', function() {
        successMessage.classList.add('hidden');
        form.classList.remove('hidden');
        form.reset();
    });
    
    // Validasi real-time untuk NIK
    const nikInput = document.getElementById('nik');
    nikInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 16) {
            this.value = this.value.slice(0, 16);
        }
    });
    
    // Validasi real-time untuk nomor HP
    const hpInput = document.getElementById('no_hp');
    hpInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});