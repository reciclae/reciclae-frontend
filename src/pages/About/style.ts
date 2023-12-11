import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1360px;
  padding: 4rem;
  margin: 0 auto 8rem;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Illustration = styled.img``;

export const TextContainer = styled.section`
  font-family: 'Kalam', cursive;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
