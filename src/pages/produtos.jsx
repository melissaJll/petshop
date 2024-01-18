import Head from "next/head";
import styled from "styled-components";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - Petshop</title>
        <meta name="description" content="produto do petshop" />
        <meta name="keywords" content="coleira, ração, brinquedo de cachorro" />
      </Head>
      <StyledProdutos>
        <h2>Conheça nosso produtos</h2>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
  }
`;
