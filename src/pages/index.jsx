import Head from "next/head";
import styled from "styled-components";

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
      </StyledHome>
    </>
  );
}
const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
