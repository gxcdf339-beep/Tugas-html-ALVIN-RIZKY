function getValues() {
    const a = Number(document.getElementById('angka1')?.value);
    const b = Number(document.getElementById('angka2')?.value);
    return { a, b };
}

function tampilkanHasil(text) {
    const el = document.getElementById('hasilKalkulasi');
    if (el) el.textContent = text;
}

function tambah() {
    const { a, b } = getValues();
    if (isNaN(a) || isNaN(b)) return tampilkanHasil('Masukkan kedua angka terlebih dahulu.');
    tampilkanHasil('Hasil: ' + (a + b));
}

function kurang() {
    const { a, b } = getValues();
    if (isNaN(a) || isNaN(b)) return tampilkanHasil('Masukkan kedua angka terlebih dahulu.');
    tampilkanHasil('Hasil: ' + (a - b));
}

function kali() {
    const { a, b } = getValues();
    if (isNaN(a) || isNaN(b)) return tampilkanHasil('Masukkan kedua angka terlebih dahulu.');
    tampilkanHasil('Hasil: ' + (a * b));
}

function bagi() {
    const { a, b } = getValues();
    if (isNaN(a) || isNaN(b)) return tampilkanHasil('Masukkan kedua angka terlebih dahulu.');
    if (b === 0) return tampilkanHasil('Error: Pembagian dengan nol.');
    tampilkanHasil('Hasil: ' + (a / b));
}