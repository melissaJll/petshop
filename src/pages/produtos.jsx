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
        <article>
          <h3>Banho</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis molestias repellat sapiente, eum veritatis
            earum totam inventore possimus quibusdam perspiciatis, cumque fuga.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            quo illo.
          </p>
        </article>
        <article>
          <h3>Castração</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis molestias repellat sapiente, eum veritatis
            earum totam inventore possimus quibusdam perspiciatis, cumque fuga.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            quo illo.
          </p>
        </article>
        <article>
          <h3>Tosa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis molestias repellat sapiente, eum veritatis
            earum totam inventore possimus quibusdam perspiciatis, cumque fuga.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            quo illo.
          </p>
        </article>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
  }
`;
