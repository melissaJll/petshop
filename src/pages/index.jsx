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
    // console.log(dados); daqui vem CATEGORIA

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /*Extraindo as categorias dos posts para um novo array com map*/
    // dados é um array coms os objetos post
    const categorias = dados.map((post) => post.categoria);
    console.log(categorias);

    /* gerando um array de categorias sem repetição */
    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    // objeto dentro de objeto - props recebe dados
    //Após o processamento (desde de que nao haja erros ), a getStaticProps retorna um objeto com uma propriedade chamada "props"
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
  // console.log(categorias); teste de comunicação
  const [listaDePosts, setListaDePosts] = useState(posts);

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
