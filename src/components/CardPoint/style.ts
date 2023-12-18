import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";



export const Container = styled.div`
   `;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 180px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 6px;
    border-radius: 10px;
    border-color: var(--greenBg);
    border-style: solid;
    border-width: 2px;
    box-shadow: 0 0 6px 0 #000;
    `;

export const BoxInfo = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;

    `;


export const ImgPoint = styled.img`
    width: 11rem;
    height: 10rem;
    border-radius: 10px;
    border-color: var(--greenBg);
    border-style: solid;
    border-width: 2px;
    
`;

export const Title = styled.h3`
  /* font-family: 'Kalam'; */
  font-family: 'Roboto', sans-serif;
  font-size: 1.5;
  font-weight: 700;
  
  `;

export const Text = styled.p`
    font-size: 1rem; 
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-align: center;
    `;


export const BoxButon= styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;
export const BtnEdit = styled.button`
    display: flex;
    background-color:var(--primary);
    color:var(--bright);
    width: 50px;
    height: 50px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;  
    justify-content: center;
    align-items: center;
    
`;

export const BtnDelete = styled.button`
    display: flex;
    background-color:var(--cancel);
    color:var(--bright);
    width: 50px;
    height: 50px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;  
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-right: 0.5rem;
    
`;

export const BoxImg= styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ImgButon= styled.img `
    
`;

