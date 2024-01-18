import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import styled from "styled-components";

export default function Cabecalho() {
  return (
    <>
      <StyledHeader>
        <div className="limitador">
          <h1>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={48}
                height={48}
                alt="patinha dentro de um coração"
              />
              Petshop
            </Link>
          </h1>
          <Menu></Menu>
        </div>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  background-color: #faf9fc;
  box-shadow: var(--sombra-box);
  h1 a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    /* #5b2081 */
    border-radius: var(--borda-arredondada);
    padding: 0.5rem 1.2rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
