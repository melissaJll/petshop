import Container from "@/components/ui/Container";
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

        <Container>
          <h3>Missão</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis molestias repellat sapiente, eum veritatis
            earum totam inventore possimus quibusdam perspiciatis, cumque fuga.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            quo illo.
          </p>
          <h3>Visão</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis molestias repellat sapiente, eum veritatis
            earum totam inventore possimus quibusdam perspiciatis, cumque fuga.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            quo illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In libero exercitationem amet nesciunt nostrum.
          </p>
          <h3>Valores</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis molestias repellat sapiente, eum veritatis
            earum totam inventore possimus quibusdam perspiciatis, cumque fuga.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            quo illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta quia odio cupiditate harum assumenda iste blanditiis velit
            maxime ex accusantium.
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
