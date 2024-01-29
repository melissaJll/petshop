import styled from "styled-components";
export default function ListaCategorias({
  todasCategorias,
  limparfiltro,
  filtrar,
  filtroativo,
  categoriaativa,
}) {
  return (
    <>
      <StyledCategorias>
        {todasCategorias.map((categoria, indice) => {
          return (
            <button
              className={categoriaativa == categoria ? "ativo" : ""}
              onClick={filtrar}
              key={indice}
            >
              {categoria}
            </button>
          );
        })}

        {/*se filtro true mostre o botão */}
        {filtroativo && (
          <button onClick={limparfiltro} className="limpar">
            Limpar
          </button>
        )}
      </StyledCategorias>
    </>
  );
}

const StyledCategorias = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  /* background-color: aliceblue; */

  button {
    background-color: #5f5aa8;
    border: none;
    color: aliceblue;
    padding: 0.8rem;
    border-radius: 1.3rem;
    margin: 1.3rem auto;
    font-weight: bold;
    cursor: pointer;
    text-transform: capitalize;

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo-hover);
      cursor: pointer;
    }

    &.ativo {
      background-color: var(--cor-secundaria-fundo-hover);
    }
  }

  .limpar {
    border: #5f5aa8 solid 2px;
    background-color: #f8f6fa;
    color: #5f5aa8;
    &:hover,
    &:focus {
      background-color: #5f5aa8;
      color: #f8f6fa;
    }
  }
`;
