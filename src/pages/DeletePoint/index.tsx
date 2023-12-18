import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import userPicture from "../../assets/user.png";

import {
  Button,
  Container,
  PointPicture,
  Paragraph,
  Form,
  Link,
  Title,
} from "./style";

interface EcoPoint {
  _id: string;
  name: string;
  latitude: string;
  longitude: string;
  metal: boolean;
  plastic: boolean;
  paper: boolean;
  glass: boolean;
  organic: boolean;
  electronic: boolean;
  image: File | null;
}

export const DeletePoint: React.FC = () => {
  const { id } = useParams();
  const token = localStorage.getItem('auth.token');
  const navigation = useNavigate();

  const [ecoPoint, setEcoPoint] = useState<EcoPoint>({
    _id: '',
    name: '',
    latitude: '',
    longitude: '',
    metal: false,
    plastic: false,
    paper: false,
    glass: false,
    organic: false,
    electronic: false,
    image: null,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get<EcoPoint>(`http://localhost:3001/ecopoint/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setEcoPoint(response.data);
    } catch (error) {
      console.error('Erro ao buscar o ponto: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/ecopoint/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if (response.data) {
        alert('Eco ponto deletado com sucesso!');
        // Redirecionar para a página inicial ou outra página após a exclusão
        navigation('http://localhost:3000/user');
      } else {
        alert('Falha ao deletar o eco ponto. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao deletar o eco ponto. Por favor, tente novamente mais tarde.' + error);
    }
  };

  return (
    <Container>
      <Title>Deletar ponto</Title>
      <Form>
            <PointPicture
              src={
                `http://localhost:3001/upload/${ecoPoint.image}`
              }
              alt="Image Preview"
            />
            <label>{ecoPoint.name}</label>
        </Form>
      <Paragraph>
        Tem certeza que deseja apagar esse ponto?
      </Paragraph>
      <Form>
        <Button onClick={handleDelete}>Deletar</Button>
      </Form><br />
      <Link to="/user">Voltar</Link>
    </Container>
  )
}
