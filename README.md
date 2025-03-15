#  Pet Shop Project

Pet Shop Project é uma landing page interativa para uma loja de produtos e serviços para pets. 
Desenvolvido exclusivamente com HTML, CSS e TypeScript, o projeto apresenta seções dinâmicas, como blog, produtos, 
serviços, equipe e formulários de contato e newsletter, utilizando dados em formato JSON para renderização dos conteúdos.

## Tecnologias Utilizadas

### HTML5
<svg 
  width="80" 
  height="80" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill="#E34F26" 
    d="M1.5 0h21l-1.91 21.67L11.56 24l-9.04-2.33L1.5 0zm15.22 7.8l.14-1.59h-8.8l.27 3.1h5.26l-.2 2.3H8.35l.27 3.07 2.94.79 2.94-.79.18-2.03h-1.78l.1-1.13h1.58l.21-2.41H8.06l-.67-7.6h11.22l-.89 10.06-.27 3.02-3.89 1.05-3.89-1.05-.25-2.77h2.14l.08.85 1.92.52 1.92-.52.2-2.24z"
  />
</svg>

### CSS3
<svg 
  width="80" 
  height="80" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill="#1572B6" 
    d="M1.5 0h21l-1.91 21.67L11.56 24l-9.04-2.33L1.5 0zm16.68 5.59l-.15 1.63H8.14l.28 3.14h9.44l-.28 2.98-.03.33-2.75.75h-.01l-2.76-.74-.18-1.97H8.56l.36 4.06 2.64.72 2.64.71h.01l2.63-.71.34-3.76h-1.99l-.17 1.92-1.45.4-1.45-.4-.14-1.58-.08-.92h6.01l.27-2.98.55-6.01z"
  />
</svg>

### TypeScript
<svg 
  width="80" 
  height="80" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    fill="#3178C6" 
    d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm6.747 4.688h8.172v1.688H9.622v12.25H7.872v-12.25H4.949V4.688h2.923zm5.899 4.375c1.953 0 3.264.41 4.004 1.237.667.742.96 1.88.96 3.411v4.18h-1.64v-4.047c0-.96-.164-1.629-.508-2.008-.346-.383-.954-.574-1.82-.574-.547 0-1.016.043-1.405.129-.391.09-.842.238-1.35.445v5.907h-1.64V9.984c.652-.28 1.273-.48 1.863-.602a7.447 7.447 0 011.57-.176z"
  />
</svg>

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
