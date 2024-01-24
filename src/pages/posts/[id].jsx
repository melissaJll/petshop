import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  /* Utilizamos a prop param do getStaticProps para poder ter acesso aos parametros 
  dinamicos da rota configurada nos links da Lista de Posts. Usamos a desestruturação para
  obeter de forma direta o parametro chamado "id"*/
  const { id } = params;
  console.log(id);

  try {
    const resposta = await fetch(`${serverApi}/posts/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

/* getStaticPaths é obrigatoria quando se trata de trabalhar com paginas/rotas dinamicas, ou
seja, que dependem de parametros para serem construidas*/
export async function getStaticPaths() {
  return {
    /* path fica vazio pois todos os caminhos devem ser gerados sob demanda, ou seja, no momento
    em que a página for aberta */
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  const tituloPagina = `${post.titulo}`;
  return (
    <>
      <Head>
        <title>{tituloPagina}</title>
        <meta name="description" content={post.descricao} />
      </Head>

      <StyledPost>
        <h2>{tituloPagina}</h2>
        <Container>
          <h3>{post.categoria}</h3>
          <p>{post.descricao}</p>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article`
  h2::before {
    content: "📑 ";
  }
`;
