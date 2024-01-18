import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
    <>
      <StyledNav>
        <Link href="/">Blog</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: var(--borda-arredondada); */

  a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.8rem 1rem;

    /* Versão 1 */
    &:first-child {
      border-bottom-left-radius: var(--borda-arredondada);
      border-top-left-radius: var(--borda-arredondada);
    }
  }

  /* Versão 2 */
  a:last-child {
    border-top-right-radius: var(--borda-arredondada);
    border-bottom-right-radius: var(--borda-arredondada);
  }
`;
