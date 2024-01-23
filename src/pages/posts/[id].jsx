import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Post() {
  return (
    <>
      <Head>
        <title>Titulo - Petshop</title>
        <meta name="description" content="Descrição" />
      </Head>

      <StyledPost>
        <h2>Titulo</h2>
        <Container>
          <h3>Categoria</h3>
          <p>Descricao</p>
        </Container>
      </StyledPost>
    </>
  );
}
const StyledPost = styled.article``;
