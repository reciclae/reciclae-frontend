import { useState } from "react";

import userPicture from "../../assets/user.png";

import {
  Button,
  Container,
  UserContainer,
  UserPicture,
  Text,
  Paragraph,
  Form,
  Input,
  Link,
  Title
} from "./style";

export function DeletePoint() {
  const point = {
    nome: "Teste",
    latitude: "2332342342",
    longitude: "-234234234",
    picture: userPicture
  };

  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <Container>
      <Title>Deletar ponto</Title>
      <UserContainer>
        <UserPicture
          src={point.picture}
          alt="Imagem do usuário"
          title="Imagem do usuário"
        />
        <Text>{point.nome}</Text>
        <Text>{point.latitude}</Text>
        <Text>{point.longitude}</Text>
      </UserContainer>
      <Paragraph>
        Tem certeza que deseja <span style={{color: "var(--cancel)"}}>excluir</span> esse ponto?
      </Paragraph>
      <Form>
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Senha"
        />
        <Button onClick={handleSubmit}>Deletar</Button>
      </Form>
      <Link to="/user">Voltar</Link>
    </Container>
  )
}
