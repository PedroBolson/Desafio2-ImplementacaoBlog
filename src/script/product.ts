interface Product {
    id: number;
    categories: string[];
    name: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
}

let allProducts: Product[] = [];

//deslocamento do input de pesquisa mobile
const searchWrapper = document.querySelector('.search-wrapper') as HTMLElement;

if (searchWrapper) {
    searchWrapper.addEventListener('click', () => {
        searchWrapper.classList.toggle('active');
        const input = searchWrapper.querySelector('.search-input-mobile') as HTMLInputElement;
        if (input && searchWrapper.classList.contains('active')) {
            input.focus();
        }
    });
}

const productList = document.getElementById("product-list") as HTMLDivElement;
const filterButtons = document.querySelectorAll(".filter-buttons button");
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const searchInputMobile = document.getElementById("search-input-mobile") as HTMLInputElement;

//Alertas custom
function showAlert(message: string, type: "success" | "warning"): void {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert");

    if (type === "success") {
        alertBox.classList.add("success");
    } else {
        alertBox.classList.add("warning");
    }

    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

//Carregar JSON
async function loadProducts(): Promise<void> {
    try {
        const response = await fetch("./src/data/product.json");
        const data = await response.json();
        allProducts = data.products;
        renderProducts(allProducts);
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

//Criar os cards de 2 ou 3 produtos
function renderProducts(products: Product[]): void {
    const isMobile = window.matchMedia("(max-width: 935px)").matches;
    const productsToSee = isMobile ? products.slice(0, 2) : products.slice(0, 3);
    productList.innerHTML = "";

    productsToSee.forEach((product) => {
        // Container principal do card
        const card = document.createElement("div");
        card.classList.add("product-card");

        // Imagem do card
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        // Overlay que aparece no hover
        const overlay = document.createElement("div");
        overlay.classList.add("card-overlay");

        // Conteúdo interno do overlay
        const overlayContent = document.createElement("div");
        overlayContent.classList.add("overlay-content");

        const priceLabel = document.createElement("p");
        priceLabel.classList.add("price-label");
        priceLabel.textContent = `₦ ${(product.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        // Botão favorito
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
                showAlert(
                    `Produto "${product.name}" adicionado ao carrinho! Quantidade: ${currentQuantity}`,
                    "success"
                );
            } else {
                showAlert(
                    "Ops, não há esta quantidade de itens em estoque, desculpe!",
                    "warning"
                );
            }
        });

        // Inserindo os botões no container de botões
        btnContainer.appendChild(quantitySelector);
        btnContainer.appendChild(addCartBtn);

        // Hierarquia do overlay
        overlayContent.appendChild(priceLabel);
        overlayContent.appendChild(heartBtn);
        overlayContent.appendChild(productName);
        overlayContent.appendChild(descriptionLabel);
        overlayContent.appendChild(btnContainer);
        overlay.appendChild(overlayContent);

        // Hierarquia final do card
        card.appendChild(img);
        card.appendChild(overlay);

        productList.appendChild(card);
    });
}

//Lógica de toda a filtragem de produtos (Botões e Input)
function filterProducts(category: string): void {
    let filteredProducts: Product[] = [];

    if (category === "all") {
        filteredProducts = allProducts;
    } else if (category === "random") {
        filteredProducts = [...allProducts].sort(() => 0.5 - Math.random());
        //Compara pares, se o numero aleatorio for negativo o primeiro elemento é colocado antes do segundo, se positivo o primeiro elemento vai depois do segundo
    } else {
        filteredProducts = allProducts.filter((product) =>
            product.categories.includes(category)
        );
        filteredProducts = [...filteredProducts].sort(() => 0.5 - Math.random());
    }

    const searchTerm = (searchInput.value || searchInputMobile.value).toLowerCase().trim();
    if (searchTerm !== "") {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }

    renderProducts(filteredProducts);
}

//Gerenciamento dos botões de filtro
function searchProducts(): void {
    const activeButton = document.querySelector(
        ".filter-buttons button.active"
    ) as HTMLButtonElement;

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

//Ao carregar a página pega a referência dos inputs e carrega produtos
searchInput.addEventListener("input", searchProducts);
searchInputMobile.addEventListener("input", searchProducts);

loadProducts();

//Direcionamento dos links da nav para o shop
const navShopLinks = document.querySelectorAll('.drop-products li a');

navShopLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let categoryText = link.textContent?.trim().toLowerCase() || "";

        if (categoryText !== "fish" && categoryText.endsWith("s")) {
            categoryText = categoryText.slice(0, -1);
        }

        const shopSection = document.getElementById('shop');
        if (shopSection) {
            shopSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Procura o botão de filtro correspondente
        const filterButton = document.querySelector<HTMLButtonElement>(`.filter-buttons button[data-filter="${categoryText}"]`);
        if (filterButton) {
            filterButton.click();
        } else {
            filterProducts(categoryText);
        }
    });
});
