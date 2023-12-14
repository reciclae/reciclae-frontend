import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { Title, Input, Button, Link } from "../../components";

import {
  Container,
  Form,
  FormFooter,
  Text
} from "./style";

export function Login() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(user) navigate("/");
  }, [user]);

  // TODO: tratar "fields missing"
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();

    try {
      await login(email, password);
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form>
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

        <Button onClick={handleSubmit}>Entrar</Button>
      </Form>
      <FormFooter>
        <Text>Ainda não é usuário da plataforma?</Text>
        <Link to="/signup">Cadastre-se</Link>
      </FormFooter>
    </Container>
  )
}
