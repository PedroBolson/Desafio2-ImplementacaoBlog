#  Pet Shop Project

Pet Shop Project é uma landing page interativa para uma loja de produtos e serviços para pets. 
Desenvolvido exclusivamente com HTML, CSS e TypeScript, o projeto apresenta seções dinâmicas, como blog, produtos, 
serviços, equipe e formulários de contato e newsletter, utilizando dados em formato JSON para renderização dos conteúdos.

## Tecnologias Utilizadas

- [HTML5](https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg)
- [CSS3](https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg)
- [TypeScript](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)
- Webpack para bundling
- JSON para carregamento dos dados dinâmicos

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
