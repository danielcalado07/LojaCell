import { banner01, element01, element02, element03 } from "../assets";
import { Banner, Button, Container, DivTitulo, H1, ImagemElement03, P } from './styles';

function BannerComponent() {
    return (
        <>
        <Container>
            <Banner>
                {window.innerWidth > 1055 && <img src={element01} alt="Elemento 01" />}
                <DivTitulo>
                    <H1>SEU CELULAR NOVO DE NOVO!</H1>
                    <P>Assistência técnica especializada e os melhores modelos à venda.</P>
                    <Button>Entre em contato</Button>
                </DivTitulo>
                <ImagemElement03 src={element03} alt="Elemento 03"/>
                {window.innerWidth > 1055 && <img src={element02} alt="Elemento 02" />}
            </Banner>
        </Container>
            
        </>
    )
}

export default BannerComponent;