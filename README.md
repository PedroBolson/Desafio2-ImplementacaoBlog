#  Pet Shop Project

---

## English

**Pet Shop Project** is an interactive landing page for a pet products and services store.  
Developed exclusively with HTML, CSS, and TypeScript, the project features dynamic sections such as a blog, products, services, team, and contact/newsletter forms, using JSON data for content rendering.

### Technologies Used

#### HTML  
<img 
  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
  alt="HTML5 logo" 
  width="80px"
/>

#### CSS  
<img 
  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" 
  alt="CSS3 logo" 
  width="80px"
/>

#### TypeScript  
<img 
  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
  alt="TypeScript logo" 
  width="80px"
/>

- **Webpack** for bundling  
- **JSON** for dynamic data loading

### Features

- **Modern Landing Page:** Responsive design with featured sections and call-to-action.
- **Dynamic Blog:** Loads and renders posts from a JSON file.
- **Product Showcase:** Displays products with filters, search, cart interaction, and redirection to the main store.
- **Interactive Services:** Service cards with hover and click effects to display information.
- **Team Section:** Showcases team members with links to social media.
- **Validated Forms:** Implements validation for contact and newsletter forms using TypeScript.
- **Smooth Navigation:** Smooth scrolling to sections when navigation links are clicked.
- **Main Store:** A second page developed to display all store products, accessible via the 'View More' button in the Shop section.

### Project Structure

```
ProjectPetShop/
├── dist/                   # Generated bundle (compiled file(s) - ignored in Git)
├── src/
│   ├── data/               # JSON files (blog.json, product.json, service.json, team.json)
│   ├── images/             # Product image files (png)
│   ├── scripts/            # TypeScript code (blog.ts, error.ts, nav.ts, product.ts, service.ts, shop.ts, team.ts)
│   ├── styles/             # CSS files       
│   └── main.ts             # Entry point TypeScript file for Webpack to convert to JavaScript
├── index.html              # Main HTML file
├── .gitignore              # Files and folders ignored by Git (e.g., /dist)
├── package.json            # Project dependencies and scripts
├── shop.html               # Main store HTML file
├── tsconfig.json           # TypeScript compiler configuration
└── webpack.config.js       # Webpack configuration for bundling
```

### Installation and Setup

1. **Clone the repository:**
   git clone https://github.com/PedroBolson/Desafio2-ImplementacaoBlog.git


2. **Navigate to the project folder:**
   cd ProjectPetShop

3. **Install dependencies:**
   npm install

4. **Compile the project:**
   Run the command below for Webpack to bundle the TypeScript files and generate the single file in `dist/main.js`:

   npm run build

5. **Open the project:**
   Open the `index.html` file in your browser or use a local server (such as Live Server) to view the application.

### Development

- **TypeScript and Webpack:**  
The project uses Webpack with ts-loader to compile and bundle the TypeScript files. The entry point is `src/main.ts`, which imports other modules (blog, products, services, team, and validations).

- **CSS and Responsiveness:**  
The styles are organized in the `src/styles` folder. The design is responsive, adapting to various screen sizes.

- **JSON Data:**  
Dynamic content (blog posts, products, services, team) is loaded from JSON files located in `src/data`.

### Useful Scripts

In the `package.json` file, you will find scripts to build and manage the necessary files for the page's interactivity:

- **Build:**
   npm run build
   Generates the final bundle in production mode (or in development mode if configured).

### Author

Pedro Bolson

---

## Português

Pet Shop Project é uma landing page interativa para uma loja de produtos e serviços para pets. 
Desenvolvido exclusivamente com HTML, CSS e TypeScript, o projeto apresenta seções dinâmicas, como blog, produtos, 
serviços, equipe e formulários de contato e newsletter, utilizando dados em formato JSON para renderização dos conteúdos.

## Tecnologias Utilizadas

### HTML
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
    alt="HTML5 logo" 
    width="80px"
  />

### CSS
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" 
    alt="CSS3 logo" 
    width="80px"
  />

### TypeScript
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
    alt="TypeScript logo" 
    width="80px"
  />

- **Webpack** para bundling  
- **JSON** para carregamento dinâmico


## Funcionalidades

- Landing Page Moderna: Design responsivo com seções de destaque e chamadas para ação.
- Blog Dinâmico: Carrega e renderiza posts a partir de um arquivo JSON.
- Vitrine de Produtos: Exibição de produtos com filtros, busca, interação de carrinho e direcionamento para a loja principal.
- Serviços Interativos: Cards de serviços com efeitos de hover e clique para exibição de informações.
- Seção de Equipe: Mostra os membros da equipe com links para redes sociais.
- Formulários com Validação: Validações de formulário para contato e newsletter implementadas em TypeScript.
- Navegação Suave: Scroll suave para seções quando os links da navegação são clicados.
- Loja Principal: Segunda página desenvolvida para exibir todos os produtos da loja, acessada pelo botão 'View More' na seção Shop.

## Estrutura do Projeto

```
ProjectPetShop/
├── dist/                   # Bundle gerado (arquivo(s) compilado(s) - ignorados no Git)
├── src/
│   ├── data/               # Arquivos JSON (blog.json, product.json, service.json, team.json)
│   ├── images/             # Arquivos png dos produtos
│   ├── scripts/            # Código TypeScript (blog.ts, error.ts, nav.ts, product.ts, service.ts, shop.ts, team.ts)
│   ├── styles/             # Arquivos CSS       
│   └── main.ts             # Código TypeScript para utilizar Webpack e converter para JavaScript
├── index.html              # Arquivo HTML principal
├── .gitignore              # Arquivos e pastas ignorados pelo Git (ex: /dist)
├── package.json            # Dependências e scripts do projeto
├── shop.html               # Arquivo HTML da loja principal
├── tsconfig.json           # Configurações do compilador TypeScript
└── webpack.config.js       # Configuração do Webpack para bundling
```
## Instalação e Configuração

1. **Clone o repositório:**
   git clone https://github.com/PedroBolson/Desafio2-ImplementacaoBlog.git

2. **Navegue até a pasta do projeto:**
   cd ProjectPetShop

3. **Instale as dependências:**
   npm install

4. **Compile o projeto:**
   Execute o comando abaixo para que o Webpack faça o bundle dos arquivos TypeScript e gere o arquivo único em dist/main.js:
   
   npm run build

5. **Abra o projeto:**
   Abra o arquivo index.html no seu navegador ou utilize um servidor local (como o Live Server) para visualizar a aplicação.

## Desenvolvimento

- TypeScript e Webpack:  
  O projeto utiliza o Webpack com o ts-loader para compilar e agrupar os arquivos TypeScript. 
  O ponto de entrada é src/main.ts, que importa os demais módulos (blog, produtos, serviços, equipe e validações).

- CSS e Responsividade:  
  Os estilos estão organizados na pasta src/styles. O design é responsivo, adaptando a exibição para diferentes tamanhos de tela.

- Dados em JSON:  
  Os conteúdos dinâmicos (posts do blog, produtos, serviços, equipe) são carregados a partir de arquivos JSON localizados em src/data.

## Scripts Úteis

No arquivo package.json, você encontrará scripts para renderizar os scripts necessários para a interatividade da página:

- **Build:**
   npm run build
   Gera o bundle final em modo produção (ou modo desenvolvimento se configurado).

## Autor

Pedro Bolson
