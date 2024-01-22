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
        {/* O componente ListaPost exibe os posts com os dados da props posts(listaDePosts) */}
        <ListaPost posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

// const StyledListaPosts = styled.div`
//   article {
//     background-color: #f7f7f7;
//     padding: 1rem;
//     margin-bottom: 1rem;
//     box-shadow: var(--sombra-box);
//     border-radius: var(--borda-arredondada);
//     transition: transform 200ms;
//     & a {
//       text-decoration: none;
//       color: black;

//       &:hover,
//       &:focus {
//         color: #3b66df;
//       }
//     }
//   }
//   article:hover {
//     cursor: pointer;
//     transform: scale(1.05);
//   }

//   @media screen and (min-width: 500px) {
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;

//     article {
//       width: 49%;
//     }
//   }
// `;

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
