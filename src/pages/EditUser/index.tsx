import { useState } from "react";

import userPicture from "../../assets/user.png";

import {
  Button,
  Container,
  UserContainer,
  UserPicture,
  Text,
  Form,
  Input,
  Link,
  Title
} from "./style";

export function EditUser() {
  const user = {
    name: "Teste",
    email: "test@email.com",
    password: "password",
    picture: userPicture
  };

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <Container>
      <Title>Editar usuário</Title>
      <UserContainer>
        <UserPicture src={user.picture} alt="Imagem do usuário" title="Imagem do usuário" />
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </UserContainer>
      <Form>
        <Input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Novo nome"
        />
        <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Novo email"
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Nova senha"
        />
        <Input
          onChange={e => setOldPassword(e.target.value)}
          value={oldPassword}
          type="password"
          placeholder="Confirmar nova senha"
        />
        <Button onClick={handleSubmit}>Editar</Button>
      </Form>
      <Link to="/user">Voltar</Link>
    </Container>
  )
}
