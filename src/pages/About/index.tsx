import illustration from "../../assets/illustration.svg";

import { Header, Title, Paragraph, Footer } from "../../components";

import {
  Container,
  Illustration,
  Main,
  TextContainer
} from "./style";

export function About() {
  return (
    <Container>
      <Header />
      <Main>
        <Illustration src={illustration} alt="Ilustração de um homem jogando lixo em um ponto de coleta." title="Homem jogando lixo em um ponto de coleta" />
        <TextContainer>
          <Title>Sobre nós</Title>
          <Paragraph>Esta é uma aplicação Web desenvolvida com Typescript e React feita para a disciplina de Programação para Web 2 do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal da Paraíba campus Cajazeiras.</Paragraph>
          <Paragraph>Integrantes da equipe: Hélio José, Rebehk Jordão, Daniel de Oliveira e João Victor Pinheiro.</Paragraph>
        </TextContainer>
      </Main>
      <Footer />
    </Container>
  )
}
