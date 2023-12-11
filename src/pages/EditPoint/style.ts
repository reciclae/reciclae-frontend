import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: fit-content;
  margin: 2rem auto;
`;

export const Label = styled.label`
  color: var(--secondary);
`;

export const ImageInput = styled.input`
  padding: .5rem 1rem;
  border-radius: .5rem;
  box-shadow: 0 .25rem .25rem rgba(0, 0, 0, .1);
  background-color: rgba(59, 59, 59, .5);
  aspect-ratio: 4 / 3;
`;

export const TextInput = styled.input`
  padding: .5rem 1rem;
  border: 1px solid var(--dark);
  border-radius: .5rem;
  box-shadow: 0 .25rem .25rem rgba(0, 0, 0, .1);
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
`;

export const BackLink = styled(Link)`
  padding: .5em 1em;
  border-radius: .5em;
  color: var(--bright);
  background-color: var(--cancel);
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: .5em 1em;
  border-radius: .5em;
  color: var(--bright);
  background-color: var(--primary);
  cursor: pointer;
`;
