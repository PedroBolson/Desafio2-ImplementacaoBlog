#  Pet Shop Project

Pet Shop Project é uma landing page interativa para uma loja de produtos e serviços para pets. 
Desenvolvido exclusivamente com HTML, CSS e TypeScript, o projeto apresenta seções dinâmicas, como blog, produtos, 
serviços, equipe e formulários de contato e newsletter, utilizando dados em formato JSON para renderização dos conteúdos.

## Tecnologias Utilizadas

### HTML
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="100" 
  height="100" 
  viewBox="0 0 48 48"
>
  <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
  <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
  <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
  <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
</svg>

### CSS
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="100" 
  height="100" 
  viewBox="0 0 48 48"
>
  <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
  <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
  <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
  <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
</svg>

### TypeScript
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="100" 
  height="100" 
  viewBox="0 0 48 48"
>
  <linearGradient id="O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1" x1="15.189" x2="32.276" y1="-.208" y2="46.737" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#2aa4f4"></stop>
    <stop offset="1" stop-color="#007ad9"></stop>
  </linearGradient>
  <rect width="36" height="36" x="6" y="6" fill="url(#O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1)"></rect>
  <polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon>
  <path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986c0,2.648,7.381,2.383,7.381,7.712
    c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92c0-2.449-7.315-2.449-7.315-7.878
    c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
</svg>

- **Webpack** para bundling  
- **JSON** para carregamento dos dados dinâmicos

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

1. Clone o repositório:
   git clone https://github.com/PedroBolson/Desafio2-ImplementacaoBlog.git

2. Navegue até a pasta do projeto:
   cd ProjectPetShop

3. Instale as dependências:
   npm install

4. Compile o projeto:
   Execute o comando abaixo para que o Webpack faça o bundle dos arquivos TypeScript e gere o arquivo único em dist/main.js:
   
   npm run build

5. Abra o projeto:
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

- Build:
   npm run build
   Gera o bundle final em modo produção (ou modo desenvolvimento se configurado).

## Autor

Pedro Bolson
