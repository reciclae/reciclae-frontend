import styled from 'styled-components';
import { Link as RouterLink } from "react-router-dom";

export const CreateEcoPointWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding-bottom: 30px;
`;

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;

  input {
    margin-right: 8px;
  }
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Link = styled(RouterLink)`
  background-color: #333;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

export const CreateButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
`;

export const FileInput = styled.input`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 10px;
`;

