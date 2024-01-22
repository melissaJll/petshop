import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";

export default function Home() {
  // {arrayPosts.map((post) => ())
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
        <ListaPost
          parametro={[
            {
              id: 1,
              titulo: "Banho no catiorrinho",
              subtitulo: "Use as utensilios certos para banhar seu cão",
            },
          ]}
        />

        {/* <StyledListaPosts>
          {arrayPosts.map((post) => (
            <article key={post.id}>
              <Link href="">
                <h3>{post.titulo}</h3>
                <p>{post.subtitulo}</p>
              </Link>
            </article>
          ))}
        </StyledListaPosts> */}
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
