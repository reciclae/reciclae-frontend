import { Header, Footer } from "../../components";
import Graphic from "../../components/Graphic";
import {
    Container,
    Main,
    TextContainer,
    Signup,
    GraphicContainer,
    Text,
    Title,
    TextGraphic
} from "./style";

export function HomePage() {
    return (
        <Container>
            <Header />
            <Main>
                <GraphicContainer>
                    <TextGraphic>
                        Os tipos de lixo mais reciclados de Cajazeiras

                    </TextGraphic>
                    <Graphic />

                </GraphicContainer>

                <TextContainer>
                    <Title>ReciclaAE</Title>
                    <Text>
                        Descubra o Ponto de Coleta de Lixo mais próximo de você ou registre o seu próprio local de reciclagem. Faça a diferença e ajude a preservar o nosso planeta, junte-se a nós na missão de reciclar e salvar o meio ambiente.
                    </Text>

                    <Signup to="/signup">Comece Agora</Signup>

                </TextContainer>
            </Main>
            <Footer />
        </Container>
    )
}