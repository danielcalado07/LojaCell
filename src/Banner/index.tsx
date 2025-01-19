import {element01, element02, element03, element04 } from "../assets";
import { Banner, Button, Container, DivTitulo, H1, ImagemElement03, ImagemElement04, P } from './styles';

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
                {window.innerWidth > 690 ? <ImagemElement03 src={element03} alt="Elemento 03" /> : <ImagemElement04 src={element04} alt="Elemento 04"/>}
                {window.innerWidth > 1055 && <img src={element02} alt="Elemento 02" />}
            </Banner>
        </Container>
            
        </>
    )
}

export default BannerComponent;