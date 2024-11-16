// document.addEventListener("DOMContentLoaded", function () {
//     const btnID = document.getElementById("btnID");
//     const btnEN = document.getElementById("btnEN");
 
//     const texts = {
//         id: {
//             home: "Beranda",
//         },
//         en: {
//             home: "Home",
//             about: "About Us",
//             services: "Services",
//             team: "Our Team",
//             testimonials: "Testimony",
//             contact: "Contact",
//             light: "Light",
//             dark:"Dark",
//             auto:"Auto",
                        
//         },
//     };

//     // Memuat bahasa yang tersimpan, atau default ke 'id'
//     let currentLang = localStorage.getItem("language") || "id";

//     // Fungsi untuk mengubah bahasa
//     function setLanguage(lang) {
//         currentLang = lang;
//         localStorage.setItem("language", lang); // Simpan bahasa yang dipilih

//         // Refresh halaman setelah bahasa diubah
//         window.location.reload();
//     }

//     // Fungsi untuk mengubah teks di halaman
//     function changeLanguage(lang) {
//         document.querySelectorAll(".translate").forEach((element) => {
//             const key = element.getAttribute("data-key");
//             if (texts[lang][key]) {
//                 element.innerText = texts[lang][key];
//             }
//         });
//     }

//     // Event listener untuk tombol bahasa
//     btnID.addEventListener("click", function () {
//         setLanguage("id");
//     });

//     btnEN.addEventListener("click", function () {
//         setLanguage("en");
//     });

//     // Inisialisasi dengan bahasa default
//     changeLanguage(currentLang);

//     // Atur tampilan tombol yang aktif
//     if (currentLang === "id") {
//         btnID.classList.add("text-navy", "font-bold");
//         btnEN.classList.remove("text-navy", "font-bold");
//     } else {
//         btnEN.classList.add("text-navy", "font-bold");
//         btnID.classList.remove("text-navy", "font-bold");
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const btnID = document.getElementById("btnID");
    const btnEN = document.getElementById("btnEN");
  
    const texts = {
      id: {
        home: "Beranda",
      },
      en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        team: "Our Team",
        testimonials: "Testimony",
        contact: "Contact",
        light: "Light",
        dark: "Dark",
        auto: "Auto",
      },
    };
  
    // Memuat bahasa yang tersimpan, atau default ke 'id'
    let currentLang = localStorage.getItem("language") || "id";
  
    // Fungsi untuk mengubah bahasa
    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem("language", lang); // Simpan bahasa yang dipilih
  
      // Refresh halaman setelah bahasa diubah
      window.location.reload();
    }
  
    // Fungsi untuk mengubah teks di halaman
    function changeLanguage(lang) {
      document.querySelectorAll(".translate").forEach((element) => {
        const key = element.getAttribute("data-key");
        if (texts[lang][key]) {
          element.innerText = texts[lang][key];
        }
      });
    }
  
    // Event listener untuk tombol bahasa
    btnID.addEventListener("click", function () {
      setLanguage("id");
      updateActiveButton(btnID);
    });
  
    btnEN.addEventListener("click", function () {
      setLanguage("en");
      updateActiveButton(btnEN);
    });
  
    // Fungsi untuk mengatur tombol yang aktif
    function updateActiveButton(activeButton) {
      [btnID, btnEN].forEach((button) => {
        button.classList.remove("active", "text-navy", "font-bold");
      });
      activeButton.classList.add("active", "text-navy", "font-bold");
    }
  
    // Inisialisasi dengan bahasa default
    changeLanguage(currentLang);
  
    // Atur tampilan tombol yang aktif
    if (currentLang === "id") {
      updateActiveButton(btnID);
    } else {
      updateActiveButton(btnEN);
    }
  });
  