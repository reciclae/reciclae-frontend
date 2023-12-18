import { Header } from "../../components";
import Add from "../../assets/add-point.svg";
import imgUser from "../../assets/imgUser.png";

import { CardPoint } from "../../components/CardPoint";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


import {
    Container,
    Main,
    TextContainer,
    Button,
    UserContainer,
    TextName,
    TextEmail,
    Title,
    Img,
    UserPicture,
    BtnEdit,
    BtnDelete,
    BoxPoints
} from "./style";

const userData = {
    name: "João da Silva",
    email: "joao@silva.com",
    image: null,
};


export function Test() {
    const token = localStorage.getItem("auth.token");
    const user = localStorage.getItem("auth.user");
    const params = useParams(); // Obtém o ID do usuário da URL



    // const [userData, setUserData] = useState<any>({});

    // Função para buscar os dados do usuário
    // const fetchUserData = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:3001//users/${params.id}`, {
    //             headers: {
    //                 // O token tem que vir abaixo.
    //                 'Authorization': 'Bearer ' + token
    //             },
    //         });
    //         setUserData(response.data);
    //         console.log(response.data)
    //     } catch (error) {
    //         console.error('Erro ao fazer a requisição:', error);
    //         alert('Erro ao carregar os dados do usuário. Tente novamente mais tarde.');
    //     }
    // };

    // useEffect(() => {
    //     fetchUserData();
    // }, []);


    // variavel teste
    const imgWeb = "https://www.posgraduacaounincor.com.br/assets/Unincor/images/sem-imagem.jpg"


    const [items, setItems] = useState([
        {
            id: 1,
            image: imgWeb,
            name: "Item 1",
            tipo: "Este é o item 1.",
        },
        {
            id: 2,
            image: imgWeb,
            name: "Item 2",
            tipo: "Este é o item 2.",
        },
        {
            id: 3,
            image: imgWeb,
            name: "Item 2",
            tipo: "Este é o item 2.",
        },
        {
            id: 4,
            image: imgWeb,
            name: "Item 2",
            tipo: "Este é o item 2.",
        },
    ]);
    return (
        <Container>
            <Header />
            <Main>
                <UserContainer>

                    <UserPicture
                        src={userData.image || imgUser}
                        alt="Foto do usuário"
                        title="Foto do usuário"
                    />
                    <TextName>
                        {userData.name}

                    </TextName>
                    <TextEmail>
                        {userData.email}
                    </TextEmail>
                    <BtnEdit to="/user/edit">
                        Editar Perfil
                    </BtnEdit>
                    <BtnDelete to="/user/delete">
                        Excluir Conta
                    </BtnDelete>





                </UserContainer>


                <TextContainer>
                    <Title>Locais de Coleta</Title>

                    <BoxPoints>
                        <ul>
                            {items.map((item) => (
                                <CardPoint
                                    key={item.id}
                                    image={item.image}
                                    name={item.name}
                                    tipo={item.tipo}

                                />
                            ))}
                        </ul>
                    </BoxPoints>
                    <Button to="/map">
                        <Img src={Add} alt="Logotipo do ReciclaAE" title="Logotipo do ReciclaAE" />
                        Adicionar Ponto De Coleta
                    </Button>

                </TextContainer>
            </Main>

        </Container>
    )
}