import { Header } from "../../components";
import Add from "../../assets/add-point.svg";
import imgUser from "../../assets/imgUser.png";

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
    BtnDelete
} from "./style";

const userData = {
    name: "João da Silva",
    email: "joao@silva.com",
    image: null,
};


export function User() {
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


                    <Button to="/map">
                        <Img src={Add} alt="Logotipo do ReciclaAE" title="Logotipo do ReciclaAE" />
                        Adicionar Ponto De Coleta
                    </Button>

                </TextContainer>
            </Main>

        </Container>
    )
}