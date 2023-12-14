import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthContext } from "../../context/AuthContext";
import { schema, FormData } from "./form";

import { Header, Title, Input, Button, Link, Footer } from "../../components";

import {
  Container,
  Form,
  FormFooter,
  Text
} from "./style";

export function Login() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if(user) navigate("/");
  }, [user]);

  const submit = async ({
    email,
    password
  }: FormData) => {
    try {
      await login(email, password);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit(submit)}>
        <Title>Login</Title>

        <Input<FormData>
          label="Email:"
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          error={errors.email}
        />
        <Input<FormData>
          label="Senha:"
          name="password"
          type="password"
          placeholder="Senha"
          register={register}
          error={errors.password}
        />

        <Button>Entrar</Button>

        <FormFooter>
          <Text>Ainda não é usuário da plataforma?</Text>
          <Link to="/signup">Cadastre-se</Link>
        </FormFooter>
      </Form>
      <Footer />
    </Container>
  )
}
