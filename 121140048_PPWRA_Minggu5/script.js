const daftarBuku = document.getElementById('daftarBuku');
const judulInput = document.getElementById('judul');
const penulisInput = document.getElementById('penulis');
const tambahButton = document.getElementById('tambah');
const cariInput = document.getElementById('cari');
const cariButton = document.getElementById('cariButton');
const resetButton = document.getElementById('resetButton');

tambahButton.addEventListener('click', () => {
    const judul = judulInput.value;
    const penulis = penulisInput.value;

    if (judul !== '' && penulis !== '') {
        const li = document.createElement('li');
        li.innerHTML = <b>${judul}</b> oleh ${penulis} <button class="hapus">Hapus</button>;
        daftarBuku.appendChild(li);
        judulInput.value = '';
        penulisInput.value = '';
    }
});

daftarBuku.addEventListener('click', (e) => {
    if (e.target.classList.contains('hapus')) {
        e.target.parentElement.remove();
    }
});

cariButton.addEventListener('click', () => {
    const keyword = cariInput.value.toLowerCase();
    const buku = daftarBuku.getElementsByTagName('li');

    for (const li of buku) {
        const judul = li.textContent.toLowerCase();
        if (judul.includes(keyword)) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    }
});

resetButton.addEventListener('click', () => {
    const buku = daftarBuku.getElementsByTagName('li');

    for (const li of buku) {
        li.style.display = 'block';
    }

    cariInput.value = '';
});