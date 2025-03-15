interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}

let allServices: Service[] = [];

const serviceList = document.getElementById("service-list") as HTMLDivElement;

//Carregar o JSON de serviços
async function loadServices(): Promise<void> {
    try {
        const response = await fetch("./src/data/service.json");
        const data = await response.json();
        allServices = data.services;
        renderServices(allServices);
    } catch (error) {
        console.error("Erro ao carregar serviços:", error);
    }
}


function renderServices(services: Service[]): void {
    serviceList.innerHTML = "";

    services.forEach((service) => {
        const serviceButton = document.createElement("button");
        serviceButton.classList.add("service-card");

        // Imagem
        const img = document.createElement("img");
        img.src = service.image;
        img.alt = service.title;

        const overlayDiv = document.createElement("div");
        overlayDiv.classList.add("service-overlay");

        //Título, Descrição e Botão
        overlayDiv.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <button class="learn-more-btn">Learn More</button>`;

        // Montagem final
        serviceButton.appendChild(img);
        serviceButton.appendChild(overlayDiv);

        serviceButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const allButtons = document.querySelectorAll(".service-card");
            allButtons.forEach((btn) => btn.classList.remove("active"));
            serviceButton.classList.add("active");
        });

        serviceList.appendChild(serviceButton);
    });
}

//Carrega os serviços junto com a página
loadServices();

//Redirecionamento da nav
const navServiceLinks = document.querySelectorAll('.drop-service li a');

navServiceLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const serviceTitle = link.textContent?.trim() || "";

        const serviceSection = document.getElementById("service");
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: "smooth" });
        }

        // Encontrar o botão cujo h3 interno tenha o mesmo texto do link
        const matchingButton = Array.from(
            document.querySelectorAll<HTMLButtonElement>(".service-card")
        ).find((btn) => {
            return btn.querySelector("h3")?.textContent === serviceTitle;
        });

        //Simula o clique
        if (matchingButton) {
            matchingButton.click();
        }
    });
});

// Listener global para remover o active ao clicar fora de um card
document.addEventListener("click", (event) => {
    if (
        !(event.target as HTMLElement).closest(".service-card") &&
        !(event.target as HTMLElement).closest(".drop-service")
    ) {
        document.querySelectorAll(".service-card").forEach((btn) => {
            btn.classList.remove("active");
        });
    }
});