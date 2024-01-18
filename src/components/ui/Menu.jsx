import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Menu() {
  // captura o valor retornado do hoook usePathName na variavel pare ser comparado
  // usePathname é um gancho do componente cliente que permite ler o caminho do URL atual
  const pathname = usePathname();

  //função que faz a comparação dado o parametro "/..." e realiza a condicional
  const verificaActive = (path) => (pathname === path ? "ativo" : "");
  return (
    <>
      <StyledNav>
        <Link href="/" className={verificaActive("/")}>
          Blog
        </Link>

        <Link href="/produtos" className={verificaActive("/produtos")}>
          Produtos
        </Link>

        <Link href="/sobre" className={verificaActive("/sobre")}>
          Sobre
        </Link>

        <Link href="/contato" className={verificaActive("/contato")}>
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

  a.ativo {
    background-color: #663a83;
  }

  /* .nao-ativo {
    background-color: var(--cor-primaria-fundo);
  } */
`;
