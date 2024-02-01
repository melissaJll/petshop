# PetShop: projeto Next.js

## Branch 21-transformando-o-app-next-em-pwa

**PWA** significa **Progressive Web Application** (Aplicativo Web Progressivo). Trata-se de uma abordagem para desenvolvimento de aplicativos web que visa combinar características de sites e aplicativos móveis. As PWAs são construídas com tecnologias web tradicionais (HTML5, CSS e JavaScript) e oferecem uma experiência semelhante à de aplicativos nativos, podendo até mesmo serem instaladas no dispositivo móvel.

### Requisitos para uma PWA

1. Arquivo de manifesto

Arquivo chamado `manifest.json` com informações gerais sobre o aplicativo: nome, descrição, ícones, cores etc.

No caso do Next.js, este arquivo deve ser colocado na pasta `public` e adicionado via `meta tag` na página `_document.js`.

2. Criar/Configurar um Service Worker (JavaScript)

`Service Worker` é um script que o navegador executa em segundo plano, de forma independente da interface ou de interações do usuário. Ele permite usar recursos que transformam a aplicação em PWA, como instalação/desinstalação, cache offline, notificações etc. No caso do Next.js, o Service Worker será criado/configurado automaticamente com o auxílio da lib `next-pwa` e com ajustes no `next.config.js`.

3. Publicação em servidor com suporte à HTTPS

## Branch 19

https://petshop-melissa-default-rtdb.firebaseio.com/

https://tableconvert.com/json-to-firebase
de apiserver para posts

Depois importar posts.json com nome posts na URL do firebas

### Firebase

Firebase é uma plataforma de serviços web (web services) com uma série de funcionalidades de Back-end úteis para aplicações (web, jogos, apps).

No caso do Petshop, criamos um projeto Firebase e nele adicionamos um banxo de dados chamado "Firebase RealTime Database" para utilização como API JSON.

O Realtime Database é um banco de dados `NoSQL`, ou seja, um banco de dados **não-relacional**. É baseado em documentos no formato JSON contendo objetos de dados.

### Lembrete sobre uso de APIs

Como se trata de uma API JSON, podemos utilizar qualquer um dos verbos HTTPS paraconsumo de APIs padrão REST:

- GET: ler, obter dados
- POST: criar, inserir
- PUT: atualizar tudo
- PATCH: atualizar parcialmente
- DELETE: excluir

### Ajustes necessários para a aplicação usar a API Firebase JSON

- Em `index.jsx`, alterar a `getStaticProps` ajustando o endpoint para `/posts.json` e gerando um novo array com os posts/objetos carregados a partir da `const dados`.

- Em `[id].jsx`, alterar a `getStaticProps` ajustando o endpoint para `/posts/${id}.json`.

## Branch 14-usando-rotas-dinamicas

### Recursos necessários

- Pages/Rotas **dinâmicas** utilizando subpasta(post) e arquivo nomeado com **colchetes** indicando o nome do parâmetro. No caso foi criado o `[id].jsx`
- `getStaticProps`: Necessario para carregar os dados da API de acordo com o parametro (usando a prop `{param}`) e gerar o HTML via SSR.
- `getStaticPaths`

## Branch 13-consumindo-dados-usando-modo-Next

### Documentação oficial sobre SSR:

https://nextjs.org/docs/pages/building-your-application/data-fetching

### Resumo sobre as funções

`getStaticProps`: executada no lado do servidor (SSR - Server Side Rendering), portanto logs, erros, lógicas, ações/comandos NÃO aparecem para o usuário (mas aparecem no terminal para o programador(a)).

Na maioria dos casos usaremos `getStaticProps` para este tipo de processamento em que os dados são consumidos (Data Fetching) através da uma API, já que esta função tem uma perfomance melhor por fazer o processamento apenas no momento da requisição.

Também há a função `getServerSideProps` que pode ser útil para páginas cujos dados mudam frequentemente ou são diferentes para cada usuário (como no caso de uso de dados de geolocalização).

## Branch 12-desafio-consumindo-dados-usando-modo-React

### Orientações gerais

- Você precisará programar a página inicial (arquivo index) para que, através da **API Fake**, os dados dos posts sejam consumidos e carregados/repassados ao `ListaPosts`.
- Para isso, você precisa verificar qual é a **URL do Endpoint da API** e programar recursos utilizando `useState` e `useEffect`.
- No caso do `useState`, crie as constantes **listaDePosts** e **setListaDePosts**.
- No caso do `useEffect`, programe o necessário para usar a função `fetch`.

## Branch 11-usando-json-server-como-fake-api

### Etapas

1. Instalação global do `json-server` : `npm install -g json-server`
2. Colocação do arquivo `db.json` na raíz do projeto (este arquivo funcionará como um banco de dados para a API)
3. Pegar o IP da máquina usando `ipconfig`
4. Adicionar um script npm no `package.json` com a seguinte configuração:
   `"api": "json-server --host 10.20.46.28 db.json --port 2112"`
5. Executar a API usando `npm run api`

json-server --host 10.20.46.28 db.json --port 2112

json-server --watch db.json

npm install -g

json-server --version

## Branch 10-desafio-transformar-lista-de-posts-em-componente

- Crie na pasta `components` um componente chamado `ListaPosts`
- Modifique a página inicial para que ela utilize este componente.

**Atenção:** toda a lógica/programação feita em relação ao <StyledListaPosts> deve ser migrada para o novo componente, exceto o `import` do `arrayPosts` que deve continuar na página inicial.

Portanto, você deverá repassar o `arrayPosts` via `props` para o novo componente.

## Branch 09-desafio-carregamento-do-array-posts

- Importe o array de posts para a página inicial
- Modifique o <StyledListaPosts> para que os <article> sejam gerados com auxílio do `map` processando os dados do arquivo `array-posts.js`. Portanto, o `map` irá gerar 4 <article> já que o `array-posts.js` possui 4 objetos/posts.

**Atenção**: para este desafio NÃO É necessário usar `useState` e/ou `useEffect`.

## Branch 05

### Importante!!!

Após instalar o `styled-components`, ative o suporte à compilação dele pelo next.js modificando o arquivo `next.confug.js`

@type {import('next').NextConfig}
const nextConfig = {
reactStrictMode: true,
compiler: {
styledComponents: true,
},
};

module.exports = nextConfig;

## Recursos utilizados

- Next.js
- API Fake/Local
- API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e na Netlify
