// Menu hamburguer
const hamburger = document.querySelector(".hamburger") as HTMLElement | null;
const navLinks = document.querySelector(".nav-links") as HTMLElement | null;
const hamburgerImg = document.querySelector(".hamburger-btn") as HTMLImageElement | null;

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (hamburgerImg) {
            if (hamburgerImg.getAttribute("src") === "./src/images/bars.svg") {
                hamburgerImg.setAttribute("src", "./src/images/x_icon.svg");
                hamburgerImg.setAttribute("alt", "Fechar menu");
            } else {
                hamburgerImg.setAttribute("src", "./src/images/bars.svg");
                hamburgerImg.setAttribute("alt", "Abrir menu");
            }
        }
    });
}

//Shop section