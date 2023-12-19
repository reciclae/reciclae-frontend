import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './style';

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
  const navigate = useNavigate();

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

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.delete(`http://localhost:3001/ecopoint/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if (response.data) {
        alert('Eco ponto deletado com sucesso!');
        navigate(`/user`);
      } else {
        alert('Falha ao deletar o eco ponto. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao deletar o eco ponto. Por favor, tente novamente mais tarde.' + error);
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>Deletar ponto</S.Title>
        <S.Form onSubmit={handleDelete}>
          <S.PointPicture
            src={
              `http://localhost:3001/upload/${ecoPoint.image}`
            }
            alt="Image Preview"
            />
          <label>{ecoPoint.name}</label>
            
          <S.Paragraph>
            Tem certeza que deseja apagar esse ponto?
          </S.Paragraph>
          
          <S.Button type="submit">Deletar</S.Button>
          <S.Link to="/user">Voltar</S.Link>
        </S.Form>
      </S.Container>
    </>
  )
}
