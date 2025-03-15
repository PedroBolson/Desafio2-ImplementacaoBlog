var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var cart = [];
var allProducts1 = [];
var activeFilter = "all";
var searchQuery = "";
var productLists = document.getElementById("product-list");
var cartIcon = document.getElementById("cart-icon");
var cartOverlay = document.getElementById("cart-overlay");
var cartItemsList = document.getElementById("cart-items");
var confirmationMessage = document.getElementById("confirmation-message");
var filterToggleBtn = document.getElementById("filter-toggle");
var filterOptions = document.getElementById("filter-options");
var cartTotalValue = document.getElementById("cart-total-value");
var cartCount = document.getElementById("cart-count");
var checkoutBtn = document.getElementById("checkout-btn");
// Carregar os produtos do JSON
function loadProduct() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./src/data/product.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    allProducts1 = data.products;
                    filterAndRenderProducts();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Erro ao carregar produtos:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateFilterTitle() {
    var titleElement = document.getElementById("filter-title");
    if (!titleElement)
        return;
    if (activeFilter === "all") {
        titleElement.textContent = "All products";
    }
    else {
        titleElement.textContent = "".concat(activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1), " products");
    }
}
// Filtrar produtos por categoria e busca
function filterAndRenderProducts() {
    updateFilterTitle();
    var filteredProducts = allProducts1.filter(function (product) {
        var matchesCategory = activeFilter === "all" || product.categories.includes(activeFilter);
        var matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    renderProductCards(filteredProducts);
}
// Renderizar produtos
function renderProductCards(products) {
    if (!productLists)
        return;
    productLists.innerHTML = "";
    products.forEach(function (product) {
        var card = createProductCard(product);
        productLists.appendChild(card);
    });
}
function createProductCard(product) {
    var card = document.createElement("div");
    card.classList.add("product-card");
    // Container de imagem e overlay de descrição
    var imageContainer = document.createElement("div");
    imageContainer.classList.add("product-image-container");
    var img = document.createElement("img");
    img.classList.add("product-image");
    img.src = product.image;
    img.alt = product.name;
    var descriptionOverlay = document.createElement("div");
    descriptionOverlay.classList.add("description-overlay");
    descriptionOverlay.textContent = product.description;
    imageContainer.appendChild(img);
    imageContainer.appendChild(descriptionOverlay);
    card.appendChild(imageContainer);
    // Nome do produto
    var nameEl = document.createElement("h2");
    nameEl.classList.add("product-name");
    nameEl.textContent = product.name;
    card.appendChild(nameEl);
    // Exibição do preço do produto
    var priceEl = document.createElement("p");
    priceEl.classList.add("product-price");
    priceEl.textContent = "\u20A6 ".concat((product.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    card.appendChild(priceEl);
    // Seletor de quantidade
    var quantitySelector = document.createElement("div");
    quantitySelector.classList.add("quantity-selector");
    var minusBtn = document.createElement("button");
    minusBtn.classList.add("quantity-btn", "minus-btn");
    minusBtn.textContent = "-";
    var quantitySpan = document.createElement("span");
    quantitySpan.classList.add("quantity-value");
    var currentQuantity = 1;
    quantitySpan.textContent = currentQuantity.toString();
    var plusBtn = document.createElement("button");
    plusBtn.classList.add("quantity-btn", "plus-btn");
    plusBtn.textContent = "+";
    minusBtn.addEventListener("click", function () {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantitySpan.textContent = currentQuantity.toString();
        }
    });
    plusBtn.addEventListener("click", function () {
        currentQuantity++;
        quantitySpan.textContent = currentQuantity.toString();
    });
    quantitySelector.appendChild(minusBtn);
    quantitySelector.appendChild(quantitySpan);
    quantitySelector.appendChild(plusBtn);
    card.appendChild(quantitySelector);
    // Botão para adicionar ao carrinho
    var addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.addEventListener("click", function () {
        addToCart(product, currentQuantity);
        showConfirmationMessage("Item added to cart");
    });
    card.appendChild(addToCartBtn);
    return card;
}
// Adicionar produto ao carrinho
function addToCart(product, quantity) {
    var existingItem = cart.find(function (item) { return item.product.id === product.id; });
    if (existingItem) {
        existingItem.quantity += quantity;
    }
    else {
        cart.push({ product: product, quantity: quantity });
    }
    updateCartCount();
}
function updateCartCount() {
    var totalQuantity = 0;
    cart.forEach(function (item) {
        totalQuantity += item.quantity;
    });
    if (cartCount) {
        cartCount.textContent = totalQuantity.toString();
    }
}
// Exibe uma mensagem de confirmação fixa
function showConfirmationMessage(message) {
    if (!confirmationMessage)
        return;
    confirmationMessage.textContent = message;
    confirmationMessage.classList.add("show");
    setTimeout(function () {
        confirmationMessage === null || confirmationMessage === void 0 ? void 0 : confirmationMessage.classList.remove("show");
    }, 3000);
}
// Lógica do Overlay do Carrinho
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
    var total = 0;
    cart.forEach(function (item) {
        var li = document.createElement("li");
        li.classList.add("cart-item");
        li.textContent = "\n        ".concat(item.product.name, " (").concat(item.quantity, " x) \n        - Item price: \u20A6").concat(item.product.price.toLocaleString('en-US', { minimumFractionDigits: 2 }), "\n        - Partial: \u20A6").concat((item.product.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 }));
        cartItemsList.appendChild(li);
        total += item.product.price * item.quantity;
    });
    if (cartTotalValue) {
        cartTotalValue.textContent = "\u20A6 ".concat(total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, }));
    }
}
// Eventos de Filtro e Busca
document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        activeFilter = e.currentTarget.getAttribute("data-filter") || "all";
        filterAndRenderProducts();
        filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.classList.add("hidden");
    });
});
var searchInput1 = document.getElementById("search-input");
searchInput1 === null || searchInput1 === void 0 ? void 0 : searchInput1.addEventListener("input", function (e) {
    searchQuery = e.target.value;
    filterAndRenderProducts();
});
// Toggle do menu de filtros na nav
filterToggleBtn === null || filterToggleBtn === void 0 ? void 0 : filterToggleBtn.addEventListener("click", function () {
    filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.classList.toggle("hidden");
});
checkoutBtn === null || checkoutBtn === void 0 ? void 0 : checkoutBtn.addEventListener("click", function () {
    showConfirmationMessage("Thank you for your purchase!");
    cart = []; // Zera o carrinho
    renderCartItems();
    updateCartCount();
    closeCartOverlay();
});
cartIcon === null || cartIcon === void 0 ? void 0 : cartIcon.addEventListener("click", openCartOverlay);
cartOverlay === null || cartOverlay === void 0 ? void 0 : cartOverlay.addEventListener("click", function (event) {
    if (event.target === cartOverlay) {
        closeCartOverlay();
    }
});
// Atualiza o background da nav conforme o scroll
var headerEl = document.querySelector("header");
var mainNav = document.querySelector(".main-nav");
if (headerEl && mainNav) {
    var headerHeight_1 = headerEl.offsetHeight;
    window.addEventListener("scroll", function () {
        if (window.scrollY > headerHeight_1) {
            mainNav.classList.add("scrolled");
        }
        else {
            mainNav.classList.remove("scrolled");
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    loadProduct();
});
