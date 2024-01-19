import styled from "styled-components";
import arrayPosts from "@/pages/api/array-posts";
import Link from "next/link";

export default function ListaPost() {
  return (
    <StyledListaPosts>
      {arrayPosts.map((post) => (
        <article key={post.id}>
          <Link href="">
            <h3>{post.titulo}</h3>
            <p>{post.subtitulo}</p>
          </Link>
        </article>
      ))}
    </StyledListaPosts>
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
    width: 100%;

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

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 49%;
    }
  }
`;
