document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const mainNav = document.querySelector(".main-nav");
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdown = document.querySelector(".dropdown");


    /* =========================
       MENU HAMBÚRGUER
    ========================= */

    if (menuBtn && mainNav) {

        menuBtn.addEventListener("click", function () {

            mainNav.classList.toggle("active");
            menuBtn.classList.toggle("active");

        });

    }


    /* =========================
       DROPDOWN SOBRE
    ========================= */

    if (dropdownBtn && dropdown) {

        dropdownBtn.addEventListener("click", function (event) {

            event.preventDefault();

            dropdown.classList.toggle("active");

        });

    }


    /* =========================
       FECHAR MENU AO CLICAR
    ========================= */

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.classList.remove("active");
            }

        });

    });


    /* =========================
       FECHAR AO CLICAR FORA
    ========================= */

    document.addEventListener("click", function (event) {

        if (!mainNav || !menuBtn) {
            return;
        }

        const clicouNoMenu =
            mainNav.contains(event.target);

        const clicouNoBotao =
            menuBtn.contains(event.target);

        if (!clicouNoMenu && !clicouNoBotao) {

            mainNav.classList.remove("active");
            menuBtn.classList.remove("active");

            if (dropdown) {
                dropdown.classList.remove("active");
            }

        }

    });


    /* =========================
       FECHAR DROPDOWN AO CLICAR FORA
    ========================= */

    document.addEventListener("click", function (event) {

        if (
            dropdown &&
            !dropdown.contains(event.target)
        ) {

            dropdown.classList.remove("active");

        }

    });

});
