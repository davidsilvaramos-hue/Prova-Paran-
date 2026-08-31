function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


// Fecha o menu quando clicar em um link
document.querySelectorAll("#menu a").forEach(function(link) {
    link.addEventListener("click", function() {

        const menu = document.getElementById("menu");

        if (menu) {
            menu.classList.remove("active");
        }

    });
});


// Pequena animação ao carregar a página
document.addEventListener("DOMContentLoaded", function() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card, index) {

        card.style.animationDelay = (index * 0.08) + "s";

    });

});
