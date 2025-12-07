function cekNilai() {
    let nilai = Number(document.getElementById("nilaiSiswa").value);
    let grade;

    if (nilai >= 90 && nilai <= 100) {
        grade = "A (Sangat Baik)";
    } else if (nilai >= 80 && nilai < 90) {
        grade = "B (Baik)";
    } else if (nilai >= 70 && nilai < 80) {
        grade = "C (Cukup)";
    } else if (nilai >= 60 && nilai < 70) {
        grade = "D (Kurang)";
    } else if (nilai >= 0 && nilai < 60) {
        grade = "E (Gagal)";
    } else {
        grade = "Nilai tidak valid.";
    }

    document.getElementById("hasilGrade").innerHTML = "Grade Anda: " + grade;
}