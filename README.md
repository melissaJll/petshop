# PetShop: projeto Next.js

## Branch 11

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
