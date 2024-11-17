// Untuk Reload Ketika Tampilan Mobile
      // Ambil elemen hamburger dan menu
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");

      // Fungsi untuk menutup mobile menu
      function closeMobileMenu() {
        menuToggle.classList.remove("hamburger-active");
        mobileMenu.classList.add("-translate-x-full"); // Menutup menu
      }

      // Fungsi untuk mengatur ulang navigasi saat tautan diklik
      function handleNavigationClick(event) {
        const targetId = event.target.getAttribute("href").replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Scroll ke elemen yang dituju
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

          // Simulasikan reload dengan menyembunyikan menu
          closeMobileMenu();
          setActiveElement(`${targetId}Link`); // Tandai tautan sebagai aktif
          event.preventDefault(); // Hindari *reload* asli
        }
      }

      // Tambahkan event listener ke semua tautan di menu
      [
        homeLink,
        aboutLink,
        servicesLink,
        teamLink,
        testimonialsLink,
        contactLink,
      ].forEach(function (link) {
        link.addEventListener("click", handleNavigationClick);
      });

      // Hamburger toggle untuk membuka/menutup menu
      menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("hamburger-active");
        mobileMenu.classList.toggle("-translate-x-full");
      });