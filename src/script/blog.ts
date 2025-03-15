interface BlogPost {
    id: number;
    title: string;
    image: string;
    text1: string;
    "sub-title": string;
    text2: string;
}

let allPosts: BlogPost[] = [];


const blogList = document.getElementById("blog-list") as HTMLDivElement;

// Carregar os dados do JSON
async function loadBlog(): Promise<void> {
    try {
        const response = await fetch("./src/data/blog.json");
        const data = await response.json();
        allPosts = data.posts;
        renderBlog(allPosts);
    } catch (error) {
        console.error("Erro ao carregar dados do blog:", error);
    }
}

// Função para renderizar os posts
function renderBlog(posts: BlogPost[]): void {
    blogList.innerHTML = "";

    posts.forEach((post) => {
        // Div principal (grid de 2 colunas)
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        // Coluna da esquerda (texto)
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("blog-text");
        leftDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p class='text-1'>${post.text1}</p>
        <h4>${post["sub-title"]}</h4>
        <p>${post.text2}</p>
        <a href="#" class="read-more-btn">Read more</a>`;

        // Coluna da direita
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("blog-image");

        const img = document.createElement("img");
        img.src = post.image;
        img.alt = "Golden retriever com ícone de player";

        rightDiv.appendChild(img);

        // Monta o blogCard
        blogCard.appendChild(leftDiv);
        blogCard.appendChild(rightDiv);

        blogList.appendChild(blogCard);
    });
}

// Carrega ao abrir a página
loadBlog();
