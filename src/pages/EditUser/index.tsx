import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header/index';

export const EditUser = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("auth.user") || "{}");
  const token = localStorage.getItem("auth.token");
  const [formData, setFormData] = useState<{
    userName: string;
    password: string;
    confirmPassword: string;
    image: File | null;
    user: string;
  }>({
    userName: user.username,
    password: '',
    confirmPassword: '',
    image: null,
    user: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Função para lidar com a mudança do input de arquivo
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append('userName', formData.userName);
    formDataWithImage.append('password', formData.password);
    formDataWithImage.append('confirmPassword', formData.confirmPassword);
    formDataWithImage.append('user', user.id ?? '');

    if (formData.image !== null) {
      formDataWithImage.append('image', formData.image);
    }

    try {
      const response = await axios.put('http://localhost:3001/user/' + user.id, formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + token,
        },
      });

      if (response.data) {
        alert('Usuário atualizado com sucesso!');
        navigate(`/user`);
      } else {
        alert('Falha ao atualizar o usuário. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao atualizar usuáro. Por favor, tente novamente mais tarde.' + error);
    }
  };

  return (
    <>
      <Header />
      <S.UpdateUserWrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Atualizar usuário</S.Title>

          <S.FileInputWrapper>
            <S.ImagePreview src={imagePreview ?? `http://localhost:3001/upload/${user.avatar}`} alt="Image Preview" />
            <S.FileInput type="file" name="image" accept="image/*" onChange={handleFileChange} />
          </S.FileInputWrapper>

          <S.Label>Nome de usuário:</S.Label>
          <S.Input type="text" name="userName" value={formData.userName} onChange={handleChange} />

          <S.Label>Senha:</S.Label>
          <S.Input type="password" name="password" value={formData.password} onChange={handleChange} />

          <S.Label>Confirme a senha:</S.Label>
          <S.Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

          <S.ButtonWrapper>
            <>
              <S.Back to="/user">Voltar</S.Back>
            </>
            <S.CreateButton type="submit">Atualizar</S.CreateButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.UpdateUserWrapper>

    </>
  );
};
