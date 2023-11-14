// Fungsi untuk menampilkan pop-up
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Fungsi untuk menyembunyikan pop-up
function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Menambahkan event listener untuk menanggapi klik di luar pop-up dan menutupnya
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('overlay')) {
    hidePopup();
  }
});