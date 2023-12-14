import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthContext } from "../../context/AuthContext";
import { schema, FormData } from "./form";

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
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(submit)}>
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
      </Form>
      <FormFooter>
        <Text>Ainda não é usuário da plataforma?</Text>
        <Link to="/signup">Cadastre-se</Link>
      </FormFooter>
    </Container>
  )
}
