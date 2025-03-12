// Menu hamburguer
const hamburger = document.querySelector(".hamburger") as HTMLElement | null;
const navLinks = document.querySelector(".nav-links") as HTMLElement | null;

const svgBars = `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.25H18.75M1.25 8H18.75M1.25 1.75H18.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const svgClose = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;

let menuAberto = false;

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuAberto = !menuAberto;

        if (menuAberto) {
            hamburger.innerHTML = svgClose;
            hamburger.setAttribute("aria-label", "Fechar menu");
        } else {
            hamburger.innerHTML = svgBars;
            hamburger.setAttribute("aria-label", "Abrir menu");
        }
    });
}

//Botão Shop Now
const btnShopNow = document.querySelector(".btn-shop-now")
if (btnShopNow) {
    btnShopNow.addEventListener('click', (event) => {
        event.preventDefault();

        const shopSection = document.getElementById('shop');

        if (shopSection) {
            shopSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

//Botão para voltar ao topo da página
const backToTop = document.querySelectorAll(".back-to-top");
if (backToTop) {
    backToTop.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
}

//Direcionamento nav para about us
const aboutUs = document.querySelector(".about");
if (aboutUs) {
    aboutUs.addEventListener('click', (event) => {
        event.preventDefault();

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}