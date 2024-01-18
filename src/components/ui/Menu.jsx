import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Menu() {
  const pathname = usePathname();
  // captura o nome do caminho da página atual
  return (
    <>
      <StyledNav>
        <Link
          href="/"
          className={pathname === "/" ? "selecionado" : "nao-selecionado"}
        >
          Blog
        </Link>

        <Link
          href="/produtos"
          className={
            pathname === "/produtos" ? "selecionado" : "nao-selecionado"
          }
        >
          Produtos
        </Link>

        <Link
          href="/sobre"
          className={pathname === "/sobre" ? "selecionado" : "nao-selecionado"}
        >
          Sobre
        </Link>

        <Link
          href="/contato"
          className={
            pathname === "/contato" ? "selecionado" : "nao-selecionado"
          }
        >
          Contato
        </Link>
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

    &:first-child {
      border-bottom-left-radius: var(--borda-arredondada);
      border-top-left-radius: var(--borda-arredondada);
    }
    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);

      &:hover,
      &:focus {
        background-color: var(--cor-primaria-fundo-hover);
      }
    }
    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  .selecionado {
    background-color: #663a83;
  }
  .nao-selecionado {
    background-color: var(--cor-primaria-fundo);
  }
`;
