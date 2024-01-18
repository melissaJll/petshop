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
  border-radius: var(--borda-arredondada);

  a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0%.8rem 1rem;
  }
`;
