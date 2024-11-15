// Active Navbar
var homeLink = document.getElementById("homeLink");
var aboutLink = document.getElementById("aboutLink");
var servicesLink = document.getElementById("servicesLink");
var teamLink = document.getElementById("teamLink");
var testimonialsLink = document.getElementById("testimonialsLink");
var contactLink = document.getElementById("contactLink");

// Mendapatkan elemen #home, #about, dll.
var homeSection = document.getElementById("home");
var aboutSection = document.getElementById("about");
var servicesSection = document.getElementById("services");
var teamSection = document.getElementById("team");
var testimonialsSection = document.getElementById("testimonials");
var contactSection = document.getElementById("contact");

// Mengecek status elemen aktif dari penyimpanan sesi
var activeElement = sessionStorage.getItem("activeElement");

// Jika halaman saat ini adalah index.html atau root, set homeLink sebagai aktif
if (activeElement) {
    document.getElementById(activeElement).classList.add("active");
} else {
    setActiveElement("homeLink");
}

// Event listener untuk scroll
window.addEventListener("scroll", function () {
    var screenHeight = window.innerHeight / 2;

    if (window.scrollY < aboutSection.offsetTop - screenHeight) {
        setActiveElement("homeLink");
    } else if (window.scrollY >= aboutSection.offsetTop - screenHeight && window.scrollY < servicesSection.offsetTop - screenHeight) {
        setActiveElement("aboutLink");
    } else if (window.scrollY >= servicesSection.offsetTop - screenHeight && window.scrollY < teamSection.offsetTop - screenHeight) {
        setActiveElement("servicesLink");
    } else if (window.scrollY >= teamSection.offsetTop - screenHeight && window.scrollY < testimonialsSection.offsetTop - screenHeight) {
        setActiveElement("teamLink");
    } else if (window.scrollY >= testimonialsSection.offsetTop - screenHeight && window.scrollY < contactSection.offsetTop - screenHeight) {
        setActiveElement("testimonialsLink");
    } else if (window.scrollY >= contactSection.offsetTop - screenHeight) {
        setActiveElement("contactLink");
    }
});

// Fungsi untuk menandai elemen sebagai aktif dan menyimpan ke penyimpanan sesi
function setActiveElement(elementId) {
    [homeLink, aboutLink, servicesLink, teamLink, testimonialsLink, contactLink].forEach(function (el) {
        el.classList.remove("active");
    });

    document.getElementById(elementId).classList.add("active");
    sessionStorage.setItem("activeElement", elementId);
}
