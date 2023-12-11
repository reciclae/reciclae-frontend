import pointPicture from "../../assets/point.png";

import { useState } from "react";

import { Header } from "../../components";

import {
  Container,
  Form,
  Label,
  ImageInput,
  TextInput,
  Options,
  BackLink,
  SubmitButton
} from "./style";

export function EditPoint() {
  const point = {
    picture: pointPicture,
    name: "Estação de Reciclagem",
    time: "08:00 às 12:00",
    type: "Estação de Reciclagem",
    management: "Reciclagem"
  };

  const [picture, setPicture] = useState("");
  const [name, setName] = useState(point.name);
  const [time, setTime] = useState(point.time);
  const [type, setType] = useState(point.type);
  const [management, setManagement] = useState(point.management);

  const handleSubmit = () => {};

  return (
    <Container>
      <Header />
      <Form>
        <Label htmlFor="picture">Imagem do local de coleta:</Label>
        <ImageInput id="picture" type="image" />
        <Label htmlFor="name">Nome do local de coleta:</Label>
        <TextInput
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Label htmlFor="time">Horário de funcionamento:</Label>
        <TextInput
          id="time"
          type="text"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <Label htmlFor="type">Tipo do local de coleta:</Label>
        <TextInput
          id="type"
          type="text"
          value={type}
          onChange={e => setType(e.target.value)}
        />
        <Label htmlFor="management">Gerenciamento do lixo:</Label>
        <TextInput
          id="management"
          type="text"
          value={management}
          onChange={e => setManagement(e.target.value)}
        />
        <Options>
          <BackLink to="/user">Voltar</BackLink>
          <SubmitButton
            onClick={handleSubmit}
          >Confirmar</SubmitButton>
        </Options>
      </Form>
    </Container>
  );
}
