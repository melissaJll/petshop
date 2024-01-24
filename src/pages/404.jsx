import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Pagina404() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Styled404>
        <h2>Au Au Au</h2>
        <Container>
          <h3>Ops! Algo deu errado</h3>
          <Image width={500} height={296} src="/images/404.svg" />
        </Container>
      </Styled404>
    </>
  );
}
const Styled404 = styled.section`
  text-align: center;
  img {
    max-width: 100%;
  }
`;
