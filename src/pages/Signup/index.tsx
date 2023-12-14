import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api";

import { Title, Input, Button, Link } from "../../components";

import {
  Container,
  Form,
  FormFooter,
  Text
} from "./style";

export function Signup() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  useEffect(() => {
    if(user) navigate("/");
  }, [user]);

  // TODO: tratar "fields missing"
  // TODO: tratar "user already registered"
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();

    try {
      await api.post("signin", {
        userName: name,
        email,
        password,
        confirmPassword: verifyPassword
      });

      await login(email, password);
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form>
        <Input
          label="Nome de usuário:"
          name="username"
          type="text"
          placeholder="Nome de usuário"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          label="Email:"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <Input
          label="Senha:"
          name="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Senha"
        />
        <Input
          label="Confirme sua senha:"
          name="verifyPassword"
          onChange={e => setVerifyPassword(e.target.value)}
          value={verifyPassword}
          type="password"
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
