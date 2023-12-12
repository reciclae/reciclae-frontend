import { useState } from "react";

import { Title, Input, Button, Link } from "../../components";

import {
  Container,
  Form,
  FormFooter,
  Text
} from "./style";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form>
        <Input
          label="Nome:"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          label="Email:"
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email"
        />
        <Input
          label="Senha:"
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="text"
          placeholder="Senha"
        />
        <Input
          label="Confirme sua senha:"
          onChange={e => setVerifyPassword(e.target.value)}
          value={verifyPassword}
          type="text"
          placeholder="Confirmar senha"
        />

        <Button onClick={handleSubmit}>Cadastrar</Button>
      </Form>
      <FormFooter>
        <Text>Já é usuário da plataforma?</Text>
        <Link to="/login">Faça login</Link>
      </FormFooter>
    </Container>
  )
}
