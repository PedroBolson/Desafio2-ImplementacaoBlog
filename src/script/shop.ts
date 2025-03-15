interface Product {
    id: number;
    categories: string[];
    name: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

let cart: CartItem[] = [];

let allProducts1: Product[] = [];
let activeFilter: string = "all";
let searchQuery: string = "";


const productLists = document.getElementById("product-list") as HTMLElement | null;
const cartIcon = document.getElementById("cart-icon") as HTMLElement | null;
const cartOverlay = document.getElementById("cart-overlay") as HTMLElement | null;
const cartItemsList = document.getElementById("cart-items") as HTMLUListElement | null;
const confirmationMessage = document.getElementById("confirmation-message") as HTMLDivElement | null;
const filterToggleBtn = document.getElementById("filter-toggle");
const filterOptions = document.getElementById("filter-options");
const cartTotalValue = document.getElementById("cart-total-value") as HTMLSpanElement | null;
const cartCount = document.getElementById("cart-count") as HTMLElement | null;
const checkoutBtn = document.getElementById("checkout-btn");

// Carregar os produtos do JSON
async function loadProduct(): Promise<void> {
    try {
        const response = await fetch("./src/data/product.json");
        const data = await response.json();
        allProducts1 = data.products;
        filterAndRenderProducts();
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

function updateFilterTitle(): void {
    const titleElement = document.getElementById("filter-title");
    if (!titleElement) return;

    if (activeFilter === "all") {
        titleElement.textContent = "All products";
    } else {
        titleElement.textContent = `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} products`;
    }
}


// Filtrar produtos por categoria e busca
function filterAndRenderProducts(): void {
    updateFilterTitle();
    const filteredProducts = allProducts1.filter((product) => {
        const matchesCategory = activeFilter === "all" || product.categories.includes(activeFilter);
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    renderProductCards(filteredProducts);
}

// Renderizar produtos
function renderProductCards(products: Product[]): void {
    if (!productLists) return;
    productLists.innerHTML = "";
    products.forEach((product) => {
        const card = createProductCard(product);
        productLists.appendChild(card);
    });
}

function createProductCard(product: Product): HTMLDivElement {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Container de imagem e overlay de descrição
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

    // Nome do produto
    const nameEl = document.createElement("h2");
    nameEl.classList.add("product-name");
    nameEl.textContent = product.name;
    card.appendChild(nameEl);

    // Exibição do preço do produto
    const priceEl = document.createElement("p");
    priceEl.classList.add("product-price");
    priceEl.textContent = `₦ ${(product.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    card.appendChild(priceEl);

    // Seletor de quantidade
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

    // Botão para adicionar ao carrinho
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

// Adicionar produto ao carrinho
function addToCart(product: Product, quantity: number): void {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }
    updateCartCount();
}

function updateCartCount(): void {
    let totalQuantity = 0;
    cart.forEach((item) => {
        totalQuantity += item.quantity;
    });
    if (cartCount) {
        cartCount.textContent = totalQuantity.toString();
    }
}

// Mensagem de confirmação fixa
function showConfirmationMessage(message: string): void {
    if (!confirmationMessage) return;
    confirmationMessage.textContent = message;
    confirmationMessage.classList.add("show");
    setTimeout(() => {
        confirmationMessage?.classList.remove("show");
    }, 3000);
}

// Lógica do Overlay do Carrinho
function openCartOverlay(): void {
    if (!cartOverlay) return;
    renderCartItems();
    cartOverlay.classList.add("open");
}

function closeCartOverlay(): void {
    if (!cartOverlay) return;
    cartOverlay.classList.remove("open");
}

function renderCartItems(): void {
    if (!cartItemsList) return;
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

// Eventos de Filtro e Busca
document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        activeFilter = (e.currentTarget as HTMLButtonElement).getAttribute("data-filter") || "all";
        filterAndRenderProducts();
        filterOptions?.classList.add("hidden");
    });
});

const searchInput1 = document.getElementById("search-input");
searchInput1?.addEventListener("input", (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    filterAndRenderProducts();
});

// Toggle do menu de filtros na nav
filterToggleBtn?.addEventListener("click", () => {
    filterOptions?.classList.toggle("hidden");
});

checkoutBtn?.addEventListener("click", () => {
    showConfirmationMessage("Thank you for your purchase!");
    cart = [];
    renderCartItems();
    updateCartCount();
    closeCartOverlay();
});

cartIcon?.addEventListener("click", openCartOverlay);
cartOverlay?.addEventListener("click", (event) => {
    if (event.target === cartOverlay) {
        closeCartOverlay();
    }
});

// Atualiza o background da nav conforme o scroll
const headerEl = document.querySelector("header");
const mainNav = document.querySelector(".main-nav");
if (headerEl && mainNav) {
    const headerHeight = headerEl.offsetHeight;
    window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight) {
            mainNav.classList.add("scrolled");
        } else {
            mainNav.classList.remove("scrolled");
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    loadProduct();
});
