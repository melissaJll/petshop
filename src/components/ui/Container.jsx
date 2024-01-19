import styled from "styled-components";

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  width: 100%;
  box-shadow: var(--sombre-box);
  background-color: #f7f7f7;
  border-radius: var(--borda-arredondada);
  padding: 1rem;
`;
