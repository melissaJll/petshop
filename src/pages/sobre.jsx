import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title> Sobre - Petshop</title>
        <meta name="description" content="informações do petshop" />
      </Head>
      <StyledSobre>
        <h2>Sobre nossos Petshop</h2>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
