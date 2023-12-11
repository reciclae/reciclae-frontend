import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 680px;
  margin: 8rem auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'Kalam', cursive;
  font-size: 3em;
`;

export const UserContainer = styled.div`
  margin: 1rem;
`;

export const UserPicture = styled.img`
  width: 8rem;
  aspect-ratio: 1 / 1;
`;

export const Text = styled.p`
  margin: .25rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: .5em 1em;
  border-radius: .5em;
  box-shadow: 0 .25em .25em rgba(0, 0, 0, .1);
`;

export const Button = styled.button`
  padding: .5em 1em;
  border-radius: .5em;
  margin: 1rem;
  color: var(--bright);
  background-color: var(--primary);
  cursor: pointer;
`;

export const Link = styled(RouterLink)`
  font-weight: bold;
  text-decoration: underline;
`;
