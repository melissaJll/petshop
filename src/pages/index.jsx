import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useState } from "react";
import Link from "next/link";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Extraindo as categorias dos posts para um novo array */
    const categorias = dados.map((post) => post.categoria);
    console.log(categorias);

    /* Gerando um array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;

    const postsFiltrados = posts.filter((post) => {
      return post.categoria === categoriaEscolhida || post.categoria === null;
    });

    setListaDePosts(postsFiltrados);
    console.log(listaDePosts);
  };

  return (
    <>
      <Head>
        <title>Petshop 2024</title>
        <meta name="description" content="Blog" />
        <meta
          name="keywords"
          content="Petshop, Banho, Ração, Gato, Chachorro"
        />
      </Head>
      {/* Definindo prop  = como o resultado do state setListaDePosts(dados) = listaDePosts */}
      <StyledHome>
        <h2>Pet noticias</h2>

        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return (
              <button onClick={filtrar} key={indice}>
                {categoria}
              </button>
            );
          })}

          <button className="limpar">Limpar</button>
        </StyledCategorias>

        <ListaPost posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;

const StyledCategorias = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  /* background-color: aliceblue; */

  button {
    background-color: #5f5aa8;
    border: none;
    color: aliceblue;
    padding: 0.8rem;
    border-radius: 1.3rem;
    margin: 1.3rem auto;
    font-weight: bold;
    cursor: pointer;
    text-transform: capitalize;

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo-hover);
      cursor: pointer;
    }
  }

  .limpar {
    border: #5f5aa8 solid 2px;
    background-color: #f8f6fa;
    color: #5f5aa8;
    &:hover,
    &:focus {
      background-color: #5f5aa8;
      color: #f8f6fa;
    }
  }
`;
