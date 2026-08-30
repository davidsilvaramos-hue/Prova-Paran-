const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileSubmenu = document.getElementById("mobileSubmenu");
const mobileSubitems = document.getElementById("mobileSubitems");

hamburger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", open);
});

mobileSubmenu.addEventListener("click", () => {
  const open = mobileSubitems.classList.toggle("open");
  mobileSubmenu.setAttribute("aria-expanded", open);
  mobileSubmenu.querySelector("span").textContent = open ? "−" : "+";
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
