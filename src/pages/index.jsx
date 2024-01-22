import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [listaDePosts, setListaDePosts] = useState([]);
  //   [] - Array de todos os produtos

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch("http://localhost:2112/posts");
        const dados = await resposta.json();
        setListaDePosts(dados);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

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
      <StyledHome>
        <h2>Pet noticias</h2>
        {/* Definindo prop  = como o resultado do state setListaDePosts(dados) = listaDePosts */}
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
