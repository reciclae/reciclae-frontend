import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const Label = styled.label`
  display: block;
`;

export const Content = styled.input`
  padding: .5rem 1rem;
  border: 1px solid var(--secondary);
  border-radius: .5rem;
  box-shadow: 0 .1rem .5rem .25rem rgba(0, 0, 0, .1);
`;

export const Warning = styled.span`
  font-size: .8rem;
  color: var(--cancel);
`;
