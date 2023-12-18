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

const imgWeb = "https://www.posgraduacaounincor.com.br/assets/Unincor/images/sem-imagem.jpg"
// variavel teste
const dataPoint = {
    name: "ReciclaAe",
    Tipo: "Metal, Plastico, Papel",
    image: null,
};
//função de conexão com axios

export function SelectPoint() {
    return (
        <Container>
            <Header />
            <Box>
                <BoxInfo>

                    <ImgPoint src={dataPoint.image || imgWeb}
                        alt="Foto do usuário"
                        title="Foto do usuário" />
                    <Title>{dataPoint.name}</Title>
                    <Text>{dataPoint.Tipo}</Text>
                    <Button>
                        <ImgButon src={ImgRoute} />
                        Rota</Button>

                </BoxInfo>
            </Box>
            <Footer />
        </Container>
    );
}