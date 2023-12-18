

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ImgEdit from "../../assets/edit-point.svg"
import ImgDelete from "../../assets/delete-point.svg"

import {
    Container,
    Title,
    Text,
    ImgPoint,
    Box,
    BoxInfo,
    BtnEdit,
    BtnDelete,
    ImgButon,
    BoxButon,
    BoxImg
} from "./style";

const imgWeb = "https://www.posgraduacaounincor.com.br/assets/Unincor/images/sem-imagem.jpg"
// variavel teste


interface CardPointProps {
    image: string;
    name: string;
    tipo: string;
}

export function CardPoint({ image, name, tipo }: CardPointProps) {
    return (
        <Container>

            <Box>
                <BoxImg>
                    <ImgPoint src={image || imgWeb}
                        alt="Foto do usuário" />
                </BoxImg>


                <BoxInfo>
                    <Title>{name}</Title>
                    <Text>{tipo}</Text>
                </BoxInfo>
                <BoxButon>
                    <BtnEdit>
                        <ImgButon src={ImgEdit} />
                    </BtnEdit>
                    <BtnDelete>
                        <ImgButon src={ImgDelete} />
                    </BtnDelete>
                </BoxButon>
            </Box>

        </Container>
    );
}