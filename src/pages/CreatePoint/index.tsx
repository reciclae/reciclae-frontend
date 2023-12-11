import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style';

const CreateEcoPoint = () => {
  const [formData, setFormData] = useState({
    name: '',
    latitude: '',
    longitude: '',
    metal: false,
    plastic: false,
    paper: false,
    glass: false,
    organic: false,
    electronic: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/ecopoint', formData);

      if (response.data) {
        alert('Eco ponto criado com sucesso!');
      } else {
        alert('Falha ao criar o eco ponto. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao criar o eco ponto. Por favor, tente novamente mais tarde.');
    }
  };

  const handleGoBack = () => {
    // Adicionar a lógica para voltar (por exemplo, usando o react-router-dom)
    console.log('Voltar');
  };

  return (
    <S.CreateEcoPointWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Criar Eco Ponto</S.Title>
        <S.Label>Nome:</S.Label>
        <S.Input type="text" name="name" value={formData.name} onChange={handleChange} />

        <S.Label>Latitude:</S.Label>
        <S.Input type="text" name="latitude" value={formData.latitude} onChange={handleChange} />

        <S.Label>Longitude:</S.Label>
        <S.Input type="text" name="longitude" value={formData.longitude} onChange={handleChange} />

        <S.CheckboxLabel>
          <input type="checkbox" name="metal" checked={formData.metal} onChange={handleChange} />
          Metal
        </S.CheckboxLabel>

        <S.CheckboxLabel>
          <input type="checkbox" name="plastic" checked={formData.plastic} onChange={handleChange} />
          Plástico
        </S.CheckboxLabel>

        <S.CheckboxLabel>
          <input type="checkbox" name="paper" checked={formData.paper} onChange={handleChange} />
          Papel
        </S.CheckboxLabel>

        <S.CheckboxLabel>
          <input type="checkbox" name="glass" checked={formData.glass} onChange={handleChange} />
          Vidro
        </S.CheckboxLabel>

        <S.CheckboxLabel>
          <input type="checkbox" name="organic" checked={formData.organic} onChange={handleChange} />
          Orgânico
        </S.CheckboxLabel>

        <S.CheckboxLabel>
          <input type="checkbox" name="electronic" checked={formData.electronic} onChange={handleChange} />
          Eletrônico
        </S.CheckboxLabel>

        <S.ButtonWrapper>
          <S.BackButton onClick={handleGoBack}>Voltar</S.BackButton>
          <S.CreateButton type="submit">Criar Eco Ponto</S.CreateButton>
        </S.ButtonWrapper>
      </S.Form>
    </S.CreateEcoPointWrapper>
  );
};

export default CreateEcoPoint;
