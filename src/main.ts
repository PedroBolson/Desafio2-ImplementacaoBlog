// Menu hamburguer
const hamburger = document.querySelector(".hamburger") as HTMLElement | null;
const navLinks = document.querySelector(".nav-links") as HTMLElement | null;

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
