// Importe as dependências necessárias
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './style';
import { Header } from '../../components/Header/index';
import { Footer } from '../../components/Footer/index';

// Defina a interface para os parâmetros da URL

export const EditPoint: React.FC = () => {
  // Obtenha os parâmetros da URL usando useParams
  const { id } = useParams();
  const token = localStorage.getItem('auth.token');
  const user = localStorage.getItem('auth.user');
  const navigation = useNavigate();

  // Defina o estado inicial com os dados do ponto
  const [formData, setFormData] = useState<{
    name: string;
    metal: boolean;
    plastic: boolean;
    paper: boolean;
    glass: boolean;
    organic: boolean;
    electronic: boolean;
    image: File | null;
  }>({
    name: '',
    metal: false,
    plastic: false,
    paper: false,
    glass: false,
    organic: false,
    electronic: false,
    image: null,
  });

  // Estado para visualização prévia da imagem
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // UseEffect para buscar os dados do ponto ao carregar a página
  useEffect(() => {
    const fetchPointData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/ecopoint/${id}`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer '+ token
          },
        });

        const pointData = response.data;

        setFormData({
          name: pointData.name,
          metal: pointData.metal,
          plastic: pointData.plastic,
          paper: pointData.paper,
          glass: pointData.glass,
          organic: pointData.organic,
          electronic: pointData.electronic,
          image: null, // Se quiser exibir a imagem atual, pode preencher aqui
        });

        // Se quiser exibir a imagem atual, configure o imagePreview aqui
      } catch (error) {
        console.error('Erro ao buscar os dados do ponto:', error);
        // Tratar o erro, talvez redirecionar para uma página de erro
      }
    };

    fetchPointData();
  }, [id, token]);

  // Handlers para mudanças nos campos do formulário
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

  // Handler para enviar o formulário de edição
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append('name', formData.name);
    formDataWithImage.append('metal', String(formData.metal));
    formDataWithImage.append('plastic', String(formData.plastic));
    formDataWithImage.append('paper', String(formData.paper));
    formDataWithImage.append('glass', String(formData.glass));
    formDataWithImage.append('organic', String(formData.organic));
    formDataWithImage.append('electronic', String(formData.electronic));

    if (formData.image !== null) {
      formDataWithImage.append('image', formData.image);
    }

    try {
      const response = await axios.put(`http://localhost:3001/ecopoint/${id}`, formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer '+ token
        },
      });

      if (response.data) {
        alert('Eco ponto atualizado com sucesso!');
        // Redirecionar para a página de detalhes do ponto ou outra página após a edição
        navigation(`/ecopoint/${id}`);
      } else {
        alert('Falha ao editar o eco ponto. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao editar o eco ponto. Por favor, tente novamente mais tarde.' + error);
    }
  };

  return (
    <>
      <Header />
      <S.EditEcoPointWrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Editar Eco Ponto</S.Title>

          <S.FileInputWrapper>
            <S.ImagePreview
              src={
                imagePreview ??
                'https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg'
              }
              alt="Image Preview"
            />
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
            <S.Link to={`/user`}>Voltar</S.Link>
            <S.CreateButton type="submit">Salvar alterações</S.CreateButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.EditEcoPointWrapper>
      <Footer />
    </>
  );
};
