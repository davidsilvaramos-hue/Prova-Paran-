document.addEventListener("DOMContentLoaded", () => {

    // MENU MOBILE
    const menuBtn = document.querySelector(".menu-btn");
    const mainNav = document.querySelector(".main-nav");

    if (menuBtn && mainNav) {
        menuBtn.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });
    }


    // MENU "SOBRE"
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdown = document.querySelector(".dropdown");

    if (dropdownBtn && dropdown) {
        dropdownBtn.addEventListener("click", (event) => {
            event.preventDefault();
            dropdown.classList.toggle("active");
        });
    }


    // FECHAR MENU AO CLICAR EM UM LINK
    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.classList.remove("active");
            }
        });
    });


    // FECHAR MENU AO CLICAR FORA DELE
    document.addEventListener("click", (event) => {

        if (
            mainNav &&
            menuBtn &&
            !mainNav.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            mainNav.classList.remove("active");
            menuBtn.classList.remove("active");
        }

    });

});
