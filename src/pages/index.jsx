import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
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

        <StyledListaPosts>
          <article>
            <Link href="">
              <h3>Titulo...</h3>
              <p>Subtitulo</p>
            </Link>
          </article>

          <article>
            <Link href="">
              <h3>Titulo...</h3>
              <p>Subtitulo</p>
            </Link>
          </article>
        </StyledListaPosts>
      </StyledHome>
    </>
  );
}

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;
    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #3b66df;
      }
    }
  }
  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
