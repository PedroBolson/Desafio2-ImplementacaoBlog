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
let cart = [];
let allProducts1 = [];
let activeFilter = "all";
let searchQuery = "";
const productLists = document.getElementById("product-list");
const cartIcon = document.getElementById("cart-icon");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsList = document.getElementById("cart-items");
const confirmationMessage = document.getElementById("confirmation-message");
const filterToggleBtn = document.getElementById("filter-toggle");
const filterOptions = document.getElementById("filter-options");
const cartTotalValue = document.getElementById("cart-total-value");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");
function loadProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./src/data/product.json");
            const data = yield response.json();
            allProducts1 = data.products;
            filterAndRenderProducts();
        }
        catch (error) {
            console.error("Erro ao carregar produtos:", error);
        }
    });
}
function filterAndRenderProducts() {
    const filteredProducts = allProducts1.filter((product) => {
        const matchesCategory = activeFilter === "all" || product.categories.includes(activeFilter);
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    renderProductCards(filteredProducts);
}
function renderProductCards(products) {
    if (!productLists)
        return;
    productLists.innerHTML = "";
    products.forEach((product) => {
        const card = createProductCard(product);
        productLists.appendChild(card);
    });
}
function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("product-image-container");
    const img = document.createElement("img");
    img.classList.add("product-image");
    img.src = product.image;
    img.alt = product.name;
    const descriptionOverlay = document.createElement("div");
    descriptionOverlay.classList.add("description-overlay");
    descriptionOverlay.textContent = product.description;
    imageContainer.appendChild(img);
    imageContainer.appendChild(descriptionOverlay);
    card.appendChild(imageContainer);
    const nameEl = document.createElement("h2");
    nameEl.classList.add("product-name");
    nameEl.textContent = product.name;
    card.appendChild(nameEl);
    const priceEl = document.createElement("p");
    priceEl.classList.add("product-price");
    priceEl.textContent = `₦ ${(product.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    card.appendChild(priceEl);
    const quantitySelector = document.createElement("div");
    quantitySelector.classList.add("quantity-selector");
    const minusBtn = document.createElement("button");
    minusBtn.classList.add("quantity-btn", "minus-btn");
    minusBtn.textContent = "-";
    const quantitySpan = document.createElement("span");
    quantitySpan.classList.add("quantity-value");
    let currentQuantity = 1;
    quantitySpan.textContent = currentQuantity.toString();
    const plusBtn = document.createElement("button");
    plusBtn.classList.add("quantity-btn", "plus-btn");
    plusBtn.textContent = "+";
    minusBtn.addEventListener("click", () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantitySpan.textContent = currentQuantity.toString();
        }
    });
    plusBtn.addEventListener("click", () => {
        currentQuantity++;
        quantitySpan.textContent = currentQuantity.toString();
    });
    quantitySelector.appendChild(minusBtn);
    quantitySelector.appendChild(quantitySpan);
    quantitySelector.appendChild(plusBtn);
    card.appendChild(quantitySelector);
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.addEventListener("click", () => {
        addToCart(product, currentQuantity);
        showConfirmationMessage("Item added to cart");
    });
    card.appendChild(addToCartBtn);
    return card;
}
function addToCart(product, quantity) {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    }
    else {
        cart.push({ product, quantity });
    }
    updateCartCount();
}
function updateCartCount() {
    let totalQuantity = 0;
    cart.forEach((item) => {
        totalQuantity += item.quantity;
    });
    if (cartCount) {
        cartCount.textContent = totalQuantity.toString();
    }
}
function showConfirmationMessage(message) {
    if (!confirmationMessage)
        return;
    confirmationMessage.textContent = message;
    confirmationMessage.classList.add("show");
    setTimeout(() => {
        confirmationMessage === null || confirmationMessage === void 0 ? void 0 : confirmationMessage.classList.remove("show");
    }, 3000);
}
function openCartOverlay() {
    if (!cartOverlay)
        return;
    renderCartItems();
    cartOverlay.classList.add("open");
}
function closeCartOverlay() {
    if (!cartOverlay)
        return;
    cartOverlay.classList.remove("open");
}
function renderCartItems() {
    if (!cartItemsList)
        return;
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.textContent = `
        ${item.product.name} (${item.quantity} x) 
        - Item price: ₦${item.product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        - Partial: ₦${(item.product.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        cartItemsList.appendChild(li);
        total += item.product.price * item.quantity;
    });
    if (cartTotalValue) {
        cartTotalValue.textContent = `₦ ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, })}`;
    }
}
document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        activeFilter = e.currentTarget.getAttribute("data-filter") || "all";
        filterAndRenderProducts();
        filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.classList.add("hidden");
    });
});
const searchInput1 = document.getElementById("search-input");
searchInput1 === null || searchInput1 === void 0 ? void 0 : searchInput1.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    filterAndRenderProducts();
});
filterToggleBtn === null || filterToggleBtn === void 0 ? void 0 : filterToggleBtn.addEventListener("click", () => {
    filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.classList.toggle("hidden");
});
checkoutBtn === null || checkoutBtn === void 0 ? void 0 : checkoutBtn.addEventListener("click", () => {
    showConfirmationMessage("Thank you for your purchase!");
    cart = [];
    renderCartItems();
    updateCartCount();
    closeCartOverlay();
});
cartIcon === null || cartIcon === void 0 ? void 0 : cartIcon.addEventListener("click", openCartOverlay);
cartOverlay === null || cartOverlay === void 0 ? void 0 : cartOverlay.addEventListener("click", (event) => {
    if (event.target === cartOverlay) {
        closeCartOverlay();
    }
});
const headerEl = document.querySelector("header");
const mainNav = document.querySelector(".main-nav");
if (headerEl && mainNav) {
    const headerHeight = headerEl.offsetHeight;
    window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight) {
            mainNav.classList.add("scrolled");
        }
        else {
            mainNav.classList.remove("scrolled");
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    loadProduct();
});
