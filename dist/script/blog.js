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
let allPosts = [];
const blogList = document.getElementById("blog-list");
function loadBlog() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./src/data/blog.json");
            const data = yield response.json();
            allPosts = data.posts;
            renderBlog(allPosts);
        }
        catch (error) {
            console.error("Erro ao carregar dados do blog:", error);
        }
    });
}
function renderBlog(posts) {
    blogList.innerHTML = "";
    posts.forEach((post) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("blog-text");
        leftDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p class='text-1'>${post.text1}</p>
        <h4>${post["sub-title"]}</h4>
        <p>${post.text2}</p>
        <a href="#" class="read-more-btn">Read more</a>`;
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("blog-image");
        const img = document.createElement("img");
        img.src = post.image;
        img.alt = "Golden retriever com ícone de player";
        rightDiv.appendChild(img);
        blogCard.appendChild(leftDiv);
        blogCard.appendChild(rightDiv);
        blogList.appendChild(blogCard);
    });
}
loadBlog();
