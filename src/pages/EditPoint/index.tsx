import pointPicture from "../../assets/point.png";

import { useState } from "react";

import { Header } from "../../components";

import {
  Container,
  Form,
  Label,
  FileInputWrapper,
  FileInput,
  ImagePreview,
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

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState(point.name);
  const [time, setTime] = useState(point.time);
  const [type, setType] = useState(point.type);
  const [management, setManagement] = useState(point.management);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
  
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

  const handleSubmit = () => {};

  return (
    <Container>
      <Header />
      <Form>
        <FileInputWrapper>
            <ImagePreview src={imagePreview ?? "https://i0.wp.com/saojose.sc.gov.br/wp-content/uploads/2022/02/ecoponto-forquilhinha-scaled.jpg?fit=1920%2C1280&ssl=1"} alt="Image Preview" />
            <FileInput type="file" name="image" accept="image/*" onChange={handleFileChange} />
        </FileInputWrapper>
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
