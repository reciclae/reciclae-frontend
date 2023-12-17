import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style';
import { useParams } from 'react-router-dom';
import {Header} from '../../components/Header/index';
import {Footer} from '../../components/Footer/index';

export const CreatePoint = () => {
  const { latitude, longitude } = useParams();
  const user = JSON.parse(localStorage.getItem("auth.user") || "");
  const [formData, setFormData] = useState<{
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
    user: string;
  }>({
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
    user: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
  
    setFormData((prevData) => ({
      ...prevData,
      image: selectedFile !== undefined ? selectedFile : null,
    }));
  
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  }; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append('name', formData.name);
    formDataWithImage.append('latitude', latitude ?? '');
    formDataWithImage.append('longitude', longitude ?? '');
    formDataWithImage.append('metal', String(formData.metal));
    formDataWithImage.append('plastic', String(formData.plastic));
    formDataWithImage.append('paper', String(formData.paper));
    formDataWithImage.append('glass', String(formData.glass));
    formDataWithImage.append('organic', String(formData.organic));
    formDataWithImage.append('electronic', String(formData.electronic));
    formDataWithImage.append('user', user.id ?? '');

    if (formData.image !== null) {
      formDataWithImage.append('image', formData.image);
    }

    try {
      const response = await axios.post('http://localhost:3001/ecopoint', formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
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

  return (
    <>
    <Header/>
    <S.CreateEcoPointWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Criar Eco Ponto</S.Title>

        <S.FileInputWrapper>
          <S.ImagePreview src={imagePreview ?? "https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg"} alt="Image Preview" />
          <S.FileInput type="file" name="image" accept="image/*" onChange={handleFileChange} />
        </S.FileInputWrapper>

        <S.Label>Nome:</S.Label>
        <S.Input type="text" name="name" value={formData.name} onChange={handleChange} />

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
          <S.Link to='/map'>Voltar</S.Link>
          <S.CreateButton type="submit">Criar Eco Ponto</S.CreateButton>
        </S.ButtonWrapper>
      </S.Form>
    </S.CreateEcoPointWrapper>
    <Footer/>
    </>
  );
};
