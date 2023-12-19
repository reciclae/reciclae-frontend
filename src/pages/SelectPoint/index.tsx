import { Header, Footer } from "../../components";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ImgRoute from "../../assets/route.png"
import {
  Container,
  Title,
  Text,
  ImgPoint,
  Box,
  BoxInfo,
  Button,
  ImgButon
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

export function SelectPoint() {

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
  const token = localStorage.getItem("auth.token");
  const { id } = useParams();

  const imgWeb = "https://www.posgraduacaounincor.com.br/assets/Unincor/images/sem-imagem.jpg"

  const fetchData = async () => {
    try {
      const response = await axios.get<EcoPoint>('http://localhost:3001/ecopoint/' + id, {
        headers: {
          'Authorization': 'Bearer ' + token
        },
      });
      setEcoPoint(response.data);
    } catch (error) {
      console.error('Erro ao buscar o ponto: ', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <Container>
      <Header />
      <Box>
        <BoxInfo>

          <ImgPoint src={`http://localhost:3001/upload/${ecoPoint.image}` ?? imgWeb}
            alt="Foto do Ponto"
            title="Foto do usuário" />
          <Title>{ecoPoint.name}</Title>
          <Text>
            {ecoPoint.metal ? "- Metal " : null}
            {ecoPoint.plastic ? "- Plástico " : null}
            {ecoPoint.paper ? "- Papel " : null}
            {ecoPoint.glass ? "- Vidro " : null}
            {ecoPoint.organic ? "- Orgânico " : null}
            {ecoPoint.electronic ? "- Eletrônico " : null}
          </Text>

          <Button to="/map">
            <ImgButon src={ImgRoute} />
            Mapa</Button>

        </BoxInfo>
      </Box>
      <Footer />
    </Container>
  );
}