 // Fungsi untuk mengatur tema dan ikon
 function toggleDarkMode() {
    const html = document.documentElement;
    const darkModeIcons = document.querySelectorAll(".bi-moon, .bi-sun"); // Semua ikon moon dan sun

    // Cek apakah mode gelap aktif
    if (html.classList.contains("dark")) {
      html.classList.remove("dark"); // Matikan mode gelap
      // Ganti ikon ke bulan (moon)
      darkModeIcons.forEach((icon) => {
        icon.classList.replace("bi-sun", "bi-moon");
      });
      localStorage.setItem("theme", "light"); // Simpan pilihan tema terang
    } else {
      html.classList.add("dark"); // Aktifkan mode gelap
      // Ganti ikon ke matahari (sun)
      darkModeIcons.forEach((icon) => {
        icon.classList.replace("bi-moon", "bi-sun");
      });
      localStorage.setItem("theme", "dark"); // Simpan pilihan tema gelap
    }

    location.reload();
  }

  // Inisialisasi tema saat halaman dimuat
  document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      // Ganti ikon default jika mode gelap aktif
      document
        .querySelectorAll(".bi-moon")
        .forEach((icon) => icon.classList.replace("bi-moon", "bi-sun"));
    }
  });

  // Event listener untuk tombol dark mode (mobile dan desktop)
  document
    .getElementById("dark-mode-mobile")
    .addEventListener("click", toggleDarkMode);
  document
    .getElementById("dark-mode-desktop")
    .addEventListener("click", toggleDarkMode);