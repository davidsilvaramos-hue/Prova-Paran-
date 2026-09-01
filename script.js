const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
}

if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("active");
    });
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav?.classList.remove("active");
        menuBtn?.classList.remove("active");
    });
});
