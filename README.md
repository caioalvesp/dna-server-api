## Página de Produtos - Teste DNA For Marketing

Página desenvolvida em Vue.js que exibe uma lista de produtos.

## Tecnologias e metodologias utilizadas

- Node.js
- Fastify
- Nodemon
- Typescript

## Passo a passo para execução do projeto

Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

## Pré-Requisitos

```
- Node >= 20.18.0
- NPM >= 10.8.2
```

## Instalação

**1 - Clonar o projeto**

```
git clone https://github.com/caioalvesp/dna-server-api.git
```

**2 - Entrar na raiz do projeto e instalar dependências**

```
- cd dna-server-api
- npm install
```

**3 - Rodar em modo de desenvolvimento**

```
npx ts-node ./src/server.ts
```

OBS: ao rodar o comando npm run dev, será aberta automaticamente uma página no seu navegador, apontando para http://localhost:7070, caso isso não aconteça, basta acessar a url manualmente. A página irá recarregar automaticamente caso haja alguma edição.

**4 - Build da aplicação para produção**

```
npm run build
```

OBS: Cria o aplicativo para produção na pasta `build`. <br>

**OBS: URL de produção**

```
https://dna-server-api.vercel.app/products
```

A API está hospedada e rodando em produção na Vercel e sendo consumida no front.
