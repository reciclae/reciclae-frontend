import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api";
import { schema, FormData } from "./form";

import { Header, Title, Input, Button, Link, Footer } from "../../components";

import {
  Container,
  Form,
  FormFooter,
  Text
} from "./style";

export function Signup() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if(user) navigate("/");
  }, [user]);

  const submit = async ({
    userName,
    email,
    password,
    confirmPassword
  }: FormData) => {
    try {
      await api.post("signin", {
        userName,
        email,
        password,
        confirmPassword
      });

      await login(email, password);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit(submit)}>
        <Title>Cadastro</Title>

        <Input<FormData>
          label="Nome de usuário:"
          name="userName"
          type="text"
          placeholder="Nome de usuário"
          register={register}
          error={errors.userName}
        />
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
        <Input<FormData>
          label="Confirme sua senha:"
          name="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
          register={register}
          error={errors.confirmPassword}
        />

        <Button>Cadastrar</Button>

        <FormFooter>
          <Text>Já é usuário da plataforma?</Text>
          <Link to="/login">Faça login</Link>
        </FormFooter>
      </Form>
      <Footer />
    </Container>
  )
}
