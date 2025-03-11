"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let allServices = [];
const serviceList = document.getElementById("service-list");
function loadServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./src/data/service.json");
            const data = yield response.json();
            allServices = data.services;
            renderServices(allServices);
        }
        catch (error) {
            console.error("Erro ao carregar serviços:", error);
        }
    });
}
function renderServices(services) {
    serviceList.innerHTML = "";
    services.forEach((service) => {
        const serviceButton = document.createElement("button");
        serviceButton.classList.add("service-card");
        const img = document.createElement("img");
        img.src = service.image;
        img.alt = service.title;
        const overlayDiv = document.createElement("div");
        overlayDiv.classList.add("service-overlay");
        overlayDiv.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <button class="learn-more-btn">Learn More</button>`;
        serviceButton.appendChild(img);
        serviceButton.appendChild(overlayDiv);
        serviceButton.addEventListener("click", () => {
            const allButtons = document.querySelectorAll(".service-card");
            allButtons.forEach((btn) => btn.classList.remove("active"));
            serviceButton.classList.add("active");
        });
        serviceList.appendChild(serviceButton);
    });
}
loadServices();
const navServiceLinks = document.querySelectorAll('.drop-service li a');
navServiceLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        var _a;
        event.preventDefault();
        const serviceTitle = ((_a = link.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
        const serviceSection = document.getElementById("service");
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: "smooth" });
        }
        const matchingButton = Array.from(document.querySelectorAll(".service-card")).find((btn) => {
            var _a;
            return ((_a = btn.querySelector("h3")) === null || _a === void 0 ? void 0 : _a.textContent) === serviceTitle;
        });
        if (matchingButton) {
            matchingButton.click();
        }
    });
});
