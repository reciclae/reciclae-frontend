import { Header } from "../../components";
import Add from "../../assets/add-point.svg";
import imgUser from "../../assets/imgUser.png";

import { CardPoint } from "../../components/CardPoint";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api/index';

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
import { array } from "zod";

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
            const response = await api.get<EcoPoint[]>('/userecopoint/' + user.id, {
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

    function getTiposString(ecoPoint: EcoPoint) {
        const tipos = [];
        if (ecoPoint.metal) tipos.push("metal");
        if (ecoPoint.plastic) tipos.push("plástico");
        if (ecoPoint.paper) tipos.push("papel");
        if (ecoPoint.glass) tipos.push("vidro");
        if (ecoPoint.organic) tipos.push("orgânico");
        if (ecoPoint.electronic) tipos.push("eletrônico");
        return tipos.join(", ");
    }


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
                        src={`${process.env.REACT_APP_API_URL}/upload/${user.avatar}` || imgUser}
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
                                    image={`${process.env.REACT_APP_API_URL}/upload/${ecoPoint.image}`}
                                    name={ecoPoint.name}
                                    tipo={getTiposString(ecoPoint)}

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