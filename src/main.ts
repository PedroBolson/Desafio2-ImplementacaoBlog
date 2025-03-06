//Menu hamburguer
const hamburger = document.querySelector(".hamburger") as HTMLElement | null;
const navLinks = document.querySelector(".nav-links") as HTMLElement | null;
const getStartedBtn = document.querySelector(".btn-get-started") as HTMLElement | null;

if (hamburger && navLinks && getStartedBtn) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        getStartedBtn.classList.toggle("active");
    });
}
