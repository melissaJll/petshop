import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useState } from "react";
import serverApi from "./api/server";
import ListaCategorias from "@/components/ListaCategorias";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts.json`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    // Colocando os dados dos objetos dentro de um array
    // spred (...) traz categoria, titulo, sub... junto com o Id, que agora é definido com o hash(object.keys)
    // console.log(post): post são os hashs por isso atribuimos ele ao nome Id:
    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });

    /* Extraindo as categorias dos posts para um novo array */
    // arrayDePosts agora é o array de posts - dados é um objeto de objetos
    const categorias = arrayDePosts.map((post) => post.categoria);
    // console.log(categorias);

    /* Gerando um array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];
    // console.log(categoriasUnicas);

    return {
      props: {
        // arrayDePosts agora é o array de posts - dados é um objeto de objetos
        posts: arrayDePosts,
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
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState(""); //texto vazio sem seleção

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;

    const postsFiltrados = posts.filter((post) => {
      return post.categoria === categoriaEscolhida || post.categoria === null;
    });

    setFiltroAtivo(true);
    setListaDePosts(postsFiltrados);
    setCategoriaAtiva(categoriaEscolhida);
  };

  const limparFiltro = () => {
    // post - prop original que venho da API
    //Traz todas as categorias sem filtro (no estado original antes de listaDePosts)
    setListaDePosts(posts);
    setFiltroAtivo(false);
    // Ao limpar o filtro, definimos a categoria ao estado inicial "" vazio
    setCategoriaAtiva("");
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

        <ListaCategorias
          todasCategorias={categorias}
          onLimparfiltro={limparFiltro}
          onFiltrar={filtrar}
          filtroAtivo={filtroAtivo}
          categoriaAtiva={categoriaAtiva}
        />

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

    &.ativo {
      background-color: var(--cor-secundaria-fundo-hover);
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
