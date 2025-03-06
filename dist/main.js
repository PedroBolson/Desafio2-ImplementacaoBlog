"use strict";
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const getStartedBtn = document.querySelector(".btn-get-started");
if (hamburger && navLinks && getStartedBtn) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        getStartedBtn.classList.toggle("active");
    });
}
