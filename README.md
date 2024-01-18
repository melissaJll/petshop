# PetShop: projeto Next.js

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
