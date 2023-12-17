import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";



export const Container = styled.div`
   `;

export const Box = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    height: 100%;
    `;

export const BoxInfo = styled.div`
    display: flex;
    /* justify-content:center; */
    flex-direction:column;
    width: 50rem;
    height: 30rem;
    align-items: center;
    margin-top: 3rem;
    padding: 1rem;
    //border
    border-color: var(--greenDark);
    border-radius: 10px;
    border-style: solid;
    border: 10px;
    background-color: var(--greenBg);

    `;
export const ImgPoint = styled.img`
    max-width: 20rem;
    max-height: 12rem;
    border-radius: 10px;
    margin-top: 2rem;
`;

export const Title = styled.h3`
  font-family: 'Kalam';
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 1rem;
  `;

export const Text = styled.p`
    font-size: 1rem; 
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-align: center;
    `;

export const Button = styled.button`
    display: flex;
    background-color:var(--primary);
    color:var(--bright);
    width: 150px;
    height: 40px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 3rem;
    font-size: 1rem; 
    justify-content: center;
    align-items: center;
    
`;

export const ImgButon= styled.img `
    margin-right: 5px;
`;

