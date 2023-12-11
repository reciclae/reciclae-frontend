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
    image: null,
    user: '6574c7b396631c6b720d7914', // O ID do usuário deve vir aqui.
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  // Função para lidar com a mudança do input de arquivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
  
    setFormData((prevData) => ({
      ...prevData,
      image: selectedFile !== undefined ? selectedFile : null,
    } as typeof prevData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formDataWithImage = new FormData();
    formDataWithImage.append('name', formData.name);
    formDataWithImage.append('latitude', formData.latitude);
    formDataWithImage.append('longitude', formData.longitude);
    formDataWithImage.append('metal', String(formData.metal));
    formDataWithImage.append('plastic', String(formData.plastic));
    formDataWithImage.append('paper', String(formData.paper));
    formDataWithImage.append('glass', String(formData.glass));
    formDataWithImage.append('organic', String(formData.organic));
    formDataWithImage.append('electronic', String(formData.electronic));
    formDataWithImage.append('user', String(formData.user));
  
    if (formData.image !== null) {
      formDataWithImage.append('image', formData.image);
    }
  
    try {
      alert("entrou");
      const response = await axios.post('http://localhost:3001/ecopoint', formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // O token tem que vir abaixo.
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzRjN2IzOTY2MzFjNmI3MjBkNzkxNCIsImlhdCI6MTcwMjI2NjEyOCwiZXhwIjoxNzAyMzUyNTI4fQ.tdk5zQ5Mt5r9RaNdswMxFQJbZYXpdyDYcwaNvAG8GJY'
        },
      });
      
      alert(response.data);

      if (response.data) {
        alert('Eco ponto criado com sucesso!');
      } else {
        alert('Falha ao criar o eco ponto. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao criar o eco ponto. Por favor, tente novamente mais tarde.' + error);
    }
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();    
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

        <S.FileInputWrapper>
          <S.Label>Foto:</S.Label>
          <S.FileInput type="file" name="image" accept="image/*" onChange={handleFileChange} />
        </S.FileInputWrapper>

        <S.ButtonWrapper>
          <S.BackButton onClick={handleGoBack}>Voltar</S.BackButton>
          <S.CreateButton type="submit">Criar Eco Ponto</S.CreateButton>
        </S.ButtonWrapper>
      </S.Form>
    </S.CreateEcoPointWrapper>
  );
};

export default CreateEcoPoint;
