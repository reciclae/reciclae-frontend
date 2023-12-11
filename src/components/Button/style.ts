import styled from "styled-components";

interface ContainerProps {
  variant: "positive" | "negative"
}

export const Container = styled.button<ContainerProps>`
  padding: .5rem 1rem;
  border-radius: .5rem;
  color: var(--bright);
  box-shadow: 0 .1rem .5rem .25rem rgba(0, 0, 0, .1);;
  cursor: pointer;
  transition: 250ms;

  background-color: ${ ({variant}) => (
    variant == "positive" ? "var(--primary)" : "var(--cancel)"
  ) };

  &:hover {
    filter: contrast(125%);
  }
`;
