import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useState } from "react";
import Link from "next/link";
import serverApi from "./api/server";

// Executada no Servidor/Backend
// Função getStaticProps - Utilizada para execução do código server-side (neste caso,
//fetch na API) com o objetivode gerar props com os dados processados
export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    // objeto dentro de objeto - props recebe dados
    //Após o processamento (desde de que nao haja erros ), a getStaticProps retorna um objeto com uma propriedade chamada "props"
    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts }) {
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
