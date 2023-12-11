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

export function DeleteUser() {
  const user = {
    name: "Teste",
    email: "test@email.com",
    password: "password",
    picture: userPicture
  };

  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <Container>
      <Title>Deletar usuário</Title>
      <UserContainer>
        <UserPicture
          src={user.picture}
          alt="Imagem do usuário"
          title="Imagem do usuário"
        />
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </UserContainer>
      <Paragraph>
        Tem certeza que deseja <span style={{color: "var(--cancel)"}}>excluir</span> sua conta?
      </Paragraph>
      <Form>
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Senha"
        />
        <Button onClick={handleSubmit}>Deletar</Button>
      </Form><br />
      <Link to="/user">Voltar</Link>
    </Container>
  )
}
