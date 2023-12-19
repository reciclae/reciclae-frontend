import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";



export const Container = styled.div``;

export const Main = styled.div`
  display: flex;
  max-width: 100%;
  height: 90.5vh;
  padding: 0;
  margin: 0 ;

  flex-direction: row;
  justify-content: space-between; 


  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  width:60%;
  background-color: var(--greenBg);
  max-height: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

export const UserPicture = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: 3rem;
  border-radius: 3.5rem;
`;


export const TextContainer = styled.section`
  font-family: 'Kalam', cursive;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 2;
`;



export const Title = styled.h1`
  font-family: 'Kalam', cursive;
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 2rem;
  
`;


export const TextName = styled.p`
    font-size: 1rem; 
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.3rem;
    margin-top: 1.5rem;
   
`;

export const TextEmail = styled.p`
    font-size: 0.88rem; 
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2rem;
  
   
`;

 // btn adicionar ponto
export const Button = styled(RouterLink)`
  display: flex;
    background-color:var(--primary);
    color:var(--bright);
    width: 15.813rem;
    height: 3rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    margin-top:0.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.85rem; 
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif
`;

export const Img = styled.img`
  width: 1.5rem;
  margin-right: 5px;
`;

//btn edit e delete
export const BtnEdit = styled(RouterLink)`
    display: flex;
    background-color:var(--primary);
    color:var(--bright);
    width: 15.813rem;
    height: 2.063rem;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 3rem;
    font-size: 1rem; 
    justify-content: center;
    align-items: center;
    
`;



export const BtnDelete = styled.button`
    display: flex;
    background-color:var(--cancel);
    color:var(--bright);
    width: 15.813rem;
    height: 2.063rem;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 1rem; 
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`;

export const BoxPoints = styled.div`
   height: 500px;
   overflow-y: auto;
`;