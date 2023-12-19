import { Header } from "../../components";
import Add from "../../assets/add-point.svg";
import imgUser from "../../assets/imgUser.png";

import { CardPoint } from "../../components/CardPoint";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';



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

export function UserProfile() {
    const token = localStorage.getItem("auth.token");
    const user = JSON.parse(localStorage.getItem("auth.user") || "{}");
    const params = useParams(); // Obtém o ID do usuário da URL
    const [ecoPoints, setEcoPoints] = useState<EcoPoint[]>([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get<EcoPoint[]>('http://localhost:3001/userecopoint/' + user.id, {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            });
            setEcoPoints(Object.values(response.data));
        } catch (error) {
            console.error('Erro ao buscar os pontos: ', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);




    // variavel teste
    const imgWeb = "https://www.posgraduacaounincor.com.br/assets/Unincor/images/sem-imagem.jpg"


    /**
     * Rota delete user /user/delete/${user.id}
     * Rota delete point /point/delete/:id
     */
    ecoPoints.map((ecoPoint, index) => (console.log(ecoPoint)))
    return (
        <Container>
            <Header />
            <Main>
                <UserContainer>

                    <UserPicture
                        src={`http://localhost:3001/upload/${user.avatar}` || imgUser}
                        alt="Foto do usuário"
                        title="Foto do usuário"
                    />
                    <TextName>
                        {user.username}

                    </TextName>
                    <TextEmail>
                        {user.email}
                    </TextEmail>
                    <BtnEdit to="/user/edit">
                        Editar Perfil
                    </BtnEdit>
                    <BtnDelete onClick={() => { navigate(`/user/delete/${user.id}`); }}>
                        Excluir Conta
                    </BtnDelete>





                </UserContainer>


                <TextContainer>
                    <Title>Locais de Coleta</Title>

                    <BoxPoints>
                        <ul>
                            {ecoPoints.map((ecoPoint, index) => (

                                <CardPoint
                                    key={index}
                                    id={ecoPoint._id}
                                    image={`http://localhost:3001/upload/${ecoPoint.image}`}
                                    name={ecoPoint.name}
                                    tipo={"teste"}

                                // tipo={item.tipo} listar todos os tipos.

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