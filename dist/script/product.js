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
let allProducts = [];
const searchWrapper = document.querySelector('.search-wrapper');
if (searchWrapper) {
    searchWrapper.addEventListener('click', () => {
        searchWrapper.classList.toggle('active');
        const input = searchWrapper.querySelector('.search-input-mobile');
        if (input && searchWrapper.classList.contains('active')) {
            input.focus();
        }
    });
}
const productList = document.getElementById("product-list");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const searchInput = document.getElementById("search-input");
const searchInputMobile = document.getElementById("search-input-mobile");
function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert");
    if (type === "success") {
        alertBox.classList.add("success");
    }
    else {
        alertBox.classList.add("warning");
    }
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}
function loadProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./src/data/product.json");
            const data = yield response.json();
            allProducts = data.products;
            renderProducts(allProducts);
        }
        catch (error) {
            console.error("Erro ao carregar produtos:", error);
        }
    });
}
function renderProducts(products) {
    const isMobile = window.matchMedia("(max-width: 935px)").matches;
    const productsToSee = isMobile ? products.slice(0, 2) : products.slice(0, 3);
    productList.innerHTML = "";
    productsToSee.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        const overlay = document.createElement("div");
        overlay.classList.add("card-overlay");
        const overlayContent = document.createElement("div");
        overlayContent.classList.add("overlay-content");
        const priceLabel = document.createElement("p");
        priceLabel.classList.add("price-label");
        priceLabel.textContent = `₦ ${(product.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const heartBtn = document.createElement("button");
        heartBtn.classList.add("heart-btn");
        heartBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            heartBtn.classList.toggle("favorited");
        });
        const productName = document.createElement("h3");
        productName.classList.add("product-name");
        productName.textContent = product.name;
        const descriptionLabel = document.createElement("p");
        descriptionLabel.classList.add("description-label");
        descriptionLabel.textContent = product.description;
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("button-container");
        const quantitySelector = document.createElement("div");
        quantitySelector.classList.add("quantity-selector");
        const minusBtn = document.createElement("button");
        minusBtn.textContent = "-";
        const quantityDisplay = document.createElement("span");
        quantityDisplay.textContent = "1";
        const plusBtn = document.createElement("button");
        plusBtn.textContent = "+";
        let currentQuantity = 1;
        minusBtn.addEventListener("click", () => {
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityDisplay.textContent = currentQuantity.toString();
            }
        });
        plusBtn.addEventListener("click", () => {
            currentQuantity++;
            quantityDisplay.textContent = currentQuantity.toString();
        });
        quantitySelector.appendChild(plusBtn);
        quantitySelector.appendChild(quantityDisplay);
        quantitySelector.appendChild(minusBtn);
        const addCartBtn = document.createElement("button");
        addCartBtn.classList.add("add-cart-btn");
        addCartBtn.textContent = "Add to cart";
        addCartBtn.addEventListener("click", () => {
            if (currentQuantity <= product.quantity) {
                showAlert(`Produto "${product.name}" adicionado ao carrinho! Quantidade: ${currentQuantity}`, "success");
            }
            else {
                showAlert("Ops, não há esta quantidade de itens em estoque, desculpe!", "warning");
            }
        });
        btnContainer.appendChild(quantitySelector);
        btnContainer.appendChild(addCartBtn);
        overlayContent.appendChild(priceLabel);
        overlayContent.appendChild(heartBtn);
        overlayContent.appendChild(productName);
        overlayContent.appendChild(descriptionLabel);
        overlayContent.appendChild(btnContainer);
        overlay.appendChild(overlayContent);
        card.appendChild(img);
        card.appendChild(overlay);
        productList.appendChild(card);
    });
}
function filterProducts(category) {
    let filteredProducts = [];
    if (category === "all") {
        filteredProducts = allProducts;
    }
    else if (category === "random") {
        filteredProducts = [...allProducts].sort(() => 0.5 - Math.random());
    }
    else {
        filteredProducts = allProducts.filter((product) => product.categories.includes(category));
        filteredProducts = [...filteredProducts].sort(() => 0.5 - Math.random());
    }
    const searchTerm = (searchInput.value || searchInputMobile.value).toLowerCase().trim();
    if (searchTerm !== "") {
        filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(searchTerm));
    }
    renderProducts(filteredProducts);
}
function searchProducts() {
    const activeButton = document.querySelector(".filter-buttons button.active");
    const activeCategory = activeButton ? activeButton.getAttribute("data-filter") : "all";
    filterProducts(activeCategory || "all");
}
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.getAttribute("data-filter");
        if (category) {
            filterProducts(category);
        }
    });
});
searchInput.addEventListener("input", searchProducts);
searchInputMobile.addEventListener("input", searchProducts);
loadProducts();
const navShopLinks = document.querySelectorAll('.drop-products li a');
navShopLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        var _a;
        event.preventDefault();
        let categoryText = ((_a = link.textContent) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) || "";
        if (categoryText !== "fish" && categoryText.endsWith("s")) {
            categoryText = categoryText.slice(0, -1);
        }
        const shopSection = document.getElementById('shop');
        if (shopSection) {
            shopSection.scrollIntoView({ behavior: 'smooth' });
        }
        const filterButton = document.querySelector(`.filter-buttons button[data-filter="${categoryText}"]`);
        if (filterButton) {
            filterButton.click();
        }
        else {
            filterProducts(categoryText);
        }
    });
});
