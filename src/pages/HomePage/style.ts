import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";



export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  align-items: center;
  /* gap: 4rem; */
  max-width: 1360px;
  padding: 4rem;
  margin: 0 auto 8rem;

  flex-direction: row;
  justify-content: space-between; 


  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const GraphicContainer = styled.section`
  width:100%;

`;


export const TextContainer = styled.section`
  font-family: 'Kalam', cursive;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: column;
`;


export const Signup = styled(RouterLink)`
    background-color:var(--primary);
    color:var(--bright);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 3rem;
    font-size: 1.2rem; 
`;



export const Title = styled.h1`
  font-family: 'Kalam', cursive;
  font-size: 3em;
  font-weight: 700;
  color: var(--primary);
  margin-top: 2rem;
  
`;

export const Text = styled.p`
    font-size: 1rem; 
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: var(--greenDark);
    margin-top: 2rem;
   
`;

export const TextGraphic = styled.p`
    font-size: 1rem; 
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: var(--greenDark);
    text-align: center;
    margin-bottom: 2rem;
   
`;