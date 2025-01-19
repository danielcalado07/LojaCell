import { definicoes, entrega, escudo, garantido } from "../assets";
import { Container, DivNotificacao, H2, ImgNotificacao } from "./styles";

function BarraNotificacao() {
    return (
        <Container>
            <DivNotificacao>
                <ImgNotificacao src={escudo} alt="icone de check"/>
                <H2>Compra segura</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={garantido} alt="icone de check"/>
                <H2>Garantia 3 meses</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={definicoes} alt="icone de check"/>
                <H2>Suporte especializado</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={entrega} alt="icone de check"/>
                <H2>Entrega rápida</H2>
            </DivNotificacao>
        </Container>
    );
}

export default BarraNotificacao;