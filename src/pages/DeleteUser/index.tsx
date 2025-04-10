import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header/index';
import { Footer } from '../../components/Footer/index';
import { api } from '../../api/index';

export const DeleteUser = () => {
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
      const response = await api.delete('/user/' + user.id, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });

      if (response.data) {
        alert('Usuário deletado com sucesso!');
        navigate(`/`);
      } else {
        alert('Falha ao deletar o usuário. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao deletar usuáro. Por favor, tente novamente mais tarde.' + error);
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>Deletar Usuário</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.UserAvatar
            src={
              `${process.env.REACT_APP_API_URL}/upload/${user.avatar}`
            }
            alt="Image Preview"
          />
          <S.Paragraph>{formData.userName}</S.Paragraph>
          <S.Paragraph>
            Tem certeza que deseja <span style={{ color: "var(--cancel)" }}>deletar</span> sua conta?
          </S.Paragraph>
          <S.Text>Senha:</S.Text>
          <S.Input type="password" name="password" value={formData.password} onChange={handleChange} />

          <S.Text>Confirme a senha:</S.Text>
          <S.Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          <br />
          <S.Button type="submit">Deletar</S.Button><br />
          <S.Link to="/user">Voltar</S.Link>
        </S.Form>
      </S.Container>
    </>
  );
};
