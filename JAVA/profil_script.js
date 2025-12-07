let myName = "Alvin Rizky";
const myAge = 17;

console.log("Nama saya " + myName + ", umur saya " + myAge + " tahun.");

document.getElementById("nama-saya").innerHTML = "Halo, Saya " + myName;
document.getElementById("info-diri").innerHTML = "Saya berusia " + myAge + " tahun dan suka belajar pemrograman.";

function showAlert() {
    alert("Anda telah mengklik tombol!");
}